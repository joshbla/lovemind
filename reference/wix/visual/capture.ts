import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { spawn } from "node:child_process";

const baseUrl = "https://jblakezsmith.wixsite.com/lovemind";
const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const outputDir = new URL("./screenshots/", import.meta.url);
const viewports = [
  { name: "desktop", width: 1440, height: 1000, mobile: false, scale: 1 },
  { name: "mobile", width: 390, height: 844, mobile: true, scale: 1 },
] as const;
const manifestUrl = new URL("../content/route-manifest.json", import.meta.url);

type Viewport = (typeof viewports)[number];
type Capture = {
  route: string;
  requestedUrl: string;
  finalUrl?: string;
  viewport: Viewport;
  filename?: string;
  title?: string;
  width?: number;
  height?: number;
  evidence?: Record<string, unknown>;
  error?: string;
};

class Cdp {
  private nextId = 1;
  private pending = new Map<number, { resolve: (value: any) => void; reject: (error: Error) => void }>();
  private listeners = new Map<string, Array<(params: any) => void>>();
  private socket: WebSocket;

  constructor(socket: WebSocket) {
    this.socket = socket;
    socket.addEventListener("message", (event) => {
      const message = JSON.parse(String(event.data));
      if (message.id) {
        const waiter = this.pending.get(message.id);
        if (!waiter) return;
        this.pending.delete(message.id);
        if (message.error) waiter.reject(new Error(message.error.message));
        else waiter.resolve(message.result);
        return;
      }
      for (const listener of this.listeners.get(message.method) ?? []) listener(message.params);
    });
  }

  send(method: string, params: Record<string, unknown> = {}, sessionId?: string) {
    return new Promise<any>((resolve, reject) => {
      const id = this.nextId++;
      this.pending.set(id, { resolve, reject });
      this.socket.send(JSON.stringify({ id, method, params, sessionId }));
    });
  }

  once(method: string, timeout = 45_000) {
    return new Promise<any>((resolve, reject) => {
      const listeners = this.listeners.get(method) ?? [];
      const timer = setTimeout(() => reject(new Error(`Timed out waiting for ${method}`)), timeout);
      listeners.push((params) => {
        clearTimeout(timer);
        resolve(params);
      });
      this.listeners.set(method, listeners);
    });
  }
}

function slugFor(url: string) {
  const parsed = new URL(url);
  const raw = parsed.pathname.slice("/lovemind".length).replace(/^\/+|\/+$/g, "") || "home";
  const clean = decodeURIComponent(raw)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  if (clean.length <= 90) return clean;
  return `${clean.slice(0, 80)}-${createHash("sha1").update(raw).digest("hex").slice(0, 8)}`;
}

async function loadRoutes() {
  const manifest = JSON.parse(await readFile(manifestUrl, "utf8")) as {
    routes: Array<{ originalUrl: string }>;
  };
  const urls = manifest.routes.map(({ originalUrl }) => originalUrl);
  if (urls.length !== 48 || new Set(urls).size !== urls.length) {
    throw new Error(`Expected 48 unique manifest routes, received ${urls.length}`);
  }
  return urls;
}

function redact(value: unknown): unknown {
  if (typeof value === "string") {
    return value
      .replace(/\+?1?\s*\(?\d{3}\)?[\s.-]*\d{3}[\s.-]*\d{4}/g, "[phone removed]")
      .replace(/\d{1,6}\s+[A-Za-z]+(?:\s+[A-Za-z]+){0,2}\s+(?:Blvd|Boulevard|St|Street|Ave|Avenue|Rd|Road)(?:\s+Ste\s+\d+)?(?:\s+#?\d+)?(?:\s+[A-Za-z]+,?\s+[A-Z]{2}\s+\d{5})?/gi, "[street address removed]")
      .replace(/Ste\s+\d+\s+#?\d+\s+[A-Za-z]+,?\s+[A-Z]{2}\s+\d{5}/gi, "[street address removed]");
  }
  if (Array.isArray(value)) return value.map(redact);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, redact(item)]));
  }
  return value;
}

async function waitForChrome(port: number) {
  for (let attempt = 0; attempt < 60; attempt++) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json/version`);
      if (response.ok) return response.json() as Promise<{ webSocketDebuggerUrl: string }>;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error("Chrome did not expose its debugging endpoint");
}

async function evaluate(cdp: Cdp, expression: string) {
  const result = await cdp.send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
  return result.result.value;
}

async function capture(cdp: Cdp, url: string, viewport: Viewport): Promise<Capture> {
  const route = new URL(url).pathname.slice("/lovemind".length) || "/";
  const record: Capture = { route, requestedUrl: url, viewport };
  try {
    await cdp.send("Emulation.setDeviceMetricsOverride", {
      width: viewport.width,
      height: viewport.height,
      deviceScaleFactor: viewport.scale,
      mobile: false,
      screenWidth: viewport.width,
      screenHeight: viewport.height,
    });
    await cdp.send("Emulation.setUserAgentOverride", {
      userAgent: viewport.mobile
        ? "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"
        : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
      platform: viewport.mobile ? "iPhone" : "MacIntel",
      mobile: viewport.mobile,
    });
    if (viewport.mobile) {
      await cdp.send("Emulation.setTouchEmulationEnabled", { enabled: true, maxTouchPoints: 5 });
    } else {
      await cdp.send("Emulation.setTouchEmulationEnabled", { enabled: false });
    }
    const loaded = cdp.once("Page.loadEventFired");
    await cdp.send("Page.navigate", { url });
    await loaded;
    await evaluate(cdp, `(async () => {
      await document.fonts.ready;
      await new Promise(resolve => setTimeout(resolve, 4500));
      window.scrollTo(0, document.documentElement.scrollHeight);
      await new Promise(resolve => setTimeout(resolve, 1200));
      window.scrollTo(0, 0);
      await new Promise(resolve => setTimeout(resolve, 600));
    })()`);
    const evidence = await evaluate(cdp, `(() => {
      const visible = (el) => {
        const r = el.getBoundingClientRect();
        const s = getComputedStyle(el);
        return r.width > 0 && r.height > 0 && s.display !== 'none' && s.visibility !== 'hidden';
      };
       const simplify = (el) => ({
         tag: el.tagName.toLowerCase(),
         text: (el.textContent || el.getAttribute('aria-label') || el.getAttribute('title') || '').trim().replace(/\s+/g, ' ').slice(0, 160),
        aria: el.getAttribute('aria-label'),
        role: el.getAttribute('role'),
      });
      const all = [...document.querySelectorAll('*')];
      const fixed = all.filter(el => visible(el) && ['fixed', 'sticky'].includes(getComputedStyle(el).position)).slice(0, 20).map(el => ({...simplify(el), position: getComputedStyle(el).position}));
      const animated = all.filter(el => visible(el) && (getComputedStyle(el).animationName !== 'none' || getComputedStyle(el).transitionDuration.split(',').some(v => parseFloat(v) > 0))).slice(0, 30).map(el => ({...simplify(el), animation: getComputedStyle(el).animationName, transition: getComputedStyle(el).transitionDuration}));
      const nav = [...document.querySelectorAll('nav, header, [role=navigation]')].filter(visible).slice(0, 10).map(simplify);
      const controls = [...document.querySelectorAll('button, [role=button], input, textarea, select')].filter(visible).slice(0, 40).map(simplify);
      const embeds = [...document.querySelectorAll('iframe, video, audio, canvas')].filter(visible).map(el => ({...simplify(el), src: el.getAttribute('src')}));
       const forms = [...document.forms].filter(visible).map(form => ({ text: (form.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 250), fields: [...form.elements].map(simplify) }));
       const transparent = all.filter(el => visible(el) && parseFloat(getComputedStyle(el).opacity) < 1).slice(0, 20).map(el => ({...simplify(el), opacity: getComputedStyle(el).opacity}));
       return { title: document.title, finalUrl: location.href, nav, fixed, animated, controls, embeds, forms, transparent, bodyText: document.body.textContent.trim().replace(/\s+/g, ' ').slice(0, 1000) };
     })()`);
    const metrics = await cdp.send("Page.getLayoutMetrics");
    const width = viewport.width;
    const height = Math.ceil(metrics.cssContentSize.height);
    const image = await cdp.send("Page.captureScreenshot", {
      format: "png",
      captureBeyondViewport: true,
      fromSurface: true,
      clip: { x: 0, y: 0, width, height, scale: 1 },
    });
    const filename = `${slugFor(url)}.${viewport.name}.png`;
    await writeFile(new URL(filename, outputDir), Buffer.from(image.data, "base64"));
    Object.assign(record, { filename: `screenshots/${filename}`, title: evidence.title, finalUrl: evidence.finalUrl, width, height, evidence: redact(evidence) });
  } catch (error) {
    record.error = error instanceof Error ? error.message : String(error);
  }
  return record;
}

async function main() {
  await mkdir(outputDir, { recursive: true });
  const urls = await loadRoutes();
  const port = 9333;
  const chrome = spawn(chromePath, [
    "--headless=new",
    "--disable-gpu",
    "--disable-background-networking",
    "--disable-features=Translate,OptimizationHints,MediaRouter",
    "--hide-scrollbars",
    `--remote-debugging-port=${port}`,
    "--user-data-dir=/tmp/lovemind-wix-capture",
    "about:blank",
  ], { stdio: "ignore" });
  const records: Capture[] = [];
  try {
    const version = await waitForChrome(port);
    const socket = new WebSocket(version.webSocketDebuggerUrl);
    await new Promise<void>((resolve, reject) => {
      socket.addEventListener("open", () => resolve(), { once: true });
      socket.addEventListener("error", () => reject(new Error("Could not connect to Chrome")), { once: true });
    });
    const cdp = new Cdp(socket);
    const { targetId } = await cdp.send("Target.createTarget", { url: "about:blank" });
    const { sessionId } = await cdp.send("Target.attachToTarget", { targetId, flatten: true });
    const session = new Proxy(cdp, {
      get(target, property) {
        if (property !== "send") return Reflect.get(target, property);
        return (method: string, params: Record<string, unknown> = {}) => target.send(method, params, sessionId);
      },
    }) as Cdp;
    // Events from flattened sessions arrive on the browser socket with the same method names.
    await session.send("Page.enable");
    await session.send("Runtime.enable");
    for (const url of urls) {
      for (const viewport of viewports) {
        const record = await capture(session, url, viewport);
        records.push(record);
        console.log(`${record.error ? "FAIL" : "OK"} ${viewport.name} ${record.route}`);
      }
    }
    socket.close();
  } finally {
    chrome.kill("SIGTERM");
  }
  await writeFile(new URL("capture-metadata.json", import.meta.url), JSON.stringify({
    source: baseUrl,
    viewports,
    routeSource: "../content/route-manifest.json",
    routeCount: urls.length,
    captureCount: records.length,
    failedCaptureCount: records.filter(({ error }) => error).length,
    captures: records,
  }, null, 2));
}

await main();

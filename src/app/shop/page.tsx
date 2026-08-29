import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import cityBackground from "../../../reference/wix/media/15095264a24f-62f26520e99441c6804b83aaf5423953.jpg";
import headband from "../../../reference/wix/media/810c8a4f9a74-990592_7c32431bf7e747bdb5234c4048cb0e79~mv2.png";

export const metadata: Metadata = {
  title: { absolute: "Lovemind | Shop" },
  openGraph: {
    title: "Lovemind | Shop",
    type: "website",
    siteName: "Lovemind",
  },
};

export default function ShopPage() {
  return (
    <section className="relative isolate min-h-[718px] overflow-hidden md:min-h-[875px]">
      <Image src={cityBackground} alt="" fill priority className="-z-20 object-cover" sizes="100vw" />
      <div className="mx-auto flex min-h-[718px] max-w-[980px] items-end px-5 md:min-h-[875px] md:items-start md:pt-10">
        <article className="w-full bg-[#273e47]/80 px-3 pt-6 text-center text-white md:h-[350px] md:px-3 md:py-3">
          <div className="group relative w-[280px] max-w-full md:w-[225px]">
            <Link href="/product-page/lovemind-headband" className="block">
              <Image src={headband} alt="Lovemind Headband" className="aspect-square w-full object-cover" priority />
            </Link>
            <button type="button" disabled aria-disabled="true" className="pointer-events-none absolute inset-x-0 top-0 hidden aspect-square items-center justify-center bg-black/55 text-sm opacity-0 transition-opacity group-hover:opacity-100 md:flex">Quick View</button>
            <div className="bg-neutral-500/85 px-4 py-5 text-sm leading-7 md:bg-transparent md:py-2">
              <Link href="/product-page/lovemind-headband" className="block text-base">Lovemind Headband</Link>
              <span className="mx-auto my-1 block h-px w-5 bg-white/80" />
              <p className="text-base">$23.99</p>
              <p className="text-xs">Excluding Sales Tax</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

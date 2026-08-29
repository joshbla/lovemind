import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[65vh] flex-col items-center justify-center gap-8 bg-black px-6 text-center">
      <h1 className="text-5xl font-bold">This page is in-development.</h1>
      <p className="text-2xl">We apologize.</p>
      <Link href="/" className="rounded-xl bg-brand-blue px-8 py-4 text-xl font-bold text-brand-ink transition-colors hover:bg-white">Return home</Link>
    </section>
  );
}

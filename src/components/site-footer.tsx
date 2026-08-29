import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-brand-ink px-6 py-14 text-center text-sm leading-relaxed text-white">
      <p>We can&apos;t solve problems by using the same kind of thinking we used when we created them.</p>
      <p className="mt-3">Albert Einstein</p>
      <p className="mt-8">Salt Lake City, Utah</p>
      <p className="mt-8">©2022 <Link href="/" className="hover:text-brand-blue">Lovemind</Link></p>
    </footer>
  );
}

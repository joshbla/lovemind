import type { Metadata } from "next";
import Link from "next/link";
import { researchEntries } from "@/components/phase3/research/research-data";

export const metadata: Metadata = {
  title: { absolute: "Lovemind | Research" },
  openGraph: { title: "Lovemind | Research" },
};

export default function ResearchPage() {
  return (
    <section className="mx-auto min-h-screen max-w-[1000px] bg-[#078cc8] px-4 pt-10 pb-14 text-white md:px-16 md:pt-16 md:pb-20">
      <h1 className="text-center text-[28px] font-normal md:text-[36px]">Research</h1>
      <div className="mx-auto mt-8 max-w-[800px] space-y-4 md:mt-12 md:space-y-5">
        {researchEntries.map((entry) => (
          <article key={entry.title} className="border border-white/30 bg-[#555555] px-5 py-6 text-[12px] leading-[1.45] text-white/85 md:px-10 md:py-8 md:text-[14px] md:leading-[1.5]">
            <h2 className="text-[15px] leading-[1.35] font-normal text-white md:text-[17px]">{entry.title}</h2>
            <p className="mt-4">{entry.authors}</p>
            <div className="mt-5 space-y-4">
              {entry.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>
            <div className="mt-6 text-center">
              <p className="text-xl leading-none">—</p>
              {entry.slug !== undefined ? (
                <Link href={`/papers-and-studies/${entry.slug}`} aria-label={`Maximize ${entry.title}`} className="mt-2 inline-block text-[11px] underline">Maximize</Link>
              ) : (
                <span aria-disabled="true" className="mt-2 inline-block text-[11px]">Maximize</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

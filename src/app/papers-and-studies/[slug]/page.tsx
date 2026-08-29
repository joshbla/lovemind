import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getResearchDetail, researchDetails } from "@/components/phase3/research/research-data";

type ResearchPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return researchDetails.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ResearchPageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = getResearchDetail(decodeURIComponent(slug));

  if (detail === undefined) {
    notFound();
  }

  return {
    title: { absolute: detail.metadataTitle },
    openGraph: {
      title: detail.metadataTitle,
      type: "website",
      siteName: "Lovemind",
    },
  };
}

export default async function ResearchDetailPage({ params }: ResearchPageProps) {
  const { slug } = await params;
  const detail = getResearchDetail(decodeURIComponent(slug));

  if (detail === undefined) {
    notFound();
  }

  return (
    <article className="min-h-[965px] bg-[#1d1d1d] px-5 pt-7 pb-16 text-white md:min-h-[970px] md:px-8 md:pt-16 md:pb-20">
      <div className="mx-auto max-w-[720px]">
        <h1 className="text-[21px] leading-[1.14] font-normal md:text-[30px] md:leading-[1.18]">{detail.title}</h1>

        <div className="mt-3 text-[17px] leading-[1.35] md:mt-10 md:grid md:grid-cols-[72px_1fr] md:gap-x-3 md:gap-y-4 md:text-[16px]">
          <p>Pub Title:</p>
          <span aria-hidden="true" className="hidden md:block" />
          <p className="mt-8 md:mt-0">Authors:</p>
          <p className="mt-10 md:mt-0">{detail.authors}</p>
          <p className="mt-2 md:mt-0">Pub Date:</p>
          <span aria-hidden="true" className="hidden md:block" />
        </div>

        <div className="mt-11 space-y-7 px-2 text-[14px] leading-[1.48] text-white/85 md:mt-14 md:-mx-6 md:px-0 md:text-[17px] md:leading-[1.55]">
          {detail.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>

        <div className="mt-8 text-center md:mt-20">
          <p className="text-2xl leading-none">—</p>
          <a href={detail.sourceUrl} target="_blank" rel="noreferrer" className="mt-8 inline-block break-all text-[15px] underline md:mt-3 md:text-[14px]">
            {detail.sourceUrl}
          </a>
        </div>
      </div>
    </article>
  );
}

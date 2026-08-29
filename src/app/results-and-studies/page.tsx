import type { Metadata } from "next";
import Image from "next/image";
import monument from "../../../reference/wix/media/da626060e7ed-990592_ea16f214b91e43039e2c8e55bd06a940~mv2.jpg";

export const metadata: Metadata = {
  title: { absolute: "Lovemind | Results and Studies" },
  openGraph: {
    title: "Lovemind | Results and Studies",
    type: "website",
    siteName: "Lovemind",
  },
};

export default function ResultsAndStudiesPage() {
  return (
    <article className="bg-brand-ink text-white">
      <div className="mx-auto grid max-w-[1280px] md:grid-cols-2">
        <div className="relative aspect-[4/3] md:h-[620px] md:aspect-auto">
          <Image src={monument} alt="IMG_5238.JPG" fill priority className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
        <div className="flex min-h-[355px] flex-col items-center justify-center px-3 py-10 text-center md:min-h-[620px] md:px-20">
          <h1 className="text-[26px] font-normal md:text-[40px]">Results and Studies</h1>
          <p className="mt-4 text-xs md:mt-12 md:text-sm">April 12, 2025</p>
          <p className="mt-5 max-w-[455px] text-sm leading-[1.85] md:mt-10 md:leading-7">
            We still have only a very limited understanding of most aspects about our planet. Answering questions about this is essential for understanding the mechanistic role it plays on other scientific processes, and for developing tools to further explore this research avenue with more sensitive measurements and improved data collection.
          </p>
        </div>
      </div>
    </article>
  );
}

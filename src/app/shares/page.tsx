import type { Metadata } from "next";
import Image from "next/image";
import collage from "../../../reference/wix/media/5366845b62fe-990592_5022af17018843f98700fcd02a2da947~mv2.png";

export const metadata: Metadata = {
  title: { absolute: "Lovemind | Share Classes and Rights" },
  openGraph: {
    title: "Lovemind | Share Classes and Rights",
    type: "website",
    siteName: "Lovemind",
  },
};

export default function SharesPage() {
  return (
    <section className="bg-brand-ink">
      <div className="relative mx-auto h-[540px] w-full max-w-[376px] overflow-hidden md:h-[800px]">
        <Image src={collage} alt="A collage of cities and landscapes" fill priority className="object-cover object-center" sizes="376px" />
        <div className="absolute inset-x-0 top-5 text-center md:top-16">
          <h1 className="text-[23px] font-normal text-white md:text-[29px]">Shares Classes and Rights</h1>
          <a href="/media/lovemind-share-classes-and-rights.pdf" download="Lovemind Share Classes and Rights.pdf" className="mt-5 inline-flex h-11 w-40 items-center justify-center bg-[#292929] font-serif text-white md:mt-[250px]">
            Download
          </a>
        </div>
      </div>
    </section>
  );
}

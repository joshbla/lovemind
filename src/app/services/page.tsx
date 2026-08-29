import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import highSchool from "../../../reference/wix/media/333447ba990a-11062b_4817a6cd5bac4c0693280ee8ebca1b86~mv2.jpg";
import meditation from "../../../reference/wix/media/7a5ca0cf2932-11062b_772094efa85244eb9ee4ac198df960cc~mv2.jpg";
import undergraduate from "../../../reference/wix/media/265110aa15d4-11062b_35b37fde58cf4793b431665e2fd3190f~mv2.jpg";

export const metadata: Metadata = {
  title: { absolute: "Lovemind | Services" },
  keywords: ["Keep", "Thinking"],
  openGraph: { title: "Lovemind | Services", images: ["/media/logo.png"] },
};

function ServicePanel({ image, title, description, href, trialHref, mobileMode }: { image: StaticImageData; title: string; description: string; href: string; trialHref: string; mobileMode: "high-school" | "undergraduate" }) {
  const panelHeight = mobileMode === "high-school" ? "h-[565px]" : "h-[608px]";
  const imageHeight = mobileMode === "high-school" ? "h-[210px]" : "h-[478px]";
  return (
    <section className={`relative overflow-hidden bg-[#2eadeb] md:h-[485px] ${panelHeight}`}>
      <div className={`absolute inset-x-0 top-0 md:inset-0 md:h-auto ${imageHeight}`}>
        <Image src={image} alt="" fill className={`object-cover ${mobileMode === "high-school" ? "object-top" : "object-center"}`} sizes="100vw" />
      </div>
      <div className="absolute inset-0 bg-black/5" />
      <div className="absolute inset-x-5 top-8 text-center text-white drop-shadow-[0_2px_2px_rgba(0,0,0,.55)] md:top-12">
        <h2 className="text-3xl md:text-5xl">{title}</h2>
      </div>
      <div className="absolute inset-x-5 top-36 text-center text-xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,.65)] md:top-[390px] md:text-2xl">
        <p>{description}</p>
        <div className="mt-5 flex justify-center gap-8 font-bold text-brand-blue">
          <Link href={href}>Learn more &gt;</Link>
          <Link href={trialHref}>Free Trial &gt;</Link>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <div>
      <h1 className="bg-[#2eadeb] py-8 text-center text-5xl font-normal text-white md:py-11 md:text-7xl">Services</h1>
      <ServicePanel image={highSchool} title="High School Tutoring" description="Find a tutor for any class" href="/high-school" trialHref="/service-page/trial-high-school-tutoring" mobileMode="high-school" />
      <ServicePanel image={undergraduate} title="Undergraduate Tutoring" description="Find a tutor for any General Education (GE) Course" href="/undergraduate" trialHref="/service-page/trial-undergraduate-tutoring" mobileMode="undergraduate" />
      <h2 className="bg-[#2eadeb] px-5 py-8 text-5xl font-normal text-white md:py-10 md:text-center md:text-7xl">Upcoming</h2>
      <section className="relative h-[610px] overflow-hidden md:h-[485px]">
        <Image src={meditation} alt="Meditation" fill className="object-cover max-md:object-[56%_center]" sizes="100vw" />
        <div className="absolute inset-0 bg-white/15" />
        <div className="absolute inset-0 flex flex-col items-center px-8 py-12 text-center text-white drop-shadow-[0_2px_2px_rgba(0,0,0,.55)]">
          <h2 className="text-3xl md:text-5xl">Meditation</h2>
          <div className="mt-16 md:mt-auto md:mb-16"><p className="text-xl md:text-2xl">Coming Soon</p><p className="mt-8 text-xl md:text-2xl">One-on-one Meditation Sessions with Experts in the Field</p></div>
          <p className="mt-auto tracking-[.45em]">● ● ● ●</p>
        </div>
      </section>
    </div>
  );
}

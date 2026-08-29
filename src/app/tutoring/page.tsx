import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import library from "../../../reference/wix/media/cd99bfbc1040-9b1c937183bd464aadf20f610d1eaf9c.jpg";

export const metadata: Metadata = {
  title: { absolute: "Lovemind | Tutoring" },
  openGraph: { title: "Lovemind | Tutoring", images: ["/media/logo.png"] },
};

export default function TutoringPage() {
  return (
    <section className="relative min-h-[648px] overflow-hidden bg-white text-center md:min-h-[1177px]">
      <div className="absolute inset-x-0 top-0 h-[200px] md:inset-0 md:h-auto">
        <Image src={library} alt="Circular Library" fill className="object-cover object-top opacity-100 md:opacity-55" sizes="100vw" priority />
      </div>
      <div className="relative mx-auto flex min-h-[648px] max-w-3xl flex-col items-center px-6 pt-36 md:min-h-[1177px] md:pt-36">
        <h1 className="mt-[270px] text-5xl font-normal text-[#079ee4] md:mt-0 md:text-7xl">Tutoring</h1>
        <p className="mt-8 hidden text-3xl text-white drop-shadow md:block">High School and College</p>
        <Link href="/plans" className="mt-44 border-[5px] border-black bg-[#22adeb] px-8 py-1 text-2xl font-bold tracking-[.2em] text-black md:mt-40 md:w-full md:text-3xl">SIGN UP</Link>
      </div>
    </section>
  );
}

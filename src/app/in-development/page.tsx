import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Lovemind | In-Development",
  },
  openGraph: {
    title: "Lovemind | In-Development",
  },
};

export default function InDevelopmentPage() {
  return (
    <section className="flex min-h-[198px] bg-[#1b1b1b] px-5 pt-2 text-[18px] leading-[1.35] font-normal text-white/60 md:min-h-[500px] md:items-center md:justify-center md:px-8 md:pt-0">
      <p>
        This page is in-development.
        <br />
        We apologize.
      </p>
    </section>
  );
}

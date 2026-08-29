import Image from "next/image";
import Link from "next/link";
import { HomeHero } from "@/components/home-hero";

const pillars = [
  {
    title: "Refer suspected health conditions to specialists",
    tone: "bg-black text-white",
    icon: "bulb",
  },
  {
    title: "Partner with physicians in following your treatment",
    tone: "bg-neutral-100 text-[#0783bb]",
    icon: "pencil",
  },
  {
    title: "Encourage and support healthy behaviors",
    tone: "bg-[#087fb0] text-white",
    icon: "conversation",
  },
] as const;

function PillarIcon({ name }: { name: (typeof pillars)[number]["icon"] }) {
  if (name === "bulb") {
    return (
      <svg aria-hidden="true" viewBox="0 0 64 64" className="h-16 w-16 fill-none stroke-current stroke-2">
        <path d="M20 28a12 12 0 1 1 24 0c0 6-4 8-7 12H27c-3-4-7-6-7-12Z" />
        <path d="M27 46h10M29 52h6M32 8V2M16 14l-5-5M48 14l5-5" />
      </svg>
    );
  }

  if (name === "pencil") {
    return (
      <svg aria-hidden="true" viewBox="0 0 64 64" className="h-16 w-16 fill-none stroke-current stroke-2">
        <path d="m14 48 6-19L44 5l11 11-24 24-17 8Z" />
        <path d="m20 29 11 11M14 48l12-4M42 8l10 10M10 55h42" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" className="h-16 w-16 fill-none stroke-current stroke-2">
      <path d="M5 11h36v27H19L9 46l3-8H5V11Z" />
      <path d="M45 20h14v26H49l3 7-10-7H27v-4M15 25h16M15 31h11" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="bg-white text-white">
      <HomeHero />

      <section className="grid min-h-[565px] md:grid-cols-2">
        <div className="flex items-center bg-brand-blue px-10 py-20 md:px-[12vw]">
          <h2 className="max-w-xl text-4xl leading-[1.4] font-normal md:text-5xl">
            Intelligence is controlled by your physical and mental health.
          </h2>
        </div>
        <div className="relative min-h-[360px] md:min-h-full">
          <Image src="/media/home-brain.jpg" alt="Colorful neural structures" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
      </section>

      <section className="relative isolate min-h-[575px] overflow-hidden">
        <Image src="/media/home-mountains.jpg" alt="Green mountain landscape" fill className="-z-20 object-cover" sizes="100vw" />
        <div className="absolute inset-0 -z-10 bg-black/28" />
        <div className="mx-auto flex min-h-[575px] max-w-4xl items-center px-8 py-16">
          <div className="space-y-8 text-2xl leading-[1.25] md:text-[32px]">
            <p>Typical tutoring provides a temporary solution to ongoing problems. The problem is unhealthy physical and mental habits.</p>
            <p>Lovemind tutoring dares to cross the boundaries of typical tutoring into the realm of personal therapeutic advising.</p>
            <p>As the student and tutor converse, we look for poor habits and replace them with healthy alternatives.</p>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3">
        {pillars.map((pillar) => (
          <article key={pillar.title} className={`flex min-h-[330px] flex-col items-center justify-center gap-7 px-10 py-12 text-center ${pillar.tone}`}>
            <PillarIcon name={pillar.icon} />
            <h2 className="max-w-sm text-2xl leading-[1.35] font-normal md:text-3xl">{pillar.title}</h2>
          </article>
        ))}
      </section>

      <section className="relative isolate min-h-[630px] overflow-hidden">
        <Image src="/media/tutoring-high-school.jpg" alt="A tutor helping a high school student" fill className="-z-20 object-cover" sizes="100vw" />
        <div className="absolute inset-0 -z-10 bg-black/22" />
        <div className="flex min-h-[630px] flex-col items-center justify-between px-6 py-16 text-center">
          <h2 className="text-4xl font-normal drop-shadow-md">High School Tutoring</h2>
          <div className="space-y-4 text-xl md:text-2xl">
            <p>Find a tutor for any class</p>
            <div className="flex items-center justify-center gap-8 font-bold text-brand-blue">
              <Link href="/high-school" className="transition-colors hover:text-white">Learn more &gt;</Link>
              <Link href="/service-page/trial-high-school-tutoring" className="transition-colors hover:text-white">Free Trial &gt;</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="flex min-h-[390px] items-center justify-center bg-brand-blue px-6 py-20">
        <Link href="/philosophy" className="rounded-xl border-2 border-brand-blue bg-brand-ink px-12 py-8 text-2xl font-bold text-brand-blue transition-colors duration-200 hover:border-black hover:bg-brand-blue hover:text-brand-ink">
          Why it works
        </Link>
      </section>
    </div>
  );
}

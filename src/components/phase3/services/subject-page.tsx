import Image, { type StaticImageData } from "next/image";

import abigail from "../../../../reference/wix/media/ba03754745fe-990592_641a54e6989a491c9661b3846aae478d~mv2.jpg";
import chemistry from "../../../../reference/wix/media/848f4e20ddfc-nsplsh_fe991b566b6b496fbe46bbae0c037fa7~mv2.jpg";
import macroeconomics from "../../../../reference/wix/media/2e72ae8946f4-nsplsh_00a089a91c86466fac47b64f02637c07~mv2.jpg";
import sarah from "../../../../reference/wix/media/aea2f526a03b-990592_c0fedf85a9e6478d9a4ed7c2d49b0baf~mv2.jpg";
import sergey from "../../../../reference/wix/media/4d86fa7d6d87-990592_a760257b41fe4ce6bf1dee7a6c0ce460~mv2.png";
import sigma from "../../../../reference/wix/media/7ff468bd0ef8-990592_f10d286c0db54207be326d95ec0d1781~mv2.png";

type Tutor = {
  image: StaticImageData;
  imageAlt: string;
  credential: string;
  name: string;
  biography: string;
  subject: string;
  subjectImage: StaticImageData;
};

type Plan = {
  name: string;
  price: string;
  discount: string;
  sessions: string;
  badge?: string;
};

type SubjectPageProps = {
  title: string;
  level: string;
  aside?: string;
  tutors: readonly Tutor[];
  serviceImage: StaticImageData;
  trialName: string;
  serviceName: string;
  servicePrice: string;
  plansTitle: string;
  plans: readonly Plan[];
  decorativeImage?: StaticImageData;
};

export const academicTutors: readonly Tutor[] = [
  {
    image: abigail,
    imageAlt: "Abigail Walton.jpg",
    credential: "ACT 30",
    name: "Abigail Walton",
    biography: "Abigail graduated from Columbus High with a 4.20 GPA. She spends her free time reading Wired and catching up on Rick & Morty.",
    subject: "AP Calculus BC",
    subjectImage: sigma,
  },
  {
    image: sarah,
    imageAlt: "Sarah Smith.jpg",
    credential: "ACT 36",
    name: "Sarah Smith",
    biography: "Sarah graduated in 2019 from Lone Peak High with a GPA of 3.91. She is currently studying Forensic Science at Southern Utah University.",
    subject: "Macroeconomics",
    subjectImage: macroeconomics,
  },
  {
    image: sergey,
    imageAlt: "Sergey Chahovich.webp",
    credential: "ACT 33",
    name: "Sergey Chahovich",
    biography: "Sergey graduated from North High with a GPA of 4.12 in 2015. Currently, he studies as a Senior at the University of Wisconsin (UW).",
    subject: "Chemistry",
    subjectImage: chemistry,
  },
];

function TutorCard({ tutor }: { tutor: Tutor }) {
  return (
    <article className="bg-white p-4 text-[#222] md:w-[280px]">
      <Image src={tutor.image} alt={tutor.imageAlt} className="aspect-[1.06] w-full object-cover" sizes="(min-width: 768px) 248px, calc(100vw - 64px)" />
      <p className="mt-4 text-xs">{tutor.credential}</p>
      <h3 className="mt-3 font-serif text-lg text-[#e66e57]">{tutor.name}</h3>
      <p className="mt-4 min-h-[100px] text-xs leading-[1.55]">{tutor.biography}</p>
      <div className="mt-4 flex min-h-14 items-center gap-4 border-t border-[#999] pt-3">
        <Image src={tutor.subjectImage} alt="" className="h-10 w-10 rounded-full object-cover" />
        <p className="text-xs leading-tight"><strong>Favorite Subject</strong><br /><span className="text-[#777]">{tutor.subject}</span></p>
      </div>
    </article>
  );
}

function ServiceCard({ image, name, price, trial }: { image: StaticImageData; name: string; price: string; trial: boolean }) {
  return (
    <article className="mx-auto grid w-[calc(100%-32px)] max-w-[760px] border border-[#bbb] bg-white p-4 text-[#333] md:grid-cols-[1.15fr_1fr]">
      <Image src={image} alt="" className="aspect-[1.52] h-full w-full object-cover" sizes="(min-width: 768px) 380px, calc(100vw - 64px)" />
      <div className="flex min-h-52 flex-col justify-center px-6 py-5 text-left md:items-center md:text-center">
        <h3 className="border-b border-[#ccc] pb-4 text-base md:border-0 md:pb-0 md:text-xl">{name}</h3>
        <p className="mt-6 text-xs">1 hr</p>
        <p className="mt-3 text-xs">{price}</p>
        <span aria-disabled="true" className="mt-5 block bg-[#08aeef] px-8 py-3 text-center text-xs text-white">Book Now</span>
        {!trial && <a href="#plans" className="mt-4 text-xs underline">Explore Plans</a>}
      </div>
    </article>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article className="relative flex min-h-[375px] w-full max-w-[260px] flex-col bg-white px-7 pt-8 text-center text-[#222]">
      {plan.badge && <span className="absolute top-0 right-0 bg-[#e87632] px-3 py-1 text-xs text-white md:-translate-y-1/2">{plan.badge}</span>}
      <h3>{plan.name}</h3>
      <div className="mt-3 flex justify-center gap-2"><span className="text-sm">$</span><span className="text-6xl font-light tracking-tight">{plan.price}</span></div>
      {plan.name !== "10 Sessions Chinese" && <p className="mt-1 text-xs">Every month</p>}
      <p className="mt-4 text-xs text-[#777]">{plan.discount}</p>
      {plan.name === "10 Sessions Chinese" && <p className="mt-6 text-xs text-[#777]">Valid for 6 months</p>}
      <span aria-disabled="true" className="mt-auto mb-7 block bg-[#08aeef] py-3 text-xs text-white">Select</span>
      <p className="-mx-7 border-t border-[#ccc] py-7 text-xs text-[#777]">{plan.sessions}</p>
    </article>
  );
}

export function SubjectPage({ title, level, aside, tutors, serviceImage, trialName, serviceName, servicePrice, plansTitle, plans, decorativeImage }: SubjectPageProps) {
  return (
    <div className="relative bg-white text-white">
      {decorativeImage && <Image src={decorativeImage} alt="" className="absolute top-0 right-0 hidden h-[640px] w-1/2 object-cover max-md:block" />}
      <section className="relative bg-brand-ink px-5 pt-9 pb-12 text-center md:pt-10 md:pb-12">
        <div className="mx-auto max-w-5xl">
          <div className="relative inline-block">
            <h1 className="text-4xl font-normal md:text-7xl">{title}</h1>
            {aside && <span className="mt-2 block text-sm text-brand-blue md:absolute md:top-full md:left-full md:mt-2 md:ml-3 md:w-max">{aside}</span>}
          </div>
          <h2 className="mt-8 text-2xl font-normal md:text-4xl">{level}</h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-snug text-white/60 md:text-xl">Our tutors all graduated with straight A&apos;s and tutor<br className="hidden md:block" /> every student with intelligence and professionalism.</p>
          <h2 className="mt-9 text-xl font-normal md:mt-20 md:text-3xl">Featured Tutors:</h2>
          <div className={`mx-auto mt-5 grid max-w-[870px] gap-4 max-md:divide-y-8 max-md:divide-brand-ink ${tutors.length === 1 ? "justify-center" : "md:grid-cols-3"}`}>
            {tutors.map((tutor) => <TutorCard key={tutor.name} tutor={tutor} />)}
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-col">
        <div className="order-1 bg-[#08aeef] px-4 pt-8 pb-12 text-center md:pb-24">
          <h2 className="text-2xl font-normal md:text-4xl">Book a Free Trial Session</h2>
          <div className="mx-auto mt-8 flex max-w-sm justify-around text-sm md:text-base"><span>One-on-one</span><span>In-Person</span></div>
          <div className="mt-16 md:mt-16"><ServiceCard image={serviceImage} name={trialName} price="Free" trial /></div>
        </div>

        <div id="schedule" className="order-3 bg-[#9d4712] px-4 pt-10 pb-12 text-center md:order-2 md:pb-24">
          <h2 className="text-3xl font-normal md:text-4xl">Schedule</h2>
          <h3 className="mt-10 text-xl font-normal md:text-2xl">Single Sessions</h3>
          <div className="mt-6"><ServiceCard image={serviceImage} name={serviceName} price={servicePrice} trial={false} /></div>
        </div>

        <div id="plans" className="order-2 bg-[#003e58] px-5 pt-10 pb-10 text-center md:order-3 md:pt-14 md:pb-24">
          <h2 className="text-4xl font-normal md:text-7xl">{plansTitle}</h2>
          <div className="mx-auto mt-16 flex max-w-[840px] flex-col items-center gap-8 md:flex-row md:items-stretch md:justify-center">
            {plans.map((plan) => <PlanCard key={plan.name} plan={plan} />)}
          </div>
        </div>
      </section>
    </div>
  );
}

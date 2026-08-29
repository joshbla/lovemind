import type { Metadata } from "next";
import { PlanCard } from "@/components/phase3/plans/plan-card";

export const metadata: Metadata = {
  title: { absolute: "Lovemind | Plans & Pricing" },
  keywords: ["Keep", "Thinking"],
  openGraph: { title: "Lovemind | Plans & Pricing", images: ["/media/logo.png"] },
};

const highSchoolPlans = [
  { name: "Formal", price: "236.99", cadence: "Every month", discount: "15% cheaper than single sessions", sessions: "Eight Sessions" },
  { name: "Remedial", price: "446.99", cadence: "Every month", discount: "Over 20% discount", sessions: "Sixteen Sessions", badge: "Most Popular" },
  { name: "Immersive", price: "628.99", cadence: "Every month", discount: "Over 25% discount", sessions: "Twenty Four Sessions", badge: "Best Value" },
] as const;

const undergraduatePlans = [
  { name: "Formal", price: "270.99", cadence: "Every month", discount: "Over 15% discount", sessions: "Eight Sessions" },
  { name: "Remedial", price: "510.99", cadence: "Every month", discount: "Over 20% discount", sessions: "Sixteen Sessions", badge: "Most Popular" },
  { name: "Immersive", price: "718.99", cadence: "Every month", discount: "Over 25% discount", sessions: "Twenty Four Sessions", badge: "Best Value" },
] as const;

const chinesePlan = {
  name: "10 Sessions Chinese",
  price: "400",
  discount: "Save 20%",
  validity: "Valid for 6 months",
  sessions: "Chinese Tutoring",
} as const;

export default function PlansPage() {
  return (
    <div className="bg-[#202020] text-white">
      <div className="mx-auto min-h-[3000px] max-w-[1000px] px-6 pt-11 pb-24 md:px-7 md:pt-12">
        <header className="text-center">
          <h1 className="text-[42px] leading-none font-normal md:text-[54px]">Plan Catalog</h1>
          <p className="mt-7 text-sm leading-[1.25] text-white/65">Select your plan, then<br /><span className="text-base text-white">scroll down for checkout.</span></p>
        </header>

        <section className="mt-24 md:mt-28">
          <h2 className="text-center text-[28px] leading-none font-normal md:text-[42px]">High School Tutoring</h2>
          <div className="mt-12 grid gap-11 md:mt-11 md:grid-cols-3 md:gap-8">
            {highSchoolPlans.map((plan) => <PlanCard key={plan.name} {...plan} />)}
          </div>
        </section>

        <section className="mt-14 md:mt-20">
          <h2 className="text-center text-[28px] leading-none font-normal md:text-[42px]">Undergraduate Tutoring</h2>
          <div className="mt-12 grid gap-11 md:mt-11 md:grid-cols-3 md:gap-8">
            {undergraduatePlans.map((plan) => <PlanCard key={plan.name} {...plan} />)}
          </div>
        </section>

        <section className="mt-14 md:mt-20">
          <h2 className="text-center text-[28px] leading-none font-normal md:text-[42px]">Chinese Tutoring</h2>
          <div className="mx-auto mt-[700px] w-full md:mt-11 md:max-w-[294px]">
            <PlanCard {...chinesePlan} />
          </div>
        </section>

        <section className="mt-36 text-center md:mt-36">
          <h2 className="mx-auto flex min-h-[100px] max-w-[570px] items-center justify-center bg-brand-blue px-6 text-[28px] font-normal md:text-[36px]">Below will be checkout</h2>
          <div className="mx-auto mt-36 w-full bg-white px-6 py-8 text-[#292929] md:hidden">
            <div className="mx-auto flex h-[260px] max-w-[260px] flex-col border border-[#cccccc] px-8 py-7 text-center">
              <span className="self-start text-sm">$</span>
              <p className="text-[58px] leading-none">11</p>
              <p className="mt-2 text-xs">Every month</p>
              <p className="mt-2 text-xs">Valid for 2 months</p>
              <span aria-disabled="true" className="mt-auto flex h-11 cursor-default items-center justify-center bg-brand-blue text-sm text-white select-none">Select</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

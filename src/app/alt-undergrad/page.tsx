import type { Metadata } from "next";
import Image from "next/image";
import { PlanCard } from "@/components/phase3/plans/plan-card";
import backgroundImage from "../../../reference/wix/media/e0bd2c24f818-990592_cd42df85569a488ea265378d69cfc3d9~mv2.jpg";

export const metadata: Metadata = {
  title: { absolute: "Lovemind | Alt Undergraduate Tutoring" },
  openGraph: { title: "Lovemind | Alt Undergraduate Tutoring", images: ["/media/logo.png"] },
};

const plans = [
  { name: "Casual", price: "142.99", cadence: "Every month", discount: "Over 10% discount", sessions: "Four Sessions" },
  { name: "Formal", price: "270.99", cadence: "Every month", discount: "Over 15% discount", sessions: "Eight Sessions" },
  { name: "Remedial", price: "510.99", cadence: "Every month", discount: "Over 20% discount", sessions: "Sixteen Sessions" },
  { name: "Immersive", price: "718.99", cadence: "Every month", discount: "Over 25% discount", sessions: "Twenty Four Sessions" },
  { name: "10 Sessions Chinese", price: "400", discount: "Save 20%", validity: "Valid for 6 months", sessions: "Chinese Tutoring" },
] as const;

export default function AltUndergraduatePage() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-7 pt-[260px] pb-5 text-[#292929] md:min-h-[1205px] md:px-8 md:pt-[258px] md:pb-6">
      <div className="absolute inset-x-0 top-0 -z-20 h-[570px] md:h-[875px]">
        <Image src={backgroundImage} alt="" fill priority className="object-cover" sizes="100vw" />
      </div>
      <div className="absolute inset-x-0 top-[570px] bottom-0 -z-10 bg-white md:top-[875px]" />

      <section aria-label="Tutoring plans" className="mx-auto max-w-[980px] bg-white p-4 md:p-4">
        <div className="grid gap-8 md:grid-cols-3 md:gap-8">
          {plans.map((plan) => <PlanCard key={plan.name} {...plan} />)}
        </div>
      </section>
    </div>
  );
}

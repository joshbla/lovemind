import type { Metadata } from "next";
import { PolicyLayout } from "@/components/phase3/policies/policy-layout";

export const metadata: Metadata = {
  title: { absolute: "Lovemind | Disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <PolicyLayout className="min-h-[362px] px-5 pt-3 pb-12 md:min-h-[629px] md:px-8 md:pt-10">
      <div className="mx-auto max-w-[700px] text-center">
        <h1 className="text-[27px] font-bold md:text-[36px]">Disclaimer</h1>
        <p className="mt-3 text-[25px] leading-[1.2] md:mt-16 md:text-[46px] md:leading-[1.18]">The statements on this website have not been evaluated by the Food and Drug Administration.</p>
        <p className="mt-8 text-[25px] leading-[1.2] md:mt-14 md:text-[46px] md:leading-[1.18]">Our services are not intended to diagnose, treat, cure, or prevent disease.</p>
      </div>
    </PolicyLayout>
  );
}

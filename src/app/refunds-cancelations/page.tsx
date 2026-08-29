import type { Metadata } from "next";
import { PolicyLayout } from "@/components/phase3/policies/policy-layout";

export const metadata: Metadata = {
  title: { absolute: "Lovemind | Refunds & Cancelations" },
};

export default function RefundsCancelationsPage() {
  return (
    <PolicyLayout className="min-h-[310px] px-5 pt-3 pb-10 md:min-h-[500px] md:px-8 md:pt-10">
      <article className="mx-auto max-w-[620px] text-[14px] leading-[1.08] text-white">
        <h1 className="mb-3 text-center text-[27px] leading-tight font-bold md:mb-16 md:text-[36px]">
          Refunds and<br className="md:hidden" /> Cancelations Policy
        </h1>
        <p>You may request to cancel your appointment for a full refund, up to 24 hours before the date and time of the event. Cancellations between 25-72 hours before the event may transferred to a different date/time of the same service. Cancellation requests made within 24 hours of the service date/time may not receive a refund nor a transfer. When you register for a service, you agree to these terms.</p>
        <p className="mt-5">(as expressed in our Terms and Conditions)</p>
      </article>
    </PolicyLayout>
  );
}

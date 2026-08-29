import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Lovemind | Policies" },
};

const policies = [
  ["Terms & Conditions", "/terms"],
  ["Privacy Policy", "/privacy"],
  ["Refunds & Cancelations", "/refunds-cancelations"],
  ["Fulfillment & Shipping", "/shipping"],
  ["Disclaimer", "/disclaimer"],
] as const;

export default function PoliciesPage() {
  return (
    <section className="min-h-[315px] bg-[#111] px-5 py-10 text-center text-white md:min-h-[895px] md:py-12">
      <h1 className="mb-7 text-[28px] font-normal md:mb-16 md:text-[40px]">Policies</h1>
      <div className="mx-auto flex max-w-[395px] flex-col items-center gap-10 md:gap-9">
        {policies.map(([label, href]) => (
          <Link key={href} href={href} className="block min-w-[160px] bg-white px-6 py-3 text-[14px] tracking-[0.12em] text-[#5d5d5d] md:w-[395px]">
            {label}
          </Link>
        ))}
      </div>
    </section>
  );
}

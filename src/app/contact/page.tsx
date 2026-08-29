import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import investors from "../../../reference/wix/media/a417cb01446e-990592_5785e3e57a644a91a02defa4d2188869~mv2.jpg";
import press from "../../../reference/wix/media/00befe999a1d-990592_4c271ab669844ad193738df34d447ef7~mv2.jpg";

export const metadata: Metadata = {
  title: { absolute: "Lovemind | Contact" },
  openGraph: { title: "Lovemind | Contact" },
};

function MailForm({ title, image, fields, subject }: { title: string; image: StaticImageData; fields: string[]; subject: string }) {
  const sectionHeight = title === "Investors" ? "min-h-[500px]" : "min-h-[650px]";

  return (
    <section className={`relative isolate overflow-hidden px-8 py-12 text-white md:min-h-[600px] md:px-16 md:py-24 ${sectionHeight}`}>
      <Image src={image} alt="" fill className="-z-20 object-cover" sizes="100vw" />
      <div className="absolute inset-0 -z-10 bg-black/25" />
      <div className="mx-auto max-w-[940px]">
        <h2 className="text-center text-[34px] font-normal md:text-[38px]">{title}</h2>
        <div className="mt-8 grid gap-x-3 gap-y-3 md:grid-cols-2">
          {fields.map((field, index) => {
            const wide = title === "Investors" ? index > 1 : [1, 4].includes(index);
            const multiline = ["Message", "Question"].includes(field);
            return (
              <div key={field} className={`border-b border-white px-3 py-4 text-[15px] ${wide ? "md:col-span-2" : ""} ${multiline ? "min-h-24" : ""}`}>
                {field === "Message" ? "Type your message here..." : field}
              </div>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <a href={`mailto:contact@lovemind.net?subject=${subject}`} className="inline-flex min-h-12 w-full items-center justify-center bg-white px-10 text-sm text-neutral-600 transition-colors hover:bg-brand-blue hover:text-black focus:bg-brand-blue focus:text-black md:w-48">
            Submit
          </a>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-black text-white">
      <section aria-label="Generic map of Salt Lake City, Utah" className="relative isolate flex min-h-[260px] items-center justify-center overflow-hidden bg-[#35383d] px-6 text-center md:min-h-[610px]">
        <div className="absolute inset-0 -z-20 opacity-45 [background-image:linear-gradient(28deg,transparent_46%,#62666d_47%,#62666d_49%,transparent_50%),linear-gradient(154deg,transparent_43%,#555a61_44%,#555a61_46%,transparent_47%),linear-gradient(90deg,transparent_49%,#484c52_50%,transparent_51%)] [background-size:190px_140px,240px_180px,130px_100px]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,.45)_78%)]" />
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-white/60">Headquarters</p>
          <h1 className="mt-4 text-3xl font-normal md:text-5xl">Salt Lake City, Utah</h1>
          <div className="mx-auto mt-7 h-px w-28 bg-brand-blue" />
        </div>
      </section>

      <MailForm title="Investors" image={investors} fields={["Name", "Email", "Subject", "Message"]} subject="Investor%20Inquiry" />
      <MailForm title="Press" image={press} fields={["First Name", "Last Name", "Email", "Phone", "Question"]} subject="Press%20Inquiry" />

      <section className="px-6 py-14 text-center text-[24px] leading-relaxed md:text-[27px]">
        <p>All other inquiries: <a href="mailto:contact@lovemind.net" className="transition-colors hover:text-brand-blue focus:text-brand-blue">contact@lovemind.net</a></p>
      </section>
    </div>
  );
}

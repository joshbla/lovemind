import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import headband from "../../../../reference/wix/media/810c8a4f9a74-990592_7c32431bf7e747bdb5234c4048cb0e79~mv2.png";

export const metadata: Metadata = {
  title: { absolute: "Lovemind Headband | Lovemind" },
  description: "Get yourself a Lovemind headband, just like one of our employees might wear!",
  openGraph: {
    title: "Lovemind Headband | Lovemind",
    description: "Get yourself a Lovemind headband, just like one of our employees might wear!",
    type: "website",
    siteName: "Lovemind",
    images: [{ url: headband.src, width: 1200, height: 1200, alt: "Lovemind Headband" }],
  },
};

const productSections = [
  {
    title: "PRODUCT INFO",
    copy: "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
  },
  {
    title: "RETURN & REFUND POLICY",
    copy: "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
  },
  {
    title: "SHIPPING INFO",
    copy: "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
  },
] as const;

function ProductSections() {
  return (
    <div className="mt-7">
      {productSections.map((section) => (
        <details key={section.title} className="group border-b border-neutral-400 py-4 text-sm">
          <summary className="flex cursor-pointer list-none items-center justify-between">
            <span>{section.title}</span>
            <span className="text-xl leading-none group-open:hidden">+</span>
            <span className="hidden text-xl leading-none group-open:inline">−</span>
          </summary>
          <p className="pt-4 leading-6">{section.copy}</p>
          <p className="pt-4">yup</p>
        </details>
      ))}
    </div>
  );
}

function ShareLinks() {
  return (
    <div className="mt-10 flex items-center gap-6" aria-label="Share Lovemind Headband">
      <a className="font-bold text-[#1687e8]" aria-label="Share on Facebook" href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Flovemind.net%2Fproduct-page%2Flovemind-headband">f</a>
      <a className="font-bold text-[#e60023]" aria-label="Pin on Pinterest" href="https://pinterest.com/pin/create/button/?url=https%3A%2F%2Flovemind.net%2Fproduct-page%2Flovemind-headband">p</a>
      <a className="font-bold text-[#05b948]" aria-label="Share on WhatsApp" href="https://api.whatsapp.com/send?text=https%3A%2F%2Flovemind.net%2Fproduct-page%2Flovemind-headband">◯</a>
      <a className="text-lg" aria-label="Share on X" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Flovemind.net%2Fproduct-page%2Flovemind-headband&text=Lovemind+Headband">𝕏</a>
    </div>
  );
}

export default function HeadbandPage() {
  return (
    <section className="bg-white px-10 py-4 text-[#404040] md:px-6 md:py-16">
      <div className="mx-auto max-w-[890px]">
        <div className="mb-7 text-base md:mb-16">
          <Link href="/" className="hidden md:inline">Home</Link>
          <span className="hidden md:inline"> / Lovemind Headband</span>
          <Link href="/" className="md:hidden">‹&nbsp; Back to Home</Link>
        </div>

        <div className="grid gap-7 md:grid-cols-[500px_1fr] md:gap-9">
          <div>
            <Image src={headband} alt="Lovemind Headband" className="aspect-square w-full object-cover" priority />
            <p className="mt-5 hidden text-sm leading-5 md:block">Get yourself a Lovemind headband, just like one of our employees might wear!</p>
          </div>

          <div>
            <div className="md:hidden">
              <p className="mb-4 text-xs">SKU: 364215376135191</p>
              <h1 className="text-[28px] leading-[1.2] font-normal">Lovemind Headband</h1>
            </div>
            <div className="hidden md:block">
              <h1 className="text-[30px] leading-[1.2] font-normal">Lovemind Headband</h1>
              <p className="mt-2 text-xs">SKU: 364215376135191</p>
            </div>
            <p className="mt-3 text-base">$23.99</p>
            <p className="mt-1 text-sm">Excluding Sales Tax</p>

            <fieldset className="mt-5">
              <legend className="text-sm">Color *</legend>
              <span className="mt-3 block h-5 w-5 rounded-full border border-neutral-400 bg-black" aria-label="Black" />
            </fieldset>

            <label htmlFor="salad" className="mt-5 block text-sm">Would you like eggs in your complimentary salad? *</label>
            <textarea id="salad" disabled aria-disabled="true" maxLength={500} className="mt-2 h-12 w-full resize-none border border-neutral-500 bg-white p-2 outline-none focus:border-brand-blue" />
            <p className="text-right text-xs text-neutral-500">0/500</p>

            <div className="mt-5">
              <p className="text-sm">Quantity *</p>
              <div className="mt-2 flex h-9 w-[92px] items-center justify-around border border-neutral-500 text-sm">
                <button type="button" disabled aria-disabled="true" aria-label="Decrease quantity" className="text-neutral-300">−</button>
                <span>1</span>
                <button type="button" disabled aria-disabled="true" aria-label="Increase quantity" className="text-xl">+</button>
              </div>
            </div>

            <button type="button" disabled aria-disabled="true" className="mt-8 h-10 w-full bg-brand-blue text-white">Add to Cart</button>
            <p className="mt-6 text-sm leading-5 md:hidden">Get yourself a Lovemind headband, just like one of our employees might wear!</p>
            <ProductSections />
            <ShareLinks />
          </div>
        </div>
      </div>
    </section>
  );
}

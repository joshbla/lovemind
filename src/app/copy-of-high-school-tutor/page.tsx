import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Lovemind | Apply" },
  description: "Apply to become a Lovemind Tutor.",
  openGraph: {
    title: "Lovemind | Apply",
    description: "Apply to become a Lovemind Tutor.",
  },
};

function Chevron() {
  return (
    <svg aria-hidden="true" viewBox="0 0 12 8" className="h-2 w-3 fill-none stroke-current">
      <path d="m1 1 5 5 5-5" />
    </svg>
  );
}

const selectClassName = "absolute inset-0 h-full w-full cursor-default opacity-0";

export default function JobApplicationPage() {
  return (
    <section className="min-h-[1510px] bg-[#1d1d1d] px-[10px] pt-1 pb-24 text-white md:min-h-[1510px] md:px-8 md:pt-16">
      <div className="mx-auto max-w-[980px]">
        <div className="hidden flex-col items-center md:flex">
          <svg aria-hidden="true" viewBox="0 0 48 54" className="h-24 w-20 fill-none stroke-current stroke-[1.7]">
            <rect x="7" y="3" width="34" height="47" />
            <circle cx="24" cy="16" r="4" />
            <path d="M16 28c1-6 5-9 8-9s7 3 8 9c-2 3-5 4-8 4s-6-1-8-4ZM14 38h20M14 43h20" />
          </svg>
          <h1 className="mt-10 text-[34px] font-normal">Job Applications</h1>
        </div>

        <div className="relative mt-0 min-h-[432px] bg-[#f0e1c8] px-[10px] pt-3 pb-5 text-[#424242] md:mt-5 md:min-h-[710px] md:px-[140px] md:pt-72">
          <h2 className="text-[26px] leading-none font-normal md:absolute md:top-[80px] md:left-[140px] md:text-[40px]">We&apos;re Hiring</h2>

          <div aria-hidden="true" className="relative mt-7 h-[90px] w-[120px] md:absolute md:top-[45px] md:right-[100px] md:mt-0 md:h-[140px] md:w-[170px]">
            <span className="absolute top-0 right-0 h-10 w-10 rounded-full bg-[#08aeef] md:h-12 md:w-12" />
            <span className="absolute top-2 right-2 h-[78px] w-[78px] rounded-full bg-[#e96517] md:h-[126px] md:w-[126px]" />
            <span className="absolute bottom-1 left-0 h-4 w-16 -rotate-[27deg] rounded-[50%] border-[5px] border-[#08aeef] md:bottom-0 md:h-5 md:w-20" />
          </div>

          <div className="relative flex h-[62px] items-start border-b-2 border-[#525252] pt-2 font-serif text-[16px] italic md:h-[135px] md:pt-0">
            <span>Choose relevant job opening</span>
            <span className="absolute right-4 bottom-3"><Chevron /></span>
            <select disabled aria-label="Choose relevant job opening" className={selectClassName} defaultValue="">
              <option value="" disabled>Choose relevant job opening</option>
              <option>Designer</option>
              <option>Product Manager</option>
              <option>Content Writer</option>
              <option>Developer</option>
            </select>
          </div>

          <div className="relative flex h-[75px] items-start border-b-2 border-[#525252] pt-2 font-serif text-[16px] italic md:h-[135px] md:pt-[72px]">
            <span>What’s your employment status?</span>
            <span className="absolute right-4 bottom-3"><Chevron /></span>
            <select disabled aria-label="What’s your employment status?" className={selectClassName} defaultValue="">
              <option value="" disabled>What’s your employment status?</option>
              <option>Student</option>
              <option>Employed</option>
              <option>Unemployed</option>
              <option>Other</option>
            </select>
          </div>

          <div className="relative flex h-[75px] items-start border-b-2 border-[#525252] pt-2 font-serif text-[16px] italic md:h-[135px] md:pt-[72px]">
            <span>Do you have previous experience?</span>
            <span className="absolute right-4 bottom-3"><Chevron /></span>
            <select disabled aria-label="Do you have previous experience?" className={selectClassName} defaultValue="">
              <option value="" disabled>Do you have previous experience?</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <a href="mailto:contact@lovemind.net?subject=Application%3A%20Job%20Opening" className="mt-6 ml-11 inline-block font-serif text-[16px] italic text-[#6c6256] hover:text-black md:float-right md:mt-16 md:mr-3 md:ml-0">
            Next
          </a>
        </div>
      </div>
    </section>
  );
}

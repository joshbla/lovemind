type JobDetailProps = {
  title: string;
  pay: string;
  required: readonly string[];
  preferred: string;
  transcript: string;
};

function ApplicationIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 54" className="h-12 w-11 fill-none stroke-current stroke-[1.7]">
      <rect x="7" y="3" width="34" height="47" />
      <circle cx="24" cy="16" r="4" />
      <path d="M16 28c1-6 5-9 8-9s7 3 8 9c-2 3-5 4-8 4s-6-1-8-4ZM14 38h20M14 43h20" />
    </svg>
  );
}

export function JobDetail({ title, pay, required, preferred, transcript }: JobDetailProps) {
  const subject = encodeURIComponent(`Application: ${title}`);
  const emailHref = `mailto:contact@lovemind.net?subject=${subject}`;

  return (
    <section className="min-h-[1500px] bg-[#1d1d1d] px-5 pt-3 pb-24 text-white md:min-h-[1510px] md:px-8 md:pt-16">
      <div className="mx-auto max-w-[770px] text-[18px] leading-[1.12] font-normal md:text-[17px] md:leading-[1.18]">
        <div className="hidden flex-col items-center md:flex">
          <ApplicationIcon />
          <p className="mt-16 text-[12px]">Published January 25, 2021</p>
          <h1 className="mt-12 text-center text-[34px] leading-none">{title}</h1>
        </div>

        <p className="text-center text-[12px] md:hidden">Published January 25, 2021</p>

        <div className="mt-5 text-center md:mt-12 md:text-left">
          <p>Mission: To promptly, professionally, and respectfully school clients</p>

          <div className="mt-6 md:mt-7">
            <p>Outcomes:</p>
            <ul className="mx-auto mt-1 max-w-[285px] list-disc space-y-1 pl-6 md:mx-0 md:max-w-none md:space-y-0">
              <li>Ensure clients are appropriately grounded in concepts they previously showed unease.</li>
              <li>Improve client&apos;s scores on HW, Quizzes, Tests, Midterms, and Final.</li>
              <li>If previously failing, ensure the client passes their courses.</li>
              <li>If the client is scoring lower than expected, ensure the client achieves their goals.</li>
            </ul>
          </div>

          <div className="mt-6 md:mt-7">
            <p>Competencies (Required):</p>
            <ul className="mx-auto mt-1 max-w-[285px] list-disc space-y-1 pl-6 md:mx-0 md:max-w-none md:space-y-0">
              {required.map((competency) => <li key={competency}>{competency}</li>)}
            </ul>
          </div>

          <div className="mt-6 md:mt-7">
            <p>Competencies (Preferred):</p>
            <ul className="mx-auto mt-1 max-w-[285px] list-disc pl-6 md:mx-0 md:max-w-none">
              <li>{preferred}</li>
            </ul>
          </div>

          <p className="mt-11 md:mt-12">
            We are promoting quickly in all serviced areas; if you show tutoring capability and entrepreneurial interest, you will be selected as a local manager candidate.
          </p>

          <p className="mt-11 md:mt-12">Pay: {pay}</p>
          <p className="mt-7 md:mt-6">Position: Independent Contractor</p>

          <div className="mt-20 md:mt-24">
            <p>Apply Below:</p>
            <p className="mt-6 md:mt-7">
              Click the button or email <a href={emailHref} className="underline">contact@lovemind.net</a> with your
            </p>
            <ul className="mx-auto mt-1 max-w-[285px] list-disc space-y-1 pl-6 md:mx-0 md:max-w-none md:space-y-0">
              <li>Resume</li>
              <li>{transcript}</li>
              <li>Employment Status: Employed (full-time or part-time) or Unemployed</li>
              <li>Education Status: Student or Non-student</li>
            </ul>
          </div>

          <div className="mt-14 border-t-[3px] border-white pt-3 text-center md:mx-auto md:mt-28 md:w-[285px]">
            <a href={emailHref} className="inline-flex h-[42px] w-[143px] items-center justify-center gap-2 bg-[#08aeef] text-[14px] tracking-[0.08em] transition-colors hover:bg-[#087fb0] md:h-[41px]">
              Apply
              <span aria-hidden="true" className="text-[15px]">&#9993;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import collage from "../../../reference/wix/media/5366845b62fe-990592_5022af17018843f98700fcd02a2da947~mv2.png";

export const metadata: Metadata = {
  title: { absolute: "About | Lovemind" },
  openGraph: { title: "About | Lovemind" },
};

export default function AboutPage() {
  return (
    <div className="relative isolate overflow-hidden bg-[#1d1d1d] px-4 pb-14 text-white sm:px-8 md:min-h-[1340px] md:pb-20">
      <div
        className="absolute inset-y-0 left-1/2 -z-20 w-full max-w-[546px] -translate-x-1/2 bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: `url(${collage.src})` }}
      />
      <div className="absolute inset-0 -z-10 bg-black/20 md:bg-black/5" />

      <div className="mx-auto max-w-[914px] pt-3 md:pt-[108px]">
        <h1 className="mx-auto flex min-h-[132px] max-w-[546px] items-center justify-center text-2xl font-bold md:min-h-[140px] md:text-[28px]">
          ABOUT US
        </h1>

        <div className="bg-[#292929]/90 px-5 py-10 text-[16px] leading-[1.18] sm:px-8 md:px-5 md:py-6 md:text-[19px] md:leading-[1.22]">
          <div className="space-y-6">
            <p>In 2018, Lovemind International began as a think tank for sociology, psychology, philosophers, transhumanists, computer scientists, statisticians, psychometricians, psychohistorians, logicians, neurologists, physicians, physical scientists, futurists, prodigies, academic outcasts, and William Gibson (who is free to join whenever he pleases). Lovemind&apos;s mission is to improve and formalize human intelligence on a mass scale.</p>
            <p>Presently we’ve changed from thinking to doing. Lovemind&apos;s first service for intelligence enhancement is</p>
            <p>Lovemind is also a stronghold of psychedelic research. Our current services of that variety include studies on psychological harm reduction via psychedelic supervision and guidance. However, our laudable locations presently available to Study Volunteers are not viewable through this website. We commend countries (The Netherlands, Jamaica, Brazil), states/provinces (Washington-USA, District of Columbia-USA.), and principalities (Boulder-Colorado, who are pioneering the next stage of medicalization.</p>
            <p>Our present is nearing the end of an era to be known for its immense predilection toward mental disease, marked by suicide, imprisonment, and pseudo-scientific reasoning, and the dearth of computerized agent-based modeling inherent within future regulatory bodies. The era will be marked as the end of antiquated social policies whose supposed safety inadvertently blunted the intelligence of world citizenry and stalled scientific and technological progress.</p>
            <p>Our mission is to enable our clients to be their own keepers, if not leaders, in a connected world.</p>
            <p>Our goal is to keep our standards above those of the times they are employed. We have recognized that standards, like time, only move in one direction, up.</p>
          </div>

          <div className="h-[150px] md:h-[155px]" aria-hidden="true" />

          <div className="space-y-7">
            <p>If you are interested in joining a round of the original council, submit a tailored resume and your rationale for how your inclusion will enhance our ability to plan for a sustainable future for humanity.</p>
            <a href="mailto:contact@lovemind.net?subject=Join%20Council" className="inline-block underline underline-offset-2 transition-colors hover:text-brand-blue focus:text-brand-blue">
              contact@lovemind.net
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

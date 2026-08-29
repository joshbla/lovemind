import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import undergraduateTutor from "../../../reference/wix/media/6a82631b699f-nsplsh_376c72796f664a30483973~mv2_d_5425_3617_s_4_2.jpg";
import highSchoolTutor from "../../../reference/wix/media/333447ba990a-11062b_4817a6cd5bac4c0693280ee8ebca1b86~mv2.jpg";
import tdcsTherapist from "../../../reference/wix/media/eb11539772b4-990592_1d697054131840d4851346e179ab6966~mv2.png";
import studyVolunteer from "../../../reference/wix/media/8b649bffae8a-11062b_460fa6251e7346f6813f08890f19b1ae~mv2.jpeg";
import chiefFinancialOfficer from "../../../reference/wix/media/bc1d6b249086-11062b_61e30c5df9b8428481c7f30e6841d2e7~mv2.jpeg";
import chiefMarketingOfficer from "../../../reference/wix/media/63030a0a231e-nsplsh_f8ce1c7932144f29a0ae52776ff069ee~mv2.jpg";
import chiefPrivacyOfficer from "../../../reference/wix/media/79b22b611332-nsplsh_7bec29a0f3694674b1ec16d85e58ac00~mv2.jpg";
import chiefMedicalOfficer from "../../../reference/wix/media/201d872d7682-11062b_2c23cd4b2bb245f39ac7216f64b581ac~mv2.jpeg";
import politicalEmissary from "../../../reference/wix/media/6b9db04ff152-a820ec144676470a81aedbceb3e8f152.jpg";
import corporateEmissary from "../../../reference/wix/media/8b940fb05409-cc6285ea524b460cbef3d2a08e55cfe7.jpg";

export const metadata: Metadata = {
  title: { absolute: "Lovemind | Jobs" },
  openGraph: { title: "Lovemind | Jobs" },
};

type Role = {
  title: string;
  image: StaticImageData;
  href: string;
  desktopOnly?: boolean;
};

const roles: readonly Role[] = [
  { title: "Undergraduate Tutor", image: undergraduateTutor, href: "/undergraduate-tutor" },
  { title: "High School Tutor", image: highSchoolTutor, href: "/high-school-tutor" },
  { title: "tDCS Therapist", image: tdcsTherapist, href: "mailto:contact@lovemind.net?subject=Application%3A%20tDCS%20Therapist" },
  { title: "Study Volunteer", image: studyVolunteer, href: "mailto:contact@lovemind.net?subject=Application%3A%20Study%20Volunteer" },
  { title: "Chief Financial Officer", image: chiefFinancialOfficer, href: "mailto:contact@lovemind.net?subject=Application%3A%20Chief%20Financial%20Officer" },
  { title: "Chief Marketing Officer", image: chiefMarketingOfficer, href: "mailto:contact@lovemind.net?subject=Application%3A%20Chief%20Marketing%20Officer" },
  { title: "Chief Privacy Officer", image: chiefPrivacyOfficer, href: "mailto:contact@lovemind.net?subject=Application%3A%20Chief%20Privacy%20Officer" },
  { title: "Chief Medical Officer", image: chiefMedicalOfficer, href: "mailto:contact@lovemind.net?subject=Application%3A%20Chief%20Medical%20Officer" },
  { title: "Political Emissary", image: politicalEmissary, href: "mailto:contact@lovemind.net?subject=Application%3A%20Political%20Emissary", desktopOnly: true },
  { title: "Corporate Emissary", image: corporateEmissary, href: "mailto:contact@lovemind.net?subject=Application%3A%20Corporate%20Emissary", desktopOnly: true },
];

export default function JobsPage() {
  return (
    <section className="min-h-[1585px] bg-[#1d1d1d] px-4 pt-1 pb-24 text-white md:min-h-[1615px] md:px-8 md:pt-9">
      <div className="mx-auto max-w-[940px]">
        <h1 className="text-center text-[24px] font-normal md:text-[34px]">Positions Available</h1>
        <p className="mt-4 text-center text-[20px] md:mt-8 md:text-[17px]">Apply below with your resume</p>

        <div className="mt-8 grid grid-cols-2 gap-3 md:mt-14 md:grid-cols-3 md:gap-[10px]">
          {roles.map((role) => {
            const card = (
              <>
                <Image src={role.image} alt="" fill className="object-cover opacity-[0.12] transition-opacity duration-300 group-hover:opacity-40" sizes="(min-width: 768px) 310px, 43vw" />
                <span className="absolute inset-0 bg-black/75" />
                <span className="relative block max-w-full overflow-hidden text-ellipsis whitespace-nowrap px-3 text-center font-serif text-[23px] font-bold md:px-5 md:text-[20px]">
                  {role.title}
                </span>
              </>
            );

            const classes = `${role.desktopOnly === true ? "hidden md:flex" : "flex"} group relative h-[310px] items-center justify-center overflow-hidden border-[5px] border-black shadow-[0_0_5px_2px_rgba(0,0,0,0.7)] md:h-[305px]`;

            if (role.href.startsWith("/")) {
              return <Link key={role.title} href={role.href} className={classes}>{card}</Link>;
            }

            return <a key={role.title} href={role.href} className={classes}>{card}</a>;
          })}
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import africa from "../../../reference/wix/media/1821c857a253-990592_aa45d3219d9e48c2bd46dfe4f4d5b718~mv2.jpg";
import asia from "../../../reference/wix/media/b098008555a2-990592_86ebcb96674f49b7a03076638dce3050~mv2.jpg";
import joshua from "../../../reference/wix/media/b1bd8eb6fba4-990592_a39f14bda084476b87604941468bb34c~mv2.jpg";
import xinming from "../../../reference/wix/media/5f2be3a0943e-990592_80e92b2919cf41e591c394ff7cbd1dda~mv2.png";
import europe from "../../../reference/wix/media/e8abc2cffd9f-990592_f069c5e65cab43af924bc7c811aef4fd~mv2.png";
import background from "../../../reference/wix/media/62daf3bf13dd-990592_b8d3c8dea1c743e8828536229d52e9c6~mv2.jpg";

export const metadata: Metadata = {
  title: { absolute: "Lovemind | Leadership" },
  openGraph: { title: "Lovemind | Leadership" },
};

type Leader = {
  image: StaticImageData;
  name: string;
  role: string;
  linkedIn?: string;
};

const leaders: Leader[] = [
  { image: joshua, name: "Joshua Blake Smith", role: "Chief Executive", linkedIn: "https://www.linkedin.com/in/joshuablakesmith/" },
  { image: xinming, name: "Dr. Xinming Ren", role: "Chief Advisor", linkedIn: "https://www.linkedin.com/in/xinming-ren-9a761290/" },
  { image: europe, name: "TBA", role: "Chief over Europe" },
  { image: africa, name: "TBA", role: "Chief over Africa" },
  { image: asia, name: "TBA", role: "Chief over Asia" },
];

function Profile({ leader, provisional }: { leader: Leader; provisional: boolean }) {
  return (
    <article className="flex flex-col items-center text-center text-black">
      <Image src={leader.image} alt="" className="h-[216px] w-[216px] rounded-full object-cover max-md:h-[180px] max-md:w-[180px]" sizes="216px" />
      <h2 className={`mt-6 text-[24px] leading-none font-normal max-md:max-w-24 max-md:text-[18px] ${provisional ? "max-md:order-4 max-md:mt-3" : ""}`}>{leader.name}</h2>
      <p className={`mt-3 text-[19px] leading-none max-md:text-[16px] ${provisional ? "max-md:order-2 max-md:mt-4" : ""}`}>{leader.role}</p>
      {leader.linkedIn ? (
        <a href={leader.linkedIn} target="_blank" rel="noreferrer" aria-label={`${leader.name} on LinkedIn`} className="mt-5 text-[38px] leading-none font-bold text-neutral-400 transition-colors hover:text-[#0a66c2] max-md:text-[27px]">
          in
        </a>
      ) : (
        <svg aria-hidden="true" viewBox="0 0 48 48" className="mt-5 h-11 w-11 fill-none stroke-neutral-600 stroke-2 max-md:order-3 max-md:mt-3 max-md:h-10 max-md:w-10">
          <path d="M38 18A15 15 0 1 0 39 29" />
          <path d="m32 12 7 6 5-8M16 36l-7-6-5 8" />
        </svg>
      )}
    </article>
  );
}

export default function LeadershipPage() {
  return (
    <section className="relative isolate min-h-[2500px] overflow-hidden py-16 text-white md:min-h-[1430px] md:py-[72px]">
      <Image src={background} alt="" fill priority className="-z-20 object-cover object-center blur-[5px] scale-[1.02]" sizes="100vw" />
      <div className="absolute inset-0 -z-10 bg-white/15" />

      <h1 className="text-center text-[42px] font-normal max-md:text-[30px]">Leadership</h1>
      <div className="mx-auto mt-7 h-[3px] w-8 bg-black" />

      <div className="mx-auto mt-8 grid max-w-[980px] grid-cols-6 gap-x-10 gap-y-[170px] bg-neutral-400/55 px-14 py-11 max-md:mt-3 max-md:flex max-md:max-w-none max-md:flex-col max-md:gap-16 max-md:bg-white/15 max-md:px-5 max-md:py-5 md:min-h-[970px]">
        <div className="col-span-3"><Profile leader={leaders[0]} provisional={false} /></div>
        <div className="col-span-3"><Profile leader={leaders[1]} provisional={false} /></div>
        <div className="col-span-2"><Profile leader={leaders[2]} provisional /></div>
        <div className="col-span-2"><Profile leader={leaders[3]} provisional /></div>
        <div className="col-span-2"><Profile leader={leaders[4]} provisional /></div>
      </div>
    </section>
  );
}

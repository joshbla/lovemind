import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import backgroundImage from "../../../reference/wix/media/3a8ac20ba346-990592_3cc96797f8ee4779ba4e7123c05b6019~mv2.jpg";
import highSchoolImage from "../../../reference/wix/media/333447ba990a-11062b_4817a6cd5bac4c0693280ee8ebca1b86~mv2.jpg";
import undergraduateImage from "../../../reference/wix/media/265110aa15d4-11062b_35b37fde58cf4793b431665e2fd3190f~mv2.jpg";
import chineseImage from "../../../reference/wix/media/ee1b029e8bad-11062b_3a9735e70c9f4c4e995cb9803b1e0ded~mv2.jpeg";

export const metadata: Metadata = {
  title: { absolute: "Lovemind | Session" },
  keywords: ["Keep", "Thinking"],
  openGraph: { title: "Lovemind | Session", images: ["/media/logo.png"] },
};

type Service = {
  name: string;
  slug: string;
  image: StaticImageData;
  price: string;
  hasPlans: boolean;
};

const services: readonly Service[] = [
  { name: "High School Tutoring", slug: "high-school-tutoring", image: highSchoolImage, price: "$34.99", hasPlans: true },
  { name: "Undergraduate Tutoring", slug: "undergraduate-tutoring", image: undergraduateImage, price: "$39.99", hasPlans: true },
  { name: "Trial - High School Tutoring", slug: "trial-high-school-tutoring", image: highSchoolImage, price: "Free", hasPlans: false },
  { name: "Trial - Undergraduate Tutoring", slug: "trial-undergraduate-tutoring", image: undergraduateImage, price: "Free", hasPlans: false },
  { name: "Chinese Tutoring", slug: "chinese-tutoring", image: chineseImage, price: "$49.99", hasPlans: true },
  { name: "Trial - Chinese Tutoring", slug: "trial-chinese-tutoring", image: chineseImage, price: "Free", hasPlans: false },
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="relative mx-auto w-full max-w-[940px] border border-[#d0d0d0] bg-white text-[#292929] md:h-[502px] md:border-0 md:bg-transparent">
      <div className="relative aspect-[3/2] w-full md:h-[502px] md:w-[530px]">
        <Image src={service.image} alt="" fill className="object-cover" sizes="(min-width: 768px) 530px, 100vw" />
      </div>
      <div className="flex min-h-[275px] flex-col bg-white p-6 md:absolute md:top-[50px] md:right-0 md:h-[400px] md:w-[470px] md:border md:border-[#d0d0d0] md:p-8">
        <h2 className="text-[20px] leading-[1.25] font-normal md:text-[22px]">{service.name}</h2>
        <Link href={`/service-page/${service.slug}`} className="mt-3 w-max text-sm underline underline-offset-2">Read More</Link>
        <hr className="mt-6 border-[#d0d0d0]" />
        <p className="mt-7 text-sm">1 hr</p>
        <p className="mt-2 text-sm">{service.price}</p>
        <span aria-disabled="true" className="mt-6 flex h-[42px] w-full cursor-default items-center justify-center rounded-full bg-[#4387b9] text-sm text-white select-none md:w-[108px]">Book Now</span>
        {service.hasPlans && <Link href="/plans" className="mt-4 w-max text-sm underline underline-offset-2">Explore Plans</Link>}
      </div>
    </article>
  );
}

export default function SessionPage() {
  const backgroundServices = services.slice(0, 4);
  const remainingServices = services.slice(4);

  return (
    <div className="bg-white">
      <section className="relative isolate px-7 py-4 md:px-8 md:pt-24 md:pb-20">
        <Image src={backgroundImage} alt="" fill priority className="-z-10 hidden object-cover md:block" sizes="100vw" />
        <h1 className="mb-16 hidden text-center text-[30px] font-normal text-white md:block">Single Sessions</h1>
        <div className="space-y-4 md:space-y-16">
          {backgroundServices.map((service) => <ServiceCard key={service.name} service={service} />)}
        </div>
      </section>

      <section className="space-y-4 px-7 pt-0 pb-20 md:space-y-16 md:px-8 md:pt-20">
        {remainingServices.map((service) => <ServiceCard key={service.name} service={service} />)}
      </section>
    </div>
  );
}

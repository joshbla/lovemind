import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isServiceSlug, services, serviceSlugs, type ServiceSlug } from "../services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams(): { slug: ServiceSlug }[] {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!isServiceSlug(slug)) {
    notFound();
  }

  const service = services[slug];
  const metadata: Metadata = {
    title: { absolute: service.metadataTitle },
    openGraph: {
      title: service.metadataTitle,
      type: "website",
      siteName: "Lovemind",
      images: [{ url: service.image.src }],
    },
  };

  if ("metadataDescription" in service) {
    metadata.description = service.metadataDescription;
    metadata.openGraph = {
      ...metadata.openGraph,
      description: service.metadataDescription,
    };
  }

  return metadata;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;

  if (!isServiceSlug(slug)) {
    notFound();
  }

  const service = services[slug];

  return (
    <div className="bg-white px-5 pt-[72px] pb-16 text-[#292929] sm:px-8 md:pt-[74px]">
      <article className="mx-auto max-w-[720px] text-center">
        <header>
          <h1 className="mx-auto max-w-[680px] text-[32px] leading-[1.35] font-normal md:text-[40px]">
            {service.title}
          </h1>

          <div className="mx-auto mt-8 grid w-full max-w-max grid-cols-2 border-t border-l border-[#d4d4d4] text-sm sm:flex sm:text-base">
            <span className="flex min-h-[52px] items-center justify-center border-r border-b border-[#d4d4d4] px-4 sm:min-h-[60px]">
              {service.duration}
            </span>
            <span className="flex min-h-[52px] items-center justify-center border-r border-b border-[#d4d4d4] px-4 sm:min-h-[60px]">
              {service.price}
            </span>
            <span className="col-span-2 flex min-h-[52px] items-center justify-center border-r border-b border-[#d4d4d4] px-4 sm:min-h-[60px] sm:max-w-none">
              {service.venue}
            </span>
          </div>

          <span aria-disabled="true" className="mx-auto mt-8 flex h-[42px] w-[132px] cursor-default items-center justify-center bg-[#4387b9] text-base text-white select-none">
            Book Now
          </span>
        </header>

        {service.description.length > 0 && (
          <section className="mt-8 border-t border-[#d2d2d2] pt-8">
            <h2 className="text-xl font-normal">Service Description</h2>
            <div className="mt-5 space-y-7 text-[15px] leading-[1.28] sm:text-[17px] sm:leading-[1.5]">
              {service.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        )}

        <section className="mt-8 border-t border-[#d2d2d2] pt-8">
          <h2 className="text-xl font-normal">Cancellation Policy</h2>
          <p className="mt-5 text-[15px] leading-[1.35] sm:text-[17px]">
            To cancel or reschedule please contact us at least 24 hours in advance.
          </p>
        </section>

        <section className="mt-8 border-y border-[#d2d2d2] py-8">
          <h2 className="text-xl font-normal">Contact Details</h2>
          <a href="mailto:contact@lovemind.net" className="mt-5 inline-block text-[15px] sm:text-[17px] hover:text-[#4387b9]">
            contact@lovemind.net
          </a>
        </section>
      </article>
    </div>
  );
}

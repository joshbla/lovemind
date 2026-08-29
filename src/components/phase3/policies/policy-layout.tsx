import Image from "next/image";
import type { ReactNode } from "react";
import policyBackground from "../../../../reference/wix/media/179526f02bb48cff-ff2c0fa76a5347f3b0f298d9feb685de.jpg";

export function PolicyLayout({ children, className }: { children: ReactNode; className: string }) {
  return (
    <section className={`relative isolate overflow-hidden bg-black text-white ${className}`}>
      <Image
        src={policyBackground}
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover opacity-[0.025]"
      />
      <div className="absolute inset-0 -z-10 bg-black/95" />
      {children}
    </section>
  );
}

export function PolicyDocument({ children, title }: { children: ReactNode; title: string }) {
  return (
    <PolicyLayout className="px-5 pt-8 pb-16 md:px-8 md:pt-10 md:pb-24">
      <article className="mx-auto max-w-[620px] text-[14px] leading-[1.08] text-white">
        <h1 className="mb-12 text-center text-[28px] leading-tight font-bold md:mb-14 md:text-[36px]">{title}</h1>
        <div className="space-y-4">{children}</div>
      </article>
    </PolicyLayout>
  );
}

export function PolicyHeading({ children }: { children: ReactNode }) {
  return <h2 className="font-bold">{children}</h2>;
}

export function PolicyLink({ children, href }: { children: ReactNode; href: string }) {
  return <a href={href} className="underline">{children}</a>;
}

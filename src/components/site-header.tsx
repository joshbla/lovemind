"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SocialIcon } from "@/components/social-icon";

const navigation = [
  {
    label: "Home",
    href: "/",
    children: [],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "High School Tutoring", href: "/high-school" },
      { label: "Undergraduate Tutoring", href: "/undergraduate" },
      { label: "Chinese Tutoring", href: "/chinese" },
      { label: "Plans & Pricing", href: "/plans" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Leadership", href: "/leadership" },
      { label: "Our Philosophy", href: "/philosophy" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    children: [],
  },
  {
    label: "Policies",
    href: "/policies",
    children: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Refunds & Cancelations", href: "/refunds-cancelations" },
      { label: "Fulfillment & Shipping", href: "/shipping" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
  {
    label: "Jobs",
    href: "/jobs",
    children: [],
  },
] as const;

const socialLinks = [
  { name: "instagram", label: "Instagram", href: "https://www.instagram.com/contactlovemind/" },
  { name: "twitter", label: "Twitter", href: "https://twitter.com/contactlovemind" },
  { name: "facebook", label: "Facebook", href: "https://www.facebook.com/lovemind.net" },
  { name: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/lovemind-international/" },
] as const;

function routeIsActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

function navigationItemIsActive(pathname: string, item: (typeof navigation)[number]) {
  if (routeIsActive(pathname, item.href)) return true;
  return item.children.some((child) => routeIsActive(pathname, child.href));
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-ink text-white shadow-lg">
      <div className="relative mx-auto flex min-h-[104px] max-w-[1440px] items-start justify-between gap-6 px-5 pt-4 md:min-h-[112px] md:items-center md:px-7 md:pt-0">
        <Link href="/" onClick={() => setMenuOpen(false)} className="flex shrink-0 items-center gap-3">
          <Image src="/media/logo.png" alt="" width={66} height={66} className="h-14 w-14 md:h-[66px] md:w-[66px]" priority />
          <span className="font-brand text-2xl md:text-[28px]">Lovemind</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <div key={item.href} className="group relative">
              <Link href={item.href} aria-haspopup={item.children.length > 0 ? "menu" : undefined} className={`block py-10 text-[22px] font-bold transition-colors duration-200 ${navigationItemIsActive(pathname, item) ? "text-brand-blue" : "hover:text-brand-blue"}`}>
                {item.label}
              </Link>
              {item.children.length > 0 && (
                <div className="invisible absolute top-full left-1/2 min-w-80 -translate-x-1/2 bg-brand-ink opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href} className="block px-8 py-4 text-xl font-bold transition-colors hover:bg-black hover:text-brand-blue">
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="group relative">
            <button type="button" aria-haspopup="menu" className="block cursor-default py-10 text-[22px] font-bold group-hover:text-brand-blue group-focus-within:text-brand-blue">More</button>
            <div className="invisible absolute top-full right-0 min-w-52 bg-brand-ink opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <Link href="/shop" className="block px-8 py-4 text-xl font-bold hover:bg-black hover:text-brand-blue">Shop</Link>
              <Link href="/research" className="block px-8 py-4 text-xl font-bold hover:bg-black hover:text-brand-blue">Research</Link>
            </div>
          </div>
        </nav>

        <div className="hidden min-w-44 flex-col items-end gap-4 md:flex">
          <span className="text-sm text-brand-blue">Log In</span>
          <div className="flex gap-5">
            {socialLinks.map((social) => (
              <a key={social.name} href={social.href} aria-label={social.label} className="h-6 w-6 transition-colors hover:text-brand-blue" target="_blank" rel="noreferrer">
                <SocialIcon name={social.name} />
              </a>
            ))}
          </div>
        </div>

        <button type="button" aria-label="Toggle navigation" aria-controls="mobile-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 lg:hidden">
          <span className="h-0.5 w-7 bg-white" />
          <span className="h-0.5 w-7 bg-white" />
          <span className="h-0.5 w-7 bg-white" />
        </button>

        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-5 md:hidden">
          {socialLinks.map((social) => (
            <a key={social.name} href={social.href} aria-label={social.label} className="h-5 w-5 transition-colors hover:text-brand-blue" target="_blank" rel="noreferrer">
              <SocialIcon name={social.name} />
            </a>
          ))}
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="max-h-[calc(100vh_-_104px)] overflow-y-auto border-t border-white/10 bg-brand-ink px-6 py-5 lg:hidden">
          {navigation.map((item) => (
            <div key={item.href} className="border-b border-white/10 py-3">
              <Link href={item.href} onClick={() => setMenuOpen(false)} className={`block py-2 text-xl font-bold ${navigationItemIsActive(pathname, item) ? "text-brand-blue" : "text-white"}`}>{item.label}</Link>
              {item.children.map((child) => (
                <Link key={child.href} href={child.href} onClick={() => setMenuOpen(false)} className="block py-2 pl-5 text-base text-white/85 hover:text-brand-blue">{child.label}</Link>
              ))}
            </div>
          ))}
          <Link href="/shop" onClick={() => setMenuOpen(false)} className="block py-3 text-xl font-bold">Shop</Link>
          <Link href="/research" onClick={() => setMenuOpen(false)} className="block py-3 text-xl font-bold">Research</Link>
          <div className="mt-5 flex gap-6">
            {socialLinks.map((social) => (
              <a key={social.name} href={social.href} aria-label={social.label} className="h-6 w-6" target="_blank" rel="noreferrer"><SocialIcon name={social.name} /></a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

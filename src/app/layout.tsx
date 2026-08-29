import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lovemind.net"),
  title: {
    default: "Tutors | Lovemind",
    template: "%s | Lovemind",
  },
  description: "Find a Lovemind tutor for any class or subject in high school and college.",
  openGraph: {
    type: "website",
    siteName: "Lovemind",
    title: "Tutors | Lovemind",
    description: "Find a Lovemind tutor for any class or subject in high school and college.",
    images: ["/media/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tutors | Lovemind",
    description: "Find a Lovemind tutor for any class or subject in high school and college.",
    images: ["/media/logo.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white antialiased">
        <a href="#main-content" className="fixed top-3 left-3 z-[100] -translate-y-24 rounded bg-white px-4 py-2 font-bold text-black transition-transform focus:translate-y-0">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

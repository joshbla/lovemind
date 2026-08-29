"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  "/media/home-vessels.jpg",
  "/media/home-neurons.jpg",
  "/media/home-galaxy.jpg",
  "/media/home-abstract.jpg",
] as const;

export function HomeHero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section aria-roledescription="carousel" aria-label="Lovemind introduction" className="relative h-[450px] overflow-hidden md:h-[760px]">
      {slides.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={index === 0}
          className={`object-cover transition-opacity duration-1000 ${index === activeSlide ? "opacity-100" : "opacity-0"}`}
          sizes="100vw"
        />
      ))}
      <div className="absolute inset-0 bg-black/12" />
      <div className="relative z-10 flex h-full flex-col items-center justify-between px-6 pt-14 pb-8 text-center text-white md:pt-20 md:pb-12">
        <h1 className="text-5xl leading-[1.05] font-bold drop-shadow-lg md:text-7xl">
          Health-Centered<br />Tutoring
        </h1>
        <p className="max-w-xl text-2xl leading-[1.25] tracking-[0.08em] drop-shadow-lg md:text-4xl">
          Tutoring that permanently<br className="hidden md:block" /> increases your intelligence.
        </p>
        <div className="flex gap-3" role="group" aria-label="Choose slide">
          {slides.map((src, index) => (
            <button
              key={src}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              aria-current={index === activeSlide ? "true" : undefined}
              onClick={() => setActiveSlide(index)}
              className={`h-4 w-4 rounded-full border border-white transition-colors ${index === activeSlide ? "bg-white" : "bg-white/45 hover:bg-white/75"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

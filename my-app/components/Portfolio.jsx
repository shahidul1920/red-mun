"use client";

import { useRef } from "react";
import gsap from "gsap";
import HeadNtext from "./HeadNtext";
import Image from "next/image";
import texture from "@/images/bg/texture.jpg";
import designImg from "@/images/other/design.jpg";
import marketingImg from "@/images/other/brand-creation.jpg";
import webImg from "@/images/other/web.jpg";
import data from "@/images/other/data.jpg";
import Link from "next/link";

const portfolioItems = [
  {
    id: 1,
    name: "Our Design Work",
    src: designImg,
    alt: "Portfolio design work",
    link: "/",
  },
  {
    id: 2,
    name: "Brand Identity Creation",
    src: marketingImg,
    alt: "Portfolio Brand Identity",
    link: "/",
  },
  {
    id: 3,
    name: "Web Development",
    src: webImg,
    alt: "Portfolio Web Development",
    link: "/",
  },
  {
    id: 4,
    name: "Data Analysis",
    src: data,
    alt: "Portfolio data analysis",
    link: "/",
  },
];

const DEFAULT_ACTIVE_INDEX = 0;

const Portfolio = () => {
  const containerRef = useRef(null);

  const handleEnter = (e) => {
    const panels = containerRef.current.querySelectorAll(".portfolio-panel");
    panels.forEach((panel) => {
      const isActive = panel === e.currentTarget;
      gsap.to(panel, {
        flexGrow: isActive ? 5 : 1,
        duration: 0.7,
        ease: "power3.out",
      });
      gsap.to(panel.querySelector(".portfolio-overlay"), {
        opacity: isActive ? 1 : 0,
        duration: 0.5,
      });
      gsap.to(panel.querySelector(".portfolio-title"), {
        opacity: isActive ? 1 : 0,
        y: isActive ? 0 : -16,
        duration: 0.5,
        ease: "power2.out",
      });
    });
  };

  const handleLeave = () => {
    const panels = Array.from(
      containerRef.current.querySelectorAll(".portfolio-panel"),
    );
    panels.forEach((panel, index) => {
      const isDefault = index === DEFAULT_ACTIVE_INDEX;
      gsap.to(panel, {
        flexGrow: isDefault ? 5 : 1,
        duration: 0.7,
        ease: "power3.out",
      });
      gsap.to(panel.querySelector(".portfolio-overlay"), {
        opacity: isDefault ? 1 : 0,
        duration: 0.4,
      });
      gsap.to(panel.querySelector(".portfolio-title"), {
        opacity: isDefault ? 1 : 0,
        y: isDefault ? 0 : -16,
        duration: 0.4,
      });
    });
  };

  return (
    <div className="bg-mpure relative py-20 md:py-28">
      <section className="container relative mx-auto px-4 z-20">
        <HeadNtext
          heading="Portfolio"
          text="We believe great work is the foundation of a great partnership. Each project we deliver is a testament of attentiveness, creative thinking and thoughtful execution. We don't stop until it's perfect, providing multiple revisions to ensure the final result exceeds your expectations. Take a look at what we've been building in the sections below."
        />

        {/* Mobile / tablet: simple stacked cards (hover-expand doesn't translate to touch) */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:hidden">
          {portfolioItems.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="group relative block aspect-[4/3] overflow-hidden rounded-xl shadow-lg border-6 border-white"
            >
              <Image
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <h3 className="absolute bottom-4 left-4 right-4 text-lg font-bold text-white">
                {item.name}
              </h3>
            </Link>
          ))}
        </div>

        {/* Desktop: expanding fan gallery */}
        <div
          ref={containerRef}
          onMouseLeave={handleLeave}
          className="mt-12 hidden h-[460px] gap-2 md:flex lg:h-[560px] lg:gap-3"
        >
          {portfolioItems.map((item, index) => (
            <Link
              key={item.id}
              href={item.link}
              onMouseEnter={handleEnter}
              className="portfolio-panel relative h-full overflow-hidden rounded-xl"
              style={{
                flexGrow: index === DEFAULT_ACTIVE_INDEX ? 5 : 1,
                flexBasis: 0,
                flexShrink: 1,
              }}
            >
              <Image
                className="object-cover"
                src={item.src}
                alt={item.alt}
                fill
                sizes="25vw"
              />
              <div
                className={`portfolio-overlay absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-transparent ${
                  index === DEFAULT_ACTIVE_INDEX ? "opacity-100" : "opacity-0"
                }`}
              />
              <h3
                className={`portfolio-title absolute left-6 top-6 whitespace-nowrap text-xl font-bold text-white lg:text-2xl ${
                  index === DEFAULT_ACTIVE_INDEX ? "opacity-100" : "opacity-0"
                }`}
              >
                {item.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      <div className="absolute left-0 top-0 z-10 size-full bg-black/20"></div>
      <Image
        className="pointer-events-none absolute left-0 top-0 h-full w-full object-cover opacity-20 z-25 mix-blend-overlay"
        src={texture}
        alt="Portfolio background texture"
        fill
      />
    </div>
  );
};

export default Portfolio;

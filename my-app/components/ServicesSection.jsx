"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeadNtext from "./HeadNtext";
import Link from "next/link";
import { Palette, Share2, Wand2, Scissors, Code2, BarChart3 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    heading: "Creative Design",
    text: "Transform your ideas into visually stunning designs that captivate your audience.",
    pageUrl: "/services/creative-design",
    icon: Palette,
  },
  {
    heading: "Social Media Management",
    text: "Engage your audience and grow your online presence with our strategic social media management.",
    pageUrl: "/services/social-media-management",
    icon: Share2,
  },
  {
    heading: "AI Video Creation",
    text: "Create stunning videos with the power of AI.",
    pageUrl: "/services/ai-video-creation",
    icon: Wand2,
  },
  {
    heading: "Video Editing",
    text: "Professional video editing to bring your stories to life.",
    pageUrl: "/services/video-editing",
    icon: Scissors,
  },
  {
    heading: "Website Development",
    text: "Build a modern, responsive website that represents your brand.",
    pageUrl: "/services/website-development",
    icon: Code2,
  },
  {
    heading: "Data Analytics",
    text: "Make informed decisions with our comprehensive data analytics services.",
    pageUrl: "/services/data-analytics",
    icon: BarChart3,
  },
];

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        },
      );

      const cards = gsap.utils.toArray(".service-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 48 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="srv relative w-full overflow-hidden bg-[#F6F4EF] py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#16181F_1px,transparent_1px)] [background-size:22px_22px]"
      />

      <div className="m container relative mx-auto px-4">
        <div ref={headingRef}>
          <HeadNtext
            heading="Explore Our Services"
            text="Empower your brand with a digital presence that stands out. We offer a full range of services, including creative design, social media, meta marketing, and data analytics to present insights of your data. We offer custom-built packages to fit your vision. See how we can help you grow."
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="service-card group flex h-full flex-col rounded-2xl border border-[#16181F]/8 bg-white p-6 shadow-[0_1px_2px_rgba(22,24,31,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-[0_16px_32px_rgba(22,24,31,0.08)] md:p-8"
              >
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="h-5 w-5 text-brand" strokeWidth={1.75} />
                </span>

                <h3
                  style={{ fontFamily: "var(--font-display, inherit)" }}
                  className="mb-2 text-xl font-semibold text-[#16181F] md:text-2xl"
                >
                  {service.heading}
                </h3>

                <p className="flex-1 text-sm leading-relaxed text-[#4B4D59] md:text-base">
                  {service.text}
                </p>

                <Link
                  href={service.pageUrl}
                  className="group/link mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand"
                >
                  <span className="underline-offset-4 group-hover/link:underline">
                    Explore
                  </span>
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover/link:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
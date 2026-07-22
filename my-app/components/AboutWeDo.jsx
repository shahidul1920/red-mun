"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Palette,
  Share2,
  Fingerprint,
  Film,
  Clapperboard,
  Image as ImageIcon,
  Users,
  Megaphone,
  CalendarCheck,
  Code2,
  BarChart3,
} from "lucide-react";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  { name: "Creative Designs", icon: Palette },
  { name: "Social Media Content Creation", icon: Share2 },
  { name: "Brand Identity Creation", icon: Fingerprint },
  { name: "Motion Graphics", icon: Film },
  { name: "Video Editing", icon: Clapperboard },
  { name: "On-demand Graphics Design", icon: ImageIcon },
  { name: "Social Media Management", icon: Users },
  { name: "Meta Marketing", icon: Megaphone },
  { name: "Virtual Event Management", icon: CalendarCheck },
  { name: "Web Development", icon: Code2 },
  { name: "Data Analytics", icon: BarChart3 },
];

const About = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".stack-panel").forEach((panel) => {
        gsap.fromTo(
          panel.querySelectorAll(".reveal"),
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: panel,
              start: "top top+=80",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="relative">
      {/* Panel 1 — Who Are We */}
      <section className="stack-panel sticky top-0 z-10 flex h-screen w-full items-center overflow-hidden bg-brand text-white">
        <span className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 select-none text-[20rem] font-black leading-none text-white/5 md:text-[28rem] lg:text-[34rem]">
          {/* A */}
          <Image
            src="/astha-creatives-logo-1.png"
            alt="Astha Creatives Logo"
            width={500}
            height={500}
            className="brightness-0 invert opacity-20"
          />
        </span>
        <div className="container relative mx-auto px-4">
          <div className="max-w-2xl">
            <span className="reveal mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              01 — Who Are We
            </span>
            <h2 className="reveal text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Astha Creatives
            </h2>
            <p className="reveal mt-6 text-base leading-relaxed text-white/70 md:text-lg">
              Astha Creatives is a forward-thinking digital creative agency
              based in Dhaka, specializing in helping brands grow with clarity,
              consistency, and confidence. We blend creativity, strategy, and
              smart digital solutions to elevate your business presence online.
              From bold visual design to data-driven marketing, our dedicated
              team delivers impactful results that help businesses thrive in a
              competitive digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Panel 2 — Our Mission */}
      <section className="stack-panel sticky top-0 z-20 flex h-screen w-full items-center overflow-hidden rounded-t-[2.5rem] bg-white text-gray-900 shadow-[0_-20px_60px_rgba(0,0,0,0.15)] md:rounded-t-[4rem]">
        <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-brand/10 blur-3xl md:h-96 md:w-96" />
        <div className="container relative mx-auto px-4">
          <div className="ml-auto max-w-2xl md:pr-8 md:text-right">
            <span className="reveal mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-brand/60">
              02 — Our Mission
            </span>
            <h2 className="reveal text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Our Mission
            </h2>
            <p className="reveal mt-6 text-base leading-relaxed text-gray-600 md:text-lg">
              Our mission is to empower businesses with standout creative design
              and performance-focused digital solutions that drive growth,
              engagement, and long-term success. We aim to build meaningful
              connections between brands and their audiences by combining
              aesthetic excellence with measurable marketing strategies. At the
              heart of everything we do is a commitment to quality, innovation,
              and client satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Panel 3 — What We Do */}
      <section className="stack-panel sticky top-0 z-30 flex min-h-screen w-full flex-col justify-center overflow-hidden rounded-t-[2.5rem] bg-gray-950 py-20 text-white shadow-[0_-20px_60px_rgba(0,0,0,0.35)] md:rounded-t-[4rem] md:py-0">
        <div className="container relative mx-auto px-4">
          <span className="reveal mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
            03 — What We Do
          </span>
          <h2 className="reveal text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            What We Do
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.name}
                  className="reveal group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors duration-300 hover:border-brand hover:bg-brandnd"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                    <Icon size={20} />
                  </span>
                  <span className="text-sm font-medium text-white/90 md:text-base">
                    {service.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

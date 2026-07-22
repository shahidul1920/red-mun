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
  Lightbulb,
  Shield,
  Zap,
  Target
} from "lucide-react";

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

const values = [
  { name: "Bold Creativity", desc: "Crafting distinct visual identities that demand attention and break clutter.", icon: Lightbulb },
  { name: "Smart Technology", desc: "Engineering modern, responsive web experiences optimized for scale.", icon: Zap },
  { name: "Actionable Insights", desc: "Driving data-focused, performance-centric digital strategies.", icon: Target },
  { name: "Unwavering Trust", desc: "Operating as a reliable extension of your team with full clarity.", icon: Shield },
];

const AboutWeDo = () => {
  const rootRef = useRef(null);
  const heroHeadingRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Hero entrance reveal
      gsap.fromTo(
        ".hero-anim-element",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.15 }
      );

      // Reveal list cards on scroll
      gsap.utils.toArray(".reveal-on-scroll").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Capabilities grid title reveal
      gsap.fromTo(
        ".grid-title-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".grid-title-reveal",
            start: "top 80%",
          },
        }
      );

      // Reveal capability cards
      gsap.fromTo(
        ".cap-card-reveal",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cap-grid-container",
            start: "top 75%",
          },
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  // GSAP 3D Interactive Card Tilt
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -8;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 8;

    gsap.to(card, {
      rotateX,
      rotateY,
      transformPerspective: 800,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  return (
    <div ref={rootRef} className="bg-[#F6F4EF] text-[#16181F] overflow-hidden font-body">
      {/* 1. Hero Header Section */}
      <section className="relative flex min-h-[50vh] flex-col items-center justify-center pt-32 pb-16 px-4 md:pt-40 md:pb-24 border-b border-[#16181F]/8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#16181F_1px,transparent_1px)] [background-size:22px_22px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-[#E42032]/5 blur-3xl"
        />

        <div className="container relative mx-auto text-center max-w-4xl">
          <span className="hero-anim-element mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#E42032]">
            About Our Agency
          </span>
          <h1
            ref={heroHeadingRef}
            className="hero-anim-element font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight leading-[1.08] text-[#16181F]"
          >
            We are <span className="text-[#E42032]">Redmun</span>.
          </h1>
          <span className="hero-anim-element mt-6 block h-1 w-20 bg-[#E42032] mx-auto rounded-full" />
          <p className="hero-anim-element mt-6 text-base sm:text-lg md:text-xl text-[#4B4D59] leading-relaxed max-w-2xl mx-auto font-light">
            We operate at the intersection of business strategy, custom technology, and high-impact digital experiences. Our passion is scaling legacies.
          </p>
        </div>
      </section>

      {/* 2. Split Story & Values Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Label */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E42032]">
              Our Identity
            </span>
            <h2 className="font-display mt-4 text-3xl sm:text-4xl font-bold uppercase leading-tight text-[#16181F]">
              Pioneering<br className="hidden lg:block"/> digital growth.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-[#4B4D59] max-w-md">
              Based in Dhaka, we are a strategic division of Redmun Digitech. More than an agency, we partner directly with ambitious brands to define visual language and custom web infrastructure.
            </p>
          </div>

          {/* Right Column: Visual Story Cards */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            {/* Story Card 1 - Who We Are */}
            <div className="reveal-on-scroll group relative overflow-hidden rounded-3xl border border-[#16181F]/8 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md md:p-10">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#E42032]/5 to-transparent rounded-bl-full" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#4B4D59]/50 block mb-2">
                01 / Background
              </span>
              <h3 className="font-display text-2xl font-bold text-[#16181F] mb-4">
                Who We Are
              </h3>
              <p className="text-sm leading-relaxed text-[#4B4D59] font-light">
                Redmun is a forward-thinking digital agency specialized in digital product design, search presence, and customized enterprise platforms. We blend strategic thinking with precise implementation to elevate your business presence. From bold visual design to robust database engineering, our dedicated team focuses on metrics that matter: conversion, speed, and long-term scale.
              </p>
            </div>

            {/* Story Card 2 - Our Mission */}
            <div className="reveal-on-scroll group relative overflow-hidden rounded-3xl border border-[#16181F]/8 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md md:p-10">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#E42032]/5 to-transparent rounded-bl-full" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#4B4D59]/50 block mb-2">
                02 / Direction
              </span>
              <h3 className="font-display text-2xl font-bold text-[#16181F] mb-4">
                Our Mission
              </h3>
              <p className="text-sm leading-relaxed text-[#4B4D59] font-light mb-8">
                Our mission is to arm businesses with standout creative design and performance-focused digital solutions that drive authentic growth. We aim to construct deep connections between brands and their audiences by combining aesthetic excellence with measurable technical delivery.
              </p>

              {/* Core Values Mini-Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#16181F]/8">
                {values.map((val) => {
                  const Icon = val.icon;
                  return (
                    <div key={val.name} className="flex gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E42032]/5 text-[#E42032]">
                        <Icon size={18} />
                      </span>
                      <div>
                        <h4 className="font-display text-[15px] font-semibold text-[#16181F]">
                          {val.name}
                        </h4>
                        <p className="mt-1 text-[12px] leading-relaxed text-[#4B4D59]">
                          {val.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Capabilities Grid (What We Do) */}
      <section className="relative w-full bg-[#16181F] py-16 md:py-24 text-white">
        {/* ambient backdrop */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#F6F4EF_1px,transparent_1px)] [background-size:22px_22px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-[#E42032]/5 blur-3xl"
        />

        <div className="container relative mx-auto px-4">
          <div className="grid-title-reveal text-center mb-12 md:mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E42032]">
              What We Do
            </span>
            <h2 className="font-display mt-4 text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
              Our Capabilities
            </h2>
            <span className="mt-4 block h-0.5 w-16 bg-[#E42032] mx-auto rounded-full" />
          </div>

          <div className="cap-grid-container grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.name}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className="cap-card-reveal group relative flex items-center gap-4 rounded-2xl border border-white/8 bg-white/5 p-5 transition-all duration-300 hover:border-[#E42032]/45 hover:bg-white/10 will-change-transform"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#E42032] transition-colors duration-300 group-hover:bg-[#E42032] group-hover:text-white">
                    <Icon size={20} />
                  </span>
                  <span className="font-display text-sm font-semibold tracking-wide text-white/90 group-hover:text-white">
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

export default AboutWeDo;

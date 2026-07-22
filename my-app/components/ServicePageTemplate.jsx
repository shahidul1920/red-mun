"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Minus } from "lucide-react";
import { Space_Grotesk, Inter } from "next/font/google";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Same font pairing as the homepage Hero. If both live in the same app,
 * move this block to app/layout.jsx and drop the className spread below —
 * duplicating it per-component just means the browser reuses the cached
 * font file, but the class instance is regenerated each time.
 */
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

/**
 * Shape of the `service` prop this template expects. Build one of these per
 * service page (see /data/services/social-media-management.js for a full example)
 * and pass it in — the template itself never changes.
 *
 * @typedef {Object} ServiceTier
 * @property {string} name
 * @property {string} description
 * @property {string[]} features
 * @property {boolean} [highlighted]   - gives the card the "featured" treatment
 * @property {string} ctaLabel
 * @property {string} ctaHref
 *
 * @typedef {Object} ComparisonRow
 * @property {string} feature
 * @property {(string|boolean)[]} values  - one entry per tier, same order as `tiers`.
 *                                          `true` renders a check, `false` renders a dash.
 *
 * @typedef {Object} ServiceClosingCta
 * @property {string} heading
 * @property {string} text
 * @property {string} linkText
 * @property {string} linkHref
 * @property {string} buttonLabel
 * @property {string} buttonHref
 *
 * @typedef {Object} ServicePageData
 * @property {string} eyebrow
 * @property {string|import('next/image').StaticImageData} heroImage
 * @property {string} heroTitle
 * @property {string} heroDescription
 * @property {string} introHeading
 * @property {string} introDescription
 * @property {ServiceTier[]} tiers
 * @property {{ rows: ComparisonRow[] }} comparison
 * @property {ServiceClosingCta} closingCta
 */

const renderCell = (value) => {
  if (value === true) {
    return (
      <span className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-brand/10">
        <Check className="h-3.5 w-3.5 text-brand" strokeWidth={3} />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="mx-auto flex h-6 w-6 items-center justify-center">
        <Minus className="h-3.5 w-3.5 text-[#16181F]/25" strokeWidth={2.5} />
      </span>
    );
  }
  return value;
};

/** @param {{ service: ServicePageData }} props */
const ServicePageTemplate = ({ service }) => {
  const rootRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Hero content animates in immediately on load
      gsap.fromTo(
        ".hero-reveal",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 }
      );

      gsap.fromTo(
        ".hero-title-mask",
        { yPercent: 100 },
        { yPercent: 0, duration: 0.9, ease: "power3.out", delay: 0.1 }
      );

      // Everything else reveals as it scrolls into view
      gsap.utils.toArray(".scroll-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 80%" },
          }
        );
      });

      gsap.utils.toArray(".tier-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 48 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 85%" },
          }
        );
      });
    }, rootRef);

    return () => ctx.revert();
    // Re-run if a different `service` is ever swapped into the same mounted template
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [service]);

  return (
    <div
      ref={rootRef}
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      {/* Hero */}
      <section className="relative flex h-[70vh] min-h-[560px] w-full items-end overflow-hidden bg-[#16181F]">
        <Image
          src={service.heroImage}
          alt={service.heroTitle}
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#16181F] via-[#16181F]/70 to-[#16181F]/10" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(#F6F4EF_1px,transparent_1px)] [background-size:22px_22px]"
        />

        <div className="container relative mx-auto px-4 pb-14 md:pb-20">
          <span className="hero-reveal mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {service.eyebrow}
          </span>

          <h1
            style={{ fontFamily: "var(--font-display)" }}
            className="max-w-3xl overflow-hidden text-4xl font-semibold uppercase leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            <span className="hero-title-mask block">{service.heroTitle}</span>
          </h1>

          <p className="hero-reveal mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            {service.heroDescription}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="w-full bg-[#F6F4EF] py-16 md:py-24">
        <div className="scroll-reveal container mx-auto px-4 text-center">
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#16181F]/50">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Overview
          </span>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="mx-auto max-w-4xl text-2xl font-semibold uppercase leading-snug text-[#16181F] md:text-3xl lg:text-4xl"
          >
            {service.introHeading}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-[#4B4D59] md:text-base">
            {service.introDescription}
          </p>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="w-full bg-[#F6F4EF] pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {service.tiers.map((tier) => (
              <div
                key={tier.name}
                className={`tier-card relative flex h-full flex-col rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1 ${
                  tier.highlighted
                    ? "bg-[#16181F] text-white shadow-xl shadow-black/10"
                    : "border border-[#16181F]/10 bg-white text-[#16181F]"
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    Most popular
                  </span>
                )}

                <h3
                  style={{ fontFamily: "var(--font-display)" }}
                  className="text-2xl font-semibold"
                >
                  {tier.name}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    tier.highlighted ? "text-white/60" : "text-[#4B4D59]"
                  }`}
                >
                  {tier.description}
                </p>

                <ul
                  className={`mt-6 flex-1 space-y-3 border-t pt-6 ${
                    tier.highlighted ? "border-white/10" : "border-[#16181F]/10"
                  }`}
                >
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-3 text-sm ${
                        tier.highlighted ? "text-white/80" : "text-[#16181F]/80"
                      }`}
                    >
                      <span
                        className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                          tier.highlighted ? "bg-brand" : "bg-brand"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={tier.ctaHref}
                  className={`mt-8 block w-full rounded-lg py-3 text-center text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                    tier.highlighted
                      ? "bg-brand text-white hover:bg-[#C81A2B]"
                      : "bg-[#16181F] text-white hover:bg-brand"
                  }`}
                >
                  {tier.ctaLabel}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package comparison table */}
      <section className="scroll-reveal w-full bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="mb-10 text-center text-2xl font-semibold text-[#16181F] md:text-3xl"
          >
            Package Comparison
          </h2>

          <div className="relative overflow-hidden rounded-2xl border border-[#16181F]/10">
            <div className="overflow-x-auto [mask-image:linear-gradient(to_right,black_92%,transparent)] sm:[mask-image:none]">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="bg-[#16181F]">
                    <th
                      style={{ fontFamily: "var(--font-display)" }}
                      className="p-4 text-sm font-semibold text-white"
                    >
                      Feature
                    </th>
                    {service.tiers.map((tier) => (
                      <th
                        key={tier.name}
                        style={{ fontFamily: "var(--font-display)" }}
                        className="p-4 text-center text-sm font-semibold text-white"
                      >
                        {tier.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {service.comparison.rows.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-[#16181F]/8 last:border-0 ${
                        i % 2 === 1 ? "bg-[#F6F4EF]/60" : "bg-white"
                      }`}
                    >
                      <td className="p-4 text-sm font-medium text-[#16181F]">
                        {row.feature}
                      </td>
                      {row.values.map((value, j) => (
                        <td key={j} className="p-4 text-center text-sm text-[#4B4D59]">
                          {renderCell(value)}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td className="p-4" />
                    {service.tiers.map((tier) => (
                      <td key={tier.name} className="p-4">
                        <Link
                          href={tier.ctaHref}
                          className="block rounded-lg bg-[#16181F] py-2.5 text-center text-xs font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-brand"
                        >
                          {tier.ctaLabel}
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-[#16181F]/40 sm:hidden">
            Swipe to compare all plans →
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="scroll-reveal relative w-full overflow-hidden bg-[#16181F] py-16 md:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(#F6F4EF_1px,transparent_1px)] [background-size:22px_22px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 -bottom-32 h-80 w-80 rounded-full bg-brand/20 blur-3xl"
        />

        <div className="container relative mx-auto px-4">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h3
                style={{ fontFamily: "var(--font-display)" }}
                className="text-2xl font-semibold text-white md:text-3xl"
              >
                {service.closingCta.heading}
              </h3>
              <p className="mt-3 max-w-lg text-sm text-white/60 md:text-base">
                {service.closingCta.text}
              </p>
              <Link
                href={service.closingCta.linkHref}
                className="mt-3 inline-block text-sm font-medium text-white/70 underline underline-offset-4 transition-colors hover:text-white"
              >
                {service.closingCta.linkText}
              </Link>
            </div>
            <Link
              href={service.closingCta.buttonHref}
              className="group inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-md bg-brand px-8 py-4 text-center text-xs font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-[#C81A2B] md:w-auto"
            >
              {service.closingCta.buttonLabel}
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePageTemplate;
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hash, Check, Minus } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Shape of the `service` prop this template expects. Build one of these per
 * service page (see /data/services/social-media-management.js for a full example)
 * and pass it in — the template itself never changes.
 *
 * @typedef {Object} ServiceTier
 * @property {string} name
 * @property {string} description
 * @property {string[]} features
 * @property {boolean} [highlighted]   - gives the card the "featured" tint
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
    return <Check className="mx-auto h-5 w-5 text-brand" strokeWidth={2.5} />;
  }
  if (value === false) {
    return <Minus className="mx-auto h-4 w-4 text-gray-300" />;
  }
  return value;
};

/** @param {{ service: ServicePageData }} props */
const ServicePageTemplate = ({ service }) => {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero content animates in immediately on load
      gsap.fromTo(
        ".hero-reveal",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 },
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
          },
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
          },
        );
      });
    }, rootRef);

    return () => ctx.revert();
    // Re-run if a different `service` is ever swapped into the same mounted template
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [service]);

  return (
    <div ref={rootRef}>
      {/* Hero */}
      <section className="relative flex h-[70vh] min-h-[520px] w-full items-center overflow-hidden service-hero-section">
        <Image
          src={service.heroImage}
          alt={service.heroTitle}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand/70" />

        <div className="container relative mx-auto px-4 text-center text-white">
          <span className="hero-reveal mb-5 inline-flex items-center gap-2 rounded-full bg-black/30 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
            <Hash size={14} />
            {service.eyebrow}
          </span>
          <h1 className="hero-reveal mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            {service.heroTitle}
          </h1>
          <p className="hero-reveal mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            {service.heroDescription}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="scroll-reveal container mx-auto px-4 text-center">
          <h2 className="mx-auto max-w-4xl text-2xl font-bold uppercase leading-snug text-gray-800 md:text-3xl lg:text-4xl">
            {service.introHeading}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-gray-500 md:text-base">
            {service.introDescription}
          </p>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="w-full bg-gray-50 pb-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {service.tiers.map((tier) => (
              <div
                key={tier.name}
                className={`tier-card flex h-full flex-col rounded-2xl border p-8 ${
                  tier.highlighted
                    ? "border-brand/30 bg-brand/5"
                    : "border-gray-200 bg-white"
                }`}
              >
                <h3 className="text-2xl font-bold text-gray-900">
                  {tier.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {tier.description}
                </p>

                <ul className="mt-6 flex-1 space-y-3 border-t border-gray-100 pt-6">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={tier.ctaHref}
                  className="mt-8 block w-full rounded-lg bg-gray-900 py-3 text-center text-xs font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-brand"
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
          <h2 className="mb-10 text-center text-2xl font-bold text-gray-900 md:text-3xl">
            Package Comparison
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="p-4 text-sm font-semibold text-gray-900">
                    Feature
                  </th>
                  {service.tiers.map((tier) => (
                    <th
                      key={tier.name}
                      className="p-4 text-center text-sm font-semibold text-gray-900"
                    >
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {service.comparison.rows.map((row) => (
                  <tr
                    key={row.feature}
                    className="border-b border-gray-100 last:border-0"
                  >
                    <td className="p-4 text-sm font-medium text-gray-700">
                      {row.feature}
                    </td>
                    {row.values.map((value, i) => (
                      <td
                        key={i}
                        className="p-4 text-center text-sm text-gray-600"
                      >
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
                        className="block rounded-lg bg-gray-900 py-2.5 text-center text-xs font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-brand"
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
      </section>

      {/* Closing CTA */}
      <section className="scroll-reveal w-full bg-white pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-gray-200 bg-gray-50 p-8 md:flex-row md:items-center md:p-10">
            <div>
              <h3 className="text-xl font-bold text-gray-900 md:text-2xl">
                {service.closingCta.heading}
              </h3>
              <p className="mt-2 text-sm text-gray-500 md:text-base">
                {service.closingCta.text}
              </p>
              <Link
                href={service.closingCta.linkHref}
                className="mt-1 inline-block text-sm font-medium italic text-brand hover:underline"
              >
                {service.closingCta.linkText}
              </Link>
            </div>
            <Link
              href={service.closingCta.buttonHref}
              className="w-full shrink-0 rounded-lg bg-gray-900 px-8 py-4 text-center text-xs font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-brand md:w-auto"
            >
              {service.closingCta.buttonLabel}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePageTemplate;

'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import designer from '@/images/other/designer.jpg';
import developer from '@/images/other/coding.jpg';
import team from '@/images/other/meeting.jpg';
import analytics from '@/images/other/data-table.jpg';
import Image from 'next/image';

const CAPABILITIES = [
  'Brand Identity',
  'Content Development',
  'Digital Marketing',
  'Social Media Management',
  'Website Development',
  'Software & App Development',
  'Online Meeting Support',
  'Data Analytics',
];

// Row proportions live on the grid container now (grid-rows-[1.3fr_1fr_1fr]),
// not on each image — that's what lets the collage stretch to match the text
// column instead of dictating its own fixed height.
const COLLAGE_IMAGES = [
  {
    src: designer,
    alt: 'Designer working at a desk surrounded by color swatches',
    wrapClassName: 'col-span-2',
  },
  {
    src: team,
    alt: 'Team collaborating around a table, top-down view',
    wrapClassName: 'col-start-2 row-start-2 row-span-2',
  },
  {
    src: developer,
    alt: 'Developer writing code across dual monitors',
    wrapClassName: 'col-start-1 row-start-2',
  },
  {
    src: analytics,
    alt: 'Hands reviewing analytics charts on a desk',
    wrapClassName: 'col-start-1 row-start-3',
  },
];

export default function Heroii() {
  const rootRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('[data-anim="headline-line"]', {
        yPercent: 110,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
      })
        .from(
          '[data-anim="pill"]',
          { y: 16, opacity: 0, duration: 0.6, stagger: 0.1 },
          '-=0.45'
        )
        .from(
          '[data-anim="copy"]',
          { y: 16, opacity: 0, duration: 0.6, stagger: 0.12 },
          '-=0.3'
        )
        .from(
          '[data-anim="cta"]',
          { y: 12, opacity: 0, duration: 0.5 },
          '-=0.3'
        )
        .from(
          '[data-anim="collage-item"]',
          { y: 30, opacity: 0, scale: 0.95, duration: 0.8, stagger: 0.12 },
          '-=0.7'
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-[#F6F4EF] pt-16 pb-8 sm:pt-20 sm:pb-10 lg:pt-28 lg:pb-12"
    >
      {/* ambient backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-[#E42032]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#16181F_1px,transparent_1px)] [background-size:22px_22px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* headline */}
        <h1 className="font-display mb-14 max-w-5xl text-[2.15rem] font-semibold uppercase leading-[1.08] tracking-tight text-[#16181F] sm:mb-16 sm:text-5xl lg:mb-20 lg:text-6xl">
          <span className="block overflow-hidden">
            <span data-anim="headline-line" className="block">
              We&apos;ve walked the path,
            </span>
          </span>
          <span className="block overflow-hidden">
            <span data-anim="headline-line" className="block">
              let&apos;s build{' '}
              <span className="text-[#E42032]">together</span>.
            </span>
          </span>
        </h1>

        {/* items-stretch makes both columns share the height of the taller one.
            min-h-0 on the collage (lg only) is what actually lets the collage
            *shrink* to the text column instead of forcing the row taller. */}
        <div className="grid grid-cols-1 items-stretch gap-14 lg:grid-cols-2 lg:gap-16">
          {/* left: copy */}
          <div className="font-body">
            <div className="mb-8 flex flex-col gap-3 sm:max-w-md">
              <div
                data-anim="pill"
                className="flex items-center gap-3 rounded-lg bg-[#FBE2E3] px-4 py-3"
              >
                <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#E42032] text-xs font-bold text-white">
                  ✕
                </span>
                <span className="text-sm font-medium text-[#7A1B22] sm:text-base">
                  Quit low-value work.
                </span>
              </div>
              <div
                data-anim="pill"
                className="flex items-center gap-3 rounded-lg bg-[#DFF3E6] px-4 py-3"
              >
                <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#1F9254] text-xs font-bold text-white">
                  ✓
                </span>
                <span className="text-sm font-medium text-[#155C36] sm:text-base">
                  Build a high-value brand.
                </span>
              </div>
            </div>

            <h2
              data-anim="copy"
              className="font-display mb-6 text-2xl font-semibold leading-tight text-[#16181F] sm:text-3xl"
            >
              Translating your vision into the digital landscape.
            </h2>

            <p
              data-anim="copy"
              className="mb-5 text-[15px] leading-relaxed text-[#4B4D59] sm:text-base"
            >
              At Redmun, we believe every idea has the power to grow when
              shaped and delivered through the right digital experience. Our
              mission is to turn your thoughts, visions, and business goals
              into digital solutions that connect, convert, and scale.
            </p>
            <p
              data-anim="copy"
              className="mb-9 text-[15px] leading-relaxed text-[#4B4D59] sm:text-base"
            >
              We combine creativity, technology, and strategy to deliver
              brand identity, content development, digital marketing, social
              media management, website, software and mobile app
              development, online meeting support, and data analytics. More
              than a service provider, we&apos;re a dedicated team working
              as an extension of your business.
            </p>

            <a
              data-anim="cta"
              href="#services"
              className="group inline-flex items-center gap-2 rounded-md bg-[#E42032] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#C81A2B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E42032]"
            >
              Learn More
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>

          {/* right: image collage
              - fixed height below lg (stacked layout)
              - lg:h-full + lg:min-h-0 → fills the stretched row *and* is
                allowed to shrink to the text column’s natural height */}
          <div className="grid h-[26rem] grid-cols-2 grid-rows-[1.3fr_1fr_1fr] gap-4 sm:h-[30rem] sm:gap-5 lg:h-full lg:min-h-0">
            {COLLAGE_IMAGES.map((img) => (
              <div
                key={img.alt}
                data-anim="collage-item"
                className={`group relative overflow-hidden rounded-2xl bg-[#E7E4DC] ${img.wrapClassName}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 40vw, 90vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* signature element: scrolling capability strip */}
        <div className="mt-16 border-t border-[#16181F]/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="font-display mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#16181F]/50">
            What we bring to the table
          </p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="marquee-track flex w-max items-center gap-10">
              {[...CAPABILITIES, ...CAPABILITIES].map((item, i) => (
                <span
                  key={`${item}-${i}`}
                  className="font-display flex items-center gap-3 whitespace-nowrap text-lg font-medium text-[#16181F]/70 sm:text-xl"
                >
                  {item}
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E42032]" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee 28s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
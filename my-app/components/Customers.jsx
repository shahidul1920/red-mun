"use client";

import React, { useState, useRef, useEffect } from "react";
import HeadNtext from "./HeadNtext";
import Image from "next/image";
import { Heart, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Import your images
import freshPizza from "@/images/companies/fresh-pizza.png";
import ovenFresh from "@/images/companies/oven-fresh.png";
import hasen from "@/images/companies/hasen.png";
import joyBella from "@/images/companies/joy-bella.png";
import cellRepair from "@/images/companies/cell-repair.png";
import bretgajda from "@/images/companies/bretgajda.jpeg";
import timClue from "@/images/companies/tim-clue.jpeg";
import b2g from "@/images/companies/b2g.png";
import xeniusoft from "@/images/companies/xeniusoft.png";

// Register GSAP hook
gsap.registerPlugin(useGSAP);

const testimonials = [
  {
    id: 1,
    name: "Fresh Pizza",
    image: freshPizza,
    review:
      "Astha Creatives has been an invaluable partner in our digital marketing efforts. Their team of experts has helped us develop and execute a comprehensive strategy that has significantly increased our online visibility and engagement. From social media management to content creation, they have consistently delivered high-quality work that has exceeded our expectations. We highly recommend Astha Creatives to any business looking to take their digital marketing to the next level.",
  },
  {
    id: 2,
    name: "Oven Fresh",
    image: ovenFresh,
    review:
      "Working with Astha Creatives has been a game-changer for our business. Their team of creative professionals has helped us develop a strong brand identity and marketing strategy that has resonated with our target audience. From website design to social media management, they have consistently delivered exceptional work that has helped us grow our business. We are grateful for their expertise and highly recommend their services to any business looking to elevate their brand.",
  },
  {
    id: 3,
    name: "Hasen",
    image: hasen,
    review:
      "Astha Creatives has been an incredible partner in helping us grow our business. Their team of experts has helped us develop a comprehensive digital marketing strategy that has significantly increased our online presence and engagement. From social media management to content creation, they have consistently delivered high-quality work that has exceeded our expectations. We highly recommend Astha Creatives to any business looking to take their digital marketing efforts to the next level.",
  },
  {
    id: 4,
    name: "Joy Bella",
    image: joyBella,
    review:
      "Astha Creatives has been a fantastic partner in our marketing efforts. Their team of experts has helped us create compelling content and execute effective campaigns that have driven significant results for our business. We are impressed with their professionalism and the quality of their work.",
  },
  {
    id: 5,
    name: "Cell Repair",
    image: cellRepair,
    review:
      "Astha Creatives has been a reliable partner in our digital marketing efforts. Their team of experts has helped us develop and execute a comprehensive strategy that has significantly increased our online visibility and engagement. From social media management to content creation, they have consistently delivered high-quality work that has exceeded our expectations. We highly recommend Astha Creatives to any business looking to take their digital marketing to the next level.",
  },
  {
    id: 6,
    name: "Bret Gajda",
    image: bretgajda,
    review:
      "Working with Astha Creatives has been a game-changer for our business. Their team of creative professionals has helped us develop a strong brand identity and marketing strategy that has resonated with our target audience. From website design to social media management, they have consistently delivered exceptional work that has helped us grow our business. We are grateful for their expertise and highly recommend their services to any business looking to elevate their brand.",
  },
  {
    id: 7,
    name: "Tim Clue",
    image: timClue,
    review:
      "Astha Creatives has been a fantastic partner in our marketing efforts. Their team of experts has helped us create compelling content and execute effective campaigns that have driven significant results for our business. We are impressed with their professionalism and the quality of their work.",
  },
];

const partners = [
  { id: 1, name: "Fresh Pizza", image: freshPizza },
  { id: 4, name: "Cell Repair", image: cellRepair },
  { id: 2, name: "Oven Fresh", image: ovenFresh },
  { id: 3, name: "Hasen", image: hasen },
  { id: 5, name: "B2GSOFT", image: b2g },
  { id: 6, name: "Xeniusoft", image: xeniusoft },
];

const AUTOPLAY_MS = 4000;

// Keep this in sync with the card width classes below (w-full / sm:w-1/2 / lg:w-1/3)
const getVisibleCount = () => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth >= 1024) return 3; // lg
  if (window.innerWidth >= 640) return 2; // sm
  return 1;
};

const Customers = () => {
  const sliderContainer = useRef(null);
  const trackRef = useRef(null);
  const autoplayRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(testimonials.length - 1);

  // Recalculate how many cards are visible (and clamp the index) on mount and on resize.
  // This is derived from the same breakpoints as the CSS, so it's always correct — no
  // matter how many testimonials are in the array.
  useEffect(() => {
    const updateVisibleCount = () => {
      const visibleCount = getVisibleCount();
      const newMaxIndex = Math.max(0, testimonials.length - visibleCount);
      setMaxIndex(newMaxIndex);
      setCurrentIndex((prev) => Math.min(prev, newMaxIndex));
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // Slide the track whenever the active index changes. Since every card takes an equal
  // share of the track regardless of viewport, one "step" is always exactly
  // 100 / testimonials.length percent of the track's own width — no pixel math needed.
  useGSAP(
    () => {
      gsap.to(trackRef.current, {
        xPercent: -(currentIndex * (100 / testimonials.length)),
        duration: 0.8,
        ease: "power3.inOut",
      });
    },
    { dependencies: [currentIndex], scope: sliderContainer },
  );

  const startAutoplay = () => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
    }, AUTOPLAY_MS);
  };

  // Keep autoplay running, restarting it whenever the visible-count changes
  useEffect(() => {
    startAutoplay();
    return () => clearInterval(autoplayRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
    startAutoplay();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? maxIndex : prev - 1));
    startAutoplay();
  };

  const goToSlide = (i) => {
    setCurrentIndex(Math.min(i, maxIndex));
    startAutoplay();
  };

  const pauseAutoplay = () => clearInterval(autoplayRef.current);
  const resumeAutoplay = () => startAutoplay();

  return (
    <div className="bg-mpure relative overflow-hidden py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-6 text-center text-gray-900">
          <HeadNtext
            heading="Our Clients Feedbacks"
            text="We served these companies with love and care. For that, some of them turned to us again and again. We have the mindset to help you thrive!"
          />
        </div>

        {/* Slider Section */}
        <div
          ref={sliderContainer}
          className="relative mx-auto w-full max-w-6xl"
        >
          {/* The Track Container */}
          <div
            onMouseEnter={pauseAutoplay}
            onMouseLeave={resumeAutoplay}
            className="w-full overflow-hidden rounded-2xl py-4"
          >
            <div ref={trackRef} className="flex">
              {testimonials.map((test) => (
                <div
                  key={test.id}
                  className="w-full shrink-0 px-3 sm:w-1/2 lg:w-1/3"
                >
                  {/* The Card UI */}
                  <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-lg md:p-7">
                    <div className="mb-4 flex items-center justify-between">
                      <Quote
                        className="h-7 w-7 text-brand/25"
                        strokeWidth={1.5}
                      />
                      <span className="inline-flex items-center gap-1 rounded-full bg-brand/5 px-2.5 py-1 text-[11px] font-medium text-brand">
                        <Heart size={10} className="fill-brand" />
                        Trusted Client
                      </span>
                    </div>

                    <p className="line-clamp-6 flex-1 text-sm leading-relaxed text-gray-600">
                      {test.review}
                    </p>

                    <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-4">
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-gray-100">
                        <Image
                          src={test.image}
                          alt={test.name}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <h4 className="text-sm font-bold tracking-wide text-gray-900">
                        {test.name}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-2 flex items-center justify-center gap-6">
            <button
              onClick={prevSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition-colors duration-300 hover:border-brand hover:bg-brand hover:text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    currentIndex === idx
                      ? "w-8 bg-brand"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition-colors duration-300 hover:border-brand hover:bg-brand hover:text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-brand pb-10 pt-8 text-white mt-10">
        <div className="container mx-auto px-4">
          <HeadNtext
            heading="partners around the world"
            text="We are trusted by these companies around the world. From day one, we stay connected, communicate openly, and focus on helping your business grow."
            styleText="text-white"
          />

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-gray-500 p-4 shadow-md md:h-28 md:w-28"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-contain"
                    sizes="112px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;

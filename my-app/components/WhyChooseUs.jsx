"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import whyImage from "@/images/other/why-choose-us.jpg";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const faqs = [
  {
    question:
      "Can I customize a package if my needs don't fit the standard tiers?",
    answer:
      "Absolutely. We understand that every business is unique. We offer flexible, custom-tailored solutions designed specifically around your goals, timeline, and budget constraints.",
  },
  {
    question: "What is the typical turnaround time for projects?",
    answer:
      "It depends on the service. For graphic design and short-form video content, we often deliver within 2-3 business days. Web development and complex business reporting dashboards typically take 2-4 weeks depending on the scope. We always provide a clear timeline before starting any project.",
  },
  {
    question: "Do I own the source files and data after the project is done?",
    answer:
      "Yes. Once the project is completed and fully paid for, all final deliverables, source files, and associated data rights are transferred entirely to you.",
  },
  {
    question: "Do you offer support after the project is launched?",
    answer:
      "We do. We offer post-launch maintenance and support packages to ensure your website or campaigns continue to run smoothly and adapt to any new requirements.",
  },
  {
    question: "How do we communicate during the project?",
    answer:
      "We set up a dedicated communication channel (usually Slack or Discord) for your team, along with weekly check-in calls and a shared dashboard where you can track progress in real-time.",
  },
  {
    question: "How does payment work?",
    answer:
      "We typically work on a milestone basis. A standard structure is 50% upfront to commence work, and the remaining 50% upon final delivery and approval. For monthly retainers, billing occurs on the 1st of each month.",
  },
];

const WhyChooseUs = () => {
  const [openIndex, setOpenIndex] = useState(0); // Default to first item open
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Entrance animation for the text side
      gsap.fromTo(
        ".faq-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        },
      );

      // Subtle scale effect on the image
      gsap.fromTo(
        ".sticky-image",
        { scale: 1.05, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        },
      );
    },
    { scope: containerRef },
  );

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={containerRef}
      className="bg-gray-950 py-24 text-white relative"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Side: Sticky Image */}
          <div className="sticky top-32 hidden lg:block h-[70vh] w-full rounded-3xl overflow-hidden border border-white/10 sticky-image">
            {/* Overlay gradient to make it blend with the dark background */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-10" />

            <Image
              src={whyImage}
              alt="Team working at Astha Creatives"
              fill
              className="object-cover opacity-80"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right Side: Content & FAQs */}
          <div className="flex flex-col pt-8">
            <span className="faq-reveal mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Why Choose Us?
            </span>

            <h2 className="faq-reveal text-4xl font-bold leading-tight md:text-5xl lg:text-5xl mb-6">
              We deliver results,
              <br />
              not just deliverables.
            </h2>

            <p className="faq-reveal text-gray-400 text-lg leading-relaxed mb-12">
              We combine the agility of a creative studio with the precision of
              a business consultancy. While others focus on just one piece of
              the puzzle, we integrate high-impact visuals, seamless technology,
              and data-driven strategy to build a cohesive growth engine for
              your brand.
            </p>

            {/* Accordion Container */}
            <div className="flex flex-col gap-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className={`faq-reveal border border-white/10 rounded-2xl overflow-hidden transition-colors duration-300 ${
                      isOpen
                        ? "bg-brandnd border-brand/50"
                        : "bg-transparent hover:bg-white/5"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`font-medium text-lg pr-8 transition-colors ${isOpen ? "text-brand" : "text-gray-200"}`}
                      >
                        {faq.question}
                      </span>
                      <span
                        className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-colors ${isOpen ? "border-brand text-brand" : "border-white/20 text-gray-400"}`}
                      >
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>

                    {/* CSS Grid trick for smooth height animation */}
                    <div
                      className="grid transition-all duration-300 ease-in-out"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p className="p-6 pt-0 text-gray-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

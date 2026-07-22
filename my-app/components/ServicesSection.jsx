"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeadNtext from "./HeadNtext";
import Link from "next/link";
import Button from "@/components/Button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    heading: "Creative Design",
    text: "Transform your ideas into visually stunning designs that captivate your audience.",
    pageUrl: "/services/creative-design",
  },
  {
    heading: "Social Media Management",
    text: "Engage your audience and grow your online presence with our strategic social media management.",
    pageUrl: "/services/social-media-management",
  },
  {
    heading: "AI Video Creation",
    text: "Create stunning videos with the power of AI.",
    pageUrl: "/services/ai-video-creation",
  },
  {
    heading: "Video Editing",
    text: "Professional video editing to bring your stories to life.",
    pageUrl: "/services/video-editing",
  },
  {
    heading: "Website Development",
    text: "Build a modern, responsive website that represents your brand.",
    pageUrl: "/services/website-development",
  },
  {
    heading: "Data Analytics",
    text: "Make informed decisions with our comprehensive data analytics services.",
    pageUrl: "/services/data-analytics",
  },
];

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
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
    <section ref={sectionRef} className="srv w-full py-20 md:py-28 bg-mpure">
      <div className="m container mx-auto px-4">
        <div ref={headingRef}>
          <HeadNtext
            heading="Explore Our Services"
            text="Empower your brand with a digital presence that stands out. We offer a full range of services, including creative design, social media, meta marketing, and data analytics to present insights of your data. We offer custom-built packages to fit your vision. See how we can help you grow."
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8"
            >
              <span className="mb-4 inline-block h-1 w-10 rounded-full bg-brand transition-all duration-300 group-hover:w-16" />

              <h3 className="mb-2 text-xl font-semibold text-brand md:text-2xl">
                {service.heading}
              </h3>

              <p className="flex-1 text-sm leading-relaxed text-gray-600 md:text-base">
                {service.text}
              </p>

              <Link
                href={service.pageUrl}
                className="mt-6 inline-block w-fit text-sm font-medium text-brand hover:underline"
              >
                <Button>Explore</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

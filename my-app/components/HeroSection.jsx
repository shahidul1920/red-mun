"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SubHeading from "@/components/SubHeading";
import Button from "@/components/Button";
import Image from "next/image";

const headingWords =
  "Creatives. Designs. Marketing. Development. Data. Scale Your Business".split(" ");

const HeroSection = () => {
  const subheadingRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const words = headingRef.current.querySelectorAll(".word-inner");

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.set(words, { yPercent: 110 })
      .fromTo(
        subheadingRef.current,
        { opacity: 0, y: -12 },
        { opacity: 1, y: 0, duration: 0.6 },
      )
      .to(words, { yPercent: 0, duration: 1, stagger: 0.07 }, "-=0.2")
      .fromTo(
        paragraphRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.5",
      );
  }, []);

  return (
    <div className="relative h-[100dvh] min-h-[600px] w-full bg-black ">
      <Image 
        src="/redmun-svg.png"
        alt="Background"
        width={1920}
        height={400}
        quality={100}
        className="object-cover opacity-50 w-full h-auto absolute bottom-0"
      />
      <div className="absolute left-0 top-0 z-10 size-full grid place-items-center">
        <div className="textSec container mx-auto flex h-full flex-col items-start justify-center px-4 text-center sm:px-6 lg:px-8">
          <div ref={subheadingRef} className="text-center mx-auto">
            <SubHeading className="text-white">
              Grow your Business With Us
            </SubHeading>
          </div>

          <h1
            ref={headingRef}
            className="mt-4 max-w-3xl text-[2rem] font-bold leading-[1.2] text-white sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4.5rem] mx-auto"
          >
            {headingWords.map((word, i) => (
              <span
                key={i}
                className="mr-[0.3em] inline-block overflow-hidden pb-1 align-top"
              >
                <span className="word-inner inline-block">{word}</span>
              </span>
            ))}
          </h1>

          <p
            ref={paragraphRef}
            className="mt-4 max-w-3xl text-[1rem] font-regular leading-[1.5] text-white sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.5rem] mx-auto"
          >
            We are a team of creative professionals dedicated to helping
            businesses grow and succeed. Our services include branding, design,
            marketing, and data analysis. We work closely with our clients to
            understand their needs and goals, and we develop customized
            solutions that deliver results.
          </p>
          <div className="mt-6 text-center mx-auto">
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

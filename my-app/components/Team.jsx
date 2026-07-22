"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeadNtext from "./HeadNtext";
import Image from "next/image";
import Redwan from "@/images/teams/redwan.jpeg";
import Murtaza from "@/images/teams/murtaza.jpeg";
import Shahidul from "@/images/teams/shahidul.jpeg";
import Emon from "@/images/teams/shahidul.jpeg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const teamMembers = [
  { id: 1, name: "Redwanul Haque", role: "Creative Head", image: Redwan },
  {
    id: 2,
    name: "Murtaza Kamal Pasha",
    role: "Project Manager",
    image: Murtaza,
  },
  { id: 3, name: "Shahidul Shakil", role: "Lead Developer", image: Shahidul },
  { id: 4, name: "Jahidul Islam", role: "Lead Designer", image: Emon },
];

const Team = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".team-card",
        { opacity: 0, y: 48 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
      duration: 0.5,
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
    <div ref={sectionRef} className="w-full py-20 md:py-28 bg-mpure">
      <div className="container mx-auto px-4">
        <HeadNtext
          heading="Meet Our Team"
          text="As a team, we move forward with deep trust in our vision, believing that with focus, dedication, and heart, meaningful success is always within reach."
        />

        <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="team-card group overflow-hidden rounded-xl md:rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 will-change-transform hover:shadow-xl"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale transition-all duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              <div className="p-5">
                <h3 className="text-[16px] md:text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-[14px] md:text-sm font-medium text-brand">
                  {member.role}
                </p>
                <span className="mt-3 block h-0.5 w-8 rounded-full bg-brand transition-all duration-300 group-hover:w-14" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

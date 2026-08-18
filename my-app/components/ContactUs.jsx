"use client";

import React, { useRef } from "react";
import { MapPin, Mail, Phone, Send, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useContactForm } from "@/hooks/useContactForm";
import { useReducedMotion } from "@/hooks/useReducedMotion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function ContactUs() {
  const containerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  
  const {
    isSubmitting,
    submitStatus,
    errorMessage,
    fieldErrors,
    handleSubmit,
  } = useContactForm();

  useGSAP(
    () => {
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-text-reveal",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 }
      ).fromTo(
        ".contact-card-reveal",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
        "-=0.45"
      );
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <div
      ref={containerRef}
      className="bg-[#0f111d] min-h-screen text-white selection:bg-[#E42032] selection:text-white pb-24 relative overflow-hidden font-body"
    >
      {/* Background Mesh and Light Orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#F6F4EF_1px,transparent_1px)] [background-size:22px_22px] z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-[#E42032]/8 blur-3xl z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/2 h-[36rem] w-[36rem] rounded-full bg-[#E42032]/5 blur-3xl z-0"
      />

      {/* --- HERO SECTION --- */}
      <div className="relative h-[45vh] min-h-[350px] w-full flex items-center justify-center overflow-hidden z-10 pt-16">
        <div className="relative z-10 text-center max-w-3xl px-4">
          <span className="hero-text-reveal mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#E42032]">
            Get In Touch
          </span>
          <h1 className="hero-text-reveal font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[1.08]">
            Let&apos;s build <span className="text-[#E42032]">legacy</span>.
          </h1>
          <span className="hero-text-reveal mt-5 block h-1 w-16 bg-[#E42032] mx-auto rounded-full" />
          <p className="hero-text-reveal mt-5 text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-light">
            Before diving into code and designs, we prioritize listening. Connect with our technical leads to map your digital expansion.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-20 mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form Hub */}
          <div className="lg:col-span-7 contact-card-reveal">
            <div className="bg-white/5 border border-white/8 backdrop-blur-xl rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E42032]/5 to-transparent rounded-bl-full pointer-events-none" />

              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6 uppercase tracking-wide">
                Start a Scoping Call
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 pl-1 uppercase tracking-wider font-semibold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="userName"
                      className={`w-full bg-white/5 border ${
                        fieldErrors.userName ? "border-red-500" : "border-white/8"
                      } rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#E42032] focus:border-[#E42032] transition-all duration-300`}
                      placeholder="Your Name"
                    />
                    {fieldErrors.userName && (
                      <p className="text-xs text-red-400 pl-1">{fieldErrors.userName}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 pl-1 uppercase tracking-wider font-semibold">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="userEmail"
                      className={`w-full bg-white/5 border ${
                        fieldErrors.userEmail ? "border-red-500" : "border-white/8"
                      } rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#E42032] focus:border-[#E42032] transition-all duration-300`}
                      placeholder="name@gmail.com"
                    />
                    {fieldErrors.userEmail && (
                      <p className="text-xs text-red-400 pl-1">{fieldErrors.userEmail}</p>
                    )}
                  </div>
                </div>

                {/* Honeypot field for anti-bot protection */}
                <div className="absolute left-[-9999px]" aria-hidden="true">
                  <input
                    type="text"
                    name="company_website_url"
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-gray-400 pl-1 uppercase tracking-wider font-semibold">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="userPhone"
                    className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#E42032] focus:border-[#E42032] transition-all duration-300"
                    placeholder="+880 1XXX XXXXXX"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-gray-400 pl-1 uppercase tracking-wider font-semibold">
                    Your Message *
                  </label>
                  <textarea
                    name="userMessage"
                    rows="5"
                    className={`w-full bg-white/5 border ${
                      fieldErrors.userMessage ? "border-red-500" : "border-white/8"
                    } rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#E42032] focus:border-[#E42032] transition-all duration-300 resize-none`}
                    placeholder="Tell us about your project or scoping goals..."
                  />
                  {fieldErrors.userMessage && (
                    <p className="text-xs text-red-400 pl-1">{fieldErrors.userMessage}</p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex items-center justify-center gap-2.5 w-full sm:w-auto bg-[#E42032] hover:bg-[#C81A2B] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer uppercase tracking-wider text-xs"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && (
                      <Send
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    )}
                  </button>

                  {/* Submission Status Message */}
                  {submitStatus === "success" && (
                    <span className="status-msg text-green-400 text-sm font-semibold tracking-wide flex items-center gap-1">
                      ✓ Message sent successfully!
                    </span>
                  )}
                  {submitStatus === "error" && (
                    <span className="status-msg text-red-400 text-sm font-semibold tracking-wide">
                      ✕ {errorMessage || "Failed to send message. Please retry."}
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: Contact Details & Quick Call */}
          <div className="lg:col-span-5 flex flex-col gap-6 contact-card-reveal">
            {/* Details Glass Card */}
            <div className="bg-white/5 border border-white/8 backdrop-blur-xl rounded-3xl p-8 flex flex-col gap-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E42032]/5 to-transparent rounded-bl-full pointer-events-none" />

              <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white">
                Contact Details
              </h3>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 text-[#E42032] flex items-center justify-center shrink-0 group-hover:bg-[#E42032] group-hover:text-white transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-0.5">Reach Us</p>
                  <p className="text-gray-200 text-sm">
                    House 20, Road 12, Sector 03, Uttara, Dhaka
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 text-[#E42032] flex items-center justify-center shrink-0 group-hover:bg-[#E42032] group-hover:text-white transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-0.5">Email Us</p>
                  <a
                    href="mailto:contact@redmun.com"
                    className="text-gray-200 text-sm hover:text-[#E42032] transition-colors"
                  >
                    contact@redmun.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 text-[#E42032] flex items-center justify-center shrink-0 group-hover:bg-[#E42032] group-hover:text-white transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-0.5">Call Us</p>
                  <div className="flex flex-col gap-1 text-sm">
                    <a
                      href="tel:+8801711994608"
                      className="text-gray-200 hover:text-[#E42032] transition-colors"
                    >
                      +880 1711 994608
                    </a>
                    <a
                      href="tel:+8801308379019"
                      className="text-gray-200 hover:text-[#E42032] transition-colors"
                    >
                      +880 1308 379019
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Call Card */}
            <a
              href="tel:+8801711994608"
              className="bg-gradient-to-br from-[#E42032] to-[#B91C1C] rounded-3xl p-8 relative overflow-hidden group cursor-pointer shadow-lg block hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative z-10 flex flex-col justify-between h-full min-h-[140px]">
                <div>
                  <p className="text-white/80 text-[11px] font-semibold uppercase tracking-widest mb-1">
                    Connect Directly (Whatsapp/Call)
                  </p>
                  <h4 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                    +880 1711 994608
                  </h4>
                </div>
                <div className="flex items-center gap-2 text-white/90 text-sm font-semibold mt-4 group-hover:gap-4 transition-all uppercase tracking-wider">
                  Call our leads now <ArrowRight size={16} />
                </div>
              </div>
              <div className="absolute -right-8 -bottom-8 w-44 h-44 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

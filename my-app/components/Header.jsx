"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

const servicesLinks = [
  { name: "Creative Design", href: "/services/creative-design" },
  {
    name: "Social Media Management",
    href: "/services/social-media-management",
  },
  { name: "AI Video Creation", href: "/services/ai-video-creation" },
  { name: "Video Editing", href: "/services/video-editing" },
  { name: "Website Development", href: "/services/website-development" },
  { name: "Data Analytics", href: "/services/data-analytics" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const headerRef = useRef(null);
  const dropdownRef = useRef(null);
  const chevronRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileChevronRef = useRef(null);
  const closeTimer = useRef(null);

  // Header entrance animation on mount
  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
    );
  }, []);

  // Track scroll position to toggle the glass/blur state
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Desktop services dropdown animation
  useEffect(() => {
    if (!dropdownRef.current) return;
    if (isServicesOpen) {
      gsap.to(dropdownRef.current, {
        opacity: 1,
        y: 0,
        pointerEvents: "auto",
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(chevronRef.current, { rotate: 180, duration: 0.25 });
    } else {
      gsap.to(dropdownRef.current, {
        opacity: 0,
        y: 8,
        pointerEvents: "none",
        duration: 0.2,
        ease: "power2.in",
      });
      gsap.to(chevronRef.current, { rotate: 0, duration: 0.25 });
    }
  }, [isServicesOpen]);

  // Mobile menu open/close animation
  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (isMobileOpen) {
      gsap.to(mobileMenuRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [isMobileOpen]);

  // Mobile services accordion animation
  useEffect(() => {
    if (!mobileChevronRef.current) return;
    gsap.to(mobileChevronRef.current, {
      rotate: isMobileServicesOpen ? 180 : 0,
      duration: 0.25,
    });
  }, [isMobileServicesOpen]);

  const openServices = () => {
    clearTimeout(closeTimer.current);
    setIsServicesOpen(true);
  };

  const closeServicesDelayed = () => {
    closeTimer.current = setTimeout(() => setIsServicesOpen(false), 150);
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 z-50 w-full px-4 pt-4 md:pt-8"
    >
      <div
        className={`container headerSection mx-auto flex items-center justify-between rounded-3xl px-4 py-3 transition-colors duration-300 md:rounded-full shadow-lg backdrop-blur-md ${
          isScrolled
            ? "border border-white/30 bg-white/20"
            : "border border-white/30 bg-white/20"
        }`}
      >
        <Link href="/" className="relative z-10" onClick={closeMobileMenu}>
          <div className="logo h-[50px] w-auto">
            <Image
              src="/astha-creatives-logo-1.png"
              className="size-full object-contain"
              alt="Logo"
              width={70}
              height={70}
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="menus mr-2 hidden md:block">
          <nav className="navBar">
            <ul className="flex list-none items-center gap-8 text-[18px] font-medium">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li
                className="relative"
                onMouseEnter={openServices}
                onMouseLeave={closeServicesDelayed}
              >
                <button
                  type="button"
                  className="flex items-center justify-center gap-1"
                  onClick={() => setIsServicesOpen((prev) => !prev)}
                  aria-expanded={isServicesOpen}
                >
                  Services
                  <svg
                    ref={chevronRef}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                <div
                  ref={dropdownRef}
                  className="absolute left-1/2 top-full mt-3 w-64 -translate-x-1/2 translate-y-2 rounded-2xl border border-gray-100 bg-white/95 py-2 opacity-0 shadow-xl backdrop-blur-md"
                  style={{ pointerEvents: "none" }}
                >
                  {servicesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="mx-2 block rounded-xl px-4 py-3 text-[15px] font-normal transition-colors hover:bg-gray-100"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </li>

              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="relative z-10 flex h-9 w-9 items-center justify-center md:hidden"
          onClick={() => setIsMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isMobileOpen}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {isMobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        ref={mobileMenuRef}
        className="mt-2 h-0 w-full overflow-hidden rounded-3xl bg-white/95 opacity-0 shadow-xl backdrop-blur-xl md:hidden"
      >
        <ul className="flex flex-col gap-1 p-4 text-[17px] font-medium">
          <li>
            <Link href="/" className="block py-2" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li>
            <button
              type="button"
              className="flex w-full items-center justify-between py-2"
              onClick={() => setIsMobileServicesOpen((prev) => !prev)}
              aria-expanded={isMobileServicesOpen}
            >
              Services
              <svg
                ref={mobileChevronRef}
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {isMobileServicesOpen && (
              <ul className="flex flex-col gap-1 py-1 pl-4">
                {servicesLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block py-2 text-[15px] font-normal text-gray-600"
                      onClick={closeMobileMenu}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link
              href="/about"
              className="block py-2"
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block py-2"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

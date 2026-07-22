import heroImage from "@/images/other/social-media-management-hero.jpg";

/** @type {import('@/components/ServicePageTemplate').ServicePageData} */
const websiteDevelopment = {
  eyebrow: "Website Development",
  heroImage,
  heroTitle: "Custom Website Development for Exceptional Digital Experiences",
  heroDescription:
    "We build lightning-fast, secure, and SEO-optimized websites. From modern single-page apps to complex e-commerce platforms, we design systems that convert visitors into loyal customers.",

  introHeading:
    "High-performance web development tailored to your brand identity, business logic, and scaling requirements",
  introDescription:
    "Your website is your digital storefront—it needs to load fast, look premium, and function flawlessly on every device. Our Website Development services combine cutting-edge technology stacks (like Next.js, React, and Tailwind CSS) with clean, maintainable code to deliver high-converting web applications. We prioritize mobile-responsiveness, speed optimization, and search engine visibility from day one. Whether you need a corporate brand site, a custom Webflow/WordPress build, a robust e-commerce platform, or a bespoke web application, our developers write clean code that is structured for success. We ensure proper security protocols, analytics tracking, and content management systems are set up so you have full control and peace of mind.",

  tiers: [
    {
      name: "Essential",
      description:
        "Perfect for startups, new projects, and small businesses needing a high-quality, high-converting single-page landing site.",
      features: [
        "Single-Page Responsive Layout",
        "Custom Modern UI / UX Design",
        "Speed & Performance Optimization",
        "Basic SEO Setup & Tags Structure",
        "Contact Form & Lead Capture Integration",
        "Social Media Links Integration",
        "1-Month Post-Launch Maintenance Support",
        "Deployment & Domain Hosting Setup",
      ],
      ctaLabel: "Ask for Quotation",
      ctaHref: "/contact?service=website-development&package=essential",
    },
    {
      name: "Growth",
      description:
        "For businesses requiring a comprehensive corporate website, product showcase, or content-rich platforms.",
      features: [
        "Up to 5 Pages Responsive Layout",
        "Fully Custom Visual Design (No Templates)",
        "Content Management System (CMS) Integration",
        "Advanced Search Engine Optimization (SEO)",
        "Interactive Components & Micro-Animations",
        "Google Analytics & tracking codes setup",
        "3-Months Post-Launch Maintenance Support",
        "Domain & Hosting Assistance",
        "1x Mid-Project Alignment Meeting",
      ],
      ctaLabel: "Ask for Quotation",
      ctaHref: "/contact?service=website-development&package=growth",
    },
    {
      name: "Authority",
      highlighted: true,
      description:
        "For custom web applications, complex e-commerce systems, booking systems, and large-scale web operations.",
      features: [
        "Unlimited Pages & Sub-pages Support",
        "E-commerce Platform or Custom Web Application",
        "Payment Gateway & Billing Integration",
        "Custom API & Database Integration (Secure)",
        "Premium Animations & High-End Interactions",
        "Full Technical SEO & Accessibility (a11y) Audit",
        "1-Year Priority Support & SLA Maintenance",
        "Dedicated Technical Project Manager",
        "Bi-weekly Development Progress Meetings",
      ],
      ctaLabel: "Ask for Quotation",
      ctaHref: "/contact?service=website-development&package=authority",
    },
  ],

  comparison: {
    rows: [
      {
        feature: "Page Count Limit",
        values: ["1 Page (Landing)", "Up to 5 Pages", "Unlimited Pages"],
      },
      {
        feature: "UI/UX Visual Design",
        values: [
          "Custom Layout",
          "Fully Custom Visuals",
          "Bespoke Premium Design",
        ],
      },
      { feature: "Content Management (CMS)", values: [false, true, true] },
      { feature: "E-commerce & Payments", values: [false, false, true] },
      {
        feature: "Database & API integrations",
        values: [false, false, "Secure Custom Integrations"],
      },
      {
        feature: "Speed & Load Optimization",
        values: [
          "Basic Optimization",
          "Advanced Core Web Vitals",
          "Enterprise-Level Optimization",
        ],
      },
      { feature: "Analytics & Tracking Codes", values: [false, true, true] },
      {
        feature: "SEO Implementation",
        values: [
          "Basic Setup",
          "Advanced On-Page",
          "Full Technical & Schema SEO",
        ],
      },
      {
        feature: "Post-Launch Support",
        values: ["1 Month", "3 Months", "1 Year Priority Support"],
      },
      { feature: "Dedicated Project Manager", values: [false, false, true] },
    ],
  },

  closingCta: {
    heading: "Need Custom Web Functionality?",
    text: "From SaaS products to specialized API integrations, we can build whatever custom logic your business operations demand.",
    linkText: "Let's connect for a 15-minute scoping call.",
    linkHref: "/contact",
    buttonLabel: "Book a Development Call",
    buttonHref: "/contact",
  },
};

export default websiteDevelopment;

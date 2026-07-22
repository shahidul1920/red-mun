import heroImage from "@/images/other/social-media-management-hero.jpg";

/** @type {import('@/components/ServicePageTemplate').ServicePageData} */
const creativeDesign = {
  eyebrow: "Creative Design",
  heroImage,
  heroTitle: "High-Impact Creative Design Services That Define Your Brand",
  heroDescription:
    "Craft visually compelling brand identities, marketing assets, and digital designs that capture attention, engage your target audience, and drive real business growth.",

  introHeading:
    "Bespoke visual designs crafted to align with your brand strategy and elevate your market presence",
  introDescription:
    "Visually stunning design is the cornerstone of brand trust and market recognition. Our Creative Design services deliver cohesive, high-end visual solutions tailored to your unique identity. From custom logo development and complete brand guides to marketing materials, social media graphics, and premium banner designs, we ensure your message is communicated beautifully and professionally. We focus on harmony in color, modern typography, and structured layouts to differentiate your brand in a crowded market. Whether you are a startup needing a complete brand rollout or an established company looking to refresh your assets, our team delivers pixel-perfect designs optimized for both digital and print media.",

  tiers: [
    {
      name: "Essential",
      description:
        "Great for startups, consultants, and small businesses needing foundational branding assets and basic design presence.",
      features: [
        "Brand Style Audit",
        "Custom Logo Design (2 Concepts)",
        "Brand Color Palette Selection",
        "Typography Guidelines",
        "5 Customizable Social Media Templates",
        "Business Card Design",
        "1 Revision Round",
        "Deliverables in PNG, SVG & PDF formats",
      ],
      ctaLabel: "Ask for Quotation",
      ctaHref: "/contact?service=creative-design&package=essential",
    },
    {
      name: "Growth",
      description:
        "Designed for growing brands that want a comprehensive visual identity system and active marketing collaterals.",
      features: [
        "Custom Logo Design (4 Concepts)",
        "Complete Brand Identity Guide",
        "Full Stationery Kit (Letterhead, Envelope)",
        "15 Custom Social Media Templates",
        "3 Marketing Collaterals (Flyers/Banners)",
        "3 Revision Rounds",
        "All Vector & Source Files Included",
        "Priority Email Support",
        "1x Monthly Design Alignment Meeting",
      ],
      ctaLabel: "Ask for Quotation",
      ctaHref: "/contact?service=creative-design&package=growth",
    },
    {
      name: "Authority",
      highlighted: true,
      description:
        "For established enterprises requiring complete visual dominance, custom assets, and a dedicated design team.",
      features: [
        "Comprehensive Brand Book & Guidelines",
        "Stationery & Digital Assets Suite",
        "Unlimited Custom Social Media Templates",
        "Full Print & Digital Marketing Suite",
        "3D Brand Assets or Custom Illustrations",
        "Unlimited Revisions",
        "Dedicated Art Director",
        "On-Demand Design Consultation",
        "24-Hour Express Turnaround Option",
        "Full Source Files & Commercial Rights",
      ],
      ctaLabel: "Ask for Quotation",
      ctaHref: "/contact?service=creative-design&package=authority",
    },
  ],

  comparison: {
    rows: [
      {
        feature: "Logo Concepts",
        values: ["2 Concepts", "4 Concepts", "Unlimited"],
      },
      { feature: "Social Media Templates", values: ["5", "15", "Unlimited"] },
      {
        feature: "Brand Identity Guidelines",
        values: ["Basic Guidelines", "Complete Guide", "Comprehensive Book"],
      },
      {
        feature: "Marketing Collateral",
        values: [false, "3 Pieces", "Full Suite"],
      },
      { feature: "Stationery Kit", values: [false, true, true] },
      { feature: "Custom Illustrations/3D", values: [false, false, true] },
      { feature: "Revisions", values: ["1 Round", "3 Rounds", "Unlimited"] },
      {
        feature: "Support & Consultations",
        values: [
          "Email Support",
          "1x Monthly Alignment",
          "On-Demand / Art Director",
        ],
      },
      { feature: "Source Files", values: [true, true, true] },
      { feature: "Commercial Rights", values: [true, true, true] },
    ],
  },

  closingCta: {
    heading: "Need Custom Design Assets?",
    text: "Every brand has a different story to tell. We can build custom packages that fit your exact design requirements.",
    linkText: "Let's align with a 15-minute call.",
    linkHref: "/contact",
    buttonLabel: "Book a Design Call",
    buttonHref: "/contact",
  },
};

export default creativeDesign;

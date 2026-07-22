import heroImage from "@/images/other/social-media-management-hero.jpg";

/** @type {import('@/components/ServicePageTemplate').ServicePageData} */
const socialMediaManagement = {
  eyebrow: "Social Media Management",
  heroImage,
  heroTitle:
    "Professional Social Media Management Services That Drive Real Growth",
  heroDescription:
    "Our Social Media Management services help businesses maintain a strong, consistent, and results-driven presence across all major platforms. We handle everything, from strategy and content planning to publishing, engagement, and performance tracking, so your brand stays active, relevant, and impactful.",

  introHeading:
    "Strategy-led social media management designed to build brands, engage audiences, and deliver measurable results",
  introDescription:
    "Effective social media management goes far beyond posting content—it requires strategy, consistency, and continuous optimization. Our Social Media Management services are built for brands that want sustainable growth, higher engagement, and a professional digital presence. We start with in-depth audience research and platform-specific strategy, followed by content planning, community management, and analytics-driven optimization. Our team manages your social media profiles with a focus on brand voice, visual consistency, and performance metrics, ensuring every post aligns with your business objectives. Whether you aim to increase brand awareness, generate leads, or build long-term customer trust, our premium social media management solutions help your brand stay competitive, visible, and influential across platforms like Facebook, Instagram, LinkedIn, and more.",

  tiers: [
    {
      name: "Essential",
      description:
        "Professionals, local brands, consultants, and startups who need a credible, consistent, and well-managed presence on one key platform.",
      features: [
        "1 Primary Platform (IG/FB/LI)",
        "12 Static Creatives",
        "2 Simple Motion Creatives",
        "1 Infographics/ Audience guesses/ Puzzle post",
        "Platform-optimized captions",
        "Basic Hashtag Set",
        "Posting, Scheduling & Community Mgmt",
        "Content Boosting",
        "30-Day Content Calendar",
        "Basic Engagement Analytics",
        "1x Monthly Strategy Meeting",
        "Adobe/Editable Files",
      ],
      ctaLabel: "Ask for Quotation",
      ctaHref: "/contact?service=social-media-management&package=essential",
    },
    {
      name: "Growth",
      description:
        "Growing brands and SMEs that need consistent visibility, engagement, and momentum across multiple platforms.",
      features: [
        "24 Static Creatives",
        "4 Motion Graphics",
        "2 Infographics/ Audience guesses/ Puzzle post",
        "Conversion-focused captions",
        "Hashtag Set",
        "Active Community Mgmt & Optimization",
        "30-Day Content Calendar",
        "Adobe/Editable Files",
        "Platform-Specific Exports",
        "Content Boosting",
        "Standard Engagement Analytics",
        "Competitor Visual Benchmark",
        "Brand Style Audit",
        "2x Strategy & Optimization Meeting",
      ],
      ctaLabel: "Ask for Quotation",
      ctaHref: "/contact?service=social-media-management&package=growth",
    },
    {
      name: "Authority",
      highlighted: true,
      description:
        "Established brands requiring comprehensive social media dominance and high-end production.",
      features: [
        "Primary Platform (IG/FB/LI)",
        "Static Creatives",
        "Simple Motion Creatives",
        "Motion Graphics",
        "Infographics/ Audience guesses/ Puzzle post",
        "Platform-optimized captions",
        "Conversion-focused captions",
        "Basic Hashtag Set",
        "Posting, Scheduling & Community Mgmt",
        "Active Community Mgmt & Optimization",
        "Content Boosting",
        "30-Day Content Calendar",
        "On demand Strategy Meeting",
        "Competitor Visual Benchmark",
        "Brand Style Audit",
        "Adobe/Editable Files",
        "Platform-Specific Exports",
        "Campaign planning, design and optimization",
        "Conversion and engagement analysis",
      ],
      ctaLabel: "Ask for Quotation",
      ctaHref: "/contact?service=social-media-management&package=authority",
    },
  ],

  comparison: {
    rows: [
      { feature: "Static Creatives", values: ["12", "24", "Custom"] },
      {
        feature: "Motion Creatives",
        values: ["2 Simple", "4 Full", "Full Suite"],
      },
      { feature: "Infographics/Puzzle", values: ["1", "2", "Custom"] },
      {
        feature: "Captions",
        values: ["Optimized", "Conversion-Focused", "Conversion-Focused"],
      },
      {
        feature: "Community Mgmt",
        values: ["Posting/Sched.", "Active", "Active"],
      },
      { feature: "Content Calendar", values: ["30-Day", "30-Day", "30-Day"] },
      {
        feature: "Strategy Meeting",
        values: ["1x Monthly", "2x Optimization", "On Demand"],
      },
      {
        feature: "Analytics",
        values: ["Basic", "Standard", "Conversion & Engagement"],
      },
      { feature: "Competitor/Brand Audit", values: [false, true, true] },
      { feature: "Platform Exports", values: [false, true, true] },
    ],
  },

  closingCta: {
    heading: "Don't See the Perfect Fit?",
    text: "Every audience, platform, and goal is different, your strategy should be too.",
    linkText: "Let's have a 15-minute discussion.",
    linkHref: "/contact",
    buttonLabel: "Please Book a Call",
    buttonHref: "/contact",
  },
};

export default socialMediaManagement;

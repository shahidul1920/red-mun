import heroImage from "@/images/other/social-media-management-hero.jpg";

/** @type {import('@/components/ServicePageTemplate').ServicePageData} */
const aiVideoCreation = {
  eyebrow: "AI Video Creation",
  heroImage,
  heroTitle: "Scale Video Content Rapidly with Advanced AI Video Creation",
  heroDescription:
    "Harness the power of cutting-edge AI avatars, realistic voice synthesis, and dynamic scriptwriting to generate high-quality, professional video content at a fraction of the time and cost.",

  introHeading:
    "Smart, automated, and hyper-realistic AI video solutions engineered for modern marketing, training, and outreach",
  introDescription:
    "In today’s fast-paced digital landscape, video is the most engaging content medium, but traditional production can be slow and expensive. Our AI Video Creation services enable your business to scale its video marketing strategy effortlessly. We leverage state-of-the-art generative AI tools, neural text-to-speech, and photorealistic digital presenters to construct highly engaging marketing videos, product explainers, social media reels, and onboarding presentations. Each video is optimized for maximum retention, featuring automated yet human-curated transitions, dynamic styling, and perfectly matched visual assets. Whether you need multilingual video localization, personalized outreach campaigns at scale, or consistent short-form content for social platforms, our premium AI video services combine efficiency with human creative control to deliver results.",

  tiers: [
    {
      name: "Essential",
      description:
        "Perfect for content creators or small businesses starting to explore AI-generated video content and automated presenting.",
      features: [
        "3 AI-Generated Videos per Month",
        "Maximum 1 Minute per Video",
        "1 Standard AI Avatar Selection",
        "Standard English Voiceovers",
        "Basic Captions & Subtitles",
        "Royalty-Free Background Music",
        "1 Revision Round per Video",
        "HD 1080p Export",
      ],
      ctaLabel: "Ask for Quotation",
      ctaHref: "/contact?service=ai-video-creation&package=essential",
    },
    {
      name: "Growth",
      description:
        "For active brands requiring consistent monthly video content, multilingual outreach, and custom brand assets.",
      features: [
        "10 AI-Generated Videos per Month",
        "Maximum 3 Minutes per Video",
        "3 Premium AI Avatar Selections",
        "Multilingual Voiceovers (5+ Languages)",
        "Dynamic Transitions & Captions Styling",
        "Brand Asset Integration (Logos, Fonts)",
        "2 Revision Rounds per Video",
        "Platform-Specific Exports (16:9 & 9:16)",
        "1x Video Strategy Consultation",
      ],
      ctaLabel: "Ask for Quotation",
      ctaHref: "/contact?service=ai-video-creation&package=growth",
    },
    {
      name: "Authority",
      highlighted: true,
      description:
        "For enterprise-level brands requiring custom avatar replication, custom voice cloning, and high-volume output.",
      features: [
        "Custom AI Avatar Setup (Clone)",
        "Unlimited AI Videos per Month",
        "Custom Voice Cloning Setup",
        "20+ Languages & Accent Profiles",
        "Premium Sound Design & Foley Effects",
        "Advanced Custom AI Scriptwriting",
        "Unlimited Revisions",
        "Ultra HD 4K Render Resolution",
        "Dedicated Video Production Manager",
        "Priority Processing & Custom Integrations",
      ],
      ctaLabel: "Ask for Quotation",
      ctaHref: "/contact?service=ai-video-creation&package=authority",
    },
  ],

  comparison: {
    rows: [
      {
        feature: "Videos per Month",
        values: ["3 Videos", "10 Videos", "Unlimited"],
      },
      {
        feature: "Max Duration per Video",
        values: ["1 Minute", "3 Minutes", "Uncapped"],
      },
      {
        feature: "Avatars & Presenters",
        values: ["1 Standard", "3 Premium", "Custom Clone"],
      },
      {
        feature: "Supported Languages",
        values: ["English only", "5+ Languages", "20+ / Voice Cloning"],
      },
      {
        feature: "Transitions & Captions",
        values: ["Basic Static", "Dynamic Styled", "Bespoke Custom"],
      },
      { feature: "Brand Integration", values: [false, true, true] },
      { feature: "Scriptwriting Assistance", values: [false, true, true] },
      {
        feature: "Resolutions",
        values: ["1080p", "1080p / Vertical", "4K Ultra HD"],
      },
      {
        feature: "Revision Rounds",
        values: ["1 Round", "2 Rounds", "Unlimited"],
      },
      { feature: "Dedicated Manager", values: [false, false, true] },
    ],
  },

  closingCta: {
    heading: "Looking for a Custom Avatar?",
    text: "Build trust with your audience by cloning your own speaker avatar and voice. We provide end-to-end custom setups.",
    linkText: "Let's discuss details in a 15-minute call.",
    linkHref: "/contact",
    buttonLabel: "Book an AI Video Call",
    buttonHref: "/contact",
  },
};

export default aiVideoCreation;

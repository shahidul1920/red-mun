import heroImage from "@/images/other/social-media-management-hero.jpg";

/** @type {import('@/components/ServicePageTemplate').ServicePageData} */
const videoEditing = {
  eyebrow: "Video Editing",
  heroImage,
  heroTitle: "Cinematic Video Editing Services That Capture Attention",
  heroDescription:
    "Transform raw footage into captivating cinematic masterpieces. We specialize in high-end pacing, color grading, sound design, and motion graphics that keep viewers hooked from the first second.",

  introHeading:
    "Premium, professional video post-production designed to tell stories, evoke emotion, and drive audience retention",
  introDescription:
    "Behind every great video is a masterfully crafted edit. Our professional Video Editing services turn your raw recordings, interviews, vlogs, or commercial shoots into polished, industry-standard video assets. We focus on key elements like pacing, audio clarity, seamless transitions, and color correction to create an immersive viewing experience. Our editors are skilled in modern video formats, ensuring your content is perfectly tailored for YouTube, corporate presentations, TV broadcasts, or social media platforms like TikTok and Instagram Reels. We work closely with your brand guidelines to integrate titles, lower thirds, and call-outs that look clean and premium. Let us take care of the technical heavy lifting so you can focus on creating great content.",

  tiers: [
    {
      name: "Essential",
      description:
        "Ideal for regular content creators, vloggers, or small businesses needing basic edits and clean pacing.",
      features: [
        "4 Edited Videos per Month",
        "Up to 5 Minutes Raw Footage per Edit",
        "Basic Cuts, Splices & Transitions",
        "Standard Audio Noise Reduction",
        "Royalty-Free Background Music Integration",
        "1 Round of Revisions per Video",
        "Full HD 1080p Export",
      ],
      ctaLabel: "Ask for Quotation",
      ctaHref: "/contact?service=video-editing&package=essential",
    },
    {
      name: "Growth",
      description:
        "For companies and brands wanting polished, high-engagement promotional videos, commercials, and social cuts.",
      features: [
        "8 Edited Videos per Month",
        "Up to 15 Minutes Raw Footage per Edit",
        "Professional Color Grading & Correction",
        "Advanced Sound Design & Audio Sweetening",
        "Custom Text Animations & Lower Thirds",
        "Platform Exports (16:9 Landscape & 9:16 Vertical)",
        "Social Shorts/Reels Cuts (Up to 3 per edit)",
        "2 Rounds of Revisions per Video",
        "Priority Processing",
      ],
      ctaLabel: "Ask for Quotation",
      ctaHref: "/contact?service=video-editing&package=growth",
    },
    {
      name: "Authority",
      highlighted: true,
      description:
        "For cinematic commercials, brand documentaries, or high-end corporate video projects requiring top-tier editing.",
      features: [
        "Unlimited Edited Videos (Dedicated Queue)",
        "Uncapped Raw Footage Duration",
        "Cinema-Grade Color Grading & Look Development",
        "Premium Sound Design & Spatial Audio Mixing",
        "Bespoke 2D/3D Motion Graphics & Intros",
        "Script Enhancement & Storyboarding Assistance",
        "Multi-Camera Editing & Synchronization",
        "Unlimited Revisions",
        "4K Ultra HD Export Options",
        "Dedicated Lead Video Editor & Slack Channel",
      ],
      ctaLabel: "Ask for Quotation",
      ctaHref: "/contact?service=video-editing&package=authority",
    },
  ],

  comparison: {
    rows: [
      {
        feature: "Edits per Month",
        values: ["4 Videos", "8 Videos", "Dedicated Queue"],
      },
      {
        feature: "Max Raw Footage",
        values: ["5 Minutes", "15 Minutes", "Uncapped"],
      },
      {
        feature: "Color Grading",
        values: [
          "Basic Adjustment",
          "Professional Grading",
          "Cinema-Grade LookDev",
        ],
      },
      {
        feature: "Sound Design & Mix",
        values: [
          "Noise Reduction",
          "Advanced Design",
          "Premium Cinematic Sound",
        ],
      },
      {
        feature: "Motion Graphics & Text",
        values: [
          "Standard Titles",
          "Custom Animations",
          "Bespoke 2D/3D Assets",
        ],
      },
      { feature: "Multi-Cam Editing", values: [false, false, true] },
      {
        feature: "Social Media Cuts",
        values: [false, "Up to 3 per Video", "Unlimited Custom Cuts"],
      },
      {
        feature: "Resolution Support",
        values: ["1080p", "1080p & Vertical", "Up to 4K UHD"],
      },
      {
        feature: "Revision Rounds",
        values: ["1 Round", "2 Rounds", "Unlimited"],
      },
      { feature: "Lead Editor Access", values: [false, false, true] },
    ],
  },

  closingCta: {
    heading: "Have a Custom Project in Mind?",
    text: "From full-length documentaries to complex product advertisements, we can customize our editing pipeline to your needs.",
    linkText: "Let's connect for a 15-minute alignment chat.",
    linkHref: "/contact",
    buttonLabel: "Book an Editing Call",
    buttonHref: "/contact",
  },
};

export default videoEditing;

import heroImage from "@/images/other/social-media-management-hero.jpg";

/** @type {import('@/components/ServicePageTemplate').ServicePageData} */
const dataAnalytics = {
  eyebrow: "Data Analytics",
  heroImage,
  heroTitle: "Turn Raw Business Data Into Actionable Visual Insights",
  heroDescription:
    "Make confident, data-driven decisions with our premium analytics services. We set up tracking pipelines, design custom business dashboards, and uncover valuable insights that grow your revenue.",

  introHeading:
    "Advanced analytics architecture and intelligence dashboards designed to unlock hidden growth opportunities",
  introDescription:
    "In a data-rich business environment, the organizations that succeed are those that understand their numbers. Our Data Analytics services translate complex, raw tracking logs and sales database entries into clean, readable, and actionable visual reports. We help you design event tracking setups (using Google Tag Manager, GA4, Meta Pixels, and Ads tracking), build robust data warehouses, and build beautiful, automated dashboards in Looker Studio or Power BI. By modeling key user behavior paths, tracking sales funnels, and analyzing customer acquisition costs, we empower your marketing and executive teams to optimize budgets, improve conversions, and confidently scale operations.",

  tiers: [
    {
      name: "Essential",
      description:
        "Ideal for small websites, blogs, and local service brands needing clean event tracking and basic traffic insights.",
      features: [
        "Google Analytics (GA4) & GTM Standard Setup",
        "Custom Event Tracking Setup (Up to 5 Key Actions)",
        "1 Automated Looker Studio Dashboard",
        "Standard Marketing Conversions Tracking",
        "Monthly PDF Performance Email Reports",
        "Basic Funnel Dropoff Analytics",
        "30-Day Post-Implementation Support",
        "1-Hour Project Handover & Training Call",
      ],
      ctaLabel: "Ask for Quotation",
      ctaHref: "/contact?service=data-analytics&package=essential",
    },
    {
      name: "Growth",
      description:
        "For active e-commerce or lead generation brands requiring cross-channel analytics, custom funnels, and regular analyst consulting.",
      features: [
        "Multi-Platform Pixel Tracking (GA4, Meta, Google Ads)",
        "Custom Event & Interaction Tracking (Up to 20)",
        "Custom Looker Studio or Power BI Dashboards",
        "Weekly Auto-updating Data Connections",
        "E-commerce Purchasing Funnel Audit & Setup",
        "Detailed Marketing Attribution Setup",
        "90-Day Post-Implementation Support",
        "1x Monthly Analyst Scoping & Review Meeting",
      ],
      ctaLabel: "Ask for Quotation",
      ctaHref: "/contact?service=data-analytics&package=growth",
    },
    {
      name: "Authority",
      highlighted: true,
      description:
        "For enterprise organizations requiring advanced data engineering, centralized warehousing, and custom predictive models.",
      features: [
        "Cloud Data Pipeline Setup (BigQuery, Snowflake, or Redshift)",
        "Advanced Data Cleaning & SQL Modelling",
        "Bespoke Executive-Level Multi-source Dashboards",
        "Real-Time Data Streaming & Live Analytics",
        "Predictive Customer Cohort & LTV Analysis",
        "Custom CRM Data Integration (Salesforce, HubSpot)",
        "1-Year Priority Support & SLA Maintenance",
        "Dedicated Analytics Consultant / Lead Analyst",
        "On-Demand Slack Support & Scoping Meetings",
      ],
      ctaLabel: "Ask for Quotation",
      ctaHref: "/contact?service=data-analytics&package=authority",
    },
  ],

  comparison: {
    rows: [
      {
        feature: "Supported Platforms",
        values: [
          "GA4 & GTM",
          "GA4 / Meta / Google Ads",
          "All platforms + Data Warehouse",
        ],
      },
      {
        feature: "Custom Event Tracking",
        values: ["5 Events", "20 Events", "Unlimited Custom Events"],
      },
      {
        feature: "Custom Dashboards",
        values: [
          "1 Standard",
          "2 Advanced Dashboards",
          "Bespoke Executive Suite",
        ],
      },
      {
        feature: "Data Refresh Frequency",
        values: ["Daily", "Hourly", "Real-Time / Live Streaming"],
      },
      {
        feature: "Funnel & Cohort Analysis",
        values: [
          "Basic Funnel",
          "Advanced E-commerce Funnel",
          "Predictive & Cohorts",
        ],
      },
      { feature: "Data Warehousing & SQL", values: [false, false, true] },
      { feature: "CRM / Offline Integrations", values: [false, false, true] },
      {
        feature: "Attribution Modeling",
        values: [
          "Standard First/Last Click",
          "Data-Driven Standard",
          "Custom Multi-Touch Models",
        ],
      },
      {
        feature: "Monthly Consulting Hours",
        values: ["Email Support", "1 Hour Review", "On-Demand Scoping"],
      },
      {
        feature: "Support & SLA",
        values: ["30 Days", "90 Days", "1 Year Priority Support"],
      },
    ],
  },

  closingCta: {
    heading: "Need Custom Tracking or Data Engineering?",
    text: "From specialized event triggers to database structuring, our analysts can tailor pipelines to match your unique data sources.",
    linkText: "Let's align with a 15-minute scoping call.",
    linkHref: "/contact",
    buttonLabel: "Book an Analytics Call",
    buttonHref: "/contact",
  },
};

export default dataAnalytics;

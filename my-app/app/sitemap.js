export default function sitemap() {
  const baseUrl = "https://asthacreatives.com";
  const lastModified = new Date();

  const routes = [
    { url: "", changefreq: "daily", priority: 1.0 },
    { url: "/about", changefreq: "monthly", priority: 0.8 },
    { url: "/contact", changefreq: "monthly", priority: 0.8 },
    { url: "/services/creative-design", changefreq: "monthly", priority: 0.8 },
    {
      url: "/services/social-media-management",
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: "/services/ai-video-creation",
      changefreq: "monthly",
      priority: 0.8,
    },
    { url: "/services/video-editing", changefreq: "monthly", priority: 0.8 },
    {
      url: "/services/website-development",
      changefreq: "monthly",
      priority: 0.8,
    },
    { url: "/services/data-analytics", changefreq: "monthly", priority: 0.8 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified,
    changeFrequency: route.changefreq,
    priority: route.priority,
  }));
}

import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  company: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Creative Design", href: "/services/creative-design" },
    { name: "AI Video Creation", href: "/services/ai-video-creation" },
    { name: "Video Editing", href: "/services/video-editing" },
    { name: "Data Analytics", href: "/services/data-analytics" },
    { name: "Website Development", href: "/services/website-development" },
    {
      name: "Social Media Management",
      href: "/services/social-media-management",
    },
  ],
};

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <path d="M13.5 9H15V6.5h-1.75C11.57 6.5 10.5 7.57 10.5 9.25V11H9v2.5h1.5V18h2.5v-4.5H15l.5-2.5h-2v-1.25c0-.41.34-.75.75-.75z" />
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <path d="M21 6.4a6.8 6.8 0 0 1-1.9.53 3.3 3.3 0 0 0 1.46-1.85 6.6 6.6 0 0 1-2.1.8 3.3 3.3 0 0 0-5.63 3.01A9.36 9.36 0 0 1 5.9 5.6a3.3 3.3 0 0 0 1.02 4.4 3.3 3.3 0 0 1-1.5-.41v.04a3.3 3.3 0 0 0 2.65 3.24 3.3 3.3 0 0 1-1.49.06 3.3 3.3 0 0 0 3.08 2.3A6.63 6.63 0 0 1 3 16.58a9.3 9.3 0 0 0 5.06 1.48c6.07 0 9.4-5.03 9.4-9.4l-.01-.43A6.7 6.7 0 0 0 21 6.4z" />
    ),
  },
  {
    name: "Google",
    href: "#",
    icon: (
      <path d="M12 10.4v3.2h4.5c-.2 1.2-1.6 3.5-4.5 3.5-2.7 0-4.9-2.2-4.9-5s2.2-5 4.9-5c1.5 0 2.6.6 3.1 1.1l2.1-2C15.8 5 14.1 4 12 4 7.6 4 4 7.6 4 12s3.6 8 8 8c4.6 0 7.7-3.2 7.7-7.8 0-.5-.05-.9-.1-1.3H12z" />
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <>
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="4.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle
          cx="12"
          cy="12"
          r="3.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle cx="16.5" cy="7.5" r="0.9" />
      </>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <path d="M6.94 8.5H4.56V19h2.38V8.5zM5.75 4.5a1.38 1.38 0 1 0 0 2.76 1.38 1.38 0 0 0 0-2.76zM19.5 19h-2.38v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V19H10.7V8.5h2.28v1.43h.03c.32-.6 1.1-1.23 2.27-1.23 2.43 0 2.88 1.6 2.88 3.68V19z" />
    ),
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-brand text-white">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Logo, tagline, socials */}
          <div>
            <Link href="/" className="inline-block">
              <div className="h-[50px] w-auto">
                <Image
                  src="/astha-creatives-logo-1.png"
                  alt="Astha Creatives"
                  width={70}
                  height={70}
                  className="size-full object-contain brightness-0 invert"
                />
              </div>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              Your dedicated branding partner with high impact design, strategic
              marketing, and actionable insights.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-brand"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-lg font-bold">Company</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-bold">Get In Touch</h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-white/70">
              <li>Road 13, Sector 14, Uttara, Dhaka</li>
              <li>
                <a
                  href="mailto:contact@redmun.com"
                  className="transition-colors duration-200 hover:text-white"
                >
                  contact@redmun.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+8801711994608"
                  className="transition-colors duration-200 hover:text-white"
                >
                  +880 1711 994608
                </a>
              </li>
              <li>
                <a
                  href="tel:+8801308379019"
                  className="transition-colors duration-200 hover:text-white"
                >
                  +880 1308 379019
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Astha Creatives. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="transition-colors duration-200 hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors duration-200 hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

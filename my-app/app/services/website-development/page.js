import ServicePageTemplate from "@/components/ServicePageTemplate";
import websiteDevelopment from "@/data/services/website-development";

export const metadata = {
  title: "Custom Website Development & Web Apps | Astha Creatives",
  description:
    "Build fast, secure, and mobile-friendly websites with our website development services. We create custom landing pages, corporate websites with CMS, and full e-commerce applications.",
};

export default function WebsiteDevelopmentPage() {
  return <ServicePageTemplate service={websiteDevelopment} />;
}

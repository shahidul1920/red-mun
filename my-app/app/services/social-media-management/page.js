import ServicePageTemplate from "@/components/ServicePageTemplate";
import socialMediaManagement from "@/data/services/social-media-management";

export const metadata = {
  title: "Social Media Management | Astha Creatives",
  description:
    "Professional Social Media Management services that drive real growth — strategy, content, and community management built to build brands, engage audiences, and deliver measurable results.",
};

export default function SocialMediaManagementPage() {
  return <ServicePageTemplate service={socialMediaManagement} />;
}

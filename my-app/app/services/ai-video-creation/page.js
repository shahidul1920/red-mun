import ServicePageTemplate from "@/components/ServicePageTemplate";
import aiVideoCreation from "@/data/services/ai-video-creation";

export const metadata = {
  title: "AI Video Creation & Digital Avatar Presenters | Astha Creatives",
  description:
    "Scale your marketing with advanced AI video creation services. Leverage realistic digital avatars, neural voice synthesis, and dynamic scripting to build engaging, conversion-focused content.",
};

export default function AIVideoCreationPage() {
  return <ServicePageTemplate service={aiVideoCreation} />;
}

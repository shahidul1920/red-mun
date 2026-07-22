import ServicePageTemplate from "@/components/ServicePageTemplate";
import creativeDesign from "@/data/services/creative-design";

export const metadata = {
  title: "Creative Design & Branding Services | Astha Creatives",
  description:
    "Elevate your brand presence with professional creative design services. We deliver custom logo design, complete brand identity guidelines, stationery kits, and social templates built to convert.",
};

export default function CreativeDesignPage() {
  return <ServicePageTemplate service={creativeDesign} />;
}

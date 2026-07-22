import ServicePageTemplate from "@/components/ServicePageTemplate";
import videoEditing from "@/data/services/video-editing";

export const metadata = {
  title: "Professional Video Editing & Post-Production | Astha Creatives",
  description:
    "Transform your raw footage into cinematic stories. Our premium video editing services include color grading, advanced sound design, motion graphics, and social-first crop edits built to retain viewers.",
};

export default function VideoEditingPage() {
  return <ServicePageTemplate service={videoEditing} />;
}

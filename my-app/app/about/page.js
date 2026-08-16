import AboutWeDo from "@/components/AboutWeDo";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gcta from "@/components/Gcta";

export const metadata = {
  title: "About Us | Redmun Creative & Digital Agency",
  description:
    "Learn about Redmun, our mission, core values, experienced team, and why ambitious brands trust us for creative design, web development, and data analytics.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutWeDo />
      <WhyChooseUs />
      <Gcta />
    </main>
  );
}


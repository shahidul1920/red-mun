import HeroSection from "@/components/HeroSection";
import Heroii from "@/components/Heroii";
import ServicesSection from "@/components/ServicesSection";
import Customers from "@/components/Customers";
import Team from "@/components/Team";
import Gcta from "@/components/Gcta";

export default function Home() {
  return (
    <div className="font-poppins">
      <HeroSection />
      <Heroii />
      <ServicesSection />
      <Customers />
      <Team />
      <Gcta />
    </div>
  );
}


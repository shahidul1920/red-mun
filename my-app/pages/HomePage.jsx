import Customers from "@/components/Customers";
//import DemoScreen from "@/components/DemoScreen";
import Gcta from "@/components/Gcta";
import Heroii from "@/components/Heroii";
import HeroSection from "@/components/HeroSection";
//import Portfolio from "@/components/Portfolio";
import ServicesSection from "@/components/ServicesSection";
import Team from "@/components/Team";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Heroii />
      <ServicesSection />
      {/* <Portfolio /> */}
      <Customers />
      <Team />
      <Gcta />

      {/* <DemoScreen /> */}
    </div>
  );
};

export default HomePage;

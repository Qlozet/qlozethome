import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/vendor/VendorDropdownPages/ClothingGenerator/Hero";
import { HowItWorksSection } from "@/components/vendor/VendorDropdownPages/ClothingGenerator/HowItWorks";
import { WhyVendorsSection } from "@/components/vendor/VendorDropdownPages/ClothingGenerator/WhyVendors";
import { WhatSection } from "@/components/vendor/VendorDropdownPages/ClothingGenerator/What";
import { FAQSection } from "@/components/home/FAQ";
import { VendorCTA } from "@/components/vendor/VendorLandingPage/CTA";
import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import faqData from "@/data/home/faq.json";
import ctaData from "@/data/vendor/vendorlanding/cta.json";
import heroData from "@/data/vendor/vendordropdown/clothinggenerator/hero.json";
import howItWorksData from "@/data/vendor/vendordropdown/clothinggenerator/howitworks.json";
import whyVendorsData from "@/data/vendor/vendordropdown/clothinggenerator/whyvendors.json";
import whatData from "@/data/vendor/vendordropdown/clothinggenerator/what.json";

export default function ClothingGeneratorPage() {
  return (
    <div className="min-h-screen">
      <Header data={navbarData} />
      <HeroSection data={heroData} />
      <WhatSection data={whatData} />
      <HowItWorksSection data={howItWorksData} />
      <WhyVendorsSection data={whyVendorsData} />
      <FAQSection data={faqData} />
      <VendorCTA data={ctaData} />
      <Footer data={footerData} />
    </div>
  );
}


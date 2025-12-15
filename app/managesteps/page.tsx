import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/vendor/VendorDropdownPages/ManageSteps/Hero";
import { HowItWorksSection } from "@/components/vendor/VendorDropdownPages/ManageSteps/HowItWorks";
import { WhyItMattersSection } from "@/components/vendor/VendorDropdownPages/ManageSteps/WhyItMatters";
import { WhatSection } from "@/components/vendor/VendorDropdownPages/ManageSteps/What";
import { FAQSection } from "@/components/home/FAQ";
import { VendorCTA } from "@/components/vendor/VendorLandingPage/CTA";
import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import faqData from "@/data/home/faq.json";
import ctaData from "@/data/vendor/vendorlanding/cta.json";
import heroData from "@/data/vendor/vendordropdown/managesteps/hero.json";
import howItWorksData from "@/data/vendor/vendordropdown/managesteps/howitworks.json";
import whyItMattersData from "@/data/vendor/vendordropdown/managesteps/whyitmatters.json";
import whatData from "@/data/vendor/vendordropdown/managesteps/what.json";

export default function ManageStepsPage() {
  return (
    <div className="min-h-screen">
      <Header data={navbarData} />
      <HeroSection data={heroData} />
      <WhatSection data={whatData} />
      <HowItWorksSection data={howItWorksData} />
      <WhyItMattersSection data={whyItMattersData} />
      <FAQSection data={faqData} />
      <VendorCTA data={ctaData} />
      <Footer data={footerData} />
    </div>
  );
}


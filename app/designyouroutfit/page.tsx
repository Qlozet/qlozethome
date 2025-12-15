import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DesignYourOutfitHero } from "@/components/user/DesignYourOutfit/Hero";
import { ExperienceSection } from "@/components/user/DesignYourOutfit/BespokeExperience";
import { HowItWorksSection } from "@/components/user/DesignYourOutfit/HowItWorks";
import { WhatsCustomizeSection } from "@/components/user/DesignYourOutfit/WhatYouCanCustomize";
import { FAQSection } from "@/components/home/FAQ";
import { VendorCTA } from "@/components/vendor/VendorLandingPage/CTA";
import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import designYourOutfitData from "@/data/user/designyouroutfit/designyouroutfit.json";
import bespokeExperienceData from "@/data/user/designyouroutfit/bespoke-experience.json";
import howItWorksData from "@/data/user/designyouroutfit/how-it-works.json";
import whatYouCanCustomizeData from "@/data/user/designyouroutfit/what-you-can-customize.json";
import faqData from "@/data/home/faq.json";
import vendorCTAData from "@/data/vendor/vendorlanding/cta.json";

export default function DesignYourOutfitPage() {
  return (
    <div className="min-h-screen max-w-[90vw] mx-auto">
      <Header data={navbarData} />
      <DesignYourOutfitHero data={designYourOutfitData} />
      <WhatsCustomizeSection data={whatYouCanCustomizeData} />
      <HowItWorksSection data={howItWorksData} />
      <ExperienceSection data={bespokeExperienceData} />
      <FAQSection data={faqData} />
      <VendorCTA data={vendorCTAData} />
      <Footer data={footerData} />
    </div>
  );
}


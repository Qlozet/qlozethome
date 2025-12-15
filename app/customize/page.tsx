import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomizeHero } from "@/components/user/customisepage/customize";
import { WhatsCustomizeSection } from "@/components/user/customisepage/WhatsCustomize";
import { HowItWorksSection } from "@/components/user/customisepage/HowItWorks";
import { ExperienceSection } from "@/components/user/customisepage/Experience";
import { FAQSection } from "@/components/home/FAQ";
import { VendorCTA } from "@/components/vendor/VendorLandingPage/CTA";
import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import customizeData from "@/data/user/customize/customize.json";
import whatsCustomizeData from "@/data/user/customize/whats-customize.json";
import customizeHowItWorksData from "@/data/user/customize/customize-how-it-works.json";
import customizeExperienceData from "@/data/user/customize/customize-experience.json";
import faqData from "@/data/home/faq.json";
import ctaData from "@/data/vendor/vendorlanding/cta.json";

export default function CustomizePage() {
  return (
    <div className="min-h-screen max-w-[90vw] mx-auto">
      <Header data={navbarData} />
      <CustomizeHero data={customizeData} />
      <WhatsCustomizeSection data={whatsCustomizeData} />
      <HowItWorksSection data={customizeHowItWorksData} />
      <ExperienceSection data={customizeExperienceData} />
      <FAQSection data={faqData} />
      <VendorCTA data={ctaData} />
      <Footer data={footerData} />
    </div>
  );
}


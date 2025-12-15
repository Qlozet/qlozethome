import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VendorCTA } from "@/components/vendor/VendorLandingPage/CTA";
import { VendorDifferentiators } from "@/components/vendor/VendorLandingPage/Differentiators";
import { FAQSection } from "@/components/home/FAQ";
import { VendorFeatures } from "@/components/vendor/VendorLandingPage/Features";
import { VendorHero } from "@/components/vendor/VendorLandingPage/Hero";
import { VendorHowItWorks } from "@/components/vendor/VendorLandingPage/HowItWorks";
import { VendorIntegrations } from "@/components/vendor/VendorLandingPage/Integrations";
import { PartnersSection } from "@/components/home/Partners";
import { VendorTools } from "@/components/vendor/VendorLandingPage/Tools";
import { VendorVideo } from "@/components/vendor/VendorLandingPage/Video";

import vendorCtaData from "@/data/vendor/vendorlanding/cta.json";
import differentiatorsData from "@/data/vendor/vendorlanding/differentiators.json";
import faqData from "@/data/home/faq.json";
import featuresData from "@/data/vendor/vendorlanding/features.json";
import footerData from "@/data/global/footer.json";
import heroData from "@/data/vendor/vendorlanding/hero.json";
import howItWorksData from "@/data/vendor/vendorlanding/how-it-works.json";
import integrationsData from "@/data/vendor/vendorlanding/integrations.json";
import navbarData from "@/data/global/navbar.json";
import partnersData from "@/data/home/partners.json";
import toolsData from "@/data/vendor/vendorlanding/tools.json";
import videoData from "@/data/vendor/vendorlanding/video.json";

export default function VendorPage() {
  return (
    <div id="top" className="bg-white text-[#1b1b1b] max-w-[90vw] mx-auto">
      <Header data={navbarData} />
      <div className="sticky top-0 z-0">
        <VendorHero data={heroData} />
      </div>
      <main className="relative flex flex-col">
        <div className="sticky top-0 z-10">
          <VendorDifferentiators data={differentiatorsData} />
          <VendorHowItWorks data={howItWorksData} />
          <VendorTools data={toolsData} />
          <VendorFeatures data={featuresData} />
          <VendorVideo data={videoData} />
          <VendorIntegrations data={integrationsData} />
          <PartnersSection data={partnersData} />
          <FAQSection data={faqData} />
          <VendorCTA data={vendorCtaData} />
        </div>

      </main>
      <div className="relative z-30">
        <Footer data={footerData} />
      </div>

    </div>
  );
}


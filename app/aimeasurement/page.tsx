import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/vendor/VendorDropdownPages/AIMeasurement/Hero";
import { HowItWorksSection } from "@/components/vendor/VendorDropdownPages/AIMeasurement/HowItWorks";
import { WhySection } from "@/components/vendor/VendorDropdownPages/AIMeasurement/Why";
import { IntegrationSection } from "@/components/vendor/VendorDropdownPages/AIMeasurement/Integrations";
import { FAQSection } from "@/components/home/FAQ";
import { VendorCTA } from "@/components/vendor/VendorLandingPage/CTA";
import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import faqData from "@/data/home/faq.json";
import ctaData from "@/data/vendor/vendorlanding/cta.json";
import heroData from "@/data/vendor/vendordropdown/aimmeasurement/hero.json";
import howItWorksData from "@/data/vendor/vendordropdown/aimmeasurement/howitworks.json";
import whyData from "@/data/vendor/vendordropdown/aimmeasurement/why.json";
import integrationsData from "@/data/vendor/vendordropdown/aimmeasurement/integrations.json";

export default function AIMeasurementPage() {
  return (
    <div className="min-h-screen">
      <Header data={navbarData} />
      <HeroSection data={heroData} />
      <WhySection data={whyData} />
      <HowItWorksSection data={howItWorksData} />
      <IntegrationSection data={integrationsData} />
      <FAQSection data={faqData} />
      <VendorCTA data={ctaData} />
      <Footer data={footerData} />
    </div>
  );
}


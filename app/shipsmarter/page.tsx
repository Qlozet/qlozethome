import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/vendor/VendorDropdownPages/ShipSmarter/Hero";
import { BespokeSection } from "@/components/vendor/VendorDropdownPages/ShipSmarter/Bespoke";
import { HowItWorksSection } from "@/components/vendor/VendorDropdownPages/ShipSmarter/HowItWorks";
import { WhySection } from "@/components/vendor/VendorDropdownPages/ShipSmarter/Why";
import { FAQSection } from "@/components/home/FAQ";
import { VendorCTA } from "@/components/vendor/VendorLandingPage/CTA";
import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import faqData from "@/data/home/faq.json";
import ctaData from "@/data/vendor/vendorlanding/cta.json";
import heroData from "@/data/vendor/vendordropdown/shipsmarter/hero.json";
import bespokeData from "@/data/vendor/vendordropdown/shipsmarter/bespoke.json";
import howItWorksData from "@/data/vendor/vendordropdown/shipsmarter/howitworks.json";
import whyData from "@/data/vendor/vendordropdown/shipsmarter/why.json";

export default function ShipSmarterPage() {
  return (
    <div className="min-h-screen">
      <Header data={navbarData} />
      <HeroSection data={heroData} />
      <WhySection data={whyData} />
      <HowItWorksSection data={howItWorksData} />
      <BespokeSection data={bespokeData} />
      <FAQSection data={faqData} />
      <VendorCTA data={ctaData} />
      <Footer data={footerData} />
    </div>
  );
}


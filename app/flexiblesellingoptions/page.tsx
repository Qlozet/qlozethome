import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/vendor/VendorDropdownPages/FlexibleSellingOptions/Hero";
import { ToolkitSection } from "@/components/vendor/VendorDropdownPages/FlexibleSellingOptions/Toolkit";
import { HowItWorksSection } from "@/components/vendor/VendorDropdownPages/FlexibleSellingOptions/HowItWorks";
import { EmpowerSection } from "@/components/vendor/VendorDropdownPages/FlexibleSellingOptions/Empower";
import { FAQSection } from "@/components/home/FAQ";
import { VendorCTA } from "@/components/vendor/VendorLandingPage/CTA";
import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import faqData from "@/data/home/faq.json";
import ctaData from "@/data/vendor/vendorlanding/cta.json";
import heroData from "@/data/vendor/flexiblesellingoptions/hero.json";
import toolkitData from "@/data/vendor/flexiblesellingoptions/toolkit.json";
import howItWorksData from "@/data/vendor/flexiblesellingoptions/how-it-works.json";
import empowerData from "@/data/vendor/flexiblesellingoptions/empower.json";


export default function FlexibleSellingOptionsPage() {
  return (
    <div className="min-h-screen max-w-[90vw] mx-auto">
      <Header data={navbarData} />
      <HeroSection data={heroData} />
      <ToolkitSection data={toolkitData} />
      <HowItWorksSection data={howItWorksData} />
      <EmpowerSection data={empowerData} />
      <FAQSection data={faqData} />
      <VendorCTA data={ctaData} />
      <Footer data={footerData} />
    </div>
  );
}


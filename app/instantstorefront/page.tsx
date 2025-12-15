import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/vendor/VendorDropdownPages/InstantStorefront/Hero";
import { WhySection } from "@/components/vendor/VendorDropdownPages/InstantStorefront/Why";
import { HowItWorksSection } from "@/components/vendor/VendorDropdownPages/InstantStorefront/HowItWorks";
import { FAQSection } from "@/components/home/FAQ";
import { VendorCTA } from "@/components/vendor/VendorLandingPage/CTA";
import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import faqData from "@/data/home/faq.json";
import ctaData from "@/data/vendor/vendorlanding/cta.json";
import heroData from "@/data/vendor/vendordropdown/instantstorefront/hero.json";
import whyData from "@/data/vendor/vendordropdown/instantstorefront/why.json";
import howItWorksData from "@/data/vendor/vendordropdown/instantstorefront/how-it-works.json";

export default function InstantStorefrontPage() {
  return (
    <div className="min-h-screen max-w-[90vw] mx-auto">
      <Header data={navbarData} />
      <HeroSection data={heroData} />
      <WhySection data={whyData} />
      <HowItWorksSection data={howItWorksData} />
      <FAQSection data={faqData} />
      <VendorCTA data={ctaData} />
      <Footer data={footerData} />
    </div>
  );
}


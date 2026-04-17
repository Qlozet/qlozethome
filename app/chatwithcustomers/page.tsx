import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/vendor/VendorDropdownPages/ChatWithCustomers/Hero";
import { HowItWorksSection } from "@/components/vendor/VendorDropdownPages/ChatWithCustomers/HowItWorks";
import { ClaritySection } from "@/components/vendor/VendorDropdownPages/ChatWithCustomers/Clarity";
import { WhySection } from "@/components/vendor/VendorDropdownPages/ChatWithCustomers/Why";
import { FAQSection } from "@/components/home/FAQ";
import { VendorCTA } from "@/components/vendor/VendorLandingPage/CTA";
import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import faqData from "@/data/home/faq.json";
import ctaData from "@/data/vendor/vendorlanding/cta.json";
import heroData from "@/data/vendor/vendordropdown/chatwithcustomers/hero.json";
import howItWorksData from "@/data/vendor/vendordropdown/chatwithcustomers/howitworks.json";
import clarityData from "@/data/vendor/vendordropdown/chatwithcustomers/clarity.json";
import whyData from "@/data/vendor/vendordropdown/chatwithcustomers/why.json";

export default function ChatWithCustomersPage() {
  return (
    <div className="min-h-screen">
      <Header data={navbarData} />
      <HeroSection data={heroData} />
      <WhySection data={whyData} />
      <HowItWorksSection data={howItWorksData} />
      <ClaritySection data={clarityData} />
      <FAQSection data={faqData} />
      <VendorCTA data={ctaData} />
      <Footer data={footerData} />
    </div>
  );
}


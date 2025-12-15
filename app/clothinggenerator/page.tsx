import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/vendor/VendorDropdownPages/ClothingGenerator/Hero";
import { FAQSection } from "@/components/home/FAQ";
import { VendorCTA } from "@/components/vendor/VendorLandingPage/CTA";
import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import faqData from "@/data/home/faq.json";
import ctaData from "@/data/vendor/vendorlanding/cta.json";
import heroData from "@/data/vendor/vendordropdown/clothinggenerator/hero.json";

export default function ClothingGeneratorPage() {
  return (
    <div className="min-h-screen">
      <Header data={navbarData} />
      <HeroSection data={heroData} />
      <FAQSection data={faqData} />
      <VendorCTA data={ctaData} />
      <Footer data={footerData} />
    </div>
  );
}


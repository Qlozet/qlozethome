import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FAQSection } from "@/components/home/FAQ";
import { VendorCTA } from "@/components/vendor/VendorLandingPage/CTA";
import { FeatureSection, LiveHero } from "@/components/live/kit";
import { DesignDetailScene, QuoteRequestsScene, RequestStatusScene, StyleImageScene } from "@/components/live/generator";

import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import faqData from "@/data/home/faq.json";
import ctaData from "@/data/vendor/vendorlanding/cta.json";
import page from "@/data/vendor/vendordropdown/clothinggenerator/page.json";

export default function ClothingGeneratorPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header data={navbarData} />
      <LiveHero copy={page.hero} cta={page.hero.cta} visual={<QuoteRequestsScene />} />
      <FeatureSection id="what-to-make" copy={page.detail} visual={<DesignDetailScene />} flip tint />
      <FeatureSection id="quote" copy={page.status} visual={<RequestStatusScene />} />
      <FeatureSection id="styles" copy={page.styles} visual={<StyleImageScene />} flip tint />
      <FAQSection data={faqData} />
      <VendorCTA data={ctaData} />
      <Footer data={footerData} />
    </div>
  );
}

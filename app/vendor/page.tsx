import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FAQSection } from "@/components/home/FAQ";
import { FeatureSection } from "@/components/live/kit";
import { EarningsCalculator, VendorJourneyHero } from "@/components/live/vendor-hero";
import { VendorAudience, VendorClosing, VendorFeatureGrid, VendorSteps } from "@/components/live/vendor-overview";

import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import faqData from "@/data/home/faq.json";
import page from "@/data/vendor/vendorlanding/overview.json";

export default function VendorPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header data={navbarData} />
      <VendorJourneyHero copy={page.hero} cta={page.hero.cta} secondary={page.closing.secondary} />
      <VendorFeatureGrid {...page.features} />
      <FeatureSection id="pricing" copy={page.money} visual={<EarningsCalculator />} flip tint />
      <VendorSteps {...page.steps} />
      <VendorAudience {...page.audience} />
      <FAQSection data={faqData} />
      <VendorClosing {...page.closing} />
      <Footer data={footerData} />
    </div>
  );
}

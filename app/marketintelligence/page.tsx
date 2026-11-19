import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FAQSection } from "@/components/home/FAQ";
import { ClosingCTA } from "@/components/vendor/VendorDropdownPages/MarketIntelligence/Closing/ClosingCTA";
import { FeatureSection, LiveHero } from "@/components/live/kit";
import { ActionScene, AssistantScene, CustomersScene, DashboardScene, DigestScene } from "@/components/live/insights";

import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import faqData from "@/data/home/faq.json";
import page from "@/data/vendor/vendordropdown/marketintelligence/page.json";

export default function MarketIntelligencePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header data={navbarData} />
      <LiveHero copy={page.hero} cta={page.hero.cta} visual={<DashboardScene />} />
      <FeatureSection id="assistant" copy={page.assistant} visual={<AssistantScene />} flip tint />
      <FeatureSection id="actions" copy={page.actions} visual={<ActionScene />} />
      <FeatureSection id="digest" copy={page.digest} visual={<DigestScene />} flip tint />
      <FeatureSection id="customers" copy={page.customers} visual={<CustomersScene />} />
      <FAQSection data={faqData} />
      <ClosingCTA data={page.closing} />
      <Footer data={footerData} />
    </div>
  );
}

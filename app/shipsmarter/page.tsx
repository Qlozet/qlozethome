import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FAQSection } from "@/components/home/FAQ";
import { LogisticsClosingSection } from "@/components/vendor/VendorDropdownPages/ShipSmarter/Closing/LogisticsClosingSection";
import { FeatureSection, LiveHero } from "@/components/live/kit";
import { CourierQuotesScene, OrderDrawerScene, ShipByScene, ShipmentUpdatesScene } from "@/components/live/shipping";

import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import faqData from "@/data/home/faq.json";
import page from "@/data/vendor/vendordropdown/shipsmarter/page.json";

export default function ShipSmarterPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header data={navbarData} />
      <LiveHero copy={page.hero} cta={page.hero.cta} visual={<OrderDrawerScene />} />
      <FeatureSection id="quotes" copy={page.quotes} visual={<CourierQuotesScene />} flip tint />
      <FeatureSection id="updates" copy={page.updates} visual={<ShipmentUpdatesScene />} />
      <FeatureSection id="ship-by" copy={page.shipby} visual={<ShipByScene />} flip tint />
      <FAQSection data={faqData} />
      <LogisticsClosingSection data={page.closing} />
      <Footer data={footerData} />
    </div>
  );
}

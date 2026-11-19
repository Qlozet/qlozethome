import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FAQSection } from "@/components/home/FAQ";
import { VendorClosingSection } from "@/components/vendor/VendorDropdownPages/FlexibleSellingOptions/Closing/VendorClosingSection";
import { FeatureSection, LiveHero } from "@/components/live/kit";
import { BoltScene, CapacityScene, ModeFormScene, StyleOptionsScene } from "@/components/live/selling";

import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import faqData from "@/data/home/faq.json";
import page from "@/data/vendor/vendordropdown/flexibleselling/page.json";

export default function FlexibleSellingOptionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header data={navbarData} />
      <LiveHero copy={page.hero} cta={page.hero.cta} visual={<ModeFormScene />} />
      <FeatureSection id="made-to-order" copy={page.styles} visual={<StyleOptionsScene />} flip tint />
      <FeatureSection id="fabric" copy={page.fabric} visual={<BoltScene />} />
      <FeatureSection id="capacity" copy={page.capacity} visual={<CapacityScene />} flip tint />
      <FAQSection data={faqData} />
      <VendorClosingSection data={page.closing} />
      <Footer data={footerData} />
    </div>
  );
}

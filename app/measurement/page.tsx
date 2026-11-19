import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ClosingSection } from "@/components/user/MeasurementPage/Closing/ClosingSection";
import { FeatureSection, LiveHero } from "@/components/live/kit";
import { MeasureWays, OrderCheck, OutlineFlow, ScanPhone, ScanResultPhone } from "@/components/live/measure";

import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import page from "@/data/user/measurement/measurement_ai.json";

export default function MeasurementPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header data={navbarData} />
      <LiveHero copy={page.hero} cta={page.hero.cta} visual={<ScanPhone />} />
      <FeatureSection id="ways" copy={page.ways} visual={<MeasureWays />} flip tint />
      <FeatureSection id="privacy" copy={page.privacy} visual={<OutlineFlow />} />
      <FeatureSection id="review" copy={page.result} visual={<ScanResultPhone />} flip tint />
      <FeatureSection id="order" copy={page.order} visual={<OrderCheck />} />
      <ClosingSection data={page.closing} />
      <Footer data={footerData} />
    </div>
  );
}

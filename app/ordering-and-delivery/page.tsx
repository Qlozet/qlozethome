import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FAQSection } from "@/components/home/FAQ";
import { ClosingCTA } from "@/components/user/OrderingAndDelivery/Closing/ClosingCTA";
import { FeatureSection, LiveHero } from "@/components/live/kit";
import { CheckoutScene, EstimateScene, OnTimeScene, ReportScene, TrackingScene } from "@/components/live/delivery";

import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import faqData from "@/data/home/faq.json";
import page from "@/data/user/userdropdown/ordering-and-delivery/ordering-and-delivery.json";

export default function OrderingAndDeliveryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header data={navbarData} />
      <LiveHero copy={page.hero} cta={page.hero.cta} visual={<CheckoutScene />} />
      <FeatureSection id="estimate" copy={page.estimate} visual={<EstimateScene />} flip tint />
      <FeatureSection id="tracking" copy={page.tracking} visual={<TrackingScene />} />
      <FeatureSection id="on-time" copy={page.ontime} visual={<OnTimeScene />} flip tint />
      <FeatureSection id="problems" copy={page.problems} visual={<ReportScene />} />
      <FAQSection data={faqData} />
      <ClosingCTA data={page.conversion} />
      <Footer data={footerData} />
    </div>
  );
}

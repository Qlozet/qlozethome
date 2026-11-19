import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FAQSection } from "@/components/home/FAQ";
import { ClosingCTA } from "@/components/user/FabricPage/Closing/ClosingCTA";
import { FeatureSection, LiveHero } from "@/components/live/kit";
import { FabricDeliveryScene, FabricProductScene, StudioFabricScene, UseFabricScene } from "@/components/live/fabric";

import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import faqData from "@/data/home/faq.json";
import page from "@/data/user/userdropdown/fabric/fabric.json";

export default function FabricPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header data={navbarData} />
      <LiveHero copy={page.hero} cta={page.hero.cta} visual={<FabricProductScene />} />
      <FeatureSection id="use" copy={page.use} visual={<UseFabricScene />} flip tint />
      <FeatureSection id="studio" copy={page.studio} visual={<StudioFabricScene />} />
      <FeatureSection id="delivery" copy={page.delivery} visual={<FabricDeliveryScene />} flip tint />
      <FAQSection data={faqData} />
      <ClosingCTA data={page.conversion as any} />
      <Footer data={footerData} />
    </div>
  );
}

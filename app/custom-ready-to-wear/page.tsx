import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FAQSection } from "@/components/home/FAQ";
import { ClosingCTA } from "@/components/user/UserDropdownPages/CustomReadyToWear/Closing/ClosingCTA";
import { FeatureSection, LiveHero } from "@/components/live/kit";
import { CartScene, CustomizeScene, FitScene, ProductScene } from "@/components/live/wear";

import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import faqData from "@/data/home/faq.json";
import page from "@/data/user/userdropdown/custom-ready-to-wear/custom-ready-to-wear.json";

export default function CustomReadyToWearPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header data={navbarData} />
      <LiveHero copy={page.hero} cta={page.hero.cta} visual={<ProductScene />} />
      <FeatureSection id="customize" copy={page.customize} visual={<CustomizeScene />} flip tint />
      <FeatureSection id="fit" copy={page.fit} visual={<FitScene />} />
      <FeatureSection id="cart" copy={page.cart} visual={<CartScene />} flip tint />
      <FAQSection data={faqData} />
      <ClosingCTA data={page.closing as any} />
      <Footer data={footerData} />
    </div>
  );
}

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FAQSection } from "@/components/home/FAQ";
import { ClosingSection } from "@/components/user/ExplorePage/Closing/ClosingSection";
import { FeatureSection, LiveHero } from "@/components/live/kit";
import { DiscoverScene, OnboardingScene, StoreScene, WishlistScene, YourEditScene } from "@/components/live/explore";

import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import faqData from "@/data/home/faq.json";
import page from "@/data/user/explore/explore.json";

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header data={navbarData} />
      <LiveHero copy={page.hero} cta={page.hero.cta} visual={<DiscoverScene />} />
      <FeatureSection id="start" copy={page.onboarding} visual={<OnboardingScene />} flip tint />
      <FeatureSection id="your-edit" copy={page.edit} visual={<YourEditScene />} />
      <FeatureSection id="stores" copy={page.store} visual={<StoreScene />} flip tint />
      <FeatureSection id="save" copy={page.save} visual={<WishlistScene />} />
      <FAQSection data={faqData} />
      <ClosingSection data={page.closing} />
      <Footer data={footerData} />
    </div>
  );
}

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FAQSection } from "@/components/home/FAQ";
import { ClosingCTA } from "@/components/user/DesignYourOutfit/Closing/ClosingCTA";
import { FeatureSection, LiveHero } from "@/components/live/kit";
import { FinishedScene, QuotesScene, RefineScene, RequestQuotesScene, StudioScene } from "@/components/live/design";

import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import faqData from "@/data/home/faq.json";
import page from "@/data/user/designyouroutfit/designyouroutfit.json";

export default function DesignYourOutfitPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header data={navbarData} />
      <LiveHero copy={page.hero} cta={page.hero.cta} visual={<StudioScene />} />
      <FeatureSection id="refine" copy={page.refine} visual={<RefineScene />} flip tint />
      <FeatureSection id="quotes" copy={page.request} visual={<RequestQuotesScene />} />
      <FeatureSection id="choose" copy={page.quotes} visual={<QuotesScene />} flip tint />
      <FeatureSection id="finished" copy={page.finished} visual={<FinishedScene />} />
      <FAQSection data={faqData} />
      <ClosingCTA data={page.closing as any} />
      <Footer data={footerData} />
    </div>
  );
}

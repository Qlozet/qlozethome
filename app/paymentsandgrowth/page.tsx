import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FAQSection } from "@/components/home/FAQ";
import { GrowthClosingSection } from "@/components/vendor/VendorDropdownPages/PaymentsAndGrowth/Closing/GrowthClosingSection";
import { FeatureSection, LiveHero } from "@/components/live/kit";
import { BespokeTimeline, OrderBreakdown, PayoutBoard, WithdrawSheet } from "@/components/live/payouts";

import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import faqData from "@/data/home/faq.json";
import page from "@/data/vendor/growth/growth.json";

export default function PaymentsAndGrowthPage() {
  return (
    <div className="bg-white text-zinc-900 selection:bg-brand-darker selection:text-white">
      <Header data={navbarData} />
      <main>
        <LiveHero copy={page.hero} cta={page.hero.cta} visual={<PayoutBoard />} />
        <FeatureSection id="breakdown" copy={page.breakdown} visual={<OrderBreakdown />} flip tint />
        <FeatureSection id="bespoke" copy={page.bespoke} visual={<BespokeTimeline />} />
        <FeatureSection id="withdraw" copy={page.withdraw} visual={<WithdrawSheet />} flip tint />
        <FAQSection data={faqData} />
        <GrowthClosingSection data={page.closing} />
      </main>
      <Footer data={footerData} />
    </div>
  );
}

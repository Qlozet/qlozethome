import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GrowthHero } from "@/components/vendor/VendorDropdownPages/PaymentsAndGrowth/Hero/GrowthHero";
import { SecurePaymentsSection } from "@/components/vendor/VendorDropdownPages/PaymentsAndGrowth/Payments/SecurePaymentsSection";
import { StructuredPayoutsSection } from "@/components/vendor/VendorDropdownPages/PaymentsAndGrowth/Payouts/StructuredPayoutsSection";
import { GrowthEngineSection } from "@/components/vendor/VendorDropdownPages/PaymentsAndGrowth/Growth/GrowthEngineSection";
import { PromotionVisibilitySection } from "@/components/vendor/VendorDropdownPages/PaymentsAndGrowth/Visibility/PromotionVisibilitySection";
import { TransparentEarningsSection } from "@/components/vendor/VendorDropdownPages/PaymentsAndGrowth/Earnings/TransparentEarningsSection";
import { ScaleWithoutLimitsSection } from "@/components/vendor/VendorDropdownPages/PaymentsAndGrowth/Scale/ScaleWithoutLimitsSection";
import { FinancialSimplicitySection } from "@/components/vendor/VendorDropdownPages/PaymentsAndGrowth/Simplicity/FinancialSimplicitySection";
import { GrowthClosingSection } from "@/components/vendor/VendorDropdownPages/PaymentsAndGrowth/Closing/GrowthClosingSection";
import { FAQSection } from "@/components/home/FAQ";

import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import faqData from "@/data/home/faq.json";
import growthData from "@/data/vendor/growth/growth.json";

export default function PaymentsAndGrowthPage() {
  return (
    <div className="bg-white text-zinc-900 selection:bg-black selection:text-white">
      <Header data={navbarData} />
      
      <main className="relative min-h-screen w-full">
        {/* Continuous Journey Line (The Revenue Stream - spine of the page) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 z-0 hidden lg:block overflow-hidden">
           {/* Technical Thread Visual - Dotted/Textured line */}
           <div className="h-full w-full bg-[repeating-linear-gradient(to_bottom,transparent,transparent_6px,#000_6px,#000_12px)] opacity-[0.03]" />
        </div>

        <div className="relative z-10 space-y-0">
          <GrowthHero data={growthData.hero} />
          <SecurePaymentsSection data={growthData.sections[0]} />
          <StructuredPayoutsSection data={growthData.sections[1]} />
          <GrowthEngineSection data={growthData.sections[2]} />
          <PromotionVisibilitySection data={growthData.sections[3]} />
          <TransparentEarningsSection data={growthData.sections[4]} />
          <ScaleWithoutLimitsSection data={growthData.sections[5]} />
          <FinancialSimplicitySection data={growthData.sections[6]} />
          <FAQSection data={faqData} />
          <GrowthClosingSection data={growthData.closing} />
        </div>
      </main>

      <Footer data={footerData} />
    </div>
  );
}

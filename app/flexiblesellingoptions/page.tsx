import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FlexHero } from "@/components/vendor/VendorDropdownPages/FlexibleSellingOptions/Hero/FlexHero";
import { SellingModelsSection } from "@/components/vendor/VendorDropdownPages/FlexibleSellingOptions/Models/SellingModelsSection";
import { CustomizationControlSection } from "@/components/vendor/VendorDropdownPages/FlexibleSellingOptions/Customization/CustomizationControlSection";
import { FlexiblePricingSection } from "@/components/vendor/VendorDropdownPages/FlexibleSellingOptions/Pricing/FlexiblePricingSection";
import { ResourceFlexibilitySection } from "@/components/vendor/VendorDropdownPages/FlexibleSellingOptions/Resources/ResourceFlexibilitySection";
import { OrderWorkflowSection } from "@/components/vendor/VendorDropdownPages/FlexibleSellingOptions/Workflow/OrderWorkflowSection";
import { AdaptabilitySection } from "@/components/vendor/VendorDropdownPages/FlexibleSellingOptions/Adaptability/AdaptabilitySection";
import { ScalingSection } from "@/components/vendor/VendorDropdownPages/FlexibleSellingOptions/Scaling/ScalingSection";
import { FreedomSection } from "@/components/vendor/VendorDropdownPages/FlexibleSellingOptions/Freedom/FreedomSection";
import { VendorClosingSection } from "@/components/vendor/VendorDropdownPages/FlexibleSellingOptions/Closing/VendorClosingSection";
import { FAQSection } from "@/components/home/FAQ";

import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import faqData from "@/data/home/faq.json";
import flexSellingData from "@/data/vendor/flexibleselling/flexibleselling.json";

export default function FlexibleSellingOptionsPage() {
  return (
    <div className="bg-white text-zinc-900 selection:bg-brand-darker selection:text-white">
      <Header data={navbarData} />
      
      <main className="relative min-h-screen w-full">
        {/* Continuous Journey Line (The Production Line - spine of the page) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 z-0 hidden lg:block overflow-hidden">
           {/* Technical Thread Visual - Dotted/Textured line */}
           <div className="h-full w-full bg-[repeating-linear-gradient(to_bottom,transparent,transparent_6px,#1e1008_6px,#1e1008_12px)] opacity-[0.03]" />
        </div>

        <div className="relative z-10 space-y-0">
          <FlexHero data={flexSellingData.hero} />
          <SellingModelsSection data={flexSellingData.sections[0]} />
          <CustomizationControlSection data={flexSellingData.sections[1]} />
          <FlexiblePricingSection data={flexSellingData.sections[2]} />
          <ResourceFlexibilitySection data={flexSellingData.sections[3]} />
          <OrderWorkflowSection data={flexSellingData.sections[4]} />
          <AdaptabilitySection data={flexSellingData.sections[5]} />
          <ScalingSection data={flexSellingData.sections[6]} />
          <FreedomSection data={flexSellingData.sections[7]} />
          <FAQSection data={faqData} />
          <VendorClosingSection data={flexSellingData.closing} />
        </div>
      </main>

      <Footer data={footerData} />
    </div>
  );
}

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/vendor/VendorDropdownPages/InstantStorefront/Hero/HeroSection";
import { SetupSection } from "@/components/vendor/VendorDropdownPages/InstantStorefront/Setup/SetupSection";
import { ShowcaseSection } from "@/components/vendor/VendorDropdownPages/InstantStorefront/Showcase/ShowcaseSection";
import { SalesSection } from "@/components/vendor/VendorDropdownPages/InstantStorefront/Sales/SalesSection";
import { PricingSection } from "@/components/vendor/VendorDropdownPages/InstantStorefront/Pricing/PricingSection";
import { ReachSection } from "@/components/vendor/VendorDropdownPages/InstantStorefront/Reach/ReachSection";
import { IntegratedSection } from "@/components/vendor/VendorDropdownPages/InstantStorefront/Integrated/IntegratedSection";
import { DirectSection } from "@/components/vendor/VendorDropdownPages/InstantStorefront/Direct/DirectSection";
import { ScalableSection } from "@/components/vendor/VendorDropdownPages/InstantStorefront/Scalable/ScalableSection";
import { ClosingSection } from "@/components/vendor/VendorDropdownPages/InstantStorefront/Closing/ClosingSection";

import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import storefrontData from "@/data/vendor/vendordropdown/instantstorefront/instantstorefront.json";

export default function InstantStorefrontPage() {
  return (
    <div className="min-h-screen">
      <Header data={navbarData} />
      <HeroSection data={storefrontData.hero} />
      <SetupSection data={storefrontData.setup} />
      <ShowcaseSection data={storefrontData.showcase} />
      <SalesSection data={storefrontData.sales} />
      <PricingSection data={storefrontData.pricing} />
      <ReachSection data={storefrontData.reach} />
      <IntegratedSection data={storefrontData.integrated} />
      <DirectSection data={storefrontData.direct} />
      <ScalableSection data={storefrontData.scalable} />
      <ClosingSection data={storefrontData.closing} />
      <Footer data={footerData} />
    </div>
  );
}


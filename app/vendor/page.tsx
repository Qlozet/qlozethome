import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VendorEditorialHero } from "@/components/vendor/Editorial/VendorEditorialHero";
import { VendorWhyQlozet } from "@/components/vendor/Editorial/VendorWhyQlozet";
import { VendorCapabilitiesGrid } from "@/components/vendor/Editorial/VendorCapabilitiesGrid";
import { VendorAudienceSection } from "@/components/vendor/Editorial/VendorAudienceSection";
import { VendorGlobalScale } from "@/components/vendor/Editorial/VendorGlobalScale";
import { VendorProcessTimeline } from "@/components/vendor/Editorial/VendorProcessTimeline";
import { VendorPartnershipCTA } from "@/components/vendor/Editorial/VendorPartnershipCTA";

import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";

export default function VendorPage() {
  return (
    <div id="top" className="bg-white text-black selection:bg-emerald-500 selection:text-white overflow-x-hidden w-full">
      <Header data={navbarData} />

      <main className="flex flex-col w-full">
        {/* Core Sections based on the newly approved copy */}
        <VendorEditorialHero />
        <VendorWhyQlozet />
        <VendorCapabilitiesGrid />
        <VendorAudienceSection />
        <VendorGlobalScale />
        <VendorProcessTimeline />
        <VendorPartnershipCTA />
      </main>

      <Footer data={footerData} />
    </div>
  );
}

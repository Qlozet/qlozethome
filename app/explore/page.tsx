import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ExploreHero } from "@/components/user/ExplorePage/Hero/ExploreHero";
import { VendorsSection } from "@/components/user/ExplorePage/Vendors/VendorsSection";
import { CatalogueSection } from "@/components/user/ExplorePage/Catalogue/CatalogueSection";
import { SmartDiscoverySection } from "@/components/user/ExplorePage/Discovery/SmartDiscoverySection";
import { StyleEcosystemSection } from "@/components/user/ExplorePage/Ecosystem/StyleEcosystemSection";
import { InspirationSection } from "@/components/user/ExplorePage/Inspiration/InspirationSection";
import { ExperienceSection } from "@/components/user/ExplorePage/Experience/ExperienceSection";
import { PersonalizationSection } from "@/components/user/ExplorePage/Personalization/PersonalizationSection";
import { ClosingSection } from "@/components/user/ExplorePage/Closing/ClosingSection";
import { FAQSection } from "@/components/home/FAQ";

import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import faqData from "@/data/home/faq.json";
import exploreData from "@/data/user/explore/explore.json";

export default function ExplorePage() {
  return (
    <div className="bg-white text-zinc-900 selection:bg-black selection:text-white">
      <Header data={navbarData} />
      
      <main className="relative min-h-screen w-full">
        {/* Continuous Journey Line (Braided Thread - spine of the page) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 z-0 hidden lg:block overflow-hidden">
           {/* Braided Thread Visual - Textured thin line */}
           <div className="h-full w-full bg-[repeating-linear-gradient(to_bottom,transparent,transparent_4px,#000_4px,#000_8px)] opacity-[0.03]" />
        </div>

        <div className="relative z-10 space-y-0">
          <ExploreHero data={exploreData.hero} />
          <VendorsSection data={exploreData.vendors} />
          <CatalogueSection data={exploreData.catalogue} />
          <SmartDiscoverySection data={exploreData.discovery} />
          <StyleEcosystemSection data={exploreData.ecosystem} />
          <InspirationSection data={exploreData.inspiration} />
          <ExperienceSection data={exploreData.experience} />
          <PersonalizationSection data={exploreData.personalization} />
          <FAQSection data={faqData} />
          <ClosingSection data={exploreData.closing} />
        </div>
      </main>

      <Footer data={footerData} />
    </div>
  );
}

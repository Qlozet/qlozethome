import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ExploreHero } from "@/components/user/ExplorePage/Hero";
import { WhatWeDoSection } from "@/components/user/ExplorePage/WhatWeDo";
import { PillarsSection } from "@/components/user/ExplorePage/Quality";
import { PerksSection } from "@/components/user/ExplorePage/Perks";
import { FAQSection } from "@/components/home/FAQ";
import { VendorCTA } from "@/components/vendor/VendorLandingPage/CTA";
import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import faqData from "@/data/home/faq.json";
import ctaData from "@/data/vendor/vendorlanding/cta.json";
import qualityData from "@/data/user/explore/quality.json";
import exploreData from "@/data/user/explore/hero.json";
import whatWeDoData from "@/data/user/explore/what-we-do.json";
import perksData from "@/data/user/explore/perks.json";

export default function ExplorePage() {
  return (
    <div className="min-h-screen">
      <Header data={navbarData} />
      <ExploreHero data={exploreData} />
      <WhatWeDoSection data={whatWeDoData} />
      <PillarsSection data={qualityData} />
      <PerksSection data={perksData} />
      <FAQSection data={faqData} />
      <VendorCTA data={ctaData} />
      <Footer data={footerData} />
    </div>
  );
}

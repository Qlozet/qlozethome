import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatWeDoHero } from "@/components/whatwedo/WhatWeDoHero";
import { PillarsSection } from "@/components/whatwedo/Pillars";
import { EcosystemSection } from "@/components/whatwedo/Ecosystem";
import { StatsSection } from "@/components/whatwedo/Stats";
import { DifferentiatorsSection } from "@/components/whatwedo/Differentiators";
import { FAQSection } from "@/components/home/FAQ";
import { VendorCTA } from "@/components/vendor/VendorLandingPage/CTA";
import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import faqData from "@/data/home/faq.json";
import ctaData from "@/data/vendor/vendorlanding/cta.json";
import whatwedoData from "@/data/whatwedo/whatwedo.json";
import pillarData from "@/data/whatwedo/whatwedo-pillars.json";
import ecosystemData from "@/data/whatwedo/whatwedo-ecosystem.json";
import statsData from "@/data/whatwedo/whatwedo-stats.json";
import differentiatorsData from "@/data/whatwedo/whatwedo-differentiators.json";

export default function WhatWeDoPage() {
  return (
    <div className="min-h-screen">
      <Header data={navbarData} />
      <WhatWeDoHero data={whatwedoData} />
      <DifferentiatorsSection data={differentiatorsData} />
      <EcosystemSection data={ecosystemData} />
      <PillarsSection data={pillarData} />
      <StatsSection data={statsData} />
      <FAQSection data={faqData} />
      <VendorCTA data={ctaData} />
      <Footer data={footerData} />
    </div>
  );
}


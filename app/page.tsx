import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { DownloadSection } from "@/components/home/Download";
import { EarlyAccessSection } from "@/components/home/EarlyAccess";
import { FAQSection } from "@/components/home/FAQ";
import { HeroSection } from "@/components/home/Hero";
import { HighlightsSection } from "@/components/home/Highlights";
import { PartnersSection } from "@/components/home/Partners";
import { ProcessSection } from "@/components/home/Process";
import { ShoppingSection } from "@/components/home/Shopping";
import { WhySection } from "@/components/home/Why";
import { VendorWorksSection } from "@/components/home/VendorWorks";

import downloadData from "@/data/home/download.json";
import earlyAccessData from "@/data/home/early-access.json";
import faqData from "@/data/home/faq.json";
import footerData from "@/data/global/footer.json";
import heroData from "@/data/home/hero.json";
import highlightsData from "@/data/home/highlights.json";
import navbarData from "@/data/global/navbar.json";
import partnersData from "@/data/home/partners.json";
import processData from "@/data/home/process.json";
import shoppingData from "@/data/home/shopping.json";
import whyData from "@/data/home/why.json";
import vendorWorksData from "@/data/home/vendor-works.json";

export default function Home() {
  return (
    <div id="top" className="bg-white text-zinc-900 max-2xl:max-w-[90vw] mx-auto">
      <Header data={navbarData} />
      <main className="relative flex flex-col">
        <div className="sticky top-0 z-0">
          <HeroSection data={heroData} />
        </div>
        <div className="sticky top-0 z-10">
          <WhySection
            data={whyData}
            scrollPrompt={{ label: heroData.scrollPrompt.down, href: "#why-content" }}
          />
        </div>
        <div className="sticky top-0 z-20">
          <ProcessSection data={processData} />

        </div>
        <div className="sticky top-0 z-20">
          <HighlightsSection data={highlightsData} />
          <ShoppingSection data={shoppingData} />
          <DownloadSection data={downloadData} />
          <VendorWorksSection data={vendorWorksData} />
          <PartnersSection data={partnersData} />
          <FAQSection data={faqData} />
          <EarlyAccessSection data={earlyAccessData} />
        </div>
      </main>
      <Footer data={footerData} />
    </div>
  );
}

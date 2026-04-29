import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/user/UserDropdownPages/CustomReadyToWear/Hero/HeroSection";
import { MarketplaceSection } from "@/components/user/UserDropdownPages/CustomReadyToWear/Marketplace/MarketplaceSection";
import { CustomClothingSection } from "@/components/user/UserDropdownPages/CustomReadyToWear/CustomClothing/CustomClothingSection";
import { MixMatchSection } from "@/components/user/UserDropdownPages/CustomReadyToWear/MixMatch/MixMatchSection";
import { StyleSection } from "@/components/user/UserDropdownPages/CustomReadyToWear/Style/StyleSection";
import { FitProfileSection } from "@/components/user/UserDropdownPages/CustomReadyToWear/FitProfile/FitProfileSection";
import { BudgetSection } from "@/components/user/UserDropdownPages/CustomReadyToWear/Budget/BudgetSection";
import { ExperienceSection } from "@/components/user/UserDropdownPages/CustomReadyToWear/Experience/ExperienceSection";
import { EcosystemSection } from "@/components/user/UserDropdownPages/CustomReadyToWear/Ecosystem/EcosystemSection";
import { ClosingCTA } from "@/components/user/UserDropdownPages/CustomReadyToWear/Closing/ClosingCTA";
import { FAQSection } from "@/components/home/FAQ";

import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import faqData from "@/data/home/faq.json";
import data from "@/data/user/userdropdown/custom-ready-to-wear/custom-ready-to-wear.json";

export default function CustomReadyToWearPage() {
  return (
    <div className="bg-white text-zinc-900 selection:bg-[#3A3A3A] selection:text-white">
      <Header data={navbarData} />
      
      <main className="relative min-h-screen w-full">
        {/* Continuous Journey Line (Tailor's Tape - spine of the page) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 z-0 hidden lg:block overflow-hidden">
           {/* Tailor's Tape Visual - White/Black markings */}
           <div className="h-full w-full bg-[repeating-linear-gradient(to_bottom,transparent,transparent_8px,#3A3A3A_8px,#3A3A3A_16px)] opacity-[0.06]" />
           
           {/* Occasional Measurement markers (e.g. 50cm, 100cm) could go here but simple dashed is cleaner for now */}
        </div>

        <div className="relative z-10 space-y-0">
          <HeroSection data={data.hero as any} />
          <MarketplaceSection data={data.marketplace as any} />
          <CustomClothingSection data={data.custom as any} />
          <MixMatchSection data={data.mixmatch as any} />
          <StyleSection data={data.style as any} />
          <FitProfileSection data={data.fit as any} />
          <BudgetSection data={data.budget as any} />
          <ExperienceSection data={data.experience as any} />
          <EcosystemSection data={data.ecosystem as any} />
          <FAQSection data={faqData} />
          <ClosingCTA data={data.closing as any} />
        </div>
      </main>

      <Footer data={footerData} />
    </div>
  );
}

"use client";

import { HeroSection } from "@/components/user/FabricPage/Hero/HeroSection";
import { DiscoverSection } from "@/components/user/FabricPage/Discover/DiscoverSection";
import { FindSection } from "@/components/user/FabricPage/Find/FindSection";
import { DetailsSection } from "@/components/user/FabricPage/Details/DetailsSection";
import { UseSection } from "@/components/user/FabricPage/Use/UseSection";
import { ConnectSection } from "@/components/user/FabricPage/Connect/ConnectSection";
import { InspirationSection } from "@/components/user/FabricPage/Inspiration/InspirationSection";
import { PersonalizedSection } from "@/components/user/FabricPage/Personalized/PersonalizedSection";
import { SeamlessSection } from "@/components/user/FabricPage/Seamless/SeamlessSection";
import { ClosingCTA } from "@/components/user/FabricPage/Closing/ClosingCTA";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import data from "@/data/user/userdropdown/fabric/fabric.json";
import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";

export default function FabricPage() {
  return (
    <div className="bg-white text-zinc-900 selection:bg-[#3A3A3A] selection:text-white">
      <Header data={navbarData} />
      
      <main className="relative min-h-screen w-full">
        {/* Hero */}
        <HeroSection data={data.hero} />

        {/* Journey Sections */}
        <div className="relative">
          {/* Continuous Journey Line (Dotted Trace) - customized for fabric, maybe a thread line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 z-0 hidden lg:block overflow-hidden">
            <div className="h-full w-full bg-[repeating-linear-gradient(to_bottom,transparent,transparent_8px,#3A3A3A_8px,#3A3A3A_16px)] opacity-[0.06]" />
          </div>
          
          <DiscoverSection data={data.sections[0]} />
          <FindSection data={data.sections[1]} />
          <DetailsSection data={data.sections[2]} />
          <UseSection data={data.sections[3]} />
          <ConnectSection data={data.sections[4]} />
          <InspirationSection data={data.sections[5]} />
          <PersonalizedSection data={data.sections[6]} />
          <SeamlessSection data={data.sections[7]} />
        </div>

        {/* Closing conversion */}
        <ClosingCTA data={data.conversion} />
      </main>

      <Footer data={footerData} />
    </div>
  );
}

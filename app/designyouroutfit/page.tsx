import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/user/DesignYourOutfit/Hero/HeroSection";
import { InspirationSection } from "@/components/user/DesignYourOutfit/Inspiration/InspirationSection";
import { GenerationSection } from "@/components/user/DesignYourOutfit/Generation/GenerationSection";
import { PrecisionSection } from "@/components/user/DesignYourOutfit/Precision/PrecisionSection";
import { ProductionSection } from "@/components/user/DesignYourOutfit/Production/ProductionSection";
import { RefinementSection } from "@/components/user/DesignYourOutfit/Refinement/RefinementSection";
import { TailoredSection } from "@/components/user/DesignYourOutfit/Tailored/TailoredSection";
import { WorkflowSection } from "@/components/user/DesignYourOutfit/Workflow/WorkflowSection";
import { CreativitySection } from "@/components/user/DesignYourOutfit/Creativity/CreativitySection";
import { ClosingCTA } from "@/components/user/DesignYourOutfit/Closing/ClosingCTA";
import { FAQSection } from "@/components/home/FAQ";

import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import faqData from "@/data/home/faq.json";
import data from "@/data/user/designyouroutfit/designyouroutfit.json";

export default function DesignYourOutfitPage() {
  return (
    <div className="min-h-screen">
      <Header data={navbarData} />
      <HeroSection data={data.hero as any} />
      <InspirationSection data={data.inspiration as any} />
      <GenerationSection data={data.generation as any} />
      <PrecisionSection data={data.precision as any} />
      <ProductionSection data={data.production as any} />
      <RefinementSection data={data.refinement as any} />
      <TailoredSection data={data.tailored as any} />
      <WorkflowSection data={data.workflow as any} />
      <CreativitySection data={data.creativity as any} />
      <FAQSection data={faqData} />
      <ClosingCTA data={data.closing as any} />
      <Footer data={footerData} />
    </div>
  );
}

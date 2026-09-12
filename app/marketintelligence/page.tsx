import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/vendor/VendorDropdownPages/MarketIntelligence/Hero/HeroSection";
import { AnalyticsSection } from "@/components/vendor/VendorDropdownPages/MarketIntelligence/Analytics/AnalyticsSection";
import { AIAssistantSection } from "@/components/vendor/VendorDropdownPages/MarketIntelligence/AIAssistant/AIAssistantSection";
import { CustomerInsightsSection } from "@/components/vendor/VendorDropdownPages/MarketIntelligence/CustomerInsights/CustomerInsightsSection";
import { GrowthSection } from "@/components/vendor/VendorDropdownPages/MarketIntelligence/Growth/GrowthSection";
import { OptimizationSection } from "@/components/vendor/VendorDropdownPages/MarketIntelligence/Optimization/OptimizationSection";
import { LearningSection } from "@/components/vendor/VendorDropdownPages/MarketIntelligence/Learning/LearningSection";
import { SimplicitySection } from "@/components/vendor/VendorDropdownPages/MarketIntelligence/Simplicity/SimplicitySection";
import { ClosingCTA } from "@/components/vendor/VendorDropdownPages/MarketIntelligence/Closing/ClosingCTA";
import { FAQSection } from "@/components/home/FAQ";

import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import faqData from "@/data/home/faq.json";
import data from "@/data/vendor/vendordropdown/marketintelligence/marketintelligence.json";

export default function MarketIntelligencePage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-brand-darker selection:text-white relative">
      <Header data={navbarData} />
      <HeroSection data={data.hero as any} />
      <AnalyticsSection data={data.analytics as any} />
      <AIAssistantSection data={data.assistant as any} />
      <CustomerInsightsSection data={data.customerInsights as any} />
      <GrowthSection data={data.growth as any} />
      <OptimizationSection data={data.optimization as any} />
      <LearningSection data={data.learning as any} />
      <SimplicitySection data={data.simplicity as any} />
      <FAQSection data={faqData} />
      <ClosingCTA data={data.closing as any} />
      <Footer data={footerData} />
    </div>
  );
}

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PricingSection } from "@/components/pricing";
import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import pricingData from "@/data/pricing/pricing.json";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#d4d4d4] max-w-[90vw] mx-auto">
      <Header data={navbarData} />
      <PricingSection data={pricingData} />
      <Footer data={footerData} />
    </div>
  );
}

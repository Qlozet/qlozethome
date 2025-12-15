import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WorksSection } from "@/components/works";
import { ShoppingSection } from "@/components/home/Shopping";
import { DownloadSection } from "@/components/home/Download";
import { FAQSection } from "@/components/home/FAQ";
import { VendorCTA } from "@/components/vendor/VendorLandingPage/CTA";
import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import worksData from "@/data/works/works.json";
import shoppingData from "@/data/home/shopping.json";
import downloadData from "@/data/home/download.json";
import faqData from "@/data/home/faq.json";
import vendorCtaData from "@/data/vendor/vendorlanding/cta.json";

export default function WorksPage() {
  return (
    <div className="min-h-screen">
      <Header data={navbarData} />
      <WorksSection data={worksData} />
      <ShoppingSection data={shoppingData} />
      <DownloadSection data={downloadData} />
      <FAQSection data={faqData} />
      <VendorCTA data={vendorCtaData} />
      <Footer data={footerData} />
    </div>
  );
}


import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MeasurementHero } from "@/components/user/MeasurementPage/Hero/MeasurementHeroSection";
import { HowItWorksSection } from "@/components/user/MeasurementPage/HowItWorks";
import { CompareSection } from "@/components/user/MeasurementPage/Compare";
import { PrivateDesignSection } from "@/components/user/MeasurementPage/PrivateDesign";
import { TestimonialsSection } from "@/components/user/MeasurementPage/Testimonials";
import { FAQSection } from "@/components/home/FAQ";
import { VendorCTA } from "@/components/vendor/VendorLandingPage/CTA";
import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import measurementData from "@/data/user/measurement/measurement.json";
import measurementHowItWorksData from "@/data/user/measurement/measurement-how-it-works.json";
import compareData from "@/data/user/measurement/compare.json";
import privateDesignData from "@/data/user/measurement/private-design.json";
import testimonialsData from "@/data/user/measurement/testimonials.json";
import faqData from "@/data/home/faq.json";
import vendorCTAData from "@/data/vendor/vendorlanding/cta.json";

export default function MeasurementPage() {
  return (
    <div className="min-h-screen">
      <Header data={navbarData} />
      <MeasurementHero data={measurementData} />
      <HowItWorksSection data={measurementHowItWorksData} />
      <CompareSection data={compareData} />
      <PrivateDesignSection data={privateDesignData} />
      <TestimonialsSection data={testimonialsData} />
      <FAQSection data={faqData} />
      <VendorCTA data={vendorCTAData} />
      <Footer data={footerData} />
    </div>
  );
}


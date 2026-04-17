import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Custom Sections
import { HeroSection } from "@/components/vendor/VendorDropdownPages/CustomerMeasurements/Hero/HeroSection";
import { ProfileSection } from "@/components/vendor/VendorDropdownPages/CustomerMeasurements/Profile/ProfileSection";
import { AccuracySection } from "@/components/vendor/VendorDropdownPages/CustomerMeasurements/Accuracy/AccuracySection";
import { InsightsSection } from "@/components/vendor/VendorDropdownPages/CustomerMeasurements/Insights/InsightsSection";
import { SpecsSection } from "@/components/vendor/VendorDropdownPages/CustomerMeasurements/Specs/SpecsSection";
import { ConsistencySection } from "@/components/vendor/VendorDropdownPages/CustomerMeasurements/Consistency/ConsistencySection";
import { ConfidenceSection } from "@/components/vendor/VendorDropdownPages/CustomerMeasurements/Confidence/ConfidenceSection";
import { HistorySection } from "@/components/vendor/VendorDropdownPages/CustomerMeasurements/History/HistorySection";
import { IntegrationSection } from "@/components/vendor/VendorDropdownPages/CustomerMeasurements/Integration/IntegrationSection";

// Shared Sections
import { FAQSection } from "@/components/home/FAQ";
import { VendorCTA } from "@/components/vendor/VendorLandingPage/CTA/CTASection";

// Data
import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import faqData from "@/data/home/faq.json";
import data from "@/data/vendor/vendordropdown/customermeasurements/data.json";

export default function CustomerMeasurementsPage() {
  return (
    <div className="min-h-screen">
      <Header data={navbarData} />
      
      <HeroSection data={data.hero as any} />
      <ProfileSection data={data.sections[0] as any} />
      <AccuracySection data={data.sections[1] as any} />
      <InsightsSection data={data.sections[2] as any} />
      <SpecsSection data={data.sections[3] as any} />
      <ConsistencySection data={data.sections[4] as any} />
      <ConfidenceSection data={data.sections[5] as any} />
      <HistorySection data={data.sections[6] as any} />
      <IntegrationSection data={data.sections[7] as any} />

      <FAQSection data={faqData} />
      <VendorCTA data={data.conversion as any} />
      
      <Footer data={footerData} />
    </div>
  );
}

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/vendor/VendorDropdownPages/ManageSteps/Hero/HeroSection";
import { OrderManagementSection } from "@/components/vendor/VendorDropdownPages/ManageSteps/OrderManagement/OrderManagementSection";
import { MeasurementsSection } from "@/components/vendor/VendorDropdownPages/ManageSteps/Measurements/MeasurementsSection";
import { WorkflowTrackingSection } from "@/components/vendor/VendorDropdownPages/ManageSteps/Workflow/WorkflowTrackingSection";
import { QueueSection } from "@/components/vendor/VendorDropdownPages/ManageSteps/Queue/QueueSection";
import { CollaborationSection } from "@/components/vendor/VendorDropdownPages/ManageSteps/Collaboration/CollaborationSection";
import { WorkflowSupportSection } from "@/components/vendor/VendorDropdownPages/ManageSteps/WorkflowSupport/WorkflowSupportSection";
import { PerformanceSection } from "@/components/vendor/VendorDropdownPages/ManageSteps/Performance/PerformanceSection";
import { OperationsSection } from "@/components/vendor/VendorDropdownPages/ManageSteps/Operations/OperationsSection";
import { VendorCTA } from "@/components/vendor/VendorLandingPage/CTA/CTASection";
import { FAQSection } from "@/components/home/FAQ";

import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import faqData from "@/data/home/faq.json";
import data from "@/data/vendor/vendordropdown/managesteps/managesteps.json";

export default function ManageStepsPage() {
  return (
    <div className="min-h-screen">
      <Header data={navbarData} />
      <HeroSection data={data.hero as any} />
      <OrderManagementSection data={data.orderManagement as any} />
      <MeasurementsSection data={data.measurements as any} />
      <WorkflowTrackingSection data={data.workflow as any} />
      <QueueSection data={data.queue as any} />
      <CollaborationSection data={data.collaboration as any} />
      <WorkflowSupportSection data={data.support as any} />
      <PerformanceSection data={data.performance as any} />
      <OperationsSection data={data.operations as any} />
      <FAQSection data={faqData} />
      <VendorCTA data={data.closing as any} />
      <Footer data={footerData} />
    </div>
  );
}

"use client";

import { HeroSection } from "@/components/user/OrderingAndDelivery/Hero/HeroSection";
import { OrderingSection } from "@/components/user/OrderingAndDelivery/Ordering/OrderingSection";
import { VendorAssignmentSection } from "@/components/user/OrderingAndDelivery/Vendor/VendorAssignmentSection";
import { ProductionProcessSection } from "@/components/user/OrderingAndDelivery/Production/ProductionProcessSection";
import { TrackingSection } from "@/components/user/OrderingAndDelivery/Tracking/TrackingSection";
import { DeliverySection } from "@/components/user/OrderingAndDelivery/Delivery/DeliverySection";
import { PackagingSection } from "@/components/user/OrderingAndDelivery/Packaging/PackagingSection";
import { TrustSupportSection } from "@/components/user/OrderingAndDelivery/Support/TrustSupportSection";
import { SimplicitySection } from "@/components/user/OrderingAndDelivery/Simplicity/SimplicitySection";
import { ClosingCTA } from "@/components/user/OrderingAndDelivery/Closing/ClosingCTA";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import data from "@/data/user/userdropdown/ordering-and-delivery/ordering-and-delivery.json";
import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";

export default function OrderingAndDeliveryPage() {
  return (
    <div className="bg-white text-zinc-900 selection:bg-brand-darker selection:text-white">
      <Header data={navbarData} />
      
      <main className="relative min-h-screen w-full">
        {/* Hero */}
        <HeroSection data={data.hero} />

        {/* Journey Sections */}
        <div className="relative">
          {/* Continuous Journey Line (Dotted Trace) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dotted border-brand-darker/10 -translate-x-1/2 z-0 hidden lg:block" />
          
          <OrderingSection data={data.sections[0]} />
          <VendorAssignmentSection data={data.sections[1]} />
          <ProductionProcessSection data={data.sections[2]} />
          <TrackingSection data={data.sections[3]} />
          <DeliverySection data={data.sections[4]} />
          <PackagingSection data={data.sections[5]} />
          <TrustSupportSection data={data.sections[6]} />
          <SimplicitySection data={data.sections[7]} />
        </div>

        {/* Closing conversion */}
        <ClosingCTA data={data.conversion} />
      </main>

      <Footer data={footerData} />
    </div>
  );
}

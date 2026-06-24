"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LogisticsHero } from "@/components/vendor/VendorDropdownPages/ShipSmarter/Hero/LogisticsHero";
import { EndToEndLogisticsSection } from "@/components/vendor/VendorDropdownPages/ShipSmarter/EndToEnd/EndToEndLogisticsSection";
import { ReliableNetworkSection } from "@/components/vendor/VendorDropdownPages/ShipSmarter/Network/ReliableNetworkSection";
import { RealTimeTrackingSection } from "@/components/vendor/VendorDropdownPages/ShipSmarter/Tracking/RealTimeTrackingSection";
import { BrandedPackagingSection } from "@/components/vendor/VendorDropdownPages/ShipSmarter/Packaging/BrandedPackagingSection";
import { LogisticsSimpleSection } from "@/components/vendor/VendorDropdownPages/ShipSmarter/Simple/LogisticsSimpleSection";
import { FulfillmentSection } from "@/components/vendor/VendorDropdownPages/ShipSmarter/Fulfillment/FulfillmentSection";
import { ReliableExecutionSection } from "@/components/vendor/VendorDropdownPages/ShipSmarter/Execution/ReliableExecutionSection";
import { LogisticsClosingSection } from "@/components/vendor/VendorDropdownPages/ShipSmarter/Closing/LogisticsClosingSection";
import { FAQSection } from "@/components/home/FAQ";

import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import faqData from "@/data/home/faq.json";
import logisticsData from "@/data/vendor/logistics/logistics.json";

export default function ShipSmarterPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="bg-white text-[#111111] selection:bg-brand-darker selection:text-white relative">
      <Header data={navbarData} />
      
      {/* Massive Background Marquee (Labeling passing through) */}
      <div className="fixed left-0 top-1/2 z-0 flex w-full -translate-y-1/2 -rotate-3 select-none whitespace-nowrap opacity-[0.02] pointer-events-none">
        <motion.div
           animate={{ x: ["0%", "-50%"] }}
           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
           className="flex gap-16 font-display text-[15rem] font-bold uppercase leading-none tracking-tighter text-black lg:text-[25rem]"
        >
           <span>LOGISTICS ELITE • DELIVERY PATH • PRECISION FLOW • </span>
           <span>LOGISTICS ELITE • DELIVERY PATH • PRECISION FLOW • </span>
        </motion.div>
      </div>

      <main className="relative min-h-screen w-full">
        {/* Continuous Journey Line (The Delivery Path - animated fill spine) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 z-0 hidden lg:block overflow-hidden">
           {/* Background Track */}
           <div className="h-full w-full bg-[repeating-linear-gradient(to_bottom,transparent,transparent_6px,#1e1008_6px,#1e1008_12px)] opacity-[0.03]" />
           
           {/* Animated Fill (The active path) */}
           <motion.div 
              style={{ scaleY: scrollYProgress, originY: 0 }}
              className="absolute inset-0 bg-brand-darker opacity-10 shadow-[0_0_15px_rgba(0,0,0,0.1)]"
           />
        </div>

        <div className="relative z-10 space-y-0">
          <LogisticsHero data={logisticsData.hero} />
          <EndToEndLogisticsSection data={logisticsData.sections[0]} />
          <ReliableNetworkSection data={logisticsData.sections[1]} />
          <RealTimeTrackingSection data={logisticsData.sections[2]} />
          <BrandedPackagingSection data={logisticsData.sections[3]} />
          <LogisticsSimpleSection data={logisticsData.sections[4]} />
          <FulfillmentSection data={logisticsData.sections[5]} />
          <ReliableExecutionSection data={logisticsData.sections[6]} />
          <FAQSection data={faqData} />
          <LogisticsClosingSection data={logisticsData.closing} />
        </div>
      </main>

      <Footer data={footerData} />
    </div>
  );
}

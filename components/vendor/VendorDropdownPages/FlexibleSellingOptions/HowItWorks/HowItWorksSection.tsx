"use client";

import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type HowItWorksData = typeof import("@/data/vendor/flexiblesellingoptions/how-it-works.json");

type HowItWorksSectionProps = {
  data: HowItWorksData;
};

export function HowItWorksSection({ data }: HowItWorksSectionProps) {
  const [openStep, setOpenStep] = useState<string | null>(data.steps[0].id);

  return (
    <section id="how-it-works" className="relative z-20 bg-[#050505] px-6 py-24 sm:py-32 lg:py-48">
      <div className="mx-auto grid max-w-[94rem] gap-12 lg:grid-cols-2 lg:gap-24">
        {/* Left Content - Accordion Timeline */}
        <div className="flex flex-col gap-16 lg:pt-16">
          <div className="flex flex-col gap-6">
            <span className="inline-flex items-center gap-3 font-display text-[10px] font-bold uppercase tracking-[0.5em] text-white/40">
              <div className="h-px w-6 bg-white/20" />
              The Process
            </span>
            <h2 className="font-display text-5xl font-medium leading-[1.05] tracking-tighter text-white sm:text-7xl">
              {data.title}
            </h2>
          </div>

          <div className="flex flex-col border-t border-white/10">
            {data.steps.map((step, index) => {
              const isOpen = openStep === step.id;
              
              return (
                <div 
                  key={step.id} 
                  className="group flex flex-col border-b border-white/10"
                >
                  <button 
                    onClick={() => setOpenStep(isOpen ? null : step.id)}
                    className="flex w-full items-center justify-between py-8 text-left transition-colors hover:text-[#FF6A3D]"
                  >
                    <div className="flex items-center gap-6 sm:gap-10">
                      <span className="font-display text-3xl font-light text-white/20 transition-colors group-hover:text-[#FF6A3D] sm:text-5xl">
                        0{index + 1}
                      </span>
                      <h3 className={`font-display text-2xl font-medium tracking-tight sm:text-4xl ${isOpen ? "text-[#FF6A3D]" : "text-white group-hover:text-[#FF6A3D]"}`}>
                        {step.title}
                      </h3>
                    </div>
                    
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/10 transition-transform duration-500 sm:h-16 sm:w-16 ${isOpen ? "rotate-45 border-[#FF6A3D] text-[#FF6A3D] bg-[#FF6A3D]/10" : "text-white"}`}>
                      <Icon name={step.icon} className="h-6 w-6" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-10 pl-[72px] font-ui text-lg leading-relaxed text-white/50 sm:pl-[104px] sm:text-xl">
                          {step.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Image - Sticky */}
        <div className="relative hidden w-full rounded-[3rem] bg-white/5 lg:block lg:sticky lg:top-32 lg:h-[850px] shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-[3rem] pointer-events-none" />
          <Image
            src="/image/productdes.png"
            alt="Product Customization"
            fill
            className="object-contain p-16 transition-transform duration-[2s] hover:scale-105"
            priority
          />
        </div>
      </div>
    </section>
  );
}

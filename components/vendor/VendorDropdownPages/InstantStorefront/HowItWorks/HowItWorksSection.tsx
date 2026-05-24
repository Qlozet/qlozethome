"use client";

import { useState } from "react";
import Image from "next/image";
import { UserPlus, ImagePlus, BadgeCheck, Banknote, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type HowItWorksData = typeof import("@/data/vendor/vendordropdown/instantstorefront/how-it-works.json");

const iconMap: Record<string, any> = {
  UserPlus,
  ImagePlus,
  BadgeCheck,
  Banknote
};

type HowItWorksSectionProps = {
  data: HowItWorksData;
};

export function HowItWorksSection({ data }: HowItWorksSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section id="how-it-works" className="relative z-20 bg-[#050505] px-6 md:px-10 lg:px-10 py-24 sm:py-32">
      <div className="mx-auto max-w-[84rem]">
        {/* Title Group */}
        <div className="mb-24 flex flex-col items-center gap-6 text-center lg:mb-32">
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">
            The Process
          </span>
          <h2 className="font-display text-5xl font-medium tracking-tight text-white sm:text-7xl lg:text-[5.5rem]">
            {data.title}
          </h2>
        </div>

        {/* Massive Accordion */}
        <div className="flex flex-col border-t border-white/10">
          {data.steps.map((step, index) => {
            const isActive = activeIndex === index;
            const Icon = iconMap[step.icon] || UserPlus;

            return (
              <div key={step.id} className="border-b border-white/10">
                <button
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                  className="group flex w-full items-center justify-between py-10 outline-none transition-colors hover:bg-white/[0.02] sm:py-16"
                >
                  <div className="flex items-center gap-6 px-4 sm:gap-12 sm:px-8">
                    <span className="font-display text-3xl font-medium text-white/20 transition-colors group-hover:text-white/40 sm:text-5xl lg:text-6xl">
                      0{index + 1}
                    </span>
                    <h3 className={`font-display text-3xl font-medium tracking-tight transition-colors sm:text-5xl lg:text-6xl ${isActive ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>
                      {step.title}
                    </h3>
                  </div>
                  <div className="mr-4 sm:mr-8">
                    <motion.div
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className={`flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-500 sm:h-16 sm:w-16 ${isActive ? 'border-white bg-white text-[#3A3A3A]' : 'border-white/20 text-white group-hover:border-white/50'}`}
                    >
                      <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8" strokeWidth={1} />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-10 px-4 pb-16 pt-4 sm:flex-row sm:items-start sm:px-32 lg:px-40">
                        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-white/5 shadow-2xl ring-1 ring-white/10">
                           <Icon className="h-10 w-10 text-white" strokeWidth={1} />
                        </div>
                        <div className="flex flex-col justify-center sm:pt-4">
                          <p className="max-w-2xl font-ui text-xl leading-relaxed text-white/50 lg:text-2xl">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


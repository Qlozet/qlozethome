"use client";

import { useState } from "react";
import { Ruler, Shirt, Package, Layers, BarChart3, Settings, Store, ShieldCheck, Truck, MapPin, LifeBuoy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type PillarsData = typeof import("@/data/user/explore/quality.json");

const iconMap: Record<string, any> = {
  Ruler, Shirt, Package, Layers, BarChart3, Settings, Store, ShieldCheck, Truck, MapPin, LifeBuoy
};

type PillarsSectionProps = {
  data: PillarsData;
};

export function PillarsSection({ data }: PillarsSectionProps) {
  const [activeTab, setActiveTab] = useState(data.tabs[0].id);
  const activeTabData = data.tabs.find((tab) => tab.id === activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as any } },
  };

  return (
    <section id="explore-quality" className="relative z-20 overflow-hidden bg-[#050505] px-6 md:px-10 lg:px-10 py-32 sm:py-48">
      {/* Subtle Studio Glow */}
      <div className="absolute top-0 right-1/4 h-[400px] w-[600px] bg-white opacity-[0.02] blur-[100px] pointer-events-none" />

      <div className="mx-auto flex max-w-[90rem] flex-col gap-24 lg:flex-row lg:items-start lg:gap-32">
        {/* Left Side - Sticky Header & Massive Tab Selectors */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:sticky lg:top-40 lg:w-5/12"
        >
          {/* Section Titles */}
          <div className="mb-16 flex flex-col gap-6">
            <motion.span variants={itemVariants} className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#A38A59]">
              {data.subtitle}
            </motion.span>
            <motion.h2 variants={itemVariants} className="max-w-xl font-display text-5xl font-light italic leading-[1.05] tracking-tight text-white sm:text-6xl">
              {data.title}
            </motion.h2>
          </div>

          {/* Editorial Tab List */}
          <div className="flex flex-col gap-8 border-l border-white/10 pl-8">
            {data.tabs.map((tab, idx) => {
              const isActive = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  variants={itemVariants}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative flex items-center gap-6 text-left transition-all duration-500`}
                >
                  {/* Active Indicator Line */}
                  <div className={`absolute -left-[33px] h-full w-0.5 bg-[#A38A59] transition-all duration-500 ${isActive ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 group-hover:scale-y-50 group-hover:opacity-30'}`} />
                  
                  <span className={`font-display text-xl sm:text-3xl font-medium tracking-tighter transition-colors duration-500 ${isActive ? 'text-white' : 'text-white/30 group-hover:text-white/70'}`}>
                    {tab.label}
                  </span>
                  
                  {/* Animated Arrow */}
                  {isActive && (
                    <motion.svg 
                      layoutId="tabArrow"
                      viewBox="0 0 24 24" 
                      fill="none" 
                      className="h-5 w-5 text-[#A38A59]"
                    >
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </motion.svg>
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Right Side - Expanded Artisan Spotlight */}
        <div className="min-h-[600px] lg:w-7/12 lg:pt-32">
          <AnimatePresence mode="wait">
            {activeTabData && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
                className="flex flex-col gap-12 sm:gap-16"
              >
                {activeTabData.items.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
                    className="group relative flex flex-col gap-6 border-b border-white/5 pb-12 transition-colors duration-500 hover:border-white/20 sm:flex-row sm:items-start sm:gap-12"
                  >
                    {/* The Spotlight Icon */}
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-sm bg-white/5 transition-all duration-700 group-hover:bg-[#A38A59]/10 group-hover:shadow-[0_0_30px_rgba(163,138,89,0.2)]">
                      {(() => {
                        const Icon = iconMap[item.icon] || Ruler;
                        return <Icon className="h-6 w-6 stroke-[1.5] text-white/50 transition-colors duration-500 group-hover:text-[#A38A59]" />;
                      })()}
                    </div>

                    {/* Editorial Text Block */}
                    <div className="flex flex-col gap-4">
                      <h3 className="font-display text-2xl font-medium tracking-tight text-white transition-colors duration-500 group-hover:text-[#A38A59]">
                        {item.title}
                      </h3>
                      <p className="max-w-lg font-ui text-lg leading-relaxed text-white/50">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

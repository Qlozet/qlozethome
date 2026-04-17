"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type PillarsData = typeof import("@/data/whatwedo/whatwedo-pillars.json");

type PillarsSectionProps = {
  data: PillarsData;
};

export function PillarsSection({ data }: PillarsSectionProps) {
  const [activeTab, setActiveTab] = useState(data.tabs[0].id);

  const activeTabData = data.tabs.find((tab) => tab.id === activeTab);

  return (
    <section id="pillars" className="bg-white px-6 pt-20 pb-4 sm:pt-32 sm:pb-8" data-theme="light">
      <div className="mx-auto max-w-[90rem]">
        {/* Title Group */}
        <div className="mb-20 flex flex-col items-center gap-6 text-center">
          <span className="font-display text-[10px] font-semibold uppercase tracking-[0.4em] text-[#3A3A3A]/40">
            {data.subtitle}
          </span>
          <h2 className="max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight text-[#3A3A3A] sm:text-6xl">
            {data.title}
          </h2>
        </div>

        {/* Tabs - Minimal Editorial Style (Scrollable on mobile) */}
        <div className="mb-20 flex justify-center -mx-6 px-6 sm:mx-0">
          <div className="no-scrollbar flex overflow-x-auto whitespace-nowrap border-b border-[#3A3A3A]/5 sm:flex-wrap sm:justify-center sm:gap-12">
            {data.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative pb-6 px-4 text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-300 sm:px-0 sm:text-xs 
                  ${activeTab === tab.id ? "text-[#3A3A3A]" : "text-[#3A3A3A]/30 hover:text-[#3A3A3A]/60"}`}
              >
                <span className="relative z-10">{tab.label}</span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabPillar"
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-[#3A3A3A]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid with AnimatePresence */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTabData && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
              >
                {activeTabData.items.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    whileHover={{ y: -10 }}
                    className="group flex flex-col gap-8 rounded-[2rem] border border-[#3A3A3A]/5 bg-[#3A3A3A]/[0.02] p-6 transition-all duration-500 hover:bg-white hover:border-[#3A3A3A]/10 hover:shadow-2xl hover:shadow-[#3A3A3A]/5 sm:p-10"
                  >
                    {/* Icon Column */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#3A3A3A]/5 shadow-sm transition-colors group-hover:bg-[#3A3A3A]/10">
                      <div className="relative h-8 w-8">
                        <Image
                          src={item.icon}
                          alt={`${item.title} icon`}
                          fill
                          className="object-contain grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                          sizes="32px"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-4">
                      <h3 className="font-display text-xl font-medium tracking-tight text-[#3A3A3A]">
                        {item.title}
                      </h3>
                      <p className="font-ui text-sm leading-relaxed text-[#3A3A3A]/60">
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


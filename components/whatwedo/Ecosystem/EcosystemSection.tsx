"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type EcosystemData = typeof import("@/data/whatwedo/whatwedo-ecosystem.json");

type EcosystemSectionProps = {
  data: EcosystemData;
};

export function EcosystemSection({ data }: EcosystemSectionProps) {
  return (
    <section className="bg-white px-6 md:px-10 lg:px-10 pt-8 pb-8 sm:pt-12 sm:pb-16" data-theme="light">
      <div className="mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-32">
        {/* Left Content - Stakeholders */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-12"
        >
          <div className="flex flex-col gap-6">
            <span className="font-display text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3A3A3A]/40">
              The Ecosystem
            </span>
            <h2 className="max-w-xl font-display text-4xl font-medium leading-[1.1] tracking-tight text-[#3A3A3A] sm:text-5xl">
              {data.title}
            </h2>
            <p className="max-w-lg font-ui text-base leading-relaxed text-[#3A3A3A]/60 sm:text-lg">
              {data.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {data.stakeholders.map((stakeholder, idx) => (
              <motion.div
                key={stakeholder.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group flex items-center gap-8 border-b border-[#3A3A3A]/5 pb-8 transition-colors hover:border-[#3A3A3A]/20"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#3A3A3A]/[0.03] transition-colors group-hover:bg-[#3A3A3A]/10">
                  <div className="relative h-8 w-8">
                    <Image
                      src={stakeholder.icon}
                      alt={`${stakeholder.title} icon`}
                      fill
                      className="object-contain grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                      sizes="32px"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-lg font-medium text-[#3A3A3A]">
                    {stakeholder.title}
                  </h3>
                  <p className="font-ui text-sm text-[#3A3A3A]/50 group-hover:text-[#3A3A3A]/70 transition-colors">
                    {stakeholder.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Content - Order Flow */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="sticky top-12 flex flex-col gap-12 rounded-[2.5rem] bg-[#3A3A3A]/[0.03] p-6 shadow-2xl shadow-black/5 sm:p-16 lg:p-20 border border-white">
            <h3 className="font-display text-2xl font-medium tracking-tight text-[#3A3A3A] sm:text-3xl">
              {data.orderFlow.title}
            </h3>

            <div className="flex flex-col gap-10">
              {data.orderFlow.steps.map((step, index) => (
                <div key={step.id} className="group flex gap-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#3A3A3A] text-white shadow-xl transition-transform duration-300 group-hover:scale-110">
                    <span className="font-display text-xs font-bold leading-none">
                      {index + 1}
                    </span>
                  </div>
                  <p className="font-ui text-base leading-relaxed text-[#3A3A3A]/70 group-hover:text-[#3A3A3A] transition-colors">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex items-center gap-4 text-[#3A3A3A]/30">
              <div className="h-px w-12 bg-[#3A3A3A]/10" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Seamless Integration</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


"use client";

import { MessageCircle, Reply, Activity, History } from "lucide-react";
import { motion } from "framer-motion";

type HowItWorksData = typeof import("@/data/vendor/vendordropdown/chatwithcustomers/howitworks.json");

const iconMap: Record<string, any> = {
  MessageCircle,
  Reply,
  Activity,
  History
};

type HowItWorksSectionProps = {
  data: HowItWorksData;
};

export function HowItWorksSection({ data }: HowItWorksSectionProps) {
  return (
    <section id="how-it-works" className="relative z-20 overflow-hidden bg-[#FAFAFA] px-6 py-24 sm:py-32 lg:py-48" data-theme="light">
      <div className="mx-auto max-w-[94rem]">
        {/* Title Group */}
        <div className="mb-24 flex flex-col items-center gap-6 text-center md:mb-32">
          <span className="inline-flex items-center gap-3 font-display text-[10px] font-bold uppercase tracking-[0.5em] text-black/40">
            <div className="h-px w-6 bg-black/20" />
            The Interaction
          </span>
          <h2 className="max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tighter text-black sm:text-7xl">
            {data.title}
          </h2>
        </div>

        {/* Dynamic Chat Thread */}
        <div className="mx-auto flex max-w-5xl flex-col gap-8 sm:gap-12 lg:gap-16">
          {data.steps.map((step, index) => {
            const isRight = index % 2 !== 0;
            const Icon = iconMap[step.icon] || MessageCircle;

            const alignmentClass = isRight ? "self-end" : "self-start";
            const bgClass = isRight ? "bg-[#050505] text-white" : "bg-white text-black border border-black/5 shadow-[0_20px_40px_rgba(0,0,0,0.03)]";
            const radiusClass = isRight ? "rounded-[3rem] rounded-br-[0.5rem]" : "rounded-[3rem] rounded-bl-[0.5rem]";
            const iconBg = isRight ? "bg-white text-black shadow-[0_10px_20px_rgba(255,255,255,0.1)]" : "bg-[#050505] text-white shadow-[0_10px_20px_rgba(0,0,0,0.1)]";

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30, x: isRight ? 30 : -30 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`flex w-full max-w-[90%] flex-col gap-8 p-10 transition-transform hover:-translate-y-1 sm:max-w-[75%] sm:p-12 lg:flex-row lg:items-center lg:gap-12 lg:p-14 ${alignmentClass} ${bgClass} ${radiusClass}`}
              >
                <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.2rem] lg:h-20 lg:w-20 ${iconBg}`}>
                   <Icon className="h-7 w-7 stroke-[1.5]" />
                </div>
                
                <div className="flex flex-col gap-4">
                  <h3 className="font-display text-2xl font-medium tracking-tight sm:text-3xl lg:text-4xl">
                    {step.title}
                  </h3>
                  <p className={`font-ui text-base leading-relaxed sm:text-lg ${isRight ? 'text-white/60' : 'text-black/60'}`}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { LayoutGrid, Wand2, Store, CreditCard, Gem, LucideIcon, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, LucideIcon> = {
  LayoutGrid: LayoutGrid,
  Wand2: Wand2,
  Store: Store,
  CreditCard: CreditCard
};

type Step = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

type ExperienceData = {
  badge: string;
  title: string;
  description: string;
  steps: Step[];
};

type ExperienceSectionProps = {
  data: ExperienceData;
};

export function ExperienceSection({ data }: ExperienceSectionProps) {
  return (
    <section id="experience" className="relative z-20 bg-white py-24 sm:py-32" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24">

          {/* Left: Text Content */}
          <div className="flex flex-col gap-6 lg:w-1/2 lg:sticky lg:top-32 lg:self-start">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#111111]/40"
            >
              {data.badge}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-[#111111] sm:text-6xl lg:text-7xl"
            >
              {data.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="max-w-xl font-ui text-base leading-relaxed text-[#111111]/60 sm:text-lg"
            >
              {data.description}
            </motion.p>
          </div>

          {/* Right: Journey Pipeline */}
          <div className="lg:w-1/2">
            <div className="relative mx-auto w-full max-w-[460px]">
              {/* Vertical Connector Line */}
              <div className="absolute left-7 top-12 bottom-12 w-px bg-gradient-to-b from-brand-darker/10 via-brand-darker/5 to-transparent hidden sm:block" />

              <div className="flex flex-col gap-0">
                {data.steps.map((step, index) => {
                  const Icon = iconMap[step.icon] || Gem;
                  const isLast = index === data.steps.length - 1;

                  return (
                    <div key={step.id}>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + index * 0.12, duration: 0.5, type: "spring" }}
                        className={`relative flex items-start gap-5 rounded-2xl p-5 transition-all duration-300 cursor-default group
                          ${isLast
                            ? 'bg-brand-darker shadow-2xl shadow-brand-darker/20'
                            : 'bg-white border border-brand-darker/5 shadow-sm hover:shadow-lg hover:border-brand-darker/10 hover:-translate-y-0.5'
                          }`}
                      >
                        {/* Step Number + Icon */}
                        <div className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-105
                          ${isLast ? 'bg-white/10' : 'bg-brand-darker/[0.04] border border-brand-darker/5'}`}
                        >
                          <Icon className={`h-5 w-5 ${isLast ? 'text-white/70' : 'text-brand-darker/40'}`} strokeWidth={1.5} />
                          <span className={`absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full text-[8px] font-bold
                            ${isLast ? 'bg-white text-brand-darker' : 'bg-brand-darker text-white'}`}
                          >
                            {index + 1}
                          </span>
                        </div>

                        {/* Step Info */}
                        <div className="flex flex-col gap-1.5 pt-1">
                          <span className={`font-display text-sm font-bold tracking-tight sm:text-base
                            ${isLast ? 'text-white' : 'text-[#111111]'}`}
                          >
                            {step.title}
                          </span>
                          <span className={`font-ui text-xs leading-relaxed sm:text-sm
                            ${isLast ? 'text-white/50' : 'text-[#111111]/40'}`}
                          >
                            {step.description}
                          </span>
                        </div>
                      </motion.div>

                      {/* Connector Arrow */}
                      {!isLast && (
                        <motion.div
                          initial={{ opacity: 0, scaleY: 0 }}
                          whileInView={{ opacity: 1, scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + index * 0.12, duration: 0.3 }}
                          className="flex justify-center py-2 origin-top"
                        >
                          <div className="flex flex-col items-center gap-0.5">
                            <div className="w-px h-4 bg-brand-darker/10" />
                            <ArrowDown className="h-3 w-3 text-brand-darker/15" />
                          </div>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Footer Label */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="mt-6 flex items-center justify-center"
              >
                <span className="font-mono text-[8px] font-bold text-[#111111]/20 uppercase tracking-widest">Effortless from start to finish</span>
              </motion.div>
            </div>
          </div>

        </div>
      </div>

      {/* Node Marker on Spine */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <div className="w-1 h-1 rounded-full bg-brand-darker/20" />
      </div>
    </section>
  );
}

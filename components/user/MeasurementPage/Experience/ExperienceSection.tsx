"use client";

import { motion } from "framer-motion";
import { Scan, Ruler, Sparkles, ShoppingBag } from "lucide-react";

type ExperienceData = {
  badge: string;
  title: string;
  description: string;
  steps: string[];
};

type ExperienceSectionProps = {
  data: ExperienceData;
};

const iconMap: any = {
  "Scan your body": Scan,
  "Get measurements": Ruler,
  "Receive styling": Sparkles,
  "Shop instantly": ShoppingBag,
};

export function ExperienceSection({ data }: ExperienceSectionProps) {
  return (
    <section className="relative w-full bg-white py-24 sm:py-32" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-8 text-center items-center mx-auto max-w-3xl">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/40"
            >
              {data.badge}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-[#111111] sm:text-6xl lg:text-7xl"
            >
              {data.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-xl font-ui text-base leading-relaxed text-[#3A3A3A]/60 sm:text-lg"
            >
              {data.description}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-4 relative">
             {data.steps.map((step, index) => {
               const Icon = iconMap[step] || Scan;
               return (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.15 }}
                  className="group relative flex flex-col gap-10 rounded-[3rem] border border-[#3A3A3A]/5 bg-[#F9F9F8] p-10 transition-all hover:bg-brand-darker hover:text-white"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-2xl transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-8 w-8 text-brand-darker" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col gap-4">
                    <span className="font-display text-[10px] font-bold uppercase tracking-widest text-black/30 group-hover:text-white/40">Step 0{index + 1}</span>
                    <h3 className="font-display text-2xl font-medium tracking-tight">
                      {step}
                    </h3>
                  </div>
                </motion.div>
               );
             })}
             
             {/* Progress Line Connector on Desktop */}
             <div className="hidden lg:block absolute top-[15%] left-0 w-full h-[1px] bg-black/[0.03] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

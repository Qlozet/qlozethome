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
    <section className="relative w-full bg-white py-24 lg:py-40" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col gap-12 lg:gap-20">
          <div className="flex flex-col gap-8 text-center items-center mx-auto max-w-3xl">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="font-display text-[10px] font-bold uppercase tracking-[0.5em] text-black/40"
            >
              {data.badge}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl font-medium leading-[1.1] tracking-tighter text-black sm:text-6xl lg:text-7xl"
            >
              {data.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-xl font-ui text-lg leading-relaxed text-black/60 lg:text-2xl"
            >
              {data.description}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 relative">
             {data.steps.map((step, index) => {
               const Icon = iconMap[step] || Scan;
               return (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.15 }}
                  className="group relative flex flex-col gap-8 sm:gap-10 rounded-[2rem] sm:rounded-[3rem] border border-black/5 bg-zinc-50 p-6 sm:p-10 transition-all hover:bg-black hover:text-white"
                >
                  <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white shadow-2xl transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-black" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <span className="font-display text-[10px] font-bold uppercase tracking-widest text-black/30 group-hover:text-white/40">Step 0{index + 1}</span>
                    <h3 className="font-display text-xl sm:text-2xl font-medium tracking-tight">
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

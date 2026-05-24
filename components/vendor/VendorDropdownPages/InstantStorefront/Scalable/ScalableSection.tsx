"use client";

import { motion } from "framer-motion";
import { TrendingUp, Target, Rocket } from "lucide-react";

const iconMap: any = {
  "Start Small": Target,
  "Grow Fast": TrendingUp,
  "Scale Globally": Rocket,
};

type ScalableData = {
  badge: string;
  title: string;
  description: string;
  phases: string[];
};

type ScalableSectionProps = {
  data: ScalableData;
};

export function ScalableSection({ data }: ScalableSectionProps) {
  return (
    <section className="relative w-full bg-[#0A0A0A] py-24 sm:py-32" data-theme="dark">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-8 text-center items-center mx-auto max-w-3xl">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-white/40"
            >
              {data.badge}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display max-w-4xl text-5xl sm:text-7xl font-medium leading-[1.05] tracking-tight text-white"
            >
              {data.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-xl font-ui text-base leading-relaxed text-white/50 sm:text-lg"
            >
              {data.description}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 relative">
            {data.phases.map((phase, index) => {
              const Icon = iconMap[phase] || Rocket;
              return (
                <motion.div
                  key={phase}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.15 }}
                  className="group relative flex flex-col gap-6 rounded-[2rem] border border-white/5 bg-white/5 p-6 sm:p-10 transition-all hover:bg-white/10 overflow-hidden"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-2xl transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-6 w-6 text-[#3A3A3A]" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className="font-display text-2xl font-medium tracking-tight text-white transition-colors group-hover:text-[#3A3A3A]">
                      {phase}
                    </h3>
                  </div>
                  {/* Decorative Progress Visual */}
                  <div className="absolute -bottom-8 -right-8 opacity-[0.02] transition-opacity group-hover:opacity-[0.05]">
                    <Icon className="w-48 h-48 text-white" strokeWidth={0.5} />
                  </div>
                </motion.div>
              );
            })}
            {/* Visual Continuity Arrow Line on Desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-white/5 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

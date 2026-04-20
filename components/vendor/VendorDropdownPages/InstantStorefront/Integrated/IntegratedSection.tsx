"use client";

import { motion } from "framer-motion";
import { Cpu, Users, Layers, MessageSquare, Heart, CheckCircle2 } from "lucide-react";

const iconMap: any = {
  "Custom & Ready-to-Wear Support": Layers,
  "Integrated Measurement Tools": Cpu,
  "Production & Delivery Sync": CheckCircle2,
};

type IntegratedData = {
  badge: string;
  title: string;
  description: string;
  tools: string[];
};

type IntegratedSectionProps = {
  data: IntegratedData;
};

export function IntegratedSection({ data }: IntegratedSectionProps) {
  return (
    <section className="relative w-full bg-zinc-50 py-14 lg:py-40" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
          {/* Left Column: Tools Grids */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-6 relative">
              {data.tools.map((tool, index) => {
                const Icon = iconMap[tool] || Layers;
                const isFirst = index === 0;
                return (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex flex-col gap-6 rounded-[2rem] p-6 sm:p-8 shadow-xl border border-white/40 backdrop-blur-sm transition-all hover:scale-[1.03] ${
                      isFirst 
                        ? "bg-white col-span-2 sm:aspect-[16/6] flex-row items-center" 
                        : "bg-white/80 sm:aspect-square"
                    }`}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm">
                      <Icon className="h-6 w-6 text-black opacity-80" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col gap-2">
                       <h3 className="font-display text-xl font-medium tracking-tight text-black">
                         {tool}
                       </h3>
                       {!isFirst && <span className="font-ui text-sm text-black/40">Integrated by Default</span>}
                    </div>
                  </motion.div>
                );
              })}
              {/* Decorative Blur Background Element */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-zinc-200/50 rounded-full blur-[80px]" />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col gap-12 lg:w-1/2 lg:pl-20">
            <div className="flex flex-col gap-8">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="max-w-xl font-ui text-lg leading-relaxed text-black/60 lg:text-2xl"
              >
                {data.description}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

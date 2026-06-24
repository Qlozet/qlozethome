"use client";

import { motion, AnimatePresence } from "framer-motion";
import { PencilRuler, RefreshCcw, Gauge, Undo2, Redo2 } from "lucide-react";
import { useState } from "react";

const iconMap: any = { PencilRuler, RefreshCcw, Gauge };

type RefinementData = {
  badge: string;
  title: string;
  description: string;
  features: { title: string; icon: string }[];
};

type RefinementSectionProps = { data: RefinementData };

const ITERATIONS = [
  { version: "v1.0", image: "/image/bespoke-kaftan-pattern.png", changes: "Initial concept" },
  { version: "v1.1", image: "/image/bespoke-kaftan-brown-8.png", changes: "Adjusted neckline, gold embroidery added" },
  { version: "v2.0", image: "/image/bespoke-kaftan-blue-1.png", changes: "Final — sleeve length refined, fit perfected" }
];

export function RefinementSection({ data }: RefinementSectionProps) {
  const [activeVersion, setActiveVersion] = useState(2);

  return (
    <section className="relative w-full bg-white py-24 sm:py-32 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-24">
          {/* Left: Iteration Console */}
          <div className="relative mt-8 order-2 lg:order-1 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto w-full max-w-[520px] rounded-[3rem] bg-zinc-50 border border-black/5 shadow-2xl p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-2">

              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-black/5 mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 flex items-center justify-center rounded-xl bg-brand text-white">
                    <RefreshCcw className="h-3.5 w-3.5" />
                  </div>
                  <span className="font-display text-[10px] font-bold uppercase tracking-widest text-[#111111]">Design History</span>
                </div>
                <div className="flex items-center gap-2">
                  <motion.button onClick={() => setActiveVersion(v => Math.max(0, v - 1))} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                    className="h-8 w-8 rounded-lg bg-white border border-black/5 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                    <Undo2 className="h-3 w-3 text-black/40" />
                  </motion.button>
                  <motion.button onClick={() => setActiveVersion(v => Math.min(ITERATIONS.length - 1, v + 1))} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                    className="h-8 w-8 rounded-lg bg-white border border-black/5 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                    <Redo2 className="h-3 w-3 text-black/40" />
                  </motion.button>
                </div>
              </div>

              {/* Active Version Preview */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeVersion}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-black/5 shadow-md mb-5 group cursor-pointer"
                >
                  <img src={ITERATIONS[activeVersion].image} alt={ITERATIONS[activeVersion].version} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-black/5 shadow-sm">
                    <span className="font-mono text-[8px] font-bold text-black uppercase tracking-widest leading-none">{ITERATIONS[activeVersion].version}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="font-ui text-[10px] text-white/80">{ITERATIONS[activeVersion].changes}</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Version Timeline */}
              <div className="flex gap-2">
                {ITERATIONS.map((iter, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setActiveVersion(i)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 py-2.5 rounded-xl font-mono text-[8px] font-bold uppercase tracking-widest transition-all ${i === activeVersion ? 'bg-brand text-white shadow-lg' : 'bg-white text-black/40 border border-black/5 hover:border-black/15'}`}
                  >
                    {iter.version}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-6 order-1 lg:order-2 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#111111]/40">{data.badge}</motion.span>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-[#111111] sm:text-6xl lg:text-7xl">{data.title}</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-base leading-relaxed text-[#111111]/60 sm:text-lg">{data.description}</motion.p>
            </div>
            <div className="flex flex-col gap-5">
              {data.features.map((feature, i) => {
                const Icon = iconMap[feature.icon] || PencilRuler;
                return (
                  <motion.div key={feature.title} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }} className="flex items-center gap-4 group">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-light border border-brand/5 group-hover:bg-brand group-hover:text-white transition-all shadow-sm">
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <span className="font-ui text-sm font-medium text-[#111111]/70 sm:text-base">{feature.title}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Target, Layers, Cpu, Wand2 } from "lucide-react";
import { useState, useEffect } from "react";

const iconMap: any = { Sparkles, Target, Layers };

type GenerationData = {
  badge: string;
  title: string;
  description: string;
  features: { title: string; icon: string }[];
};

type GenerationSectionProps = { data: GenerationData };

const VARIATIONS = [
  { image: "/image/red-bespoke-1.png", label: "Variation A", confidence: "96%" },
  { image: "/image/red-bespoke-2.png", label: "Variation B", confidence: "91%" },
  { image: "/image/red-bespoke-3.png", label: "Variation C", confidence: "88%" }
];

export function GenerationSection({ data }: GenerationSectionProps) {
  const [generating, setGenerating] = useState(true);
  const [activeVar, setActiveVar] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setGenerating(false), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full bg-brand-darker py-24 sm:py-32 overflow-hidden" data-theme="dark">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      <div className="relative z-10 mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-24">
          {/* Left: Content */}
          <div className="flex flex-col gap-6 lg:w-1/2">
            <div className="flex flex-col gap-8">
              <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">{data.badge}</motion.span>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">{data.title}</motion.h2>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="max-w-xl font-ui text-base leading-relaxed text-white/40 sm:text-lg">{data.description}</motion.p>
            </div>
            <div className="flex flex-col gap-5">
              {data.features.map((feature, i) => {
                const Icon = iconMap[feature.icon] || Sparkles;
                return (
                  <motion.div key={feature.title} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }} className="flex items-center gap-4 group">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 border border-white/10 text-white group-hover:bg-brand group-hover:text-white transition-all shadow-sm">
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <span className="font-ui text-sm font-medium text-white/70 group-hover:text-white transition-colors sm:text-base">{feature.title}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: AI Generation Console */}
          <div className="relative mt-8 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto w-full max-w-[520px] rounded-[3rem] bg-white/[0.03] border border-white/10 shadow-2xl p-6 sm:p-8 overflow-hidden backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.06]">

              {/* Console Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/5 mb-6">
                <div className="flex items-center gap-3">
                  <motion.div animate={{ rotate: generating ? 360 : 0 }} transition={{ duration: 2, repeat: generating ? Infinity : 0, ease: "linear" }}
                    className="h-8 w-8 flex items-center justify-center rounded-xl bg-white text-brand">
                    <Wand2 className="h-3.5 w-3.5" />
                  </motion.div>
                  <span className="font-display text-[10px] font-bold uppercase tracking-widest text-white">AI Engine</span>
                </div>
                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border shadow-sm ${generating ? 'bg-amber-500/10 border-amber-500/20' : 'bg-white/10 border-white/20'}`}>
                  <div className={`h-2 w-2 rounded-full animate-pulse ${generating ? 'bg-amber-500' : 'bg-white'}`} />
                  <span className={`font-mono text-[8px] font-bold uppercase tracking-widest leading-none ${generating ? 'text-amber-400' : 'text-white/80'}`}>
                    {generating ? 'Generating...' : 'Complete'}
                  </span>
                </div>
              </div>

              {/* Main Generated Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeVar}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-xl mb-5 group cursor-pointer"
                >
                  <img src={VARIATIONS[activeVar].image} alt={VARIATIONS[activeVar].label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {generating && (
                    <motion.div animate={{ y: ["-100%", "200%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent z-20" />
                  )}

                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="font-display text-[9px] font-bold text-white uppercase tracking-widest">{VARIATIONS[activeVar].label}</span>
                      <span className="font-mono text-[8px] text-white/60">AI Confidence: {VARIATIONS[activeVar].confidence}</span>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <span className="font-mono text-[8px] font-bold text-black uppercase tracking-widest leading-none">Select</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Variation Thumbnails */}
              <div className="grid grid-cols-3 gap-3">
                {VARIATIONS.map((v, i) => (
                  <motion.div
                    key={i}
                    onClick={() => setActiveVar(i)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${i === activeVar ? 'border-brand shadow-lg' : 'border-white/10 opacity-50 hover:opacity-80'}`}
                  >
                    <img src={v.image} alt={v.label} className="w-full h-full object-cover" />
                    <div className="absolute bottom-1.5 left-1.5">
                      <span className="font-mono text-[7px] font-bold text-white uppercase tracking-widest bg-black/50 backdrop-blur-sm px-1.5 py-0.5 rounded">{v.label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

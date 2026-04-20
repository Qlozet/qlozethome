"use client";

import { motion } from "framer-motion";
import { Scissors, Palette, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const iconMap: any = { Scissors, Palette, SlidersHorizontal };

type PrecisionData = {
  badge: string;
  title: string;
  description: string;
  features: { title: string; icon: string }[];
};

type PrecisionSectionProps = { data: PrecisionData };

const CONTROLS = [
  { label: "Neckline", value: "V-Neck", options: ["Round", "V-Neck", "Square"] },
  { label: "Sleeve Length", value: "3/4", options: ["Short", "3/4", "Full"] },
  { label: "Embroidery", value: "Gold Thread", options: ["None", "Silver", "Gold Thread"] },
  { label: "Fit", value: "Tailored", options: ["Loose", "Regular", "Tailored"] }
];

export function PrecisionSection({ data }: PrecisionSectionProps) {
  const [activeControls, setActiveControls] = useState(
    CONTROLS.reduce((acc, c) => ({ ...acc, [c.label]: c.options.indexOf(c.value) }), {} as Record<string, number>)
  );

  return (
    <section className="relative w-full bg-white py-14 lg:py-48" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-32">
          {/* Right: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-black/40">{data.badge}</motion.span>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="font-display text-4xl font-medium leading-[1.1] tracking-tighter text-black sm:text-6xl lg:text-7xl">{data.title}</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-lg leading-relaxed text-black/40 lg:text-2xl">{data.description}</motion.p>
            </div>
            <div className="flex flex-col gap-5">
              {data.features.map((feature, i) => {
                const Icon = iconMap[feature.icon] || SlidersHorizontal;
                return (
                  <motion.div key={feature.title} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }} className="flex items-center gap-6 group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-50 border border-black/5 group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <span className="font-display text-lg font-medium text-black/80">{feature.title}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Left: Design Control Panel */}
          <div className="relative mt-8 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto w-full max-w-[520px] rounded-[3rem] bg-zinc-50 border border-black/5 shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-2">
               
               {/* Product Preview */}
               <div className="relative aspect-[4/3] overflow-hidden">
                  <img src="/image/custom-outfit-3.webp" alt="Design Preview" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 via-transparent to-transparent" />
                  
                  {/* Floating measurement callouts */}
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
                     className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-black/5 shadow-sm">
                     <span className="font-mono text-[8px] font-bold text-black uppercase tracking-widest">Precision Mode</span>
                  </motion.div>
               </div>

               {/* Controls */}
               <div className="p-6 sm:p-8 flex flex-col gap-4">
                  <span className="font-mono text-[8px] font-bold text-zinc-400 uppercase tracking-widest">Design Controls</span>
                  
                  {CONTROLS.map((ctrl, i) => (
                     <motion.div key={ctrl.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.08 }}
                        className="flex items-center gap-4"
                     >
                        <span className="font-display text-[10px] font-bold text-black uppercase tracking-wider w-24 shrink-0">{ctrl.label}</span>
                        <div className="flex-1 flex gap-1.5">
                           {ctrl.options.map((opt, j) => (
                              <motion.button
                                 key={opt}
                                 onClick={() => setActiveControls(prev => ({ ...prev, [ctrl.label]: j }))}
                                 whileHover={{ scale: 1.05 }}
                                 whileTap={{ scale: 0.95 }}
                                 className={`flex-1 py-2 rounded-lg font-mono text-[8px] font-bold uppercase tracking-widest transition-all ${activeControls[ctrl.label] === j ? 'bg-black text-white shadow-md' : 'bg-white text-black/40 border border-black/5 hover:border-black/15'}`}
                              >
                                 {opt}
                              </motion.button>
                           ))}
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

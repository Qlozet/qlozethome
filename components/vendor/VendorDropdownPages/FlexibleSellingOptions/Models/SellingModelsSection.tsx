"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ShoppingBag, Ruler, Blend, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

type ModelData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type SellingModelsSectionProps = {
  data: ModelData;
};

export function SellingModelsSection({ data }: SellingModelsSectionProps) {
  const [activeMode, setActiveMode] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setActiveMode(p => (p + 1) % 3), 4000);
    return () => clearInterval(interval);
  }, []);

  const modes = [
    {
      icon: ShoppingBag,
      label: "Ready-to-Wear",
      desc: "Sell finished products from your catalog",
      content: (
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: "Silk Blouse", price: "$89", color: "bg-rose-50 border-rose-100" },
            { name: "Linen Pants", price: "$120", color: "bg-amber-50 border-amber-100" },
            { name: "Cotton Dress", price: "$145", color: "bg-sky-50 border-sky-100" },
            { name: "Wool Jacket", price: "$210", color: "bg-brand-light border-brand-darker/10" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              className={`rounded-xl border p-4 flex flex-col gap-2 ${item.color} hover:shadow-md hover:scale-[1.02] transition-all cursor-pointer group`}
            >
              <div className="h-12 w-12 rounded-lg bg-white/60 shadow-sm" />
              <span className="font-display text-[9px] font-bold text-[#111111]/60 uppercase tracking-wider">{item.name}</span>
              <span className="font-display text-sm font-bold text-[#111111]">{item.price}</span>
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      icon: Ruler,
      label: "Made-to-Measure",
      desc: "Custom-fitted garments for each customer",
      content: (
        <div className="flex flex-col gap-3">
          {[
            { label: "Chest", val: '38"', pct: 72 },
            { label: "Waist", val: '32"', pct: 60 },
            { label: "Hip", val: '40"', pct: 76 },
            { label: "Sleeve", val: '24"', pct: 50 },
          ].map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <span className="font-display text-[9px] font-bold uppercase tracking-wider text-[#111111]/30 w-14 shrink-0">{m.label}</span>
              <div className="flex-1 h-3 bg-zinc-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${m.pct}%` }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                  className="h-full bg-brand-darker rounded-full transition-colors"
                />
              </div>
              <span className="font-mono text-[10px] font-bold text-[#111111] w-8 text-right">{m.val}</span>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2 mt-2 bg-brand-light border border-brand-darker/20 rounded-xl px-4 py-3"
          >
            <CheckCircle2 className="h-3.5 w-3.5 text-brand-darker" />
            <span className="font-display text-[8px] font-bold text-brand-darker uppercase tracking-wider">Custom Profile Saved</span>
          </motion.div>
        </div>
      ),
    },
    {
      icon: Blend,
      label: "Hybrid Store",
      desc: "Offer both ready-made and custom options",
      content: (
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <div className="flex-1 rounded-xl bg-brand-light border border-brand-darker/[0.04] p-4 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-3 w-3 text-brand-darker/30" />
                <span className="font-display text-[8px] font-bold uppercase tracking-wider text-[#111111]/40">Ready-Made</span>
              </div>
              <span className="font-display text-2xl font-bold text-[#111111]">14</span>
              <span className="font-display text-[7px] text-[#111111]/20 uppercase tracking-wider">Products Live</span>
            </div>
            <div className="flex-1 rounded-xl bg-brand-light border border-brand-darker/[0.04] p-4 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Ruler className="h-3 w-3 text-brand-darker/30" />
                <span className="font-display text-[8px] font-bold uppercase tracking-wider text-[#111111]/40">Custom</span>
              </div>
              <span className="font-display text-2xl font-bold text-[#111111]">8</span>
              <span className="font-display text-[7px] text-[#111111]/20 uppercase tracking-wider">Active Orders</span>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="h-14 rounded-xl bg-brand-button text-white px-5 flex items-center justify-between group cursor-pointer hover:bg-brand transition-colors"
          >
            <div className="flex items-center gap-3">
              <Blend className="h-4 w-4 text-white/50" />
              <span className="font-display text-[9px] font-bold uppercase tracking-wider text-white/80">Both modes running</span>
            </div>
            <ArrowRight className="h-3 w-3 text-white/30 group-hover:text-white/60 group-hover:translate-x-0.5 transition-all" />
          </motion.div>
          <div className="flex gap-2">
            {["Unified Dashboard", "One Catalog", "Seamless UX"].map((t, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.06 }}
                className="flex-1 text-center py-2 rounded-lg bg-brand-light border border-brand-darker/[0.04] font-display text-[7px] font-bold uppercase tracking-wider text-brand-darker/25"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id={data.id} className="relative z-10 bg-white py-24 sm:py-32 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-24">
          {/* Left: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#111111]/40">{data.badge}</motion.span>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-[#111111] sm:text-5xl lg:text-6xl">{data.title}</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="max-w-xl font-ui text-base leading-relaxed text-[#111111]/40 sm:text-lg">{data.description}</motion.p>
            </div>
            <div className="grid gap-4">
              {data.features.map((feature, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }} className="flex items-center gap-6 group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-light border border-brand-darker/5 group-hover:bg-brand-darker group-hover:text-white transition-all shadow-sm"><CheckCircle2 className="h-4 w-4" strokeWidth={1.5} /></div>
                  <span className="font-ui text-sm font-medium text-[#111111]/70 sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-ui text-sm italic text-[#111111]/30">{data.closing}</motion.p>
          </div>

          {/* Right: Mode Showcase */}
          <div className="relative lg:w-1/2">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative mx-auto w-full max-w-md rounded-[2.5rem] bg-white border border-brand-darker/[0.06] shadow-2xl overflow-hidden">

              {/* Mode Tabs */}
              <div className="px-6 pt-6 pb-0 bg-white">
                <div className="flex gap-1.5 bg-brand-light rounded-xl p-1.5 border border-brand-darker/[0.04]">
                  {modes.map((m, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveMode(i)}
                      className={`flex-1 flex items-center justify-center gap-2 h-10 rounded-lg font-display text-[8px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                        activeMode === i
                          ? 'bg-brand-darker text-white shadow-lg'
                          : 'text-brand-darker/30 hover:text-brand-darker/60'
                      }`}
                    >
                      <m.icon className="h-3 w-3" strokeWidth={1.5} />
                      <span className="hidden sm:inline">{m.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Mode Content — Fixed Height */}
              <div className="px-6 py-5 min-h-[300px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMode}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    {/* Mode Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex flex-col gap-0.5">
                        <span className="font-display text-[11px] font-bold uppercase tracking-wider text-[#111111]">{modes[activeMode].label}</span>
                        <span className="font-ui text-[8px] text-[#111111]/25">{modes[activeMode].desc}</span>
                      </div>
                      <div className="h-2 w-2 rounded-full bg-brand-darker animate-pulse" />
                    </div>
                    {/* Content */}
                    {modes[activeMode].content}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-brand-light border-t border-brand-darker/5 flex items-center justify-between">
                <div className="flex gap-1.5">
                  {modes.map((_, i) => (
                    <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${activeMode === i ? 'w-6 bg-brand-darker' : 'w-1.5 bg-brand-darker/10'}`} />
                  ))}
                </div>
                <span className="font-display text-[7px] font-bold uppercase tracking-[0.4em] text-[#111111]/15">Switch anytime</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-brand-darker/10 shadow-sm" />
    </section>
  );
}

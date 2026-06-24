"use client";

import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Plus, ArrowRight } from "lucide-react";

type PricingData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type FlexiblePricingSectionProps = {
  data: PricingData;
};

export function FlexiblePricingSection({ data }: FlexiblePricingSectionProps) {
  const layers = [
    { label: "Base Garment", amount: 85, pct: 53, color: "bg-[#1e1008]" },
    { label: "Premium Fabric", amount: 35, pct: 22, color: "bg-[#25140b]" },
    { label: "Custom Sleeves", amount: 15, pct: 9, color: "bg-[#381f10]" },
    { label: "Rush Fee", amount: 25, pct: 16, color: "bg-[#604230]" },
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
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-light border border-brand-darker/5 group-hover:bg-brand-darker group-hover:text-white transition-all shadow-sm"><TrendingUp className="h-4 w-4" strokeWidth={1.5} /></div>
                  <span className="font-ui text-sm font-medium text-[#111111]/70 sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-ui text-sm italic text-[#111111]/30">{data.closing}</motion.p>
          </div>

          {/* Right: Price Builder Card */}
          <div className="relative lg:w-1/2">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative mx-auto w-full max-w-sm rounded-[2.5rem] bg-white border border-brand-darker/[0.06] shadow-2xl overflow-hidden">

              {/* Header */}
              <div className="px-7 pt-7 pb-5 text-center border-b border-dashed border-brand-darker/10">
                <span className="font-display text-[9px] font-bold uppercase tracking-[0.4em] text-[#111111]/25">Price Builder</span>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="mt-3 flex items-baseline justify-center gap-1"
                >
                  <span className="font-display text-5xl font-bold text-[#111111] tracking-tight">$160</span>
                </motion.div>
                <span className="font-ui text-[9px] text-[#111111]/20 mt-1 block">Total Order Value</span>
              </div>

              {/* Line Items */}
              <div className="px-6 py-5 flex flex-col gap-0">
                {layers.map((layer, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-4 py-3 group cursor-pointer border-b border-brand-darker/[0.03] last:border-b-0"
                  >
                    {/* Color Dot */}
                    <div className={`h-3 w-3 rounded-full ${layer.color} group-hover:scale-125 transition-transform flex-shrink-0`} />

                    {/* Bar + Label */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-1.5">
                          {i > 0 && <Plus className="h-2 w-2 text-brand-darker/10" />}
                          <span className="font-display text-[9px] font-bold uppercase tracking-wider text-[#111111]/50 group-hover:text-[#111111] transition-colors">{layer.label}</span>
                        </div>
                        <span className="font-mono text-[12px] font-bold text-[#111111]/70">${layer.amount}</span>
                      </div>
                      <div className="h-2 bg-brand-light rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${layer.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.12, duration: 0.7, ease: "easeOut" }}
                          className={`h-full rounded-full ${layer.color} group-hover:opacity-80 transition-opacity`}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stacked Composite Bar */}
              <div className="px-6 pb-5">
                <div className="flex h-7 rounded-xl overflow-hidden shadow-inner border border-brand-darker/[0.04]">
                  {layers.map((layer, i) => (
                    <motion.div
                      key={i}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${layer.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9 + i * 0.08, duration: 0.5 }}
                      className={`h-full ${layer.color} relative group cursor-pointer`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="font-display text-[6px] font-bold text-white uppercase tracking-wider">{layer.pct}%</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="px-7 py-5 bg-brand-darker text-white flex items-center justify-between">
                <span className="font-display text-[8px] font-bold uppercase tracking-widest text-white/40">You set every layer</span>
                <div className="flex items-center gap-1">
                  <DollarSign className="h-3.5 w-3.5 text-white/40" />
                  <span className="font-display text-lg font-bold text-white">160</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-brand-darker/10 shadow-sm" />
    </section>
  );
}

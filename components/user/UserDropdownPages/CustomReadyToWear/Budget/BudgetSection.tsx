"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, Minus, Plus } from "lucide-react";
import { useState, useMemo } from "react";

/* ── Configurable options with price impacts ── */
const SLEEVE_OPTIONS = [
  { label: "Short Sleeve", price: 0 },
  { label: "3/4 Sleeve", price: 15 },
  { label: "Long Sleeve", price: 35 }
];

const FABRIC_OPTIONS = [
  { label: "Poly-Blend", price: 0, img: "/image/fabric-swatch-3.jpg" },
  { label: "Turkish Cotton", price: 80, img: "/image/fabric-swatch-2.jpg" },
  { label: "Italian Silk", price: 220, img: "/image/fabric-swatch-1.jpg" }
];

const ACCESSORIES = [
  { label: "Embroidery", price: 60, active: true },
  { label: "Gold Buttons", price: 40, active: false },
  { label: "Inner Lining", price: 30, active: true },
  { label: "Monogram", price: 25, active: false }
];

const BASE_PRICE = 120;

type Feature = {
  title: string;
  icon: string;
};

type BudgetData = {
  badge: string;
  title: string;
  description: string;
  features: Feature[];
};

type BudgetSectionProps = {
  data: BudgetData;
};

export function BudgetSection({ data }: BudgetSectionProps) {
  const [sleeveIdx, setSleeveIdx] = useState(2);
  const [fabricIdx, setFabricIdx] = useState(1);
  const [accessories, setAccessories] = useState(
    ACCESSORIES.map((a) => a.active)
  );

  const toggleAccessory = (idx: number) => {
    setAccessories((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

  const totalPrice = useMemo(() => {
    const accPrice = accessories.reduce(
      (sum, active, i) => sum + (active ? ACCESSORIES[i].price : 0),
      0
    );
    return BASE_PRICE + SLEEVE_OPTIONS[sleeveIdx].price + FABRIC_OPTIONS[fabricIdx].price + accPrice;
  }, [sleeveIdx, fabricIdx, accessories]);

  const fabric = FABRIC_OPTIONS[fabricIdx];

  return (
    <section className="relative z-10 bg-zinc-50 py-24 sm:py-32 border-y border-brand-darker/5" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-24">
          {/* Left: Content */}
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

            <div className="flex flex-col gap-3 mt-2">
              {data.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-darker/10">
                    <Check className="h-3.5 w-3.5 text-brand-darker" />
                  </span>
                  <span className="font-ui text-sm font-medium text-[#111111]/70 sm:text-base">{feature.title}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Live Price Configurator */}
          <div className="relative mt-10 lg:mt-0 lg:w-1/2 flex justify-center pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: "spring" }}
              className="w-full max-w-[440px] rounded-3xl bg-white border border-brand-darker/5 shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-brand-darker/5 bg-brand-darker/[0.02]">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-brand-darker/10" />
                    <div className="h-2 w-2 rounded-full bg-brand-darker/10" />
                    <div className="h-2 w-2 rounded-full bg-brand-darker/10" />
                  </div>
                  <span className="font-mono text-[8px] font-bold text-[#111111]/30 uppercase tracking-widest">
                    Style Configurator
                  </span>
                </div>
                <span className="font-mono text-[7px] font-bold text-emerald-600 uppercase tracking-widest flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                  Live
                </span>
              </div>

              {/* ── Live Price ── */}
              <div className="px-5 pt-5 pb-3 flex items-end justify-between border-b border-brand-darker/5">
                <div>
                  <span className="font-mono text-[7px] text-[#111111]/25 font-bold uppercase tracking-widest block mb-1">Your Price</span>
                  <div className="flex items-baseline gap-0.5">
                    <span className="font-display text-[11px] text-[#111111]/30">$</span>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={totalPrice}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="font-display text-5xl font-bold text-[#111111] tracking-tighter"
                      >
                        {totalPrice}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>
                <span className="font-mono text-[7px] text-[#111111]/15 uppercase tracking-widest pb-2">Updates live</span>
              </div>

              {/* ── Fabric Selector ── */}
              <div className="px-5 pt-4 pb-3">
                <span className="font-mono text-[7px] font-bold text-[#111111]/25 uppercase tracking-widest block mb-2.5">Fabric</span>
                <div className="flex gap-2.5">
                  {FABRIC_OPTIONS.map((f, idx) => (
                    <button
                      key={idx}
                      onClick={() => setFabricIdx(idx)}
                      className={`relative flex-1 aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300
                        ${idx === fabricIdx
                          ? 'ring-2 ring-brand-darker ring-offset-2 shadow-lg scale-[1.02]'
                          : 'opacity-60 hover:opacity-80 hover:scale-[1.01]'
                        }`}
                    >
                      {/* Full-bleed fabric image */}
                      <img src={f.img} className="absolute inset-0 w-full h-full object-cover" alt={f.label} />
                      {/* Dark gradient overlay at bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      {/* Name + Price on the gradient */}
                      <div className="absolute bottom-0 left-0 right-0 p-2.5 flex flex-col gap-0.5">
                        <span className="font-display text-[8px] sm:text-[9px] font-bold text-white uppercase tracking-wider leading-tight">
                          {f.label}
                        </span>
                        <span className="font-mono text-[7px] text-white/50">
                          {f.price === 0 ? 'Base' : `+$${f.price}`}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* ── Sleeve Length ── */}
              <div className="px-5 py-3">
                <span className="font-mono text-[7px] font-bold text-[#111111]/25 uppercase tracking-widest block mb-2.5">Sleeve Length</span>
                <div className="flex gap-2">
                  {SLEEVE_OPTIONS.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSleeveIdx(idx)}
                      className={`flex-1 rounded-xl py-2.5 px-2 text-center border transition-all duration-200 cursor-pointer
                        ${idx === sleeveIdx
                          ? 'border-brand-darker bg-brand-darker text-white shadow-sm'
                          : 'border-brand-darker/5 hover:border-brand-darker/15 text-[#111111]/40'
                        }`}
                    >
                      <span className="font-display text-[9px] font-bold block">{s.label}</span>
                      <span className={`font-mono text-[7px] mt-0.5 block ${idx === sleeveIdx ? 'text-white/50' : 'text-[#111111]/20'}`}>
                        {s.price === 0 ? 'Base' : `+$${s.price}`}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* ── Accessories Toggles ── */}
              <div className="px-5 pt-2 pb-4">
                <span className="font-mono text-[7px] font-bold text-[#111111]/25 uppercase tracking-widest block mb-2.5">Accessories</span>
                <div className="grid grid-cols-2 gap-2">
                  {ACCESSORIES.map((acc, idx) => (
                    <button
                      key={idx}
                      onClick={() => toggleAccessory(idx)}
                      className={`flex items-center justify-between rounded-xl py-2.5 px-3 border transition-all duration-200 cursor-pointer
                        ${accessories[idx]
                          ? 'border-brand-darker/15 bg-brand-darker/[0.04]'
                          : 'border-brand-darker/5 hover:border-brand-darker/10'
                        }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`h-4 w-4 rounded-md flex items-center justify-center transition-all
                          ${accessories[idx] ? 'bg-brand-darker' : 'bg-brand-darker/5 border border-brand-darker/10'}`}>
                          {accessories[idx] && <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />}
                        </div>
                        <span className={`font-display text-[9px] font-bold
                          ${accessories[idx] ? 'text-brand-darker' : 'text-[#111111]/30'}`}>
                          {acc.label}
                        </span>
                      </div>
                      <span className={`font-mono text-[7px] ${accessories[idx] ? 'text-brand-darker/50' : 'text-brand-darker/15'}`}>
                        +${acc.price}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* ── Summary Footer ── */}
              <div className="px-5 pb-5 pt-1">
                <div className="rounded-2xl bg-brand-darker p-4 flex items-center justify-between">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-mono text-[7px] text-white/30 font-bold uppercase tracking-widest">Estimated Total</span>
                    <div className="flex items-baseline gap-0.5">
                      <span className="font-display text-[10px] text-white/40">$</span>
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={totalPrice}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2 }}
                          className="font-display text-2xl font-bold text-white tracking-tight"
                        >
                          {totalPrice}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2.5 border border-white/5">
                    <span className="font-display text-[9px] font-bold text-white uppercase tracking-wider">Proceed</span>
                  </div>
                </div>
              </div>
            </motion.div>
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

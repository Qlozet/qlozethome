"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Wallet, Tags, Calculator, Wand2, LucideIcon, TrendingDown, ArrowRightLeft, DollarSign } from "lucide-react";
import { useState, useEffect } from "react";

const iconMap: Record<string, LucideIcon> = {
  Wallet: Wallet,
  Tags: Tags,
  Calculator: Calculator,
  Wand2: Wand2
};

const BUDGET_TIERS = [
  {
    id: 1,
    name: "Luxury Reserve",
    price: 1250,
    materials: "Italian Silk & Gold Thread",
    vendor: "Master Tailor (Elite)",
    style: "Hand-Stitched Embroidery & Lining",
    turnaround: "14 Days",
    color: "bg-black"
  },
  {
    id: 2,
    name: "Standard Custom",
    price: 450,
    materials: "Premium Turkish Cotton",
    vendor: "Senior Tailor (Pro)",
    style: "Standard Embellishments",
    turnaround: "7 Days",
    color: "bg-blue-500"
  },
  {
    id: 3,
    name: "Accessible Build",
    price: 180,
    materials: "Durable Poly-Blend",
    vendor: "Apprentice Maker",
    style: "Minimalist Base Pattern",
    turnaround: "21 Days",
    color: "bg-emerald-500"
  }
];

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
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % BUDGET_TIERS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const tier = BUDGET_TIERS[activeIndex];

  return (
    <section className="relative z-10 bg-zinc-50 py-32 lg:py-48 mt-1 border-y border-black/5" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-32">
          {/* Left: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex h-10 w-40 items-center justify-center border-2 border-black/10 bg-white font-display text-[9px] font-bold uppercase tracking-[0.3em] text-black/40 shadow-sm"
              >
                {data.badge}
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-4xl font-medium leading-[1.1] tracking-tighter text-black sm:text-6xl"
              >
                {data.title}
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-lg leading-relaxed text-black/50 lg:text-2xl"
              >
                {data.description}
              </motion.p>
            </div>

            <div className="grid gap-4">
              {data.features.map((feature, i) => {
                const Icon = iconMap[feature.icon] || Calculator;
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-6 group"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-black/5 group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <span className="font-display text-lg font-medium text-black/80">{feature.title}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Dynamic Pricing Engine */}
          <div className="relative mt-20 lg:mt-0 lg:w-1/2 flex justify-center items-center py-10 lg:py-0 pointer-events-none">
             
             <div className="relative w-full max-w-[550px] aspect-[4/5] sm:aspect-square rounded-[3rem] bg-white border border-black/5 shadow-2xl p-4 sm:p-8 flex flex-col sm:flex-row gap-6 items-center">
                
                {/* 1. Static Garment Viewport */}
                <div className="relative w-full sm:w-[45%] h-[280px] sm:h-full rounded-[2rem] bg-zinc-100 shadow-inner border border-black/5 overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                   <img
                     src="/image/agbada-outfit.png"
                     className="absolute inset-0 w-full h-full object-cover"
                     alt="Style Template"
                   />
                   
                   {/* Overlay HUD */}
                   <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-end">
                      <div className="flex flex-col">
                         <span className="font-mono text-[8px] text-white/70 font-bold uppercase tracking-widest">Base Template</span>
                         <span className="font-display text-[12px] font-bold text-white uppercase tracking-widest">Agbada 042</span>
                      </div>
                      <div className="bg-white/20 backdrop-blur-md px-2 py-1 rounded-md border border-white/10">
                         <TrendingDown className="h-4 w-4 text-emerald-400" />
                      </div>
                   </div>
                </div>

                {/* 2. Live Pricing Slider Dashboard */}
                <div className="flex-1 w-full flex flex-col gap-6">
                   <div className="flex flex-col gap-1 border-b border-black/5 pb-4">
                      <span className="font-mono text-[9px] text-zinc-400 font-bold uppercase tracking-widest">Active Quotation</span>
                      <AnimatePresence mode="wait">
                         <motion.div 
                            key={tier.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-2"
                         >
                            <DollarSign className="h-5 w-5 text-black" strokeWidth={3} />
                            <span className="font-display text-4xl sm:text-5xl font-bold text-black tracking-tight">{tier.price}</span>
                         </motion.div>
                      </AnimatePresence>
                   </div>

                   {/* Changing parameters */}
                   <div className="flex flex-col gap-4">
                      {/* Material Spec */}
                      <div className="flex flex-col gap-2">
                         <span className="font-mono text-[8px] sm:text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Fabric Choice</span>
                         <AnimatePresence mode="wait">
                            <motion.div 
                               key={tier.materials}
                               initial={{ opacity: 0, x: 20 }}
                               animate={{ opacity: 1, x: 0 }}
                               exit={{ opacity: 0, x: -20 }}
                               className="bg-zinc-50 border border-black/5 px-3 py-2 rounded-xl flex items-center justify-between"
                            >
                               <span className="font-display text-[10px] sm:text-[11px] font-bold text-black">{tier.materials}</span>
                               <ArrowRightLeft className="h-3 w-3 text-zinc-300" />
                            </motion.div>
                         </AnimatePresence>
                      </div>

                      {/* Vendor Spec */}
                      <div className="flex flex-col gap-2">
                         <span className="font-mono text-[8px] sm:text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Artisan Level</span>
                         <AnimatePresence mode="wait">
                            <motion.div 
                               key={tier.vendor}
                               initial={{ opacity: 0, x: 20 }}
                               animate={{ opacity: 1, x: 0 }}
                               exit={{ opacity: 0, x: -20 }}
                               className="bg-zinc-50 border border-black/5 px-3 py-2 rounded-xl flex items-center justify-between"
                            >
                               <span className="font-display text-[10px] sm:text-[11px] font-bold text-black">{tier.vendor}</span>
                               <ArrowRightLeft className="h-3 w-3 text-zinc-300" />
                            </motion.div>
                         </AnimatePresence>
                      </div>

                      {/* Style Spec */}
                      <div className="flex flex-col gap-2">
                         <span className="font-mono text-[8px] sm:text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Style Complexity</span>
                         <AnimatePresence mode="wait">
                            <motion.div 
                               key={tier.style}
                               initial={{ opacity: 0, x: 20 }}
                               animate={{ opacity: 1, x: 0 }}
                               exit={{ opacity: 0, x: -20 }}
                               className="bg-zinc-50 border border-black/5 px-3 py-2 rounded-xl flex items-center justify-between"
                            >
                               <span className="font-display text-[10px] sm:text-[11px] font-bold text-black">{tier.style}</span>
                               <ArrowRightLeft className="h-3 w-3 text-zinc-300" />
                            </motion.div>
                         </AnimatePresence>
                      </div>
                      
                      {/* Process Indicator */}
                      <div className="h-1.5 w-full bg-zinc-100 rounded-full mt-2 overflow-hidden">
                         <motion.div 
                            key={tier.id}
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 4.5, ease: "linear" }}
                            className={`h-full ${tier.color} rounded-full`}
                         />
                      </div>
                   </div>

                   {/* Footer Tag */}
                   <div className="mt-auto flex justify-center">
                      <span className="bg-emerald-500/10 text-emerald-600 px-4 py-1.5 rounded-full font-mono text-[8px] font-bold uppercase tracking-widest border border-emerald-500/20">
                         Budget Algorithm Active
                      </span>
                   </div>
                </div>

             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

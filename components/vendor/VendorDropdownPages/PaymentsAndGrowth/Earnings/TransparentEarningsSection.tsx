"use client";

import { motion } from "framer-motion";
import { BarChart3, DollarSign, PieChart, ArrowUpRight, Percent } from "lucide-react";

type EarningsData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type TransparentEarningsSectionProps = {
  data: EarningsData;
};

const BREAKDOWN = [
  { label: "Your Earnings", pct: 85, amount: "₦72,250", color: "bg-[#3A3A3A]" },
  { label: "Platform Fee", pct: 10, amount: "₦8,500", color: "bg-zinc-300" },
  { label: "Payment Processing", pct: 5, amount: "₦4,250", color: "bg-zinc-200" }
];

export function TransparentEarningsSection({ data }: TransparentEarningsSectionProps) {
  return (
    <section id={data.id} className="relative z-10 bg-white py-24 sm:py-32 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-24">
          {/* Left: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-black/40">{data.badge}</motion.span>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-[#3A3A3A] sm:text-5xl lg:text-6xl">{data.title}</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-base leading-relaxed text-[#3A3A3A]/40 sm:text-lg">{data.description}</motion.p>
            </div>
            <div className="grid gap-4">
              {data.features.map((feature, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }} className="flex items-center gap-6 group">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F9F9F8] border border-[#3A3A3A]/5 group-hover:bg-[#3A3A3A] group-hover:text-white transition-all shadow-sm">
                    <BarChart3 className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <span className="font-ui text-sm font-medium text-[#3A3A3A]/70 sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-ui text-sm italic text-[#3A3A3A]/30">{data.closing}</motion.p>
          </div>

          {/* Right: Earnings Breakdown Dashboard */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto w-full max-w-[500px] rounded-[3rem] bg-[#F9F9F8] border border-[#3A3A3A]/5 shadow-2xl p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-2">
               
               {/* Header */}
               <div className="flex items-center justify-between pb-5 border-b border-black/5 mb-6">
                  <div className="flex items-center gap-3">
                     <div className="h-8 w-8 flex items-center justify-center rounded-xl bg-[#3A3A3A] text-white">
                        <PieChart className="h-3.5 w-3.5" />
                     </div>
                     <span className="font-display text-[10px] font-bold uppercase tracking-widest text-[#3A3A3A]">Earnings Breakdown</span>
                  </div>
                  <div className="bg-white px-3 py-1.5 rounded-full border border-black/5 shadow-sm">
                     <span className="font-mono text-[8px] font-bold text-[#3A3A3A]/60 uppercase tracking-widest">Per Order</span>
                  </div>
               </div>

               {/* Order Value */}
               <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                  className="bg-white rounded-2xl border border-black/5 shadow-md p-5 mb-6 flex items-center justify-between"
               >
                  <div className="flex flex-col gap-1">
                     <span className="font-mono text-[8px] font-bold text-[#3A3A3A]/40 uppercase tracking-widest">Order Revenue</span>
                     <span className="font-display text-2xl font-bold text-[#3A3A3A] tracking-tight">₦85,000</span>
                  </div>
                  <div className="flex items-center gap-2 bg-emerald-500/10 px-4 py-2 rounded-full">
                     <ArrowUpRight className="h-3.5 w-3.5 text-emerald-600" />
                     <span className="font-mono text-[10px] font-bold text-emerald-600">Clear Split</span>
                  </div>
               </motion.div>

               {/* Breakdown Bars */}
               <div className="flex flex-col gap-4 mb-6">
                  {BREAKDOWN.map((item, i) => (
                     <motion.div key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="cursor-pointer"
                     >
                        <div className="flex items-center justify-between mb-2">
                           <div className="flex items-center gap-2">
                              <div className={`h-2 w-2 rounded-full ${item.color}`} />
                              <span className="font-display text-[10px] font-bold text-[#3A3A3A] uppercase tracking-wider">{item.label}</span>
                           </div>
                           <div className="flex items-center gap-3">
                              <span className="font-mono text-[9px] font-bold text-black/40">{item.pct}%</span>
                              <span className={`font-display text-sm font-bold ${i === 0 ? 'text-emerald-600' : 'text-[#3A3A3A]/40'}`}>{item.amount}</span>
                           </div>
                        </div>
                        <div className="h-2.5 bg-zinc-100 rounded-full overflow-hidden">
                           <motion.div initial={{ width: 0 }} whileInView={{ width: `${item.pct}%` }} viewport={{ once: true }}
                              transition={{ delay: 0.6 + i * 0.15, duration: 0.8, ease: "easeOut" }}
                              className={`h-full rounded-full ${item.color}`}
                           />
                        </div>
                     </motion.div>
                  ))}
               </div>

               {/* Net Takeaway */}
               <div className="bg-[#3A3A3A] rounded-2xl p-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <DollarSign className="h-5 w-5 text-white/40" />
                     <span className="font-display text-[10px] font-bold text-white uppercase tracking-wider">Your Net Earnings</span>
                  </div>
                  <span className="font-display text-xl font-bold text-white">₦72,250</span>
               </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-black/10 shadow-sm" />
    </section>
  );
}

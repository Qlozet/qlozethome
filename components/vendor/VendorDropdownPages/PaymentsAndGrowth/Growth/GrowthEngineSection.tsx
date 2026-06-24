"use client";

import { motion } from "framer-motion";
import { Rocket, Users, TrendingUp, ShoppingBag, ArrowUpRight } from "lucide-react";

type GrowthData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type GrowthEngineSectionProps = {
  data: GrowthData;
};

const GROWTH_METRICS = [
  { label: "Customer Reach", value: "12.4K", trend: "+320%", icon: Users },
  { label: "Monthly Orders", value: "186", trend: "+18%", icon: ShoppingBag },
  { label: "Revenue Growth", value: "₦4.2M", trend: "+24%", icon: TrendingUp }
];

export function GrowthEngineSection({ data }: GrowthEngineSectionProps) {
  return (
    <section id={data.id} className="relative z-10 bg-white py-24 sm:py-32 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-24">
          {/* Left: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#111111]/40">{data.badge}</motion.span>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-[#111111] sm:text-5xl lg:text-6xl">{data.title}</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-base leading-relaxed text-[#111111]/60 sm:text-lg">{data.description}</motion.p>
            </div>
            <div className="grid gap-4">
              {data.features.map((feature, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }} className="flex items-center gap-6 group">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-light border border-brand-darker/5 group-hover:bg-brand-darker group-hover:text-brand-light transition-all shadow-sm">
                    <Rocket className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <span className="font-ui text-sm font-medium text-brand-darker/80 sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-ui text-sm italic text-[#111111]/40">{data.closing}</motion.p>
          </div>

          {/* Right: Growth Engine Dashboard */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto w-full max-w-[500px] rounded-[3rem] bg-brand-light border border-brand-darker/5 shadow-2xl p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-2">
               
               {/* Header */}
               <div className="flex items-center justify-between pb-5 border-b border-brand-darker/5 mb-6">
                  <div className="flex items-center gap-3">
                     <div className="h-8 w-8 flex items-center justify-center rounded-xl bg-brand-darker text-white">
                        <Rocket className="h-3.5 w-3.5" />
                     </div>
                     <span className="font-display text-[10px] font-bold uppercase tracking-widest text-brand-darker">Growth Engine</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-brand-darker/5 shadow-sm">
                     <ArrowUpRight className="h-3 w-3 text-emerald-500" />
                     <span className="font-mono text-[8px] font-bold text-emerald-600 uppercase tracking-widest">Scaling</span>
                  </div>
               </div>

               {/* Metric Cards */}
               <div className="flex flex-col gap-3 mb-6">
                  {GROWTH_METRICS.map((metric, i) => {
                     const Icon = metric.icon;
                     return (
                        <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                           whileHover={{ scale: 1.02, x: 5, transition: { type: "spring", stiffness: 300 } }}
                           transition={{ delay: 0.3 + i * 0.12 }}
                           className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-brand-darker/5 shadow-md cursor-pointer hover:shadow-xl transition-all"
                        >
                           <div className="h-12 w-12 rounded-xl bg-brand-light border border-brand-darker/5 flex items-center justify-center shrink-0">
                              <Icon className="h-5 w-5 text-brand-darker/50" />
                           </div>
                           <div className="flex-1 flex flex-col gap-1">
                              <span className="font-mono text-[8px] font-bold text-brand-darker/60 uppercase tracking-widest">{metric.label}</span>
                              <span className="font-display text-xl font-bold text-brand-darker tracking-tight">{metric.value}</span>
                           </div>
                           <div className="flex items-center gap-1.5 bg-emerald-500/10 px-3 py-1.5 rounded-full">
                              <TrendingUp className="h-3 w-3 text-emerald-600" />
                              <span className="font-mono text-[9px] font-bold text-emerald-600">{metric.trend}</span>
                           </div>
                        </motion.div>
                     );
                  })}
               </div>

               {/* Growth Curve */}
               <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 }}
                  className="bg-white rounded-2xl border border-brand-darker/5 shadow-md p-5"
               >
                  <div className="flex items-center justify-between mb-3">
                     <span className="font-mono text-[8px] font-bold text-brand-darker/60 uppercase tracking-widest">Customer Growth</span>
                     <span className="font-mono text-[8px] font-bold text-emerald-600 uppercase tracking-widest">Exponential</span>
                  </div>
                  <div className="relative h-16">
                     <svg viewBox="0 0 200 50" className="w-full h-full" preserveAspectRatio="none">
                        <motion.path
                           d="M0,45 C30,44 50,42 70,38 C90,34 110,28 130,20 C150,12 170,6 200,2"
                           fill="none" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round"
                           initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                           transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
                        />
                        <motion.path
                           d="M0,45 C30,44 50,42 70,38 C90,34 110,28 130,20 C150,12 170,6 200,2 L200,50 L0,50 Z"
                           fill="url(#growthGradient)" opacity="0.1"
                           initial={{ opacity: 0 }} whileInView={{ opacity: 0.1 }} viewport={{ once: true }}
                           transition={{ delay: 1, duration: 0.8 }}
                        />
                        <defs>
                           <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="var(--brand)" />
                              <stop offset="100%" stopColor="transparent" />
                           </linearGradient>
                        </defs>
                     </svg>
                  </div>
               </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-brand-darker/20 shadow-sm" />
    </section>
  );
}

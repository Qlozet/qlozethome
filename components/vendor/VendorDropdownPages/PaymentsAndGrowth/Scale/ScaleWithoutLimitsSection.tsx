"use client";

import { motion } from "framer-motion";
import { Globe, MapPin, Package, TrendingUp } from "lucide-react";

type ScaleData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type ScaleWithoutLimitsSectionProps = {
  data: ScaleData;
};

const REGIONS = [
  { name: "Lagos, Nigeria", orders: "2,340", flag: "🇳🇬" },
  { name: "London, UK", orders: "890", flag: "🇬🇧" },
  { name: "New York, USA", orders: "1,120", flag: "🇺🇸" },
  { name: "Dubai, UAE", orders: "560", flag: "🇦🇪" }
];

export function ScaleWithoutLimitsSection({ data }: ScaleWithoutLimitsSectionProps) {
  return (
    <section id={data.id} className="relative z-10 bg-white py-16 lg:py-48 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-32">
          {/* Right: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-black/40">{data.badge}</motion.span>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="font-display text-3xl font-medium leading-[1.1] tracking-tighter text-black sm:text-5xl lg:text-6xl">{data.title}</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-lg leading-relaxed text-black/40 lg:text-2xl">{data.description}</motion.p>
            </div>
            <div className="grid gap-4">
              {data.features.map((feature, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }} className="flex items-center gap-6 group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-50 border border-black/5 group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                    <Globe className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <span className="font-display text-lg font-medium text-black/80">{feature}</span>
                </motion.div>
              ))}
            </div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-ui text-sm italic text-black/30">{data.closing}</motion.p>
          </div>

          {/* Left: Global Reach Map */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto w-full max-w-[500px] rounded-[3rem] bg-zinc-50 border border-black/5 shadow-2xl p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-2">
               
               {/* Header */}
               <div className="flex items-center justify-between pb-5 border-b border-black/5 mb-6">
                  <div className="flex items-center gap-3">
                     <div className="h-8 w-8 flex items-center justify-center rounded-xl bg-black text-white">
                        <Globe className="h-3.5 w-3.5" />
                     </div>
                     <span className="font-display text-[10px] font-bold uppercase tracking-widest text-black">Global Reach</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-black/5 shadow-sm">
                     <TrendingUp className="h-3 w-3 text-emerald-500" />
                     <span className="font-mono text-[8px] font-bold text-emerald-600 uppercase tracking-widest">Expanding</span>
                  </div>
               </div>

               {/* Stats Row */}
               <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                     { label: "Regions", value: "4" },
                     { label: "Total Orders", value: "4.9K" },
                     { label: "Growth", value: "+180%" }
                  ].map((stat, i) => (
                     <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.08 }}
                        className="bg-white rounded-xl border border-black/5 shadow-sm p-3 text-center cursor-pointer hover:shadow-md transition-shadow"
                     >
                        <span className="font-display text-lg font-bold text-black block">{stat.value}</span>
                        <span className="font-mono text-[7px] font-bold text-black/30 uppercase tracking-widest">{stat.label}</span>
                     </motion.div>
                  ))}
               </div>

               {/* Region List */}
               <div className="flex flex-col gap-3">
                  <span className="font-mono text-[8px] font-bold text-zinc-400 uppercase tracking-widest">Active Markets</span>
                  {REGIONS.map((region, i) => (
                     <motion.div key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        whileHover={{ scale: 1.02, x: 5, transition: { type: "spring", stiffness: 300 } }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="flex items-center gap-4 p-3.5 rounded-xl bg-white border border-black/5 shadow-sm cursor-pointer hover:shadow-md transition-all"
                     >
                        <span className="text-xl">{region.flag}</span>
                        <div className="flex-1 flex flex-col gap-0.5">
                           <span className="font-display text-[10px] font-bold text-black uppercase tracking-wider">{region.name}</span>
                           <div className="flex items-center gap-1.5">
                              <MapPin className="h-2.5 w-2.5 text-black/20" />
                              <span className="font-mono text-[8px] text-black/40 uppercase tracking-widest">Active</span>
                           </div>
                        </div>
                        <div className="flex items-center gap-1.5">
                           <Package className="h-3 w-3 text-black/20" />
                           <span className="font-mono text-[9px] font-bold text-black/60">{region.orders}</span>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-black/10 shadow-sm" />
    </section>
  );
}

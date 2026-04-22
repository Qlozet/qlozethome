"use client";

import { motion } from "framer-motion";
import { Eye, Star, Megaphone, Award, Sparkles } from "lucide-react";

type VisibilityData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type PromotionVisibilitySectionProps = {
  data: VisibilityData;
};

const PROMO_FEATURES = [
  { label: "Featured Listing", desc: "Top placement in search results", icon: Star, active: true },
  { label: "Campaign Boost", desc: "Targeted buyer audience reach", icon: Megaphone, active: true },
  { label: "Badge System", desc: "Earn trust through performance", icon: Award, active: false }
];

export function PromotionVisibilitySection({ data }: PromotionVisibilitySectionProps) {
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
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-50 border border-black/5 group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                    <Eye className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <span className="font-display text-lg font-medium text-black/80">{feature}</span>
                </motion.div>
              ))}
            </div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-ui text-sm italic text-black/30">{data.closing}</motion.p>
          </div>

          {/* Left: Promotion Dashboard */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto w-full max-w-[500px] rounded-[3rem] bg-zinc-50 border border-black/5 shadow-2xl p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-2">
               
               {/* Header */}
               <div className="flex items-center justify-between pb-5 border-b border-black/5 mb-6">
                  <div className="flex items-center gap-3">
                     <div className="h-8 w-8 flex items-center justify-center rounded-xl bg-black text-white">
                        <Megaphone className="h-3.5 w-3.5" />
                     </div>
                     <span className="font-display text-[10px] font-bold uppercase tracking-widest text-black">Promotion Tools</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-black/5 shadow-sm">
                     <Sparkles className="h-3 w-3 text-amber-500" />
                     <span className="font-mono text-[8px] font-bold text-amber-600 uppercase tracking-widest">Boost</span>
                  </div>
               </div>

               {/* Visibility Meter */}
               <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                  className="bg-white rounded-2xl border border-black/5 shadow-md p-5 mb-5 text-center"
               >
                  <span className="font-mono text-[8px] font-bold text-black/40 uppercase tracking-widest block mb-3">Profile Visibility Score</span>
                  <div className="flex items-center justify-center gap-4 mb-3">
                     <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, type: "spring" }}
                        className="font-display text-5xl font-bold text-black tracking-tighter"
                     >87</motion.span>
                     <span className="font-mono text-[10px] font-bold text-black/20 uppercase">/100</span>
                  </div>
                  <div className="h-2 bg-zinc-100 rounded-full overflow-hidden mx-auto max-w-[200px]">
                     <motion.div initial={{ width: 0 }} whileInView={{ width: "87%" }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                        className="h-full bg-black rounded-full"
                     />
                  </div>
               </motion.div>

               {/* Promo Features */}
               <div className="flex flex-col gap-3">
                  {PROMO_FEATURES.map((feat, i) => {
                     const Icon = feat.icon;
                     return (
                        <motion.div key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                           whileHover={{ scale: 1.02, x: 5, transition: { type: "spring", stiffness: 300 } }}
                           transition={{ delay: 0.4 + i * 0.1 }}
                           className={`flex items-center gap-4 p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${feat.active ? 'bg-white border-black/5 shadow-md hover:shadow-xl' : 'bg-zinc-50 border-black/[0.03] opacity-50'}`}
                        >
                           <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 ${feat.active ? 'bg-black text-white' : 'bg-zinc-100 text-black/20'}`}>
                              <Icon className="h-4 w-4" />
                           </div>
                           <div className="flex-1 flex flex-col gap-0.5">
                              <span className="font-display text-[10px] font-bold text-black uppercase tracking-wider">{feat.label}</span>
                              <span className="font-ui text-[9px] text-black/40">{feat.desc}</span>
                           </div>
                           <div className={`px-3 py-1 rounded-full ${feat.active ? 'bg-emerald-500/10' : 'bg-zinc-100'}`}>
                              <span className={`font-mono text-[8px] font-bold uppercase tracking-widest ${feat.active ? 'text-emerald-600' : 'text-black/20'}`}>
                                 {feat.active ? 'Active' : 'Coming Soon'}
                              </span>
                           </div>
                        </motion.div>
                     );
                  })}
               </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-black/10 shadow-sm" />
    </section>
  );
}

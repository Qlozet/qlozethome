"use client";

import { motion } from "framer-motion";
import { Workflow, Store, Send, CheckCircle2, ArrowRight } from "lucide-react";

const iconMap: any = { Workflow, Store, Send };

type ProductionData = {
  badge: string;
  title: string;
  description: string;
  features: { title: string; icon: string }[];
};

type ProductionSectionProps = { data: ProductionData };

const PIPELINE = [
  { step: "Design Finalized", status: "Complete", icon: CheckCircle2, image: "/image/custom-outfit-4.webp" },
  { step: "Matched to Tailor", status: "Complete", icon: Store, image: "/image/seun.png" },
  { step: "In Production", status: "Active", icon: Workflow, image: "/image/tailorwork.png" }
];

export function ProductionSection({ data }: ProductionSectionProps) {
  return (
    <section className="relative w-full bg-zinc-50 py-14 lg:py-48" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-32">
          {/* Left: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-black/40">{data.badge}</motion.span>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="font-display text-4xl font-medium leading-[1.1] tracking-tighter text-black sm:text-6xl lg:text-7xl">{data.title}</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-lg leading-relaxed text-black/40 lg:text-2xl">{data.description}</motion.p>
            </div>
            <div className="flex flex-col gap-5">
              {data.features.map((feature, i) => {
                const Icon = iconMap[feature.icon] || CheckCircle2;
                return (
                  <motion.div key={feature.title} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }} className="flex items-center gap-6 group">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-black/5 group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <span className="font-display text-lg font-medium text-black/80">{feature.title}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Production Pipeline */}
          <div className="relative mt-8 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto w-full max-w-[520px] rounded-[3rem] bg-white border border-black/5 shadow-2xl p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-2">
               
               {/* Header */}
               <div className="flex items-center justify-between pb-5 border-b border-black/5 mb-6">
                  <div className="flex items-center gap-3">
                     <div className="h-8 w-8 flex items-center justify-center rounded-xl bg-black text-white">
                        <Send className="h-3.5 w-3.5" />
                     </div>
                     <span className="font-display text-[10px] font-bold uppercase tracking-widest text-black">Production Pipeline</span>
                  </div>
                  <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                     <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                     <span className="font-mono text-[8px] font-bold text-emerald-600 uppercase tracking-widest">In Progress</span>
                  </div>
               </div>

               {/* Pipeline Steps */}
               <div className="flex flex-col gap-0">
                  {PIPELINE.map((step, i) => {
                     const Icon = step.icon;
                     const isLast = i === PIPELINE.length - 1;
                     const isActive = step.status === "Active";
                     return (
                        <div key={i}>
                           <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              whileHover={{ scale: 1.02, x: 5, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.3 + i * 0.15 }}
                              className={`flex items-center gap-4 p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${isActive ? 'bg-black text-white border-black shadow-2xl' : 'bg-white border-black/5 shadow-md hover:shadow-xl'}`}
                           >
                              <div className="h-14 w-14 rounded-xl overflow-hidden shrink-0 border border-black/5 shadow-sm">
                                 <img src={step.image} alt={step.step} className="w-full h-full object-cover" />
                              </div>
                              <div className="flex-1 flex flex-col gap-1">
                                 <span className={`font-display text-[10px] font-bold uppercase tracking-wider ${isActive ? 'text-white' : 'text-black'}`}>{step.step}</span>
                                 <div className="flex items-center gap-1.5">
                                    <div className={`h-1.5 w-1.5 rounded-full ${isActive ? 'bg-emerald-400 animate-pulse' : 'bg-emerald-500'}`} />
                                    <span className={`font-mono text-[8px] font-bold uppercase tracking-widest ${isActive ? 'text-white/60' : 'text-emerald-600'}`}>{step.status}</span>
                                 </div>
                              </div>
                              <div className={`h-8 w-8 rounded-full flex items-center justify-center ${isActive ? 'bg-white/10' : 'bg-zinc-50 border border-black/5'}`}>
                                 <Icon className={`h-4 w-4 ${isActive ? 'text-white/60' : 'text-emerald-500'}`} />
                              </div>
                           </motion.div>
                           {!isLast && (
                              <div className="flex justify-center py-1.5">
                                 <ArrowRight className="h-3 w-3 text-black/10 rotate-90" />
                              </div>
                           )}
                        </div>
                     );
                  })}
               </div>

               {/* Progress */}
               <div className="mt-6 pt-5 border-t border-black/5">
                  <div className="flex items-center justify-between mb-2">
                     <span className="font-mono text-[8px] font-bold text-black/40 uppercase tracking-widest">Production Progress</span>
                     <span className="font-mono text-[9px] font-bold text-black/60">67%</span>
                  </div>
                  <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
                     <motion.div initial={{ width: 0 }} whileInView={{ width: "67%" }} viewport={{ once: true }} transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                        className="h-full bg-black rounded-full" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

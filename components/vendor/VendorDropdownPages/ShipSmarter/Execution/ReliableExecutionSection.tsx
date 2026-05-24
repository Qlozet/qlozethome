"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, ListChecks, LucideIcon, Target } from "lucide-react";

type LogisticsData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type ReliableExecutionSectionProps = {
  data: LogisticsData;
};

export function ReliableExecutionSection({ data }: ReliableExecutionSectionProps) {
  return (
    <section id={data.id} className="relative z-10 bg-white py-24 sm:py-32 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-24">
          {/* Left: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-black/40"
              >
                {data.badge}
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-[#3A3A3A] sm:text-5xl lg:text-6xl"
              >
                {data.title}
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-base leading-relaxed text-[#3A3A3A]/40 sm:text-lg"
              >
                {data.description}
              </motion.p>
            </div>

            <div className="grid gap-4">
              {data.features.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F9F9F8] border border-[#3A3A3A]/5 group-hover:bg-[#3A3A3A] group-hover:text-white transition-all shadow-sm">
                    <ShieldCheck className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <span className="font-ui text-sm font-medium text-[#3A3A3A]/70 sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="font-ui text-sm italic text-black/30"
            >
               {data.closing}
            </motion.p>
          </div>

          {/* Right: Performance Metrics Dashboard Mockup (Mobile: Second) */}
          <div className="relative lg:w-1/2 flex items-center justify-center">
             <div className="relative h-[480px] lg:h-[580px] w-full max-w-md rounded-[3rem] bg-zinc-50 border border-black/5 shadow-2xl overflow-hidden flex flex-col p-8 gap-6 group">
                
                {/* Clean Background Grid */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                   <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                </div>

                <div className="relative z-10 flex flex-col gap-2 mb-2">
                   <span className="font-display text-[9px] font-bold text-black uppercase tracking-[0.3em]">Execution Metrics</span>
                   <span className="font-ui text-xs text-black/50">Last 30 Days Global Performance</span>
                </div>

                {/* Primary Metric: On-Time Delivery */}
                <div className="relative z-10 bg-white rounded-3xl border border-black/5 shadow-lg p-6 flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-black flex items-center justify-center">
                             <Target className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-display text-xs font-bold text-black uppercase tracking-widest">On-Time Success</span>
                       </div>
                       <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 1, 0.5, 1] }}
                          transition={{ duration: 4, repeat: Infinity }}
                          className="px-2 py-1 bg-emerald-50 text-emerald-600 rounded-md border border-emerald-100 font-mono text-[10px] font-bold tracking-widest uppercase"
                       >
                          +2.4%
                       </motion.div>
                    </div>

                    <div className="flex items-end gap-2">
                       <span className="font-display text-5xl lg:text-6xl font-bold text-black tracking-tighter">99.9</span>
                       <span className="font-display text-2xl font-bold text-black/40 mb-2">%</span>
                    </div>

                    {/* Mini Sparkline Chart */}
                    <div className="h-12 w-full flex items-end gap-1 opacity-80">
                        {[40, 60, 50, 80, 70, 90, 85, 95, 90, 98, 99].map((h, i) => (
                           <motion.div 
                              key={i}
                              initial={{ height: 0 }}
                              whileInView={{ height: `${h}%` }}
                              transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
                              className="flex-1 bg-black rounded-t-sm"
                           />
                        ))}
                    </div>
                </div>

                {/* Grid of Secondary Metrics */}
                <div className="relative z-10 grid grid-cols-2 gap-4 flex-1">
                   {/* Zero Damage Rate */}
                   <div className="bg-white rounded-3xl border border-black/5 shadow-md p-5 flex flex-col justify-between">
                      <div className="flex items-center gap-2">
                         <ShieldCheck className="h-4 w-4 text-black/40" />
                         <span className="font-display text-[9px] font-bold text-black/40 uppercase tracking-widest">Damage Rate</span>
                      </div>
                      <div className="flex flex-col">
                         <span className="font-display text-3xl font-bold text-black">0.0%</span>
                         <span className="font-ui text-[10px] text-emerald-600 font-bold">Perfect Score</span>
                      </div>
                   </div>

                   {/* Routing Latency */}
                   <div className="bg-white rounded-3xl border border-black/5 shadow-md p-5 flex flex-col justify-between">
                      <div className="flex items-center gap-2">
                         <ListChecks className="h-4 w-4 text-black/40" />
                         <span className="font-display text-[9px] font-bold text-black/40 uppercase tracking-widest">Processing Time</span>
                      </div>
                      <div className="flex flex-col">
                         <div className="flex items-end gap-1">
                            <span className="font-display text-3xl font-bold text-black">1.2</span>
                            <span className="font-display text-xs font-bold text-black/40 mb-1">hrs</span>
                         </div>
                         <span className="font-ui text-[10px] text-black/40">From order to ship</span>
                      </div>
                   </div>
                </div>

                {/* Footer Validation */}
                <div className="relative z-10 flex items-center justify-between mt-auto pt-2 border-t border-black/5">
                   <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-black" />
                      <span className="font-display text-[8px] font-bold text-black/40 uppercase tracking-widest">SLA Verified</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 bg-black rounded-full animate-pulse" />
                      <span className="font-display text-[8px] font-bold text-black uppercase tracking-widest">Real-Time</span>
                   </div>
                </div>

             </div>
          </div>
        </div>
      </div>
      
      {/* Spine Marker */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-black/10 shadow-sm" />
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Zap, RefreshCw, Layers, LucideIcon, Settings2 } from "lucide-react";

type LogisticsData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type LogisticsSimpleSectionProps = {
  data: LogisticsData;
};

export function LogisticsSimpleSection({ data }: LogisticsSimpleSectionProps) {
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
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#111111]/40"
              >
                {data.badge}
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-[#111111] sm:text-5xl lg:text-6xl"
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
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-light border border-brand-darker/5 group-hover:bg-brand-darker group-hover:text-brand-light transition-all shadow-sm">
                    <Zap className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <span className="font-ui text-sm font-medium text-[#111111]/70 sm:text-base">{feature}</span>
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

          {/* Right: Automation Dashboard Mockup (Mobile: Second) */}
          <div className="relative lg:w-1/2 flex items-center justify-center">
             <div className="relative h-[480px] lg:h-[580px] w-full max-w-md rounded-[3rem] bg-brand-light border border-brand-darker/5 shadow-2xl p-8 lg:p-10 overflow-hidden flex flex-col justify-center gap-8 group">
                
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                   <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#1e1008 1px, transparent 1px), linear-gradient(90deg, #1e1008 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                </div>
 
                {/* Dashboard Header: Auto-Pilot Toggle */}
                <div className="relative z-10 flex flex-col gap-6 w-full">
                   <div className="flex items-center justify-between bg-white p-6 rounded-3xl border border-brand-darker/5 shadow-xl shadow-brand-darker/5">
                      <div className="flex flex-col gap-1">
                         <span className="font-display text-sm font-bold text-brand-darker uppercase tracking-wider">Logistics Auto-Pilot</span>
                         <span className="font-ui text-[10px] text-[#111111]/40 uppercase tracking-widest">System Handling All Tasks</span>
                      </div>
                      
                      {/* Animated Toggle Switch */}
                      <div className="relative w-16 h-8 bg-brand-darker rounded-full p-1 cursor-pointer shadow-inner">
                         <motion.div 
                            initial={{ x: 0 }}
                            animate={{ x: 32 }}
                            transition={{ duration: 0.5, type: "spring", stiffness: 300, repeat: Infinity, repeatType: "mirror", repeatDelay: 10 }}
                            className="w-6 h-6 bg-white rounded-full shadow-md"
                         />
                         <div className="absolute inset-0 flex items-center justify-end pr-3 pointer-events-none">
                             <div className="h-1.5 w-1.5 rounded-full bg-white opacity-80 animate-pulse" />
                         </div>
                      </div>
                   </div>
                </div>

                {/* Complex Tasks Interface (Being Automated) */}
                 <div className="relative z-10 flex flex-col gap-3 w-full">
                    <span className="font-display text-[9px] font-bold text-[#111111]/40 uppercase tracking-[0.3em] pl-2 mb-2">Automated Background Tasks</span>
                    
                    {[
                       { icon: RefreshCw, label: 'Finding Couriers', sub: 'Comparing 14 rates...', active: true },
                       { icon: Layers, label: 'Printing Labels', sub: 'Generating batch #892', active: true },
                       { icon: Zap, label: 'Status Updates', sub: 'Syncing with API', active: true }
                    ].map((item, i) => (
                       <motion.div 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + (i * 0.1) }}
                          className="flex items-center justify-between p-4 rounded-2xl bg-white border border-brand-darker/5 group/task relative overflow-hidden"
                       >
                          {/* Background processing sweep */}
                          <motion.div 
                             animate={{ left: ["-100%", "200%"] }}
                             transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
                             className="absolute top-0 bottom-0 w-[20%] bg-gradient-to-r from-transparent via-brand-darker/[0.03] to-transparent"
                          />
 
                          <div className="flex items-center gap-4 relative z-10">
                             <div className="h-8 w-8 rounded-full bg-zinc-100 flex items-center justify-center border border-brand-darker/5">
                                <div className="h-4 w-4 bg-brand-darker/10 rounded-full" />
                             </div>
                             <div className="flex flex-col">
                                <span className="font-display text-[10px] font-bold text-brand-darker uppercase tracking-wider">{item.label}</span>
                                <span className="font-mono text-[8px] text-[#111111]/40 uppercase">{item.sub}</span>
                             </div>
                          </div>
 
                          {/* Success Check */}
                          <motion.div 
                             animate={{ scale: [0.8, 1, 0.8], opacity: [0.5, 1, 0.5] }}
                             transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                             className="h-5 w-5 rounded-full bg-brand-darker flex items-center justify-center relative z-10"
                          >
                            <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                         </motion.div>
                      </motion.div>
                   ))}
                </div>

                 {/* Footer Automation Metrics */}
                 <div className="absolute bottom-10 px-10 w-full flex justify-between items-end">
                    <div className="flex flex-col gap-1">
                       <span className="font-display text-[7px] font-bold text-[#111111]/20 uppercase tracking-[0.3em]">Manual Effort</span>
                       <span className="font-display text-[9px] font-medium text-brand-darker uppercase tracking-widest tabular-nums font-bold">Reduced by 98%</span>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                       <span className="font-display text-[7px] font-bold text-[#111111]/20 uppercase tracking-[0.3em]">System</span>
                       <p className="font-display text-[9px] text-[#111111]/50 font-bold uppercase tracking-widest">Handling Delivery</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
      
      {/* Spine Marker */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-brand-darker/10 shadow-sm" />
    </section>
  );
}

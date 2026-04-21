"use client";

import { motion } from "framer-motion";
import { History, LineChart, FileClock } from "lucide-react";

type SectionData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
};

type HistorySectionProps = {
  data: SectionData;
};

export function HistorySection({ data }: HistorySectionProps) {
  return (
    <section id={data.id} className="relative z-10 bg-zinc-50 py-16 lg:py-48 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-32">
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
                className="font-display text-3xl font-medium leading-[1.1] tracking-tighter text-black sm:text-5xl lg:text-6xl"
              >
                {data.title}
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-lg leading-relaxed text-black/40 lg:text-2xl"
              >
                {data.description}
              </motion.p>
            </div>

            <div className="grid gap-4">
              {data.features.map((feature, i) => {
                const icons = [History, LineChart, FileClock];
                const Icon = icons[i % icons.length];
                
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-6 group"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-black/5 group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <span className="font-display text-lg font-medium text-black/80">{feature}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: History Timeline Visual */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto min-h-[380px] sm:h-[500px] lg:h-[600px] w-full max-w-xl rounded-[2rem] sm:rounded-[3.5rem] bg-white shadow-2xl p-6 sm:p-10 flex border border-black/5 overflow-hidden">
               
               {/* Animated Timeline Line */}
               <div className="absolute left-10 sm:left-14 top-10 bottom-10 w-px bg-black/10">
                  <motion.div 
                     animate={{ height: ['0%', '100%'] }}
                     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                     className="w-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                  />
               </div>

               {/* Timeline Events */}
               <div className="flex flex-col justify-between w-full relative z-10 pl-16">
                  
                  {[
                     { date: "Oct 2025", order: "ORD-941", note: "Shoulder adjusted +1cm per request.", status: "Archived", opacity: 0.4 },
                     { date: "Dec 2025", order: "ORD-102", note: "Winter coat fitting. Sleeves +2cm.", status: "Archived", opacity: 0.7 },
                     { date: "Mar 2026", order: "ORD-334", note: "Base profile updated. Weight fluctuation.", status: "Current", opacity: 1 },
                  ].map((event, i) => (
                     <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: event.opacity, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (i * 0.2) }}
                        className="relative bg-zinc-50 border border-black/5 rounded-2xl p-4 shadow-sm group hover:border-black/20 hover:opacity-100 transition-all"
                     >
                        {/* Timeline Node Point */}
                        <div className="absolute -left-[40px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border border-black/10 flex items-center justify-center">
                           <div className={`w-2 h-2 rounded-full ${event.status === 'Current' ? 'bg-emerald-500' : 'bg-black/20'}`} />
                        </div>

                        <div className="flex justify-between items-start mb-2">
                           <span className="font-mono text-[9px] text-zinc-500 font-bold uppercase tracking-widest">{event.date}</span>
                           <span className={`font-mono text-[8px] uppercase tracking-widest px-2 py-0.5 rounded-full border ${event.status === 'Current' ? 'border-emerald-200 bg-emerald-50 text-emerald-600' : 'border-black/10 bg-black/5 text-black/40'}`}>
                              {event.status}
                           </span>
                        </div>
                        
                        <div className="flex flex-col gap-1">
                           <span className="font-display text-sm font-bold text-black">{event.order}</span>
                           <span className="font-ui text-xs text-black/60 italic">"{event.note}"</span>
                        </div>
                     </motion.div>
                  ))}

               </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

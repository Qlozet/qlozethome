"use client";

import { motion } from "framer-motion";
import { Zap, RefreshCw, CheckCircle2, LucideIcon, Target, MousePointer2, DollarSign } from "lucide-react";

type SimplicityData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type FinancialSimplicitySectionProps = {
  data: SimplicityData;
};

export function FinancialSimplicitySection({ data }: FinancialSimplicitySectionProps) {
  return (
    <section id={data.id} className="relative z-10 bg-white py-24 sm:py-32 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-24">
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
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-light border border-brand-darker/5 group-hover:bg-brand-darker group-hover:text-brand-light transition-all shadow-sm">
                    <Zap className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <span className="font-ui text-sm font-medium text-brand-darker/80 sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="font-ui text-sm italic text-[#111111]/40"
            >
               {data.closing}
            </motion.p>
          </div>

          {/* Right: The Clarity Filter */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto h-[500px] lg:h-[600px] w-full max-w-lg rounded-[3.5rem] bg-brand-light border border-brand-darker/5 shadow-2xl overflow-hidden flex items-center justify-center">
              {/* Background Cloud (Chaos) */}
              <div className="absolute inset-0 opacity-[0.05]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rotate-12 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.1)_0%,transparent_70%)]" />
              </div>

              {/* The Filter Interface */}
              <div className="relative h-full w-full flex items-center">
                {/* Chaotic Input Side (Left) */}
                <div className="w-1/2 h-full relative overflow-hidden flex items-center justify-center pr-16">
                  {[1, 2, 3, 4, 5, 6].map((p, i) => (
                    <motion.div 
                      key={i}
                      animate={{ 
                        x: [20, 150], 
                        y: [Math.random() * 400 - 200, Math.random() * 400 - 200],
                        opacity: [0, 0.4, 0]
                      }}
                      transition={{ 
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 3
                      }}
                      className="absolute h-8 w-8 rounded-lg border border-brand-darker/10 flex items-center justify-center"
                    >
                      <DollarSign className="h-3 w-3 text-brand-darker/30" />
                    </motion.div>
                  ))}
                  <div className="text-center rotate-[-90deg]">
                     <span className="font-display text-[8px] font-bold text-brand-darker/30 uppercase tracking-[0.5em]">Raw Transactions</span>
                  </div>
                </div>

                {/* The Lens Pane */}
                <div className="absolute left-1/2 -translate-x-1/2 h-4/5 w-1 bg-gradient-to-b from-transparent via-brand-darker/10 to-transparent z-20" />
                <motion.div 
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={{ once: true }}
                  className="absolute left-1/2 -translate-x-1/2 h-3/5 w-32 bg-white/40 backdrop-blur-xl border border-brand-darker/5 shadow-3xl rounded-[2rem] z-30 flex flex-col items-center justify-center gap-4 overflow-hidden"
                >
                   <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                   <div className="relative">
                      <Zap className="h-10 w-10 text-brand-darker" strokeWidth={1.5} />
                      <motion.div 
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-brand-darker/5 blur-xl"
                      />
                   </div>
                   <div className="h-px w-12 bg-brand-darker/10" />
                   <span className="font-display text-[7px] font-bold text-brand-darker uppercase tracking-[0.4em]">Filter Core</span>
                </motion.div>

                {/* Ordered Output Side (Right) */}
                <div className="w-1/2 h-full relative flex items-center justify-center overflow-hidden pl-16">
                   <motion.div 
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.5 }}
                     className="flex flex-col items-center gap-6"
                   >
                      <div className="flex flex-col items-center">
                        <span className="font-display text-[9px] font-bold text-emerald-500 uppercase tracking-[0.4em] mb-2">Verified Net</span>
                        <span className="font-display text-3xl font-medium tracking-tight text-brand-darker">$12,480.00</span>
                      </div>
                      <div className="flex gap-4">
                        {[1, 2, 3].map((b) => (
                           <motion.div 
                             key={b}
                             initial={{ scale: 0 }}
                             whileInView={{ scale: 1 }}
                             viewport={{ once: true }}
                             transition={{ delay: 0.8 + b * 0.1 }}
                             className="h-8 w-8 rounded-full bg-white border border-brand-darker/5 shadow-md flex items-center justify-center"
                           >
                              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                           </motion.div>
                        ))}
                      </div>
                   </motion.div>

                   {/* Background Telemetry Sync Lines */}
                   <div className="absolute inset-0 py-20 px-10 flex flex-col justify-between opacity-5">
                      {[1, 2, 3, 4].map((l) => (
                        <div key={l} className="h-px w-full bg-brand-darker" />
                      ))}
                   </div>
                </div>
              </div>

              {/* Top/Bottom HUD Indicators */}
              <div className="absolute top-10 left-10">
                 <div className="flex items-center gap-2">
                    <div className="h-1 w-1 rounded-full bg-brand-darker/20" />
                    <span className="font-display text-[8px] text-zinc-400 font-bold uppercase tracking-widest">Simplification Delta: 99.8%</span>
                 </div>
              </div>

              <div className="absolute bottom-10 right-10">
                 <span className="font-display text-[8px] text-zinc-400 font-bold uppercase tracking-widest">Auto-Harmonization Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Spine Marker */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-brand-darker/20 shadow-sm" />
    </section>
  );
}

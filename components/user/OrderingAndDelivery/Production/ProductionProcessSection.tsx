"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock, Ruler } from "lucide-react";

type SectionData = {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  footer: string;
};

type ProductionProcessSectionProps = {
  data: SectionData;
};

export function ProductionProcessSection({ data }: ProductionProcessSectionProps) {
  const steps = [
    { title: "Order received", status: "complete", time: "10:24 AM" },
    { title: "In production", status: "active", time: "In Progress" },
    { title: "Quality check", status: "pending", time: "Est: 2h" },
    { title: "Ready for delivery", status: "pending", time: "Est: Tomorrow" },
  ];

  return (
    <section id="production" className="relative w-full bg-white py-24 lg:py-40" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-32">
          {/* Left: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.5em] text-black/40"
              >
                {data.badge}
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="font-display text-4xl font-medium leading-[1.1] tracking-tighter text-black sm:text-6xl"
              >
                {data.title}
                <span className="block mt-2 text-2xl text-black/40 font-ui font-normal tracking-normal">{data.subtitle}</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-lg leading-relaxed text-black/60 lg:text-2xl"
              >
                {data.description}
              </motion.p>
            </div>

            <div className="flex flex-col gap-6">
              {data.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-4">
                   <div className="h-1.5 w-1.5 rounded-full bg-black/20" />
                   <span className="font-display text-[10px] font-bold uppercase tracking-widest text-black/60">{feature}</span>
                </div>
              ))}
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-display text-sm font-medium italic text-black/30"
            >
               {data.footer}
            </motion.p>
          </div>

          {/* Right: The Production Timeline Visual */}
          <div className="relative mt-20 lg:mt-0 lg:w-1/2">
             <div className="relative mx-auto w-full max-w-md p-8 lg:p-12">
                {/* Background Board */}
                <div className="relative rounded-[3rem] bg-zinc-50 border border-black/5 p-8 shadow-2xl overflow-hidden min-h-[500px] flex flex-col gap-8">
                   {/* Digital Status Header */}
                   <div className="flex items-center justify-between">
                      <div className="flex flex-col gap-1">
                         <span className="font-mono text-[9px] uppercase tracking-widest text-black/40">Status Monitor V.01</span>
                         <span className="font-display text-xs font-bold text-black italic">Live Feed</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                         <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                         <span className="font-display text-[8px] font-bold uppercase tracking-widest text-emerald-600">Active</span>
                      </div>
                   </div>

                   {/* Vertical Timeline */}
                   <div className="relative flex flex-col gap-12 pl-12 pr-4 pt-4">
                      {/* Vertical Progress Line */}
                      <div className="absolute left-[2.35rem] top-8 bottom-8 w-px bg-black/5" />
                      
                      {steps.map((step, i) => (
                        <motion.div 
                           key={i}
                           initial={{ opacity: 0, x: -20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ delay: i * 0.2 }}
                           className="relative flex items-center justify-between group"
                        >
                           {/* Step Indicator */}
                           <div className="absolute -left-[1.85rem] flex h-8 w-8 items-center justify-center rounded-full bg-white border border-black/5 shadow-sm z-10">
                              {step.status === 'complete' ? <CheckCircle2 className="h-4 w-4 text-emerald-500" /> : 
                               step.status === 'active' ? <Clock className="h-4 w-4 text-black animate-spin-slow" /> : 
                               <Circle className="h-4 w-4 text-black/10" />}
                           </div>

                           <div className={`flex flex-col gap-0.5 ${step.status === 'pending' ? 'opacity-30' : 'opacity-100'}`}>
                              <span className="font-display text-sm font-bold text-black italic lg:text-base">{step.title}</span>
                              <span className="font-mono text-[9px] text-black/40 uppercase tracking-widest">{step.time}</span>
                           </div>

                           {step.status === 'active' && (
                              <motion.div 
                                 animate={{ scale: [1, 1.1, 1] }}
                                 transition={{ duration: 2, repeat: Infinity }}
                                 className="h-10 w-10 shrink-0 rounded-full bg-black/5 flex items-center justify-center border border-black/5"
                              >
                                 <Ruler className="h-4 w-4 text-black/40" />
                              </motion.div>
                           )}
                        </motion.div>
                      ))}
                   </div>

                   {/* Footer Status Byte */}
                   <div className="mt-auto pt-6 border-t border-black/5 flex justify-between items-end">
                      <div className="flex flex-col gap-2">
                         <div className="flex gap-1">
                            {[...Array(4)].map((_, i) => (
                               <div key={i} className={`h-1 w-6 rounded-full ${i <= 1 ? 'bg-emerald-500' : 'bg-black/5'}`} />
                            ))}
                         </div>
                         <span className="font-display text-[9px] font-bold uppercase tracking-widest text-black/40">55% Optimized Process</span>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                         <span className="font-mono text-[9px] text-black">BATCH #72-A</span>
                      </div>
                   </div>
                </div>

                {/* Floating Tape Accent */}
                <div className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 bg-zinc-400/20 backdrop-blur-md rotate-2 z-20" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, CheckSquare } from "lucide-react";

type SectionData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
};

type ConfidenceSectionProps = {
  data: SectionData;
};

export function ConfidenceSection({ data }: ConfidenceSectionProps) {
  return (
    <section id={data.id} className="relative z-10 bg-white py-16 lg:py-48 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col gap-12 lg:flex-row-reverse lg:items-center lg:gap-32">
          {/* Right/Top: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span 
                initial={{ opacity: 0, x: 20 }}
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
                 const icons = [AlertTriangle, TrendingDown, CheckSquare];
                 const Icon = icons[i % icons.length];
                 return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
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

          {/* Left/Bottom: Analytics/Error Reduction Chart */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto h-[400px] sm:h-[500px] lg:h-[600px] w-full max-w-xl rounded-[2rem] sm:rounded-[3.5rem] bg-zinc-50 border border-black/5 shadow-2xl p-4 sm:p-6 lg:p-10 flex flex-col pt-10 sm:pt-12 overflow-hidden">
               
               {/* Background Grid */}
               <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

               {/* Chart Container */}
               <div className="relative flex-1 bg-white border border-black/5 rounded-3xl shadow-sm p-6 flex flex-col z-10 w-full mt-4">
                  
                  {/* Header */}
                  <div className="flex justify-between items-end mb-8">
                     <div className="flex flex-col gap-1">
                        <span className="font-display text-[10px] uppercase tracking-widest text-black/40 font-bold">Alteration Rate</span>
                        <div className="flex items-center gap-2">
                           <span className="font-display text-3xl font-medium text-black">1.2%</span>
                           <div className="flex items-center gap-1 bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full border border-emerald-100">
                              <TrendingDown className="h-3 w-3" />
                              <span className="font-mono text-[9px] font-bold">84%</span>
                           </div>
                        </div>
                     </div>
                     <span className="font-mono text-[9px] text-black/30 uppercase tracking-widest">Post-Integration</span>
                  </div>

                  {/* Graph Area */}
                  <div className="flex-1 relative border-l border-b border-black/10 flex items-end">
                     
                     {/* Y-Axis labels */}
                     <div className="absolute -left-6 inset-y-0 flex flex-col justify-between text-[8px] font-mono text-black/30">
                        <span>15%</span>
                        <span>10%</span>
                        <span>5%</span>
                        <span>0%</span>
                     </div>

                     {/* The Drop Line (Error Rate going down) */}
                     <svg className="absolute inset-x-0 bottom-0 w-full h-[80%] overflow-visible">
                        <defs>
                           <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#ef4444" />
                              <stop offset="50%" stopColor="#eab308" />
                              <stop offset="100%" stopColor="#10b981" />
                           </linearGradient>
                           <linearGradient id="fillGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                           </linearGradient>
                        </defs>
                        
                        {/* Area Fill */}
                        <motion.path 
                           d="M 0,20 Q 50,20 100,100 T 200,180 T 300,220 L 300,300 L 0,300 Z"
                           fill="url(#fillGradient)"
                           initial={{ opacity: 0 }}
                           whileInView={{ opacity: 1 }}
                           viewport={{ once: true }}
                           transition={{ duration: 1, delay: 0.5 }}
                        />

                        {/* Stroke Line */}
                        <motion.path 
                           d="M 0,20 Q 50,20 100,100 T 200,180 T 300,220"
                           fill="none"
                           stroke="url(#gradientLine)"
                           strokeWidth="4"
                           strokeLinecap="round"
                           initial={{ pathLength: 0 }}
                           whileInView={{ pathLength: 1 }}
                           viewport={{ once: true }}
                           transition={{ duration: 2, ease: "easeOut" }}
                        />
                     </svg>

                     {/* Data Point (Current State) */}
                     <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 2, type: "spring" }}
                        className="absolute right-[5%] bottom-[12%] h-4 w-4 bg-white border-4 border-emerald-500 rounded-full shadow-lg z-20"
                     />
                  </div>

                  {/* X-Axis labels */}
                  <div className="flex justify-between mt-4 text-[8px] font-mono text-black/30">
                     <span>Manual</span>
                     <span>Transition</span>
                     <span className="text-emerald-600 font-bold">Qlozet System</span>
                  </div>

               </div>
               
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

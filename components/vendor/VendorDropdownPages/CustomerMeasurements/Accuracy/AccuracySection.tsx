"use client";

import { motion } from "framer-motion";
import { Scan, Ruler, Settings2 } from "lucide-react";

type SectionData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
};

type AccuracySectionProps = {
  data: SectionData;
};

export function AccuracySection({ data }: AccuracySectionProps) {
  return (
    <section id={data.id} className="relative z-10 bg-white py-16 lg:py-48 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col gap-12 lg:flex-row-reverse lg:items-center lg:gap-32">
          {/* Right: Content */}
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
                const icons = [Scan, Settings2, Ruler];
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
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-50 border border-black/5 group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <span className="font-display text-lg font-medium text-black/80">{feature}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Left: Interactive Scan Visual */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto h-[420px] sm:h-[550px] lg:h-[650px] w-full max-w-xl rounded-[2rem] sm:rounded-[3.5rem] bg-zinc-950 shadow-2xl overflow-hidden flex flex-col pt-8 sm:pt-12 items-center">
               
               {/* Grid Background */}
               <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

               {/* Center Focus Element (Mannequin/Body abstraction) */}
               <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="relative z-10 h-full w-[200px] mt-10"
               >
                  {/* Abstract body geometry using SVG */}
                  <svg className="w-full h-full opacity-30" viewBox="0 0 200 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                     {/* Shoulders */}
                     <path d="M40 100 Q 100 80 160 100 L 170 140 Q 100 160 30 140 Z" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
                     {/* Torso */}
                     <path d="M40 100 L 60 250 L 140 250 L 160 100" stroke="white" strokeWidth="2" />
                     {/* Waist */}
                     <path d="M60 250 L 70 300 L 130 300 L 140 250" stroke="white" strokeWidth="2" />
                     {/* Hips */}
                     <path d="M70 300 Q 100 320 130 300 L 150 400 L 50 400 Z" stroke="white" strokeWidth="2" />
                     
                     {/* Horizontal measurement lines */}
                     <line x1="20" y1="120" x2="180" y2="120" stroke="#10b981" strokeWidth="1" />
                     <line x1="40" y1="200" x2="160" y2="200" stroke="#10b981" strokeWidth="1" />
                     <line x1="50" y1="280" x2="150" y2="280" stroke="#10b981" strokeWidth="1" />
                     <line x1="30" y1="360" x2="170" y2="360" stroke="#10b981" strokeWidth="1" />
                  </svg>
                  
                  {/* Vertical Scanner Line */}
                  <motion.div 
                     animate={{ y: [0, 400, 0] }}
                     transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                     className="absolute top-0 left-[-20%] right-[-20%] h-0.5 bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)] border-b border-white/20 z-20"
                  />

                  {/* Measurement Data Nodes */}
                  {[
                     { label: "CHEST", val: "94.2 cm", y: "20%" },
                     { label: "WAIST", val: "78.5 cm", y: "45%" },
                     { label: "HIPS", val: "102.1 cm", y: "70%" },
                  ].map((node, i) => (
                     <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + (i * 0.2) }}
                        className="absolute right-0 sm:right-[-60px] flex items-center gap-2"
                        style={{ top: node.y }}
                     >
                        <div className="w-12 h-px bg-emerald-500/50 relative">
                           <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        </div>
                        <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex flex-col shadow-xl">
                           <span className="font-mono text-[8px] text-zinc-400 font-bold uppercase">{node.label}</span>
                           <span className="font-mono text-xs text-white">{node.val}</span>
                        </div>
                     </motion.div>
                  ))}

               </motion.div>

               {/* Top Control Bar overlay */}
               <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-30">
                  <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                     <Scan className="h-3 w-3 text-emerald-400" />
                     <span className="font-mono text-[9px] text-white tracking-widest uppercase">Precision Active</span>
                  </div>
                  <div className="flex gap-1 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md">
                     <div className="bg-white/20 px-3 py-1 rounded-full text-[8px] font-mono text-white cursor-pointer">CM</div>
                     <div className="px-3 py-1 rounded-full text-[8px] font-mono text-white/50 cursor-pointer">IN</div>
                  </div>
               </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

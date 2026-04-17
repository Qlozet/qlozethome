"use client";

import { motion } from "framer-motion";
import { Repeat, ShieldCheck, TrendingUp } from "lucide-react";

type SectionData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
};

type ConsistencySectionProps = {
  data: SectionData;
};

export function ConsistencySection({ data }: ConsistencySectionProps) {
  return (
    <section id={data.id} className="relative z-10 bg-[#050505] py-16 lg:py-48 overflow-hidden text-white" data-theme="dark">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-32">
          {/* Left: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-white/40"
              >
                {data.badge}
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-3xl font-medium leading-[1.1] tracking-tighter sm:text-5xl lg:text-6xl"
              >
                {data.title}
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-lg leading-relaxed text-white/50 lg:text-2xl"
              >
                {data.description}
              </motion.p>
            </div>

            <div className="grid gap-4">
              {data.features.map((feature, i) => {
                const icons = [Repeat, ShieldCheck, TrendingUp];
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-emerald-500 group-hover:border-emerald-400 group-hover:text-black transition-all shadow-sm">
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <span className="font-display text-lg font-medium text-white/80">{feature}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Sync & Consistency Visual */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto h-[450px] sm:h-[500px] lg:h-[600px] w-full max-w-xl rounded-[2rem] sm:rounded-[3.5rem] bg-zinc-900 border border-white/5 shadow-2xl overflow-hidden flex items-center justify-center">
               
               {/* Animated Node Graph Background */}
               <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                  <motion.div 
                     animate={{ rotate: 360 }}
                     transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                     className="w-[150%] h-[150%] border-[2px] border-dashed border-white/20 rounded-full"
                  />
                  <motion.div 
                     animate={{ rotate: -360 }}
                     transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                     className="absolute w-[100%] h-[100%] border-[1px] border-white/10 rounded-full"
                  />
               </div>

               {/* Sync UI Elements */}
               <div className="relative w-full h-full p-6 sm:p-10 flex flex-col justify-center items-center gap-12 z-10">
                  
                  {/* Central Database Icon */}
                  <motion.div 
                     initial={{ scale: 0 }}
                     whileInView={{ scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ type: "spring", bounce: 0.5 }}
                     className="relative z-20 h-24 w-24 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.2)] backdrop-blur-md"
                  >
                     <ShieldCheck className="h-10 w-10 text-emerald-400" strokeWidth={1.5} />
                     <div className="absolute -bottom-8 whitespace-nowrap bg-black text-white px-3 py-1 rounded-full border border-white/10 font-mono text-[9px] uppercase tracking-widest shadow-xl">
                        Master Profile
                     </div>
                  </motion.div>

                  {/* Connected Order Nodes */}
                  <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                     
                     {/* Left Node (Order 1) */}
                     <motion.div 
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="relative bg-zinc-800 border border-white/10 p-3 rounded-2xl shadow-2xl flex flex-col items-center gap-2 backdrop-blur-md"
                     >
                        <span className="font-mono text-[8px] text-zinc-400 uppercase tracking-widest">Order 01</span>
                        <div className="bg-black px-2 py-1 rounded border border-white/5 font-mono text-[10px] text-emerald-400">SYNCED</div>
                     </motion.div>

                     {/* Right Node (Order 2) */}
                     <motion.div 
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="relative bg-zinc-800 border border-white/10 p-3 rounded-2xl shadow-2xl flex flex-col items-center gap-2 backdrop-blur-md"
                     >
                        <span className="font-mono text-[8px] text-zinc-400 uppercase tracking-widest">Order 02</span>
                        <div className="bg-black px-2 py-1 rounded border border-white/5 font-mono text-[10px] text-emerald-400">SYNCED</div>
                     </motion.div>

                  </div>

                  {/* Connection Beams (Animated SVG Lines) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ filter: 'drop-shadow(0 0 8px rgba(16,185,129,0.5))' }}>
                     <motion.path 
                        d="M 80,300 L 220,300"
                        stroke="#10b981"
                        strokeWidth="2"
                        strokeDasharray="5 5"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                     />
                     <motion.path 
                        d="M 380,300 L 280,300"
                        stroke="#10b981"
                        strokeWidth="2"
                        strokeDasharray="5 5"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6 }}
                     />
                     
                     {/* Data packets flowing */}
                     <motion.circle cx="80" cy="300" r="3" fill="#fff" animate={{ cx: [80, 220] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 1 }} />
                     <motion.circle cx="380" cy="300" r="3" fill="#fff" animate={{ cx: [380, 280] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 1.5 }} />
                  </svg>

               </div>

               {/* Overlay Vignette */}
               <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

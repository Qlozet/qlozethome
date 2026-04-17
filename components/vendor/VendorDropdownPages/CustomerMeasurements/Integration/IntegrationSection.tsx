"use client";

import { motion } from "framer-motion";
import { Workflow, Network, Link as LinkIcon, DatabaseZap } from "lucide-react";

type SectionData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
};

type IntegrationSectionProps = {
  data: SectionData;
};

export function IntegrationSection({ data }: IntegrationSectionProps) {
  return (
    <section id={data.id} className="relative z-10 bg-[#050505] py-16 lg:py-48 overflow-hidden text-white" data-theme="dark">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-32">
          {/* Right/Top: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span 
                initial={{ opacity: 0, x: 20 }}
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
                 const icons = [LinkIcon, Workflow, Network];
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-emerald-500 group-hover:border-emerald-400 group-hover:text-black transition-all shadow-sm">
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <span className="font-display text-lg font-medium text-white/80">{feature}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Left/Bottom: Integration Network Visual */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto h-[450px] sm:h-[500px] lg:h-[600px] w-full max-w-xl rounded-[2rem] sm:rounded-[3.5rem] bg-zinc-900 border border-white/5 shadow-2xl overflow-hidden flex flex-col justify-center items-center">
               
               {/* Radial Grid Background */}
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-950 opacity-80" />
               
               {/* Core Node */}
               <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-black rounded-3xl border border-white/10 shadow-[0_0_80px_rgba(16,185,129,0.3)] flex items-center justify-center backdrop-blur-xl"
               >
                  <DatabaseZap className="h-10 w-10 text-white" />
                  <div className="absolute inset-0 rounded-3xl border border-emerald-500/50 animate-[ping_3s_ease-in-out_infinite] opacity-50" />
               </motion.div>

               {/* Orbital Rings */}
               <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute w-[300px] h-[300px] rounded-full border border-white/5 border-dashed" />
               <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute w-[450px] h-[450px] rounded-full border border-white/5" />

               {/* Connected Services (Satellites) */}
               {[
                  { icon: "📦", label: "Inventory", rotation: 0, delay: 0.2 },
                  { icon: "✂️", label: "Production", rotation: 72, delay: 0.3 },
                  { icon: "📊", label: "Analytics", rotation: 144, delay: 0.4 },
                  { icon: "🚚", label: "Shipper", rotation: 216, delay: 0.5 },
                  { icon: "💬", label: "CRM", rotation: 288, delay: 0.6 },
               ].map((satellite, i) => (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: satellite.delay, duration: 1 }}
                     className="absolute top-1/2 left-1/2 z-30"
                     style={{ transform: `translate(-50%, -50%) rotate(${satellite.rotation}deg) translateY(-150px) rotate(-${satellite.rotation}deg)` }}
                  >
                     <div className="flex flex-col items-center gap-2 group cursor-default">
                        <div className="w-12 h-12 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:border-emerald-400 group-hover:bg-emerald-500/10 transition-all">
                           <span className="text-xl grayscale group-hover:grayscale-0 transition-all">{satellite.icon}</span>
                        </div>
                        <span className="font-mono text-[8px] text-zinc-400 uppercase tracking-widest group-hover:text-white transition-colors">{satellite.label}</span>
                     </div>
                  </motion.div>
               ))}

               {/* Connecting Laser Lines (SVG) */}
               <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-30">
                  {[0, 72, 144, 216, 288].map((rot, i) => (
                     <g key={i} transform={`translate(280, 280) rotate(${rot - 90})`}>
                        {/* 280 roughly half of typical w/h here, assuming 560px container */}
                        <motion.line 
                           x1="45" y1="0" x2="150" y2="0" 
                           stroke="#10b981" strokeWidth="1" strokeDasharray="4 4"
                           initial={{ opacity: 0 }}
                           whileInView={{ opacity: 1 }}
                           viewport={{ once: true }}
                           transition={{ delay: 0.5 }}
                        />
                        <motion.circle 
                           cx="45" cy="0" r="2" fill="#fff"
                           animate={{ cx: [45, 150] }}
                           transition={{ duration: 1.5, repeat: Infinity, delay: rot * 0.01, ease: "linear" }}
                        />
                     </g>
                  ))}
               </svg>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

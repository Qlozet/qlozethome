"use client";

import { motion } from "framer-motion";
import { Building2, Share2, Map, LucideIcon, Globe } from "lucide-react";

type LogisticsData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type ReliableNetworkSectionProps = {
  data: LogisticsData;
};

export function ReliableNetworkSection({ data }: ReliableNetworkSectionProps) {
  return (
    <section id={data.id} className="relative z-10 bg-white py-24 sm:py-32 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col gap-16 lg:flex-row-reverse lg:items-center lg:gap-24">
          {/* Right: Content (Mobile: First) */}
          <div className="flex flex-col gap-10 lg:w-1/2 order-1 lg:order-2">
            <div className="flex flex-col gap-6">
              <motion.span 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/40"
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
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F9F9F8] border border-[#3A3A3A]/5 group-hover:bg-[#3A3A3A] group-hover:text-white transition-all shadow-sm">
                    <Share2 className="h-4 w-4" strokeWidth={1.5} />
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

          {/* Left: Global Network Map (Mobile: Second) */}
          <div className="relative lg:w-1/2 order-2 lg:order-1 flex items-center justify-center">
             <div className="relative h-[480px] lg:h-[580px] w-full max-w-md rounded-[3rem] bg-zinc-50 border border-black/5 shadow-2xl overflow-hidden flex items-center justify-center">
                
                {/* Map Grid Background */}
                <div className="absolute inset-x-0 inset-y-0 opacity-[0.02] pointer-events-none">
                    <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                </div>

                {/* Abstract Dotted Map (SVG) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none scale-125">
                   <svg viewBox="0 0 800 400" className="w-[150%] h-auto drop-shadow-2xl">
                      {/* Simplified stylized dots representing landmasses */}
                      {Array.from({ length: 400 }).map((_, i) => (
                         <circle 
                            key={i} 
                            cx={Math.random() * 800} 
                            cy={Math.random() * 400} 
                            r={Math.random() > 0.9 ? 2.5 : 1} 
                            fill="black" 
                         />
                      ))}
                   </svg>
                </div>

                {/* Connection Arcs (Animated Paths) */}
                <svg className="absolute inset-0 h-full w-full pointer-events-none opacity-[0.15]">
                   <motion.path 
                      d="M 100,300 Q 200,100 350,200" 
                      stroke="black" strokeWidth="1" fill="none" strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                   />
                   <motion.path 
                      d="M 350,200 Q 400,150 500,250" 
                      stroke="black" strokeWidth="1" fill="none" strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
                   />
                </svg>

                {/* Primary Hubs */}
                <div className="absolute inset-0 pointer-events-none">
                   {/* NYC Hub */}
                   <motion.div 
                     initial={{ scale: 0 }}
                     whileInView={{ scale: 1 }}
                     className="absolute top-[35%] left-[25%] -translate-x-1/2 -translate-y-1/2"
                   >
                      <div className="relative flex items-center justify-center">
                         <div className="absolute h-16 w-16 bg-black/[0.03] rounded-full animate-ping" />
                         <div className="h-4 w-4 bg-black rounded-full shadow-[0_0_15px_rgba(0,0,0,0.3)] ring-4 ring-white relative z-10" />
                         <span className="absolute top-6 font-display text-[7px] font-bold uppercase tracking-[0.3em] text-black">Hub_West</span>
                      </div>
                   </motion.div>

                   {/* London Hub */}
                   <motion.div 
                     initial={{ scale: 0 }}
                     whileInView={{ scale: 1 }}
                     transition={{ delay: 0.2 }}
                     className="absolute top-[45%] left-[65%] -translate-x-1/2 -translate-y-1/2"
                   >
                      <div className="relative flex items-center justify-center">
                         <div className="absolute h-12 w-12 bg-black/[0.03] rounded-full animate-ping" />
                         <div className="h-3 w-3 bg-black rounded-full shadow-[0_0_15px_rgba(0,0,0,0.3)] ring-4 ring-white relative z-10" />
                         <span className="absolute bottom-6 font-display text-[7px] font-bold uppercase tracking-[0.3em] text-black">Hub_East</span>
                      </div>
                   </motion.div>
                   
                   {/* Sync Indicator */}
                   <motion.div 
                     initial={{ opacity: 0, scale: 0 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ delay: 0.5 }}
                     className="absolute top-[40%] left-[45%] -translate-x-1/2 -translate-y-1/2"
                   >
                      <div className="h-6 w-6 rounded-lg bg-white border border-black/10 shadow-lg flex items-center justify-center">
                         <Globe className="h-3 w-3 text-black/40" />
                      </div>
                   </motion.div>
                </div>

                {/* Partner Network Marquee (Bottom overlaid) */}
                <div className="absolute bottom-16 inset-x-0 overflow-hidden bg-white/50 backdrop-blur-md border-y border-black/5 py-3">
                   <div className="flex select-none mx-auto w-[200%]">
                      <motion.div 
                         initial={{ x: "0%" }}
                         animate={{ x: "-50%" }}
                         transition={{ ease: "linear", duration: 15, repeat: Infinity }}
                         className="flex items-center gap-12 font-display text-[10px] font-bold uppercase tracking-[0.4em] text-black/30"
                      >
                         <span>DHL EXPRESS</span>
                         <span className="h-1 w-1 bg-black/10 rounded-full"/>
                         <span>FEDEX GLOBAL</span>
                         <span className="h-1 w-1 bg-black/10 rounded-full"/>
                         <span>UPS LOGISTICS</span>
                         <span className="h-1 w-1 bg-black/10 rounded-full"/>
                         <span>ROYAL MAIL</span>
                         <span className="h-1 w-1 bg-black/10 rounded-full"/>
                         <span>DHL EXPRESS</span>
                         <span className="h-1 w-1 bg-black/10 rounded-full"/>
                         <span>FEDEX GLOBAL</span>
                         <span className="h-1 w-1 bg-black/10 rounded-full"/>
                         <span>UPS LOGISTICS</span>
                         <span className="h-1 w-1 bg-black/10 rounded-full"/>
                         <span>ROYAL MAIL</span>
                      </motion.div>
                   </div>
                </div>

                {/* Infrastructure Meta Label (Bottom) */}
                <div className="absolute bottom-6 text-center z-10 flex flex-col gap-1 items-center">
                   <div className="flex items-center gap-4">
                      <p className="font-display text-[9px] text-zinc-900 font-bold leading-relaxed uppercase tracking-[0.4em]">Global Routing Engine</p>
                      <div className="h-1 w-1 rounded-full bg-black/10" />
                      <p className="font-display text-[9px] text-zinc-500 font-bold leading-relaxed uppercase tracking-[0.4em]">99.9% Active Coverage</p>
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

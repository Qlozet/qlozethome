"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Store, BadgeCheck, Check } from "lucide-react";

type ConnectData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type ConnectSectionProps = {
  data: ConnectData;
};

export function ConnectSection({ data }: ConnectSectionProps) {
  return (
    <section id={data.id} className="relative z-10 bg-white py-24 sm:py-32 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-24">
          {/* Left: Content */}
          <div className="flex flex-col gap-6 lg:w-1/2">
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
                className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-[#111111] sm:text-6xl lg:text-7xl"
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

            <div className="flex flex-col gap-3 mt-2">
              {data.features.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-darker/10"><Check className="h-3.5 w-3.5 text-brand-darker" /></span>
                  <span className="font-ui text-sm font-medium text-[#111111]/70 sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="font-ui text-sm italic text-[#111111]/30"
            >
               {data.closing}
            </motion.p>
          </div>

          {/* Right: Vendor Network Visual */}
          <div className="relative mt-10 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto h-[500px] lg:h-[600px] w-full max-w-xl rounded-[3.5rem] bg-brand-darker border border-black/5 shadow-2xl overflow-hidden flex items-center justify-center p-8">
               
               {/* Background Map / Grid */}
               <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

               {/* Center Qlozet Verification Node */}
               <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", duration: 1.5 }}
                  className="relative z-20 h-24 w-24 rounded-full bg-white flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.2)] ring-8 ring-white/20"
               >
                  <ShieldCheck className="h-10 w-10 text-brand-darker" />
                  <div className="absolute top-full mt-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 whitespace-nowrap">
                     <span className="font-display text-[9px] font-bold text-white uppercase tracking-widest">Verified Network</span>
                  </div>
               </motion.div>

               {/* Orbiting Vendors */}
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {[...Array(4)].map((_, i) => (
                     <motion.div 
                        key={i}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
                        className="absolute h-full w-full flex items-center justify-center"
                        style={{ width: `${100 + i * 80}px`, height: `${100 + i * 80}px` }}
                     >
                        <div className="absolute w-full h-full border border-white/5 rounded-full" />
                        <motion.div 
                           initial={{ scale: 0 }}
                           whileInView={{ scale: 1 }}
                           viewport={{ once: true }}
                           transition={{ delay: 0.5 + i * 0.2 }}
                           className={`absolute -top-6 flex items-center gap-2 bg-zinc-800 border border-white/10 px-3 py-2 rounded-xl shadow-xl ${i % 2 === 0 ? 'scale-90 opacity-60' : ''}`}
                        >
                           <Store className="h-4 w-4 text-white/50" />
                           <div className="flex flex-col">
                              <span className="font-display text-[8px] font-bold text-white uppercase tracking-widest">Vendor {i + 1}</span>
                              <div className="flex items-center gap-1">
                                 <BadgeCheck className="h-3 w-3 text-white" />
                                 <span className="font-mono text-[7px] text-zinc-400 uppercase">Tier 1</span>
                              </div>
                           </div>
                        </motion.div>
                     </motion.div>
                  ))}
               </div>

               {/* Connecting Beams */}
               <svg className="absolute inset-0 h-full w-full pointer-events-none opacity-20">
                  <motion.circle cx="50%" cy="50%" r="40%" fill="none" stroke="#EDEAEA" strokeWidth="1" strokeDasharray="4 4" 
                     animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "center" }}
                  />
                  <motion.circle cx="50%" cy="50%" r="20%" fill="none" stroke="#EDEAEA" strokeWidth="1" strokeDasharray="4 4" 
                     animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "center" }}
                  />
               </svg>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

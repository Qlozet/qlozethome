"use client";

import { motion } from "framer-motion";
import { CheckCircle2, HelpCircle, Zap, User, Ruler, LucideIcon, Fingerprint } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  CheckCircle2: CheckCircle2,
  HelpCircle: HelpCircle,
  Zap: Zap
};

type Feature = {
  title: string;
  icon: string;
};

type FitData = {
  badge: string;
  title: string;
  description: string;
  features: Feature[];
};

type FitProfileSectionProps = {
  data: FitData;
};

export function FitProfileSection({ data }: FitProfileSectionProps) {
  return (
    <section className="relative z-10 bg-white py-32 lg:py-48" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-32">
          {/* Left: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex h-10 w-40 items-center justify-center border-2 border-black/10 bg-zinc-50 font-display text-[9px] font-bold uppercase tracking-[0.3em] text-black/40 shadow-sm"
              >
                {data.badge}
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-4xl font-medium leading-[1.1] tracking-tighter text-black sm:text-6xl"
              >
                {data.title}
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-lg leading-relaxed text-black/50 lg:text-2xl"
              >
                {data.description}
              </motion.p>
            </div>

            <div className="grid gap-4">
              {data.features.map((feature, i) => {
                const Icon = iconMap[feature.icon] || CheckCircle2;
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-6 group"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-50 border border-black/5 group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <span className="font-display text-lg font-medium text-black/80">{feature.title}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Fit Profile Sync Interaction */}
          <div className="relative mt-20 lg:mt-0 lg:w-1/2 flex justify-center items-center py-10 lg:py-0">
             <div className="relative w-full max-w-[600px] h-[550px] sm:h-[650px] rounded-[3rem] bg-zinc-50 border border-black/5 shadow-2xl p-6 sm:p-10 flex flex-col justify-between overflow-hidden">
                {/* Subtle Neural Network / Data Grid Background */}
                <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                
                {/* Header Container */}
                <div className="flex items-center justify-between z-10 border-b border-black/5 pb-6">
                   <div className="flex items-center gap-4">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-xl bg-black text-white">
                         <Fingerprint className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div className="flex flex-col">
                         <span className="font-display text-[10px] sm:text-xs font-bold uppercase tracking-widest text-black">A.I. Fit Sync Prototype</span>
                         <span className="font-ui text-[9px] sm:text-[10px] text-zinc-500 uppercase tracking-widest mt-0.5">Automated Sizing Matrix</span>
                      </div>
                   </div>
                </div>

                {/* Central Sync Canvas */}
                <div className="relative flex-1 rounded-[2rem] bg-white border border-black/5 shadow-inner mt-6 flex items-center justify-center overflow-hidden">
                    
                    {/* Background Connection Track */}
                    <div className="absolute top-1/2 left-10 right-10 h-px bg-black border-dashed border-black/20 -translate-y-1/2 z-0 hidden sm:block" />

                    {/* Left Node: User Fit Profile Card */}
                    <motion.div 
                       initial={{ x: -100, opacity: 0 }}
                       whileInView={{ x: -30, opacity: 1 }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.4, duration: 1, type: "spring", bounce: 0.3 }}
                       className="absolute left-[5%] sm:left-[10%] w-[140px] sm:w-[180px] bg-white border border-black/10 shadow-2xl rounded-2xl p-3 z-20 hover:scale-105 transition-transform cursor-pointer"
                    >
                       <div className="flex items-center gap-3 mb-4">
                          <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden bg-zinc-100 border border-black/5 shrink-0">
                             <img src="/image/seun.png" alt="Profile" className="w-full h-full object-cover" />
                          </div>
                          <div className="flex flex-col">
                             <span className="font-mono text-[7px] sm:text-[8px] text-zinc-400 font-bold uppercase">Stored Profile</span>
                             <span className="font-display text-[9px] sm:text-[10px] font-bold text-black group-hover:text-black/80">SEUN_A</span>
                          </div>
                       </div>
                       
                       {/* Mini Measurements */}
                       <div className="flex flex-col gap-2">
                          <div className="flex justify-between border-b border-black/5 pb-1">
                             <span className="font-mono text-[7px] sm:text-[8px] text-zinc-400 font-bold uppercase">Chest</span>
                             <span className="font-mono text-[8px] sm:text-[9px] text-black font-bold">102 CM</span>
                          </div>
                          <div className="flex justify-between border-b border-black/5 pb-1">
                             <span className="font-mono text-[7px] sm:text-[8px] text-zinc-400 font-bold uppercase">Waist</span>
                             <span className="font-mono text-[8px] sm:text-[9px] text-black font-bold">84 CM</span>
                          </div>
                          <div className="flex justify-between">
                             <span className="font-mono text-[7px] sm:text-[8px] text-emerald-500 font-bold uppercase">Bio-Verified</span>
                          </div>
                       </div>
                    </motion.div>

                    {/* Right Node: Selected Garment */}
                    <motion.div 
                       initial={{ x: 100, opacity: 0 }}
                       whileInView={{ x: 30, opacity: 1 }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.6, duration: 1, type: "spring", bounce: 0.3 }}
                       className="absolute right-[5%] sm:right-[10%] w-[140px] sm:w-[180px] bg-zinc-100 border border-black/5 shadow-2xl rounded-2xl p-2 z-10 hover:scale-105 transition-transform cursor-pointer"
                    >
                       <div className="w-full aspect-square rounded-xl bg-white overflow-hidden relative border border-black/5 mb-3">
                          <img src="/image/product-3.png" alt="Ordered Garment" className="w-full h-full object-cover" />
                          {/* Live Adjustment UI Mock */}
                          <div className="absolute top-2 left-2 flex flex-col gap-1">
                             <div className="h-1 w-8 bg-black/20 rounded-full" />
                             <div className="h-1 w-6 bg-black/20 rounded-full" />
                          </div>
                       </div>
                       <div className="flex flex-col items-center">
                          <span className="font-display text-[9px] sm:text-[10px] font-bold text-black uppercase tracking-widest text-center">Urban Trench</span>
                          <span className="font-mono text-[7px] sm:text-[8px] text-zinc-400 font-bold uppercase text-center mt-1">Pending Sync...</span>
                       </div>
                    </motion.div>

                    {/* Center Point: The "Match Confirmed" Verification overlay */}
                    <motion.div 
                       initial={{ scale: 0, opacity: 0 }}
                       whileInView={{ scale: 1, opacity: 1 }}
                       viewport={{ once: true }}
                       transition={{ delay: 1.6, type: "spring", bounce: 0.6 }}
                       className="absolute z-30 h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-white border-[4px] border-emerald-500 shadow-[0_0_40px_rgba(16,185,129,0.3)] flex items-center justify-center translate-x-[15px]"
                    >
                       <CheckCircle2 className="h-8 w-8 sm:h-10 sm:w-10 text-emerald-500" strokeWidth={2.5} />
                    </motion.div>
                    
                    {/* Animated Data Stream syncing left to right */}
                    <motion.div 
                       initial={{ opacity: 0 }}
                       whileInView={{ opacity: [0, 1, 0] }}
                       transition={{ delay: 1, duration: 0.8, times: [0, 0.5, 1] }}
                       className="absolute z-20 h-2 w-24 bg-gradient-to-r from-emerald-400 to-transparent blur-sm rounded-full pointer-events-none translate-x-[15px]" 
                    />
                </div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Node Marker on Spine */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
         <div className="w-1 h-1 rounded-full bg-black/20" />
      </div>
    </section>
  );
}

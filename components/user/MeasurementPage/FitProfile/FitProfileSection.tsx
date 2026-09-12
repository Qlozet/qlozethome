"use client";

import { motion } from "framer-motion";
import { UserCheck, ShieldCheck, Zap } from "lucide-react";

type ProfileData = {
  badge: string;
  title: string;
  description: string;
  benefits: string[];
};

type FitProfileSectionProps = {
  data: ProfileData;
};

const iconMap: any = {
  "Saved for instant checkout": Zap,
  "Consistent fit across vendors": UserCheck,
  "No repeated input required": ShieldCheck,
};

export function FitProfileSection({ data }: FitProfileSectionProps) {
  return (
    <section className="relative w-full bg-white py-24 sm:py-32 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          {/* Left Column: Typography */}
          <div className="flex flex-col gap-12 lg:w-1/2">
            <div className="flex flex-col gap-8">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
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
                transition={{ delay: 0.1 }}
                className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-[#111111] sm:text-6xl lg:text-7xl"
              >
                {data.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="max-w-xl font-ui text-base leading-relaxed text-[#3A3A3A]/60 sm:text-lg"
              >
                {data.description}
              </motion.p>
            </div>

            <div className="flex flex-col gap-6">
              {data.benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light border border-brand-darker/5 transition-all group-hover:bg-brand-darker group-hover:text-white">
                    {(() => {
                      const Icon = iconMap[benefit] || UserCheck;
                      return <Icon className="h-6 w-6" strokeWidth={1.5} />;
                    })()}
                  </div>
                  <span className="font-ui text-sm text-[#3A3A3A]/70 group-hover:text-[#3A3A3A] sm:text-base">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Profile UI */}
          <div className="lg:w-1/2 flex justify-center items-center py-20 lg:py-0 w-full">
             <div className="relative w-full max-w-[600px] aspect-[4/3] flex items-center justify-center">
                {/* Background Grid */}
                <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                {/* Solid Crisp Digital ID Card */}
                <motion.div 
                   initial={{ y: 30, opacity: 0 }}
                   whileInView={{ y: 0, opacity: 1 }}
                   transition={{ duration: 1, type: "spring", bounce: 0.2 }}
                   className="relative w-full h-full max-h-[400px] bg-white border border-zinc-200 rounded-[2rem] sm:rounded-[3rem] shadow-2xl p-8 sm:p-12 flex flex-col justify-between overflow-hidden z-10"
                >
                   {/* Card Top / Header */}
                   <div className="flex justify-between items-start w-full relative z-20">
                      <div className="flex items-center gap-4">
                         {/* NFC / ID Icon */}
                         <div className="w-12 h-12 rounded-full bg-brand-darker flex items-center justify-center relative">
                            <motion.div 
                               initial={{ scale: 0.8, opacity: 0 }} 
                               whileInView={{ scale: 1.5, opacity: 0 }} 
                               transition={{ duration: 1.5, repeat: Infinity }}
                               className="absolute w-12 h-12 rounded-full border border-black/50 pointer-events-none"
                            />
                            <UserCheck className="w-6 h-6 text-white" />
                         </div>
                         <div className="flex flex-col">
                            <span className="font-display text-sm sm:text-base font-bold uppercase tracking-widest text-black">QLOZET_ID</span>
                            <span className="font-mono text-[9px] sm:text-[10px] text-zinc-400 tracking-wider">SYNC_V12.0</span>
                         </div>
                      </div>
                      
                      <motion.div 
                         initial={{ rotate: -90, opacity: 0 }}
                         whileInView={{ rotate: 0, opacity: 1 }}
                         transition={{ delay: 0.5, duration: 0.8 }}
                         className="flex gap-1"
                      >
                         <ShieldCheck className="w-8 h-8 text-green-500" />
                      </motion.div>
                   </div>

                   {/* Card Center / Loading Skeleton vs Data */}
                   <div className="flex gap-8 mt-12 relative z-20">
                      {/* Avatar Placeholder */}
                      <div className="w-32 h-40 sm:w-40 sm:h-48 bg-zinc-100 rounded-2xl overflow-hidden relative border border-black/5">
                         <motion.img 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            src="/image/seun.png" 
                            alt="Generated Avatar" 
                            className="w-full h-full object-cover grayscale"
                         />
                         <div className="absolute inset-0 border border-black/10 rounded-2xl pointer-events-none" />
                      </div>
                      
                      {/* Measurement Data Syncing lines */}
                      <div className="flex-1 flex flex-col justify-end gap-2 sm:gap-2.5 pb-2">
                         <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.1, duration: 0.5 }}
                            className="flex items-center justify-between"
                         >
                            <span className="font-mono text-[9px] sm:text-[10px] font-bold text-zinc-400">COLLAR</span>
                            <span className="font-mono text-[10px] sm:text-xs font-bold text-black border-b border-black/10 border-dashed pb-0.5">38.0 CM</span>
                         </motion.div>

                         <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                            className="flex items-center justify-between"
                         >
                            <span className="font-mono text-[9px] sm:text-[10px] font-bold text-zinc-400">SHOULDERS</span>
                            <span className="font-mono text-[10px] sm:text-xs font-bold text-black border-b border-black/10 border-dashed pb-0.5">46.5 CM</span>
                         </motion.div>
                         
                         <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.3, duration: 0.5 }}
                            className="flex items-center justify-between"
                         >
                            <span className="font-mono text-[9px] sm:text-[10px] font-bold text-zinc-400">CHEST</span>
                            <span className="font-mono text-[10px] sm:text-xs font-bold text-black border-b border-black/10 border-dashed pb-0.5">98.2 CM</span>
                         </motion.div>
                         
                         <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.4, duration: 0.5 }}
                            className="flex items-center justify-between"
                         >
                            <span className="font-mono text-[9px] sm:text-[10px] font-bold text-zinc-400">BICEP</span>
                            <span className="font-mono text-[10px] sm:text-xs font-bold text-black border-b border-black/10 border-dashed pb-0.5">34.2 CM</span>
                         </motion.div>

                         <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.5, duration: 0.5 }}
                            className="flex items-center justify-between"
                         >
                            <span className="font-mono text-[9px] sm:text-[10px] font-bold text-zinc-400">WAIST</span>
                            <span className="font-mono text-[10px] sm:text-xs font-bold text-black border-b border-black/10 border-dashed pb-0.5">82.0 CM</span>
                         </motion.div>

                         <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.6, duration: 0.5 }}
                            className="flex items-center justify-between"
                         >
                            <span className="font-mono text-[9px] sm:text-[10px] font-bold text-zinc-400">INSEAM</span>
                            <span className="font-mono text-[10px] sm:text-xs font-bold text-black border-b border-black/10 border-dashed pb-0.5">78.5 CM</span>
                         </motion.div>
                         
                         {/* Scanning Laser Line inside the data box */}
                         <motion.div 
                            initial={{ top: 0, opacity: 0 }}
                            whileInView={{ top: "100%", opacity: [0, 1, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                            className="absolute left-0 w-full h-px bg-green-400 shadow-[0_0_10px_#4ade80]"
                         />
                      </div>
                   </div>

                   {/* Card Scanning Watermark Background */}
                   <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1.5, opacity: 0.03 }}
                      transition={{ delay: 1, duration: 2, type: "spring" }}
                      className="absolute -right-10 -bottom-10 pointer-events-none z-0"
                   >
                      <ShieldCheck className="w-64 h-64 text-black" />
                   </motion.div>
                </motion.div>

             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Ruler } from "lucide-react";

type BiometricData = {
  badge: string;
  title: string;
  description: string;
  features: string[];
};

type BiometricSectionProps = {
  data: BiometricData;
};

export function BiometricSection({ data }: BiometricSectionProps) {
  return (
    <section id="biometric" className="relative w-full bg-white py-24 sm:py-32" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-24">
          {/* Left Column: Visual Scanner Grid */}
          <div className="relative order-2 lg:order-1 lg:w-1/2">
            <div className="relative aspect-square w-full max-w-lg mx-auto rounded-[3rem] bg-zinc-50 border border-zinc-100 shadow-xl overflow-hidden group">
               {/* Technical Grid Overlay */}
               <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
               
               <div className="relative z-10 flex h-full items-center justify-center p-12">
                  <div className="relative w-[280px] sm:w-[320px] aspect-[4/5] rounded-[2.5rem] flex items-center justify-center overflow-hidden bg-white shadow-2xl border border-black/10">
                     {/* Base Image */}
                     <img 
                       src="/image/man-measurement-pose.png" 
                       alt="AI Measurement" 
                       className="w-full h-full object-cover grayscale opacity-90 mix-blend-multiply transition-all duration-1000"
                     />

                     {/* Scanning Animation Sweep */}
                     <motion.div 
                        animate={{ top: ["-20%", "110%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 z-20 pointer-events-none flex flex-col"
                     >
                        {/* The soft trailing ghost gradient (trails above the line) */}
                        <div className="w-full h-24 bg-gradient-to-b from-transparent to-[#00F0FF]/20"></div>
                        {/* The solid laser line (leads the scan) */}
                        <div className="w-full h-[2px] bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]"></div>
                     </motion.div>

                     {/* Dynamic Body Points / Nodes */}
                     <div className="absolute inset-0 pointer-events-none">
                        
                        {/* 1. Neck Node */}
                        <motion.div 
                           initial={{ scale: 0, opacity: 0 }} 
                           whileInView={{ scale: 1, opacity: 1 }} 
                           transition={{ delay: 0.3, duration: 0.6 }} 
                           className="absolute top-[18%] right-[45%] flex items-center flex-row-reverse"
                        >
                           <div className="w-3 h-3 rounded-full bg-[#00F0FF] shadow-[0_0_15px_#00F0FF] border-2 border-white" />
                           <motion.div 
                              initial={{ width: 0 }} 
                              whileInView={{ width: "40px" }} 
                              transition={{ delay: 0.8, duration: 0.5 }}
                              className="h-px bg-[#00F0FF]"
                           />
                           <motion.span 
                              initial={{ opacity: 0, x: 10 }} 
                              whileInView={{ opacity: 1, x: 0 }} 
                              transition={{ delay: 1.3 }}
                              className="font-mono text-[9px] sm:text-[10px] font-bold text-[#00F0FF] tracking-widest pr-2 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm"
                           >
                              COLLAR: 38CM
                           </motion.span>
                        </motion.div>

                        {/* 3. Chest Node */}
                        <motion.div 
                           initial={{ scale: 0, opacity: 0 }} 
                           whileInView={{ scale: 1, opacity: 1 }} 
                           transition={{ delay: 0.5, duration: 0.6 }} 
                           className="absolute top-[32%] left-[40%] flex items-center"
                        >
                           <div className="w-3 h-3 rounded-full bg-[#00F0FF] shadow-[0_0_15px_#00F0FF] border-2 border-white" />
                           <motion.div 
                              initial={{ width: 0 }} 
                              whileInView={{ width: "60px" }} 
                              transition={{ delay: 1, duration: 0.6 }}
                              className="h-px bg-[#00F0FF]"
                           />
                           <motion.span 
                              initial={{ opacity: 0, x: -10 }} 
                              whileInView={{ opacity: 1, x: 0 }} 
                              transition={{ delay: 1.5 }}
                              className="font-mono text-[9px] sm:text-[10px] font-bold text-[#00F0FF] tracking-widest pl-2 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm"
                           >
                              CHEST: 98CM
                           </motion.span>
                        </motion.div>
                        
                        {/* 4. Sleeve / Arm Node */}
                        <motion.div 
                           initial={{ scale: 0, opacity: 0 }} 
                           whileInView={{ scale: 1, opacity: 1 }} 
                           transition={{ delay: 0.7, duration: 0.6 }} 
                           className="absolute top-[40%] left-[25%] flex items-center"
                        >
                           <div className="w-3 h-3 rounded-full bg-[#00F0FF] shadow-[0_0_15px_#00F0FF] border-2 border-white" />
                           <motion.div 
                              initial={{ width: 0 }} 
                              whileInView={{ width: "30px" }} 
                              transition={{ delay: 1.2, duration: 0.5 }}
                              className="h-px bg-[#00F0FF]"
                           />
                           <motion.span 
                              initial={{ opacity: 0, x: -10 }} 
                              whileInView={{ opacity: 1, x: 0 }} 
                              transition={{ delay: 1.7 }}
                              className="font-mono text-[9px] sm:text-[10px] font-bold text-[#00F0FF] tracking-widest pl-2 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm"
                           >
                              SLEEVE: 65CM
                           </motion.span>
                        </motion.div>

                        {/* 5. Waist Node */}
                        <motion.div 
                           initial={{ scale: 0, opacity: 0 }} 
                           whileInView={{ scale: 1, opacity: 1 }} 
                           transition={{ delay: 0.9, duration: 0.6 }} 
                           className="absolute top-[48%] right-[40%] flex items-center flex-row-reverse"
                        >
                           <div className="w-3 h-3 rounded-full bg-[#00F0FF] shadow-[0_0_15px_#00F0FF] border-2 border-white" />
                           <motion.div 
                              initial={{ width: 0 }} 
                              whileInView={{ width: "60px" }} 
                              transition={{ delay: 1.4, duration: 0.6 }}
                              className="h-px bg-[#00F0FF]"
                           />
                           <motion.span 
                              initial={{ opacity: 0, x: 10 }} 
                              whileInView={{ opacity: 1, x: 0 }} 
                              transition={{ delay: 1.9 }}
                              className="font-mono text-[9px] sm:text-[10px] font-bold text-[#00F0FF] tracking-widest pr-2 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm"
                           >
                              WAIST: 82CM
                           </motion.span>
                        </motion.div>

                        {/* 6. Hips Node */}
                        <motion.div 
                           initial={{ scale: 0, opacity: 0 }} 
                           whileInView={{ scale: 1, opacity: 1 }} 
                           transition={{ delay: 1.1, duration: 0.6 }} 
                           className="absolute top-[58%] left-[45%] flex items-center"
                        >
                           <div className="w-3 h-3 rounded-full bg-[#00F0FF] shadow-[0_0_15px_#00F0FF] border-2 border-white" />
                           <motion.div 
                              initial={{ width: 0 }} 
                              whileInView={{ width: "40px" }} 
                              transition={{ delay: 1.6, duration: 0.5 }}
                              className="h-px bg-[#00F0FF]"
                           />
                           <motion.span 
                              initial={{ opacity: 0, x: -10 }} 
                              whileInView={{ opacity: 1, x: 0 }} 
                              transition={{ delay: 2.1 }}
                              className="font-mono text-[9px] sm:text-[10px] font-bold text-[#00F0FF] tracking-widest pl-2 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm"
                           >
                              HIPS: 102CM
                           </motion.span>
                        </motion.div>

                        {/* 7. Inseam Node */}
                        <motion.div 
                           initial={{ scale: 0, opacity: 0 }} 
                           whileInView={{ scale: 1, opacity: 1 }} 
                           transition={{ delay: 1.3, duration: 0.6 }} 
                           className="absolute top-[75%] right-[42%] flex items-center flex-row-reverse"
                        >
                           <div className="w-3 h-3 rounded-full bg-[#00F0FF] shadow-[0_0_15px_#00F0FF] border-2 border-white" />
                           <motion.div 
                              initial={{ width: 0 }} 
                              whileInView={{ width: "50px" }} 
                              transition={{ delay: 1.8, duration: 0.5 }}
                              className="h-px bg-[#00F0FF]"
                           />
                           <motion.span 
                              initial={{ opacity: 0, x: 10 }} 
                              whileInView={{ opacity: 1, x: 0 }} 
                              transition={{ delay: 2.3 }}
                              className="font-mono text-[9px] sm:text-[10px] font-bold text-[#00F0FF] tracking-widest pr-2 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm"
                           >
                              INSEAM: 78CM
                           </motion.span>
                        </motion.div>
                     </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col gap-12 order-1 lg:order-2 lg:w-1/2">
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
              {data.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-6"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-light border border-brand/5">
                    <CheckCircle2 className="h-4 w-4 text-brand" strokeWidth={1.5} />
                  </div>
                  <span className="font-ui text-sm text-[#3A3A3A]/70 sm:text-base">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

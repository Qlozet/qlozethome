"use client";

import { motion } from "framer-motion";
import { Package, Sparkles, Zap, CheckCircle2, LucideIcon } from "lucide-react";

type LogisticsData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type BrandedPackagingSectionProps = {
  data: LogisticsData;
};

export function BrandedPackagingSection({ data }: BrandedPackagingSectionProps) {
  return (
    <section id={data.id} className="relative z-10 bg-white py-24 sm:py-32 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col gap-16 lg:flex-row-reverse lg:items-center lg:gap-24">
          {/* Right: Content (Mobile: First) */}
          <div className="flex flex-col gap-10 lg:w-1/2 order-1 lg:order-2">
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
                    <Sparkles className="h-4 w-4" strokeWidth={1.5} />
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

          {/* Left: Premium Unboxing Visualization (Mobile: Second) */}
          <div className="relative lg:w-1/2 flex items-center justify-center">
             <div className="relative h-[480px] lg:h-[580px] w-full max-w-md rounded-[3rem] bg-zinc-50 border border-black/5 shadow-2xl overflow-hidden flex flex-col items-center justify-center group">
                
                {/* Clean Background */}
                <div className="absolute inset-0 bg-white" />

                {/* The Unboxing Animation Scene */}
                <div className="relative h-80 w-80 perspective-[1000px] flex items-center justify-center">
                   
                   {/* The Box Base (Bottom Layer) */}
                   <motion.div 
                      initial={{ rotateX: 60, rotateZ: 30, y: 50 }}
                      whileInView={{ rotateX: 60, rotateZ: -10, y: 0 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="absolute h-48 w-48 bg-zinc-100 rounded-xl border border-black/10 shadow-[0_40px_50px_-12px_rgba(0,0,0,0.1)] flex items-center justify-center transform-style-3d"
                   >
                      {/* Premium Wrapping Paper inside the box */}
                      <motion.div 
                         initial={{ opacity: 0, scale: 0.8 }}
                         whileInView={{ opacity: 1, scale: 1 }}
                         transition={{ delay: 0.8, duration: 1 }}
                         className="absolute inset-4 bg-zinc-50 border border-black/5 flex items-center justify-center"
                      >
                         {/* Clothing Item / Content placeholder */}
                         <div className="h-20 w-20 bg-zinc-200 rounded-md opacity-50" />
                      </motion.div>
                   </motion.div>

                   {/* The Box Lid (Top Layer - Animates opening) */}
                   <motion.div 
                      initial={{ rotateX: 60, rotateZ: 30, y: 50, z: 20 }}
                      whileInView={{ rotateX: 60, rotateZ: 10, y: -80, z: 100 }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                      className="absolute h-52 w-52 bg-black rounded-xl shadow-2xl flex items-center justify-center overflow-hidden transform-style-3d"
                   >
                      {/* Qlozet Branding on the Lid */}
                      <div className="flex items-center gap-2 -rotate-45 opacity-40">
                         <Zap className="h-6 w-6 text-white" fill="white" />
                         <span className="font-display text-xl font-bold uppercase tracking-[0.3em] text-white">Qlozet</span>
                      </div>
                      
                      {/* Inner Lid Texture */}
                      <div className="absolute inset-0 border-[12px] border-zinc-900/50 rounded-xl pointer-events-none" />
                   </motion.div>

                   {/* Floating Metadata Notes */}
                   <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5 }}
                      className="absolute top-10 left-0 bg-white/90 backdrop-blur-md px-3 py-2 rounded-lg shadow-xl border border-black/5 flex items-center gap-2"
                   >
                      <div className="h-1.5 w-1.5 rounded-full bg-black animate-pulse" />
                      <span className="font-display text-[8px] font-bold uppercase tracking-widest text-black/60">Premium Seal</span>
                   </motion.div>

                   <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.8 }}
                      className="absolute bottom-10 right-0 bg-white/90 backdrop-blur-md px-3 py-2 rounded-lg shadow-xl border border-black/5 flex items-center gap-2"
                   >
                      <CheckCircle2 className="h-3 w-3 text-black" />
                      <span className="font-display text-[8px] font-bold uppercase tracking-widest text-black/60">Bespoke Wrapping</span>
                   </motion.div>
                </div>

                {/* Footer Statement */}
                <div className="absolute bottom-10 w-full text-center">
                   <p className="font-display text-[10px] font-bold text-black/30 uppercase tracking-[0.4em]">The Unboxing Experience</p>
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

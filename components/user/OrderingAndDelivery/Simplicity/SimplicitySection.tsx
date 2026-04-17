"use client";

import { motion } from "framer-motion";
import { RefreshCcw, Layout, Layers, UserCircle } from "lucide-react";

type SectionData = {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  footer: string;
};

type SimplicitySectionProps = {
  data: SectionData;
};

export function SimplicitySection({ data }: SimplicitySectionProps) {
  return (
    <section id="simplicity" className="relative w-full bg-zinc-50 py-24 lg:py-40 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-32">
          {/* Left: Content (Reversed for rhythm) */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.5em] text-black/40"
              >
                {data.badge}
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="font-display text-4xl font-medium leading-[1.1] tracking-tighter text-black sm:text-6xl"
              >
                {data.title}
                <span className="block mt-2 text-2xl text-black/40 font-ui font-normal tracking-normal">{data.subtitle}</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-lg leading-relaxed text-black/60 lg:text-2xl"
              >
                {data.description}
              </motion.p>
            </div>

            <div className="grid gap-6">
              {data.features.map((feature, i) => (
                <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: 10 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.2 + i * 0.1 }}
                   className="flex items-center gap-6 group"
                >
                   <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white border border-black/5 group-hover:bg-black group-hover:text-white transition-all">
                      {i === 0 ? <Layout className="h-4 w-4" /> : 
                       i === 1 ? <Layers className="h-4 w-4" /> : 
                       <RefreshCcw className="h-4 w-4" />}
                   </div>
                   <span className="font-ui text-lg text-black/70 italic">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-display text-sm font-medium italic text-black/30"
            >
               {data.footer}
            </motion.p>
          </div>

          {/* Right: The Simplicity Visual (A unified Loop) */}
          <div className="relative mt-20 lg:mt-0 lg:w-1/2">
             <div className="relative mx-auto aspect-square w-full max-w-md p-8 lg:p-12">
                {/* Background Rotating Ring */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.05]"
                >
                   <div className="h-full w-full border-[20px] border-black border-dashed rounded-full" />
                </motion.div>

                {/* Central Platform Box */}
                <div className="relative z-10 h-full w-full rounded-[4rem] bg-white shadow-2xl border border-black/5 p-12 flex flex-col items-center justify-center text-center gap-8 overflow-hidden">
                   {/* Logo / Central Identity */}
                   <div className="relative flex flex-col items-center gap-4">
                      <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-zinc-900 shadow-xl overflow-hidden relative">
                         <Layout className="h-10 w-10 text-white/20" />
                         <motion.div 
                            animate={{ y: [-20, 20], opacity: [0, 1, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute h-1 w-full bg-emerald-500 blur-sm" 
                         />
                      </div>
                      <span className="font-display text-[10px] font-bold uppercase tracking-[0.5em] text-black">Qlozet Core</span>
                   </div>

                   {/* Unified Connections Visual */}
                   <div className="flex flex-col items-center gap-4">
                      <p className="font-ui text-xs text-black/40 max-w-[150px]">Design, Vendor, and Logistics Unified in One Engine.</p>
                      <div className="flex -space-x-4">
                         {[...Array(4)].map((_, i) => (
                            <div key={i} className="h-8 w-8 rounded-full bg-zinc-50 border border-black/5 flex items-center justify-center shadow-lg">
                               <UserCircle className="h-4 w-4 text-black/40" />
                            </div>
                         ))}
                         <div className="h-8 w-8 rounded-full bg-emerald-500 border border-white flex items-center justify-center shadow-lg text-white font-mono text-[8px] font-bold">
                            +42
                         </div>
                      </div>
                   </div>

                   {/* Digital Seal */}
                   <div className="absolute bottom-12 h-1 w-20 bg-black/5 rounded-full" />
                </div>

                {/* Floating Labels */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-10 left-10 p-3 bg-white rounded-xl shadow-xl border border-black/5 font-mono text-[7px] font-bold uppercase tracking-widest text-black/40"
                >
                   All-in-One Engine
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, delay: 2, repeat: Infinity }}
                  className="absolute bottom-10 right-10 p-3 bg-white rounded-xl shadow-xl border border-black/5 font-mono text-[7px] font-bold uppercase tracking-widest text-black/40"
                >
                   Zero Fragmentation
                </motion.div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

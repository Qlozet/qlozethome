"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ScanFace, ArrowRight } from "lucide-react";
import Link from "next/link";

type HeroData = {
  badge: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
};

type HeroSectionProps = {
  data: HeroData;
};

export function HeroSection({ data }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-[#050505] pt-32 lg:pt-40" data-theme="dark">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-emerald-500 opacity-20 blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto w-full max-w-[94rem] px-6"
      >
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
          {/* Left Column: Text */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6 ">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <div className="h-px w-8 bg-white/20" />
                <span className="font-display text-[10px] font-bold uppercase tracking-[0.5em] text-white/40">
                  {data.badge}
                </span>
                <ScanFace className="h-3 w-3 text-emerald-500 animate-pulse" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="max-w-3xl font-display text-5xl font-medium leading-[1.05] tracking-tighter text-white sm:text-7xl lg:text-8xl"
              >
                {data.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="max-w-xl font-ui text-lg leading-relaxed text-white/60 sm:text-2xl"
              >
                {data.description}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-8 sm:flex-row sm:items-center"
            >
              <Link
                href={data.cta.href}
                className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-white px-12 text-[10px] font-bold uppercase tracking-[0.4em] text-black transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {data.cta.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Visual Component */}
          <motion.div
            style={{ y, opacity }}
            className="relative lg:mt-0 lg:w-1/2"
          >
            <div className="relative aspect-square w-full max-w-lg mx-auto">
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 rounded-full border border-dashed border-white/10"
               />
               <motion.div 
                 animate={{ rotate: -360 }}
                 transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-12 rounded-full border border-white/5"
               />
               
               {/* 3D Wireframe / Scan Visual overlay (Abstract) */}
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64 bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col items-center justify-center">
                     {/* Scanning Line */}
                     <motion.div 
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-0.5 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] z-20"
                     />
                     <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2310b981' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")` }} />
                     
                     <div className="z-10 flex flex-col items-center gap-4">
                        <ScanFace className="h-16 w-16 text-white/80 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" strokeWidth={1} />
                        <div className="flex flex-col items-center">
                           <span className="font-mono text-[8px] text-emerald-400 tracking-widest">BIOMETRIC DATA CAPTURE</span>
                           <span className="font-mono text-xl text-white font-light tracking-tighter">142_POINTS</span>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Floating Context Cards */}
               <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="absolute top-1/4 right-0 sm:-right-8 bg-zinc-900 border border-white/10 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3"
               >
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <div className="flex flex-col">
                     <span className="font-mono text-[8px] text-zinc-400 tracking-widest uppercase">Accuracy</span>
                     <span className="font-display text-sm font-bold text-white">99.8%</span>
                  </div>
               </motion.div>

               <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, type: "spring" }}
                  className="absolute bottom-1/4 left-0 sm:-left-4 bg-zinc-900 border border-white/10 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3"
               >
                  <div className="flex flex-col text-right">
                     <span className="font-mono text-[8px] text-zinc-400 tracking-widest uppercase">Format</span>
                     <span className="font-display text-sm font-bold text-white">Universal Metric</span>
                  </div>
                  <div className="h-8 w-px bg-white/10" />
                  <span className="font-mono text-[10px] text-white tracking-widest">CM/IN</span>
               </motion.div>

            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

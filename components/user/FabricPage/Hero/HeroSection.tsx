"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import { Scissors, ArrowRight } from "lucide-react";
import Link from "next/link";

type HeroData = {
  badge: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
  closing?: string;
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-white pt-32 lg:pt-40" data-theme="light">
      {/* Background Thread Lines */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent" />
        <svg className="absolute w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
           {[...Array(5)].map((_, i) => (
             <motion.path
               key={i}
               d={`M -20,${20 + i * 15} C 30,${10 + i * 10} 70,${40 + i * 20} 120,${30 + i * 15}`}
               fill="none"
               stroke="black"
               strokeWidth="0.1"
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{ duration: 4 + i, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
             />
           ))}
        </svg>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-[94rem] px-6"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-20">
          {/* Left Column: Text */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.div variants={itemVariants} className="flex items-center gap-3">
                <div className="h-px w-8 bg-black/20" />
                <span className="font-display text-[10px] font-bold uppercase tracking-[0.5em] text-black/40">
                  {data.badge}
                </span>
                <Scissors className="h-3 w-3 text-emerald-500 animate-pulse" />
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="max-w-3xl font-display text-5xl font-medium leading-[1.05] tracking-tighter text-black sm:text-7xl lg:text-8xl"
              >
                {data.title}
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="max-w-xl font-ui text-lg leading-relaxed text-black/60 sm:text-2xl"
              >
                {data.description}
              </motion.p>
            </div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-8 sm:flex-row sm:items-center"
            >
              <Link
                href={data.cta.href || "/explore"}
                className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-black px-12 text-[10px] font-bold uppercase tracking-[0.4em] text-white transition-all shadow-2xl shadow-black/20 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">{data.cta.label}</span>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-zinc-800 to-black opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </motion.div>

            {data.closing && (
               <motion.p variants={itemVariants} className="font-display text-[10px] font-bold uppercase tracking-widest text-black/30 mt-4">
                  {data.closing}
               </motion.p>
            )}
          </div>

          {/* Right Column: Visual Component - The Loom */}
          <motion.div
            style={{ y, opacity }}
            className="relative mt-20 lg:mt-0 lg:w-1/2"
          >
            <div className="relative aspect-[4/5] w-full max-w-lg mx-auto">
               {/* Abstract Woven Core */}
               <motion.div 
                 animate={{ rotate: [0, 3, 0] }}
                 transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute inset-0 flex items-center justify-center"
               >
                  <div className="relative h-full w-full rounded-[4rem] bg-zinc-50 border border-black/5 shadow-2xl overflow-hidden flex flex-col items-center justify-center">
                     
                     {/* Horizontal Warp Threads */}
                     <div className="absolute inset-0 flex flex-col justify-between py-12 opacity-5 pointer-events-none">
                        {[...Array(20)].map((_, i) => <div key={i} className="h-px w-full bg-black" />)}
                     </div>
                     {/* Vertical Weft Threads */}
                     <div className="absolute inset-0 flex justify-between px-12 opacity-5 pointer-events-none">
                        {[...Array(20)].map((_, i) => <div key={i} className="w-px h-full bg-black" />)}
                     </div>

                     {/* Flowing Fabric Wave */}
                     <svg className="absolute inset-0 w-full h-full drop-shadow-2xl" viewBox="0 0 400 500">
                        <defs>
                           <linearGradient id="fabricGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                              <stop offset="50%" stopColor="#000000" stopOpacity="0.8" />
                              <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
                           </linearGradient>
                           <filter id="displacement">
                              <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" />
                              <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" xChannelSelector="R" yChannelSelector="G" />
                           </filter>
                        </defs>
                        
                        <motion.path 
                           d="M -50 400 Q 150 200, 200 250 T 450 100 L 450 600 L -50 600 Z"
                           fill="url(#fabricGradient)"
                           filter="url(#displacement)"
                           animate={{
                              d: [
                                 "M -50 400 Q 150 200, 200 250 T 450 100 L 450 600 L -50 600 Z",
                                 "M -50 350 Q 150 250, 200 200 T 450 150 L 450 600 L -50 600 Z",
                                 "M -50 400 Q 150 200, 200 250 T 450 100 L 450 600 L -50 600 Z"
                              ]
                           }}
                           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        />
                     </svg>
                     
                     {/* HUD Overlay */}
                     <div className="absolute top-8 left-8 right-8 flex justify-between items-start">
                        <div className="flex flex-col gap-1 bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-sm border border-black/5">
                           <span className="font-display text-[7px] font-bold uppercase tracking-widest text-zinc-400">Thread Count</span>
                           <span className="font-mono text-[10px] font-bold text-black">1200 TC</span>
                        </div>
                        <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse" />
                     </div>
                  </div>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

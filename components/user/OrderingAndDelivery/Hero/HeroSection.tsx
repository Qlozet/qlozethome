"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Package, Truck, ArrowRight, Activity } from "lucide-react";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any },
    },
  };

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-white pt-32 lg:pt-40" data-theme="light">
      {/* Dynamic Logistics Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        {/* Animated Waypoints Path */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M -10,50 Q 25,20 50,50 T 110,50"
            fill="none"
            stroke="black"
            strokeWidth="0.1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
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
                <Activity className="h-3 w-3 text-emerald-500 animate-pulse" />
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
                href={data.cta.href}
                className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-black px-12 text-[10px] font-bold uppercase tracking-[0.4em] text-white transition-all shadow-2xl shadow-black/20 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">{data.cta.label}</span>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-zinc-800 to-black opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
              
              <div className="flex items-center gap-4 text-black/40">
                <Truck className="h-5 w-5" />
                <span className="font-display text-[9px] font-bold uppercase tracking-widest italic">Seamless Transit</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Component */}
          <motion.div
            style={{ y, opacity }}
            className="relative mt-20 lg:mt-0 lg:w-1/2"
          >
            <div className="relative aspect-square w-full max-w-lg mx-auto">
              {/* Central Parcel Metaphor */}
              <motion.div 
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [2, -2, 2]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative h-64 w-64 md:h-80 md:w-80">
                  {/* Glassmorphism Shipping Card */}
                  <div className="absolute -inset-10 flex items-center justify-center">
                    <div className="h-full w-full rounded-[4rem] bg-zinc-50/50 backdrop-blur-3xl border border-black/5 shadow-2xl rotate-6" />
                  </div>
                  
                  {/* The 'Box' visual */}
                  <div className="relative h-full w-full rounded-[3rem] bg-zinc-900 shadow-2xl flex items-center justify-center overflow-hidden">
                     <Package className="h-32 w-32 text-white/10" />
                     <div className="absolute bottom-8 left-8 flex flex-col gap-1">
                        <span className="font-mono text-[8px] text-white/40 uppercase tracking-widest">Tracking ID: QL-294-ZX</span>
                        <div className="h-1 w-24 bg-white/5 rounded-full overflow-hidden">
                           <motion.div 
                              initial={{ width: "0%" }}
                              animate={{ width: "65%" }}
                              transition={{ duration: 2, delay: 1 }}
                              className="h-full bg-emerald-500" 
                           />
                        </div>
                     </div>
                     {/* QR/Barcode detail */}
                     <div className="absolute top-8 right-8 flex gap-1">
                        {[...Array(4)].map((_, i) => (
                           <div key={i} className="w-0.5 h-6 bg-white/20" />
                        ))}
                     </div>
                  </div>
                </div>
              </motion.div>

              {/* Waypoint Markers */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute top-1/4 -right-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-xl border border-black/5 rotate-12"
              >
                 <ArrowRight className="h-6 w-6 text-black/20" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Segmented Progress Line at Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 flex items-center px-10 gap-4 opacity-10">
         {[...Array(12)].map((_, i) => (
            <div key={i} className="flex-1 h-px bg-black" />
         ))}
      </div>
    </section>
  );
}

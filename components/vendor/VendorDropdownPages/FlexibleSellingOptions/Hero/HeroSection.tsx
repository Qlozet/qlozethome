"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

type HeroSectionData = typeof import("@/data/vendor/flexiblesellingoptions/hero.json");

type HeroSectionProps = {
  data: HeroSectionData;
};

export function HeroSection({ data }: HeroSectionProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const marqueeX1 = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]), springConfig);
  const marqueeX2 = useSpring(useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]), springConfig);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any },
    },
  };

  return (
    <section ref={containerRef} id={data.id} className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#FAFAFA] pt-20">
      
      {/* Massive Marquee Typography Background */}
      <motion.div style={{ opacity }} className="absolute inset-0 flex flex-col justify-center gap-4 text-[#050505]/[0.03] pointer-events-none select-none overflow-hidden">
        <motion.div style={{ x: marqueeX1 }} className="flex whitespace-nowrap font-display text-[20vw] font-bold leading-none tracking-tight">
           FLEXIBLE SELLING OPTIONS FLEXIBLE SELLING OPTIONS FLEXIBLE SELLING OPTIONS
        </motion.div>
        <motion.div style={{ x: marqueeX2 }} className="flex whitespace-nowrap font-display text-[20vw] font-bold leading-none tracking-tight">
           ADAPTIVE MODULARITY ADAPTIVE MODULARITY ADAPTIVE MODULARITY ADAPTIVE MODULARITY
        </motion.div>
      </motion.div>

      {/* Central Glassmorphism Content Module */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-6 text-center"
      >
        <motion.div 
          variants={itemVariants}
          className="flex w-full flex-col items-center gap-10 rounded-[3rem] border border-[#3A3A3A]/5 bg-white/70 p-10 backdrop-blur-3xl shadow-[0_40px_80px_rgba(0,0,0,0.05)] sm:p-16 lg:p-24"
        >
          <div className="flex flex-col items-center gap-6">
            <span className="inline-flex w-fit items-center gap-3 rounded-full border border-[#3A3A3A]/10 bg-[#3A3A3A]/5 px-6 py-2 font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/60">
              <div className="h-1.5 w-1.5 rounded-full bg-[#FF6A3D] animate-pulse" />
              {data.badge}
            </span>
            
            <h1 className="max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-[#3A3A3A] sm:text-7xl lg:text-[7rem] lg:leading-[0.95]">
              {data.title}
            </h1>
          </div>

          <p className="max-w-2xl font-ui text-lg leading-relaxed text-[#3A3A3A]/60 lg:text-xl">
            {data.description}
          </p>
          
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <Link
              href={data.cta.href}
              className="inline-flex h-14 items-center justify-center rounded-full bg-[#050505] px-10 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-xl transition-transform hover:scale-[1.05] active:scale-[0.98]"
            >
              {data.cta.label}
            </Link>
            <Link
              href="#toolkit"
              className="group inline-flex h-14 items-center justify-center gap-3 rounded-full px-8 text-xs font-bold uppercase tracking-[0.2em] text-[#3A3A3A]/50 transition-colors hover:bg-[#3A3A3A]/5 hover:text-[#3A3A3A]"
            >
              Explore Toolkits
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 transition-transform group-hover:translate-x-1">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}


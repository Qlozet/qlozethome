"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

type HeroSectionData = typeof import("@/data/vendor/vendordropdown/shipsmarter/hero.json");

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
  const y = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "20%"]), springConfig);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  const lineY = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section ref={containerRef} id={data.id} className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#050505] pt-24 pb-20 sm:pt-32 lg:h-screen lg:pt-0 lg:pb-0">
      {/* Central Animated Tracking Line */}
      <div className="absolute inset-y-0 left-1/2 z-0 w-px -translate-x-1/2 bg-white/10 hidden lg:block">
         <motion.div 
           style={{ y: lineY }}
           className="absolute top-0 h-[60vh] w-full bg-gradient-to-b from-transparent via-[#FF6A3D] to-transparent shadow-[0_0_20px_rgba(255,106,61,0.6)]"
         />
      </div>

      {/* Decorative Target Node */}
      <div className="absolute top-[65%] left-1/2 z-0 hidden w-6 h-6 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white/20 bg-[#050505] lg:flex">
         <div className="h-1.5 w-1.5 rounded-full bg-white/40" />
      </div>

      {/* Content Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity, scale }}
        className="relative z-10 mx-auto flex w-full max-w-[94rem] flex-col px-6 text-center"
      >
        <div className="flex flex-col items-center gap-8 justify-center">
            <motion.span 
              variants={itemVariants}
              className="inline-flex rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.5em] text-white/70 backdrop-blur-md"
            >
              {data.badge}
            </motion.span>
            
            <motion.h1 
              variants={itemVariants}
              className="max-w-[1200px] font-display text-5xl font-medium leading-[1.05] tracking-tighter text-white sm:text-7xl lg:text-[7rem]"
            >
              <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                Ship smarter&mdash;
              </span>
              <br />
              labels, tracking, <br /> and SLAs
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="max-w-2xl font-ui text-lg leading-relaxed text-white/50 sm:text-2xl mt-4"
            >
              Configure your zones and rates, print labels in a click, schedule pickups, and keep customers in the loop seamlessly.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center"
            >
              <Link
                href={data.cta.href}
                className="inline-flex items-center justify-center rounded-full bg-white px-12 py-5 text-[10px] font-bold uppercase tracking-[0.3em] text-black shadow-2xl shadow-white/10 transition-all hover:scale-[1.05] active:scale-95"
              >
                {data.cta.label}
              </Link>
              <Link
                href="#why"
                className="group inline-flex items-center justify-center gap-4 px-8 py-5 text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 transition-colors hover:text-white"
              >
                Explore Logistics
                <div className="h-px w-6 bg-white/70 transition-all duration-500 group-hover:w-16 group-hover:bg-white" />
              </Link>
            </motion.div>
        </div>
      </motion.div>
    </section>
  );
}


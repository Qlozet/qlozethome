"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

type HeroSectionData = typeof import("@/data/vendor/vendordropdown/chatwithcustomers/hero.json");

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
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 1.1]), springConfig);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const blur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(20px)"]);

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

  return (
    <section ref={containerRef} id={data.id} className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#050505] pt-20" data-theme="dark">
      
      {/* Immersive Background Image */}
      <motion.div style={{ scale, opacity, filter: blur }} className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src={data.image.src}
          alt={data.image.alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </motion.div>
      
      {/* Deep Frosted Overlay */}
      <div className="absolute inset-0 z-0 bg-black/60 backdrop-blur-2xl transition-all duration-1000 hover:backdrop-blur-xl pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#050505] via-transparent to-black/50 pointer-events-none" />

      {/* Content Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-6 text-center"
      >
        <div className="flex flex-col items-center gap-8">
          <motion.span 
            variants={itemVariants}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-2 font-display text-[10px] font-bold uppercase tracking-[0.4em] text-white/70 backdrop-blur-md"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-[#FF6A3D] animate-pulse" />
            {data.badge}
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="font-display text-5xl font-medium leading-[1.05] tracking-tighter text-white sm:text-7xl lg:text-[7.5rem] lg:leading-[0.95]"
          >
            {data.title}
          </motion.h1>
        </div>

        <motion.p 
          variants={itemVariants}
          className="mx-auto mt-10 max-w-2xl font-ui text-lg leading-relaxed text-white/50 lg:text-xl"
        >
          {data.description}
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center"
        >
          <Link
            href={data.cta.href}
            className="inline-flex h-14 items-center justify-center rounded-full bg-white px-10 text-xs font-bold uppercase tracking-[0.2em] text-[#050505] shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-transform hover:scale-[1.05] active:scale-[0.98]"
          >
            {data.cta.label}
          </Link>
          <Link
            href="#why"
            className="group inline-flex h-14 items-center justify-center gap-3 rounded-full px-8 text-xs font-bold uppercase tracking-[0.2em] text-white/50 transition-colors hover:bg-white/5 hover:text-white"
          >
            Explore Experience
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 transition-transform group-hover:translate-y-1">
              <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}


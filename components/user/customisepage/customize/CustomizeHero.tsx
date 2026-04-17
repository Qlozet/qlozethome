"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type CustomizeData = typeof import("@/data/user/customize/customize.json");

type CustomizeHeroProps = {
  data: CustomizeData;
};

export function CustomizeHero({ data }: CustomizeHeroProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any } },
  };

  return (
    <section ref={containerRef} id={data.id} className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-[#FAFAFA] pt-32 pb-20" data-theme="light">
      
      {/* Blueprint Grid Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* The Canvas Window (Arch Image) */}
      <motion.div style={{ y, opacity, scale }} className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none mt-20">
        <div className="relative h-[80vh] w-[90vw] max-w-[800px] overflow-hidden rounded-t-[500px] rounded-b-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.08)] lg:h-[90vh]">
          <Image
            src={data.image.src}
            alt={data.image.alt}
            fill
            className="object-cover"
            priority
            sizes="(min-width: 1024px) 800px, 90vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-transparent to-transparent" />
        </div>
      </motion.div>

      {/* Content Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center lg:gap-10"
      >
        <motion.span variants={itemVariants} className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/80 px-6 py-2 pb-2 backdrop-blur-md">
          <div className="h-1.5 w-1.5 rounded-full bg-[#FF6A3D] animate-pulse" />
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-black/60 pt-0.5">
            {data.badge}
          </span>
        </motion.span>
        
        <motion.h1 
          variants={itemVariants}
          className="font-display text-6xl font-medium leading-[0.9] tracking-tighter text-black sm:text-7xl md:text-8xl lg:text-[10rem]"
        >
          {data.title}
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="max-w-xl font-ui text-lg leading-relaxed text-black/60 backdrop-blur-sm sm:text-xl"
        >
          {data.description}
        </motion.p>
        
        <motion.div variants={itemVariants} className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href={data.cta.href}
            className="inline-flex h-14 items-center justify-center rounded-full bg-[#050505] px-10 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-xl transition-transform hover:scale-[1.05] active:scale-[0.98]"
          >
            {data.cta.label}
          </Link>
          <Link
            href="#how-it-works"
            className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-white/80 backdrop-blur-md px-8 text-xs font-bold uppercase tracking-[0.2em] text-black/60 transition-colors hover:bg-white hover:text-black border border-black/5 shadow-sm"
          >
            Learn the Process
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 transition-transform group-hover:translate-y-1">
              <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

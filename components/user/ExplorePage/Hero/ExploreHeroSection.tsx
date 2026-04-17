"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

type ExploreData = typeof import("@/data/user/explore/hero.json");

type ExploreHeroProps = {
  data: ExploreData;
};

export function ExploreHero({ data }: ExploreHeroProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const yImage = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "15%"]), springConfig);
  const yText = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]), springConfig);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as any } },
  };

  return (
    <section ref={containerRef} id={data.id} className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-[#F9F9F8] px-6 pt-32 pb-20">
      
      {/* Gallery Frame (Image Layer) */}
      <motion.div 
        style={{ y: yImage, opacity }} 
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
      >
        <div className="relative aspect-[3/4] w-full max-w-xl md:aspect-[4/3] md:max-w-4xl opacity-40 mix-blend-multiply">
          <Image
            src={data.image.src || "/image/tailormeasuringtape.png"}
            alt={data.image.alt || "Curated Gallery"}
            fill
            className="object-cover grayscale transition-all duration-[2s] hover:grayscale-[0.5]"
            priority
            sizes="(min-width: 768px) 70vw, 100vw"
          />
          {/* Framed Matte Effect */}
          <div className="absolute inset-0 border-[20px] border-[#F9F9F8]/80 max-sm:border-[10px]" />
        </div>
      </motion.div>

      {/* Content Container (Foreground Layer) */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center"
      >
        {/* Exhibition Badge */}
        <motion.div variants={itemVariants} className="mb-12 flex items-center gap-4">
          <div className="h-px w-8 bg-[#1A1A1A]" />
          <span className="font-ui text-[10px] font-bold uppercase tracking-[0.4em] text-[#1A1A1A]">
            {data.badge}
          </span>
          <div className="h-px w-8 bg-[#1A1A1A]" />
        </motion.div>
        
        {/* Massive Sprawling Title */}
        <motion.div style={{ y: yText }} className="relative z-20 flex flex-col items-center">
          <motion.h1 
            variants={itemVariants}
            className="font-display text-[4rem] font-light leading-[0.85] tracking-tighter text-[#1A1A1A] sm:text-[6rem] md:text-[8rem] lg:text-[10rem]"
          >
            {/* Split title for overlapping editorial effect */}
            <span className="block text-left -ml-10 sm:-ml-20">Explore</span>
            <span className="block italic text-[#A38A59]">Vendors</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="mt-12 max-w-xl font-ui text-lg leading-relaxed text-[#1A1A1A]/70 sm:text-xl"
          >
            {data.description}
          </motion.p>
        </motion.div>

        {/* Gallery CTA Block */}
        <motion.div variants={itemVariants} className="mt-16 flex flex-col gap-6 sm:flex-row sm:items-center">
          <Link
            href={data.cta.href}
            className="group relative inline-flex h-14 items-center justify-center overflow-hidden bg-[#1A1A1A] px-10 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-black hover:px-12"
          >
            <span className="relative z-10">{data.cta.label}</span>
          </Link>
          <Link
            href="#perks"
            className="group inline-flex h-14 items-center justify-center gap-3 border-b border-[#1A1A1A]/20 px-4 text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/60 transition-all hover:border-[#1A1A1A] hover:text-[#1A1A1A]"
          >
            View Exhibition
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 transition-transform group-hover:translate-y-1">
              <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

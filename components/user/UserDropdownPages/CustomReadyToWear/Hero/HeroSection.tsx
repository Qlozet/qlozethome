"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Scissors, Ruler, Shirt, Star } from "lucide-react";

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
    <section className="relative min-h-screen w-full flex items-center justify-center pt-20" data-theme="light">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.02),transparent)]" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto w-full max-w-[94rem] px-6 md:px-10 lg:px-10"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-24">
          {/* Left: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.div 
                variants={itemVariants}
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#111111]/40"
              >
                THE ATELIER START
              </motion.div>
              
              <motion.h1
                variants={itemVariants}
                className="font-display text-5xl font-medium leading-[1] tracking-tighter text-[#111111] sm:text-7xl lg:text-8xl xl:text-9xl"
              >
                {data.title}
              </motion.h1>
              
              <motion.p
                variants={itemVariants}
                className="max-w-xl font-ui text-lg leading-relaxed text-[#111111]/50 sm:text-2xl"
              >
                {data.description}
              </motion.p>
            </div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-6 sm:flex-row sm:items-center"
            >
              <Link
                href={data.cta.href}
                className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-brand-button px-12 text-[11px] font-bold uppercase tracking-[0.35em] text-white transition-all hover:scale-[1.02] active:scale-95"
              >
                <span className="relative z-10">{data.cta.label}</span>
                <div className="absolute inset-0 z-0 bg-brand opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Visual Journey Kickoff */}
          <div className="relative mt-20 lg:mt-0 lg:w-1/2">
             <div className="relative mx-auto aspect-[4/5] w-full max-w-lg rounded-[3.5rem] bg-zinc-50 border border-brand-darker/5 shadow-2xl p-4 overflow-hidden group">
                <Image
                  src="/image/custom-outfit-3.webp"
                  alt="Atelier Vision"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                
                {/* Decorative Pattern Lines */}
                <div className="absolute top-10 right-10 flex flex-col gap-2">
                   <div className="h-0.5 w-12 bg-white/40" />
                   <div className="h-0.5 w-8 bg-white/40" />
                </div>
             </div>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-px h-24 bg-brand-darker/10" />
        <div className="w-3 h-3 rounded-full bg-brand-darker shadow-2xl ring-4 ring-black/5" />
      </div>
    </section>
  );
}

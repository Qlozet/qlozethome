"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type HeroData = typeof import("@/data/home/hero.json");

type HeroSectionProps = {
  data: HeroData;
};

export function HeroSection({ data }: HeroSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1] as any 
      }
    }
  };

  return (
    <section ref={ref} id={data.id} className="relative h-dvh min-h-[100vh] w-full overflow-hidden bg-black sm:h-[900px]" data-theme="dark">
      {/* Background Layer with Parallax-lite effect */}
      <motion.div 
        style={{ y, opacity }}
        initial={{ scale: 1.15, filter: "blur(10px)", opacity: 0 }}
        animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] as any }}
        className="absolute inset-0"
      >
        <Image
          src={data.image.src}
          alt={data.image.alt}
          fill
          className="object-cover object-top grayscale-[0.2] brightness-[0.4] transition-all duration-1000 hover:scale-105 hover:grayscale-0 hover:brightness-75"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30" />
      </motion.div>

      {/* Content Layer - Unified Absolute Layout */}
      <div className="absolute inset-0 mx-auto z-10 w-full max-w-[94rem]">
        <div className="flex h-full flex-col justify-center gap-12 px-6 md:px-10 lg:px-10 pt-20">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-10"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-6">
              <span className="inline-flex h-px w-16 bg-white/40 sm:block hidden" />
              <span className="font-display text-[11px] font-bold uppercase tracking-[0.5em] text-white/50">
                Editorial Issue No. 01 / Digital Atelier Standard
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants} 
              className="font-display max-w-5xl text-7xl font-medium leading-[0.9] tracking-tighter text-white sm:text-9xl lg:text-[11rem]"
            >
              {data.title}
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="max-w-xl font-ui text-lg leading-relaxed text-white/40 sm:text-2xl"
            >
              {data.description}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col gap-6 pt-6 sm:flex-row sm:items-center">
              <Link
                href={data.primaryAction.href}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-16 py-6 text-[10px] font-bold uppercase tracking-[0.4em] text-black shadow-2xl transition-all hover:scale-105 active:scale-[0.98]"
              >
                <span className="relative z-10">{data.primaryAction.label}</span>
                <div className="absolute inset-0 -translate-x-full bg-zinc-100 transition-transform duration-500 group-hover:translate-x-0" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Meta Annotation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 right-12 z-20 hidden lg:block"
      >
        <div className="flex flex-col items-end gap-2 text-right">
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Est. 2024</span>
          <span className="font-ui text-[8px] uppercase tracking-[0.2em] text-white/20">Digital Atelier Standard</span>
        </div>
      </motion.div>

      {/* Scroll Prompt */}
      <div className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2">
        <Link
          href="#top"
          className="flex flex-col items-center gap-4 text-[10px] font-bold uppercase tracking-[0.5em] text-white/40 transition-all hover:text-white"
        >
          <div className="h-12 w-px bg-gradient-to-b from-transparent via-white/50 to-transparent" />
          <span>{data.scrollPrompt.up || "Begin Journey"}</span>
        </Link>
      </div>
    </section>
  );
}



"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Scan, ShieldCheck, ArrowRight } from "lucide-react";

type HeroData = {
  badge: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
  image: { src: string; alt: string };
};

type MeasurementHeroProps = {
  data: HeroData;
};

export function MeasurementHero({ data }: MeasurementHeroProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "20%"]), springConfig);

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
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-white pt-32 lg:pt-40" data-theme="light">
      <div className="absolute top-0 right-0 w-1/2 h-[80vh] bg-[#F9F9F8]/50 -z-10 rounded-bl-[5rem]" />

      {/* Cybernetic Background Detail */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto w-full max-w-[94rem] px-6 md:px-10 lg:px-10"
      >
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-20">
          {/* Left Column: Typography */}
          <div className="flex flex-col gap-12 lg:w-3/5 lg:pt-20">
            <div className="flex flex-col gap-8">
              <motion.span
                variants={itemVariants}
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/40"
              >
                {data.badge}
              </motion.span>

              <div className="relative">
                <motion.h1
                  variants={itemVariants}
                  className="relative z-10 max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-[#111111] sm:text-7xl lg:text-[5.5rem]"
                >
                  {data.title}
                </motion.h1>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100px" }}
                  transition={{ delay: 1, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -left-12 top-1/2 h-px bg-black/10 hidden xl:block"
                />
              </div>

              <motion.p
                variants={itemVariants}
                className="max-w-xl font-ui text-base leading-relaxed text-[#3A3A3A]/60 sm:text-lg"
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
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-brand-button px-10 text-[10px] font-bold uppercase tracking-[0.3em] text-white transition-all hover:scale-[1.02] active:scale-95"
              >
                <span className="relative z-10">{data.cta.label}</span>
                <div className="absolute inset-0 z-0 bg-brand opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>

              <Link
                href="#biometric"
                className="group inline-flex items-center gap-4 font-display text-[10px] font-bold uppercase tracking-[0.4em] text-brand"
              >
                Initiate AI Scan
                <div className="h-px w-10 bg-brand transition-all duration-500 group-hover:w-16" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual */}
          <motion.div
            style={{ y }}
            className="relative mt-20 lg:mt-0 lg:w-2/5"
          >
            <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-[3rem] bg-zinc-100 shadow-2xl shadow-black/10">
              <Image
                src={data.image.src || "/image/body2.png"}
                alt={data.image.alt}
                fill
                className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                priority
              />
              
              {/* Animated Scanning Line */}
              <motion.div 
                initial={{ top: "-10%", opacity: 0 }}
                animate={{ top: "110%", opacity: [0, 1, 1, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="absolute left-0 right-0 z-20 h-[10px] w-full shadow-[0_0_20px_2px_rgba(0,240,255,0.5)] bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>

            {/* Floating Biometric Detail Element */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="absolute -right-8 bottom-12 z-20 hidden items-center gap-4 rounded-3xl bg-white/80 p-6 backdrop-blur-xl border border-white/20 shadow-2xl lg:flex"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white">
                <Scan className="h-6 w-6" />
              </div>
              <div className="flex flex-col pr-4">
                <span className="font-display text-[10px] font-bold uppercase tracking-wider text-black/40">AI Fit Status</span>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
                  <span className="font-display text-sm font-bold text-black">Ready to Scan</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Store, Globe, ArrowRight } from "lucide-react";

type HeroData = {
  badge: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
  image: { src: string; alt: string };
};

type HeroSectionProps = {
  data: HeroData;
};

export function HeroSection({ data }: HeroSectionProps) {
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
    <section ref={containerRef} className="relative w-full overflow-hidden bg-white pt-24 lg:min-h-screen lg:pt-40" data-theme="light">
      <div className="absolute top-0 right-0 w-1/2 h-[80vh] bg-[#F9F9F8]/50 -z-10 rounded-bl-[5rem]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto w-full max-w-[94rem] px-6"
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
                  className="relative z-10 max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-[#3A3A3A] sm:text-7xl lg:text-[5.5rem]"
                >
                  {data.title}
                </motion.h1>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100px" }}
                  transition={{ delay: 1, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -left-12 top-1/2 h-px bg-[#3A3A3A]/10 hidden xl:block"
                />
              </div>

              <motion.p
                variants={itemVariants}
                className="max-w-xl font-ui text-lg leading-relaxed text-[#3A3A3A]/60 sm:text-2xl"
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
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-[#3A3A3A] px-10 text-[10px] font-bold uppercase tracking-[0.3em] text-white transition-all hover:scale-[1.02] active:scale-95"
              >
                <span className="relative z-10">{data.cta.label}</span>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-zinc-800 to-black opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual */}
          <motion.div
            style={{ y }}
            className="relative mt-8 lg:mt-0 lg:w-2/5"
          >
            <div className="group relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-[2rem] sm:rounded-[3rem] bg-zinc-100 shadow-2xl shadow-black/10">
              <Image
                src={data.image.src}
                alt={data.image.alt}
                fill
                className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>

            {/* Floating Live Detail Element */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="absolute -right-8 bottom-12 z-20 hidden items-center gap-4 rounded-3xl bg-white/80 p-6 backdrop-blur-xl border border-white/20 shadow-2xl lg:flex"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3A3A3A] text-white">
                <Store className="h-6 w-6" />
              </div>
              <div className="flex flex-col pr-4">
                <span className="font-display text-[10px] font-bold uppercase tracking-wider text-[#3A3A3A]/40">Status</span>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#F9F9F8]0 animate-pulse" />
                  <span className="font-display text-sm font-bold text-[#3A3A3A]">Store Live</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

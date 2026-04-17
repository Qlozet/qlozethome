"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

type HeroSectionData = typeof import("@/data/vendor/vendordropdown/clothinggenerator/hero.json");

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

  return (
    <section ref={containerRef} id={data.id} className="relative min-h-screen w-full overflow-hidden bg-white pt-32 lg:pt-32" data-theme="light">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-[80vh] bg-zinc-50/50 -z-10 rounded-bl-[5rem]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto w-full max-w-[94rem] px-6"
      >
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-20">
          {/* Left Column: Typography & CTAs */}
          <div className="flex flex-col gap-12 lg:w-3/5 lg:pt-20">
            <div className="flex flex-col gap-8">
              <motion.span
                variants={itemVariants}
                className="font-display text-[10px] font-bold uppercase tracking-[0.5em] text-black/40"
              >
                {data.badge}
              </motion.span>

              <div className="relative">
                <motion.h1
                  variants={itemVariants}
                  className="relative z-10 max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tighter text-black sm:text-7xl lg:text-[5.5rem]"
                >
                  {data.title}
                </motion.h1>
                {/* Visual Accent */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100px" }}
                  transition={{ delay: 1, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -left-12 top-1/2 h-px bg-black/10 hidden xl:block"
                />
              </div>

              <motion.p
                variants={itemVariants}
                className="max-w-xl font-ui text-lg leading-relaxed text-black/60 sm:text-2xl"
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
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-black px-10 text-[10px] font-bold uppercase tracking-[0.3em] text-white transition-all hover:scale-[1.02] active:scale-95"
              >
                <span className="relative z-10">{data.cta.label}</span>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-zinc-800 to-black opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>

              <Link
                href="#what"
                className="group inline-flex items-center gap-4 font-display text-[10px] font-bold uppercase tracking-[0.4em] text-black"
              >
                Explore Creation
                <div className="h-px w-10 bg-black transition-all duration-500 group-hover:w-16" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual */}
          <motion.div
            style={{ y }}
            className="relative mt-20 lg:mt-0 lg:w-2/5"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3rem] bg-zinc-100 shadow-2xl shadow-black/10">
              <Image
                src={data.image.src}
                alt={data.image.alt}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>

            {/* Floating Detail Elements */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="absolute -left-16 bottom-16 hidden rounded-2xl bg-white p-8 shadow-xl lg:block"
            >
              <div className="flex flex-col gap-2">
                <span className="font-display text-[9px] font-bold uppercase tracking-[0.3em] text-black/30">Generation</span>
                <span className="font-display text-xl font-medium text-black">Instant Visuals</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}


"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

type DesignYourOutfitData = typeof import("@/data/user/designyouroutfit/designyouroutfit.json");

type DesignYourOutfitHeroProps = {
  data: DesignYourOutfitData;
};

export function DesignYourOutfitHero({ data }: DesignYourOutfitHeroProps) {
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
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any },
    },
  };

  return (
    <section ref={containerRef} id={data.id} className="relative min-h-screen w-full overflow-hidden bg-white pt-32 lg:pt-40">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-[80vh] bg-zinc-50/50 -z-10 rounded-bl-[5rem]" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 mx-auto flex max-w-5xl flex-col items-center gap-12 px-6 text-center"
      >
        {/* Editorial Badge */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-6">
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.5em] text-black/40">
            {data.badge}
          </span>
        </motion.div>
        
        {/* Massive Title */}
        <div className="relative">
          <motion.h1 
            variants={itemVariants}
            className="relative z-10 font-display text-6xl font-medium leading-[1.05] tracking-tighter text-black sm:text-7xl md:text-8xl lg:text-[8.5rem]"
          >
            {data.title}
          </motion.h1>
          {/* Visual Accent */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 1, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -left-20 top-1/2 h-px bg-black/10 hidden xl:block"
          />
        </div>
        
        {/* Elegant Description */}
        <motion.p 
          variants={itemVariants}
          className="max-w-2xl font-ui text-lg leading-relaxed text-black/60 sm:text-xl md:text-2xl"
        >
          {data.description}
        </motion.p>
        
        {/* CTA Block */}
        <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
          <Link
            href={data.cta.href}
            className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-black px-12 text-[10px] font-bold uppercase tracking-[0.3em] text-white transition-all hover:scale-[1.02] active:scale-95"
          >
            <span className="relative z-10">{data.cta.label}</span>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-zinc-800 to-black opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
          <Link
            href="#customize"
            className="group inline-flex items-center gap-4 font-display text-[10px] font-bold uppercase tracking-[0.4em] text-black"
          >
            Explore Canvas
            <div className="h-px w-10 bg-black transition-all duration-500 group-hover:w-16" />
          </Link>
        </motion.div>

        {/* Parallax Image Visual */}
        <motion.div
          style={{ y, opacity }}
          className="relative mt-12 w-full max-w-4xl overflow-hidden rounded-[3rem] bg-zinc-100 shadow-2xl shadow-black/5 aspect-[16/9]"
        >
          <Image
            src={data.image.src || "/image/tailormeasuringtape.png"}
            alt={data.image.alt || "Atelier Design"}
            fill
            className="object-cover grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}


"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

type WhatWeDoData = typeof import("@/data/whatwedo/whatwedo.json");

type WhatWeDoHeroProps = {
  data: WhatWeDoData;
};

export function WhatWeDoHero({ data }: WhatWeDoHeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y = useTransform(smoothProgress, [0, 1], ["0%", "20%"]);

  return (
    <section 
      ref={containerRef}
      id={data.id} 
      className="relative h-[750px] w-full overflow-hidden sm:h-[850px]"
      data-theme="dark"
    >
      <div className="grid h-full w-full grid-cols-1 lg:grid-cols-2">
        {/* Left Background */}
        <div className="h-full w-full bg-[#3A3A3A]" />
        {/* Right Image with Parallax */}
        <div className="relative hidden h-full w-full lg:block">
          <motion.div style={{ y }} className="relative h-[120%] w-full -top-[10%]">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              fill
              className="object-cover grayscale-[0.2] transition-all duration-700 hover:grayscale-0"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#3A3A3A] to-transparent lg:w-32" />
        </div>
      </div>
      {/* Content Container */}
      <div className="absolute inset-0 z-10 mx-auto grid h-full max-w-[94rem] grid-cols-1 lg:grid-cols-2">
        {/* Left Content */}
        <div className="flex h-full flex-col gap-8 pb-12 pt-32 px-6 lg:gap-10 lg:justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6 max-sm:my-auto"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex w-fit rounded-full border border-white/20 bg-white/5 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.4em] text-white backdrop-blur-md"
            >
              {data.badge}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl"
            >
              {data.title}
            </motion.h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-xl font-ui text-base leading-relaxed text-white/50 sm:text-lg"
          >
            {data.description}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Link
              href={data.cta.href}
              className="inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] text-[#3A3A3A] shadow-2xl shadow-black/20 transition-all hover:scale-[1.05] active:scale-[0.98]"
            >
              {data.cta.label}
            </Link>
            <Link
              href="#pillars"
              className="group inline-flex items-center justify-center gap-3 px-8 py-5 text-xs font-bold uppercase tracking-[0.2em] text-white/70 transition-all hover:text-white"
            >
              Explore Pillars
              <motion.svg 
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor" 
                className="h-4 w-4"
              >
                <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clipRule="evenodd" />
              </motion.svg>
            </Link>
          </motion.div>
        </div>
        {/* Right Spacer */}
        <div />
      </div>
    </section>
  );
}


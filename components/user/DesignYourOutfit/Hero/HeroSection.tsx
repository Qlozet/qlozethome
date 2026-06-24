"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Wand2, Layers } from "lucide-react";

type HeroData = {
  badge: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
};

type HeroSectionProps = { data: HeroData };

export function HeroSection({ data }: HeroSectionProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 80]), springConfig);
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 120]), springConfig);
  const y3 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 50]), springConfig);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any },
    },
  };

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-white pt-32 pb-16 lg:pt-40 lg:pb-24" data-theme="light">
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 z-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #000 0.7px, transparent 0.7px)', backgroundSize: '24px 24px' }} />

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 mx-auto w-full max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">

          {/* Left: Text Content */}
          <div className="flex flex-col gap-10 lg:w-1/2 lg:pt-8">
            <div className="flex flex-col gap-8">
              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-lg bg-brand flex items-center justify-center">
                  <Wand2 className="h-3.5 w-3.5 text-white" />
                </div>
                <span className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#111111]/40">
                  {data.badge}
                </span>
              </motion.div>

              <motion.h1 variants={itemVariants}
                className="max-w-2xl font-display text-5xl font-medium leading-[1.02] tracking-tight text-[#111111] sm:text-7xl lg:text-[6.5rem]">
                {data.title}
              </motion.h1>

              <motion.p variants={itemVariants}
                className="max-w-xl font-ui text-base leading-relaxed text-[#111111]/60 sm:text-lg">
                {data.description}
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <Link href={data.cta.href}
                className="group relative inline-flex h-16 items-center justify-center gap-4 overflow-hidden rounded-full bg-brand-darker px-12 text-[10px] font-bold uppercase tracking-[0.4em] text-white transition-all hover:scale-[1.03] active:scale-95 shadow-2xl shadow-black/20">
                <span className="relative z-10">{data.cta.label}</span>
                <ArrowRight className="h-4 w-4 relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 z-0 bg-brand opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>

              <div className="flex items-center gap-6">
                {[
                  { icon: Sparkles, label: "AI-Powered" },
                  { icon: Layers, label: "Multi-Variation" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-[#111111]/25">
                    <item.icon className="h-3.5 w-3.5" />
                    <span className="font-display text-[8px] font-bold uppercase tracking-widest">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social proof strip */}
            <motion.div variants={itemVariants}
              className="flex items-center gap-5 pt-4 border-t border-black/5">
              <div className="flex -space-x-2">
                {["/image/product-1.png", "/image/product-2.png", "/image/product-3.png", "/image/product-4.png"].map((img, i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-white overflow-hidden shadow-sm">
                    <img src={img} alt="" className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-display text-[10px] font-bold text-black uppercase tracking-wider">2,400+ Designs Created</span>
                <span className="font-mono text-[8px] text-black/30 uppercase tracking-widest">This month alone</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Editorial Image Collage */}
          <div className="relative mt-16 lg:mt-0 lg:w-1/2 flex items-center justify-center">
            <div className="relative w-full max-w-[560px] h-[600px] lg:h-[700px]">

              {/* Main Hero Image */}
              <motion.div
                style={{ y: y1 }}
                initial={{ opacity: 0, y: 40, rotate: 2 }}
                animate={{ opacity: 1, y: 0, rotate: 2 }}
                transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-x-0 top-0 z-10 group cursor-pointer"
              >
                <div className="relative aspect-[3/4] w-[75%] mx-auto rounded-[3rem] overflow-hidden shadow-2xl shadow-black/15 border border-black/5 transition-all duration-700 group-hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.3)] group-hover:scale-[1.02] group-hover:rotate-0">
                  <Image src="/image/blue-bespoke-2.png" alt="AI Generated Outfit" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Floating badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-black/5 shadow-md flex items-center gap-2 transition-transform duration-300 group-hover:scale-105"
                  >
                    <Sparkles className="h-3 w-3 text-black" />
                    <span className="font-display text-[8px] font-bold text-black uppercase tracking-widest leading-none">AI Generated</span>
                  </motion.div>

                  {/* Bottom overlay info */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <div className="flex flex-col gap-1">
                      <span className="font-display text-[9px] font-bold text-white uppercase tracking-widest">Ankara Maxi Dress</span>
                      <span className="font-mono text-[8px] text-white/60">Generated in 8 seconds</span>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <span className="font-mono text-[8px] font-bold text-black uppercase tracking-widest leading-none">View</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Secondary Image — Bottom Left */}
              <motion.div
                style={{ y: y2 }}
                initial={{ opacity: 0, x: -30, rotate: -5 }}
                animate={{ opacity: 1, x: 0, rotate: -5 }}
                transition={{ delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 bottom-16 z-20 w-[42%] group cursor-pointer"
              >
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/15 border border-black/5 transition-all duration-700 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] group-hover:scale-105 group-hover:rotate-0">
                  <Image src="/image/custom-outfit-0.png" alt="Bespoke Design" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="font-display text-[8px] font-bold text-white uppercase tracking-widest">Silk Evening Gown</span>
                  </div>
                </div>
              </motion.div>

              {/* Tertiary Image — Bottom Right */}
              <motion.div
                style={{ y: y3 }}
                initial={{ opacity: 0, x: 30, rotate: 4 }}
                animate={{ opacity: 1, x: 0, rotate: 4 }}
                transition={{ delay: 0.9, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute right-0 bottom-8 z-20 w-[38%] group cursor-pointer"
              >
                <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl shadow-black/15 border border-black/5 transition-all duration-700 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] group-hover:scale-105 group-hover:rotate-0">
                  <Image src="/image/fabric-swatch-2.jpg" alt="Fabric Selection" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                  <div className="absolute bottom-3 left-3 right-3 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="font-display text-[7px] font-bold text-white uppercase tracking-widest">Fabric Swatch</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="absolute right-4 top-4 z-30 bg-white rounded-2xl shadow-xl border border-black/5 p-4 flex flex-col gap-2 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-1"
              >
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#3E1C01] animate-pulse" />
                  <span className="font-mono text-[7px] font-bold text-[#3E1C01] uppercase tracking-widest">Live</span>
                </div>
                <span className="font-display text-lg font-bold text-black tracking-tight">3 Variations</span>
                <span className="font-mono text-[7px] text-black/30 uppercase tracking-widest">Ready to refine</span>
              </motion.div>

              {/* Decorative connector lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-[5] opacity-20" viewBox="0 0 560 700" fill="none">
                <motion.line x1="220" y1="420" x2="160" y2="480" stroke="black" strokeWidth="0.5" strokeDasharray="4 4"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.8, duration: 1 }} />
                <motion.line x1="340" y1="430" x2="380" y2="500" stroke="black" strokeWidth="0.5" strokeDasharray="4 4"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2, duration: 1 }} />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

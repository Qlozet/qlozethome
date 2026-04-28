"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HERO_IMAGES = [
  { src: "/image/product-5.png", alt: "Tuxedo" },
  { src: "/image/bespoke-dress-1.png", alt: "Evening Dress" },
  { src: "/image/product-3.png", alt: "Ankara Set" },
  { src: "/image/custom-outfit-2.png", alt: "Custom Suit" }
];

type HeroData = {
  badge: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
};

type ExploreHeroProps = {
  data: HeroData;
};

export function ExploreHero({ data }: ExploreHeroProps) {
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
    hidden: { opacity: 0, y: 20 },
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
    <section className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-12 overflow-hidden" data-theme="light">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.02),transparent)]" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto w-full max-w-[94rem] px-6"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-24">
          {/* Left: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span 
                variants={itemVariants}
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/40"
              >
                {data.badge}
              </motion.span>
              
              <motion.h1
                variants={itemVariants}
                className="font-display text-4xl font-medium leading-[1] tracking-tighter text-[#3A3A3A] sm:text-6xl lg:text-7xl xl:text-8xl"
              >
                {data.title}
              </motion.h1>
              
              <motion.p
                variants={itemVariants}
                className="max-w-xl font-ui text-lg leading-relaxed text-[#3A3A3A]/40 sm:text-2xl"
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
                className="group relative inline-flex h-16 items-center justify-center gap-4 overflow-hidden rounded-full bg-[#3A3A3A] px-12 text-[11px] font-bold uppercase tracking-[0.35em] text-white transition-all hover:scale-[1.02] active:scale-95 shadow-2xl"
              >
                <span className="relative z-10">{data.cta.label}</span>
                <ArrowRight className="h-4 w-4 relative z-10 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Editorial Fashion Collage */}
          <div className="relative mt-20 lg:mt-0 lg:w-1/2">
             <div className="relative mx-auto w-full max-w-[560px] h-[560px] sm:h-[620px]">
                
                {/* Main Hero Image (large, center-left) */}
                <motion.div
                   initial={{ opacity: 0, y: 40, scale: 0.9 }}
                   animate={{ opacity: 1, y: 0, scale: 1 }}
                   transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                   className="absolute top-0 left-0 w-[60%] h-[75%] rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#3A3A3A]/5 z-20"
                >
                   <img src={HERO_IMAGES[0].src} alt={HERO_IMAGES[0].alt} className="w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                   <div className="absolute bottom-5 left-5 right-5">
                      <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full inline-flex items-center gap-2 shadow-sm">
                         <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                         <span className="font-mono text-[8px] font-bold text-[#3A3A3A] uppercase tracking-widest">New Arrivals</span>
                      </div>
                   </div>
                </motion.div>

                {/* Second Image (top-right, overlapping) */}
                <motion.div
                   initial={{ opacity: 0, y: 30, x: 20 }}
                   animate={{ opacity: 1, y: 0, x: 0 }}
                   transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                   className="absolute top-6 right-0 w-[45%] h-[50%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-30"
                >
                   <img src={HERO_IMAGES[1].src} alt={HERO_IMAGES[1].alt} className="w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </motion.div>

                {/* Third Image (bottom-right) */}
                <motion.div
                   initial={{ opacity: 0, y: 20, x: 10 }}
                   animate={{ opacity: 1, y: 0, x: 0 }}
                   transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                   className="absolute bottom-0 right-[5%] w-[42%] h-[42%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-20"
                >
                   <img src={HERO_IMAGES[2].src} alt={HERO_IMAGES[2].alt} className="w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </motion.div>

                {/* Fourth Image (bottom-left, peeking) */}
                <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                   className="absolute bottom-2 left-[5%] w-[35%] h-[30%] rounded-[1.5rem] overflow-hidden shadow-xl border-4 border-white z-10"
                >
                   <img src={HERO_IMAGES[3].src} alt={HERO_IMAGES[3].alt} className="w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </motion.div>

                {/* Floating Stats Badge */}
                <motion.div
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 0.6, delay: 1, type: "spring" }}
                   className="absolute top-[40%] right-[35%] z-40 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-[#3A3A3A]/5 px-5 py-3 flex items-center gap-3"
                >
                   <div className="flex -space-x-2">
                      <div className="h-7 w-7 rounded-full bg-zinc-200 border-2 border-white overflow-hidden">
                         <img src="/image/slim-man.jpg" alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="h-7 w-7 rounded-full bg-zinc-300 border-2 border-white overflow-hidden">
                         <img src="/image/seun.png" alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="h-7 w-7 rounded-full bg-[#3A3A3A] border-2 border-white flex items-center justify-center">
                         <span className="text-[7px] font-bold text-white">+50</span>
                      </div>
                   </div>
                   <div className="flex flex-col">
                      <span className="font-display text-[10px] font-bold text-[#3A3A3A]">200+ Designers</span>
                      <span className="font-mono text-[7px] text-[#3A3A3A]/40 uppercase tracking-widest">Active Now</span>
                   </div>
                </motion.div>
             </div>
          </div>
        </div>
      </motion.div>

      {/* Start of Spine Journey */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-px h-24 bg-[#3A3A3A]/5" />
        <div className="w-2 h-2 rounded-full bg-[#3A3A3A]/10" />
      </div>
    </section>
  );
}

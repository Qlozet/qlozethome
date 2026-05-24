"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

type CTAAction = {
  label: string;
  href: string;
};

type CTAImage = {
  src: string;
  alt: string;
};

type CTAData = {
  id: string;
  title: string;
  description: string;
  primaryAction: CTAAction;
  secondaryAction: CTAAction;
  image: CTAImage;
};

type ClosingCTAProps = {
  data: CTAData;
};

export function ClosingCTA({ data }: ClosingCTAProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y = useSpring(useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]), springConfig);

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
    <section id={data.id} className="scroll-mt-32 bg-white pt-24 pb-48" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <motion.div 
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative overflow-hidden rounded-[4rem] bg-[#3A3A3A] text-white shadow-3xl min-h-[600px] flex flex-col lg:flex-row lg:items-center"
        >
          {/* Background Decorative Mesh */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
             <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent)]" />
             <div className="h-full w-full bg-[repeating-linear-gradient(45deg,transparent,transparent_80px,rgba(255,255,255,0.02)_80px,rgba(255,255,255,0.02)_160px)]" />
          </div>

          <div className="flex flex-col lg:flex-row w-full h-full relative z-10">
            {/* Text Content Column */}
            <div className="flex flex-col justify-center gap-12 p-12 sm:p-20 lg:p-32 lg:w-1/2">
              <div className="flex flex-col gap-8">
                <motion.div 
                  variants={itemVariants}
                  className="flex h-10 w-48 items-center justify-center border border-white/10 bg-white/5 rounded-full font-display text-[9px] font-bold uppercase tracking-[0.4em] text-white/40 shadow-sm backdrop-blur-md"
                >
                  THE FINAL MEASURE
                </motion.div>
                
                <motion.h2 variants={itemVariants} className="font-display text-5xl font-medium leading-[1] tracking-tight text-white sm:text-7xl lg:text-8xl">
                  {data.title}
                </motion.h2>
                <motion.p variants={itemVariants} className="max-w-md font-ui text-lg leading-relaxed text-white/40 sm:text-xl">
                  {data.description}
                </motion.p>
              </div>

              {/* Action Buttons */}
              <motion.div variants={itemVariants} className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href={data.primaryAction.href}
                  className="inline-flex h-18 items-center justify-center rounded-full bg-white px-14 py-6 text-xs font-bold uppercase tracking-[0.35em] text-[#3A3A3A] transition-all hover:scale-[1.05] active:scale-[0.98] shadow-2xl"
                >
                  {data.primaryAction.label}
                </Link>
                <Link
                  href={data.secondaryAction.href}
                  className="group inline-flex h-18 items-center justify-center gap-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-14 py-6 text-xs font-bold uppercase tracking-[0.35em] text-white transition-all hover:bg-white/10 active:scale-[0.98]"
                >
                  {data.secondaryAction.label}
                  <ShoppingCart className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
                </Link>
              </motion.div>
            </div>

            {/* Visual Column - Atelier Atmosphere */}
            <div className="relative min-h-[500px] overflow-hidden lg:h-[800px] lg:w-1/2 rounded-t-[4rem] lg:rounded-l-[4rem] lg:rounded-tr-none">
              <motion.div style={{ y }} className="absolute inset-0">
                <Image
                  src={data.image.src || "/image/custom-outfit-2.png"}
                  alt={data.image.alt}
                  fill
                  className="object-cover object-top transition-transform duration-1000 brightness-75 hover:brightness-100"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              
              {/* Overlay Pattern Visual */}
              <div className="absolute bottom-12 right-12 flex flex-col gap-3 text-right">
                  <span className="font-display text-[9px] font-bold uppercase tracking-widest text-white/20">Signature Collection</span>
                  <div className="h-0.5 w-24 bg-white/10 ml-auto" />
              </div>
            </div>

          </div>
        </motion.div>
      </div>
      
      {/* End of Journey Marker */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
         <div className="w-4 h-4 rounded-full bg-[#3A3A3A]/5 ring-8 ring-black/[0.02]" />
      </div>
    </section>
  );
}

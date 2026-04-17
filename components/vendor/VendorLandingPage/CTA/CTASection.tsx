"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

type CTAData = typeof import("@/data/vendor/vendorlanding/cta.json");

type CTAProps = {
  data: CTAData;
  dark?: boolean;
};

export function VendorCTA({ data, dark = false }: CTAProps) {
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
    <section id={data.id} className={`scroll-mt-32 py-12 pb-24 sm:pb-32 ${dark ? 'bg-[#050505]' : 'bg-white'}`} data-theme={dark ? "dark" : "light"}>
      <div className="mx-auto max-w-[94rem] px-4 sm:px-6">
        <motion.div 
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={`overflow-hidden rounded-[3rem] sm:rounded-[4rem] ${dark ? 'bg-[#0A0A0A] border border-white/5 shadow-2xl' : 'bg-white shadow-2xl'}`}
        >
          <div className="grid lg:grid-cols-2">
            
            {/* Text Content Column */}
            <div className={`flex flex-col justify-center gap-10 p-10 sm:p-16 lg:p-24 ${dark ? 'text-white bg-zinc-900/50' : 'text-black bg-zinc-50'}`}>
              <div className="flex flex-col gap-6">
                <motion.span variants={itemVariants} className={`font-display text-[10px] font-semibold uppercase tracking-[0.4em] ${dark ? 'text-white/40' : 'text-[#3A3A3A]/40'}`}>
                  Global Network
                </motion.span>
                <motion.h2 variants={itemVariants} className={`font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7.5xl ${dark ? 'text-white' : 'text-[#3A3A3A]'}`}>
                  {data.title}
                </motion.h2>
                <motion.p variants={itemVariants} className={`max-w-md font-ui text-base leading-relaxed sm:text-lg ${dark ? 'text-white/60' : 'text-[#3A3A3A]/60'}`}>
                  {data.description}
                </motion.p>
              </div>

              {/* Action Buttons */}
              <motion.div variants={itemVariants} className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href={data.primaryAction.href}
                  className={`inline-flex items-center justify-center rounded-full px-12 py-5 text-xs font-bold uppercase tracking-[0.2em] shadow-2xl transition-all hover:scale-[1.05] active:scale-[0.98] ${dark ? 'bg-white text-black hover:bg-zinc-200' : 'bg-[#3A3A3A] text-white hover:bg-[#2A2A2A]'}`}
                >
                  {data.primaryAction.label}
                </Link>
                <Link
                  href={data.secondaryAction.href}
                  className={`group inline-flex items-center justify-center gap-3 rounded-full border px-12 py-5 text-xs font-bold uppercase tracking-[0.2em] transition-all active:scale-[0.98] ${dark ? 'border-white/20 text-white hover:bg-white/5' : 'border-[#3A3A3A]/20 text-[#3A3A3A] hover:bg-[#3A3A3A]/5'}`}
                >
                  {data.secondaryAction.label}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </motion.div>
            </div>

            {/* Image Column */}
            <div className="relative min-h-[500px] overflow-hidden lg:h-full">
              <motion.div style={{ y }} className="absolute inset-0">
                <Image
                  src={data.image.src}
                  alt={data.image.alt}
                  fill
                  className="object-cover object-top transition-transform duration-1000 hover:scale-105"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

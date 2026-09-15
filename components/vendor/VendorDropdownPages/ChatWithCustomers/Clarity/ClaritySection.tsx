"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type ClarityData = typeof import("@/data/vendor/vendordropdown/chatwithcustomers/clarity.json");

type ClaritySectionProps = {
  data: ClarityData;
};

export function ClaritySection({ data }: ClaritySectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  return (
    <section id="clarity" className="relative z-30 bg-white px-6 md:px-10 lg:px-10 py-24 sm:py-28" data-theme="light">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-[94rem]"
      >
        {/* Title Group */}
        <div className="mb-12 flex flex-col gap-5 md:mb-16">
          <motion.span variants={itemVariants} className="inline-flex items-center gap-3 font-display text-[10px] font-bold uppercase tracking-[0.5em] text-black/40">
            <div className="h-px w-6 bg-black/20" />
            The Insight
          </motion.span>
          <motion.h2 variants={itemVariants} className="max-w-3xl font-display text-4xl font-medium leading-[1.08] tracking-tighter text-black sm:text-5xl lg:text-6xl">
            {data.title}
          </motion.h2>
        </div>

        {/* Compact Benefit Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group flex flex-col gap-4 rounded-2xl border border-black/10 p-6 transition-colors duration-300 hover:border-black/25 hover:bg-black/[0.02]"
            >
              <div className="flex items-center justify-between">
                <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-[#050505]">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-contain p-3 transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="56px"
                  />
                </div>
                <span className="font-mono text-[10px] font-bold tracking-widest text-black/20 transition-colors duration-300 group-hover:text-[#FF6A3D]">
                  0{index + 1}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-display text-xl font-medium tracking-tight text-black">
                  {item.title}
                </h3>
                <p className="font-ui text-sm leading-relaxed text-black/60">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

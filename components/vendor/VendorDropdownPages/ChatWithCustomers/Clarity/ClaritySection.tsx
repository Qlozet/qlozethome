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
    <section id="clarity" className="relative z-30 bg-white px-6 py-24 sm:py-32 lg:py-48" data-theme="light">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-[94rem]"
      >
        {/* Title Group */}
        <div className="mb-24 flex flex-col gap-6 md:mb-32">
          <motion.span variants={itemVariants} className="inline-flex items-center gap-3 font-display text-[10px] font-bold uppercase tracking-[0.5em] text-black/40">
             <div className="h-px w-6 bg-black/20" />
             The Insight
          </motion.span>
          <motion.h2 variants={itemVariants} className="max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tighter text-black sm:text-7xl">
            {data.title}
          </motion.h2>
        </div>

        {/* Typographic Impact List */}
        <div className="flex flex-col border-t border-black/10">
          {data.items.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group grid grid-cols-1 border-b border-black/10 py-16 transition-colors duration-500 hover:bg-black/[0.02] lg:grid-cols-[1fr,2fr] lg:gap-16 lg:py-24"
            >
              {/* Massive Structural Number */}
              <div className="mb-10 flex items-start font-display text-[8rem] font-medium leading-none tracking-tighter text-black/5 transition-colors duration-700 group-hover:text-[#FF6A3D] sm:text-[10rem] lg:mb-0 lg:text-[12rem]">
                0{index + 1}
              </div>

              {/* Content & Imagery */}
              <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
                <div className="flex flex-col gap-6 lg:w-1/2">
                  <h3 className="font-display text-4xl font-medium tracking-tight text-black sm:text-5xl lg:text-[3.5rem]">
                    {item.title}
                  </h3>
                  <p className="font-ui text-lg leading-relaxed text-black/60 lg:text-xl">
                    {item.description}
                  </p>
                </div>

                <div className="relative aspect-square w-full rounded-[2.5rem] bg-[#050505] p-10 lg:w-1/2">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-8 transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

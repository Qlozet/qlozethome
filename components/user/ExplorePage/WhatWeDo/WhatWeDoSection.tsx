"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

type WhatWeDoData = typeof import("@/data/user/explore/what-we-do.json");

type WhatWeDoSectionProps = {
  data: WhatWeDoData;
};

export function WhatWeDoSection({ data }: WhatWeDoSectionProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  return (
    <section id="what-we-do" className="relative z-10 bg-white px-6 md:px-10 lg:px-10 py-24 sm:py-32">
      <div className="mx-auto max-w-[94rem]">
        {/* Title Group */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20 flex flex-col items-center gap-6 text-center"
        >
          <motion.span variants={itemVariants} className="font-display text-[10px] font-semibold uppercase tracking-[0.4em] text-[#3A3A3A]/40">
            Our Purpose
          </motion.span>
          <motion.h2 variants={itemVariants} className="max-w-4xl font-display text-4xl font-medium leading-[1.1] tracking-tight text-[#3A3A3A] sm:text-6xl">
            {data.title}
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-2xl font-ui text-lg text-[#3A3A3A]/60">
            {data.subtitle}
          </motion.p>
        </motion.div>

        {/* Images Grid - Advanced Staggered Style */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid auto-rows-[300px] grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:auto-rows-[280px]"
        >
          {data.images.map((img, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -15,
                transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] }
              }}
              className={`group relative overflow-hidden rounded-[2.5rem] bg-neutral-100 shadow-2xl shadow-black/5 transition-all duration-700 hover:shadow-[#3A3A3A]/10 
                ${index === 0 ? "sm:row-span-2 sm:row-start-1" : ""}
                ${index === 1 ? "sm:row-span-2 sm:row-start-2 lg:row-start-2" : ""}
                ${index === 2 ? "sm:row-span-2 sm:row-start-1 lg:row-start-1" : ""}
                ${index === 3 ? "sm:row-span-2 sm:row-start-2 lg:row-start-2" : ""}
              `}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                priority={index < 2}
              />
              {/* Premium Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A3A3A]/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              {/* Subtle Border */}
              <div className="absolute inset-0 rounded-[2.5rem] border border-[#3A3A3A]/5 transition-colors duration-500 group-hover:border-[#3A3A3A]/10" />
              
              <div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


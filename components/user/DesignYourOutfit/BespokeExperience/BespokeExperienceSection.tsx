"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ExperienceData = typeof import("@/data/user/designyouroutfit/bespoke-experience.json");

type ExperienceSectionProps = {
  data: ExperienceData;
};

export function ExperienceSection({ data }: ExperienceSectionProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any } },
  };

  return (
    <section ref={containerRef} id="experience" className="relative z-30 overflow-hidden bg-white px-6 py-32 sm:py-48">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-[94rem]"
      >
        {/* Title Group */}
        <div className="mb-32 flex flex-col items-center gap-8 text-center lg:mb-40">
          <motion.span variants={itemVariants} className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-black/30">
            The Final Masterpiece
          </motion.span>
          <motion.h2 variants={itemVariants} className="max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-black sm:text-7xl">
            {data.title}
          </motion.h2>
        </div>

        {/* Modern Magazine Layout */}
        <div className="flex flex-col gap-32 sm:gap-40 lg:gap-64">
          {data.items.map((item, index) => {
            const isEven = index % 2 === 0;
            const parityOffset = isEven ? "lg:flex-row" : "lg:flex-row-reverse";
            const textOffset = isEven ? "lg:pl-32" : "lg:pr-32 text-right";
            const align = isEven ? "items-start" : "items-end";
            const parallax = isEven ? y1 : y2;

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`flex flex-col items-center gap-16 lg:w-full lg:justify-between ${parityOffset}`}
              >
                {/* Image Column */}
                <div className="relative w-full lg:w-1/2">
                  <motion.div 
                    style={{ y: parallax }}
                    className="group relative aspect-[4/5] w-full overflow-hidden rounded-[3rem] bg-[#FAFAFA] shadow-2xl shadow-black/5"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-12 transition-transform duration-[2s] group-hover:scale-105"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                    
                    <div className="absolute inset-0 bg-black/5 transition-opacity duration-1000 group-hover:opacity-0" />
                  </motion.div>
                  
                  {/* Floating Order/Index Indicator */}
                  <div className={`absolute -top-12 z-20 hidden text-[12rem] font-display font-medium leading-none tracking-tighter text-black/5 lg:block ${isEven ? "-right-12" : "-left-12"}`}>
                    0{index + 1}
                  </div>
                </div>

                {/* Text Column */}
                <div className={`flex w-full flex-col justify-center ${align} ${textOffset} lg:w-1/2`}>
                  <div className={`flex max-w-xl flex-col gap-8 ${align}`}>
                    <h3 className="font-display text-4xl font-medium tracking-tight text-black sm:text-5xl lg:text-6xl">
                      {item.title}
                    </h3>
                    <div className="h-px w-24 bg-black/10" />
                    <p className="font-ui text-lg leading-relaxed text-black/50 transition-colors duration-700 group-hover:text-black/70 lg:text-xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}


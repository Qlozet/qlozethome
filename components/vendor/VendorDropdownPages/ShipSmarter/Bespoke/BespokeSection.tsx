"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type BespokeData = typeof import("@/data/vendor/vendordropdown/shipsmarter/bespoke.json");

type BespokeSectionProps = {
  data: BespokeData;
};

export function BespokeSection({ data }: BespokeSectionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section ref={containerRef} id="bespoke" className="relative z-30 overflow-hidden bg-brand-light px-6 md:px-10 lg:px-10 py-24 sm:py-32">
      {/* Massive Background Marquee */}
      <div className="absolute left-0 top-1/2 z-0 flex w-full -translate-y-1/2 -rotate-3 select-none whitespace-nowrap opacity-[0.03] mix-blend-multiply">
        <motion.div
           animate={{ x: ["0%", "-50%"] }}
           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
           className="flex gap-8 font-display text-[15rem] font-bold uppercase leading-none tracking-tighter text-brand-darker lg:text-[25rem]"
        >
           <span>LOGISTICS ELITE • BESPOKE FLOW • </span>
           <span>LOGISTICS ELITE • BESPOKE FLOW • </span>
           <span>LOGISTICS ELITE • BESPOKE FLOW • </span>
         </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-[94rem]">
        {/* Title Group */}
        <div className="mb-24 flex flex-col items-center gap-6 text-center lg:mb-40">
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#111111]/40">
             Logistics Elite
          </span>
          <h2 className="max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-[#111111] sm:text-7xl lg:text-[5.5rem]">
            {data.title}
          </h2>
        </div>

        {/* Foreground Focus Cards */}
        <motion.div style={{ y: contentY }} className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {data.features.map((feature) => (
            <div
              key={feature.title}
              className="group flex flex-col gap-10 bg-brand-darker p-10 transition-all duration-700 hover:-translate-y-3 hover:bg-brand-button hover:shadow-2xl hover:shadow-brand-darker/40 lg:p-14"
            >
              {/* Image Container */}
              <div className="relative aspect-square w-full bg-white/5 transition-colors duration-700 group-hover:bg-white/10">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain p-8 transition-transform duration-700 group-hover:scale-110 lg:p-12"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-4">
                <h3 className="font-display text-3xl font-medium tracking-tight text-white">
                  {feature.title}
                </h3>
                <p className="font-ui text-lg leading-relaxed text-white/50">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}



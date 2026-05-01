"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type EmpowerData = typeof import("@/data/vendor/flexiblesellingoptions/empower.json");

type EmpowerSectionProps = {
  data: EmpowerData;
};

export function EmpowerSection({ data }: EmpowerSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any } },
  };

  return (
    <section id="empower" className="relative z-30 bg-[#FAFAFA] px-6 py-24 sm:py-24 sm:py-32">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-[94rem]"
      >
        {/* Title Group */}
        <div className="mb-24 flex flex-col items-center gap-6 text-center md:mb-40">
          <motion.span variants={itemVariants} className="inline-flex items-center gap-3 font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/40">
            <div className="h-px w-6 bg-[#3A3A3A]/20" />
            Empowerment
          </motion.span>
          <motion.h2 variants={itemVariants} className="max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-[#3A3A3A] sm:text-7xl">
            {data.title}
          </motion.h2>
        </div>

        {/* Offset Stack Gallery */}
        <div className="flex flex-col gap-32 lg:gap-48">
          {data.items.map((item, index) => {
            const isRight = index % 2 !== 0;

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`flex flex-col items-center lg:flex-row ${isRight ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Massive Image Container */}
                <div className="relative aspect-square w-full rounded-[3rem] bg-[#050505] lg:h-[700px] lg:w-[60%] lg:aspect-auto">
                  <div className="absolute inset-0 z-10 pointer-events-none rounded-[3rem] bg-gradient-to-tr from-white/10 to-transparent" />
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-12 transition-transform duration-[2s] hover:scale-105 sm:p-20"
                    sizes="(min-width: 1024px) 60vw, 100vw"
                  />
                </div>

                {/* Overlapping Glass Content Box */}
                <div className={`relative z-20 flex w-[90%] flex-col gap-6 rounded-[2.5rem] border border-[#3A3A3A]/5 bg-white/70 p-8 shadow-[0_40px_80px_rgba(0,0,0,0.05)] backdrop-blur-2xl sm:p-12 lg:w-[45%] lg:p-16 ${isRight ? "-mt-16 lg:-mr-24 lg:mt-0" : "-mt-16 lg:-ml-24 lg:mt-0"}`}>
                  <span className="pointer-events-none absolute -top-12 right-8 select-none font-display text-[8rem] font-bold leading-none tracking-tight text-[#3A3A3A]/5 lg:-top-16 lg:text-[10rem]">
                    0{index + 1}
                  </span>
                  
                  <h3 className="relative z-10 font-display text-3xl font-medium tracking-tight text-[#3A3A3A] sm:text-4xl lg:text-5xl">
                    {item.title}
                  </h3>
                  <p className="relative z-10 font-ui text-lg leading-relaxed text-[#3A3A3A]/60 lg:text-xl">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}


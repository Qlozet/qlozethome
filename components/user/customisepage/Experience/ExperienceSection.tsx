"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type ExperienceData = typeof import("@/data/user/customize/customize-experience.json");

type ExperienceSectionProps = {
  data: ExperienceData;
};

export function ExperienceSection({ data }: ExperienceSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotate: -5 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any } },
  };

  // We duplicate tracking items so it looks dense and scattered
  const swatches = [...data.items, ...data.items, ...data.items].slice(0, 5);

  return (
    <section id="experience" className="relative z-30 overflow-hidden bg-[#FAFAFA] py-24 sm:py-32 lg:py-48" data-theme="light">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10"
      >
        {/* Title Group */}
        <div className="mb-24 flex flex-col items-center gap-6 text-center lg:mb-40">
          <motion.span variants={itemVariants} className="inline-flex items-center gap-3 font-display text-[10px] font-bold uppercase tracking-[0.5em] text-black/40">
            <div className="h-px w-6 bg-black/20" />
            Social Proof
          </motion.span>
          <motion.h2 variants={itemVariants} className="max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tighter text-black sm:text-7xl">
            {data.title}
          </motion.h2>
        </div>

        {/* Material Swatch Gallery */}
        <div className="relative flex w-full justify-center px-4 pb-20 sm:px-10 lg:px-20">
          <div className="flex w-full max-w-7xl flex-wrap justify-center gap-8 sm:gap-12 lg:gap-16">
            {swatches.map((item, index) => {
              // Create scattered polaroid effect
              const rotations = ["-rotate-6", "rotate-3", "-rotate-2", "rotate-6", "-rotate-12"];
              const margins = ["mt-0", "mt-12", "-mt-8", "mt-24", "mt-4"];
              const rot = rotations[index % rotations.length];
              const marg = margins[index % margins.length];

              return (
                <motion.div
                  key={`${item.id}-${index}`}
                  variants={itemVariants}
                  className={`group relative flex w-[280px] shrink-0 flex-col gap-4 rounded-xl bg-white p-4 shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:z-50 hover:scale-105 hover:rotate-0 hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)] sm:w-[320px] lg:w-[360px] ${rot} ${marg}`}
                >
                  {/* Polaroid Image */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#FAFAFA]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                      sizes="(min-width: 1024px) 360px, 320px"
                    />
                  </div>

                  {/* Handwriting / Tech Spec Text */}
                  <div className="flex flex-col gap-2 px-3 pb-6 pt-4">
                    <h3 className="font-display text-xl font-medium tracking-tight text-black">
                      {item.title}
                    </h3>
                    <p className="font-ui text-sm text-black/50">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Pin Graphic Overlay */}
                  <div className="absolute left-1/2 top-4 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-zinc-200 shadow-inner ring-1 ring-black/10" />
                  <div className="absolute left-1/2 top-4 -translate-x-1/2 -translate-y-1/2 h-1 w-1 rounded-full bg-white/50" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type PerksData = {
  title: string;
  subtitle: string;
  features: Array<{
    image: string;
    title: string;
    description: string;
  }>;
};

type PerksSectionProps = {
  data: PerksData;
};

export function PerksSection({ data }: PerksSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as any } },
  };

  return (
    <section id="perks" className="relative z-30 bg-[#F9F9F8] px-6 md:px-10 lg:px-10 py-32 sm:py-48">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-[90rem]"
      >
        {/* Gallery Title Group */}
        <div className="mb-32 flex flex-col items-center gap-6 text-center">
          <motion.span variants={itemVariants} className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#A38A59]">
             The Experience
          </motion.span>
          <motion.h2 variants={itemVariants} className="max-w-4xl font-display text-5xl font-light italic leading-[1.05] tracking-tight text-[#1A1A1A] sm:text-6xl md:text-7xl">
            {data.subtitle}
          </motion.h2>
        </div>

        {/* The Curation Grid (Hanging Art Style) */}
        <div className="grid gap-x-8 gap-y-24 sm:grid-cols-2 lg:grid-cols-3">
          {data.features.map((feature, index) => {
            // Stagger the vertical heights of the "frames"
            const margins = ["mt-0", "mt-24", "mt-12"];
            const padding = ["aspect-[3/4]", "aspect-[4/5]", "aspect-[3/5]"];
            const margin = margins[index % margins.length];
            const aspect = padding[index % padding.length];

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group flex flex-col ${margin}`}
              >
                {/* Framed Artwork Container */}
                <div className="relative mb-8 w-full overflow-hidden bg-white shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)]">
                  <div className={`relative ${aspect} w-full`}>
                    {/* Inner Gallery Matting */}
                    <div className="absolute inset-6 z-10 border border-[#1A1A1A]/10 transition-transform duration-700 group-hover:scale-95 group-hover:border-[#A38A59]/40" />
                    
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-contain p-12 transition-transform duration-[2s] group-hover:scale-110"
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                </div>

                {/* Gallery Placard (Text Content) */}
                <div className="flex flex-col items-center text-center px-4">
                  <span className="mb-4 font-display text-sm font-bold tracking-[0.2em] text-[#1A1A1A]/30">
                    0{index + 1}
                  </span>
                  <h3 className="mb-4 font-display text-3xl font-medium tracking-tight text-[#1A1A1A]">
                    {feature.title}
                  </h3>
                  <p className="max-w-xs font-ui text-sm leading-relaxed text-[#1A1A1A]/60">
                    {feature.description}
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

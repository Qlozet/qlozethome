"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type PartnersData = typeof import("@/data/home/partners.json");

type PartnersSectionProps = {
  data: PartnersData;
  dark?: boolean;
};

export function PartnersSection({ data, dark = false }: PartnersSectionProps) {
  // Duplicate brands for seamless infinite scroll
  const duplicatedBrands = [...data.brands, ...data.brands];

  const fadeUpVariants = {
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
    <section id={data.id} className={`scroll-mt-32 py-24 sm:py-32 overflow-hidden ${dark ? 'bg-[#3A3A3A]' : 'bg-zinc-50'}`} data-theme={dark ? "dark" : "light"}>
      {/* Heading — constrained */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto w-full max-w-[94rem] px-4 sm:px-6 md:px-10 lg:px-10 mb-16"
      >
        <motion.h2
          variants={fadeUpVariants}
          className={`font-display text-4xl font-medium tracking-tight sm:text-5xl ${dark ? 'text-white' : 'text-zinc-900'}`}
        >
          {data.title}
        </motion.h2>
      </motion.div>

      {/* Scroll strip — full width, edge to edge */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full"
      >
        {/* Fade masks */}
        <div className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-24 sm:w-40 bg-gradient-to-r ${dark ? 'from-[#3A3A3A]' : 'from-zinc-50'} to-transparent`} />
        <div className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-24 sm:w-40 bg-gradient-to-l ${dark ? 'from-[#3A3A3A]' : 'from-zinc-50'} to-transparent`} />

        <div className="flex animate-scroll gap-12 w-max">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand.src}-${index}`}
              className={`flex h-16 w-[180px] shrink-0 items-center justify-center grayscale transition hover:grayscale-0 ${dark ? 'invert mix-blend-screen hover:invert-0 hover:mix-blend-normal' : ''}`}
            >
              <Image
                src={brand.src}
                alt={brand.label}
                width={180}
                height={64}
                className="h-auto max-h-16 w-auto max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </motion.div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
          will-change: transform;
        }

        @media (min-width: 640px) {
          .animate-scroll {
            animation-duration: 30s;
          }
        }
      `}</style>
    </section>
  );
}

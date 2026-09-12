"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Ruler, Palette, Sparkles, Globe } from "lucide-react";

type WhyData = typeof import("@/data/home/why.json");

type WhySectionProps = {
  data: WhyData;
  scrollPrompt?: {
    label: string;
    href?: string;
  };
};

const iconMap: Record<string, any> = {
  Ruler,
  Palette,
  Sparkles,
  Globe
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
};

const itemVariants: import("framer-motion").Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { 
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as any
    }
  }
};

export function WhySection({ data, scrollPrompt }: WhySectionProps) {
  return (
    <section
      id={data.id}
      className="relative z-10 bg-white px-6 py-24 sm:py-32 scroll-mt-32"
      data-theme="light"
    >
      <div id="why-content" className="mx-auto max-w-[94rem] px-4 sm:px-6 md:px-10 lg:px-10">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-24 flex flex-col gap-8"
        >
          <div className="flex items-center gap-4">
            <span className="inline-flex h-px w-12 bg-[#3A3A3A]/20" />
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/40">
              The Architecture of Choice
            </span>
          </div>
          <h2 className="font-display max-w-4xl text-5xl font-medium leading-[1.05] tracking-tight text-[#111111] sm:text-7xl">
            {data.title}
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4"
        >
          {data.cards.map((card) => (
            <motion.div
              variants={itemVariants}
              key={card.title}
              className="group flex flex-col gap-6 border-l border-[#3A3A3A]/5 pl-4 transition-all duration-500 hover:border-[#3A3A3A]/20 sm:gap-10 sm:pl-8"
            >
              <div className="relative h-12 w-12 transition-all duration-500 group-hover:scale-110">
                {(() => {
                  const Icon = iconMap[card.icon] || Globe;
                  return <Icon className="h-full w-full stroke-[1.5] text-[#3A3A3A] opacity-80 group-hover:opacity-100" />;
                })()}
              </div>
              
              <div className="flex flex-col gap-4">
                <h3 className="font-display text-2xl font-medium text-[#111111]">
                  {card.title}
                </h3>
                <p className="font-ui text-base leading-relaxed text-[#3A3A3A]/50">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}



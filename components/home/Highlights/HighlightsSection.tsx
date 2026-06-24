"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type HighlightsData = typeof import("@/data/home/highlights.json");

type HighlightsSectionProps = {
  data: HighlightsData;
};

export function HighlightsSection({ data }: HighlightsSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as any }
    }
  };

  return (
    <section
      id={data.id}
      className="scroll-mt-32 bg-white py-24 sm:py-32"
      data-theme="light"
    >
      <div className="mx-auto flex w-full max-w-[94rem] flex-col gap-20 px-6 md:px-10 lg:px-10 sm:gap-32">
        {data.items.map((item, index) => (
          <HighlightItem key={item.id} item={item} index={index} containerVariants={containerVariants} itemVariants={itemVariants} />
        ))}
      </div>
    </section>
  );
}

function HighlightItem({ item, index, containerVariants, itemVariants }: { item: any; index: number; containerVariants: any; itemVariants: any }) {
  const isReversed = index % 2 === 1;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-24 ${isReversed ? "lg:[&>*:first-child]:order-2" : ""}`}
    >
      {/* Text Content Column */}
      <motion.div className="flex flex-col gap-6 sm:gap-10">
        <div className="flex flex-col gap-6">
          <motion.span variants={itemVariants} className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/40 text-left">
            {item.id.replace(/-/g, ' ')}
          </motion.span>
          <motion.h3 variants={itemVariants} className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-[#111111] sm:text-6xl lg:text-7xl">
            {item.title}
          </motion.h3>
          <motion.p variants={itemVariants} className="max-w-xl font-ui text-base leading-relaxed text-[#3A3A3A]/60 sm:text-lg">
            {item.description}
          </motion.p>
        </div>

        {item.bullets && item.bullets.length > 0 && (
          <motion.ul variants={itemVariants} className="flex flex-col gap-3">
            {item.bullets.map((bullet: string, i: number) => (
              <li key={i} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-light">
                  <Check className="h-3.5 w-3.5 text-brand" />
                </span>
                <span className="font-ui text-sm font-medium text-[#3A3A3A]/70 sm:text-base">{bullet}</span>
              </li>
            ))}
          </motion.ul>
        )}
        
        <motion.div variants={itemVariants} className="flex">
          <Link
            href={item.cta.href}
            className="inline-flex items-center justify-center rounded-full bg-brand-darker px-10 py-5 text-xs font-bold uppercase tracking-[0.3em] text-white shadow-2xl transition-all hover:scale-105 hover:bg-brand active:scale-[0.98]"
          >
            {item.cta.label}
          </Link>
        </motion.div>
      </motion.div>

      {/* Image Column */}
      <motion.div 
        variants={itemVariants}
        className="relative group aspect-[4/5] w-full overflow-hidden rounded-[3rem] border border-black/5 bg-neutral-50 shadow-2xl shadow-black/10"
      >
        <motion.div style={{ y }} className="absolute -inset-y-20 inset-x-0">
          <Image
            src={item.phoneImage || item.image.src}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
            sizes="(min-width: 1024px) 45vw, 90vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </motion.div>
    </motion.div>
  );
}

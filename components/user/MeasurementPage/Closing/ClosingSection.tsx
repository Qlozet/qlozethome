"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

type ClosingData = {
  title: string;
  description: string;
  cta: { label: string; href: string };
};

type ClosingSectionProps = {
  data: ClosingData;
};

export function ClosingSection({ data }: ClosingSectionProps) {
  return (
    <section className="relative w-full bg-white py-24 sm:py-32 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10 text-center">
        <div className="flex flex-col gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex h-20 w-20 items-center justify-center rounded-3xl bg-brand-light border border-brand-darker/5 shadow-xl"
          >
            <Sparkles className="h-10 w-10 text-brand-darker" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-[#111111] sm:text-7xl lg:text-[6.5rem]"
          >
            {data.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl font-ui text-base leading-relaxed text-[#3A3A3A]/60 sm:text-lg"
          >
            {data.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-6 sm:flex-row sm:items-center"
          >
            <Link
              href={data.cta.href}
              className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-brand-button px-12 text-[10px] font-bold uppercase tracking-[0.3em] text-white shadow-2xl transition-all hover:scale-[1.05] active:scale-95"
            >
              <span className="relative z-10">{data.cta.label}</span>
              <div className="absolute inset-0 z-0 bg-brand opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Technical Line Accents */}
      <div className="absolute top-1/2 left-0 w-64 h-px bg-black opacity-5 hidden lg:block" />
      <div className="absolute top-1/2 right-0 w-64 h-px bg-black opacity-5 hidden lg:block" />
    </section>
  );
}

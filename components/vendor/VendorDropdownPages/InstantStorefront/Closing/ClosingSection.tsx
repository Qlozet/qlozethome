"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    <section className="relative w-full bg-white py-24 lg:py-48 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10 text-center">
        <div className="flex flex-col gap-12 items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-[#111111] sm:text-7xl lg:text-[6.5rem]"
          >
            {data.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-ui text-base leading-relaxed text-[#111111]/50 sm:text-lg max-w-2xl"
          >
            {data.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
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
      {/* Decorative Accents */}
      <div className="absolute top-1/2 left-0 w-64 h-px bg-brand-darker opacity-10 hidden lg:block" />
      <div className="absolute top-1/2 right-0 w-64 h-px bg-brand-darker opacity-10 hidden lg:block" />
    </section>
  );
}

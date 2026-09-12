"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

type ClosingData = {
  title: string;
  description: string;
  cta: { label: string; href: string };
};

type ClosingCTAProps = {
  data: ClosingData;
};

export function ClosingCTA({ data }: ClosingCTAProps) {
  return (
    <section className="relative z-30 overflow-hidden bg-white px-6 md:px-10 lg:px-10 py-24 sm:py-32" data-theme="light">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02),transparent)]" />
      
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex h-16 w-16 items-center justify-center rounded-3xl bg-brand-darker shadow-2xl"
          >
            <Sparkles className="h-8 w-8 text-white" />
          </motion.div>

          <div className="flex flex-col gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-[#111111] sm:text-7xl lg:text-[6rem]"
            >
              {data.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-2xl font-ui text-xl leading-relaxed text-[#111111]/50 sm:text-2xl"
            >
              {data.description}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href={data.cta.href}
              className="group relative inline-flex h-20 items-center justify-center overflow-hidden rounded-full bg-brand-button px-12 text-[12px] font-bold uppercase tracking-[0.4em] text-white transition-all hover:scale-[1.02] active:scale-95 hover:bg-brand"
            >
              <span className="relative z-10 flex items-center gap-4">
                {data.cta.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" />
              </span>
              <div className="absolute inset-0 z-0 bg-brand opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </motion.div>

          {/* Benefit Bullets */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap justify-center gap-x-12 gap-y-6"
          >
            {["Make smarter decisions.", "Grow faster.", "Stay ahead of the competition."].map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 font-display text-[10px] font-bold uppercase tracking-[0.2em] text-[#111111]/30">
                <div className="h-1 w-1 rounded-full bg-brand-darker/20" />
                {benefit}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

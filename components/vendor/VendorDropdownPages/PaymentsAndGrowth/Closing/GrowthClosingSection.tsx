"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

type ClosingData = {
  title: string;
  description: string;
  primaryAction: { label: string; href: string };
};

type GrowthClosingSectionProps = {
  data: ClosingData;
};

export function GrowthClosingSection({ data }: GrowthClosingSectionProps) {
  return (
    <section className="relative overflow-hidden bg-white py-32 lg:py-48" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="relative overflow-hidden rounded-[4rem] bg-black p-12 lg:p-32 shadow-3xl">
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent)]" />
          
          <div className="relative z-10 flex flex-col items-center text-center gap-12 lg:gap-16">
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-3xl"
            >
               <Sparkles className="h-8 w-8 text-white" />
            </motion.div>

            <div className="flex flex-col gap-8">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-5xl font-medium leading-[1] tracking-tighter text-white sm:text-7xl lg:text-8xl"
              >
                {data.title}
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mx-auto max-w-2xl font-ui text-lg leading-relaxed text-white/40 lg:text-2xl"
              >
                {data.description}
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-6 sm:flex-row sm:items-center"
            >
              <Link 
                href={data.primaryAction.href}
                className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-white px-12 text-[11px] font-bold uppercase tracking-[0.35em] text-black transition-all hover:scale-[1.05] active:scale-95 shadow-3xl"
              >
                <span className="relative z-10">{data.primaryAction.label}</span>
                <ArrowRight className="relative z-10 ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
          
          {/* Decorative Revenue Stream End */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-32 w-px bg-white/10" />
        </div>
      </div>
    </section>
  );
}

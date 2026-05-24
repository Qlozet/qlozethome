"use client";

import { motion } from "framer-motion";
import { Check, CheckCircle2 } from "lucide-react";

type SalesData = {
  badge: string;
  title: string;
  description: string;
  benefits: string[];
};

type SalesSectionProps = {
  data: SalesData;
};

export function SalesSection({ data }: SalesSectionProps) {
  return (
    <section className="relative w-full bg-white py-24 sm:py-32" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
          {/* Left Column: Visual Map of Sales */}
          <div className="relative order-2 lg:order-1 lg:w-1/2">
            <div className="flex items-center justify-center rounded-[2rem] bg-[#F9F9F8] border border-zinc-100 shadow-xl overflow-hidden relative group">
              <div className="flex flex-col gap-6 p-6 sm:p-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-6 rounded-2xl bg-white p-6 shadow-lg border border-zinc-50 transition-all hover:scale-105"
                >
                  <div className="h-12 w-12 rounded-full bg-emerald-50 content-none relative border border-emerald-100 flex items-center justify-center">
                     <div className="h-3 w-3 rounded-full bg-emerald-500 animate-ping" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display text-xs font-bold uppercase tracking-wider text-[#3A3A3A]/30">Order Received</span>
                    <span className="font-display text-lg font-medium text-[#3A3A3A]">N23,455.00</span>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-4 self-end rounded-2xl bg-[#3A3A3A] p-6 shadow-2xl transition-all hover:scale-105"
                >
                   <div className="flex flex-col pr-8 border-r border-white/20">
                     <span className="font-display text-[9px] font-bold uppercase tracking-widest text-white/30">Conversion</span>
                     <span className="font-display text-xl font-medium text-white">4.8%</span>
                   </div>
                   <span className="font-display text-[10px] font-bold uppercase tracking-widest text-white/40 pl-4">+22% vs Last Month</span>
                </motion.div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-100/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col gap-12 order-1 lg:order-2 lg:w-1/2 lg:pl-16">
            <div className="flex flex-col gap-8">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/40"
              >
                {data.badge}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display max-w-4xl text-5xl sm:text-7xl font-medium leading-[1.05] tracking-tight text-[#3A3A3A]"
              >
                {data.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-ui text-base leading-relaxed text-[#3A3A3A]/50 sm:text-lg max-w-xl"
              >
                {data.description}
              </motion.p>
            </div>

            <div className="flex flex-col gap-6">
              {data.benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-6"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3A3A3A]/10">
                    <Check className="h-3.5 w-3.5 text-[#3A3A3A]" strokeWidth={2} />
                  </span>
                  <span className="font-ui text-sm font-medium text-[#3A3A3A]/70 sm:text-base">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

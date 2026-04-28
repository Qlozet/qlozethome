"use client";

import { motion } from "framer-motion";
import { ArrowRight, Package, Truck, CheckCircle, Clock } from "lucide-react";
import Link from "next/link";

type ConversionData = {
  title: string;
  description: string;
  cta: { label: string; href: string };
};

type ClosingCTAProps = {
  data: ConversionData;
};

export function ClosingCTA({ data }: ClosingCTAProps) {
  return (
    <section className="relative w-full bg-white py-24 lg:py-40 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="relative rounded-[4rem] bg-zinc-900 px-8 py-20 text-center shadow-2xl lg:px-20 lg:py-32 overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-50" />

          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 rounded-full bg-white/5 border border-white/10 px-6 py-2"
            >
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">Ready to Ship Globally</span>
            </motion.div>

            <div className="flex flex-col gap-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-4xl font-medium leading-tight tracking-tighter text-white sm:text-7xl lg:text-8xl"
              >
                {data.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mx-auto max-w-2xl font-ui text-lg leading-relaxed text-white/60 lg:text-2xl"
              >
                {data.description}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <Link
                href={data.cta.href}
                className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-white px-12 text-[10px] font-bold uppercase tracking-[0.4em] text-black transition-all hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">{data.cta.label}</span>
                <div className="absolute inset-0 z-0 bg-zinc-100 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </motion.div>

            {/* Stats Grid */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 w-full border-t border-white/5 pt-10">
              {[
                { label: "Transit Time", value: "3-5 Days", icon: Clock },
                { label: "Network", value: "Global", icon: Truck },
                { label: "Handling", value: "Premium", icon: Package },
                { label: "Satisfaction", value: "100%", icon: CheckCircle }
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <Icon className="h-5 w-5 text-white/20" />
                    <span className="font-display text-[8px] font-bold uppercase tracking-widest text-white/40">{stat.label}</span>
                    <span className="font-mono text-sm text-white/80">{stat.value}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

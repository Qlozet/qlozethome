"use client";

import { motion } from "framer-motion";
import { DollarSign, Tag, Clock } from "lucide-react";

const iconMap = {
  "Base Prices": DollarSign,
  "Customization Costs": Tag,
  "Performance Fees": Clock,
};

type PricingData = {
  badge: string;
  title: string;
  description: string;
  options: { label: string; description: string }[];
};

type PricingSectionProps = {
  data: PricingData;
};

export function PricingSection({ data }: PricingSectionProps) {
  return (
    <section className="relative w-full bg-[#0A0A0A] py-24 sm:py-32" data-theme="dark">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-8 text-center items-center mx-auto max-w-3xl">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-white/40"
            >
              {data.badge}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display max-w-4xl text-5xl sm:text-7xl font-medium leading-[1.05] tracking-tight text-white"
            >
              {data.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-xl font-ui text-base leading-relaxed text-white/50 sm:text-lg"
            >
              {data.description}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {data.options.map((option, index) => {
              const Icon = (iconMap as any)[option.label] || DollarSign;
              return (
                <motion.div
                  key={option.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.15 }}
                  className="group relative flex flex-col gap-6 rounded-[2rem] border border-white/5 bg-white/5 p-6 sm:p-10 transition-all hover:bg-white/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-2xl transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-6 w-6 text-[#3A3A3A]" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className="font-display text-2xl font-medium tracking-tight text-white transition-colors group-hover:text-[#3A3A3A]">
                      {option.label}
                    </h3>
                    <p className="font-ui text-lg leading-relaxed text-white/40 transition-colors group-hover:text-white/60">
                      {option.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

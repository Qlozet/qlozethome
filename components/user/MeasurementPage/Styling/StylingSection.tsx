"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Sun } from "lucide-react";

type StylingData = {
  badge: string;
  title: string;
  description: string;
  options: { title: string; description: string }[];
};

type StylingSectionProps = {
  data: StylingData;
};

const iconMap: any = {
  "Daily Suggestions": Sun,
  "Occasion-based": Sparkles,
  "Style Evolution": Heart,
};

export function StylingSection({ data }: StylingSectionProps) {
  return (
    <section className="relative w-full bg-zinc-50 py-24 lg:py-40" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col gap-12 lg:gap-20">
          {/* Header Content */}
          <div className="flex flex-col gap-8 text-center items-center mx-auto max-w-3xl">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="font-display text-[10px] font-bold uppercase tracking-[0.5em] text-black/40"
            >
              {data.badge}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl font-medium leading-[1.1] tracking-tighter text-black sm:text-6xl lg:text-7xl"
            >
              {data.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-xl font-ui text-lg leading-relaxed text-black/60 lg:text-2xl"
            >
              {data.description}
            </motion.p>
          </div>

          {/* Feature Grid with Outfit Card Visualization */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-3">
             {data.options.map((option, index) => {
               const Icon = iconMap[option.title] || Sparkles;
               return (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group relative flex flex-col gap-8 sm:gap-10 rounded-[2rem] sm:rounded-[3rem] border border-black/5 bg-white p-6 sm:p-12 transition-all hover:scale-[1.03] hover:shadow-2xl shadow-black/5 overflow-hidden"
                >
                  <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-zinc-50 border border-zinc-100 transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-black opacity-40" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <h3 className="font-display text-xl sm:text-2xl font-medium tracking-tight text-black group-hover:text-black transition-colors">
                      {option.title}
                    </h3>
                    <p className="font-ui text-base sm:text-lg leading-relaxed text-black/40">
                      {option.description}
                    </p>
                  </div>

                  {/* Digital Suggestion Tag */}
                  <div className="absolute top-6 right-6 sm:top-8 sm:right-8 flex items-center gap-2 px-3 py-1 bg-black text-white rounded-full opacity-0 translate-y-4 transition-all group-hover:opacity-100 group-hover:translate-y-0">
                    <div className="h-1 w-1 rounded-full bg-[#00F0FF] animate-pulse" />
                    <span className="font-display text-[8px] font-bold uppercase tracking-widest">AI Match: 99%</span>
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

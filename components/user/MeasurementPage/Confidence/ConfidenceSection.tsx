"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Ruler } from "lucide-react";

type ConfidenceData = {
  badge: string;
  title: string;
  description: string;
  stats: string[];
};

type ConfidenceSectionProps = {
  data: ConfidenceData;
};

export function ConfidenceSection({ data }: ConfidenceSectionProps) {
  return (
    <section className="relative w-full bg-black py-24 lg:py-40" data-theme="dark">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col gap-12 lg:gap-20">
          <div className="flex flex-col gap-8 text-center items-center mx-auto max-w-3xl">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="font-display text-[10px] font-bold uppercase tracking-[0.5em] text-white/40"
            >
              {data.badge}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl font-medium leading-[1.1] tracking-tighter text-white sm:text-6xl lg:text-7xl"
            >
              {data.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-xl font-ui text-lg leading-relaxed text-white/50 lg:text-2xl"
            >
              {data.description}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
             {data.stats.map((stat, index) => (
               <motion.div
                 key={stat}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3 + index * 0.1 }}
                 className="group relative flex flex-col gap-8 sm:gap-10 rounded-[2rem] sm:rounded-[3rem] border border-white/5 bg-white/5 p-6 sm:p-12 transition-all hover:bg-white/10"
               >
                 <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-2xl transition-transform duration-500 group-hover:scale-110">
                    <ShieldCheck className="h-8 w-8 text-black" strokeWidth={1.5} />
                 </div>
                 <div className="flex flex-col gap-4">
                    <h3 className="font-display text-2xl font-medium tracking-tight text-white transition-colors group-hover:text-[#00F0FF]">
                      {stat}
                    </h3>
                    <p className="font-ui text-lg leading-relaxed text-white/40 group-hover:text-white/60">
                      Precision engineered for real bodies.
                    </p>
                 </div>
                 
                 {/* Decorative Background Element */}
                 <div className="absolute -bottom-8 -right-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                    <Ruler className="h-48 w-48 text-white" strokeWidth={0.5} />
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { UserCheck, Ruler, CheckCircle2 } from "lucide-react";

const iconMap: any = { UserCheck, Ruler, CheckCircle2 };

type TailoredData = {
  badge: string;
  title: string;
  description: string;
  features: { title: string; icon: string }[];
};

type TailoredSectionProps = { data: TailoredData };

const MEASUREMENTS = [
  { label: "Chest", value: '42"', bar: 78 },
  { label: "Waist", value: '34"', bar: 63 },
  { label: "Shoulder", value: '18"', bar: 55 },
  { label: "Sleeve", value: '25"', bar: 70 },
  { label: "Length", value: '30"', bar: 82 }
];

export function TailoredSection({ data }: TailoredSectionProps) {
  return (
    <section className="relative w-full bg-white py-24 sm:py-32" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-24">
          {/* Left: Fit Profile */}
          <div className="relative mt-8 order-2 lg:order-1 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto w-full max-w-[520px] rounded-[3rem] bg-zinc-50 border border-black/5 shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-2">
               
               {/* Body preview */}
               <div className="relative aspect-[4/3] overflow-hidden">
                  <img src="/image/bespoke-outfit-1.webp" alt="Fit preview" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 via-transparent to-transparent" />
                  
                  {/* Measurement overlay points */}
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
                     className="absolute top-1/3 left-1/2 -translate-x-1/2">
                     <div className="relative">
                        <div className="h-3 w-3 rounded-full bg-[#3A3A3A] animate-ping absolute" />
                        <div className="h-3 w-3 rounded-full bg-[#3A3A3A] relative z-10" />
                     </div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 }}
                     className="absolute top-1/2 left-1/3">
                     <div className="relative">
                        <div className="h-2.5 w-2.5 rounded-full bg-[#3A3A3A]/60 animate-ping absolute" />
                        <div className="h-2.5 w-2.5 rounded-full bg-[#3A3A3A] relative z-10" />
                     </div>
                  </motion.div>
               </div>

               {/* Measurement Dashboard */}
               <div className="p-6 sm:p-8 flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <div className="h-8 w-8 flex items-center justify-center rounded-xl bg-[#3A3A3A] text-white">
                           <Ruler className="h-3.5 w-3.5" />
                        </div>
                        <span className="font-display text-[10px] font-bold uppercase tracking-widest text-black">Fit Profile</span>
                     </div>
                     <div className="flex items-center gap-1.5 bg-[#3E1C01]/10 px-3 py-1.5 rounded-full">
                        <CheckCircle2 className="h-3 w-3 text-[#3E1C01]" />
                        <span className="font-mono text-[8px] font-bold text-[#3E1C01] uppercase tracking-widest">Synced</span>
                     </div>
                  </div>

                  {MEASUREMENTS.map((m, i) => (
                     <motion.div key={m.label} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.08 }}
                        className="flex items-center gap-4 cursor-pointer group"
                     >
                        <span className="font-display text-[10px] font-bold text-black/40 uppercase tracking-wider w-20 shrink-0 group-hover:text-black transition-colors">{m.label}</span>
                        <div className="flex-1 h-2 bg-zinc-200 rounded-full overflow-hidden">
                           <motion.div initial={{ width: 0 }} whileInView={{ width: `${m.bar}%` }} viewport={{ once: true }}
                              transition={{ delay: 0.5 + i * 0.1, duration: 0.6, ease: "easeOut" }}
                              className="h-full bg-[#3A3A3A] rounded-full group-hover:bg-[#3E1C01] transition-colors" />
                        </div>
                        <span className="font-mono text-[10px] font-bold text-black w-10 text-right">{m.value}</span>
                     </motion.div>
                  ))}
               </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-6 order-1 lg:order-2 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <motion.span initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/40">{data.badge}</motion.span>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-[#3A3A3A] sm:text-6xl lg:text-7xl">{data.title}</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-base leading-relaxed text-[#3A3A3A]/60 sm:text-lg">{data.description}</motion.p>
            </div>
            <div className="flex flex-col gap-5">
              {data.features.map((feature, i) => {
                const Icon = iconMap[feature.icon] || CheckCircle2;
                return (
                  <motion.div key={feature.title} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }} className="flex items-center gap-4 group">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F9F9F8] border border-[#3A3A3A]/5 group-hover:bg-[#3A3A3A] group-hover:text-white transition-all shadow-sm">
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <span className="font-ui text-sm font-medium text-[#3A3A3A]/70 sm:text-base">{feature.title}</span>
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

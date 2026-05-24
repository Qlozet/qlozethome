"use client";

import { motion } from "framer-motion";
import { PackageOpen, Sparkles, Heart, Star } from "lucide-react";
import Image from "next/image";

type SectionData = {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  footer: string;
};

type PackagingSectionProps = {
  data: SectionData;
};

export function PackagingSection({ data }: PackagingSectionProps) {
  return (
    <section id="packaging" className="relative w-full bg-[#F9F9F8] py-24 sm:py-32" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-24">
          {/* Left: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
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
                className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-[#3A3A3A] sm:text-6xl"
              >
                {data.title}
                <span className="block mt-2 text-xl text-[#3A3A3A]/40 font-ui font-normal tracking-normal sm:text-2xl">{data.subtitle}</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-base leading-relaxed text-[#3A3A3A]/60 sm:text-lg"
              >
                {data.description}
              </motion.p>
            </div>

            <div className="grid gap-6">
              {data.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white border border-[#3A3A3A]/5 group-hover:bg-[#3A3A3A] group-hover:text-white transition-all">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <span className="font-ui text-sm text-[#3A3A3A]/70 italic sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-display text-sm font-medium italic text-black/30"
            >
              {data.footer}
            </motion.p>
          </div>

          {/* Right: Packaging Visual */}
          <div className="relative mt-20 lg:mt-0 lg:w-1/2">
            <div className="relative grid grid-cols-2 gap-4">
              {/* Main Image Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="col-span-2 relative aspect-video w-full rounded-[3rem] bg-white border border-black/5 shadow-2xl overflow-hidden group"
              >
                <div className="absolute inset-0 bg-zinc-200" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PackageOpen className="h-16 w-16 text-black/10" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <PackageOpen className="h-5 w-5 text-white/60" />
                    <span className="font-display text-[9px] font-bold uppercase tracking-widest text-white/60">Quality Handled</span>
                  </div>
                  <span className="font-display text-lg font-bold text-white italic">Unbox Your Identity</span>
                </div>
              </motion.div>

              {/* Sub Cards */}
              <motion.div
                initial={{ opacity: 0, x: -20, rotate: 0 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ rotate: -2, scale: 1.05 }}
                className="relative aspect-square w-full rounded-[2.5rem] bg-zinc-900 shadow-2xl p-8 flex flex-col items-center justify-center text-center gap-4"
              >
                <Star className="h-8 w-8 text-white fill-white" />
                <span className="font-display text-[8px] font-bold uppercase tracking-[0.2em] text-white/40">Verified Quality</span>
                <div className="h-1 w-12 bg-white/10 rounded-full" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20, rotate: 0 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ rotate: 2, scale: 1.05 }}
                className="relative aspect-square w-full rounded-[2.5rem] bg-white border border-black/5 shadow-2xl p-8 flex flex-col items-center justify-center text-center gap-4"
              >
                <Heart className="h-8 w-8 text-rose-500 fill-rose-500" />
                <span className="font-display text-[8px] font-bold uppercase tracking-[0.2em] text-black/40">Made with Care</span>
                <div className="h-1 w-12 bg-black/10 rounded-full" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

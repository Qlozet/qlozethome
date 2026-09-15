"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Star, Lock } from "lucide-react";

type TrustData = {
  badge: string;
  title: string;
  description: string;
  points: string[];
};

type TrustSectionProps = {
  data: TrustData;
};

export function TrustSection({ data }: TrustSectionProps) {
  return (
    <section className="relative w-full bg-brand-light py-24 sm:py-32" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col gap-12 lg:w-1/2 lg:pr-16">
            <div className="flex flex-col gap-8">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#111111]/40"
              >
                {data.badge}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display max-w-4xl text-5xl sm:text-7xl font-medium leading-[1.05] tracking-tight text-[#111111]"
              >
                {data.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-ui text-base leading-relaxed text-[#111111]/50 sm:text-lg max-w-xl"
              >
                {data.description}
              </motion.p>
            </div>

            <div className="flex flex-col gap-6">
              {data.points.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-6"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-darker/10">
                    <Check className="h-3.5 w-3.5 text-brand-darker" strokeWidth={2} />
                  </span>
                  <span className="font-ui text-sm font-medium text-[#111111]/70 sm:text-base">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Storefront Trust Card */}
          <div className="relative lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[460px]"
            >
              <div className="w-full rounded-[2rem] bg-white border border-brand-darker/5 shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                {/* Storefront Identity */}
                <div className="flex items-center gap-4 p-6 sm:p-8 pb-6 border-b border-brand-darker/5">
                  <div className="h-14 w-14 rounded-2xl bg-brand-darker flex items-center justify-center shrink-0">
                    <span className="font-display text-base font-bold text-white">AS</span>
                  </div>
                  <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                    <span className="font-display text-base font-bold text-[#111111] truncate">Adire Studio</span>
                    <span className="font-ui text-[11px] text-[#111111]/40">Lagos, Nigeria</span>
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 260 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 shrink-0"
                  >
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                    <span className="font-display text-[8px] font-bold uppercase tracking-widest text-emerald-700">Verified</span>
                  </motion.div>
                </div>

                {/* Rating Row */}
                <div className="flex items-center gap-3 px-6 sm:px-8 py-5 border-b border-brand-darker/5">
                  <div className="flex items-center gap-1">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.08 }}
                      >
                        <Star className="h-4 w-4 text-brand-darker fill-brand-darker" />
                      </motion.span>
                    ))}
                  </div>
                  <span className="font-display text-sm font-bold text-[#111111]">4.9</span>
                  <span className="font-ui text-[11px] text-[#111111]/40">from customer reviews</span>
                </div>

                {/* Review Snippet */}
                <div className="px-6 sm:px-8 py-5 border-b border-brand-darker/5">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="rounded-2xl bg-brand-light p-4 flex flex-col gap-2"
                  >
                    <p className="font-ui text-[12px] leading-relaxed text-[#111111]/70 italic">
                      &ldquo;The agbada fit perfectly — exactly like the photos. Coming back for a second piece.&rdquo;
                    </p>
                    <span className="font-display text-[9px] font-bold uppercase tracking-widest text-[#111111]/30">Chioma A. &middot; Delivered Order</span>
                  </motion.div>
                </div>

                {/* Secure Payment Row */}
                <div className="flex items-center gap-3 px-6 sm:px-8 py-5 bg-brand-darker">
                  <div className="h-8 w-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Lock className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-display text-[10px] font-bold uppercase tracking-widest text-white">Secure Payments</span>
                    <span className="font-ui text-[10px] text-white/50">Held safely, released to you after delivery is confirmed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

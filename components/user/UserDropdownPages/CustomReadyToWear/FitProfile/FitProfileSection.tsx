"use client";

import { motion } from "framer-motion";
import { CheckCircle2, HelpCircle, Zap, Fingerprint, Check, Shield, RefreshCw } from "lucide-react";
import { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  CheckCircle2: CheckCircle2,
  HelpCircle: HelpCircle,
  Zap: Zap
};

type Feature = {
  title: string;
  icon: string;
};

type FitData = {
  badge: string;
  title: string;
  description: string;
  features: Feature[];
};

type FitProfileSectionProps = {
  data: FitData;
};

const MEASUREMENTS = [
  { label: "Chest", value: "102", unit: "cm" },
  { label: "Waist", value: "84", unit: "cm" },
  { label: "Shoulder", value: "46", unit: "cm" },
  { label: "Sleeve", value: "64", unit: "cm" },
  { label: "Hip", value: "98", unit: "cm" },
  { label: "Length", value: "72", unit: "cm" }
];

export function FitProfileSection({ data }: FitProfileSectionProps) {
  return (
    <section className="relative z-10 bg-white py-24 sm:py-32" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-24">
          {/* Left: Content */}
          <div className="flex flex-col gap-6 lg:w-1/2">
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
              className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-[#3A3A3A] sm:text-6xl lg:text-7xl"
            >
              {data.title}
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

            <div className="flex flex-col gap-3 mt-2">
              {data.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3A3A3A]/10">
                    <Check className="h-3.5 w-3.5 text-[#3A3A3A]" />
                  </span>
                  <span className="font-ui text-sm font-medium text-[#3A3A3A]/70 sm:text-base">{feature.title}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Fit Profile Card */}
          <div className="relative mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: "spring" }}
              className="w-full max-w-[420px] rounded-3xl bg-white border border-[#3A3A3A]/5 shadow-2xl overflow-hidden"
            >
              {/* Console Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-[#3A3A3A]/5 bg-[#3A3A3A]/[0.02]">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-[#3A3A3A]/10" />
                    <div className="h-2 w-2 rounded-full bg-[#3A3A3A]/10" />
                    <div className="h-2 w-2 rounded-full bg-[#3A3A3A]/10" />
                  </div>
                  <span className="font-mono text-[8px] font-bold text-[#3A3A3A]/30 uppercase tracking-widest">Fit Profile</span>
                </div>
                <span className="font-mono text-[7px] font-bold text-emerald-600 uppercase tracking-widest flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                  Synced
                </span>
              </div>

              {/* Profile Identity */}
              <div className="px-5 pt-5 pb-4 flex items-center gap-4 border-b border-[#3A3A3A]/5">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="relative h-14 w-14 rounded-2xl overflow-hidden border border-[#3A3A3A]/10 shrink-0"
                >
                  <img src="/image/seun.png" alt="Profile" className="w-full h-full object-cover" />
                  <div className="absolute -bottom-0.5 -right-0.5 h-5 w-5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center">
                    <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                  </div>
                </motion.div>
                <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                  <span className="font-display text-sm font-bold text-[#3A3A3A] tracking-tight">Seun Adeyemi</span>
                  <span className="font-mono text-[7px] text-[#3A3A3A]/30 font-bold uppercase tracking-widest">Profile ID: SEUN_A • Last Updated: 2 days ago</span>
                </div>
              </div>

              {/* Measurements Grid */}
              <div className="px-5 pt-4 pb-2">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[7px] font-bold text-[#3A3A3A]/25 uppercase tracking-widest">Saved Measurements</span>
                  <span className="font-mono text-[7px] text-[#3A3A3A]/15 uppercase tracking-widest">6 Points</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {MEASUREMENTS.map((m, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.06 }}
                      className="rounded-xl bg-zinc-50 border border-[#3A3A3A]/5 p-3 flex flex-col gap-1 group hover:bg-[#3A3A3A]/[0.04] transition-colors cursor-default"
                    >
                      <span className="font-mono text-[6px] font-bold text-[#3A3A3A]/20 uppercase tracking-widest">{m.label}</span>
                      <div className="flex items-baseline gap-0.5">
                        <span className="font-display text-lg font-bold text-[#3A3A3A] tracking-tight">{m.value}</span>
                        <span className="font-mono text-[7px] text-[#3A3A3A]/25">{m.unit}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Auto-Apply Status */}
              <div className="px-5 py-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="rounded-2xl bg-[#3A3A3A] p-4 flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <RefreshCw className="h-4 w-4 text-white/60" strokeWidth={2} />
                  </div>
                  <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                    <span className="font-display text-[10px] font-bold text-white uppercase tracking-wider">Auto-Applied to Every Order</span>
                    <span className="font-mono text-[7px] text-white/30 uppercase tracking-widest">No re-measuring needed • Consistent fit</span>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <Check className="h-3.5 w-3.5 text-emerald-400" strokeWidth={3} />
                  </div>
                </motion.div>
              </div>

              {/* Recent Orders Using This Profile */}
              <div className="px-5 pb-5">
                <span className="font-mono text-[7px] font-bold text-[#3A3A3A]/20 uppercase tracking-widest block mb-2.5">Recent Fits</span>
                <div className="flex gap-2">
                  {[
                    { img: "/image/product-3.png", name: "Urban Trench" },
                    { img: "/image/agbada-outfit.png", name: "Agbada 042" },
                    { img: "/image/custom-outfit-2.png", name: "Evening Set" }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + idx * 0.1 }}
                      className="relative flex-1 aspect-[3/4] rounded-xl overflow-hidden border border-[#3A3A3A]/5 group cursor-default"
                    >
                      <img src={item.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={item.name} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2">
                        <span className="font-display text-[7px] font-bold text-white uppercase tracking-wider">{item.name}</span>
                      </div>
                      <div className="absolute top-1.5 right-1.5 h-4 w-4 rounded-full bg-emerald-500 flex items-center justify-center">
                        <Check className="h-2 w-2 text-white" strokeWidth={3} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Node Marker on Spine */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <div className="w-1 h-1 rounded-full bg-[#3A3A3A]/20" />
      </div>
    </section>
  );
}

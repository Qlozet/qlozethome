"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Zap, Award, ChevronRight, Check } from "lucide-react";
import { useState, useEffect } from "react";

type SectionData = {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  footer: string;
};

type VendorAssignmentSectionProps = {
  data: SectionData;
};

const VENDORS = [
  {
    name: "Atelier 08-D",
    initials: "A8",
    specialty: "Silk & Kaftan Expert",
    match: 98,
    skills: ["Silk Tailoring", "Embroidery", "Bespoke Fit"],
    orders: 342,
    rating: 4.9,
  },
  {
    name: "Studio Ade",
    initials: "SA",
    specialty: "Contemporary Agbada",
    match: 91,
    skills: ["Agbada", "Modern Cuts", "Linen"],
    orders: 218,
    rating: 4.8,
  },
  {
    name: "Maison Kola",
    initials: "MK",
    specialty: "Ankara Fusion",
    match: 87,
    skills: ["Ankara", "Pattern Work", "Mixed Media"],
    orders: 156,
    rating: 4.7,
  },
];

export function VendorAssignmentSection({ data }: VendorAssignmentSectionProps) {
  const [selectedVendor, setSelectedVendor] = useState(0);
  const [isMatching, setIsMatching] = useState(true);

  useEffect(() => {
    // Simulate matching animation
    const timer = setTimeout(() => setIsMatching(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-cycle through vendors
  useEffect(() => {
    if (isMatching) return;
    const timer = setInterval(() => {
      setSelectedVendor((prev) => (prev + 1) % VENDORS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isMatching]);

  const vendor = VENDORS[selectedVendor];

  return (
    <section id="vendor" className="relative w-full bg-brand-light py-24 sm:py-32 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-24">
          {/* Right: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2 order-2 lg:order-2">
            <div className="flex flex-col gap-6">
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
                className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-[#111111] sm:text-6xl"
              >
                {data.title}
                <span className="block mt-2 text-xl text-[#111111]/40 font-ui font-normal tracking-normal sm:text-2xl">{data.subtitle}</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-base leading-relaxed text-[#111111]/60 sm:text-lg"
              >
                {data.description}
              </motion.p>
            </div>

            <div className="flex flex-col gap-8">
              {data.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white border border-black/5 shadow-sm">
                    <Star className="h-5 w-5 text-zinc-900" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-ui text-sm font-medium text-[#111111]/70 sm:text-base">{feature}</span>
                    <div className="h-0.5 w-12 bg-black/10 mt-1" />
                  </div>
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

          {/* Left: Vendor Matchmaking Console */}
          <div className="relative mt-20 lg:mt-0 lg:w-1/2 order-1 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[460px]"
            >
              <div className="relative z-10 w-full rounded-[3rem] bg-white shadow-2xl border border-black/5 overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-2">
                {/* Console Header */}
                <div className="flex items-center justify-between p-6 sm:p-8 pb-0">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-xl bg-brand-darker flex items-center justify-center">
                      <Zap className="h-3.5 w-3.5 text-white" />
                    </div>
                    <span className="font-display text-[10px] font-bold uppercase tracking-widest text-black">Vendor Match</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-darker/10 border border-brand-darker/20">
                    <div className="h-1.5 w-1.5 rounded-full bg-brand-darker animate-pulse" />
                    <span className="font-mono text-[8px] font-bold text-brand-darker uppercase tracking-widest leading-none">AI Matching</span>
                  </div>
                </div>

                {/* Vendor Candidates List */}
                <div className="p-6 sm:p-8 flex flex-col gap-3">
                  {VENDORS.map((v, i) => {
                    const isSelected = selectedVendor === i;
                    return (
                      <motion.div
                        key={i}
                        onClick={() => setSelectedVendor(i)}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className={`relative flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                          isSelected
                            ? "bg-brand-darker text-white shadow-xl"
                            : "bg-zinc-50 text-black border border-black/5 hover:bg-zinc-100"
                        }`}
                      >
                        {/* Avatar */}
                        <div className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 font-display text-sm font-bold ${
                          isSelected ? "bg-white/10 text-white" : "bg-white text-black border border-black/5"
                        }`}>
                          {v.initials}
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-display text-sm font-bold truncate">{v.name}</span>
                            {i === 0 && <Zap className={`h-3 w-3 shrink-0 ${isSelected ? "text-[#EDEAEA] fill-[#EDEAEA]" : "text-brand-darker fill-brand-darker"}`} />}
                          </div>
                          <span className={`font-ui text-[10px] ${isSelected ? "text-white/50" : "text-black/40"}`}>{v.specialty}</span>
                        </div>

                        {/* Match Score */}
                        <div className="flex flex-col items-end shrink-0">
                          <span className={`font-mono text-lg font-bold ${isSelected ? "text-[#EDEAEA]" : "text-brand-darker"}`}>{v.match}%</span>
                          <span className={`font-mono text-[7px] uppercase tracking-widest ${isSelected ? "text-white/30" : "text-black/30"}`}>Match</span>
                        </div>

                        {/* Selected indicator */}
                        {isSelected && (
                          <motion.div
                            layoutId="vendorCheck"
                            className="absolute -right-1 -top-1 h-6 w-6 rounded-full bg-brand-darker flex items-center justify-center border-2 border-white shadow-lg"
                          >
                            <Check className="h-3 w-3 text-white" />
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Selected Vendor Detail */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedVendor}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 sm:px-8 pb-6 sm:pb-8"
                  >
                    <div className="p-5 rounded-2xl bg-zinc-50 border border-black/5 flex flex-col gap-4">
                      {/* Skills */}
                      <div className="flex flex-wrap gap-1.5">
                        {vendor.skills.map((skill) => (
                          <span key={skill} className="px-2.5 py-1 rounded-full bg-white border border-black/5 font-mono text-[7px] font-bold uppercase tracking-widest text-black/50">
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Stats Row */}
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-1.5">
                          <Star className="h-3 w-3 text-brand-darker fill-brand-darker" />
                          <span className="font-display text-xs font-bold text-black">{vendor.rating}</span>
                        </div>
                        <div className="h-3 w-px bg-black/10" />
                        <span className="font-mono text-[9px] text-black/40">{vendor.orders} orders</span>
                        <div className="ml-auto flex items-center gap-1.5">
                          <Award className="h-3.5 w-3.5 text-black/30" />
                          <span className="font-display text-[8px] font-bold uppercase tracking-widest text-black/40">Verified</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Best Match Pill */}
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                whileInView={{ scale: 1, rotate: -6 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                className="absolute -top-3 -left-3 z-20 px-5 py-3 bg-brand-darker text-white rounded-2xl shadow-2xl font-display text-[10px] font-bold uppercase tracking-widest border-4 border-white"
              >
                Best Match
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

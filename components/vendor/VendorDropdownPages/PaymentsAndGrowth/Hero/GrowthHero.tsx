"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TrendingUp, DollarSign, ArrowRight, Wallet, BarChart3 } from "lucide-react";

type HeroData = {
  badge: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
  closing: string;
};

type GrowthHeroProps = {
  data: HeroData;
};

export function GrowthHero({ data }: GrowthHeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-20 pb-10 lg:pt-32 lg:pb-24 overflow-hidden bg-white" data-theme="light">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.02),transparent)]" />
      
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mx-auto w-full max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-24">
          {/* Left: Content */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-8">
              <motion.span variants={itemVariants} className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#111111]/40">
                {data.badge}
              </motion.span>
              <motion.h1 variants={itemVariants} className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-[#111111] sm:text-6xl lg:text-7xl xl:text-8xl">
                {data.title}
              </motion.h1>
              <motion.p variants={itemVariants} className="max-w-xl font-ui text-lg leading-relaxed text-[#111111]/60 sm:text-2xl">
                {data.description}
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <Link href={data.cta.href} className="group relative inline-flex h-16 items-center justify-center gap-4 overflow-hidden rounded-full bg-brand-button px-12 text-[11px] font-bold uppercase tracking-[0.35em] text-white transition-all hover:scale-[1.02] hover:bg-brand active:scale-95 shadow-2xl">
                <span className="relative z-10">{data.cta.label}</span>
                <ArrowRight className="h-4 w-4 relative z-10 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.p variants={itemVariants} className="font-ui text-sm italic text-[#111111]/40">
              {data.closing}
            </motion.p>
          </div>

          {/* Right: Revenue Dashboard */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2 flex items-center justify-center">
             <div className="relative w-full max-w-[520px] rounded-[3rem] bg-brand-light border border-brand-darker/5 shadow-2xl p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-2">
                
                {/* Dashboard Header */}
                <div className="flex items-center justify-between pb-5 border-b border-brand-darker/5 mb-6">
                   <div className="flex items-center gap-3">
                      <div className="h-8 w-8 flex items-center justify-center rounded-xl bg-brand-darker text-white">
                         <BarChart3 className="h-3.5 w-3.5" />
                      </div>
                      <span className="font-display text-[10px] font-bold uppercase tracking-widest text-brand-darker">Revenue Overview</span>
                   </div>
                   <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-brand-darker/5 shadow-sm">
                      <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-mono text-[8px] font-bold text-emerald-600 uppercase tracking-widest">Live</span>
                   </div>
                </div>

                {/* Revenue Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                   <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                      className="bg-white rounded-2xl border border-brand-darker/5 shadow-md p-5 flex flex-col gap-2 cursor-pointer hover:shadow-xl transition-shadow"
                   >
                      <div className="flex items-center gap-2">
                         <DollarSign className="h-3.5 w-3.5 text-brand-darker/40" />
                         <span className="font-mono text-[8px] font-bold text-brand-darker/60 uppercase tracking-widest">This Month</span>
                      </div>
                      <span className="font-display text-2xl font-bold text-brand-darker tracking-tight">₦4.2M</span>
                      <div className="flex items-center gap-1.5">
                         <TrendingUp className="h-3 w-3 text-emerald-500" />
                         <span className="font-mono text-[9px] font-bold text-emerald-600">+24%</span>
                      </div>
                   </motion.div>

                   <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                      className="bg-white rounded-2xl border border-brand-darker/5 shadow-md p-5 flex flex-col gap-2 cursor-pointer hover:shadow-xl transition-shadow"
                   >
                      <div className="flex items-center gap-2">
                         <Wallet className="h-3.5 w-3.5 text-brand-darker/40" />
                         <span className="font-mono text-[8px] font-bold text-brand-darker/60 uppercase tracking-widest">Orders</span>
                      </div>
                      <span className="font-display text-2xl font-bold text-brand-darker tracking-tight">186</span>
                      <div className="flex items-center gap-1.5">
                         <TrendingUp className="h-3 w-3 text-emerald-500" />
                         <span className="font-mono text-[9px] font-bold text-emerald-600">+18%</span>
                      </div>
                   </motion.div>
                </div>

                {/* Mini Revenue Chart */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
                   className="bg-white rounded-2xl border border-brand-darker/5 shadow-md p-5 mb-6"
                >
                   <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[8px] font-bold text-brand-darker/60 uppercase tracking-widest">Revenue Trend</span>
                      <span className="font-mono text-[8px] font-bold text-brand-darker/30 uppercase tracking-widest">Last 6 months</span>
                   </div>
                   <div className="flex items-end gap-2 h-24">
                      {[35, 48, 42, 65, 58, 82].map((h, i) => (
                         <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 + i * 0.08, duration: 0.6, ease: "easeOut" }}
                            className={`flex-1 rounded-lg ${i === 5 ? 'bg-brand' : 'bg-brand/20'} transition-colors duration-300 hover:bg-brand/80 cursor-pointer`}
                         />
                      ))}
                   </div>
                   <div className="flex justify-between mt-3">
                      {["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(m => (
                         <span key={m} className="font-mono text-[7px] font-bold text-brand-darker/30 uppercase flex-1 text-center">{m}</span>
                      ))}
                   </div>
                </motion.div>

                {/* Recent Transaction */}
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.7 }}
                   className="bg-white rounded-2xl border border-brand-darker/5 shadow-md p-4 flex items-center gap-4 cursor-pointer hover:shadow-xl transition-shadow"
                >
                   <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                      <DollarSign className="h-4 w-4 text-emerald-600" />
                   </div>
                   <div className="flex-1 flex flex-col gap-0.5">
                      <span className="font-display text-[10px] font-bold text-brand-darker uppercase tracking-wider">Custom Suit Order</span>
                      <span className="font-mono text-[8px] text-[#111111]/40">Just now — Milestone 1 Released</span>
                   </div>
                   <span className="font-display text-sm font-bold text-emerald-600">+₦85K</span>
                </motion.div>
             </div>
          </div>
        </div>
      </motion.div>

      {/* Revenue Stream Entry */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-px h-24 bg-brand-darker/10" />
        <div className="w-2 h-2 rounded-full bg-brand-darker/20" />
      </div>
    </section>
  );
}

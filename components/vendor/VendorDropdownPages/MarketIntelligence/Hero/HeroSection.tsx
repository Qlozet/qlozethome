"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, BrainCircuit, TrendingUp, BarChart3, Activity } from "lucide-react";

type HeroData = {
  badge: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  image: { src: string; alt: string };
};

type HeroSectionProps = { data: HeroData };

export function HeroSection({ data }: HeroSectionProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 60]), springConfig);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any } },
  };

  const METRICS = [
    { label: "Revenue", value: "₦4.2M", change: "+23%", positive: true },
    { label: "Orders", value: "1,847", change: "+18%", positive: true },
    { label: "Avg. Order", value: "₦22.7K", change: "+5%", positive: true },
  ];

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden bg-white pt-24 pb-12 lg:min-h-screen lg:pt-40 lg:pb-24" data-theme="light">
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 0.7px, transparent 0.7px)', backgroundSize: '24px 24px' }} />

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 mx-auto w-full max-w-[94rem] px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* Left: Text */}
          <div className="flex flex-col gap-10 lg:w-1/2 lg:pt-8">
            <div className="flex flex-col gap-8">
              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-lg bg-[#3A3A3A] flex items-center justify-center">
                  <BrainCircuit className="h-3.5 w-3.5 text-white" />
                </div>
                <span className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/40">{data.badge}</span>
              </motion.div>
              <motion.h1 variants={itemVariants} className="max-w-2xl font-display text-5xl font-medium leading-[1.02] tracking-tight text-[#3A3A3A] sm:text-7xl lg:text-[6.5rem]">{data.title}</motion.h1>
              <motion.p variants={itemVariants} className="max-w-xl font-ui text-lg leading-relaxed text-[#3A3A3A]/40 sm:text-xl">{data.description}</motion.p>
            </div>

            <motion.div variants={itemVariants} className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <Link href={data.cta.href} className="group relative inline-flex h-16 items-center justify-center gap-4 overflow-hidden rounded-full bg-[#3A3A3A] px-12 text-[10px] font-bold uppercase tracking-[0.4em] text-white transition-all hover:scale-[1.03] active:scale-95 shadow-2xl shadow-black/20">
                <span className="relative z-10">{data.cta.label}</span>
                <ArrowRight className="h-4 w-4 relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-zinc-800 to-black opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
              <Link href={data.secondaryCta.href} className="group inline-flex items-center gap-4 font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]">
                {data.secondaryCta.label}
                <div className="h-px w-10 bg-[#3A3A3A] transition-all duration-500 group-hover:w-16" />
              </Link>
            </motion.div>

            {/* Trust chips */}
            <motion.div variants={itemVariants} className="flex items-center gap-6 pt-4 border-t border-black/5">
              {[{ icon: TrendingUp, label: "Real-Time Data" }, { icon: Activity, label: "AI-Powered" }].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-black/25">
                  <item.icon className="h-3.5 w-3.5" />
                  <span className="font-display text-[8px] font-bold uppercase tracking-widest">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Intelligence Dashboard */}
          <motion.div style={{ y: y1 }} className="relative mt-8 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto w-full max-w-[540px] rounded-[2rem] sm:rounded-[3rem] bg-[#F9F9F8] border border-[#3A3A3A]/5 shadow-2xl p-5 sm:p-8 overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-2">
              {/* Header bar */}
              <div className="flex items-center justify-between pb-5 border-b border-black/5 mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-xl bg-[#3A3A3A] text-white flex items-center justify-center"><BarChart3 className="h-3.5 w-3.5" /></div>
                  <span className="font-display text-[10px] font-bold uppercase tracking-widest text-[#3A3A3A]">Intelligence Overview</span>
                </div>
                <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[8px] font-bold text-emerald-600 uppercase tracking-widest">Live</span>
                </div>
              </div>

              {/* KPI Row */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {METRICS.map((m, i) => (
                  <motion.div key={m.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + i * 0.1 }}
                    className="bg-white rounded-2xl border border-black/5 p-4 shadow-sm group cursor-pointer hover:shadow-md transition-all hover:-translate-y-0.5">
                    <span className="font-mono text-[7px] font-bold text-[#3A3A3A]/30 uppercase tracking-widest">{m.label}</span>
                    <div className="font-display text-lg font-bold text-[#3A3A3A] mt-1">{m.value}</div>
                    <span className="font-mono text-[9px] font-bold text-emerald-600">{m.change}</span>
                  </motion.div>
                ))}
              </div>

              {/* Revenue Chart */}
              <div className="bg-white rounded-2xl border border-black/5 p-5 shadow-sm mb-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[8px] font-bold text-[#3A3A3A]/40 uppercase tracking-widest">Revenue Trend</span>
                  <span className="font-mono text-[8px] font-bold text-[#3A3A3A]/30 uppercase tracking-widest">Last 7 Days</span>
                </div>
                <div className="flex items-end gap-2 h-28">
                  {[45, 62, 38, 78, 55, 88, 72].map((h, i) => (
                    <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: 1 + i * 0.08, duration: 0.6, ease: "easeOut" }}
                      className="flex-1 rounded-lg bg-black/5 transition-colors duration-300 hover:bg-black/15 cursor-pointer group relative">
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#3A3A3A] text-white px-2 py-0.5 rounded text-[7px] font-mono font-bold whitespace-nowrap">
                        ₦{Math.round(h * 47)}K
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Top Products */}
              <div className="bg-white rounded-2xl border border-black/5 p-5 shadow-sm">
                <span className="font-mono text-[8px] font-bold text-[#3A3A3A]/40 uppercase tracking-widest mb-3 block">Top Products</span>
                {[
                  { name: "Ankara Maxi Dress", sales: 234, bar: 92 },
                  { name: "Agbada Set", sales: 189, bar: 74 },
                  { name: "Silk Evening Gown", sales: 156, bar: 61 },
                ].map((p, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.4 + i * 0.1 }}
                    className="flex items-center gap-3 py-2.5 group cursor-pointer">
                    <span className="font-mono text-[8px] font-bold text-[#3A3A3A]/20 w-4">{i + 1}</span>
                    <span className="font-display text-[10px] font-bold text-[#3A3A3A] uppercase tracking-wider flex-1 group-hover:text-black/70 transition-colors">{p.name}</span>
                    <div className="w-20 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${p.bar}%` }} transition={{ delay: 1.6 + i * 0.1, duration: 0.6 }} className="h-full bg-[#3A3A3A] rounded-full" />
                    </div>
                    <span className="font-mono text-[8px] font-bold text-[#3A3A3A]/40">{p.sales}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

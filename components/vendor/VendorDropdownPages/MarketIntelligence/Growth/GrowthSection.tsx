"use client";

import { motion } from "framer-motion";
import { Zap, Search, Globe, TrendingUp, ArrowUpRight, Flame } from "lucide-react";

const iconMap: any = { Zap, Search, Globe };

type Feature = { title: string; icon: string };
type GrowthData = { badge: string; title: string; description: string; features: Feature[] };
type GrowthSectionProps = { data: GrowthData };

const TRENDING_ITEMS = [
  { name: "Two-Piece Sets", growth: "+180%", heat: 95, status: "Surging" },
  { name: "Organza Fabrics", growth: "+120%", heat: 82, status: "Rising" },
  { name: "Pastel Palettes", growth: "+67%", heat: 68, status: "Emerging" },
];

const OPPORTUNITIES = [
  { category: "Plus-Size Custom", demand: "High", gap: "Low Supply", score: 94 },
  { category: "Bridal Ankara", demand: "Very High", gap: "Moderate", score: 88 },
  { category: "Kids Bespoke", demand: "Medium", gap: "No Supply", score: 76 },
];

const PLATFORM_SIGNALS = [
  { region: "Lagos", searches: "12.4K", growth: "+34%" },
  { region: "Abuja", searches: "8.7K", growth: "+28%" },
  { region: "London", searches: "3.2K", growth: "+52%" },
  { region: "New York", searches: "2.1K", growth: "+41%" },
];

export function GrowthSection({ data }: GrowthSectionProps) {
  return (
    <section className="relative z-20 bg-brand-darker px-6 md:px-10 lg:px-10 py-24 sm:py-32 overflow-hidden" data-theme="dark">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      <div className="relative z-10 mx-auto max-w-[94rem]">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 text-center items-center lg:mb-20">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">{data.badge}</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="max-w-3xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">{data.title}</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="max-w-xl font-ui text-lg text-white/40">{data.description}</motion.p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Card 1: Emerging Trends */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="group rounded-[2rem] sm:rounded-[3rem] bg-white/[0.03] border border-white/5 p-5 sm:p-8 transition-all duration-500 hover:bg-white/[0.08] hover:border-white/10 hover:-translate-y-2 cursor-pointer">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-brand-light text-brand-darker flex items-center justify-center"><Zap className="h-4 w-4" /></div>
              <span className="font-display text-[10px] font-bold uppercase tracking-widest text-white">{data.features[0]?.title}</span>
            </div>
            <div className="bg-white/[0.03] rounded-2xl border border-white/5 p-5">
              <span className="font-mono text-[7px] font-bold text-white/30 uppercase tracking-widest mb-4 block">Trending Now</span>
              {TRENDING_ITEMS.map((t, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 py-3 border-b border-white/5 last:border-0 group/item hover:bg-white/[0.03] -mx-2 px-2 rounded-lg transition-colors">
                  <Flame className={`h-3.5 w-3.5 shrink-0 ${t.heat > 90 ? 'text-orange-400' : t.heat > 75 ? 'text-amber-400' : 'text-yellow-400/60'}`} />
                  <span className="font-display text-[9px] font-bold text-white uppercase tracking-wider flex-1">{t.name}</span>
                  <div className="text-right shrink-0">
                    <span className="font-mono text-[9px] font-bold text-emerald-400 block">{t.growth}</span>
                    <span className="font-mono text-[7px] text-white/20">{t.status}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Untapped Opportunities */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="group rounded-[2rem] sm:rounded-[3rem] bg-white/[0.03] border border-white/5 p-5 sm:p-8 transition-all duration-500 hover:bg-white/[0.08] hover:border-white/10 hover:-translate-y-2 cursor-pointer">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-brand-light text-brand-darker flex items-center justify-center"><Search className="h-4 w-4" /></div>
              <span className="font-display text-[10px] font-bold uppercase tracking-widest text-white">{data.features[1]?.title}</span>
            </div>
            <div className="bg-white/[0.03] rounded-2xl border border-white/5 p-5">
              <span className="font-mono text-[7px] font-bold text-white/30 uppercase tracking-widest mb-4 block">Opportunity Score</span>
              {OPPORTUNITIES.map((o, i) => (
                <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="py-3 border-b border-white/5 last:border-0">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-display text-[9px] font-bold text-white uppercase tracking-wider">{o.category}</span>
                    <span className="font-mono text-sm font-bold text-white">{o.score}</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden mb-1.5">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${o.score}%` }} viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.15, duration: 0.6 }}
                      className="h-full bg-brand-light rounded-full" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[7px] text-white/30">Demand: <span className="text-white/50">{o.demand}</span></span>
                    <span className="font-mono text-[7px] text-white/30">Gap: <span className="text-white/50">{o.gap}</span></span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Card 3: Demand Signals */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="group rounded-[2rem] sm:rounded-[3rem] bg-white/[0.03] border border-white/5 p-5 sm:p-8 transition-all duration-500 hover:bg-white/[0.08] hover:border-white/10 hover:-translate-y-2 cursor-pointer">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-brand-light text-brand-darker flex items-center justify-center"><Globe className="h-4 w-4" /></div>
              <span className="font-display text-[10px] font-bold uppercase tracking-widest text-white">{data.features[2]?.title}</span>
            </div>
            <div className="bg-white/[0.03] rounded-2xl border border-white/5 p-5">
              <span className="font-mono text-[7px] font-bold text-white/30 uppercase tracking-widest mb-4 block">Platform Searches by Region</span>
              {PLATFORM_SIGNALS.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-center gap-3 py-3 border-b border-white/5 last:border-0 group/item hover:bg-white/[0.03] -mx-2 px-2 rounded-lg transition-colors">
                  <div className="h-7 w-7 rounded-lg bg-white/5 flex items-center justify-center">
                    <span className="font-mono text-[7px] font-bold text-white/40">{p.region.slice(0, 2).toUpperCase()}</span>
                  </div>
                  <span className="font-display text-[9px] font-bold text-white uppercase tracking-wider flex-1">{p.region}</span>
                  <span className="font-mono text-[9px] font-bold text-white/60">{p.searches}</span>
                  <div className="flex items-center gap-1">
                    <ArrowUpRight className="h-3 w-3 text-emerald-400" />
                    <span className="font-mono text-[8px] font-bold text-emerald-400">{p.growth}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Palette, BarChart3, Users, Heart, ShoppingBag } from "lucide-react";

const iconMap: any = { Palette, BarChart3, Users };

type Feature = { title: string; icon: string };
type CustomerInsightsData = { badge: string; title: string; description: string; features: Feature[] };
type CustomerInsightsSectionProps = { data: CustomerInsightsData };

const STYLE_PREFERENCES = [
  { style: "Ankara", pct: 42, color: "bg-black" },
  { style: "Bespoke", pct: 28, color: "bg-black/60" },
  { style: "Minimalist", pct: 18, color: "bg-black/30" },
  { style: "Streetwear", pct: 12, color: "bg-black/15" },
];

const BEHAVIOR_DATA = [
  { metric: "Browse to Buy", value: "3.2 days", trend: "↓ Faster" },
  { metric: "Avg Cart Size", value: "2.4 items", trend: "↑ Growing" },
  { metric: "Return Rate", value: "4.1%", trend: "↓ Lower" },
  { metric: "Review Rate", value: "68%", trend: "↑ Higher" },
];

const REPEAT_SEGMENTS = [
  { label: "Loyal (5+ orders)", pct: 23, count: "412" },
  { label: "Returning (2-4)", pct: 34, count: "608" },
  { label: "New (1 order)", pct: 43, count: "768" },
];

export function CustomerInsightsSection({ data }: CustomerInsightsSectionProps) {
  return (
    <section className="relative z-10 bg-white px-6 py-24 sm:py-32" data-theme="light">
      <div className="mx-auto max-w-[94rem]">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 text-center items-center lg:mb-20">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/30">{data.badge}</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="max-w-3xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-[#3A3A3A] sm:text-6xl lg:text-7xl">{data.title}</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="max-w-xl font-ui text-lg text-[#3A3A3A]/40">{data.description}</motion.p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Card 1: Style & Preference Trends */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="group rounded-[2rem] sm:rounded-[3rem] bg-[#F9F9F8] border border-black/5 p-5 sm:p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-2 cursor-pointer">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-[#3A3A3A] text-white flex items-center justify-center"><Palette className="h-4 w-4" /></div>
              <span className="font-display text-[10px] font-bold uppercase tracking-widest text-[#3A3A3A]">{data.features[0]?.title}</span>
            </div>
            <div className="bg-white rounded-2xl border border-black/5 p-5 shadow-sm">
              <span className="font-mono text-[7px] font-bold text-[#3A3A3A]/30 uppercase tracking-widest mb-4 block">Customer Style Preferences</span>
              <div className="flex flex-col gap-3">
                {STYLE_PREFERENCES.map((s, i) => (
                  <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex items-center gap-3 group/item cursor-pointer">
                    <span className="font-display text-[9px] font-bold text-[#3A3A3A] uppercase tracking-wider w-20 shrink-0">{s.style}</span>
                    <div className="flex-1 h-3 bg-zinc-100 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${s.pct}%` }} viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }} className={`h-full rounded-full ${s.color}`} />
                    </div>
                    <span className="font-mono text-[9px] font-bold text-[#3A3A3A]/60 w-8 text-right">{s.pct}%</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Buying Behavior */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="group rounded-[2rem] sm:rounded-[3rem] bg-[#F9F9F8] border border-black/5 p-5 sm:p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-2 cursor-pointer">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-[#3A3A3A] text-white flex items-center justify-center"><ShoppingBag className="h-4 w-4" /></div>
              <span className="font-display text-[10px] font-bold uppercase tracking-widest text-[#3A3A3A]">{data.features[1]?.title}</span>
            </div>
            <div className="bg-white rounded-2xl border border-black/5 p-5 shadow-sm">
              <span className="font-mono text-[7px] font-bold text-[#3A3A3A]/30 uppercase tracking-widest mb-4 block">Buying Behavior</span>
              <div className="grid grid-cols-2 gap-3">
                {BEHAVIOR_DATA.map((b, i) => (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="bg-[#F9F9F8] rounded-xl p-3 border border-black/5 cursor-pointer hover:bg-white transition-colors">
                    <span className="font-mono text-[7px] text-[#3A3A3A]/30 uppercase tracking-widest block mb-1">{b.metric}</span>
                    <span className="font-display text-sm font-bold text-[#3A3A3A] block">{b.value}</span>
                    <span className="font-mono text-[7px] font-bold text-emerald-600">{b.trend}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 3: Repeat Customer Patterns */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="group rounded-[2rem] sm:rounded-[3rem] bg-[#F9F9F8] border border-black/5 p-5 sm:p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-2 cursor-pointer">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-[#3A3A3A] text-white flex items-center justify-center"><Users className="h-4 w-4" /></div>
              <span className="font-display text-[10px] font-bold uppercase tracking-widest text-[#3A3A3A]">{data.features[2]?.title}</span>
            </div>
            <div className="bg-white rounded-2xl border border-black/5 p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[7px] font-bold text-[#3A3A3A]/30 uppercase tracking-widest">Customer Segments</span>
                <span className="font-mono text-[8px] font-bold text-[#3A3A3A]">1,788 total</span>
              </div>
              {/* Donut chart representation */}
              <div className="flex items-center gap-6 mb-4">
                <div className="relative h-24 w-24 shrink-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    {REPEAT_SEGMENTS.map((seg, i) => {
                      const offset = REPEAT_SEGMENTS.slice(0, i).reduce((a, s) => a + s.pct, 0);
                      return (
                        <motion.circle key={i} cx="50" cy="50" r="40" fill="none" strokeWidth="12"
                          stroke={i === 0 ? "#000" : i === 1 ? "#00000060" : "#00000020"}
                          strokeDasharray={`${seg.pct * 2.51} ${251 - seg.pct * 2.51}`}
                          strokeDashoffset={`${-offset * 2.51}`}
                          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.2, duration: 0.8 }} />
                      );
                    })}
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center">
                      <Heart className="h-3 w-3 text-[#3A3A3A]/30 mb-0.5" />
                      <span className="font-mono text-[7px] font-bold text-[#3A3A3A]/40">57%</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {REPEAT_SEGMENTS.map((seg, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className={`h-2.5 w-2.5 rounded-full ${i === 0 ? 'bg-[#3A3A3A]' : i === 1 ? 'bg-black/60' : 'bg-black/20'}`} />
                      <div className="flex flex-col">
                        <span className="font-display text-[8px] font-bold text-[#3A3A3A] uppercase tracking-wider">{seg.label}</span>
                        <span className="font-mono text-[7px] text-[#3A3A3A]/40">{seg.count} customers</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

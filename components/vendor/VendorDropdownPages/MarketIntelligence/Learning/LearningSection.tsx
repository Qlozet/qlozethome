"use client";

import { motion } from "framer-motion";
import { BrainCircuit, MessageSquareText, RefreshCcw, ArrowUpRight } from "lucide-react";

const iconMap: any = { BrainCircuit, MessageSquareText, RefreshCcw };

type Feature = { title: string; icon: string };
type LearningData = { badge: string; title: string; description: string; features: Feature[] };
type LearningSectionProps = { data: LearningData };

const AI_TIMELINE = [
  { week: "Week 1", accuracy: 64, insights: 3, label: "Learning Baseline" },
  { week: "Week 4", accuracy: 78, insights: 8, label: "Pattern Recognition" },
  { week: "Week 8", accuracy: 87, insights: 14, label: "Predictive Mode" },
  { week: "Week 12", accuracy: 94, insights: 22, label: "Full Intelligence" },
];

const INTERACTION_LOG = [
  { event: "Customer browsed Ankara 3x without buying", learning: "Trigger price-drop alert after 3rd visit", status: "active" },
  { event: "Bulk orders spike every Friday", learning: "Auto-feature weekend deals on Thursday", status: "active" },
  { event: "Reviews mention 'runs small'", learning: "Suggest size guide update for Kaftan line", status: "new" },
];

export function LearningSection({ data }: LearningSectionProps) {
  return (
    <section className="relative z-20 bg-[#0A0A0A] px-6 py-14 lg:py-48 overflow-hidden" data-theme="dark">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent)]" />

      <div className="relative z-10 mx-auto max-w-[94rem]">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 text-center items-center lg:mb-20">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
            <BrainCircuit className="h-7 w-7 text-white/40" strokeWidth={1} />
          </motion.div>
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="font-display text-[10px] font-bold uppercase tracking-[0.5em] text-white/30">{data.badge}</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="max-w-3xl font-display text-4xl font-medium leading-[1.05] tracking-tighter text-white sm:text-6xl lg:text-7xl">{data.title}</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="max-w-xl font-ui text-lg text-white/40">{data.description}</motion.p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* AI Accuracy Timeline */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-[2rem] sm:rounded-[3rem] bg-white/[0.03] border border-white/5 p-5 sm:p-8 transition-all duration-500 hover:bg-white/[0.06]">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-xl bg-white text-black flex items-center justify-center"><BrainCircuit className="h-3.5 w-3.5" /></div>
                <span className="font-display text-[10px] font-bold uppercase tracking-widest text-white">AI Accuracy Growth</span>
              </div>
              <div className="flex items-center gap-1.5 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                <ArrowUpRight className="h-3 w-3 text-emerald-400" />
                <span className="font-mono text-[8px] font-bold text-emerald-400 uppercase tracking-widest">+47% in 12 wks</span>
              </div>
            </div>

            {/* Growth bars */}
            <div className="flex items-end gap-4 h-40 mb-4">
              {AI_TIMELINE.map((t, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <motion.div initial={{ height: 0 }} whileInView={{ height: `${t.accuracy}%` }} viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.15, duration: 0.6, ease: "easeOut" }}
                    className="w-full rounded-xl bg-white/10 hover:bg-white/20 transition-colors cursor-pointer relative group">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black px-2 py-1 rounded-lg text-center whitespace-nowrap">
                      <span className="font-mono text-[8px] font-bold block">{t.accuracy}%</span>
                      <span className="font-mono text-[6px] text-black/50">{t.insights} insights</span>
                    </div>
                  </motion.div>
                  <span className="font-mono text-[7px] text-white/20 text-center">{t.week}</span>
                  <span className="font-mono text-[6px] text-white/10 text-center">{t.label}</span>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/5">
              {[{ l: "Accuracy", v: "94%" }, { l: "Insights/week", v: "22" }, { l: "Predictions", v: "Active" }].map((s, i) => (
                <div key={i} className="text-center">
                  <span className="font-mono text-[7px] text-white/20 uppercase tracking-widest block">{s.l}</span>
                  <span className="font-display text-sm font-bold text-white">{s.v}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Learning from Interactions */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="rounded-[2rem] sm:rounded-[3rem] bg-white/[0.03] border border-white/5 p-5 sm:p-8 transition-all duration-500 hover:bg-white/[0.06]">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-8 rounded-xl bg-white text-black flex items-center justify-center"><MessageSquareText className="h-3.5 w-3.5" /></div>
              <span className="font-display text-[10px] font-bold uppercase tracking-widest text-white">Learning Log</span>
            </div>

            <div className="flex flex-col gap-4 mb-6">
              {INTERACTION_LOG.map((log, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.12 }}
                  className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 cursor-pointer hover:bg-white/[0.06] transition-all group">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-[7px] font-bold text-white/30 uppercase tracking-widest">{log.status}</span>
                  </div>
                  <p className="font-ui text-[10px] text-white/40 mb-2 leading-relaxed">{log.event}</p>
                  <div className="flex items-start gap-2 bg-white/[0.03] rounded-lg p-2.5 border border-white/5">
                    <RefreshCcw className="h-3 w-3 text-white/20 shrink-0 mt-0.5" />
                    <span className="font-mono text-[8px] text-white/50 leading-relaxed">{log.learning}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Feature list */}
            <div className="flex flex-col gap-3 pt-4 border-t border-white/5">
              {data.features.map((feature, i) => {
                const Icon = iconMap[feature.icon] || RefreshCcw;
                return (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="h-7 w-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                      <Icon className="h-3 w-3" strokeWidth={1.5} />
                    </div>
                    <span className="font-display text-[9px] font-bold text-white/40 uppercase tracking-wider group-hover:text-white/70 transition-colors">{feature.title}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

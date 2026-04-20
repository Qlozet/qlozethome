"use client";

import { motion } from "framer-motion";
import { DollarSign, PackageSearch, Settings2, SlidersHorizontal, ArrowUpRight, ArrowDownRight, CheckCircle2 } from "lucide-react";

const iconMap: any = { DollarSign, PackageSearch, Settings2 };

type Feature = { title: string; icon: string };
type OptimizationData = { badge: string; title: string; description: string; features: Feature[] };
type OptimizationSectionProps = { data: OptimizationData };

const PRICING_DATA = [
  { product: "Ankara Maxi Dress", current: "₦18,500", suggested: "₦21,000", impact: "+₦420K/mo", confidence: 92 },
  { product: "Agbada Royal Set", current: "₦45,000", suggested: "₦42,500", impact: "+₦180K/mo", confidence: 87 },
  { product: "Silk Evening Gown", current: "₦32,000", suggested: "₦35,500", impact: "+₦290K/mo", confidence: 84 },
];

const PRODUCT_SUGGESTIONS = [
  { action: "Add Size XL", product: "Ankara Maxi", reason: "34% of searches are XL", status: "recommended" },
  { action: "Bundle with Headwrap", product: "Agbada Set", reason: "72% buy both", status: "high-impact" },
  { action: "Remove Low Stock", product: "Linen Shorts", reason: "< 2 sales/month", status: "clean-up" },
];

export function OptimizationSection({ data }: OptimizationSectionProps) {
  return (
    <section className="relative z-10 bg-white px-6 py-14 lg:py-40" data-theme="light">
      <div className="mx-auto max-w-[94rem]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-24">
          {/* Left: Content */}
          <div className="flex flex-col gap-8 lg:w-5/12 lg:sticky lg:top-40">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-black shadow-2xl">
              <SlidersHorizontal className="h-5 w-5 text-white" strokeWidth={1.5} />
            </motion.div>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-black/30">{data.badge}</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-display text-4xl font-medium leading-[1.05] tracking-tighter text-black sm:text-6xl lg:text-7xl">{data.title}</motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="max-w-xl font-ui text-lg text-black/40">{data.description}</motion.p>
            
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="flex flex-col gap-4 mt-4">
              {data.features.map((feature, i) => {
                const Icon = iconMap[feature.icon] || Settings2;
                return (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="h-9 w-9 rounded-xl bg-zinc-50 border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <span className="font-display text-sm font-medium text-black/60 group-hover:text-black transition-colors">{feature.title}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right: Optimization Console */}
          <div className="mt-8 lg:mt-0 lg:w-7/12 flex flex-col gap-6">
            {/* Pricing Optimizer */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rounded-[2rem] sm:rounded-[3rem] bg-zinc-50 border border-black/5 p-5 sm:p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-xl bg-black text-white flex items-center justify-center"><DollarSign className="h-3.5 w-3.5" /></div>
                  <span className="font-display text-[10px] font-bold uppercase tracking-widest text-black">Pricing Optimizer</span>
                </div>
                <div className="bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                  <span className="font-mono text-[8px] font-bold text-emerald-600 uppercase tracking-widest">3 Suggestions</span>
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-black/5 shadow-sm overflow-x-auto">
                {/* Table header */}
                <div className="grid grid-cols-5 gap-2 px-5 py-3 border-b border-black/5 bg-zinc-50/50">
                  {["Product", "Current", "Suggested", "Impact", "Score"].map(h => (
                    <span key={h} className="font-mono text-[7px] font-bold text-black/30 uppercase tracking-widest">{h}</span>
                  ))}
                </div>
                {PRICING_DATA.map((p, i) => (
                  <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="grid grid-cols-5 gap-2 px-5 py-3.5 border-b border-black/5 last:border-0 group cursor-pointer hover:bg-zinc-50/50 transition-colors items-center">
                    <span className="font-display text-[9px] font-bold text-black uppercase tracking-wider truncate">{p.product}</span>
                    <span className="font-mono text-[9px] text-black/40">{p.current}</span>
                    <span className="font-mono text-[9px] font-bold text-black">{p.suggested}</span>
                    <div className="flex items-center gap-1">
                      <ArrowUpRight className="h-3 w-3 text-emerald-500" />
                      <span className="font-mono text-[8px] font-bold text-emerald-600">{p.impact}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-8 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                        <div className="h-full bg-black rounded-full" style={{ width: `${p.confidence}%` }} />
                      </div>
                      <span className="font-mono text-[8px] font-bold text-black/60">{p.confidence}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Product Suggestions */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
              className="rounded-[2rem] sm:rounded-[3rem] bg-zinc-50 border border-black/5 p-5 sm:p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-8 w-8 rounded-xl bg-black text-white flex items-center justify-center"><PackageSearch className="h-3.5 w-3.5" /></div>
                <span className="font-display text-[10px] font-bold uppercase tracking-widest text-black">Product Improvements</span>
              </div>
              <div className="flex flex-col gap-3">
                {PRODUCT_SUGGESTIONS.map((s, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="bg-white rounded-2xl border border-black/5 p-4 shadow-sm flex items-center gap-4 group cursor-pointer hover:shadow-md transition-all hover:-translate-y-0.5">
                    <div className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 ${s.status === 'high-impact' ? 'bg-emerald-500/10' : s.status === 'recommended' ? 'bg-blue-500/10' : 'bg-amber-500/10'}`}>
                      <CheckCircle2 className={`h-3.5 w-3.5 ${s.status === 'high-impact' ? 'text-emerald-500' : s.status === 'recommended' ? 'text-blue-500' : 'text-amber-500'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-display text-[9px] font-bold text-black uppercase tracking-wider">{s.action}</span>
                        <span className="font-mono text-[7px] text-black/30">→ {s.product}</span>
                      </div>
                      <span className="font-ui text-[10px] text-black/40">{s.reason}</span>
                    </div>
                    <span className={`font-mono text-[7px] font-bold uppercase tracking-widest px-2 py-1 rounded-full ${s.status === 'high-impact' ? 'bg-emerald-500/10 text-emerald-600' : s.status === 'recommended' ? 'bg-blue-500/10 text-blue-600' : 'bg-amber-500/10 text-amber-600'}`}>
                      {s.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Zap, Search, Package, ShoppingBag, Users, BarChart3, ChevronRight, Bell, CheckCircle2 } from "lucide-react";

type FreedomData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type FreedomSectionProps = {
  data: FreedomData;
};

export function FreedomSection({ data }: FreedomSectionProps) {
  const modules = [
    { icon: Package, label: "Orders", value: "12", color: "bg-amber-50 border-amber-100", dot: "bg-amber-500" },
    { icon: ShoppingBag, label: "Products", value: "48", color: "bg-sky-50 border-sky-100", dot: "bg-sky-500" },
    { icon: Users, label: "Customers", value: "89", color: "bg-brand-light border-brand-darker/10", dot: "bg-brand-darker" },
    { icon: BarChart3, label: "Analytics", value: "↑18%", color: "bg-violet-50 border-violet-100", dot: "bg-violet-500" },
  ];

  return (
    <section id={data.id} className="relative z-10 bg-white py-24 sm:py-32 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col gap-16 lg:flex-row-reverse lg:items-center lg:gap-24">
          <div className="flex flex-col gap-10 lg:w-1/2 order-1 lg:order-2">
            <div className="flex flex-col gap-6">
              <motion.span initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#111111]/40">{data.badge}</motion.span>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-[#111111] sm:text-5xl lg:text-6xl">{data.title}</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="max-w-xl font-ui text-base leading-relaxed text-[#111111]/40 sm:text-lg">{data.description}</motion.p>
            </div>
            <div className="grid gap-4">
              {data.features.map((feature, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }} className="flex items-center gap-6 group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-light border border-brand-darker/5 group-hover:bg-brand-darker group-hover:text-white transition-all shadow-sm"><Zap className="h-4 w-4" strokeWidth={1.5} /></div>
                  <span className="font-ui text-sm font-medium text-[#111111]/70 sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-ui text-sm italic text-[#111111]/30">{data.closing}</motion.p>
          </div>

          {/* Left: Clean Dashboard */}
          <div className="relative lg:w-1/2 order-2 lg:order-1">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative mx-auto w-full max-w-md rounded-[2.5rem] bg-white border border-brand-darker/[0.06] shadow-2xl overflow-hidden">
              
              {/* Header */}
              <div className="px-8 pt-8 pb-5 flex items-center justify-between border-b border-brand-darker/5">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-xl bg-brand-darker text-white flex items-center justify-center shadow-lg">
                    <Zap className="h-4 w-4" />
                  </div>
                  <span className="font-display text-[10px] font-bold uppercase tracking-widest text-[#111111]">Dashboard</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative cursor-pointer">
                    <Bell className="h-4 w-4 text-brand-darker/25 hover:text-brand-darker/50 transition-colors" />
                    <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-red-500 border border-white" />
                  </div>
                </div>
              </div>

              {/* Search */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mx-6 mt-5 h-11 rounded-xl bg-brand-light border border-brand-darker/[0.04] px-4 flex items-center gap-3 cursor-pointer hover:border-brand-darker/15 transition-colors"
              >
                <Search className="h-3.5 w-3.5 text-brand-darker/15" />
                <span className="font-ui text-[9px] text-[#111111]/15">Search anything...</span>
              </motion.div>

              {/* Module Grid */}
              <div className="grid grid-cols-2 gap-3 px-6 py-5">
                {modules.map((mod, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className={`rounded-2xl border p-5 flex flex-col gap-4 group cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ${mod.color}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="h-9 w-9 rounded-xl bg-white/80 shadow-sm flex items-center justify-center group-hover:bg-brand-darker group-hover:text-white transition-all duration-300">
                        <mod.icon className="h-4 w-4" strokeWidth={1.5} />
                      </div>
                      <ChevronRight className="h-3 w-3 text-brand-darker/10 group-hover:text-brand-darker/30 group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <div>
                      <span className="font-display text-2xl font-bold text-[#111111] tracking-tight">{mod.value}</span>
                      <span className="font-display text-[8px] font-bold uppercase tracking-widest text-[#111111]/20 ml-2">{mod.label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="px-6 pb-5">
                <span className="font-display text-[8px] font-bold uppercase tracking-widest text-[#111111]/15 mb-3 block">Quick Actions</span>
                <div className="flex gap-2">
                  {["New Product", "View Orders", "Analytics"].map((action, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.08 }}
                      className="flex-1 h-10 rounded-xl bg-brand-light border border-brand-darker/[0.04] flex items-center justify-center gap-2 cursor-pointer hover:bg-brand-darker hover:text-white hover:border-transparent transition-all duration-300 group"
                    >
                      <CheckCircle2 className="h-3 w-3 text-[#111111]/15 group-hover:text-white/60 transition-colors" />
                      <span className="font-display text-[7px] font-bold uppercase tracking-wider text-[#111111]/30 group-hover:text-white transition-colors">{action}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="px-8 py-4 bg-brand-light border-t border-brand-darker/5 flex items-center justify-center">
                <span className="font-display text-[7px] font-bold uppercase tracking-[0.4em] text-[#111111]/15">Everything • One Place • Simple</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-brand-darker/10 shadow-sm" />
    </section>
  );
}

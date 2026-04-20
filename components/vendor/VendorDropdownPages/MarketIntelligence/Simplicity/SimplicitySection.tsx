"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, CheckCircle2, MoveRight, ArrowRight, TrendingUp, ShoppingBag, Users } from "lucide-react";

const iconMap: any = { LayoutDashboard, CheckCircle2, MoveRight };

type Feature = { title: string; icon: string };
type SimplicityData = { badge: string; title: string; description: string; features: Feature[] };
type SimplicitySectionProps = { data: SimplicityData };

export function SimplicitySection({ data }: SimplicitySectionProps) {
  return (
    <section className="relative z-10 bg-white px-6 py-14 lg:py-40" data-theme="light">
      <div className="mx-auto max-w-[94rem]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-24">
          {/* Left: Dashboard Preview */}
          <div className="lg:w-7/12 order-2 lg:order-1">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rounded-[2rem] sm:rounded-[3rem] bg-zinc-50 border border-black/5 shadow-2xl p-5 sm:p-8 overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-2">
              
              {/* Dashboard Header */}
              <div className="flex items-center justify-between pb-5 border-b border-black/5 mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-xl bg-black text-white flex items-center justify-center"><LayoutDashboard className="h-3.5 w-3.5" /></div>
                  <span className="font-display text-[10px] font-bold uppercase tracking-widest text-black">Your Dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-16 rounded-lg bg-zinc-200/50" />
                  <div className="h-6 w-6 rounded-lg bg-zinc-200/50" />
                </div>
              </div>

              {/* KPI Strip */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { icon: TrendingUp, label: "Revenue", value: "₦4.2M", change: "+23%", color: "bg-emerald-500" },
                  { icon: ShoppingBag, label: "Orders", value: "1,847", change: "+18%", color: "bg-blue-500" },
                  { icon: Users, label: "Customers", value: "892", change: "+12%", color: "bg-violet-500" },
                ].map((kpi, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="bg-white rounded-2xl border border-black/5 p-4 shadow-sm group cursor-pointer hover:shadow-md transition-all hover:-translate-y-0.5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`h-5 w-5 rounded-md ${kpi.color} flex items-center justify-center`}>
                        <kpi.icon className="h-2.5 w-2.5 text-white" />
                      </div>
                      <span className="font-mono text-[7px] font-bold text-black/30 uppercase tracking-widest">{kpi.label}</span>
                    </div>
                    <span className="font-display text-lg font-bold text-black block">{kpi.value}</span>
                    <span className="font-mono text-[8px] font-bold text-emerald-600">{kpi.change}</span>
                  </motion.div>
                ))}
              </div>

              {/* Clear Recommendations */}
              <div className="bg-white rounded-2xl border border-black/5 p-5 shadow-sm mb-5">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span className="font-display text-[10px] font-bold uppercase tracking-widest text-black">Today's Recommendations</span>
                </div>
                {[
                  { text: "Restock Ankara Maxi Dress — selling 3x faster than predicted", priority: "High" },
                  { text: "Lower price on Linen Shorts by 10% to match demand", priority: "Medium" },
                  { text: "Your Agbada Set review score improved — feature it!", priority: "Low" },
                ].map((rec, i) => (
                  <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-3 py-2.5 border-b border-black/5 last:border-0 group/item cursor-pointer hover:bg-zinc-50/50 -mx-2 px-2 rounded-lg transition-colors">
                    <div className={`h-1.5 w-1.5 rounded-full shrink-0 ${rec.priority === 'High' ? 'bg-red-500' : rec.priority === 'Medium' ? 'bg-amber-500' : 'bg-emerald-500'}`} />
                    <span className="font-ui text-[10px] text-black/60 flex-1 leading-relaxed">{rec.text}</span>
                    <ArrowRight className="h-3 w-3 text-black/10 shrink-0 group-hover/item:text-black/30 transition-colors" />
                  </motion.div>
                ))}
              </div>

              {/* Next Steps */}
              <div className="bg-black rounded-2xl p-5 shadow-sm">
                <span className="font-display text-[10px] font-bold uppercase tracking-widest text-white/60 mb-3 block">Quick Actions</span>
                <div className="flex gap-2">
                  {["View Full Report", "Export Data", "Schedule Review"].map((action, i) => (
                    <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                      transition={{ delay: 0.7 + i * 0.08 }}
                      className="flex-1 bg-white/10 rounded-xl py-3 text-center cursor-pointer hover:bg-white/20 transition-colors">
                      <span className="font-mono text-[7px] font-bold text-white uppercase tracking-widest">{action}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-8 lg:w-5/12 order-1 lg:order-2 mb-8 lg:mb-0">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-black/30">{data.badge}</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-display text-4xl font-medium leading-[1.05] tracking-tighter text-black sm:text-6xl lg:text-7xl">{data.title}</motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="max-w-xl font-ui text-lg text-black/40">{data.description}</motion.p>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="flex flex-col gap-5 mt-4">
              {data.features.map((feature, i) => {
                const Icon = iconMap[feature.icon] || LayoutDashboard;
                return (
                  <div key={i} className="flex items-center gap-5 group">
                    <div className="h-10 w-10 rounded-xl bg-zinc-50 border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <span className="font-display text-lg font-medium text-black/70 group-hover:text-black transition-colors">{feature.title}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

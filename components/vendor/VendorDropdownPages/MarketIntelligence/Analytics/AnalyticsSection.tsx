"use client";

import { motion } from "framer-motion";
import { TrendingUp, Award, Repeat, ArrowUpRight } from "lucide-react";

const iconMap: any = { TrendingUp, Award, Repeat };

type Feature = { title: string; icon: string };
type AnalyticsData = { id: string; badge: string; title: string; description: string; features: Feature[] };
type AnalyticsSectionProps = { data: AnalyticsData };

const REVENUE_DATA = [
  { month: "Jan", value: 320 }, { month: "Feb", value: 410 }, { month: "Mar", value: 380 },
  { month: "Apr", value: 520 }, { month: "May", value: 480 }, { month: "Jun", value: 610 },
  { month: "Jul", value: 570 }, { month: "Aug", value: 690 }, { month: "Sep", value: 750 },
  { month: "Oct", value: 820 }, { month: "Nov", value: 910 }, { month: "Dec", value: 980 },
];

const TOP_PRODUCTS = [
  { name: "Ankara Maxi Dress", revenue: "₦1.2M", orders: 342, trend: "+28%", bar: 95 },
  { name: "Agbada Royal Set", revenue: "₦890K", orders: 189, trend: "+15%", bar: 74 },
  { name: "Silk Evening Gown", revenue: "₦650K", orders: 156, trend: "+22%", bar: 58 },
  { name: "Bespoke Kaftan", revenue: "₦480K", orders: 124, trend: "+9%", bar: 42 },
];

const PURCHASE_PATTERNS = [
  { day: "Mon", value: 45 }, { day: "Tue", value: 62 }, { day: "Wed", value: 55 },
  { day: "Thu", value: 78 }, { day: "Fri", value: 92 }, { day: "Sat", value: 88 }, { day: "Sun", value: 40 },
];

export function AnalyticsSection({ data }: AnalyticsSectionProps) {
  return (
    <section id={data.id} className="relative z-10 bg-white px-6 py-24 sm:py-32" data-theme="light">
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

        {/* 3 Feature Illustrations */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Card 1: Revenue & Order Trends */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="group rounded-[2rem] sm:rounded-[3rem] bg-[#F9F9F8] border border-black/5 p-5 sm:p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-2 cursor-pointer">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-[#3A3A3A] text-white flex items-center justify-center">
                <TrendingUp className="h-4 w-4" />
              </div>
              <span className="font-display text-[10px] font-bold uppercase tracking-widest text-[#3A3A3A]">{data.features[0]?.title}</span>
            </div>
            {/* Mini line chart */}
            <div className="bg-white rounded-2xl border border-black/5 p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[7px] font-bold text-[#3A3A3A]/30 uppercase tracking-widest">Monthly Revenue</span>
                <span className="font-mono text-[8px] font-bold text-emerald-600">+23% YoY</span>
              </div>
              <svg viewBox="0 0 360 100" className="w-full h-24" fill="none">
                <motion.path
                  d={`M${REVENUE_DATA.map((d, i) => `${i * (360 / 11)},${100 - (d.value / 10)}`).join(' L')}`}
                  stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
                />
                <motion.path
                  d={`M${REVENUE_DATA.map((d, i) => `${i * (360 / 11)},${100 - (d.value / 10)}`).join(' L')} L360,100 L0,100 Z`}
                  fill="black" opacity="0.03"
                  initial={{ opacity: 0 }} whileInView={{ opacity: 0.03 }} viewport={{ once: true }}
                  transition={{ delay: 1 }}
                />
              </svg>
              <div className="flex justify-between mt-1">
                {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"].map((m, i) => (
                  <span key={i} className="font-mono text-[6px] text-[#3A3A3A]/20">{m}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Best-Selling Products */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="group rounded-[2rem] sm:rounded-[3rem] bg-[#F9F9F8] border border-black/5 p-5 sm:p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-2 cursor-pointer">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-[#3A3A3A] text-white flex items-center justify-center">
                <Award className="h-4 w-4" />
              </div>
              <span className="font-display text-[10px] font-bold uppercase tracking-widest text-[#3A3A3A]">{data.features[1]?.title}</span>
            </div>
            <div className="bg-white rounded-2xl border border-black/5 p-5 shadow-sm flex flex-col gap-0">
              {TOP_PRODUCTS.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-center gap-3 py-3 border-b border-black/5 last:border-0 group/item cursor-pointer hover:bg-[#F9F9F8]/50 -mx-2 px-2 rounded-lg transition-colors">
                  <div className="h-7 w-7 rounded-lg bg-zinc-100 flex items-center justify-center">
                    <span className="font-mono text-[8px] font-bold text-[#3A3A3A]/40">{i + 1}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-display text-[9px] font-bold text-[#3A3A3A] uppercase tracking-wider block truncate">{p.name}</span>
                    <div className="h-1 bg-zinc-100 rounded-full mt-1.5 overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${p.bar}%` }} viewport={{ once: true }}
                        transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }} className="h-full bg-[#3A3A3A] rounded-full" />
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-mono text-[9px] font-bold text-[#3A3A3A] block">{p.revenue}</span>
                    <span className="font-mono text-[7px] text-emerald-600 font-bold">{p.trend}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Card 3: Customer Purchasing Patterns */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="group rounded-[2rem] sm:rounded-[3rem] bg-[#F9F9F8] border border-black/5 p-5 sm:p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-2 cursor-pointer">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-[#3A3A3A] text-white flex items-center justify-center">
                <Repeat className="h-4 w-4" />
              </div>
              <span className="font-display text-[10px] font-bold uppercase tracking-widest text-[#3A3A3A]">{data.features[2]?.title}</span>
            </div>
            <div className="bg-white rounded-2xl border border-black/5 p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[7px] font-bold text-[#3A3A3A]/30 uppercase tracking-widest">Weekly Activity</span>
                <span className="font-mono text-[8px] font-bold text-[#3A3A3A]/30 uppercase tracking-widest">Peak: Friday</span>
              </div>
              <div className="flex items-end gap-2" style={{ height: 112 }}>
                {PURCHASE_PATTERNS.map((d, i) => (
                  <div key={i} className="flex-1 flex flex-col items-end justify-end">
                    <motion.div initial={{ height: 0 }} whileInView={{ height: d.value * 1.1 }} viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.06, duration: 0.5 }}
                      className={`w-full rounded-lg transition-colors duration-300 cursor-pointer ${d.value > 80 ? 'bg-black hover:bg-[#3A3A3A]/80' : 'bg-black/10 hover:bg-black/20'}`} />
                    <span className="font-mono text-[7px] text-[#3A3A3A]/30 mt-1.5 text-center w-full">{d.day}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 pt-3 border-t border-black/5">
                <ArrowUpRight className="h-3 w-3 text-emerald-500" />
                <span className="font-mono text-[8px] text-[#3A3A3A]/40">Repeat rate: <span className="font-bold text-[#3A3A3A]">34%</span></span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

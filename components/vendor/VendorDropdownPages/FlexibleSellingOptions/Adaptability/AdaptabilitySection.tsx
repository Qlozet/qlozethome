"use client";

import { motion, AnimatePresence } from "framer-motion";
import { RefreshCw, User, Users, Building2, Package, BarChart3, Shirt, TrendingUp, ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";

type AdaptData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type AdaptabilitySectionProps = {
  data: AdaptData;
};

export function AdaptabilitySection({ data }: AdaptabilitySectionProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive(p => (p + 1) % 3), 4500);
    return () => clearInterval(timer);
  }, []);

  const profiles = [
    {
      icon: User,
      label: "Solo Tailor",
      desc: "One person, personal service",
      stats: [
        { val: "3", label: "Orders" },
        { val: "$420", label: "Revenue" },
      ],
      tasks: [
        { text: "Custom Kaftan — Mrs. Adeyemi", status: "In Progress", statusColor: "text-amber-600 bg-amber-50" },
        { text: "Linen Set — Due Friday", status: "Pending", statusColor: "text-sky-600 bg-sky-50" },
      ],
    },
    {
      icon: Users,
      label: "Growing Brand",
      desc: "Small team, expanding catalog",
      stats: [
        { val: "12", label: "Active" },
        { val: "$3.2K", label: "Revenue" },
        { val: "3", label: "Staff" },
      ],
      tasks: [
        { text: "Summer Collection Launch", status: "New", statusColor: "text-[#3A3A3A] bg-[#F9F9F8]" },
        { text: "Team Queue: 8 pending", status: "Active", statusColor: "text-amber-600 bg-amber-50" },
      ],
    },
    {
      icon: Building2,
      label: "Large Workshop",
      desc: "Full-scale production",
      stats: [
        { val: "156", label: "Orders" },
        { val: "$28K", label: "Revenue" },
        { val: "42", label: "Active" },
        { val: "98%", label: "Rate" },
      ],
      tasks: [
        { text: "Revenue ↑ 18% this month", status: "Growth", statusColor: "text-[#3A3A3A] bg-[#F9F9F8]" },
        { text: "12 shipping today", status: "Dispatch", statusColor: "text-violet-600 bg-violet-50" },
      ],
    },
  ];

  return (
    <section id={data.id} className="relative z-10 bg-white py-24 sm:py-32 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col gap-16 lg:flex-row-reverse lg:items-center lg:gap-24">
          <div className="flex flex-col gap-10 lg:w-1/2 order-1 lg:order-2">
            <div className="flex flex-col gap-6">
              <motion.span initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/40">{data.badge}</motion.span>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-[#3A3A3A] sm:text-5xl lg:text-6xl">{data.title}</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="max-w-xl font-ui text-base leading-relaxed text-[#3A3A3A]/40 sm:text-lg">{data.description}</motion.p>
            </div>
            <div className="grid gap-4">
              {data.features.map((feature, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }} className="flex items-center gap-6 group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F9F9F8] border border-[#3A3A3A]/5 group-hover:bg-[#3A3A3A] group-hover:text-white transition-all shadow-sm"><RefreshCw className="h-4 w-4" strokeWidth={1.5} /></div>
                  <span className="font-ui text-sm font-medium text-[#3A3A3A]/70 sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-ui text-sm italic text-[#3A3A3A]/30">{data.closing}</motion.p>
          </div>

          {/* Left: Morphing Dashboard */}
          <div className="relative lg:w-1/2 order-2 lg:order-1">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative mx-auto w-full max-w-md rounded-[2.5rem] bg-white border border-[#3A3A3A]/[0.06] shadow-2xl overflow-hidden">

              {/* Tabs */}
              <div className="px-5 pt-5 pb-0 bg-white">
                <div className="flex gap-1.5 bg-[#F9F9F8] rounded-xl p-1.5 border border-[#3A3A3A]/[0.04]">
                  {profiles.map((p, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`flex-1 flex items-center justify-center gap-2 h-10 rounded-lg transition-all duration-500 cursor-pointer ${
                        active === i
                          ? 'bg-[#3A3A3A] text-white shadow-lg'
                          : 'text-[#3A3A3A]/25 hover:text-[#3A3A3A]/50'
                      }`}
                    >
                      <p.icon className="h-3.5 w-3.5" strokeWidth={1.5} />
                      <span className="font-display text-[7px] font-bold uppercase tracking-wider hidden sm:inline">{p.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Content — Fixed Height */}
              <div className="px-5 py-5 min-h-[290px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col gap-4"
                  >
                    {/* Profile Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col gap-0.5">
                        <span className="font-display text-[11px] font-bold uppercase tracking-wider text-[#3A3A3A]">{profiles[active].label}</span>
                        <span className="font-ui text-[8px] text-[#3A3A3A]/25">{profiles[active].desc}</span>
                      </div>
                      <div className="h-2 w-2 rounded-full bg-[#F9F9F8]0 animate-pulse" />
                    </div>

                    {/* Stats Grid */}
                    <div className={`grid gap-2 ${profiles[active].stats.length <= 2 ? 'grid-cols-2' : profiles[active].stats.length === 3 ? 'grid-cols-3' : 'grid-cols-4'}`}>
                      {profiles[active].stats.map((stat, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.06 }}
                          className="rounded-xl bg-[#F9F9F8] border border-[#3A3A3A]/[0.04] p-3 flex flex-col items-center gap-0.5"
                        >
                          <span className="font-display text-lg font-bold text-[#3A3A3A]">{stat.val}</span>
                          <span className="font-display text-[6px] font-bold uppercase tracking-wider text-[#3A3A3A]/20">{stat.label}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Task Cards */}
                    {profiles[active].tasks.map((task, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + i * 0.08 }}
                        className="h-14 rounded-xl bg-[#F9F9F8] border border-[#3A3A3A]/[0.04] px-4 flex items-center justify-between group hover:bg-white hover:shadow-md hover:border-[#3A3A3A]/10 transition-all cursor-pointer"
                      >
                        <span className="font-display text-[9px] font-bold text-[#3A3A3A]/50 group-hover:text-[#3A3A3A]/80 transition-colors">{task.text}</span>
                        <span className={`px-2 py-1 rounded-md font-display text-[7px] font-bold uppercase tracking-wider ${task.statusColor}`}>{task.status}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-[#F9F9F8] border-t border-[#3A3A3A]/5 flex items-center justify-between">
                <div className="flex gap-1.5">
                  {profiles.map((_, i) => (
                    <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${active === i ? 'w-6 bg-[#3A3A3A]' : 'w-1.5 bg-[#3A3A3A]/10'}`} />
                  ))}
                </div>
                <span className="font-display text-[7px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/15">Same platform, every scale</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-[#3A3A3A]/10 shadow-sm" />
    </section>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ShoppingBag, Ruler, Blend, CheckCircle2, Clock, TrendingUp, ArrowRight, Zap, Star } from "lucide-react";
import { useState, useEffect } from "react";

type HeroData = {
  badge: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
  closing: string;
};

type FlexHeroProps = {
  data: HeroData;
};

const TICKER_ITEMS = [
  { icon: ShoppingBag, text: "Ready-to-Wear", sub: "Sell finished products instantly" },
  { icon: Ruler, text: "Made-to-Measure", sub: "Accept custom + bespoke orders" },
  { icon: Blend, text: "Hybrid Store", sub: "Run both simultaneously" },
];

const LIVE_ORDERS = [
  { id: "ORD-2491", type: "RTW", item: "Silk Ankara Blouse", status: "Paid", color: "text-[#3A3A3A] bg-[#F9F9F8]", dot: "bg-[#F9F9F8]0" },
  { id: "ORD-2490", type: "Custom", item: "Bespoke Agbada Set", status: "Measuring", color: "text-sky-600 bg-sky-50", dot: "bg-sky-500" },
  { id: "ORD-2489", type: "RTW", item: "Linen Trousers — Sz 32", status: "Shipped", color: "text-violet-600 bg-violet-50", dot: "bg-violet-500" },
  { id: "ORD-2488", type: "Custom", item: "Wedding Gown — Custom Fit", status: "In Review", color: "text-amber-600 bg-amber-50", dot: "bg-amber-500" },
];

const MODES = [
  { icon: ShoppingBag, label: "RTW", active: true },
  { icon: Ruler, label: "Custom", active: true },
  { icon: Blend, label: "Hybrid", active: true },
];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as any } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export function FlexHero({ data }: FlexHeroProps) {
  const [activeTicker, setActiveTicker] = useState(0);
  const [pulseOrder, setPulseOrder] = useState(0);

  useEffect(() => {
    const t1 = setInterval(() => setActiveTicker(p => (p + 1) % TICKER_ITEMS.length), 3000);
    const t2 = setInterval(() => setPulseOrder(p => (p + 1) % LIVE_ORDERS.length), 2200);
    return () => { clearInterval(t1); clearInterval(t2); };
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center pt-20 pb-10 lg:pt-32 lg:pb-16 overflow-hidden bg-white" data-theme="light">
      {/* Subtle grid bg */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)", backgroundSize: "64px 64px" }} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-[94rem] px-6 md:px-10 lg:px-10"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-20 xl:gap-28">

          {/* ── LEFT: Content ── */}
          <div className="flex flex-col gap-10 lg:w-[48%]">
            {/* Badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-[#3A3A3A]/10 bg-[#3A3A3A]/[0.03] px-5 py-2 font-display text-[9px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/50">
                <div className="h-1.5 w-1.5 rounded-full bg-[#F9F9F8]0 animate-pulse" />
                {data.badge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-[#3A3A3A] sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              {data.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="max-w-xl font-ui text-lg leading-relaxed text-[#3A3A3A]/40 lg:text-xl"
            >
              {data.description}
            </motion.p>

            {/* Mode Ticker */}
            <motion.div variants={itemVariants} className="flex flex-col gap-3">
              <span className="font-display text-[8px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/20">What you can do</span>
              <div className="flex flex-col gap-0 overflow-hidden rounded-2xl border border-[#3A3A3A]/[0.06] bg-[#F9F9F8] divide-y divide-black/[0.04]">
                {TICKER_ITEMS.map((item, i) => (
                  <motion.div
                    key={i}
                    className={`flex items-center gap-4 px-5 py-3.5 transition-all duration-500 ${activeTicker === i ? 'bg-[#3A3A3A]' : 'bg-transparent'}`}
                  >
                    <div className={`h-8 w-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${activeTicker === i ? 'bg-white/15 text-white' : 'bg-white border border-[#3A3A3A]/5 text-[#3A3A3A]/25'}`}>
                      <item.icon className="h-3.5 w-3.5" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className={`font-display text-[10px] font-bold uppercase tracking-wider transition-colors duration-500 ${activeTicker === i ? 'text-white' : 'text-[#3A3A3A]/50'}`}>{item.text}</span>
                      <span className={`font-ui text-[8px] transition-colors duration-500 ${activeTicker === i ? 'text-white/40' : 'text-[#3A3A3A]/20'}`}>{item.sub}</span>
                    </div>
                    {activeTicker === i && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto h-2 w-2 rounded-full bg-[#3A3A3A]"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <Link
                href={data.cta.href}
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-[#3A3A3A] px-10 font-display text-[10px] font-bold uppercase tracking-[0.35em] text-white shadow-xl transition-all hover:scale-[1.02] active:scale-95"
              >
                <span className="relative z-10">{data.cta.label}</span>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-zinc-800 to-black opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
              <Link
                href="#models"
                className="group inline-flex items-center gap-3 font-display text-[10px] font-bold uppercase tracking-[0.35em] text-[#3A3A3A]/40 hover:text-[#3A3A3A] transition-colors"
              >
                See all modes
                <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>

            <motion.p variants={itemVariants} className="font-ui text-sm italic text-[#3A3A3A]/25">{data.closing}</motion.p>
          </div>

          {/* ── RIGHT: Live Vendor Dashboard Illustration ── */}
          <motion.div
            variants={itemVariants}
            className="relative mt-14 lg:mt-0 lg:w-[52%]"
          >
            <div className="relative mx-auto w-full max-w-[520px]">

              {/* Main Dashboard Card */}
              <div className="relative rounded-[2.5rem] border border-[#3A3A3A]/[0.07] bg-white shadow-2xl shadow-black/[0.08] overflow-hidden">

                {/* Dashboard Topbar */}
                <div className="flex items-center justify-between px-7 py-5 border-b border-[#3A3A3A]/[0.05] bg-white">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-xl bg-[#3A3A3A] text-white flex items-center justify-center shadow-sm">
                      <Blend className="h-3.5 w-3.5" />
                    </div>
                    <div className="flex flex-col gap-0">
                      <span className="font-display text-[10px] font-bold uppercase tracking-widest text-[#3A3A3A]">Vendor Dashboard</span>
                      <span className="font-mono text-[7px] text-[#3A3A3A]/20">qlozet.com/vendor/store</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-[#F9F9F8] border border-[#3A3A3A]/20 px-3 py-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#F9F9F8]0 animate-pulse" />
                    <span className="font-display text-[7px] font-bold uppercase tracking-widest text-[#3A3A3A]">Live</span>
                  </div>
                </div>

                {/* Active Modes Strip */}
                <div className="flex items-center gap-2 px-7 py-3.5 bg-[#F9F9F8] border-b border-[#3A3A3A]/[0.04]">
                  <span className="font-display text-[7px] font-bold uppercase tracking-widest text-[#3A3A3A]/20 mr-1">Active Modes</span>
                  {MODES.map((m, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.8 + i * 0.12, type: "spring", stiffness: 300 }}
                      className="flex items-center gap-1.5 rounded-full bg-[#3A3A3A] px-3 py-1.5"
                    >
                      <m.icon className="h-2.5 w-2.5 text-white/60" strokeWidth={1.5} />
                      <span className="font-display text-[7px] font-bold uppercase tracking-wider text-white/70">{m.label}</span>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="ml-auto flex items-center gap-1"
                  >
                    <CheckCircle2 className="h-3 w-3 text-[#3A3A3A]" />
                    <span className="font-display text-[7px] text-[#3A3A3A] font-bold">All running</span>
                  </motion.div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 divide-x divide-black/[0.05] border-b border-[#3A3A3A]/[0.05]">
                  {[
                    { val: "42", label: "Orders Today", icon: TrendingUp, trend: "+12%" },
                    { val: "$2.8K", label: "Revenue", icon: Zap, trend: "+8%" },
                    { val: "98%", label: "Fulfilment", icon: Star, trend: "↑" },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0 + i * 0.1 }}
                      className="flex flex-col items-center gap-0.5 py-4 px-2"
                    >
                      <span className="font-display text-xl font-bold text-[#3A3A3A]">{stat.val}</span>
                      <span className="font-display text-[6px] font-bold uppercase tracking-wider text-[#3A3A3A]/20 text-center">{stat.label}</span>
                      <span className="font-mono text-[8px] text-[#3A3A3A] font-bold">{stat.trend}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Live Orders Feed */}
                <div className="px-5 py-4 flex flex-col gap-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-display text-[7px] font-bold uppercase tracking-widest text-[#3A3A3A]/20">Live Order Feed</span>
                    <div className="flex items-center gap-1.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#3A3A3A]/10 animate-pulse" />
                      <span className="font-mono text-[7px] text-[#3A3A3A]/15">updating</span>
                    </div>
                  </div>

                  {LIVE_ORDERS.map((order, i) => (
                    <motion.div
                      key={order.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 + i * 0.1 }}
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-500 ${
                        pulseOrder === i
                          ? 'bg-[#F9F9F8] border border-[#3A3A3A]/[0.06] shadow-sm scale-[1.01]'
                          : 'bg-transparent border border-transparent'
                      }`}
                    >
                      {/* Type badge */}
                      <div className={`h-1.5 w-1.5 rounded-full flex-shrink-0 ${order.dot} ${pulseOrder === i ? 'animate-pulse' : ''}`} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-display text-[8px] font-bold text-[#3A3A3A]/60 truncate">{order.item}</span>
                        </div>
                        <span className="font-mono text-[7px] text-[#3A3A3A]/15">{order.id} · {order.type}</span>
                      </div>
                      <span className={`px-2.5 py-1 rounded-lg font-display text-[6px] font-bold uppercase tracking-wider ${order.color} flex-shrink-0`}>
                        {order.status}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <div className="px-7 py-4 bg-[#F9F9F8] border-t border-[#3A3A3A]/[0.04] flex items-center justify-between">
                  <span className="font-display text-[7px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/15">No lock-in · Switch anytime</span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-2.5 w-2.5 text-[#3A3A3A]/10" />
                    <span className="font-mono text-[7px] text-[#3A3A3A]/15">Just now</span>
                  </div>
                </div>
              </div>

              {/* Floating mode badge — top right */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.4, type: "spring" }}
                className="absolute -top-4 -right-4 rounded-2xl bg-[#3A3A3A] text-white px-4 py-3 shadow-xl flex items-center gap-2.5"
              >
                <Blend className="h-3.5 w-3.5 text-white/60" />
                <div className="flex flex-col gap-0">
                  <span className="font-display text-[8px] font-bold uppercase tracking-wider">Hybrid Mode</span>
                  <span className="font-display text-[6px] text-white/30">RTW + Custom</span>
                </div>
              </motion.div>

              {/* Floating earnings card — bottom left */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.6, type: "spring" }}
                className="absolute -bottom-4 -left-4 rounded-2xl bg-white border border-[#3A3A3A]/[0.06] shadow-xl px-4 py-3 flex items-center gap-3"
              >
                <div className="h-8 w-8 rounded-xl bg-[#F9F9F8] border border-[#3A3A3A]/10 flex items-center justify-center">
                  <TrendingUp className="h-3.5 w-3.5 text-[#3A3A3A]" />
                </div>
                <div className="flex flex-col gap-0">
                  <span className="font-display text-[8px] font-bold text-[#3A3A3A]">+18% Revenue</span>
                  <span className="font-display text-[6px] text-[#3A3A3A]/25">After enabling all modes</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom dot separator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0">
        <div className="h-12 w-px bg-gradient-to-b from-transparent to-black/[0.06]" />
        <div className="h-1.5 w-1.5 rounded-full bg-[#3A3A3A]/10 shadow-sm" />
      </div>
    </section>
  );
}

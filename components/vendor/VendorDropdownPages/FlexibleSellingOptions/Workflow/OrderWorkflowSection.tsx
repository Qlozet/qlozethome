"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Zap, CheckCircle2, MessageSquare, ListChecks,
  ArrowRight, Package, Clock, Star, User, ShieldCheck
} from "lucide-react";
import { useState } from "react";

type WorkflowData = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  closing: string;
};

type OrderWorkflowSectionProps = {
  data: WorkflowData;
};

const MODES = [
  {
    icon: Zap,
    label: "Direct",
    fullLabel: "Direct Orders",
    tag: "Fastest",
    tagStyle: "bg-[#F9F9F8] text-[#3A3A3A] border border-[#3A3A3A]/20",
    accentColor: "bg-[#F9F9F8]0",
    summary: "Customer pays → instantly enters your production queue. Zero friction.",
    steps: [
      {
        icon: User,
        label: "Customer Orders",
        note: "Adeola buys Silk Kaftan — Size M",
        statusColor: "bg-zinc-100 text-[#3A3A3A]/40",
        active: true,
      },
      {
        icon: Zap,
        label: "Auto-Accepted",
        note: "Instantly added to queue",
        statusColor: "bg-[#F9F9F8] text-[#3A3A3A]",
        active: true,
      },
      {
        icon: Package,
        label: "Production",
        note: "You begin work",
        statusColor: "bg-zinc-100 text-[#3A3A3A]/30",
        active: false,
      },
    ],
    orderPreview: {
      id: "ORD-8821",
      item: "Silk Ankara Kaftan",
      size: "Size M",
      status: "Auto-Accepted",
      statusStyle: "bg-[#F9F9F8] text-[#3A3A3A]",
      time: "Just now",
    },
    benefit: "No back-and-forth. Orders flow straight to you.",
  },
  {
    icon: CheckCircle2,
    label: "Review",
    fullLabel: "Review & Approve",
    tag: "Recommended",
    tagStyle: "bg-sky-50 text-sky-600 border border-sky-200",
    accentColor: "bg-sky-500",
    summary: "You review every incoming request before committing — full control over your workload.",
    steps: [
      {
        icon: User,
        label: "Request In",
        note: "Client sends custom request",
        statusColor: "bg-zinc-100 text-[#3A3A3A]/40",
        active: true,
      },
      {
        icon: ShieldCheck,
        label: "You Review",
        note: "Read details, check schedule",
        statusColor: "bg-sky-50 text-sky-600",
        active: true,
      },
      {
        icon: CheckCircle2,
        label: "Accept / Decline",
        note: "Your decision",
        statusColor: "bg-zinc-100 text-[#3A3A3A]/30",
        active: false,
      },
    ],
    orderPreview: {
      id: "REQ-3304",
      item: "3-Piece Agbada Set",
      size: "Custom Measurements",
      status: "Awaiting Review",
      statusStyle: "bg-sky-50 text-sky-600",
      time: "12 min ago",
    },
    benefit: "Never overcommit. Only take work you're ready for.",
  },
  {
    icon: MessageSquare,
    label: "Quote",
    fullLabel: "Quote & Bid",
    tag: "Custom Pricing",
    tagStyle: "bg-amber-50 text-amber-600 border border-amber-200",
    accentColor: "bg-amber-500",
    summary: "Client describes what they need — you respond with a price offer. Both agree before anything starts.",
    steps: [
      {
        icon: User,
        label: "Request In",
        note: "Client shares brief + budget",
        statusColor: "bg-zinc-100 text-[#3A3A3A]/40",
        active: true,
      },
      {
        icon: MessageSquare,
        label: "You Quote",
        note: "Send your price & timeline",
        statusColor: "bg-amber-50 text-amber-600",
        active: true,
      },
      {
        icon: Star,
        label: "Client Accepts",
        note: "Order confirmed — work begins",
        statusColor: "bg-zinc-100 text-[#3A3A3A]/30",
        active: false,
      },
    ],
    orderPreview: {
      id: "QUO-1190",
      item: "Wedding Bridal Gown",
      size: "Full Custom",
      status: "Quote Sent",
      statusStyle: "bg-amber-50 text-amber-600",
      time: "2h ago",
    },
    benefit: "Set fair prices. No surprises for you or your client.",
  },
];

export function OrderWorkflowSection({ data }: OrderWorkflowSectionProps) {
  const [active, setActive] = useState(0);
  const mode = MODES[active];

  return (
    <section id={data.id} className="relative z-10 bg-white py-24 sm:py-32 overflow-hidden" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-28">

          {/* ── LEFT: Content ── */}
          <div className="flex flex-col gap-10 lg:w-[44%]">
            <div className="flex flex-col gap-6">
              <motion.span
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/40"
              >
                {data.badge}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-[#3A3A3A] sm:text-5xl lg:text-6xl"
              >
                {data.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-base leading-relaxed text-[#3A3A3A]/40 sm:text-lg"
              >
                {data.description}
              </motion.p>
            </div>

            {/* Feature list */}
            <div className="grid gap-4">
              {data.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-5 group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F9F9F8] border border-[#3A3A3A]/5 group-hover:bg-[#3A3A3A] group-hover:text-white transition-all shadow-sm flex-shrink-0">
                    <ListChecks className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <span className="font-ui text-sm font-medium text-[#3A3A3A]/70 sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Mode selector buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-3"
            >
              <span className="font-display text-[8px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/20">Choose a workflow mode to see how it works</span>
              <div className="flex gap-2">
                {MODES.map((m, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`flex-1 flex items-center justify-center gap-2 h-11 rounded-xl font-display text-[9px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
                      active === i
                        ? 'bg-[#3A3A3A] text-white border-[#3A3A3A] shadow-lg'
                        : 'bg-[#F9F9F8] text-[#3A3A3A]/30 border-[#3A3A3A]/[0.06] hover:border-[#3A3A3A]/20 hover:text-[#3A3A3A]/60'
                    }`}
                  >
                    <m.icon className="h-3.5 w-3.5" strokeWidth={1.5} />
                    {m.label}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="font-ui text-sm italic text-[#3A3A3A]/30"
            >
              {data.closing}
            </motion.p>
          </div>

          {/* ── RIGHT: Interactive workflow illustration ── */}
          <div className="relative lg:w-[56%]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative mx-auto w-full max-w-lg"
            >
              {/* Card */}
              <div className="rounded-[2.5rem] border border-[#3A3A3A]/[0.07] bg-white shadow-2xl shadow-black/[0.07] overflow-hidden">

                {/* Card header — mode title + tag */}
                <div className="px-7 pt-7 pb-5 border-b border-[#3A3A3A]/[0.05]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="h-10 w-10 rounded-xl bg-[#3A3A3A] text-white flex items-center justify-center shadow-sm">
                          <mode.icon className="h-4.5 w-4.5" strokeWidth={1.5} />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="font-display text-sm font-bold tracking-tight text-[#3A3A3A]">{mode.fullLabel}</span>
                          <span className="font-ui text-[9px] text-[#3A3A3A]/30">{mode.summary}</span>
                        </div>
                      </div>
                      <span className={`px-3 py-1.5 rounded-xl font-display text-[7px] font-bold uppercase tracking-wider flex-shrink-0 ${mode.tagStyle}`}>
                        {mode.tag}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Live order preview */}
                <div className="px-7 py-5 border-b border-[#3A3A3A]/[0.05] bg-[#F9F9F8]">
                  <span className="font-display text-[7px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/20 mb-3 block">Live Order Example</span>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.25 }}
                      className="flex items-center justify-between rounded-2xl bg-white border border-[#3A3A3A]/[0.06] shadow-sm px-5 py-4 group hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-xl bg-[#F9F9F8] border border-[#3A3A3A]/5 flex items-center justify-center flex-shrink-0">
                          <Package className="h-4 w-4 text-[#3A3A3A]/20" strokeWidth={1.5} />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="font-display text-[11px] font-bold text-[#3A3A3A]/70">{mode.orderPreview.item}</span>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[8px] text-[#3A3A3A]/20">{mode.orderPreview.id}</span>
                            <span className="font-mono text-[8px] text-[#3A3A3A]/15">·</span>
                            <span className="font-mono text-[8px] text-[#3A3A3A]/20">{mode.orderPreview.size}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className={`px-2.5 py-1 rounded-lg font-display text-[7px] font-bold uppercase tracking-wider ${mode.orderPreview.statusStyle}`}>
                          {mode.orderPreview.status}
                        </span>
                        <div className="flex items-center gap-1">
                          <Clock className="h-2.5 w-2.5 text-[#3A3A3A]/10" />
                          <span className="font-mono text-[7px] text-[#3A3A3A]/15">{mode.orderPreview.time}</span>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Step pipeline */}
                <div className="px-7 py-5">
                  <span className="font-display text-[7px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/20 mb-4 block">How it flows</span>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="flex items-stretch gap-0"
                    >
                      {mode.steps.map((step, si) => (
                        <div key={si} className="flex items-center flex-1 min-w-0">
                          {/* Step Node */}
                          <div className={`flex-1 flex flex-col items-center text-center gap-2 px-2 py-4 rounded-2xl transition-all duration-300 ${
                            step.active
                              ? 'bg-[#F9F9F8] border border-[#3A3A3A]/[0.05]'
                              : 'bg-white border border-dashed border-[#3A3A3A]/[0.05] opacity-40'
                          }`}>
                            <div className={`h-9 w-9 rounded-xl flex items-center justify-center ${
                              step.active
                                ? 'bg-[#3A3A3A] text-white shadow-md'
                                : 'bg-zinc-100 text-[#3A3A3A]/20'
                            }`}>
                              <step.icon className="h-4 w-4" strokeWidth={1.5} />
                            </div>
                            <div className="flex flex-col gap-0.5">
                              <span className="font-display text-[8px] font-bold uppercase tracking-wider text-[#3A3A3A]/60 leading-tight">{step.label}</span>
                              <span className="font-ui text-[7px] text-[#3A3A3A]/20 leading-snug">{step.note}</span>
                            </div>
                            {step.active && (
                              <div className={`h-1 w-8 rounded-full ${mode.accentColor} opacity-70`} />
                            )}
                          </div>

                          {/* Arrow connector */}
                          {si < mode.steps.length - 1 && (
                            <div className="flex-shrink-0 px-1">
                              <ArrowRight className="h-3 w-3 text-[#3A3A3A]/10" />
                            </div>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Benefit callout */}
                <div className="px-7 pb-7">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                      className="rounded-2xl bg-[#3A3A3A] text-white px-5 py-4 flex items-center gap-4"
                    >
                      <div className={`h-8 w-8 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0`}>
                        <mode.icon className="h-3.5 w-3.5 text-white/50" strokeWidth={1.5} />
                      </div>
                      <p className="font-ui text-[10px] leading-relaxed text-white/60">{mode.benefit}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Bottom note */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="text-center mt-5"
              >
                <span className="font-display text-[7px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/15">
                  Switch modes anytime · No lock-in
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-[#3A3A3A]/10 shadow-sm" />
    </section>
  );
}

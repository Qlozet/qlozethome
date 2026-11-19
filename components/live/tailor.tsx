"use client";

// Live illustrations for the vendor "Customer & measurement" page. Vendors
// see a short name and area only (customer-privacy rules); measurements are
// the copy taken when the order was placed; questions correct that copy.

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Check, Circle, MessageCircle, Scissors, Shirt, Sparkles, ShieldCheck, Camera, TriangleAlert } from "lucide-react";
import { useEffect, useState } from "react";
import { ConsolePanel, useCountUp, useStepLoop } from "./kit";

function Row({ label, value, delay, highlight = false, unit = "cm" }: { label: string; value: number; delay: number; highlight?: boolean; unit?: string }) {
  const [go, setGo] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setGo(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  const v = useCountUp(value, go, 700);
  return (
    <div className={`flex items-center justify-between border-b border-black/5 py-2 transition-colors duration-500 ${highlight ? "rounded-lg bg-[#ecf7ef] px-2" : ""}`}>
      <span className="font-ui text-xs text-[#3A3A3A]/75">{label}</span>
      <span className="font-display text-sm font-semibold tabular-nums">{Math.round(v)} <span className="font-ui text-[10px] font-normal text-[#3A3A3A]/50">{unit}</span></span>
    </div>
  );
}

// ─── Hero: the measurements on an order ──────────────────────────────────

const ORDER_MEASURES = [
  ["Chest", 104], ["Waist", 88], ["Hip", 102], ["Shoulder", 48], ["Sleeve length", 62], ["Kaftan length", 132],
] as const;

export function OrderMeasurements() {
  const { ref, step } = useStepLoop([2600, 3400], 1);
  const [cycle, setCycle] = useState(0);
  useEffect(() => {
    if (step === 0) setCycle((c) => c + 1);
  }, [step]);
  return (
    <div ref={ref}>
      <ConsolePanel title="Order #QL-2051 · Kaftan"
        label="A bespoke order in the vendor console: the customer's short name and area, the measurement set they ordered with, and a check that everything the garment needs is there."
        meta={<span className="rounded-full bg-[#ecf7ef] px-2.5 py-1 font-ui text-[10px] font-semibold text-[#1f5c36]">Paid</span>}>
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-darker font-display text-xs font-semibold text-white">AO</span>
          <span className="flex flex-1 flex-col">
            <span className="font-display text-sm font-semibold">Ada O.</span>
            <span className="font-ui text-[11px] text-[#3A3A3A]/60">Lekki, Lagos</span>
          </span>
          <span className="flex items-center gap-1 rounded-full bg-brand-light px-2.5 py-1 font-ui text-[10px] text-[#3A3A3A]/75">
            <MessageCircle className="h-3 w-3" /> Order chat
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span className="font-display text-[9px] font-bold uppercase tracking-[0.25em] text-[#3A3A3A]/50">Measurements</span>
          <span className="font-ui text-[10px] text-[#3A3A3A]/60">My body scan · body scan</span>
        </div>
        <div key={cycle} className="mt-1 flex flex-col">
          {ORDER_MEASURES.map(([k, v], i) => <Row key={k} label={k} value={v} delay={i * 150} />)}
        </div>

        <motion.div initial={false} animate={{ opacity: step === 1 ? 1 : 0, y: step === 1 ? 0 : 6 }}
          className="mt-4 flex items-center gap-2 rounded-xl bg-[#ecf7ef] px-4 py-2.5 font-ui text-xs text-[#1f5c36]">
          <Check className="h-4 w-4" strokeWidth={3} /> Everything this kaftan needs is here
        </motion.div>
      </ConsolePanel>
    </div>
  );
}

// ─── What the garment needs, checked before the order exists ─────────────

const NEEDS = [
  { k: "Chest", ok: true },
  { k: "Waist", ok: true },
  { k: "Shoulder", ok: true },
  { k: "Sleeve or arm length", ok: true },
  { k: "Torso length or height", ok: true, estimate: true },
];
const HELPFUL = ["Neck", "Bicep", "Wrist", "Across back"];

export function NeedsCheck() {
  const { ref, step } = useStepLoop([600, 500, 500, 500, 500, 900, 3200], 6);
  const shown = Math.min(step, NEEDS.length);
  return (
    <div ref={ref}>
      <ConsolePanel title="Measurement check · Top"
        label="Each garment has a list of measurements it needs. A top needs chest, waist, shoulder, sleeve or arm length, and torso length or height; numbers that are only rough estimates are flagged, and orders missing a needed one can't be placed.">
        <span className="font-display text-[9px] font-bold uppercase tracking-[0.25em] text-[#3A3A3A]/50">Needed</span>
        <div className="mt-2 flex flex-col gap-1.5">
          {NEEDS.map((n, i) => {
            const on = i < shown;
            return (
              <div key={n.k} className="flex items-center justify-between gap-3 rounded-lg px-1 py-1">
                <span className="flex items-center gap-2.5">
                  <span className={`flex h-5 w-5 items-center justify-center rounded-full transition-colors duration-300 ${on ? (n.estimate ? "bg-[#f2c879] text-[#5a3a06]" : "bg-[#2f7a4b] text-white") : "bg-black/5 text-transparent"}`}>
                    {n.estimate ? <TriangleAlert className="h-3 w-3" /> : <Check className="h-3 w-3" strokeWidth={3} />}
                  </span>
                  <span className="font-ui text-sm text-[#111]">{n.k}</span>
                </span>
                {n.estimate && on && (
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="rounded-full bg-[#fdf3e3] px-2 py-0.5 font-ui text-[10px] font-semibold text-[#7a4a0c]">Rough estimate</motion.span>
                )}
              </div>
            );
          })}
        </div>
        <span className="mt-4 block font-display text-[9px] font-bold uppercase tracking-[0.25em] text-[#3A3A3A]/50">Helpful</span>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {HELPFUL.map((h) => (
            <span key={h} className="rounded-full bg-brand-light px-2.5 py-1 font-ui text-[11px] text-[#3A3A3A]/75">{h}</span>
          ))}
        </div>
        <motion.p initial={false} animate={{ opacity: step >= 6 ? 1 : 0 }}
          className="mt-4 rounded-xl bg-brand-light px-4 py-3 font-ui text-[11px] leading-relaxed text-[#3A3A3A]/80">
          Customers can&apos;t place the order until every needed measurement is in. Rough estimates are flagged so you know what to confirm.
        </motion.p>
      </ConsolePanel>
    </div>
  );
}

// ─── Ask before you cut ──────────────────────────────────────────────────

export function AskCustomer() {
  // 0 typing · 1 sent · 2 customer answers · 3 order copy corrected
  const { ref, step } = useStepLoop([1900, 1300, 2000, 3200], 3);
  const q = "The waist looks small next to the hip. Can you confirm it?";
  const [chars, setChars] = useState(q.length);
  useEffect(() => {
    if (step !== 0) {
      setChars(q.length);
      return;
    }
    setChars(0);
    const id = setInterval(() => setChars((c) => Math.min(c + 2, q.length)), 45);
    return () => clearInterval(id);
  }, [step]);
  return (
    <div ref={ref}>
      <ConsolePanel title="Order #QL-2051 · Measurements"
        label="Asking the customer about a measurement before cutting. The customer replies from their order and changes waist from 80 to 82 cm; the order's measurements update and you're told what changed.">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1.5 rounded-2xl border border-black/10 p-3">
            <span className="font-display text-[9px] font-bold uppercase tracking-[0.25em] text-[#3A3A3A]/50">Ask about: Waist</span>
            <span className="min-h-[34px] font-ui text-xs leading-relaxed text-[#111]">
              {q.slice(0, chars)}
              {step === 0 && <span className="ml-px inline-block h-3 w-px animate-pulse bg-[#111] align-middle" />}
            </span>
            <span className={`w-fit self-end rounded-full px-3 py-1.5 font-display text-[9px] font-bold uppercase tracking-[0.15em] text-white ${step >= 1 ? "bg-[#2f7a4b]" : "bg-brand-button"}`}>
              {step >= 1 ? "Question sent to the customer." : "Send"}
            </span>
          </div>

          <AnimatePresence>
            {step >= 2 && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="ml-6 flex flex-col gap-1.5 rounded-2xl bg-brand-light p-3">
                <span className="font-display text-[9px] font-bold uppercase tracking-[0.25em] text-[#3A3A3A]/50">Ada O. replied</span>
                <span className="font-ui text-xs text-[#111]">Waist (cm): <span className="line-through opacity-50">80</span> <span className="font-semibold">82</span></span>
                <span className="font-ui text-[11px] text-[#3A3A3A]/70">Measured again this morning.</span>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {step === 3 && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex flex-col gap-2">
                <div className="flex items-center justify-between rounded-lg bg-[#ecf7ef] px-3 py-2">
                  <span className="font-ui text-xs text-[#3A3A3A]/80">Waist</span>
                  <span className="font-display text-sm font-semibold tabular-nums">82 <span className="font-ui text-[10px] font-normal text-[#3A3A3A]/50">cm</span></span>
                </div>
                <span className="font-ui text-[11px] text-[#3A3A3A]/70">The customer answered about their measurements. Order #QL-2051: waist 80 → 82.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </ConsolePanel>
    </div>
  );
}

// ─── Production, step by step, then photos ───────────────────────────────

const STEPS = [
  { k: "Fabric cut", d: "Pattern traced and fabric cut to spec", icon: Scissors },
  { k: "Sewing", d: "Garment assembled from the cut pieces", icon: Shirt },
  { k: "Finishing", d: "Hems, fastenings and final touches", icon: Sparkles },
  { k: "Quality check", d: "Inspected against the measurements and spec", icon: ShieldCheck },
];

export function ProductionSteps() {
  // 0..3 ticking · 4 photos sent · 5 approved
  const { ref, step } = useStepLoop([900, 900, 900, 1100, 1900, 2800], 5);
  const done = Math.min(step + 1, 4);
  return (
    <div ref={ref}>
      <ConsolePanel title="Production · #QL-2051"
        label="Production steps a tailor ticks off: fabric cut, sewing, finishing and quality check. Then photos of the finished piece go to the customer, who approves them and pays the balance before it ships.">
        <div className="flex flex-col gap-2">
          {STEPS.map((s, i) => {
            const on = i < done;
            const Icon = s.icon;
            return (
              <div key={s.k} className="flex items-center gap-3 rounded-xl border border-black/5 px-3 py-2.5">
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${on ? "bg-brand-darker text-white" : "bg-brand-light text-[#3A3A3A]/40"}`}><Icon className="h-4 w-4" /></span>
                <span className="flex flex-1 flex-col">
                  <span className="font-display text-sm font-semibold">{s.k}</span>
                  <span className="font-ui text-[11px] text-[#3A3A3A]/60">{s.d}</span>
                </span>
                {on ? <Check className="h-4 w-4 text-[#2f7a4b]" strokeWidth={3} /> : <Circle className="h-4 w-4 text-black/15" />}
              </div>
            );
          })}
          <AnimatePresence>
            {step >= 4 && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="mt-1 flex items-center gap-3 rounded-xl bg-brand-light p-3">
                <div className="flex gap-1.5">
                  {["/image/bespoke-kaftan-brown-2.png", "/image/bespoke-kaftan-brown-3.png"].map((src) => (
                    <span key={src} className="relative h-12 w-9 overflow-hidden rounded-md"><Image src={src} alt="" fill className="object-cover" sizes="36px" /></span>
                  ))}
                </div>
                <span className="flex flex-1 flex-col">
                  <span className="flex items-center gap-1 font-display text-xs font-semibold"><Camera className="h-3 w-3" /> Finished-piece photos</span>
                  <span className={`font-ui text-[11px] ${step === 5 ? "font-semibold text-[#1f5c36]" : "text-[#3A3A3A]/70"}`}>
                    {step === 5 ? "Approved, balance paid. Ready to ship." : "Sent for the customer's approval"}
                  </span>
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </ConsolePanel>
    </div>
  );
}

// ─── Quote with the brief in front of you ────────────────────────────────

export function QuoteForm() {
  // 0 the brief · 1 lines priced · 2 sent
  const { ref, step } = useStepLoop([1800, 2600, 2600], 1);
  return (
    <div ref={ref}>
      <ConsolePanel title="Quote request · Kaftan"
        label="Answering a bespoke quote request: the customer's design and measurements are attached; you price your work, the fabric is priced from its listing, and you set the days you need before shipping.">
        <div className="relative flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="relative h-16 w-11 shrink-0 overflow-hidden rounded-lg"><Image src="/image/bespoke-kaftan-brown-2.png" alt="" fill className="object-cover" sizes="44px" /></span>
            <span className="flex flex-1 flex-col gap-1">
              <span className="font-display text-sm font-semibold">Ada O. · Kaftan</span>
              <span className="flex flex-wrap gap-1">
                {["Design, front and back", "Measurements attached", "Long sleeves"].map((c) => (
                  <span key={c} className="rounded-full bg-brand-light px-2 py-0.5 font-ui text-[9.5px] text-[#3A3A3A]/75">{c}</span>
                ))}
              </span>
            </span>
          </div>

          <motion.div initial={false} animate={{ opacity: step >= 1 ? 1 : 0.35 }} className="flex flex-col">
            {[["Base tailoring", "₦60,000"], ["Embroidery", "₦10,000"], ["Fabric, 7 yd (priced from the listing)", "₦20,000"]].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between border-b border-black/5 py-2.5">
                <span className="font-ui text-xs text-[#3A3A3A]/80">{k}</span>
                <span className="font-display text-sm font-semibold tabular-nums">{v}</span>
              </div>
            ))}
            <div className="flex items-center justify-between py-2.5">
              <span className="font-ui text-xs text-[#3A3A3A]/80">Ready to ship, counted from payment</span>
              <span className="font-display text-sm font-semibold">14 days</span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-brand-light px-3 py-2.5">
              <span className="font-display text-sm font-semibold">Total</span>
              <span className="font-display text-lg font-semibold tabular-nums">₦90,000</span>
            </div>
          </motion.div>

          <span className="flex items-center gap-2 font-ui text-[11px] text-[#3A3A3A]/75">
            <span className={`flex h-4 w-4 items-center justify-center rounded border transition-colors ${step >= 1 ? "border-brand-darker bg-brand-darker text-white" : "border-black/20"}`}>
              {step >= 1 && <Check className="h-2.5 w-2.5" strokeWidth={3} />}
            </span>
            I&apos;ll make this to Qlozet&apos;s bespoke terms
          </span>
          <span className={`rounded-full py-3 text-center font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors ${step === 2 ? "bg-[#2f7a4b]" : step === 1 ? "bg-brand-button" : "bg-brand-button/30"}`}>
            {step === 2 ? "Quote sent" : "Send quote"}
          </span>
        </div>
      </ConsolePanel>
    </div>
  );
}

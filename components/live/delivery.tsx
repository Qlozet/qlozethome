"use client";

// Live illustrations for "Ordering & delivery", in the shop's own words:
// checkout shipping + payment, the product page's delivery estimate, order
// tracking, the On-Time Promise (5% of the late vendor's items per day,
// credited to the wallet), and Report a Problem.

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Check, Clock, Copy, CreditCard, Truck, Wallet } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { naira, useCountUp, useStepLoop } from "./kit";

function Card({ title, meta, children, label }: { title: string; meta?: ReactNode; children: ReactNode; label: string }) {
  return (
    <div role="img" aria-label={label}
      className="mx-auto w-full max-w-[480px] overflow-hidden rounded-[2rem] border border-brand-darker/10 bg-white shadow-[0_40px_80px_-40px_rgba(30,16,8,0.35)]">
      <div className="flex items-center justify-between gap-3 border-b border-brand-darker/5 bg-brand-light/60 px-5 py-3.5">
        <span className="font-display text-sm font-semibold text-brand-darker">{title}</span>
        {meta}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

/** "23 – 24 Nov" from day offsets; only after load, so the prerender never clashes with the viewer's clock. */
function useRange() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return (a: number, b: number) => {
    if (!ready) return `in ${a}–${b} days`;
    const f = (n: number) => {
      const d = new Date();
      d.setDate(d.getDate() + n);
      return d;
    };
    const s = f(a), e = f(b);
    const m = (d: Date) => d.toLocaleDateString("en-GB", { month: "short" });
    return s.getMonth() === e.getMonth() ? `${s.getDate()} – ${e.getDate()} ${m(e)}` : `${s.getDate()} ${m(s)} – ${e.getDate()} ${m(e)}`;
  };
}

// ─── Hero: checkout ──────────────────────────────────────────────────────

export function CheckoutScene() {
  // 0 loading rates · 1 courier picked · 2 paying · 3 confirmed
  const { ref, step } = useStepLoop([1300, 2600, 1100, 2800], 1);
  const range = useRange();
  return (
    <div ref={ref}>
      <Card title="Checkout"
        label="Checkout on Qlozet: pick a courier for each vendor with its price and arrival dates, choose card or wallet, and pay.">
        <div className="relative flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="font-display text-xs font-semibold">Shipping</span>
            <AnimatePresence mode="wait">
              {step === 0 ? (
                <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="rounded-xl bg-brand-light px-4 py-4 font-ui text-xs text-[#3A3A3A]/60">Loading shipping rates…</motion.span>
              ) : (
                <motion.div key="rate" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="flex flex-col gap-2 rounded-xl border border-black/10 p-3">
                  <span className="flex items-baseline justify-between">
                    <span className="font-display text-xs font-semibold">Adire Studio</span>
                    <span className="font-ui text-[10px] text-[#3A3A3A]/55">1 item</span>
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-light text-brand-darker"><Truck className="h-4 w-4" /></span>
                    <span className="flex flex-1 flex-col">
                      <span className="flex items-center gap-1.5 font-ui text-xs font-medium">Swift Courier <span className="rounded-full bg-[#ecf7ef] px-1.5 py-[1px] text-[9px] font-semibold text-[#1f5c36]">Cheapest</span></span>
                      <span className="font-ui text-[10px] text-[#3A3A3A]/60">Arrives {range(3, 4)}</span>
                    </span>
                    <span className="flex flex-col items-end">
                      <span className="font-display text-sm font-semibold">₦3,500</span>
                      <span className="font-ui text-[10px] text-brand-darker underline underline-offset-2">Change</span>
                    </span>
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-display text-xs font-semibold">Payment Method</span>
            <div className="grid grid-cols-2 gap-2">
              <span className="flex items-start gap-2 rounded-xl border-2 border-brand-darker bg-brand-light p-2.5">
                <CreditCard className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <span className="flex flex-col"><span className="font-ui text-[11px] font-semibold">Credit / Debit Card</span><span className="font-ui text-[9px] text-[#3A3A3A]/60">Pay securely by card, bank transfer or USSD</span></span>
              </span>
              <span className="flex items-start gap-2 rounded-xl border border-black/10 p-2.5">
                <Wallet className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <span className="flex flex-col"><span className="font-ui text-[11px] font-semibold">Pay with Wallet</span><span className="font-ui text-[9px] text-[#3A3A3A]/60">Balance ₦12,000</span></span>
              </span>
            </div>
          </div>

          <div className="flex flex-col rounded-xl bg-brand-light/60 px-4 py-2">
            {[["Sub-total", "₦50,000"], ["Delivery", step === 0 ? "…" : "₦3,500"]].map(([k, v]) => (
              <span key={k} className="flex justify-between py-1 font-ui text-xs"><span className="text-[#3A3A3A]/70">{k}</span><span className="font-semibold tabular-nums">{v}</span></span>
            ))}
            <span className="flex justify-between border-t border-black/5 py-1.5 font-display text-sm font-semibold"><span>TOTAL</span><span className="tabular-nums">{step === 0 ? "₦50,000" : "₦53,500"}</span></span>
          </div>

          <span className={`rounded-full py-3 text-center font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors ${step === 0 ? "bg-brand-button/30" : "bg-brand-button"}`}>
            {step === 0 ? "Select Shipping to Continue" : step === 2 ? "Placing Order..." : "Pay ₦53,500"}
          </span>

          <AnimatePresence>
            {step === 3 && (
              <motion.div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-white/95 p-6 text-center"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2f7a4b] text-white"><Check className="h-6 w-6" strokeWidth={3} /></span>
                <span className="font-display text-lg font-semibold">Payment confirmed</span>
                <span className="max-w-[280px] font-ui text-xs text-[#3A3A3A]/70">Thank you! Your payment was successful and your order is on its way to the vendor.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>
    </div>
  );
}

// ─── The estimate on the product page ────────────────────────────────────

export function EstimateScene() {
  const { ref, step } = useStepLoop([1600, 3600], 1);
  const range = useRange();
  return (
    <div ref={ref}>
      <Card title="Kaftan · Made to measure"
        label="A product page showing its estimated delivery dates, including the vendor's making time.">
        <div className="flex gap-4">
          <span className="relative h-36 w-24 shrink-0 overflow-hidden rounded-xl bg-[#d8cdbf]">
            <Image src="/image/bespoke-kaftan-brown-2.png" alt="" fill className="object-cover" sizes="96px" />
          </span>
          <span className="flex min-w-0 flex-col gap-2">
            <span className="font-display text-base font-semibold">Kaftan</span>
            <span className="font-ui text-xs text-[#3A3A3A]/60">Adire Studio · Lagos</span>
            <span className="font-display text-lg font-semibold">₦50,000</span>
            <motion.span initial={false} animate={{ opacity: step === 1 ? 1 : 0.25 }}
              className="flex items-start gap-1.5 rounded-xl bg-brand-light px-3 py-2 font-ui text-[11px] leading-relaxed text-[#3A3A3A]/85">
              <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-darker" />
              <span>Estimated delivery: <b className="text-[#111]">{range(7, 10)}</b> · includes the vendor&apos;s 5-day making time</span>
            </motion.span>
          </span>
        </div>
      </Card>
    </div>
  );
}

// ─── Tracking ────────────────────────────────────────────────────────────

const EVENTS = ["Booked with the courier", "Collected by the courier", "In transit", "Out for delivery", "Delivered"];

export function TrackingScene() {
  const { ref, step } = useStepLoop([900, 900, 1200, 1200, 3000], 4);
  return (
    <div ref={ref}>
      <Card title="Track Order · QL-2047"
        label="Following a parcel: booked with the courier, collected, in transit, out for delivery, delivered, with a tracking code and a link to the courier's site."
        meta={<span className="font-ui text-[10px] text-[#3A3A3A]/60">Your parcel</span>}>
        <ol className="relative flex flex-col gap-3">
          <div className="absolute bottom-2 left-[9px] top-2 w-px bg-black/10" aria-hidden />
          {EVENTS.map((e, i) => {
            const on = i <= step;
            const now = i === step;
            return (
              <li key={e} className="relative flex items-center gap-3">
                <span className={`z-10 h-[19px] w-[19px] shrink-0 rounded-full border-2 transition-colors duration-300 ${on ? "border-brand-darker bg-brand-darker" : "border-black/15 bg-white"}`} />
                <span className={`font-ui text-xs transition-opacity duration-300 ${on ? "text-[#111]" : "text-[#3A3A3A]/40"} ${now ? "font-semibold" : ""}`}>{e}</span>
                {now && i < 4 && <span className="rounded-full bg-[#fdf3e3] px-2 py-0.5 font-ui text-[9px] font-semibold text-[#7a4a0c]">In progress</span>}
              </li>
            );
          })}
        </ol>
        <div className="mt-4 flex items-center justify-between rounded-xl bg-brand-light px-3 py-2.5">
          <span className="font-ui text-[11px] text-[#3A3A3A]/70">Tracking <span className="font-semibold tabular-nums text-[#111]">SC8812-4470</span></span>
          <span className="flex items-center gap-2 font-ui text-[10px] text-brand-darker">
            <Copy className="h-3 w-3" /> <span className="underline underline-offset-2">Track on courier site</span>
          </span>
        </div>
        <AnimatePresence>
          {step >= 2 && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="mt-3 flex flex-col rounded-xl border border-black/10 px-3 py-2">
              <span className="font-ui text-xs font-semibold">{step === 4 ? "Order delivered!" : step === 3 ? "Out for delivery today" : "Your order is on its way!"}</span>
              <span className="font-ui text-[11px] text-[#3A3A3A]/65">
                {step === 4 ? "Order #QL-2047 has been delivered. Enjoy your purchase!" : step === 3 ? "A parcel from order #QL-2047 is out for delivery." : "Order #QL-2047 is now in transit."}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </div>
  );
}

// ─── On-Time Promise ─────────────────────────────────────────────────────

export function OnTimeScene() {
  // 0 the promise · 1 a day late · 2 two days late, credited
  const { ref, step } = useStepLoop([2200, 1800, 3200], 2);
  const credit = step === 0 ? 0 : step === 1 ? 2500 : 5000;
  const wallet = useCountUp(12000 + credit, true, 700, 12000);
  return (
    <div ref={ref}>
      <Card title="My Orders"
        label="The On-Time Promise: if a vendor ships your order late, compensation is credited to your wallet automatically, 5% of their items for each day late.">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1 rounded-xl bg-brand-light p-3">
            <span className="font-display text-xs font-semibold">On-Time Promise</span>
            <span className="font-ui text-[11px] leading-relaxed text-[#3A3A3A]/80">If a vendor ships your order late, we automatically credit compensation to your wallet. No need to ask.</span>
          </div>
          <div className="flex items-center justify-between rounded-xl border border-black/10 px-3 py-2.5">
            <span className="flex flex-col">
              <span className="font-ui text-xs font-medium">Kaftan · QL-2047</span>
              <span className={`font-ui text-[10px] ${step === 0 ? "text-[#3A3A3A]/60" : "font-semibold text-[#b42318]"}`}>
                {step === 0 ? "Ships by today" : `${step} day${step > 1 ? "s" : ""} late`}
              </span>
            </span>
            <span className="flex flex-col items-end">
              <span className="font-ui text-[10px] text-[#3A3A3A]/55">Wallet</span>
              <span className="font-display text-sm font-semibold tabular-nums">{naira(wallet)}</span>
            </span>
          </div>
          <AnimatePresence mode="wait">
            {step > 0 && (
              <motion.div key={step} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="flex flex-col gap-0.5 rounded-xl bg-[#ecf7ef] px-3 py-2.5">
                <span className="font-ui text-xs font-semibold text-[#1f5c36]">Late Fulfillment Compensation</span>
                <span className="font-ui text-[11px] leading-relaxed text-[#1f5c36]/90">
                  Adire Studio is {step} day{step > 1 ? "s" : ""} late fulfilling order #QL-2047. A ₦2,500 compensation has been credited to you.
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>
    </div>
  );
}

// ─── Report a Problem ────────────────────────────────────────────────────

const REASONS = ["Not as described", "Arrived damaged", "Wrong item received", "Missing items", "Never arrived", "Doesn't fit as measured", "Poor quality", "Something else"];

export function ReportScene() {
  // 0 open · 1 reason picked · 2 submitted
  const { ref, step } = useStepLoop([1500, 2200, 2800], 1);
  return (
    <div ref={ref}>
      <Card title="Report a Problem"
        label="Reporting a problem with an order: pick what happened and submit, and the team opens a case with the vendor.">
        <div className="relative flex flex-col gap-3">
          <span className="font-ui text-xs text-[#3A3A3A]/75">Tell us what happened. We&apos;ll open a case with the vendor.</span>
          <div className="flex flex-wrap gap-1.5">
            {REASONS.map((r) => {
              const on = step >= 1 && r === "Arrived damaged";
              return (
                <span key={r} className={`rounded-full border px-2.5 py-1 font-ui text-[11px] transition-colors duration-300 ${on ? "border-brand-darker bg-brand-darker text-white" : "border-black/10 text-[#3A3A3A]/80"}`}>{r}</span>
              );
            })}
          </div>
          <span className={`rounded-full py-3 text-center font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors ${step >= 1 ? "bg-brand-button" : "bg-brand-button/30"}`}>Submit Report</span>
          <AnimatePresence>
            {step === 2 && (
              <motion.div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-white/95 text-center"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2f7a4b] text-white"><Check className="h-5 w-5" strokeWidth={3} /></span>
                <span className="font-display text-base font-semibold">Report submitted</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>
    </div>
  );
}

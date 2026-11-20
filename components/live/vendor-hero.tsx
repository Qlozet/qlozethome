"use client";

// The vendor overview's two signature pieces:
// - VendorJourneyHero: one order's whole life in a single card, on the dark
//   brand ground: it arrives, the label prints, the courier collects, the
//   earnings land in the wallet.
// - EarningsCalculator: pick a month's sales and see what you keep after the
//   10% commission and when it reaches your wallet.

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, Printer, Truck, Wallet } from "lucide-react";
import { useState } from "react";
import { naira, useCountUp, useStepLoop } from "./kit";

const STAGES = ["New order", "Label printed", "Collected", "Paid"];
const SALE = 50000;
const COMMISSION = 0.1;

function Stage({ step }: { step: number }) {
  const earned = useCountUp(SALE * (1 - COMMISSION), step === 3, 900);
  return (
    <AnimatePresence mode="wait">
      <motion.div key={step} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col gap-4">
        {step === 0 && (
          <>
            <span className="font-ui text-xs font-medium uppercase tracking-[0.2em] text-[#3A3A3A]/50">New order</span>
            <span className="font-ui text-sm text-[#3A3A3A]/75">Ada O. in Lekki ordered from your store. Confirm within 24 hours.</span>
            <span className="rounded-full bg-[#2f7a4b] py-3 text-center font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white">Confirm Order</span>
          </>
        )}
        {step === 1 && (
          <>
            <span className="flex items-center gap-2 font-ui text-sm font-semibold text-[#1f5c36]"><Check className="h-4 w-4" strokeWidth={3} />Shipping label created!</span>
            <span className="font-ui text-sm text-[#3A3A3A]/75">Booked with Swift Courier, the one Ada chose. Tracking SC8812-4470.</span>
            <span className="flex items-center justify-center gap-2 rounded-full bg-brand-button py-3 font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white"><Printer className="h-3.5 w-3.5" />Print Label</span>
          </>
        )}
        {step === 2 && (
          <>
            <span className="flex items-center gap-2 font-ui text-sm font-semibold"><Truck className="h-4 w-4 text-brand-darker" />Collected from your address</span>
            <span className="font-ui text-sm text-[#3A3A3A]/75">Ada gets an update at every scan until it&apos;s delivered. Nothing for you to mark.</span>
            <span className="w-fit rounded-full bg-[#eaf1fb] px-3 py-1 font-ui text-[11px] font-semibold text-[#1d4e89]">In Transit</span>
          </>
        )}
        {step === 3 && (
          <>
            <span className="flex items-center gap-2 font-ui text-sm font-semibold"><Wallet className="h-4 w-4 text-brand-darker" />Earnings in your wallet</span>
            <span className="font-display text-4xl font-semibold tabular-nums tracking-tight">{naira(earned)}</span>
            <span className="font-ui text-sm text-[#3A3A3A]/75">₦50,000 sale, less 10% commission. Released 14 days after Ada paid, ready to withdraw.</span>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export function VendorJourneyHero({ copy, cta, secondary }: {
  copy: { badge: string; title: string; description: string };
  cta: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  const { ref, step } = useStepLoop([2600, 2600, 2600, 3600], 3);
  return (
    <section className="relative w-full overflow-hidden bg-brand-darker pb-24 pt-32 text-white lg:pb-32 lg:pt-40" data-theme="dark">
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-white/[0.04] blur-3xl" />
      <div className="relative mx-auto grid max-w-[94rem] grid-cols-[minmax(0,1fr)] items-center gap-16 px-6 md:px-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-8">
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-white/50">{copy.badge}</span>
          <h1 className="max-w-3xl font-display text-[2.6rem] font-medium leading-[1.04] tracking-tight sm:text-7xl [text-wrap:balance]">{copy.title}</h1>
          <p className="max-w-xl font-ui text-base leading-relaxed text-white/65 sm:text-lg">{copy.description}</p>
          <div className="flex flex-wrap items-center gap-3">
            <Link href={cta.href}
              className="inline-flex h-14 items-center justify-center rounded-full bg-white px-10 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-darker transition-transform hover:scale-[1.02] active:scale-95">
              {cta.label}
            </Link>
            {secondary && (
              <Link href={secondary.href}
                className="inline-flex h-14 items-center justify-center rounded-full border border-white/25 px-10 text-[10px] font-bold uppercase tracking-[0.3em] text-white transition-colors hover:bg-white/10">
                {secondary.label}
              </Link>
            )}
          </div>
        </motion.div>

        <div ref={ref}
          className="mx-auto flex w-full max-w-[440px] flex-col gap-5"
          role="img" aria-label="One order on Qlozet: it arrives, you confirm and print the label, the courier collects, and your earnings reach your wallet 14 days after the customer paid.">
          <div className="overflow-hidden rounded-[2rem] bg-white text-[#111111] shadow-[0_50px_100px_-40px_rgba(0,0,0,0.7)]">
            <div className="flex items-center gap-3 border-b border-black/5 px-6 py-4">
              <span className="relative h-12 w-10 shrink-0 overflow-hidden rounded-lg bg-[#d8cdbf]">
                <Image src="/image/bespoke-kaftan-brown-2.png" alt="" fill className="object-cover" sizes="40px" />
              </span>
              <span className="flex flex-1 flex-col">
                <span className="font-display text-sm font-semibold">Kaftan · Size L</span>
                <span className="font-ui text-xs text-[#3A3A3A]/55">Order QL-2047</span>
              </span>
              <span className="font-display text-sm font-semibold tabular-nums">₦50,000</span>
            </div>
            <div className="min-h-[188px] px-6 py-6">
              <Stage step={step} />
            </div>
          </div>
          <ol className="grid grid-cols-4 gap-2">
            {STAGES.map((s, i) => (
              <li key={s} className="flex flex-col gap-2">
                <span className="h-1 overflow-hidden rounded-full bg-white/15">
                  <motion.span className="block h-full rounded-full bg-white" initial={false}
                    animate={{ width: i <= step ? "100%" : "0%" }}
                    transition={{ duration: i === step ? 0.5 : 0.2 }} />
                </span>
                <span className={`font-ui text-[11px] transition-colors ${i <= step ? "text-white" : "text-white/40"}`}>{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

// ─── Earnings calculator ─────────────────────────────────────────────────

const MIN = 50000, MAX = 5000000, STEP = 50000;

export function EarningsCalculator() {
  const [sales, setSales] = useState(500000);
  const fee = Math.round(sales * COMMISSION);
  const keep = sales - fee;
  const pct = ((sales - MIN) / (MAX - MIN)) * 100;
  return (
    <div className="mx-auto w-full max-w-[460px] rounded-[2rem] border border-brand-darker/10 bg-white p-7 shadow-[0_40px_80px_-40px_rgba(30,16,8,0.35)] sm:p-8">
      <label htmlFor="vendor-sales" className="font-ui text-sm text-[#3A3A3A]/70">If you sell this much in a month</label>
      <output htmlFor="vendor-sales" className="mt-2 block font-display text-4xl font-semibold tabular-nums tracking-tight text-[#111111]">{naira(sales)}</output>
      <input id="vendor-sales" type="range" min={MIN} max={MAX} step={STEP} value={sales}
        onChange={(e) => setSales(Number(e.target.value))}
        aria-valuetext={naira(sales)}
        className="mt-6 h-2 w-full cursor-pointer appearance-none rounded-full outline-none focus-visible:ring-2 focus-visible:ring-brand-darker/40 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-brand-darker [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-darker [&::-webkit-slider-thumb]:shadow-md"
        style={{ background: `linear-gradient(to right, var(--brand-darker) ${pct}%, rgba(30,16,8,0.1) ${pct}%)` }} />
      <div className="mt-2 flex justify-between font-ui text-[11px] text-[#3A3A3A]/45"><span>₦50,000</span><span>₦5,000,000</span></div>

      <dl className="mt-7 flex flex-col">
        <div className="flex items-center justify-between border-b border-black/5 py-3">
          <dt className="font-ui text-sm text-[#3A3A3A]/70">Qlozet commission (10%)</dt>
          <dd className="font-display text-sm font-semibold tabular-nums text-[#b42318]">-{naira(fee)}</dd>
        </div>
        <div className="flex items-center justify-between py-4">
          <dt className="font-ui text-sm font-semibold text-[#111111]">You keep</dt>
          <dd className="font-display text-3xl font-semibold tabular-nums tracking-tight text-[#1f7a43]">{naira(keep)}</dd>
        </div>
      </dl>
      <p className="font-ui text-xs leading-relaxed text-[#3A3A3A]/60">
        Each order&apos;s earnings reach your wallet 14 days after the customer pays. Delivery is paid by the customer. Any payment or tax charges are itemised on each order.
      </p>
    </div>
  );
}

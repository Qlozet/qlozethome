"use client";

// Live illustrations for the vendor payments page, in the vendor console's
// own words (apps/vendor wallet, order drawer, pre-ship panel, withdraw
// modal). Numbers follow the platform's rules: earnings = price − 10%
// commission, reaching the wallet balance 14 days after the customer pays;
// bespoke deposit 50%; withdrawal minimum ₦2,000.

import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { ConsolePanel, naira, useCountUp, useStepLoop } from "./kit";

/** "19 Nov", n days from today — computed on the viewer's device so it never goes stale. */
function dayLabel(n: number) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}
const relative = (n: number) => (n === 0 ? "today" : n === 1 ? "tomorrow" : `in ${n} days`);

/** "19 Nov · in 6 days". The date only appears once the page is running in
 *  the browser, so the prerendered page and the viewer's clock never clash. */
function useWhen() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return (n: number) => (ready ? `${dayLabel(n)} · ${relative(n)}` : relative(n));
}

// ─── Hero: next payouts reaching the wallet ──────────────────────────────

const PAYOUTS = [
  { ref: "QL-2047", part: "Balance", amount: 45000, days: 1 },
  { ref: "QL-2072", part: "Deposit", amount: 36000, days: 6 },
  { ref: "QL-2058", part: "Balance", amount: 45000, days: 11 },
];

export function PayoutBoard() {
  // 0 waiting · 1 release day · 2 in the wallet balance
  const { ref, step } = useStepLoop([2400, 1400, 3000], 2);
  const released = step === 2;
  const wallet = useCountUp(81000, released, 900, 36000);
  const pending = useCountUp(81000, released, 900, 126000);
  const rows = released ? PAYOUTS.slice(1) : PAYOUTS;
  const when = useWhen();
  const onTheWay = rows.reduce((t, r) => t + r.amount, 0);

  return (
    <div ref={ref}>
      <ConsolePanel title="Wallet"
        label="The vendor wallet: Wallet Balance, Pending Earnings, and Next payouts. Each payment reaches your wallet balance 14 days after the customer pays.">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1 rounded-2xl bg-brand-darker p-4 text-white">
            <span className="font-display text-[9px] font-bold uppercase tracking-[0.2em] text-white/55">Wallet Balance</span>
            <span className="font-display text-xl font-semibold tabular-nums sm:text-3xl">{naira(wallet)}</span>
            <span className="mt-2 w-fit rounded-full bg-white px-3 py-1 font-display text-[9px] font-bold uppercase tracking-[0.2em] text-brand-darker">Withdraw</span>
          </div>
          <div className="flex flex-col gap-1 rounded-2xl bg-brand-light p-4">
            <span className="font-display text-[9px] font-bold uppercase tracking-[0.2em] text-[#3A3A3A]/55">Pending Earnings</span>
            <span className="font-display text-xl font-semibold tabular-nums text-[#111] sm:text-3xl">{naira(pending)}</span>
          </div>
        </div>

        <div className="mt-5 flex flex-col">
          <div className="flex items-baseline justify-between">
            <span className="font-display text-sm font-semibold">Next payouts</span>
            <span className="font-ui text-[11px] text-[#3A3A3A]/60 tabular-nums">{naira(onTheWay)} on the way</span>
          </div>
          <span className="mb-1 font-ui text-[11px] text-[#3A3A3A]/60">Each payment reaches your wallet balance 14 days after the customer pays.</span>
          <AnimatePresence initial={false}>
            {rows.map((r, i) => {
              const today = step === 1 && i === 0;
              return (
                <motion.div key={r.ref + r.part} layout
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -40, transition: { duration: 0.35 } }}
                  className={`flex items-center justify-between gap-3 border-b border-black/5 py-3 ${today ? "rounded-xl bg-[#ecf7ef] px-3" : ""}`}>
                  <span className="flex min-w-0 flex-col">
                    <span className={`font-ui text-sm font-medium ${today ? "text-[#1f5c36]" : "text-[#111]"}`}>{when(today ? 0 : r.days)}</span>
                    <span className="font-ui text-[10px] text-[#3A3A3A]/55">Order {r.ref} · {r.part}</span>
                  </span>
                  <span className="font-display text-sm font-semibold tabular-nums">{naira(r.amount)}</span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </ConsolePanel>
    </div>
  );
}

// ─── An order's Payment card ─────────────────────────────────────────────

export function OrderBreakdown() {
  const { ref, step } = useStepLoop([900, 900, 1000, 3400], 3);
  const lines = [
    { k: "Items subtotal", v: "₦50,000", tone: "" },
    { k: "Platform commission", v: "-₦5,000", tone: "text-[#b42318]" },
    { k: "Your earnings", v: "₦45,000", tone: "text-[#1f7a43]" },
  ];
  return (
    <div ref={ref}>
      <ConsolePanel title="Order QL-2047"
        label="An order's Payment card in the vendor console: items subtotal ₦50,000, platform commission -₦5,000, your earnings ₦45,000; delivery is paid by the customer.">
        <span className="font-display text-sm font-semibold">Payment</span>
        <div className="mt-2 flex flex-col">
          {lines.map((l, i) => (
            <motion.div key={l.k} initial={false} animate={{ opacity: step >= i ? 1 : 0, y: step >= i ? 0 : 8 }}
              className="flex items-center justify-between border-b border-black/5 py-3.5">
              <span className={`font-ui text-sm ${i === 2 ? "font-semibold text-[#111]" : "text-[#3A3A3A]/75"}`}>{l.k}</span>
              <span className={`font-display font-semibold tabular-nums ${i === 2 ? "text-xl" : "text-sm"} ${l.tone}`}>{l.v}</span>
            </motion.div>
          ))}
          <motion.p initial={false} animate={{ opacity: step >= 3 ? 1 : 0 }}
            className="pt-3 font-ui text-xs text-[#3A3A3A]/65">
            Delivery (paid by customer): ₦4,000
          </motion.p>
        </div>
      </ConsolePanel>
    </div>
  );
}

// ─── Bespoke: the order agreement, deposit then balance ──────────────────

export function BespokeTimeline() {
  // 0 deposit paid · 1 photos sent, balance requested · 2 balance paid
  const { ref, step } = useStepLoop([2200, 2200, 3000], 2);
  const when = useWhen();
  const balance = step === 0 ? "due when you send photos" : step === 1 ? "requested" : "paid";
  const payouts = useMemo(
    () => [
      { part: "Deposit", amount: 36000, days: 9 },
      ...(step === 2 ? [{ part: "Balance", amount: 36000, days: 14 }] : []),
    ],
    [step],
  );
  return (
    <div ref={ref}>
      <ConsolePanel title="Order QL-2072"
        label="A bespoke order at ₦80,000: the ₦40,000 deposit is paid with the order and the ₦40,000 balance after you send photos of the finished piece. Each part reaches your wallet 14 days after it's paid.">
        <span className="font-display text-sm font-semibold">Order agreement</span>
        <div className="mt-2 flex flex-col">
          {[["Your quote", "₦80,000"], ["Paid with the deposit", "₦40,000"], ["Due after your photos", "₦40,000"], ["Ship within", "14 days of payment"]].map(([k, v]) => (
            <div key={k} className="flex items-center justify-between border-b border-black/5 py-2.5">
              <span className="font-ui text-xs text-[#3A3A3A]/75">{k}</span>
              <span className="font-display text-sm font-semibold tabular-nums">{v}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-1.5 rounded-xl bg-brand-light p-3">
          <span className="font-ui text-xs text-[#111]">Deposit (50%) <span className="font-semibold">₦40,000</span> <span className="text-[#1f5c36]">paid</span></span>
          <span className="font-ui text-xs text-[#111]">Balance <span className="font-semibold">₦40,000</span>{" "}
            <AnimatePresence mode="wait">
              <motion.span key={balance} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className={step === 2 ? "text-[#1f5c36]" : "text-[#7a4a0c]"}>{balance}</motion.span>
            </AnimatePresence>
          </span>
        </div>

        <div className="mt-4 flex flex-col">
          <span className="font-display text-[9px] font-bold uppercase tracking-[0.2em] text-[#3A3A3A]/50">Next payouts</span>
          <AnimatePresence initial={false}>
            {payouts.map((p) => (
              <motion.div key={p.part} layout initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="flex items-center justify-between border-b border-black/5 py-2.5">
                <span className="flex flex-col">
                  <span className="font-ui text-xs font-medium">{when(p.days)}</span>
                  <span className="font-ui text-[10px] text-[#3A3A3A]/55">Order QL-2072 · {p.part}</span>
                </span>
                <span className="font-display text-sm font-semibold tabular-nums">{naira(p.amount)}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </ConsolePanel>
    </div>
  );
}

// ─── Withdraw Earnings ───────────────────────────────────────────────────

export function WithdrawSheet() {
  // 0 open · 1 amount entered · 2 processing · 3 submitted
  const { ref, step } = useStepLoop([1500, 1700, 900, 3000], 3);
  const done = step === 3;
  const balance = useCountUp(31000, done, 800, 81000);
  return (
    <div ref={ref}>
      <ConsolePanel title="Withdraw Earnings"
        label="The Withdraw Earnings dialog: enter an amount to withdraw to your registered bank account; the minimum is ₦2,000.">
        <div className="relative flex flex-col gap-4">
          <p className="font-ui text-xs leading-relaxed text-[#3A3A3A]/75">
            Enter the amount you want to withdraw to your registered bank account. The minimum withdrawal is ₦2,000.
          </p>
          <span className="font-ui text-xs text-[#3A3A3A]/75">Available balance: <span className="font-semibold tabular-nums text-[#111]">{naira(balance)}</span></span>

          <div className="flex flex-col gap-1.5">
            <span className="font-ui text-xs font-medium">Amount</span>
            <div className="flex items-center gap-2 rounded-xl border border-black/15 px-4 py-3">
              <span className="font-ui text-sm text-[#3A3A3A]/60">₦</span>
              <AnimatePresence mode="wait">
                <motion.span key={step >= 1 ? "amt" : "empty"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className={`font-ui text-sm tabular-nums ${step >= 1 ? "font-semibold" : "text-[#3A3A3A]/35"}`}>
                  {step >= 1 ? "50,000" : "Enter amount"}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <div className="grid grid-cols-[1fr_1.6fr] gap-2">
            <span className="rounded-full border border-brand-darker/20 py-3 text-center font-display text-[10px] font-bold uppercase tracking-[0.15em] text-brand-darker">Cancel</span>
            <span className={`rounded-full py-3 text-center font-display text-[10px] font-bold uppercase tracking-[0.15em] text-white transition-colors ${step >= 1 ? "bg-brand-button" : "bg-brand-button/30"}`}>
              {step === 2 ? "Processing…" : step >= 1 ? "Withdraw ₦50,000" : "Withdraw"}
            </span>
          </div>

          <AnimatePresence>
            {done && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="flex items-center gap-2 rounded-xl bg-[#ecf7ef] px-4 py-2.5 font-ui text-xs text-[#1f5c36]">
                <Check className="h-4 w-4" strokeWidth={3} /> Withdrawal request submitted.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </ConsolePanel>
    </div>
  );
}

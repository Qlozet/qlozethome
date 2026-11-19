"use client";

// Live illustrations for the vendor payments page. The numbers follow the
// platform's real rules: earnings = price − commission (10%), available 14
// days after the customer pays; bespoke deposit is 50% of the tailor's price
// and each part follows the same schedule; withdrawal minimum ₦2,000.

import { AnimatePresence, motion } from "framer-motion";
import { CalendarClock, Check, Landmark, MessageCircle, Package, Camera, FileCheck2 } from "lucide-react";
import { ConsolePanel, naira, useCountUp, useStepLoop } from "./kit";

// ─── Hero: earnings that release on a fixed day ──────────────────────────

const RELEASES = [
  { item: "Kaftan", ref: "QL-2047", amount: 45000, when: "in 1 day" },
  { item: "Agbada, deposit", ref: "QL-2051", amount: 36000, when: "in 6 days" },
  { item: "Ankara set", ref: "QL-2058", amount: 45000, when: "in 11 days" },
];

export function PayoutBoard() {
  // 0 waiting · 1 release day · 2 released into the available balance
  const { ref, step } = useStepLoop([2400, 1400, 3000], 2);
  const released = step === 2;
  const available = useCountUp(81000, released, 900, 36000);
  const pending = useCountUp(81000, released, 900, 126000);
  const rows = released ? RELEASES.slice(1) : RELEASES;

  return (
    <div ref={ref}>
      <ConsolePanel title="Earnings"
        label="The vendor earnings page: each order's earnings are released into your available balance 14 days after the customer pays."
        meta={<span className="font-ui text-[10px] text-[#3A3A3A]/60">Released 14 days after payment</span>}>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1 rounded-2xl bg-brand-darker p-4 text-white">
            <span className="font-display text-[9px] font-bold uppercase tracking-[0.25em] text-white/50">Available</span>
            <span className="font-display text-xl font-semibold tabular-nums sm:text-3xl">{naira(available)}</span>
            <span className="mt-2 w-fit rounded-full bg-white px-3 py-1 font-display text-[9px] font-bold uppercase tracking-[0.2em] text-brand-darker">Withdraw</span>
          </div>
          <div className="flex flex-col gap-1 rounded-2xl bg-brand-light p-4">
            <span className="font-display text-[9px] font-bold uppercase tracking-[0.25em] text-[#3A3A3A]/50">Pending</span>
            <span className="font-display text-xl font-semibold tabular-nums text-[#111] sm:text-3xl">{naira(pending)}</span>
            <span className="mt-2 font-ui text-[10px] text-[#3A3A3A]/60">On its way to you</span>
          </div>
        </div>

        <div className="mt-5 flex flex-col">
          <span className="mb-1 font-display text-[9px] font-bold uppercase tracking-[0.25em] text-[#3A3A3A]/50">Upcoming releases</span>
          <AnimatePresence initial={false}>
            {rows.map((r, i) => {
              const today = step === 1 && i === 0;
              return (
                <motion.div key={r.ref} layout
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -40, transition: { duration: 0.35 } }}
                  className={`flex items-center justify-between gap-3 border-b border-black/5 py-3 ${today ? "rounded-xl bg-[#ecf7ef] px-3" : ""}`}>
                  <span className="flex min-w-0 flex-col">
                    <span className="truncate font-ui text-sm font-medium text-[#111]">{r.item}</span>
                    <span className="font-ui text-[10px] text-[#3A3A3A]/50">#{r.ref}</span>
                  </span>
                  <span className="flex flex-col items-end">
                    <span className="font-display text-sm font-semibold tabular-nums">{naira(r.amount)}</span>
                    <span className={`font-ui text-[10px] ${today ? "font-semibold text-[#1f5c36]" : "text-[#3A3A3A]/55"}`}>{today ? "Today" : r.when}</span>
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {released && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="mt-4 flex items-center gap-2 rounded-xl bg-[#ecf7ef] px-4 py-2.5 font-ui text-xs text-[#1f5c36]">
              <Check className="h-4 w-4" strokeWidth={3} /> ₦45,000 from #QL-2047 is now available
            </motion.div>
          )}
        </AnimatePresence>
      </ConsolePanel>
    </div>
  );
}

// ─── Every order, itemised ───────────────────────────────────────────────

export function OrderBreakdown() {
  const { ref, step } = useStepLoop([900, 900, 1000, 3400], 3);
  const lines = [
    { k: "Kaftan, made to measure", v: "₦50,000" },
    { k: "Commission (10%)", v: "−₦5,000", muted: true },
  ];
  return (
    <div ref={ref}>
      <ConsolePanel title="Order #QL-2047"
        label="An order's breakdown: a ₦50,000 kaftan, 10% commission of ₦5,000, and ₦45,000 to you, available 14 days after the customer paid."
        meta={<span className="rounded-full bg-[#ecf7ef] px-2.5 py-1 font-ui text-[10px] font-semibold text-[#1f5c36]">Paid</span>}>
        <div className="flex flex-col">
          {lines.map((l, i) => (
            <motion.div key={l.k} initial={false} animate={{ opacity: step >= i ? 1 : 0, y: step >= i ? 0 : 8 }}
              className="flex items-center justify-between border-b border-black/5 py-3.5">
              <span className={`font-ui text-sm ${l.muted ? "text-[#3A3A3A]/65" : "text-[#111]"}`}>{l.k}</span>
              <span className={`font-display text-sm font-semibold tabular-nums ${l.muted ? "text-[#3A3A3A]/65" : ""}`}>{l.v}</span>
            </motion.div>
          ))}
          <motion.div initial={false} animate={{ opacity: step >= 2 ? 1 : 0, y: step >= 2 ? 0 : 8 }}
            className="flex items-center justify-between py-4">
            <span className="font-display text-base font-semibold">You earn</span>
            <span className="font-display text-2xl font-semibold tabular-nums">₦45,000</span>
          </motion.div>
          <motion.div initial={false} animate={{ opacity: step >= 3 ? 1 : 0, scale: step >= 3 ? 1 : 0.96 }}
            className="flex items-center gap-2.5 rounded-xl bg-brand-light px-4 py-3 font-ui text-xs text-[#3A3A3A]/85">
            <CalendarClock className="h-4 w-4 shrink-0 text-brand-darker" />
            Available 14 days after the customer paid, whatever happens with delivery.
          </motion.div>
        </div>
      </ConsolePanel>
    </div>
  );
}

// ─── Bespoke: a deposit and a balance ────────────────────────────────────

const BESPOKE = [
  { icon: FileCheck2, title: "Quote accepted", text: "The customer pays the deposit: ₦40,000.", earn: "You earn ₦36,000, available 14 days later" },
  { icon: MessageCircle, title: "You make it", text: "Questions go through the order's chat." },
  { icon: Camera, title: "Photos of the finished piece", text: "The customer approves and pays the balance: ₦40,000.", earn: "You earn ₦36,000, available 14 days later" },
  { icon: Package, title: "You ship", text: "Paid in full before it leaves your workshop." },
];

export function BespokeTimeline() {
  const { ref, step } = useStepLoop([1900, 1500, 1900, 2800], 3);
  return (
    <div ref={ref}>
      <ConsolePanel title="Bespoke order #QL-2051"
        label="A bespoke order at ₦80,000: the customer pays a ₦40,000 deposit when they accept your quote and the ₦40,000 balance after approving photos of the finished piece. Each part reaches you 14 days after it's paid."
        meta={<span className="font-ui text-[10px] text-[#3A3A3A]/60">Your price ₦80,000</span>}>
        <ol className="relative flex flex-col gap-5">
          <div className="absolute bottom-3 left-[17px] top-3 w-px bg-black/10" aria-hidden />
          <motion.div className="absolute left-[17px] top-3 w-px origin-top bg-brand-darker" aria-hidden
            initial={false} animate={{ height: `${(step / (BESPOKE.length - 1)) * 92}%` }} transition={{ duration: 0.6 }} />
          {BESPOKE.map((b, i) => {
            const done = i <= step;
            const Icon = b.icon;
            return (
              <li key={b.title} className="relative flex gap-4">
                <span className={`z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-500 ${done ? "border-brand-darker bg-brand-darker text-white" : "border-black/10 bg-white text-[#3A3A3A]/40"}`}>
                  <Icon className="h-4 w-4" />
                </span>
                <span className={`flex flex-col gap-1 pt-1 transition-opacity duration-500 ${done ? "opacity-100" : "opacity-45"}`}>
                  <span className="font-display text-sm font-semibold">{b.title}</span>
                  <span className="font-ui text-xs leading-relaxed text-[#3A3A3A]/70">{b.text}</span>
                  {b.earn && (
                    <span className={`mt-1 w-fit rounded-full px-2.5 py-1 font-ui text-[10px] font-semibold transition-colors duration-500 ${done ? "bg-[#ecf7ef] text-[#1f5c36]" : "bg-black/5 text-[#3A3A3A]/50"}`}>
                      {b.earn}
                    </span>
                  )}
                </span>
              </li>
            );
          })}
        </ol>
      </ConsolePanel>
    </div>
  );
}

// ─── Withdraw to the bank ────────────────────────────────────────────────

export function WithdrawSheet() {
  // 0 open · 1 amount entered · 2 sent
  const { ref, step } = useStepLoop([1500, 1900, 3000], 2);
  const sent = step === 2;
  const balance = useCountUp(31000, sent, 800, 81000);
  return (
    <div ref={ref}>
      <ConsolePanel title="Withdraw"
        label="Withdrawing ₦50,000 of an ₦81,000 available balance to a verified bank account. The minimum is ₦2,000.">
        <div className="flex flex-col gap-4">
          <div className="flex items-end justify-between">
            <span className="flex flex-col">
              <span className="font-display text-[9px] font-bold uppercase tracking-[0.25em] text-[#3A3A3A]/50">Available</span>
              <span className="font-display text-3xl font-semibold tabular-nums">{naira(balance)}</span>
            </span>
            <span className="font-ui text-[10px] text-[#3A3A3A]/55">Minimum ₦2,000</span>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-black/10 px-4 py-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-light text-brand-darker"><Landmark className="h-4 w-4" /></span>
            <span className="flex flex-1 flex-col">
              <span className="font-ui text-sm font-medium">GTBank •••• 4821</span>
              <span className="font-ui text-[10px] text-[#3A3A3A]/55">Your business account</span>
            </span>
            <span className="rounded-full bg-[#ecf7ef] px-2 py-0.5 font-ui text-[9px] font-semibold text-[#1f5c36]">Verified</span>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-black/10 px-4 py-3">
            <span className="font-ui text-xs text-[#3A3A3A]/55">Amount</span>
            <AnimatePresence mode="wait">
              <motion.span key={step >= 1 ? "amt" : "empty"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className={`font-display text-lg font-semibold tabular-nums ${step >= 1 ? "" : "text-[#3A3A3A]/30"}`}>
                {step >= 1 ? "₦50,000" : "₦0"}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className={`flex items-center justify-center gap-2 rounded-full py-4 font-display text-[11px] font-bold uppercase tracking-[0.25em] text-white transition-colors duration-300 ${sent ? "bg-[#2f7a4b]" : step === 1 ? "bg-brand-button" : "bg-brand-button/30"}`}>
            {sent ? <><Check className="h-4 w-4" strokeWidth={3} /> Sent to your bank</> : "Withdraw"}
          </div>
        </div>
      </ConsolePanel>
    </div>
  );
}

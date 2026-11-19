"use client";

// Live illustrations for "Market intelligence", in the vendor console's own
// words: the dashboard (period picker, stat cards, Order Count), the
// Business Assistant answering from the store's own data, an action it
// prepares that only happens when the vendor taps Confirm, the Sunday
// Weekly Digest, and the Customers insight charts.

import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Package, Sparkles, Tag, Wallet } from "lucide-react";
import { ConsolePanel, naira, useCountUp, useStepLoop } from "./kit";

const Badge = ({ v }: { v: string }) => (
  <span className="rounded-full bg-[#ecf7ef] px-1.5 py-[1px] font-ui text-[9px] font-semibold text-[#1f5c36]">{v}</span>
);

// ─── Hero: the dashboard ─────────────────────────────────────────────────

const PERIODS = [
  { label: "Last 7 days", orders: 18, earn: 612000, avg: 2.6, returns: 1, d: ["+24%", "+18%", "+24%", "0%"], bars: [2, 3, 1, 4, 2, 3, 3] },
  { label: "Last 30 days", orders: 71, earn: 2380000, avg: 2.4, returns: 3, d: ["+12%", "+15%", "+12%", "-1"], bars: [9, 14, 12, 17, 19] },
];

export function DashboardScene() {
  const { ref, step } = useStepLoop([3200, 3600], 0);
  const p = PERIODS[step];
  const orders = useCountUp(p.orders, true, 700);
  const earn = useCountUp(p.earn, true, 900);
  const max = Math.max(...p.bars);
  return (
    <div ref={ref}>
      <ConsolePanel title="Dashboard"
        meta={<span className="flex items-center gap-1 rounded-full border border-black/10 bg-white px-2.5 py-1 font-ui text-[10px]">{p.label}<ChevronDown className="h-3 w-3" /></span>}
        label="The vendor dashboard: orders, earnings, average orders per day and returns for the period you pick, each compared with the period before, and charts of your orders.">
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-2">
            {[
              ["Total Orders", Math.round(orders).toLocaleString(), p.d[0]],
              ["Total earnings", naira(earn), p.d[1]],
              ["Average orders per day", p.avg.toFixed(1), p.d[2]],
              ["Total returns", String(p.returns), p.d[3]],
            ].map(([k, v, d]) => (
              <span key={k} className="flex flex-col gap-1 rounded-xl border border-black/10 p-2.5">
                <span className="font-ui text-[9.5px] text-[#3A3A3A]/60">{k}</span>
                <span className="flex items-center justify-between gap-1">
                  <span className="font-display text-base font-semibold tabular-nums">{v}</span>
                  <Badge v={d} />
                </span>
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-2 rounded-xl bg-brand-light/70 p-3">
            <span className="font-display text-[11px] font-semibold">Order Count</span>
            <div className="flex h-24 items-end gap-1.5">
              {p.bars.map((b, i) => (
                <motion.span key={`${step}-${i}`} className="flex-1 rounded-t-md bg-brand-darker"
                  initial={{ height: 0 }} animate={{ height: `${(b / max) * 100}%` }} transition={{ duration: 0.6, delay: i * 0.05 }} />
              ))}
            </div>
          </div>
          <div className="flex gap-1.5">
            {["Sales by audience", "Sales by product kind", "Sales by top location"].map((c) => (
              <span key={c} className="rounded-full bg-black/5 px-2 py-0.5 font-ui text-[9px] text-[#3A3A3A]/75">{c}</span>
            ))}
          </div>
        </div>
      </ConsolePanel>
    </div>
  );
}

// ─── The assistant answers ───────────────────────────────────────────────

const PROMPTS = ["What orders need my attention?", "How were my sales this month?", "What are my top selling products?", "When is my next payout and how much?"];
const TOP = [["Teal kaftan", 14], ["Agbada set", 9], ["Ankara (by the yard)", 7]] as const;

function AssistantShell({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div role="img" aria-label={label}
      className="mx-auto w-full max-w-[440px] overflow-hidden rounded-[2rem] border border-brand-darker/10 bg-white shadow-[0_40px_80px_-40px_rgba(30,16,8,0.35)]">
      <div className="flex items-center gap-2.5 border-b border-black/5 px-5 py-3.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-darker text-white"><Sparkles className="h-4 w-4" /></span>
        <span className="flex flex-col">
          <span className="font-display text-sm font-semibold">Business Assistant</span>
          <span className="font-ui text-[10px] text-[#3A3A3A]/60">Insights on your store · beta</span>
        </span>
      </div>
      <div className="flex min-h-[300px] flex-col gap-3 p-5">{children}</div>
    </div>
  );
}

export function AssistantScene() {
  // 0 suggestions · 1 asked, analysing · 2 answer
  const { ref, step } = useStepLoop([2000, 1300, 4000], 2);
  return (
    <div ref={ref}>
      <AssistantShell label="Ask the Business Assistant about your store, like your top selling products, and it answers from your own sales with a chart.">
        {step === 0 ? (
          <div className="flex flex-col gap-2">
            <span className="font-display text-sm font-semibold">Ask me about your business</span>
            <span className="font-ui text-[11px] text-[#3A3A3A]/65">Sales, earnings, payouts, top products and more.</span>
            {PROMPTS.map((p, i) => (
              <span key={p} className={`rounded-xl border px-3 py-2 font-ui text-[11px] ${i === 2 ? "border-brand-darker bg-brand-light" : "border-black/10"}`}>{p}</span>
            ))}
          </div>
        ) : (
          <>
            <span className="ml-auto rounded-2xl rounded-tr-sm bg-brand-darker px-3 py-2 font-ui text-[11px] text-white">What are my top selling products?</span>
            {step === 1 ? (
              <span className="flex items-center gap-1.5 font-ui text-[11px] text-[#3A3A3A]/60"><Sparkles className="h-3.5 w-3.5 animate-pulse" />Analysing…</span>
            ) : (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-2.5 rounded-2xl rounded-tl-sm bg-brand-light px-3.5 py-3">
                <span className="font-ui text-[11px] leading-relaxed">In the last 30 days your <b>Teal kaftan</b> sold the most, 14 orders and about 31% of your sales. Agbada sets are close behind.</span>
                <div className="flex flex-col gap-1.5 rounded-xl bg-white p-2.5">
                  {TOP.map(([n, v], i) => (
                    <span key={n} className="flex items-center gap-2 font-ui text-[10px]">
                      <span className="w-28 shrink-0 truncate">{n}</span>
                      <span className="h-2 flex-1 overflow-hidden rounded-full bg-black/5">
                        <motion.span className="block h-full rounded-full bg-brand-darker" initial={{ width: 0 }} animate={{ width: `${(v / 14) * 100}%` }} transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }} />
                      </span>
                      <span className="w-4 text-right tabular-nums">{v}</span>
                    </span>
                  ))}
                </div>
                <span className="font-ui text-[11px] leading-relaxed">The kaftan is down to 1 in size M. Want me to update its stock?</span>
              </motion.div>
            )}
          </>
        )}
        <span className="mt-auto rounded-full border border-black/10 px-4 py-2.5 font-ui text-[11px] text-[#3A3A3A]/45">How can I help you?</span>
      </AssistantShell>
    </div>
  );
}

// ─── It prepares, you confirm ────────────────────────────────────────────

export function ActionScene() {
  // 0 waiting · 1 confirmed, done
  const { ref, step } = useStepLoop([2800, 3400], 0);
  const done = step === 1;
  return (
    <div ref={ref}>
      <AssistantShell label="The assistant prepares a change, like updating stock, and nothing happens until you tap Confirm.">
        <span className="ml-auto rounded-2xl rounded-tr-sm bg-brand-darker px-3 py-2 font-ui text-[11px] text-white">Yes, I have 5 more in M.</span>
        <span className="font-ui text-[11px] leading-relaxed text-[#3A3A3A]/85">Here&apos;s the change. Tap Confirm and I&apos;ll update it.</span>
        <div className="flex flex-col gap-2.5 rounded-2xl border border-black/10 p-3.5">
          <span className="flex items-center justify-between">
            <span className="flex items-center gap-2 font-ui text-xs font-semibold"><Package className="h-4 w-4 text-brand-darker" />Update stock</span>
            <AnimatePresence mode="wait">
              <motion.span key={String(done)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className={`rounded-full px-2 py-0.5 font-ui text-[9.5px] font-semibold ${done ? "bg-[#ecf7ef] text-[#1f5c36]" : "bg-[#fdf3e3] text-[#7a4a0c]"}`}>
                {done ? "Done" : "Waiting for you"}
              </motion.span>
            </AnimatePresence>
          </span>
          <span className="flex items-center justify-between rounded-lg bg-brand-light px-3 py-2 font-ui text-[11px]">
            <span>Teal kaftan · M</span>
            <span className="tabular-nums"><span className="text-[#3A3A3A]/50 line-through">1</span> → <b>6</b></span>
          </span>
          {done ? (
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-1.5 font-ui text-[11px] text-[#1f5c36]">
              <Check className="h-3.5 w-3.5" strokeWidth={3} />Stock updated.
            </motion.span>
          ) : (
            <span className="flex gap-2">
              <span className="flex-1 rounded-full bg-brand-button py-2 text-center font-display text-[9.5px] font-bold uppercase tracking-[0.15em] text-white">Confirm</span>
              <span className="rounded-full border border-black/15 px-4 py-2 font-display text-[9.5px] font-bold uppercase tracking-[0.15em]">Dismiss</span>
            </span>
          )}
        </div>
        <div className="mt-auto flex flex-wrap gap-1.5">
          {["Confirm order", "Send quote", "Update stock", "Create discount"].map((a) => (
            <span key={a} className="rounded-full bg-black/5 px-2 py-0.5 font-ui text-[9px] text-[#3A3A3A]/70">{a}</span>
          ))}
        </div>
      </AssistantShell>
    </div>
  );
}

// ─── Weekly Digest ───────────────────────────────────────────────────────

const RECS = [
  { icon: Package, text: "Restock the Teal kaftan in M and L. It sold out twice this week.", to: "Products" },
  { icon: Tag, text: "Two agbada listings had no orders in 30 days. A short discount could move them.", to: "Discounts" },
  { icon: Wallet, text: "₦184,000 reaches your wallet on Friday.", to: "Wallet" },
];

export function DigestScene() {
  const { ref, step } = useStepLoop([1400, 3800], 1);
  return (
    <div ref={ref}>
      <ConsolePanel title="Weekly Digest"
        meta={<span className="flex items-center gap-1.5 font-ui text-[10px] text-[#3A3A3A]/60"><span className="h-1.5 w-1.5 rounded-full bg-[#b42318]" />New · Sunday</span>}
        label="Every Sunday the Weekly Digest sums up your week in a few sentences and suggests what to do next, each with a link to the right page.">
        <div className="flex flex-col gap-3">
          <span className="font-ui text-[11.5px] leading-relaxed text-[#3A3A3A]/85">
            A strong week: 18 orders, up 24% on last week, and every one shipped on time. Kaftans drove most of it, with Lagos and Abuja your busiest areas.
          </span>
          {RECS.map((r, i) => (
            <motion.span key={r.to} initial={false} animate={{ opacity: step >= 1 ? 1 : 0, x: step >= 1 ? 0 : 12 }} transition={{ delay: i * 0.2 }}
              className="flex items-start gap-2.5 rounded-xl border border-black/10 p-2.5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-light text-brand-darker"><r.icon className="h-3.5 w-3.5" /></span>
              <span className="flex flex-1 flex-col gap-0.5">
                <span className="font-ui text-[11px] leading-snug">{r.text}</span>
                <span className="font-ui text-[10px] font-semibold text-brand-darker">Go to {r.to} →</span>
              </span>
            </motion.span>
          ))}
        </div>
      </ConsolePanel>
    </div>
  );
}

// ─── Customers ───────────────────────────────────────────────────────────

const LOCS = [["Lagos", 46], ["Abuja", 22], ["Rivers", 14], ["Oyo", 9], ["Other", 9]] as const;
const WEARS = [["Kaftans", 38], ["Agbada", 27], ["Sets", 21], ["Fabric", 14]] as const;

export function CustomersScene() {
  const { ref, step } = useStepLoop([1200, 3600], 1);
  const on = step >= 1;
  return (
    <div ref={ref}>
      <ConsolePanel title="Customers"
        meta={<span className="font-ui text-[10px] text-[#3A3A3A]/60">Total Customers <b className="text-[#111]">212</b></span>}
        label="The Customers page: where your customers are, what they shop and who they are, plus each customer's orders and measurements.">
        <div className="grid grid-cols-[minmax(0,1fr)] gap-4 sm:grid-cols-2">
          {[["Customer Locations", LOCS], ["What They Shop", WEARS]].map(([title, rows]) => (
            <div key={title as string} className="flex flex-col gap-2">
              <span className="font-display text-[11px] font-semibold">{title as string}</span>
              {(rows as readonly (readonly [string, number])[]).map(([k, v], i) => (
                <span key={k} className="flex items-center gap-2 font-ui text-[10px]">
                  <span className="w-12 shrink-0">{k}</span>
                  <span className="h-2 flex-1 overflow-hidden rounded-full bg-black/5">
                    <motion.span className="block h-full rounded-full bg-brand-darker" initial={false}
                      animate={{ width: on ? `${v * 2}%` : "0%" }} transition={{ duration: 0.7, delay: i * 0.07 }} />
                  </span>
                  <span className="w-7 text-right tabular-nums text-[#3A3A3A]/65">{v}%</span>
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between rounded-xl bg-brand-light/70 px-3 py-2.5">
          <span className="flex flex-col">
            <span className="font-ui text-[11px] font-semibold">Ada O.</span>
            <span className="font-ui text-[10px] text-[#3A3A3A]/60">Lekki, Lagos · 4 orders</span>
          </span>
          <span className="flex gap-1.5">
            {["Measurement", "Order history"].map((t) => (
              <span key={t} className="rounded-full border border-black/10 bg-white px-2 py-0.5 font-ui text-[9px]">{t}</span>
            ))}
          </span>
        </div>
      </ConsolePanel>
    </div>
  );
}

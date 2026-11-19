"use client";

// Live illustrations for "Ship smarter", in the vendor console's own words:
// the order drawer (Confirm Order → Fulfill Order → Print Label, booked with
// the courier the customer chose), live courier quotes at checkout, the
// automatic updates the courier's scans send, and the Ship by deadline with
// its late charge (5% a day of the items, up to 25%, paid to the customer).

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Bell, Check, Copy, Loader2, Printer, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import { ConsolePanel, PhoneFrame, naira, useStepLoop } from "./kit";

const Pill = ({ tone, children }: { tone: "amber" | "green" | "blue" | "grey" | "red"; children: React.ReactNode }) => {
  const c = {
    amber: "bg-[#fdf3e3] text-[#7a4a0c]",
    green: "bg-[#ecf7ef] text-[#1f5c36]",
    blue: "bg-[#eaf1fb] text-[#1d4e89]",
    grey: "bg-black/5 text-[#3A3A3A]/75",
    red: "bg-[#fdecea] text-[#b42318]",
  }[tone];
  return <span className={`whitespace-nowrap rounded-full px-2 py-0.5 font-ui text-[10px] font-semibold ${c}`}>{children}</span>;
};

/** Day names from offsets, only after load so the prerender never clashes with the viewer's clock. */
function useDay() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return (n: number) => {
    if (!ready) return null;
    const d = new Date();
    d.setDate(d.getDate() + n);
    return d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" }).replace(",", "");
  };
}

// ─── Hero: the order drawer ──────────────────────────────────────────────

export function OrderDrawerScene() {
  // 0 new order · 1 confirmed · 2 creating label · 3 label ready, print
  const { ref, step } = useStepLoop([2000, 1600, 1200, 3600], 3);
  const status = step === 0 ? ["In Review", "amber"] : ["Processing", "blue"];
  return (
    <div ref={ref}>
      <ConsolePanel title="Order QL-2047"
        meta={<Pill tone={status[1] as "amber" | "blue"}>{status[0]}</Pill>}
        label="An order in the Qlozet vendor console: confirm it, tap Fulfill Order to book the courier the customer chose, then print the shipping label.">
        <div className="relative flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="relative h-14 w-11 shrink-0 overflow-hidden rounded-lg bg-[#d8cdbf]">
              <Image src="/image/bespoke-kaftan-brown-2.png" alt="" fill className="object-cover" sizes="44px" />
            </span>
            <span className="flex min-w-0 flex-1 flex-col">
              <span className="font-ui text-xs font-semibold">Kaftan · Size L</span>
              <span className="font-ui text-[10px] text-[#3A3A3A]/60">Ada O. · Lekki, Lagos</span>
            </span>
            <span className="font-display text-sm font-semibold">₦50,000</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-1 rounded-xl bg-brand-light/70 p-3">
              <span className="font-display text-[11px] font-semibold">Confirmation</span>
              <span className="font-ui text-[10px] text-[#3A3A3A]/70">Status <b className="text-[#111]">{step === 0 ? "Awaiting Confirmation" : "Confirmed"}</b></span>
              <span className="font-ui text-[10px] text-[#3A3A3A]/70">{step === 0 ? "Confirm in 21h" : "Fulfill by in 3 days"}</span>
            </div>
            <div className="flex flex-col gap-1 rounded-xl bg-brand-light/70 p-3">
              <span className="flex items-center justify-between font-display text-[11px] font-semibold">Shipment
                {step === 3 && <Pill tone="green">Ready to Ship</Pill>}
              </span>
              <span className="font-ui text-[10px] text-[#3A3A3A]/70">Courier <b className="text-[#111]">Swift Courier</b></span>
              <span className="flex items-center gap-1 font-ui text-[10px] text-[#3A3A3A]/70">Tracking #
                <AnimatePresence mode="wait">
                  {step === 3 ? (
                    <motion.b key="t" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-1 tabular-nums text-[#111]">SC8812-4470 <Copy className="h-2.5 w-2.5" /></motion.b>
                  ) : (
                    <motion.span key="d" exit={{ opacity: 0 }}>…</motion.span>
                  )}
                </AnimatePresence>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-0.5 rounded-xl border border-black/10 px-3 py-2.5">
            <span className="font-display text-[11px] font-semibold">Delivering to</span>
            <span className="font-ui text-[10px] leading-relaxed text-[#3A3A3A]/70">Ada O. · Lekki, Lagos. Qlozet&apos;s courier has the full address and delivers it.</span>
          </div>

          <div className="flex gap-2 pt-1">
            {step === 0 ? (
              <>
                <span className="flex-1 rounded-full bg-[#2f7a4b] py-2.5 text-center font-display text-[10px] font-bold uppercase tracking-[0.15em] text-white">Confirm Order</span>
                <span className="rounded-full border border-black/15 px-5 py-2.5 font-display text-[10px] font-bold uppercase tracking-[0.15em] text-[#3A3A3A]">Reject</span>
              </>
            ) : step === 3 ? (
              <motion.span initial={{ scale: 0.96 }} animate={{ scale: 1 }}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-button py-2.5 font-display text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                <Printer className="h-3.5 w-3.5" /> Print Label
              </motion.span>
            ) : (
              <span className="flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-button py-2.5 font-display text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                {step === 2 ? <><Loader2 className="h-3.5 w-3.5 animate-spin" /> Creating label...</> : <><Truck className="h-3.5 w-3.5" /> Fulfill Order</>}
              </span>
            )}
          </div>

          <AnimatePresence>
            {step === 3 && (
              <motion.span initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="absolute -top-2 right-0 flex items-center gap-1.5 rounded-xl bg-[#1b1714] px-3 py-2 font-ui text-[11px] text-white shadow-lg">
                <Check className="h-3.5 w-3.5 text-[#7fd49b]" strokeWidth={3} /> Shipping label created!
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </ConsolePanel>
    </div>
  );
}

// ─── Courier quotes at checkout ──────────────────────────────────────────

const COURIERS = [
  { name: "Swift Courier", tag: "Cheapest", days: "3–4 days", price: 3500 },
  { name: "Metro Express", tag: "Fastest", days: "1–2 days", price: 6200 },
  { name: "Coastline Logistics", days: "2–3 days", price: 4800 },
];

export function CourierQuotesScene() {
  // 0 loading · 1 quotes · 2 chosen · 3 the vendor's view
  const { ref, step } = useStepLoop([1200, 1800, 1800, 3200], 3);
  return (
    <div ref={ref} className="grid grid-cols-[minmax(0,1fr)] items-center gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <PhoneFrame label="At checkout the shopper sees live courier quotes from your address to theirs and picks one.">
        <div className="flex h-full flex-col gap-2.5 px-3.5 pb-4 pt-11">
          <span className="font-display text-sm font-semibold">Checkout</span>
          <span className="font-display text-[11px] font-semibold">Shipping</span>
          <span className="flex items-baseline justify-between">
            <span className="font-display text-[11px] font-semibold">Adire Studio</span>
            <span className="font-ui text-[9px] text-[#3A3A3A]/55">from Yaba, Lagos</span>
          </span>
          {step === 0 ? (
            <span className="rounded-xl bg-brand-light px-3 py-4 font-ui text-[10px] text-[#3A3A3A]/60">Loading shipping rates…</span>
          ) : (
            COURIERS.map((c, i) => {
              const on = step >= 2 && i === 0;
              return (
                <motion.span key={c.name} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }}
                  className={`flex items-center gap-2 rounded-xl border p-2 transition-colors ${on ? "border-brand-darker bg-brand-light" : "border-black/10"}`}>
                  <span className={`h-3 w-3 shrink-0 rounded-full border-2 ${on ? "border-brand-darker bg-brand-darker" : "border-black/20"}`} />
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="flex items-center gap-1 font-ui text-[10px] font-medium">{c.name}
                      {c.tag && <span className={`rounded-full px-1 text-[7.5px] font-semibold ${c.tag === "Cheapest" ? "bg-[#ecf7ef] text-[#1f5c36]" : "bg-[#eaf1fb] text-[#1d4e89]"}`}>{c.tag}</span>}
                    </span>
                    <span className="font-ui text-[8.5px] text-[#3A3A3A]/60">Arrives in {c.days}</span>
                  </span>
                  <span className="font-display text-[11px] font-semibold tabular-nums">{naira(c.price)}</span>
                </motion.span>
              );
            })
          )}
          <span className="mt-auto flex justify-between border-t border-black/5 pt-2 font-ui text-[10px]">
            <span className="text-[#3A3A3A]/70">Total Shipping</span><b>{step >= 2 ? "₦3,500" : "…"}</b>
          </span>
          <span className={`rounded-full py-2 text-center font-display text-[8px] font-bold uppercase tracking-[0.15em] text-white ${step >= 2 ? "bg-brand-button" : "bg-brand-button/30"}`}>
            {step >= 2 ? "Pay ₦53,500" : "Select Shipping to Continue"}
          </span>
        </div>
      </PhoneFrame>
      <motion.div initial={false} animate={{ opacity: step === 3 ? 1 : 0.35, y: step === 3 ? 0 : 8 }}
        className="flex flex-col gap-2 rounded-2xl border border-brand-darker/10 bg-white p-4 shadow-[0_30px_60px_-40px_rgba(30,16,8,0.4)]">
        <span className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3A3A3A]/50">Your order view</span>
        <span className="font-display text-sm font-semibold">Payment</span>
        {[["Items", "₦50,000"], ["Delivery (paid by customer)", "₦3,500"]].map(([k, v]) => (
          <span key={k} className="flex justify-between gap-2 font-ui text-[11px]"><span className="text-[#3A3A3A]/70">{k}</span><b className="tabular-nums">{v}</b></span>
        ))}
        <span className="flex justify-between gap-2 border-t border-black/5 pt-2 font-ui text-[11px]"><span className="text-[#3A3A3A]/70">Courier</span><b>Swift Courier</b></span>
      </motion.div>
    </div>
  );
}

// ─── Updates, sent by the courier's scans ────────────────────────────────

const STAGES: { badge: string; tone: "green" | "blue"; title: string; body: string }[] = [
  { badge: "Shipped", tone: "blue", title: "Your order is on its way!", body: "Order #QL-2047 is now in transit. Tracking SC8812-4470." },
  { badge: "In Transit", tone: "blue", title: "Out for delivery today", body: "A parcel from order #QL-2047 is out for delivery." },
  { badge: "Delivered", tone: "green", title: "Order delivered!", body: "Order #QL-2047 has been delivered. Enjoy your purchase!" },
];

export function ShipmentUpdatesScene() {
  const { ref, step } = useStepLoop([2200, 2200, 3200], 2);
  const s = STAGES[step];
  return (
    <div ref={ref} className="mx-auto flex w-full max-w-[480px] flex-col gap-4">
      <ConsolePanel title="Orders" meta={<span className="font-ui text-[10px] text-[#3A3A3A]/60">Updated by the courier</span>}
        label="Once the courier collects, every scan updates the order for you and sends the customer a notification and an email. You don't mark anything by hand.">
        <div className="flex items-center justify-between gap-3">
          <span className="flex flex-col">
            <span className="font-ui text-xs font-semibold">QL-2047 · Kaftan</span>
            <span className="font-ui text-[10px] text-[#3A3A3A]/60">Swift Courier · SC8812-4470</span>
          </span>
          <AnimatePresence mode="wait">
            <motion.span key={s.badge} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
              <Pill tone={s.tone}>{s.badge}</Pill>
            </motion.span>
          </AnimatePresence>
        </div>
        <div className="mt-4 flex gap-1.5">
          {["Ready to Ship", "Shipped", "In Transit", "Delivered"].map((b, i) => (
            <span key={b} className={`h-1.5 flex-1 rounded-full transition-colors duration-500 ${i <= step + 1 ? "bg-brand-darker" : "bg-black/10"}`} />
          ))}
        </div>
      </ConsolePanel>
      <AnimatePresence mode="wait">
        <motion.div key={s.title} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
          className="ml-auto flex w-[88%] items-start gap-3 rounded-2xl bg-[#1b1714] p-3.5 text-white shadow-xl">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10"><Bell className="h-4 w-4" /></span>
          <span className="flex flex-col gap-0.5">
            <span className="font-ui text-[10px] uppercase tracking-[0.15em] text-white/50">Qlozet · to your customer</span>
            <span className="font-ui text-xs font-semibold">{s.title}</span>
            <span className="font-ui text-[11px] text-white/70">{s.body}</span>
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─── Ship by ─────────────────────────────────────────────────────────────

export function ShipByScene() {
  // 0 the list · 1 the late order opened
  const { ref, step } = useStepLoop([2600, 3800], 1);
  const day = useDay();
  const rows = [
    { o: "QL-2051", item: "Agbada set", pill: <Pill tone="grey">{day(3) ? `Ship by ${day(3)}` : "Ship in 3 days"}</Pill> },
    { o: "QL-2049", item: "Kaftan", pill: <Pill tone="amber">Ship today</Pill> },
    { o: "QL-2072", item: "Bespoke kaftan", pill: <Pill tone="grey">Awaiting balance</Pill> },
    { o: "QL-2044", item: "Aso-oke cap", pill: <Pill tone="red">1 day late</Pill> },
  ];
  return (
    <div ref={ref}>
      <ConsolePanel title="Orders"
        label="Each order shows its Ship by date. Ship late and 5% of the items a day comes off your earnings, up to 25%, paid to the customer. Clocks pause while you wait on the customer.">
        <div className="relative flex flex-col">
          <span className="grid grid-cols-[1fr_auto] border-b border-black/5 pb-2 font-ui text-[9px] font-semibold uppercase tracking-[0.15em] text-[#3A3A3A]/50">
            <span>Order</span><span>Ship by</span>
          </span>
          {rows.map((r, i) => (
            <motion.span key={r.o} animate={{ opacity: step === 1 && i !== 3 ? 0.35 : 1 }}
              className="grid grid-cols-[1fr_auto] items-center border-b border-black/5 py-2.5">
              <span className="flex flex-col"><span className="font-ui text-xs font-medium">{r.o}</span><span className="font-ui text-[10px] text-[#3A3A3A]/60">{r.item}</span></span>
              {r.pill}
            </motion.span>
          ))}
          <AnimatePresence>
            {step === 1 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="mt-3 flex flex-col gap-1.5 rounded-xl bg-[#fdecea] p-3">
                <span className="font-ui text-[11px] font-semibold text-[#b42318]">Late penalty applied: ₦1,000 (1 day late)</span>
                <span className="font-ui text-[10.5px] leading-relaxed text-[#7a1d14]">
                  Shipping late costs ₦1,000 a day from your earnings, up to ₦5,000, paid to the customer. If it still has not shipped 7 days after its date, the order is cancelled and the customer refunded.
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </ConsolePanel>
    </div>
  );
}

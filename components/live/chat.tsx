"use client";

// Live illustrations for "Chat with customers": the bespoke order chat as
// the vendor console and the shop show it. One thread per bespoke order;
// it opens while the order is in production or transit; each side gets a
// notification ("New message on {ref}" / "Your tailor replied about {ref}").

import { AnimatePresence, motion } from "framer-motion";
import { Bell, Lock, MessageCircle, SendHorizontal } from "lucide-react";
import { ConsolePanel, PhoneFrame, useStepLoop } from "./kit";

type Msg = { from: "customer" | "vendor"; text: string; time: string };

const THREAD: Msg[] = [
  { from: "customer", text: "Can the sleeves end just above the wrist? I'll wear a watch.", time: "10:24" },
  { from: "vendor", text: "Yes. I'll take them to 60 cm and keep the cuff plain so it sits well.", time: "10:31" },
  { from: "customer", text: "Perfect. And the embroidery in gold, as in the design?", time: "10:33" },
  { from: "vendor", text: "Gold thread, as drawn. I'll send photos of the finished piece before it ships.", time: "10:40" },
];

function Bubble({ m, mine }: { m: Msg; mine: boolean }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
      className={`flex max-w-[82%] flex-col gap-0.5 rounded-2xl px-3 py-2 ${mine ? "self-end bg-brand-darker text-white" : "self-start border border-black/10 bg-[#f6f4f2] text-[#111]"}`}>
      <span className="font-ui text-[11.5px] leading-snug">{m.text}</span>
      <span className={`self-end font-ui text-[9px] ${mine ? "text-white/60" : "text-[#3A3A3A]/50"}`}>{m.time}</span>
    </motion.div>
  );
}

// ─── Hero: the vendor's chat on a bespoke order ──────────────────────────

export function VendorChat() {
  const { ref, step } = useStepLoop([1300, 1500, 1500, 1500, 3000], 4);
  const shown = THREAD.slice(0, Math.min(step, THREAD.length));
  return (
    <div ref={ref}>
      <ConsolePanel title="Ada O."
        label="The order chat in the vendor console: a conversation with the customer about sleeve length and embroidery on their bespoke kaftan."
        meta={<span className="font-ui text-[10px] text-[#3A3A3A]/60">Order QL-2051</span>}>
        <div className="flex min-h-[290px] flex-col gap-2">
          {shown.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-1 text-center">
              <span className="font-display text-sm font-semibold">No messages yet</span>
              <span className="max-w-[260px] font-ui text-[11px] text-[#3A3A3A]/60">Message the customer about fit, fabric, and progress on this bespoke order.</span>
            </div>
          ) : (
            <AnimatePresence initial={false}>
              {shown.map((m) => <Bubble key={m.time} m={m} mine={m.from === "vendor"} />)}
            </AnimatePresence>
          )}
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-full border border-black/10 py-1.5 pl-4 pr-1.5">
          <span className="flex-1 font-ui text-xs text-[#3A3A3A]/40">Type a message</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-button text-white"><SendHorizontal className="h-3.5 w-3.5" /></span>
        </div>
      </ConsolePanel>
    </div>
  );
}

// ─── The customer's side ─────────────────────────────────────────────────

export function CustomerChat() {
  const { ref, step } = useStepLoop([1400, 1500, 1500, 3200], 3);
  const shown = THREAD.slice(0, Math.min(step + 1, THREAD.length));
  return (
    <div ref={ref}>
      <PhoneFrame label="The same conversation in the Qlozet shop, from the customer's side: their messages on the right, the tailor's on the left.">
        <div className="flex h-full flex-col px-3 pb-4 pt-11">
          <div className="flex flex-col border-b border-black/5 pb-2 text-center">
            <span className="font-display text-[13px] font-semibold">Adire Studio</span>
            <span className="font-ui text-[9.5px] text-[#3A3A3A]/55">Order QL-2051</span>
          </div>
          <div className="flex flex-1 flex-col justify-end gap-1.5 overflow-hidden py-2">
            <AnimatePresence initial={false}>
              {shown.map((m) => <Bubble key={m.time} m={m} mine={m.from === "customer"} />)}
            </AnimatePresence>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-black/10 py-1 pl-3 pr-1">
            <span className="flex-1 font-ui text-[10.5px] text-[#3A3A3A]/40">Message your tailor…</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-button text-white"><SendHorizontal className="h-3 w-3" /></span>
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}

// ─── It opens when the work starts ───────────────────────────────────────

export function ChatOpens() {
  // 0 pending: locked · 1 processing: open
  const { ref, step } = useStepLoop([2600, 3200], 1);
  const open = step === 1;
  return (
    <div ref={ref}>
      <ConsolePanel title="Order QL-2051 · Kaftan"
        label="The chat is locked until the order is in production; once the tailor starts work it opens for both sides and stays open while the order is in transit."
        meta={
          <AnimatePresence mode="wait">
            <motion.span key={open ? "p" : "q"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className={`rounded-full px-2.5 py-1 font-ui text-[10px] font-semibold ${open ? "bg-[#ecf7ef] text-[#1f5c36]" : "bg-[#fdf3e3] text-[#7a4a0c]"}`}>
              {open ? "Processing" : "Pending"}
            </motion.span>
          </AnimatePresence>
        }>
        <div className="flex min-h-[200px] flex-col items-center justify-center gap-3 rounded-xl bg-brand-light/60 p-5 text-center">
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div key="open" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex w-full flex-col gap-2">
                <Bubble m={THREAD[0]} mine={false} />
                <span className="font-ui text-[11px] text-[#3A3A3A]/60">The chat is open while you make it and while it&apos;s on the way.</span>
              </motion.div>
            ) : (
              <motion.div key="locked" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#3A3A3A]/60"><Lock className="h-4 w-4" /></span>
                <span className="max-w-[260px] font-ui text-xs text-[#3A3A3A]/75">Chat opens while the order is in production or transit.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </ConsolePanel>
    </div>
  );
}

// ─── Never miss a message ────────────────────────────────────────────────

export function ChatAlerts() {
  // 0 quiet · 1 vendor notified · 2 reply, customer notified
  const { ref, step } = useStepLoop([1500, 2400, 3000], 2);
  return (
    <div ref={ref}>
      <ConsolePanel title="Orders"
        label="New messages show as a count on the order's Message button and as a notification: 'New message on QL-2051' for the tailor, 'Your tailor replied about QL-2051' for the customer.">
        <div className="flex items-center justify-between rounded-xl border border-black/10 px-3 py-3">
          <span className="flex flex-col">
            <span className="font-ui text-sm font-medium">QL-2051 · Kaftan</span>
            <span className="font-ui text-[10px] text-[#3A3A3A]/55">Ada O. · Bespoke</span>
          </span>
          <span className="relative flex items-center gap-1 rounded-full bg-brand-darker px-3 py-1.5 font-ui text-[11px] font-semibold text-white">
            <MessageCircle className="h-3.5 w-3.5" /> Message
            <AnimatePresence>
              {step === 1 && (
                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                  className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#d92d20] px-1 font-ui text-[10px] font-bold text-white">1</motion.span>
              )}
            </AnimatePresence>
          </span>
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <AnimatePresence>
            {step >= 1 && (
              <motion.div key="vendor" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="flex items-start gap-2.5 rounded-xl bg-brand-light px-3 py-2.5">
                <Bell className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-darker" />
                <span className="flex flex-col">
                  <span className="font-ui text-xs font-semibold">New message on QL-2051</span>
                  <span className="font-ui text-[11px] text-[#3A3A3A]/70">Can the sleeves end just above the wrist? I&apos;ll wear a watch.</span>
                </span>
              </motion.div>
            )}
            {step === 2 && (
              <motion.div key="customer" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="flex items-start gap-2.5 rounded-xl border border-black/10 px-3 py-2.5">
                <Bell className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2f7a4b]" />
                <span className="flex flex-col">
                  <span className="font-ui text-[10px] uppercase tracking-[0.15em] text-[#3A3A3A]/50">The customer sees</span>
                  <span className="font-ui text-xs font-semibold">Your tailor replied about QL-2051</span>
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </ConsolePanel>
    </div>
  );
}

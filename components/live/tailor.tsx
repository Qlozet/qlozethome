"use client";

// Live illustrations for the vendor "Customer & measurement" page, in the
// vendor console's own words (apps/vendor order drawer: Body Measurement
// card, ask dialog, Pre-ship Approval, quote drawer). Vendors see a short
// name and area only; measurements are the copy locked at order time.

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Check, ImagePlus, MessageCircle, Printer, TriangleAlert } from "lucide-react";
import { useEffect, useState } from "react";
import { ConsolePanel, useCountUp, useStepLoop } from "./kit";

function Row({ label, value, delay, verify = false }: { label: string; value: number; delay: number; verify?: boolean }) {
  const [go, setGo] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setGo(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  const v = useCountUp(value, go, 700);
  return (
    <div className="flex items-center justify-between border-b border-black/5 py-2">
      <span className="flex items-center gap-2 font-ui text-xs text-[#3A3A3A]/75">
        {label}
        {verify && <span className="rounded-full bg-[#fdf3e3] px-1.5 py-[1px] font-ui text-[9px] font-semibold text-[#7a4a0c]">Verify</span>}
      </span>
      <span className="font-display text-sm font-semibold tabular-nums">{Math.round(v)} <span className="font-ui text-[10px] font-normal text-[#3A3A3A]/50">cm</span></span>
    </div>
  );
}

function MeasureHeader({ set, method }: { set: string; method: string }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <span className="font-display text-sm font-semibold">Body Measurement</span>
        <span className="flex rounded-full bg-brand-light p-0.5 font-ui text-[10px]">
          <span className="rounded-full bg-white px-2 py-0.5 font-semibold shadow-sm">cm</span>
          <span className="px-2 py-0.5 text-[#3A3A3A]/50">in</span>
        </span>
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-1.5">
        <span className="font-ui text-xs font-medium">{set}</span>
        <span className="rounded-full bg-brand-light px-2 py-0.5 font-ui text-[9.5px] text-[#3A3A3A]/75">Locked at order time</span>
        <span className="rounded-full bg-brand-light px-2 py-0.5 font-ui text-[9.5px] text-[#3A3A3A]/75">{method}</span>
      </div>
    </>
  );
}

// ─── Hero: an order with the customer's measurements ────────────────────

const ORDER_MEASURES = [
  ["Chest", 104], ["Waist", 88], ["Hip", 102], ["Shoulder", 48], ["Sleeve length", 62], ["Kaftan length", 132],
] as const;

export function OrderMeasurements() {
  const { ref, step } = useStepLoop([2800, 3200], 1);
  const [cycle, setCycle] = useState(0);
  useEffect(() => {
    if (step === 0) setCycle((c) => c + 1);
  }, [step]);
  return (
    <div ref={ref}>
      <ConsolePanel title="Order QL-2051 · Kaftan"
        label="A bespoke order in the vendor console: the customer's short name and delivery area, a Message button for the order chat, and the Body Measurement card with the set locked at order time."
        meta={<span className="flex items-center gap-1 rounded-full bg-brand-darker px-2.5 py-1 font-ui text-[10px] font-semibold text-white"><MessageCircle className="h-3 w-3" /> Message</span>}>
        <div className="grid grid-cols-2 gap-3 rounded-xl bg-brand-light/70 p-3">
          <span className="flex flex-col">
            <span className="font-ui text-[10px] text-[#3A3A3A]/55">Customer</span>
            <span className="font-display text-sm font-semibold">Ada O.</span>
          </span>
          <span className="flex flex-col">
            <span className="font-ui text-[10px] text-[#3A3A3A]/55">Delivering to</span>
            <span className="font-display text-sm font-semibold">Lekki, Lagos</span>
          </span>
        </div>
        <div className="mt-5">
          <MeasureHeader set="My body scan" method="From a body scan" />
          <div key={cycle} className="mt-1 flex flex-col">
            {ORDER_MEASURES.map(([k, v], i) => <Row key={k} label={k} value={v} delay={i * 150} />)}
          </div>
          <motion.div initial={false} animate={{ opacity: step === 1 ? 1 : 0.4 }} className="mt-3 flex justify-end">
            <span className="flex items-center gap-1 rounded-full border border-black/10 px-3 py-1 font-ui text-[10px] text-[#3A3A3A]/75"><Printer className="h-3 w-3" /> Print</span>
          </motion.div>
        </div>
      </ConsolePanel>
    </div>
  );
}

// ─── What this garment needs: confirm before cutting ─────────────────────

const TOP = [
  ["Chest", 96], ["Waist", 80], ["Shoulder", 44], ["Arm length", 61], ["Torso length", 70, true],
] as const;

export function NeedsCheck() {
  const { ref, step } = useStepLoop([2200, 3600], 1);
  const [cycle, setCycle] = useState(0);
  useEffect(() => {
    if (step === 0) setCycle((c) => c + 1);
  }, [step]);
  return (
    <div ref={ref}>
      <ConsolePanel title="Order QL-2063 · Top"
        label="The Body Measurement card flags a number to verify. For this top it says: confirm before cutting, torso length; you may also want neck and bicep. A link lets you ask the customer about these.">
        <MeasureHeader set="My estimate" method="Estimate, partly corrected" />
        <div key={cycle} className="mt-1 flex flex-col">
          {TOP.map(([k, v, verify], i) => <Row key={k} label={k} value={v} delay={i * 140} verify={!!verify} />)}
        </div>
        <motion.div initial={false} animate={{ opacity: step === 1 ? 1 : 0, y: step === 1 ? 0 : 8 }}
          className="mt-4 flex flex-col gap-1.5 rounded-xl bg-[#fdf3e3] p-3">
          <span className="flex items-center gap-1.5 font-display text-xs font-semibold text-[#7a4a0c]"><TriangleAlert className="h-3.5 w-3.5" /> For this top</span>
          <span className="font-ui text-[11px] text-[#5a3a06]">Confirm before cutting: torso length</span>
          <span className="font-ui text-[11px] text-[#5a3a06]/80">You may also want: neck, bicep</span>
          <span className="mt-1 font-ui text-[11px] font-semibold text-brand-darker underline underline-offset-2">Ask the customer about these</span>
        </motion.div>
      </ConsolePanel>
    </div>
  );
}

// ─── Ask about these measurements ────────────────────────────────────────

export function AskCustomer() {
  // 0 typing · 1 sent, waiting · 2 answered, numbers changed
  const { ref, step } = useStepLoop([2100, 1700, 3400], 2);
  const q = "Your waist is small next to your hips. Could you measure it again around the navel?";
  const [chars, setChars] = useState(q.length);
  useEffect(() => {
    if (step !== 0) {
      setChars(q.length);
      return;
    }
    setChars(0);
    const id = setInterval(() => setChars((c) => Math.min(c + 2, q.length)), 40);
    return () => clearInterval(id);
  }, [step]);
  return (
    <div ref={ref}>
      <ConsolePanel title="Ask about these measurements"
        label="Asking the customer about a measurement. They get a notification and an email and can correct the numbers for this order; when they answer you see what changed, for example waist 80 to 82.">
        <AnimatePresence mode="wait">
          {step === 0 ? (
            <motion.div key="ask" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-3">
              <p className="font-ui text-[11px] leading-relaxed text-[#3A3A3A]/70">
                The customer gets a notification and an email, and can correct the numbers for this order. Made-to-order pieces can&apos;t be returned, so check before you cut.
              </p>
              <span className="font-ui text-xs font-medium">Which measurements? (optional)</span>
              <span className="w-fit rounded-full bg-brand-darker px-2.5 py-1 font-ui text-[10px] font-semibold text-white">Waist</span>
              <span className="font-ui text-xs font-medium">Your question</span>
              <span className="min-h-[52px] rounded-xl border border-black/15 px-3 py-2 font-ui text-xs leading-relaxed">
                {q.slice(0, chars)}<span className="ml-px inline-block h-3 w-px animate-pulse bg-[#111] align-middle" />
              </span>
              <span className="w-fit self-end rounded-full bg-brand-button px-4 py-2 font-display text-[10px] font-bold uppercase tracking-[0.15em] text-white">Send question</span>
            </motion.div>
          ) : (
            <motion.div key="thread" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-3">
              {step === 1 && (
                <span className="flex items-center gap-2 rounded-xl bg-[#ecf7ef] px-3 py-2 font-ui text-[11px] text-[#1f5c36]">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} /> Question sent. We&apos;ll tell you when the customer answers.
                </span>
              )}
              <div className="flex flex-col gap-1.5 rounded-xl border border-black/10 p-3">
                <span className={`w-fit rounded-full px-2 py-0.5 font-ui text-[10px] font-semibold ${step === 2 ? "bg-[#ecf7ef] text-[#1f5c36]" : "bg-[#fdf3e3] text-[#7a4a0c]"}`}>
                  {step === 2 ? "Answered today" : "Waiting for the customer"}
                </span>
                <span className="font-ui text-[11px] leading-relaxed text-[#3A3A3A]/80">You asked: &ldquo;{q}&rdquo;</span>
                <AnimatePresence>
                  {step === 2 && (
                    <motion.span initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="font-ui text-xs font-semibold text-[#111]">
                      Changed: Waist 80 → 82
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              <div className={`flex items-center justify-between rounded-lg px-3 py-2 transition-colors duration-500 ${step === 2 ? "bg-[#ecf7ef]" : "bg-brand-light/60"}`}>
                <span className="font-ui text-xs text-[#3A3A3A]/80">Waist</span>
                <span className="font-display text-sm font-semibold tabular-nums">{step === 2 ? 82 : 80} <span className="font-ui text-[10px] font-normal text-[#3A3A3A]/50">cm</span></span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </ConsolePanel>
    </div>
  );
}

// ─── Pre-ship Approval ───────────────────────────────────────────────────

const PHOTOS = ["/image/bespoke-kaftan-brown-2.png", "/image/bespoke-kaftan-brown-3.png", "/image/bespoke-kaftan-brown-2.png"];

export function PreshipScene() {
  // 0..2 photos added · 3 sent, waiting · 4 approved
  const { ref, step } = useStepLoop([700, 700, 1100, 2300, 3000], 4);
  const shown = Math.min(step + 1, 3);
  const sent = step >= 3;
  return (
    <div ref={ref}>
      <ConsolePanel title="Pre-ship Approval"
        label="Pre-ship Approval: photograph the finished piece and send it for approval. The customer approves and pays the balance before you can ship.">
        <div className="flex flex-col gap-3">
          <p className="font-ui text-[11px] leading-relaxed text-[#3A3A3A]/75">
            Photograph the finished piece (front, back, details). The customer approves before you can ship. Catching issues now beats a return later.
          </p>
          <div className="grid grid-cols-4 gap-2">
            {PHOTOS.slice(0, shown).map((src, i) => (
              <motion.span key={i} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image src={src} alt="" fill className="object-cover" sizes="64px" />
              </motion.span>
            ))}
            {!sent && (
              <span className="flex aspect-[3/4] items-center justify-center rounded-lg border border-dashed border-black/20 text-[#3A3A3A]/50" aria-label="Add photos">
                <ImagePlus className="h-4 w-4" />
              </span>
            )}
          </div>
          <AnimatePresence mode="wait">
            {!sent ? (
              <motion.div key="send" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-2">
                <span className="rounded-xl border border-black/10 px-3 py-2 font-ui text-[11px] text-[#3A3A3A]/80">Long sleeves as agreed.</span>
                <span className="w-fit self-end rounded-full bg-brand-button px-4 py-2 font-display text-[10px] font-bold uppercase tracking-[0.15em] text-white">Send for approval</span>
              </motion.div>
            ) : step === 3 ? (
              <motion.div key="wait" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="flex flex-col gap-1 rounded-xl bg-[#fdf3e3] px-3 py-2.5">
                <span className="font-ui text-xs font-semibold text-[#7a4a0c]">Waiting for the customer&apos;s approval</span>
                <span className="font-ui text-[11px] text-[#5a3a06]/85">Balance ₦45,000 requested</span>
              </motion.div>
            ) : (
              <motion.div key="ok" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="flex flex-col gap-1 rounded-xl bg-[#ecf7ef] px-3 py-2.5">
                <span className="flex items-center gap-1.5 font-ui text-xs font-semibold text-[#1f5c36]"><Check className="h-3.5 w-3.5" strokeWidth={3} /> Customer approved · today. You can ship.</span>
                <span className="font-ui text-[11px] text-[#1f5c36]/85">Balance ₦45,000 paid</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </ConsolePanel>
    </div>
  );
}

// ─── Quote ───────────────────────────────────────────────────────────────

export function QuoteForm() {
  // 0 the brief · 1 priced, terms ticked · 2 submitted
  const { ref, step } = useStepLoop([1800, 2600, 2600], 1);
  return (
    <div ref={ref}>
      <ConsolePanel title="Quote"
        label="The quote drawer: line items for base tailoring, fabric and add-ons, the fabric needed in yards, the days until you ship, notes to the customer, and agreeing to the bespoke terms before you submit.">
        <div className="relative flex flex-col gap-3.5">
          <div className="flex items-center gap-3">
            <span className="relative h-14 w-10 shrink-0 overflow-hidden rounded-lg"><Image src="/image/bespoke-kaftan-brown-2.png" alt="" fill className="object-cover" sizes="40px" /></span>
            <span className="flex flex-col">
              <span className="font-display text-sm font-semibold">Ada O. · Kaftan</span>
              <span className="font-ui text-[10.5px] text-[#3A3A3A]/60">Build your quote. The customer reviews it before production starts.</span>
            </span>
          </div>

          <motion.div initial={false} animate={{ opacity: step >= 1 ? 1 : 0.35 }} className="flex flex-col">
            <span className="font-display text-[9px] font-bold uppercase tracking-[0.2em] text-[#3A3A3A]/50">Line Items</span>
            {[["Base Tailoring", "₦60,000"], ["Fabric", "₦20,000"], ["Add-ons", "₦10,000"]].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between border-b border-black/5 py-2">
                <span className="font-ui text-xs text-[#3A3A3A]/80">{k}</span>
                <span className="font-display text-sm font-semibold tabular-nums">{v}</span>
              </div>
            ))}
            <div className="flex items-center justify-between py-2">
              <span className="font-display text-sm font-semibold">Total:</span>
              <span className="font-display text-base font-semibold tabular-nums">₦90,000</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <span className="flex flex-col rounded-xl bg-brand-light px-3 py-2">
                <span className="font-ui text-[10px] text-[#3A3A3A]/60">Required fabric amount</span>
                <span className="font-display text-sm font-semibold">7 yards</span>
              </span>
              <span className="flex flex-col rounded-xl bg-brand-light px-3 py-2">
                <span className="font-ui text-[10px] text-[#3A3A3A]/60">Days until you ship</span>
                <span className="font-display text-sm font-semibold">14 days</span>
              </span>
            </div>
          </motion.div>

          <span className="flex items-center gap-2 font-ui text-[11px] text-[#3A3A3A]/80">
            <span className={`flex h-4 w-4 items-center justify-center rounded border transition-colors ${step >= 1 ? "border-brand-darker bg-brand-darker text-white" : "border-black/20"}`}>
              {step >= 1 && <Check className="h-2.5 w-2.5" strokeWidth={3} />}
            </span>
            I&apos;ll make this to these terms
          </span>
          <span className={`rounded-full py-3 text-center font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors ${step === 2 ? "bg-[#2f7a4b]" : step === 1 ? "bg-brand-button" : "bg-brand-button/30"}`}>
            {step === 2 ? "Quote submitted" : "Submit quote"}
          </span>
        </div>
      </ConsolePanel>
    </div>
  );
}

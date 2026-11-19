"use client";

// Live illustrations for the vendor "Clothing generator" page, in the vendor
// console's own words: the Quote Requests list, the design detail ("What to
// make"), a request's status from New request to Accepted, and the one AI
// tool vendors use themselves: generating images for their style library.

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Check, Sparkles, Upload } from "lucide-react";
import { ConsolePanel, useStepLoop } from "./kit";

const PILL: Record<string, string> = {
  "New request": "bg-[#e8f0fe] text-[#1d4ed8]",
  Draft: "bg-black/5 text-[#3A3A3A]/75",
  Quoted: "bg-[#fdf3e3] text-[#7a4a0c]",
  Accepted: "bg-[#ecf7ef] text-[#1f5c36]",
};

const REQUESTS = [
  { img: "/image/bespoke-kaftan-brown-2.png", name: "Long-sleeve kaftan", who: "Ada O. · Kaftan · Men" },
  { img: "/image/bespoke-agbada-orange.webp", name: "Agbada for a wedding", who: "Tunde A. · Agbada · Men" },
  { img: "/image/bespoke-kaftan-milk-2.png", name: "Custom design", who: "Bisi K. · Kaftan · Women" },
];

// ─── Hero: requests arriving ─────────────────────────────────────────────

export function QuoteRequestsScene() {
  const { ref, step } = useStepLoop([900, 900, 900, 3200], 3);
  const shown = REQUESTS.slice(0, Math.min(step + 1, REQUESTS.length));
  return (
    <div ref={ref}>
      <ConsolePanel title="Quote Requests"
        label="The Quote Requests list in the vendor console: customers' AI-designed outfits arrive as cards with the design, the customer and garment, and Tap to quote.">
        <p className="font-ui text-xs text-[#3A3A3A]/70">Custom design requests from customers. Open one to send your quote.</p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          <AnimatePresence initial={false}>
            {shown.map((r) => (
              <motion.div key={r.name} layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="flex flex-col overflow-hidden rounded-xl border border-black/10">
                <span className="relative aspect-[3/4] bg-[#d8cdbf]">
                  <Image src={r.img} alt="" fill className="object-cover" sizes="130px" />
                  <span className={`absolute left-1.5 top-1.5 rounded-full px-1.5 py-[1px] font-ui text-[8px] font-semibold ${PILL["New request"]}`}>New request</span>
                </span>
                <span className="flex flex-col gap-0.5 p-2">
                  <span className="truncate font-ui text-[10.5px] font-semibold">{r.name}</span>
                  <span className="truncate font-ui text-[9px] text-[#3A3A3A]/55">{r.who}</span>
                  <span className="mt-1 font-ui text-[9.5px] font-semibold text-brand-darker">Tap to quote</span>
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </ConsolePanel>
    </div>
  );
}

// ─── What to make ────────────────────────────────────────────────────────

const STYLE_ROWS = [["Silhouette", "Straight"], ["Neckline", "Mandarin"], ["Sleeve", "Long"], ["Length", "Ankle"]];

export function DesignDetailScene() {
  const { ref, step } = useStepLoop([1500, 1500, 3200], 2);
  return (
    <div ref={ref}>
      <ConsolePanel title="Long-sleeve kaftan"
        label="The design detail a tailor sees: what to make, front and back, other versions the customer liked for ideas only, the fabric, the style choices and the customer's note."
        meta={<span className="rounded-full bg-brand-darker px-2.5 py-1 font-ui text-[10px] font-semibold text-white">Bespoke</span>}>
        <div className="grid grid-cols-[0.9fr_1fr] gap-4">
          <div className="flex flex-col gap-2">
            <span className="font-display text-xs font-semibold">What to make</span>
            <span className="relative aspect-[2/3] overflow-hidden rounded-xl bg-[#d8cdbf]">
              <Image src="/image/bespoke-kaftan-brown-2.png" alt="" fill className="object-cover" sizes="180px" />
            </span>
            <span className="font-ui text-[9.5px] leading-snug text-[#3A3A3A]/60">No back view. Ask the customer in chat if the back matters for your price.</span>
          </div>
          <div className="flex min-w-0 flex-col gap-3">
            <motion.div initial={false} animate={{ opacity: step >= 1 ? 1 : 0.3 }} className="flex flex-col gap-1">
              <span className="font-display text-xs font-semibold">Style</span>
              {STYLE_ROWS.map(([k, v]) => (
                <span key={k} className="flex justify-between border-b border-black/5 py-1 font-ui text-[11px]">
                  <span className="text-[#3A3A3A]/65">{k}</span><span className="font-medium">{v}</span>
                </span>
              ))}
            </motion.div>
            <motion.div initial={false} animate={{ opacity: step >= 1 ? 1 : 0.3 }} className="flex flex-col gap-1">
              <span className="font-display text-xs font-semibold">Fabric</span>
              <span className="font-ui text-[11px] text-[#3A3A3A]/80">Cashmere wool, chocolate</span>
            </motion.div>
            <motion.div initial={false} animate={{ opacity: step >= 2 ? 1 : 0.3 }} className="flex flex-col gap-1">
              <span className="font-display text-xs font-semibold">Other versions they liked</span>
              <span className="font-ui text-[9.5px] text-[#3A3A3A]/60">For ideas only. Make the version above.</span>
              <span className="flex gap-1.5">
                {["/image/bespoke-kaftan-brown-1.png", "/image/bespoke-kaftan-brown-4.png"].map((s) => (
                  <span key={s} className="relative h-12 w-9 overflow-hidden rounded-md"><Image src={s} alt="" fill className="object-cover" sizes="36px" /></span>
                ))}
              </span>
            </motion.div>
            <motion.div initial={false} animate={{ opacity: step >= 2 ? 1 : 0.3 }} className="flex flex-col gap-1">
              <span className="font-display text-xs font-semibold">Customer note</span>
              <span className="font-ui text-[11px] italic text-[#3A3A3A]/80">&ldquo;Gold thread on the placket, please.&rdquo;</span>
            </motion.div>
          </div>
        </div>
      </ConsolePanel>
    </div>
  );
}

// ─── From request to order ───────────────────────────────────────────────

const LIFE = ["New request", "Draft", "Quoted", "Accepted"] as const;

export function RequestStatusScene() {
  const { ref, step } = useStepLoop([1500, 1500, 1800, 3200], 3);
  const status = LIFE[step];
  return (
    <div ref={ref}>
      <ConsolePanel title="Quote Requests"
        label="A quote request moving from New request to Draft, Quoted with your total, and Accepted when the customer chooses you and pays the deposit.">
        <div className="flex items-center gap-4 rounded-2xl border border-black/10 p-3">
          <span className="relative h-24 w-16 shrink-0 overflow-hidden rounded-xl bg-[#d8cdbf]">
            <Image src="/image/bespoke-kaftan-brown-2.png" alt="" fill className="object-cover" sizes="64px" />
          </span>
          <span className="flex flex-1 flex-col gap-1">
            <AnimatePresence mode="wait">
              <motion.span key={status} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className={`w-fit rounded-full px-2 py-0.5 font-ui text-[10px] font-semibold ${PILL[status]}`}>{status}</motion.span>
            </AnimatePresence>
            <span className="font-ui text-sm font-semibold">Long-sleeve kaftan</span>
            <span className="font-ui text-[11px] text-[#3A3A3A]/55">Ada O. · Kaftan · Men</span>
            <span className="mt-1 flex items-center justify-between font-ui text-[11px]">
              <span className="font-semibold text-brand-darker">{step >= 2 ? "Your quote" : "Tap to quote"}</span>
              {step >= 2 && <span className="font-display text-sm font-semibold tabular-nums">₦90,000</span>}
            </span>
          </span>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-1.5">
          {LIFE.map((l, i) => (
            <span key={l} className="flex flex-col items-center gap-1">
              <span className={`h-1.5 w-full rounded-full transition-colors duration-500 ${i <= step ? "bg-brand-darker" : "bg-black/10"}`} />
              <span className={`text-center font-ui text-[9px] ${i <= step ? "text-[#111]" : "text-[#3A3A3A]/40"}`}>{l}</span>
            </span>
          ))}
        </div>
        <AnimatePresence>
          {step === 3 && (
            <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="mt-4 flex items-center gap-2 rounded-xl bg-[#ecf7ef] px-3 py-2.5 font-ui text-xs text-[#1f5c36]">
              <Check className="h-4 w-4" strokeWidth={3} /> The customer chose you and paid the deposit.
            </motion.p>
          )}
        </AnimatePresence>
      </ConsolePanel>
    </div>
  );
}

// ─── AI images for your style library ────────────────────────────────────

export function StyleImageScene() {
  // 0 typing · 1 generating · 2 image
  const { ref, step } = useStepLoop([2000, 1800, 3200], 2);
  return (
    <div ref={ref}>
      <ConsolePanel title="Add Styles"
        label="Adding a style to your library: name it, describe it, and press Generate with AI to get an image for it, or upload your own image or sketch.">
        <div className="grid grid-cols-[1fr_0.8fr] gap-4">
          <div className="flex min-w-0 flex-col gap-2.5">
            <span className="font-ui text-xs font-medium">Style name</span>
            <span className="rounded-xl border border-black/15 px-3 py-2 font-ui text-xs">Mandarin collar</span>
            <span className="font-ui text-xs font-medium">Description</span>
            <span className="min-h-[56px] rounded-xl border border-black/15 px-3 py-2 font-ui text-[11px] leading-relaxed text-[#111]">
              Short stand-up collar with no fold, closed at the front.
            </span>
            <span className="flex items-center justify-center gap-1.5 rounded-full border border-brand-darker/20 py-2 font-ui text-[11px] text-brand-darker"><Upload className="h-3.5 w-3.5" /> Upload image or sketch</span>
            <span className="text-center font-ui text-[10px] text-[#3A3A3A]/50">Or</span>
            <span className={`flex items-center justify-center gap-1.5 rounded-full py-2.5 font-display text-[10px] font-bold uppercase tracking-[0.15em] text-white transition-colors ${step === 1 ? "bg-brand" : "bg-brand-button"}`}>
              <Sparkles className="h-3.5 w-3.5" /> {step === 2 ? "Regenerate with AI" : "Generate with AI"}
            </span>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-brand-light">
            <AnimatePresence mode="wait">
              {step === 2 ? (
                <motion.div key="img" className="absolute inset-0" initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                  <Image src="/image/bespoke-kaftan-milk-1.png" alt="" fill className="object-cover object-top" sizes="160px" />
                </motion.div>
              ) : step === 1 ? (
                <motion.div key="busy" className="absolute inset-0 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <motion.span className="h-7 w-7 rounded-full border-2 border-brand-darker/20 border-t-brand-darker" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }} />
                </motion.div>
              ) : (
                <motion.span key="empty" className="absolute inset-0 flex items-center justify-center p-3 text-center font-ui text-[10px] text-[#3A3A3A]/45" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  The style&apos;s image shows here
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>
        <AnimatePresence>
          {step === 2 && (
            <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="mt-4 flex items-center gap-2 rounded-xl bg-[#ecf7ef] px-3 py-2.5 font-ui text-xs text-[#1f5c36]">
              <Check className="h-4 w-4" strokeWidth={3} /> Image generated successfully
            </motion.p>
          )}
        </AnimatePresence>
      </ConsolePanel>
    </div>
  );
}

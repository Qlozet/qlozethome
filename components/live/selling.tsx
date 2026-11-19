"use client";

// Live illustrations for "Flexible selling options", in the vendor console's
// own words: the clothing form's two modes (Ready to wear / Made to order)
// with its "Ready to publish?" checklist, made-to-order style options priced
// per part with a default per part, a fabric bolt sold by the yard, the
// piece or both, and Order settings (capacity → "fully booked").

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Check, Circle } from "lucide-react";
import { ConsolePanel, PhoneFrame, naira, useCountUp, useStepLoop } from "./kit";

// ─── Hero: the clothing form ─────────────────────────────────────────────

const MODES = [
  { name: "Ready to wear", text: "Already made. Shoppers pick a colour and size and you ship it from stock." },
  { name: "Made to order", text: "Shoppers choose styles, fabrics and add-ons, and you make it for them." },
];

const CHECKS = {
  common: ["Title of 10+ characters", "Description of 150+ characters", "3+ photos", "A price above ₦0"],
  0: ["Stock on at least one size"],
  1: ["Days to make it (1 or more)", "At least one style, fabric or add-on option"],
} as const;

export function ModeFormScene() {
  // 0..1 ready to wear filling/ready · 2..3 made to order filling/ready
  const { ref, step } = useStepLoop([1500, 2400, 1500, 3000], 3);
  const mode = step < 2 ? 0 : 1;
  const list = [...CHECKS.common, ...CHECKS[mode as 0 | 1]];
  const done = step % 2 === 1 ? list.length : list.length - (mode === 0 ? 1 : 2);
  return (
    <div ref={ref}>
      <ConsolePanel title="Add clothing"
        meta={<span className="font-ui text-[10px] font-semibold tabular-nums text-[#3A3A3A]/70">{done} of {list.length} ready</span>}
        label="Adding clothing in the vendor console: choose Ready to wear or Made to order, and a checklist shows what's left before you can publish.">
        <div className="flex flex-col gap-3">
          <span className="font-display text-[11px] font-semibold">What are you listing?</span>
          <div className="grid grid-cols-2 gap-2">
            {MODES.map((m, i) => (
              <span key={m.name} className={`flex flex-col gap-1 rounded-xl border-2 p-2.5 transition-colors duration-300 ${mode === i ? "border-brand-darker bg-brand-light" : "border-black/10"}`}>
                <span className="font-ui text-[11px] font-semibold">{m.name}</span>
                <span className="font-ui text-[9.5px] leading-snug text-[#3A3A3A]/65">{m.text}</span>
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-1.5 rounded-xl bg-brand-light/70 p-3">
            <span className="flex items-baseline justify-between">
              <span className="font-display text-[11px] font-semibold">Ready to publish?</span>
              <span className="font-ui text-[10px] tabular-nums text-[#3A3A3A]/60">{done} of {list.length}</span>
            </span>
            <AnimatePresence mode="popLayout" initial={false}>
              {list.map((c, i) => {
                const ok = i < done;
                return (
                  <motion.span key={c} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className={`flex items-center gap-1.5 font-ui text-[10.5px] ${ok ? "text-[#111]" : "text-[#3A3A3A]/50"}`}>
                    {ok ? <Check className="h-3 w-3 text-[#2f7a4b]" strokeWidth={3} /> : <Circle className="h-3 w-3" />}{c}
                  </motion.span>
                );
              })}
            </AnimatePresence>
          </div>
          <div className="flex gap-2">
            <span className={`flex-1 rounded-full py-2.5 text-center font-display text-[10px] font-bold uppercase tracking-[0.15em] text-white transition-colors ${step % 2 === 1 ? "bg-brand-button" : "bg-brand-button/30"}`}>Publish</span>
            <span className="rounded-full border border-black/15 px-4 py-2.5 font-display text-[10px] font-bold uppercase tracking-[0.15em]">Save as draft</span>
          </div>
        </div>
      </ConsolePanel>
    </div>
  );
}

// ─── Style options, priced per part ──────────────────────────────────────

const PARTS = [
  { part: "Neckline", styles: [["Round Neck", 0], ["V-Neck", 2000], ["Mandarin", 3500]] },
  { part: "Sleeves", styles: [["Long", 0], ["Bell", 4000], ["Short", 0]] },
] as const;

export function StyleOptionsScene() {
  // 0 cheapest by default · 1 Mandarin made default · 2 Bell made default
  const { ref, step } = useStepLoop([2200, 2000, 3200], 2);
  const defaults = [step >= 1 ? 2 : 0, step >= 2 ? 1 : 0];
  const base = 45000;
  const extra = PARTS.reduce((s, p, i) => s + p.styles[defaults[i]][1], 0);
  const shown = useCountUp(base + extra, true, 600, base);
  return (
    <div ref={ref}>
      <ConsolePanel title="Style Options"
        label="Made-to-order styles priced per part. Each part's default style is included in the price shoppers see; make the style in your photos the default.">
        <div className="flex flex-col gap-3">
          {PARTS.map((p, pi) => (
            <div key={p.part} className="flex flex-col gap-1.5">
              <span className="font-display text-[11px] font-semibold">{p.part}</span>
              <div className="grid grid-cols-3 gap-2">
                {p.styles.map(([name, price], si) => {
                  const def = defaults[pi] === si;
                  return (
                    <span key={name} className={`relative flex flex-col gap-0.5 rounded-xl border p-2 transition-colors duration-300 ${def ? "border-brand-darker bg-brand-light" : "border-black/10"}`}>
                      <span className="font-ui text-[10.5px] font-medium">{name}</span>
                      <span className="font-ui text-[10px] tabular-nums text-[#3A3A3A]/65">{price ? `+${naira(price)}` : "₦0"}</span>
                      <AnimatePresence>
                        {def && (
                          <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                            className="absolute -top-2 right-1.5 rounded-full bg-brand-darker px-1.5 py-[1px] font-ui text-[8px] font-bold text-white">Default</motion.span>
                        )}
                      </AnimatePresence>
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between rounded-xl bg-[#1b1714] px-4 py-3 text-white">
            <span className="flex flex-col">
              <span className="font-ui text-[10px] text-white/60">Price shoppers see</span>
              <span className="font-ui text-[9.5px] text-white/50">₦45,000 + default styles</span>
            </span>
            <span className="font-display text-lg font-semibold tabular-nums">{naira(shown)}</span>
          </div>
          <span className="font-ui text-[10px] leading-relaxed text-[#3A3A3A]/65">Until you pick one, the cheapest style of the part is used.</span>
        </div>
      </ConsolePanel>
    </div>
  );
}

// ─── A fabric bolt ───────────────────────────────────────────────────────

const WAYS = [["By the yard", "Any length"], ["By the piece", "Whole pieces only"], ["Both", "Yards or a full piece"]];

export function BoltScene() {
  const { ref, step } = useStepLoop([2000, 2000, 3200], 2);
  const yard = 4500, piece = 26000, perPiece = 6, minCut = 2;
  return (
    <div ref={ref}>
      <ConsolePanel title="Add new fabric"
        label="Listing a fabric: sell it by the yard, by the piece, or both. The form shows what a shopper pays for the minimum cut and what a full piece saves.">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-[#d8cdbf]">
              <Image src="/image/ankara.png" alt="" fill className="object-cover" sizes="48px" />
            </span>
            <span className="flex flex-col">
              <span className="font-display text-[11px] font-semibold">The bolt</span>
              <span className="font-ui text-[10px] text-[#3A3A3A]/65">How much you have, how you sell it, and what it costs.</span>
            </span>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {WAYS.map(([n, t], i) => (
              <span key={n} className={`flex flex-col gap-0.5 rounded-xl border-2 p-2 transition-colors duration-300 ${i === step ? "border-brand-darker bg-brand-light" : "border-black/10"}`}>
                <span className="font-ui text-[10.5px] font-semibold">{n}</span>
                <span className="font-ui text-[9px] text-[#3A3A3A]/60">{t}</span>
              </span>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[
              ["Yards in stock", "48", true],
              ["Price per yard", naira(yard), step !== 1],
              ["Minimum cut", `${minCut} yards`, step !== 1],
              ["Yards in one piece", String(perPiece), step !== 0],
              ["Price per piece", naira(piece), step !== 0],
            ].filter((f) => f[2]).map(([k, v]) => (
              <motion.span key={k as string} layout
                className="flex flex-col gap-0.5 rounded-lg border border-black/10 px-2.5 py-1.5">
                <span className="font-ui text-[9px] text-[#3A3A3A]/55">{k}</span>
                <span className="font-ui text-[11px] font-medium tabular-nums">{v}</span>
              </motion.span>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.span key={step} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="rounded-xl bg-[#ecf7ef] px-3 py-2 font-ui text-[10.5px] leading-relaxed text-[#1f5c36]">
              {step === 0 && <>A shopper buying the minimum cut pays {naira(yard * minCut)}.</>}
              {step === 1 && <>Shoppers buy whole pieces of {perPiece} yards at {naira(piece)} each.</>}
              {step === 2 && <>A full piece saves a shopper {naira(yard * perPiece - piece)} against buying {perPiece} yards loose.</>}
            </motion.span>
          </AnimatePresence>
        </div>
      </ConsolePanel>
    </div>
  );
}

// ─── Order settings: capacity ────────────────────────────────────────────

function Toggle({ on }: { on: boolean }) {
  return (
    <span className={`relative h-5 w-9 shrink-0 rounded-full transition-colors duration-300 ${on ? "bg-[#2f7a4b]" : "bg-black/15"}`}>
      <motion.span className="absolute top-0.5 h-4 w-4 rounded-full bg-white shadow" animate={{ left: on ? 18 : 2 }} />
    </span>
  );
}

export function CapacityScene() {
  // 0 settings · 1 at capacity, shoppers see fully booked
  const { ref, step } = useStepLoop([2600, 3600], 1);
  return (
    <div ref={ref} className="grid grid-cols-[minmax(0,1fr)] items-center gap-6 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
      <ConsolePanel title="Order settings"
        label="Order settings: set how many orders you can have in progress at once, and choose whether to take bespoke requests and fabric from other vendors. At your limit, shoppers see your store as fully booked.">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <span className="font-ui text-[11px] font-semibold">Order Capacity</span>
            <span className="font-ui text-[9.5px] leading-snug text-[#3A3A3A]/65">How many orders you can have in progress at once. 0 means no limit.</span>
            <span className="flex items-center justify-between rounded-lg border border-black/10 px-3 py-1.5">
              <span className="font-ui text-[11px] font-semibold tabular-nums">8</span>
              <span className={`font-ui text-[10px] tabular-nums ${step === 1 ? "font-semibold text-[#b42318]" : "text-[#3A3A3A]/60"}`}>{step === 1 ? "8" : "5"} in progress</span>
            </span>
          </div>
          {[["Auto-confirm Orders", false], ["Accept bespoke requests", true], ["Accept fabric from other vendors", true]].map(([k, on]) => (
            <span key={k as string} className="flex items-center justify-between gap-3 border-t border-black/5 pt-2.5">
              <span className="font-ui text-[11px]">{k}</span>
              <Toggle on={on as boolean} />
            </span>
          ))}
        </div>
      </ConsolePanel>
      <PhoneFrame label="A shopper sees the store as fully booked until you finish an order.">
        <div className="flex h-full flex-col">
          <div className="relative h-[46%] w-full">
            <Image src="/image/bespoke-kaftan-brown-5.png" alt="" fill className="object-cover object-top" sizes="200px" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#5a3825]" />
            <span className="absolute bottom-4 left-0 right-0 text-center font-display text-base font-bold tracking-[0.12em] text-white">ADIRE STUDIO</span>
          </div>
          <div className="flex flex-1 flex-col gap-2 bg-[#5a3825] px-3 pt-2">
            <AnimatePresence>
              {step === 1 && (
                <motion.span initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="rounded-lg bg-white/95 px-2.5 py-1.5 text-center font-ui text-[9px] font-semibold text-[#5a3825]">
                  Fully booked. Not taking new orders right now.
                </motion.span>
              )}
            </AnimatePresence>
            <span className="text-center font-ui text-[9px] text-white/80">4.8 ★ 23 Reviews</span>
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}

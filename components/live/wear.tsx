"use client";

// Live illustrations for "Custom & ready-to-wear", in the shop's own words:
// the product page (AI size recommendation, Add to Cart), Customize Outfit
// (styles show "Included" or "+₦X"; the listing price already includes the
// default style for each part), the FIT tab, using your own fabric, and
// the cart's price breakdown.

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Check, Ruler } from "lucide-react";
import type { ReactNode } from "react";
import { useStepLoop } from "./kit";

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

const COLOURS = [
  { name: "Chocolate", hex: "#4a3426" },
  { name: "Milk", hex: "#d9cfc0" },
  { name: "Teal", hex: "#2f5e6b" },
];
const SIZES = ["S", "M", "L", "XL"];

// ─── Hero: a ready-to-wear product page ──────────────────────────────────

export function ProductScene() {
  // 0 page · 1 AI analysing · 2 your size · 3 added to cart
  const { ref, step } = useStepLoop([1600, 1300, 2000, 2800], 2);
  const picked = step >= 2 ? "L" : null;
  return (
    <div ref={ref}>
      <Card title="Kaftan · Adire Studio"
        label="A ready-to-wear product page: colour swatches, sizes with an AI size recommendation based on your measurements, and Add to Cart.">
        <div className="relative grid grid-cols-[0.8fr_1fr] gap-4">
          <span className="relative aspect-[2/3] overflow-hidden rounded-xl bg-[#d8cdbf]">
            <Image src="/image/bespoke-kaftan-brown-2.png" alt="" fill className="object-cover" sizes="200px" />
          </span>
          <div className="flex min-w-0 flex-col gap-2.5">
            <span className="flex items-baseline gap-2">
              <span className="font-display text-[22px] font-bold">₦42,000</span>
              <span className="font-ui text-xs text-[#3A3A3A]/45 line-through">₦50,000</span>
            </span>
            <span className="font-ui text-[11px] text-[#3A3A3A]/75">Colour: <b className="text-[#111]">Chocolate</b></span>
            <span className="flex gap-1.5">
              {COLOURS.map((c, i) => (
                <span key={c.name} className={`h-6 w-6 rounded-full ring-offset-2 ${i === 0 ? "ring-2 ring-brand-darker" : ""}`} style={{ background: c.hex }} />
              ))}
            </span>
            <span className="flex items-center gap-1 font-ui text-[10.5px] text-brand-darker underline underline-offset-2"><Ruler className="h-3 w-3" /> Size Guide</span>
            <span className="flex flex-wrap items-center gap-1.5">
              {SIZES.map((s) => (
                <span key={s} className={`flex h-7 min-w-7 items-center justify-center rounded-full border px-2 font-ui text-[11px] transition-colors duration-300 ${picked === s ? "border-brand-darker bg-brand-darker text-white" : "border-black/15"}`}>{s}</span>
              ))}
              <span className={`rounded-full px-2 py-1 font-display text-[10px] font-bold text-white transition-colors ${step === 1 ? "bg-[#6d28d9]" : "bg-[#7c3aed]"}`}>AI</span>
            </span>
            <AnimatePresence>
              {(step === 1 || step === 2) && (
                <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="flex flex-col gap-0.5 rounded-xl border border-[#7c3aed]/25 bg-[#f6f1ff] px-3 py-2">
                  <span className="font-ui text-[10.5px] font-semibold text-[#5b21b6]">AI Size Recommendation</span>
                  {step === 1 ? (
                    <span className="font-ui text-[10.5px] text-[#5b21b6]/80">Analyzing your measurements…</span>
                  ) : (
                    <span className="font-ui text-[10.5px] text-[#5b21b6]/90">Your size <b>L</b> · 92% match</span>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
            <span className="mt-auto rounded-full bg-brand-button py-2.5 text-center font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white">Add to Cart</span>
          </div>

          <AnimatePresence>
            {step === 3 && (
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 rounded-xl bg-[#1b1714] px-4 py-3 text-white shadow-xl">
                <span className="flex flex-col">
                  <span className="flex items-center gap-1.5 font-ui text-xs font-semibold"><Check className="h-3.5 w-3.5" strokeWidth={3} /> Added to your cart</span>
                  <span className="font-ui text-[10.5px] text-white/65">Kaftan · Size L · Chocolate</span>
                </span>
                <span className="font-ui text-[11px] font-semibold underline underline-offset-2">View cart</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>
    </div>
  );
}

// ─── Customize Outfit ────────────────────────────────────────────────────

const PANEL_TABS = ["Style", "Fabric", "Accessories", "Fit", "Add-ons"];
const NECKLINES = [
  { name: "Round", price: 0 },
  { name: "Mandarin", price: 2000 },
  { name: "V-neck", price: 0 },
];
const SLEEVES = [
  { name: "Short", price: 0 },
  { name: "Long", price: 3000 },
];

function Option({ name, price, on }: { name: string; price: number; on: boolean }) {
  return (
    <span className={`flex items-center justify-between gap-2 rounded-xl border px-3 py-2 transition-colors duration-300 ${on ? "border-brand-darker bg-brand-light" : "border-black/10"}`}>
      <span className="flex items-center gap-2">
        <span className={`flex h-3.5 w-3.5 items-center justify-center rounded-full border ${on ? "border-brand-darker" : "border-black/25"}`}>
          {on && <span className="h-1.5 w-1.5 rounded-full bg-brand-darker" />}
        </span>
        <span className="font-ui text-[11px]">{name}</span>
      </span>
      <span className={`font-ui text-[10px] ${price ? "font-semibold text-[#111]" : "text-[#3A3A3A]/55"}`}>{price ? `+₦${price.toLocaleString("en-NG")}` : "Included"}</span>
    </span>
  );
}

export function CustomizeScene() {
  // 0 defaults · 1 Mandarin · 2 Long sleeves · 3 summary
  const { ref, step } = useStepLoop([1800, 1600, 1600, 3000], 3);
  const neck = step >= 1 ? "Mandarin" : "Round";
  const sleeve = step >= 2 ? "Long" : "Short";
  const extra = (step >= 1 ? 2000 : 0) + (step >= 2 ? 3000 : 0);
  return (
    <div ref={ref}>
      <Card title="Customize Outfit"
        label="Customizing a kaftan: each part starts on a style already included in the price; other styles show what they add, and the price updates as you choose."
        meta={<span className="font-display text-sm font-semibold tabular-nums">₦45,000{extra ? <span className="ml-1.5 rounded-full bg-brand-darker px-2 py-0.5 font-ui text-[10px] text-white">+₦{extra.toLocaleString("en-NG")} styling</span> : null}</span>}>
        <div className="flex flex-col gap-3">
          <span className="font-ui text-[11px] text-[#3A3A3A]/65">Personalize this outfit to your taste</span>
          <div className="flex flex-wrap gap-1">
            {PANEL_TABS.map((t, i) => (
              <span key={t} className={`rounded-full px-2 py-1 font-display text-[8.5px] font-bold uppercase tracking-[0.12em] ${i === 0 ? "bg-brand-darker text-white" : "bg-brand-light text-[#3A3A3A]/60"}`}>{t}</span>
            ))}
          </div>
          <span className="font-display text-[11px] font-semibold">Neckline</span>
          <div className="grid grid-cols-1 gap-1.5">
            {NECKLINES.map((n) => <Option key={n.name} {...n} on={neck === n.name} />)}
          </div>
          <span className="font-display text-[11px] font-semibold">Sleeve</span>
          <div className="grid grid-cols-2 gap-1.5">
            {SLEEVES.map((s) => <Option key={s.name} {...s} on={sleeve === s.name} />)}
          </div>
          <motion.div initial={false} animate={{ opacity: step === 3 ? 1 : 0.35 }} className="flex flex-col gap-1.5 rounded-xl bg-brand-light/70 p-3">
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-[#3A3A3A]/55">Selected Customizations</span>
            <span className="flex flex-wrap gap-1">
              <span className="rounded-full bg-white px-2 py-0.5 font-ui text-[10px] ring-1 ring-black/5">Neckline: {neck}</span>
              <span className="rounded-full bg-white px-2 py-0.5 font-ui text-[10px] ring-1 ring-black/5">Sleeve: {sleeve}</span>
            </span>
          </motion.div>
          <div className="grid grid-cols-2 gap-2">
            <span className="rounded-full border border-brand-darker/20 py-2.5 text-center font-display text-[10px] font-bold uppercase tracking-[0.15em] text-brand-darker">Preview outfit</span>
            <span className="rounded-full bg-brand-button py-2.5 text-center font-display text-[10px] font-bold uppercase tracking-[0.15em] text-white">Done</span>
          </div>
        </div>
      </Card>
    </div>
  );
}

// ─── FIT: whose measurements ─────────────────────────────────────────────

const SETS = [
  { name: "My body scan", note: "From a body scan", active: true },
  { name: "My estimate", note: "Estimated from height & weight", active: false },
];

export function FitScene() {
  // 0 preference · 1 length · 2 measurements picked
  const { ref, step } = useStepLoop([1500, 1500, 3000], 2);
  return (
    <div ref={ref}>
      <Card title="Fit"
        label="The Fit tab when customizing: choose how it should fit, the length, and which saved measurements it's made to.">
        <div className="flex flex-col gap-3">
          <span className="font-display text-[11px] font-semibold">Preference</span>
          <div className="grid grid-cols-3 gap-1.5">
            {["Fitted", "Regular", "Tailor decides"].map((p) => (
              <span key={p} className={`rounded-xl border py-2 text-center font-ui text-[11px] transition-colors duration-300 ${p === "Regular" && step >= 0 ? "border-brand-darker bg-brand-light font-semibold" : "border-black/10"}`}>{p}</span>
            ))}
          </div>
          <span className="font-display text-[11px] font-semibold">Length</span>
          <div className="grid grid-cols-3 gap-1.5">
            {["Knee", "Mid-calf", "Ankle"].map((l) => (
              <span key={l} className={`rounded-xl border py-2 text-center font-ui text-[11px] transition-colors duration-300 ${l === "Ankle" && step >= 1 ? "border-brand-darker bg-brand-light font-semibold" : "border-black/10"}`}>{l}</span>
            ))}
          </div>
          <span className="font-display text-[11px] font-semibold">Measurements for</span>
          <div className="flex flex-col gap-1.5">
            {SETS.map((s) => {
              const on = s.active && step >= 2;
              return (
                <span key={s.name} className={`flex items-center justify-between rounded-xl border px-3 py-2.5 transition-colors duration-300 ${on ? "border-brand-darker bg-brand-light" : "border-black/10"}`}>
                  <span className="flex flex-col">
                    <span className="font-ui text-xs font-medium">{s.name}</span>
                    <span className="font-ui text-[10px] text-[#3A3A3A]/55">{s.note}</span>
                  </span>
                  {s.active && <span className="rounded-full bg-[#ecf7ef] px-2 py-0.5 font-ui text-[9.5px] font-semibold text-[#1f5c36]">Active</span>}
                </span>
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  );
}

// ─── The cart, broken down ───────────────────────────────────────────────

export function CartScene() {
  const { ref, step } = useStepLoop([700, 700, 700, 900, 3200], 4);
  const rows: [string, string][] = [["Base", "₦45,000"], ["Styles", "₦5,000"], ["Applied fabric", "₦18,000"]];
  return (
    <div ref={ref}>
      <Card title="My Cart"
        label="The cart shows each outfit's price broken down: base, styles, and your own applied fabric, then the final price.">
        <div className="flex gap-3">
          <span className="relative h-24 w-16 shrink-0 overflow-hidden rounded-xl bg-[#d8cdbf]">
            <Image src="/image/bespoke-kaftan-brown-2.png" alt="" fill className="object-cover" sizes="64px" />
          </span>
          <span className="flex min-w-0 flex-1 flex-col gap-1">
            <span className="flex items-center justify-between">
              <span className="font-display text-sm font-semibold">Kaftan</span>
              <span className="font-ui text-[10.5px] text-brand-darker underline underline-offset-2">Edit</span>
            </span>
            <span className="font-ui text-[10.5px] text-[#3A3A3A]/65">Using your fabric: <b className="text-[#111]">Cashmere wool, chocolate</b> · 4 yd</span>
          </span>
        </div>
        <div className="mt-3 flex flex-col">
          {rows.map(([k, v], i) => (
            <motion.span key={k} initial={false} animate={{ opacity: step >= i ? 1 : 0.2 }}
              className="flex justify-between border-b border-black/5 py-2 font-ui text-xs">
              <span className="text-[#3A3A3A]/70">{k}</span><span className="font-semibold tabular-nums">{v}</span>
            </motion.span>
          ))}
          <motion.span initial={false} animate={{ opacity: step >= 3 ? 1 : 0.2 }}
            className="flex justify-between py-2.5 font-display text-sm font-semibold">
            <span>Final</span><span className="tabular-nums">₦68,000</span>
          </motion.span>
        </div>
        <span className="mt-1 block rounded-full bg-brand-button py-3 text-center font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white">Check Out</span>
      </Card>
    </div>
  );
}

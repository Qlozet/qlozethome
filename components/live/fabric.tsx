"use client";

// Live illustrations for "Fabrics", in the shop's own words: buying by the
// piece or by the yard (stock counted in yards, 0.5 yd steps, minimum cut),
// Use Fabric, the studio's fabric picker, and the "Fabric to your tailor"
// delivery leg at checkout.

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Minus, Plus, Search, Sparkles, Truck, Check } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
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

function Swatch({ src, className = "" }: { src: string; className?: string }) {
  return (
    <span className={`relative block overflow-hidden rounded-xl bg-brand-light ${className}`}>
      <Image src={src} alt="" fill className="object-cover" sizes="160px" />
    </span>
  );
}

const ngn = (n: number) => `₦${n.toLocaleString("en-NG")}`;

function Stepper({ label, sub, value, minus, plus }: { label: string; sub: string; value: string; minus: string; plus: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-black/10 px-3 py-2.5">
      <span className="flex flex-col">
        <span className="font-ui text-xs font-semibold">{label}</span>
        <span className="font-ui text-[10px] text-[#3A3A3A]/60">{sub}</span>
      </span>
      <span className="flex items-center gap-2">
        <span aria-label={minus} className="flex h-7 w-7 items-center justify-center rounded-full border border-black/15"><Minus className="h-3 w-3" /></span>
        <span className="min-w-[64px] text-center font-display text-xs font-semibold tabular-nums">{value}</span>
        <span aria-label={plus} className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-darker text-white"><Plus className="h-3 w-3" /></span>
      </span>
    </div>
  );
}

// ─── Hero: a fabric sold by the piece and by the yard ────────────────────

export function FabricProductScene() {
  // 0 one piece · 1 two pieces · 2 by the yard · 3 more yards
  const { ref, step } = useStepLoop([1800, 1800, 1800, 2600], 1);
  const byYard = step >= 2;
  const pieces = step === 0 ? 1 : 2;
  const yards = step === 3 ? 4.5 : 3;
  const price = byYard ? yards * 5500 : pieces * 30000;
  return (
    <div ref={ref}>
      <Card title="Ankara print · Oba Threads"
        label="A fabric product page: buy it as full 6-yard pieces or by the yard, with the price worked out as you change the amount.">
        <div className="grid grid-cols-[0.75fr_1fr] gap-4">
          <div className="flex flex-col gap-2">
            <Swatch src="/image/ankara.png" className="aspect-[3/4]" />
            <span className="font-ui text-[9.5px] text-[#3A3A3A]/60">Colours in this print</span>
            <span className="flex gap-1">
              {["#c2410c", "#1e3a8a", "#ca8a04", "#14532d"].map((c) => <span key={c} className="h-4 w-4 rounded-full ring-1 ring-black/10" style={{ background: c }} />)}
            </span>
          </div>
          <div className="flex min-w-0 flex-col gap-2.5">
            <span className="flex flex-col">
              <span className="font-display text-xl font-bold tabular-nums">{ngn(price)}</span>
              <span className="font-ui text-[10px] text-[#3A3A3A]/60">
                {byYard ? `for ${yards} yd · ₦5,500/yd` : `for ${pieces} piece${pieces > 1 ? "s" : ""} (${pieces * 6} yd) · ₦30,000 per piece`}
              </span>
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              <span className={`flex flex-col rounded-xl border p-2 transition-colors duration-300 ${!byYard ? "border-brand-darker bg-brand-light" : "border-black/10"}`}>
                <span className="font-ui text-[10.5px] font-semibold">Full piece (6 yd)</span>
                <span className="font-ui text-[9.5px] text-[#3A3A3A]/60">₦30,000 each</span>
              </span>
              <span className={`flex flex-col rounded-xl border p-2 transition-colors duration-300 ${byYard ? "border-brand-darker bg-brand-light" : "border-black/10"}`}>
                <span className="font-ui text-[10.5px] font-semibold">By the yard</span>
                <span className="font-ui text-[9.5px] text-[#3A3A3A]/60">₦5,500/yd</span>
              </span>
            </div>
            <AnimatePresence mode="wait">
              {byYard ? (
                <motion.div key="yd" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-1">
                  <Stepper label="Yards" sub="₦5,500/yd" value={`${yards} yd`} minus="Fewer yards" plus="More yards" />
                  <span className="font-ui text-[9.5px] text-[#3A3A3A]/55">Minimum cut: 2 yd · only 18 yd left</span>
                </motion.div>
              ) : (
                <motion.div key="pc" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-1">
                  <Stepper label="Pieces" sub="6 yd each · ₦30,000" value={`${pieces} · ${pieces * 6} yd`} minus="Fewer pieces" plus="More pieces" />
                  <span className="font-ui text-[9.5px] text-[#3A3A3A]/55">Sold in whole pieces · only 3 left</span>
                </motion.div>
              )}
            </AnimatePresence>
            <span className="rounded-full bg-brand-button py-2.5 text-center font-display text-[9.5px] font-bold uppercase tracking-[0.15em] text-white">Add to Cart</span>
            <div className="grid grid-cols-2 gap-1.5">
              <span className="rounded-full border border-brand-darker/25 py-2 text-center font-display text-[8.5px] font-bold uppercase tracking-[0.1em] text-brand-darker">Use Fabric</span>
              <span className="rounded-full border border-brand-darker/25 py-2 text-center font-display text-[8.5px] font-bold uppercase tracking-[0.1em] text-brand-darker">Reserve for Event</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

// ─── Use Fabric ──────────────────────────────────────────────────────────

export function UseFabricScene() {
  // 0 choose what for · 1 Custom Clothing · 2 pick the item · 3 applied
  const { ref, step } = useStepLoop([1700, 1300, 1700, 3000], 3);
  return (
    <div ref={ref}>
      <Card title="Use Fabric"
        label="Using a fabric you found: apply it to one of your studio designs, or to a customizable outfit from your wishlist. The outfit then shows it as its applied fabric.">
        <AnimatePresence mode="wait">
          {step < 2 ? (
            <motion.div key="what" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-3">
              <span className="flex items-center gap-3">
                <Swatch src="/image/ankara.png" className="h-12 w-12" />
                <span className="flex flex-col"><span className="font-ui text-[10px] text-[#3A3A3A]/55">Selected fabric</span><span className="font-ui text-xs font-semibold">Ankara print</span></span>
              </span>
              <span className="font-ui text-xs">What would you like to use your fabric for?</span>
              {[["Bespoke", "Apply to one of your studio designs"], ["Custom Clothing", "Apply to a customizable outfit from your wishlist"]].map(([t, d], i) => (
                <span key={t} className={`flex flex-col rounded-xl border p-3 transition-colors duration-300 ${step === 1 && i === 1 ? "border-brand-darker bg-brand-light" : "border-black/10"}`}>
                  <span className="font-ui text-xs font-semibold">{t}</span>
                  <span className="font-ui text-[10.5px] text-[#3A3A3A]/65">{d}</span>
                </span>
              ))}
            </motion.div>
          ) : step === 2 ? (
            <motion.div key="pick" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="flex flex-col gap-3">
              <span className="font-ui text-xs">Select an item to customize with this fabric</span>
              <div className="grid grid-cols-3 gap-2">
                {["/image/bespoke-kaftan-milk-2.png", "/image/bespoke-kaftan-blue-1.png", "/image/bespoke-kaftan-milk-4.png"].map((s, i) => (
                  <span key={s} className={`rounded-xl p-0.5 ring-2 ${i === 0 ? "ring-brand-darker" : "ring-transparent"}`}><Swatch src={s} className="aspect-[3/4]" /></span>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="applied" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-3">
              <span className="font-ui text-xs font-semibold">Kaftan · Adire Studio</span>
              <div className="flex flex-col gap-2 rounded-xl bg-brand-light p-3">
                <span className="font-display text-xs font-semibold">Applied fabric</span>
                <span className="flex items-center gap-2.5">
                  <Swatch src="/image/ankara.png" className="h-10 w-10" />
                  <span className="flex flex-1 flex-col"><span className="font-ui text-xs font-medium">Ankara print</span><span className="font-ui text-[10px] text-[#3A3A3A]/60">Yards: 4</span></span>
                  <Check className="h-4 w-4 text-[#2f7a4b]" strokeWidth={3} />
                </span>
                <span className="font-ui text-[10px] text-[#3A3A3A]/65">Your chosen fabric replaces this piece&apos;s own colourways.</span>
              </div>
              <span className="font-ui text-[10.5px] text-brand-darker underline underline-offset-2">Use the vendor&apos;s fabric instead</span>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </div>
  );
}

// ─── The studio's fabric picker ──────────────────────────────────────────

const LIBRARY = [
  { src: "/image/ankara.png", name: "Ankara print", meta: "cotton · wax print · from Oba Threads", colour: "Orange" },
  { src: "/image/fabric-swatch-1.jpg", name: "Cashmere wool", meta: "wool · plain · from Adire Studio", colour: "Brown" },
  { src: "/image/Striped.jpeg", name: "Pinstripe", meta: "linen · stripe · from Kola Tailoring", colour: "Blue" },
  { src: "/image/cotton.jpeg", name: "Cotton poplin", meta: "cotton · plain · from Ife Couture", colour: "White" },
];

export function StudioFabricScene() {
  // 0 all · 1 typing "wool" · 2 filtered
  const { ref, step } = useStepLoop([1800, 1600, 3000], 2);
  const q = "wool";
  const [chars, setChars] = useState(step >= 1 ? q.length : 0);
  useEffect(() => {
    if (step === 0) return setChars(0);
    if (step === 2) return setChars(q.length);
    setChars(0);
    const id = setInterval(() => setChars((c) => Math.min(c + 1, q.length)), 160);
    return () => clearInterval(id);
  }, [step]);
  const list = step === 2 ? LIBRARY.filter((f) => f.meta.includes("wool")) : LIBRARY;
  return (
    <div ref={ref}>
      <Card title="Studio · Fabric"
        label="Choosing a fabric in the bespoke studio: search by name, material, pattern or colour across fabrics from every vendor, or let the tailor choose.">
        <div className="flex flex-col gap-3">
          <span className="flex items-center gap-2 rounded-full border border-black/10 px-3 py-2 font-ui text-xs">
            <Search className="h-3.5 w-3.5 text-[#3A3A3A]/50" />
            {chars ? <span>{q.slice(0, chars)}</span> : <span className="text-[#3A3A3A]/45">Search lace, silk, ankara, blue…</span>}
          </span>
          <span className="flex flex-wrap gap-1">
            {["All", "Orange", "Brown", "Blue", "White"].map((c, i) => (
              <span key={c} className={`rounded-full px-2 py-0.5 font-ui text-[10px] ${i === 0 ? "bg-brand-darker text-white" : "bg-brand-light text-[#3A3A3A]/75"}`}>{c}</span>
            ))}
          </span>
          <div className="grid grid-cols-2 gap-2">
            <AnimatePresence initial={false}>
              {list.map((f) => (
                <motion.span key={f.name} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-1">
                  <Swatch src={f.src} className="aspect-[4/3]" />
                  <span className="font-ui text-[11px] font-semibold">{f.name}</span>
                  <span className="truncate font-ui text-[9.5px] text-[#3A3A3A]/60">{f.meta}</span>
                </motion.span>
              ))}
            </AnimatePresence>
          </div>
          <span className="flex items-center gap-1.5 font-ui text-[10.5px] text-[#3A3A3A]/65"><Sparkles className="h-3 w-3" /> Not sure? You can let the tailor choose.</span>
        </div>
      </Card>
    </div>
  );
}

// ─── Fabric to your tailor ───────────────────────────────────────────────

export function FabricDeliveryScene() {
  const { ref, step } = useStepLoop([1600, 3200], 1);
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const range = () => {
    if (!ready) return "in 2–3 days";
    const f = (n: number) => { const d = new Date(); d.setDate(d.getDate() + n); return d; };
    const a = f(2), b = f(3);
    return `${a.getDate()} – ${b.getDate()} ${b.toLocaleDateString("en-GB", { month: "short" })}`;
  };
  return (
    <div ref={ref}>
      <Card title="Checkout · Shipping"
        label="At checkout, fabric bought from one vendor for a tailor gets its own delivery leg, Fabric to your tailor, with its own courier and arrival dates.">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2 rounded-xl border border-black/10 p-3">
            <span className="flex items-baseline justify-between"><span className="font-display text-xs font-semibold">Adire Studio</span><span className="font-ui text-[10px] text-[#3A3A3A]/55">1 item</span></span>
            <span className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-light"><Truck className="h-4 w-4 text-brand-darker" /></span>
              <span className="flex flex-1 flex-col"><span className="font-ui text-xs font-medium">Swift Courier</span><span className="font-ui text-[10px] text-[#3A3A3A]/60">Delivery to you</span></span>
              <span className="font-display text-sm font-semibold">₦3,500</span>
            </span>
          </div>
          <motion.div initial={false} animate={{ opacity: step === 1 ? 1 : 0.3, y: step === 1 ? 0 : 6 }}
            className="flex flex-col gap-2 rounded-xl border-2 border-brand-darker/70 bg-brand-light/50 p-3">
            <span className="flex flex-col">
              <span className="font-display text-xs font-semibold">Fabric to your tailor</span>
              <span className="font-ui text-[10px] text-[#3A3A3A]/65">Ankara print (4yd) → Adire Studio</span>
            </span>
            <span className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white"><Truck className="h-4 w-4 text-brand-darker" /></span>
              <span className="flex flex-1 flex-col">
                <span className="flex items-center gap-1.5 font-ui text-xs font-medium">City Express <span className="rounded-full bg-[#ecf7ef] px-1.5 py-[1px] text-[9px] font-semibold text-[#1f5c36]">Fastest</span></span>
                <span className="font-ui text-[10px] text-[#3A3A3A]/60">Reaches the tailor {range()}</span>
              </span>
              <span className="font-display text-sm font-semibold">₦2,000</span>
            </span>
          </motion.div>
        </div>
      </Card>
    </div>
  );
}

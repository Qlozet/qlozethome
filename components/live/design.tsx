"use client";

// Live illustrations for "Design your outfit": the shop's bespoke studio,
// quote requests, choosing a quote, and approving the finished piece. The
// wording is the shop's own; the money follows the bespoke rules (50%
// deposit plus delivery now, the balance after the finished-piece photos).

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Check, Sparkles } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { useStepLoop } from "./kit";

const IMG = {
  sleeveless: "/image/bespoke-kaftan-brown-1.png",
  short: "/image/bespoke-kaftan-brown-4.png",
  long: "/image/bespoke-kaftan-brown-2.png",
  longSide: "/image/bespoke-kaftan-brown-3.png",
};

function Card({ title, meta, children, label }: { title: string; meta?: ReactNode; children: ReactNode; label: string }) {
  return (
    <div role="img" aria-label={label}
      className="mx-auto w-full max-w-[520px] overflow-hidden rounded-[2rem] border border-brand-darker/10 bg-white shadow-[0_40px_80px_-40px_rgba(30,16,8,0.35)]">
      <div className="flex items-center justify-between gap-3 border-b border-brand-darker/5 bg-brand-light/60 px-5 py-3.5">
        <span className="font-display text-sm font-semibold text-brand-darker">{title}</span>
        {meta}
      </div>
      {children}
    </div>
  );
}

function Garment({ src, className = "" }: { src: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-xl bg-[#d8cdbf] ${className}`}>
      <Image src={src} alt="" fill className="object-cover" sizes="240px" />
    </div>
  );
}

// ─── Hero: choose, generate, see it ──────────────────────────────────────

const TABS = ["Style", "Fabric", "Finishing", "Fit", "Photo & notes"];
const SLEEVES = ["Sleeveless", "Short", "Long"];
const SWATCHES = ["/image/fabric-swatch-1.jpg", "/image/fabric-swatch-2.jpg", "/image/fabric-swatch-3.jpg"];
const STAGES = ["Reading your choices", "Cutting the pattern", "Draping your fabric", "Adding the details", "Final stitches"];

function GeneratingStages() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => Math.min(v + 1, STAGES.length - 1)), 560);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 px-3 text-center">
      <motion.span className="h-7 w-7 rounded-full border-2 border-white/30 border-t-white"
        animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }} />
      <AnimatePresence mode="wait">
        <motion.span key={i} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="font-ui text-[11px] font-medium text-white">{STAGES[i]}</motion.span>
      </AnimatePresence>
      <span className="font-ui text-[9px] text-white/60">This can take a minute or two</span>
    </div>
  );
}

export function StudioScene() {
  // 0 sleeves · 1 fabric · 2 generating · 3 the design
  const { ref, step } = useStepLoop([2000, 1700, 3000, 3200], 3);
  const tab = step === 0 ? 0 : 1;
  return (
    <div ref={ref}>
      <Card title="Studio · Kaftan" meta={<span className="font-ui text-[10px] text-[#3A3A3A]/60">Step {tab + 1} of 5</span>}
        label="The Qlozet bespoke studio: pick styles and a fabric, press Generate, and the AI draws your design.">
        <div className="grid grid-cols-[1.1fr_1fr] gap-4 p-4 sm:p-5">
          <div className="flex min-w-0 flex-col gap-3">
            <div className="flex flex-wrap gap-1">
              {TABS.map((t, i) => (
                <span key={t} className={`rounded-full px-2 py-1 font-display text-[8px] font-bold uppercase tracking-[0.12em] transition-colors duration-300 ${i === tab ? "bg-brand-darker text-white" : "bg-brand-light text-[#3A3A3A]/60"}`}>{t}</span>
              ))}
            </div>
            <AnimatePresence mode="wait">
              {tab === 0 ? (
                <motion.div key="style" initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }} className="flex flex-col gap-2">
                  <span className="font-display text-[11px] font-semibold">Sleeves</span>
                  {SLEEVES.map((s) => (
                    <span key={s} className={`rounded-xl border px-3 py-2 font-ui text-[11px] transition-all duration-300 ${s === "Short" ? "border-brand-darker bg-brand-light font-semibold" : "border-black/10"}`}>{s}</span>
                  ))}
                </motion.div>
              ) : (
                <motion.div key="fabric" initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }} className="flex flex-col gap-2">
                  <span className="font-display text-[11px] font-semibold">Fabric</span>
                  <div className="grid grid-cols-3 gap-1.5">
                    {SWATCHES.map((s, i) => (
                      <span key={s} className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-colors duration-300 ${i === 0 ? "border-brand-darker" : "border-transparent"}`}>
                        <Image src={s} alt="" fill className="object-cover" sizes="60px" />
                      </span>
                    ))}
                  </div>
                  <span className="font-ui text-[10px] text-[#3A3A3A]/60">Cashmere wool, chocolate</span>
                </motion.div>
              )}
            </AnimatePresence>
            <span className={`mt-auto flex items-center justify-center gap-1.5 rounded-full py-2.5 font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors duration-300 ${step === 2 ? "bg-brand" : "bg-brand-button"}`}>
              <Sparkles className="h-3 w-3" /> {step === 2 ? "Generating..." : "Generate"}
            </span>
          </div>

          <div className="relative aspect-[2/3] overflow-hidden rounded-xl bg-[#3a2a1f]">
            <AnimatePresence mode="wait">
              {step === 2 ? (
                <motion.div key="gen" className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <GeneratingStages />
                </motion.div>
              ) : step === 3 ? (
                <motion.div key="img" className="absolute inset-0" initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
                  <Image src={IMG.short} alt="" fill className="object-cover" sizes="240px" />
                </motion.div>
              ) : (
                <motion.div key="empty" className="absolute inset-0 flex items-center justify-center p-4 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <span className="font-ui text-[10px] text-white/50">Your design appears here</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Card>
    </div>
  );
}

// ─── Refine: every change is a new version ───────────────────────────────

export function RefineScene() {
  // 0 the design · 1 typing a change · 2 refining · 3 the new version
  const { ref, step } = useStepLoop([1500, 1800, 1900, 3200], 3);
  const typed = "Longer sleeves";
  const [chars, setChars] = useState(step >= 1 ? typed.length : 0);
  useEffect(() => {
    if (step === 0) setChars(0);
    if (step !== 1) {
      if (step > 1) setChars(typed.length);
      return;
    }
    setChars(0);
    const id = setInterval(() => setChars((c) => Math.min(c + 1, typed.length)), 90);
    return () => clearInterval(id);
  }, [step]);
  const versions = step === 3 ? [IMG.sleeveless, IMG.short, IMG.long] : [IMG.sleeveless, IMG.short];
  const current = step === 3 ? IMG.long : IMG.short;

  return (
    <div ref={ref}>
      <Card title="Kaftan" meta={<span className="rounded-full bg-brand-light px-2.5 py-1 font-ui text-[10px] text-[#3A3A3A]/70">See the back</span>}
        label="Refining a design: type a change such as 'Longer sleeves', press Refine, and it's added as a new version you can compare with the others.">
        <div className="flex flex-col gap-4 p-4 sm:p-5">
          <div className="relative mx-auto aspect-[2/3] w-[62%] overflow-hidden rounded-xl bg-[#3a2a1f]">
            <AnimatePresence mode="wait">
              {step === 2 ? (
                <motion.div key="busy" className="absolute inset-0 flex flex-col items-center justify-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <motion.span className="h-7 w-7 rounded-full border-2 border-white/30 border-t-white" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }} />
                  <span className="font-ui text-[11px] text-white">Making the change…</span>
                </motion.div>
              ) : (
                <motion.div key={current} className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                  <Image src={current} alt="" fill className="object-cover" sizes="280px" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="font-display text-[9px] font-bold uppercase tracking-[0.25em] text-[#3A3A3A]/50">Versions</span>
            <div className="flex gap-2">
              <AnimatePresence initial={false}>
                {versions.map((v) => (
                  <motion.span key={v} layout initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                    className={`relative h-14 w-10 overflow-hidden rounded-lg border-2 ${v === current && step !== 2 ? "border-brand-darker" : "border-transparent"}`}>
                    <Image src={v} alt="" fill className="object-cover" sizes="40px" />
                  </motion.span>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-black/10 py-1.5 pl-4 pr-1.5">
            <span className={`flex-1 truncate font-ui text-xs ${chars ? "text-[#111]" : "text-[#3A3A3A]/40"}`}>
              {chars ? typed.slice(0, chars) : "Change something, e.g. longer sleeves"}
              {step === 1 && <span className="ml-px inline-block h-3 w-px animate-pulse bg-[#111] align-middle" />}
            </span>
            <span className={`rounded-full px-4 py-2 font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors ${step >= 1 ? "bg-brand-button" : "bg-brand-button/30"}`}>Refine</span>
          </div>
        </div>
      </Card>
    </div>
  );
}

// ─── Send it to tailors ──────────────────────────────────────────────────

const TAILORS = [
  { name: "Adire Studio", city: "Lagos", reasons: ["Verified by Qlozet", "4.8 ★ from 23 reviews"] },
  { name: "Kola Tailoring", city: "Abuja", reasons: ["Makes kaftans", "31 orders delivered"] },
  { name: "Ife Couture", city: "Ibadan", reasons: ["Supplies your fabric, no transfer cost"] },
];

export function RequestQuotesScene() {
  // 0 none ticked · 1-3 ticking · 4 sent
  const { ref, step } = useStepLoop([1300, 700, 700, 1000, 3000], 4);
  const ticked = Math.min(step, 3);
  const sent = step === 4;
  return (
    <div ref={ref}>
      <Card title="Choose Tailors"
        label="Choosing up to five tailors to send your design to. Each replies with a price and a delivery time, and you only pay when you accept one.">
        <div className="relative flex flex-col gap-3 p-4 sm:p-5">
          <p className="font-ui text-xs leading-relaxed text-[#3A3A3A]/75">
            Pick up to 5 tailors to send this design to. Each replies with a price and a delivery time. You only pay when you accept one.
          </p>
          <span className="font-display text-[9px] font-bold uppercase tracking-[0.25em] text-[#3A3A3A]/50">Best matches for this design</span>
          {TAILORS.map((t, i) => {
            const on = i < ticked;
            return (
              <div key={t.name} className={`flex items-start gap-3 rounded-2xl border p-3 transition-colors duration-300 ${on ? "border-brand-darker bg-brand-light" : "border-black/10"}`}>
                <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors duration-300 ${on ? "border-brand-darker bg-brand-darker text-white" : "border-black/20"}`}>
                  {on && <Check className="h-3 w-3" strokeWidth={3} />}
                </span>
                <span className="flex min-w-0 flex-col gap-1.5">
                  <span className="font-display text-sm font-semibold">{t.name} <span className="font-ui text-[11px] font-normal text-[#3A3A3A]/55">· {t.city}</span></span>
                  <span className="flex flex-wrap gap-1">
                    {t.reasons.map((r) => (
                      <span key={r} className="rounded-full bg-white px-2 py-0.5 font-ui text-[9.5px] text-[#3A3A3A]/80 ring-1 ring-black/5">{r}</span>
                    ))}
                  </span>
                </span>
              </div>
            );
          })}
          <span className="flex items-center gap-2 font-ui text-[11px] text-[#3A3A3A]/70">
            <span className="flex h-4 w-4 items-center justify-center rounded border border-brand-darker bg-brand-darker text-white"><Check className="h-2.5 w-2.5" strokeWidth={3} /></span>
            Also show them my other 2 versions
          </span>
          <span className={`rounded-full py-3 text-center font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors ${ticked ? "bg-brand-button" : "bg-brand-button/30"}`}>
            {ticked ? `Request ${ticked} quote${ticked > 1 ? "s" : ""}` : "Request quotes"}
          </span>

          <AnimatePresence>
            {sent && (
              <motion.div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-white/95 p-6 text-center"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2f7a4b] text-white"><Check className="h-6 w-6" strokeWidth={3} /></span>
                <span className="font-display text-lg font-semibold">Quotes requested!</span>
                <span className="max-w-[260px] font-ui text-xs text-[#3A3A3A]/70">The tailors will send their quotes. Track them under My Designs.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>
    </div>
  );
}

// ─── Pick a quote, pay the deposit ───────────────────────────────────────

const QUOTES = [
  { name: "Adire Studio", total: 90000, fabric: 20000, days: 14 },
  { name: "Kola Tailoring", total: 84000, fabric: 18000, days: 18 },
];

export function QuotesScene() {
  // 0 the quotes · 1 one chosen · 2 confirmed
  const { ref, step } = useStepLoop([2200, 3000, 2800], 1);
  return (
    <div ref={ref}>
      <Card title="Quotes" meta={<span className="font-ui text-[10px] text-[#3A3A3A]/60">Kaftan · choose the tailor you like</span>}
        label="Comparing tailors' quotes for a kaftan and accepting one: ₦49,000 now, a 50% deposit plus ₦4,000 delivery, and ₦45,000 when the outfit is ready and you've seen the photos.">
        <div className="relative flex flex-col gap-3 p-4 sm:p-5">
          {QUOTES.map((q, i) => {
            const chosen = step >= 1 && i === 0;
            return (
              <div key={q.name} className={`flex flex-col gap-2 rounded-2xl border p-4 transition-colors duration-300 ${chosen ? "border-brand-darker bg-brand-light" : "border-black/10"} ${step >= 1 && i !== 0 ? "opacity-50" : ""}`}>
                <div className="flex items-start justify-between gap-3">
                  <span className="flex flex-col">
                    <span className="font-display text-sm font-semibold">{q.name}</span>
                    <span className="font-ui text-[11px] text-[#3A3A3A]/65">Ready to ship {q.days} days after you pay, then delivery.</span>
                  </span>
                  <span className="flex flex-col items-end">
                    <span className="font-display text-base font-semibold tabular-nums">₦{q.total.toLocaleString("en-NG")}</span>
                    <span className="font-ui text-[10px] text-[#3A3A3A]/55">incl. ₦{q.fabric.toLocaleString("en-NG")} fabric</span>
                  </span>
                </div>
                <AnimatePresence>
                  {chosen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="border-t border-black/5 pt-3 font-ui text-[11px] leading-relaxed text-[#3A3A3A]/85">
                        <span className="font-semibold text-[#111]">₦49,000 now</span> (50% deposit + ₦4,000 delivery). ₦45,000 when your outfit is ready and you&apos;ve seen the photos.
                      </p>
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        <span className="rounded-full bg-brand-button py-2.5 text-center font-display text-[9px] font-bold uppercase tracking-[0.15em] text-white">Pay ₦49,000 from wallet</span>
                        <span className="rounded-full border border-brand-darker/20 py-2.5 text-center font-display text-[9px] font-bold uppercase tracking-[0.15em] text-brand-darker">Pay with card</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
          <AnimatePresence>
            {step === 2 && (
              <motion.div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-white/95 p-6 text-center"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2f7a4b] text-white"><Check className="h-6 w-6" strokeWidth={3} /></span>
                <span className="font-display text-lg font-semibold">Order confirmed</span>
                <span className="max-w-[260px] font-ui text-xs text-[#3A3A3A]/70">Adire Studio is making your kaftan.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>
    </div>
  );
}

// ─── See it finished before you pay the balance ──────────────────────────

export function FinishedScene() {
  // 0 photos arrive · 1 approve · 2 paid, shipping
  const { ref, step } = useStepLoop([2600, 1200, 2800], 0);
  return (
    <div ref={ref}>
      <Card title="Order #QL-2051 · Kaftan" meta={<span className="rounded-full bg-[#fdf3e3] px-2.5 py-1 font-ui text-[10px] font-semibold text-[#7a4a0c]">Pre-ship approval</span>}
        label="Your tailor sends photos of the finished outfit. You pay the balance to approve it and the tailor ships it, or ask them to adjust something.">
        <div className="flex flex-col gap-4 p-4 sm:p-5">
          <p className="font-ui text-xs leading-relaxed text-[#3A3A3A]/80">
            Your outfit is finished! Check the photos below. Pay the ₦45,000 balance to approve it and the tailor ships it, or tell them what to adjust.
          </p>
          <div className="grid grid-cols-2 gap-2">
            {[IMG.long, IMG.longSide].map((src, i) => (
              <motion.div key={src} initial={false} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}>
                <Garment src={src} className="aspect-[3/4]" />
              </motion.div>
            ))}
          </div>
          <AnimatePresence mode="wait">
            {step === 2 ? (
              <motion.div key="paid" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="flex items-center gap-2 rounded-xl bg-[#ecf7ef] px-4 py-3 font-ui text-xs text-[#1f5c36]">
                <Check className="h-4 w-4" strokeWidth={3} /> Balance paid. Adire Studio is shipping your kaftan.
              </motion.div>
            ) : (
              <motion.div key="buttons" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid grid-cols-[1.4fr_1fr] gap-2">
                <span className={`rounded-full py-3 text-center font-display text-[10px] font-bold uppercase tracking-[0.15em] text-white transition-colors ${step === 1 ? "bg-brand" : "bg-brand-button"}`}>Approve &amp; pay ₦45,000</span>
                <span className="rounded-full border border-brand-darker/20 py-3 text-center font-display text-[10px] font-bold uppercase tracking-[0.15em] text-brand-darker">Request changes</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>
    </div>
  );
}


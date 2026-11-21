"use client";

// The home page's showcase: four highlights on one side, the live app scene
// for the selected one on the other. It moves on by itself while on screen
// (each scene plays once through), until someone picks one themselves.
// The scenes are the same ones the feature pages use.

import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ScanPhone } from "@/components/live/measure";
import { ProductScene } from "@/components/live/wear";
import { StudioScene } from "@/components/live/design";
import { TrackingScene } from "@/components/live/delivery";

type HighlightsData = typeof import("@/data/home/highlights.json");
type Item = HighlightsData["items"][number];

// Each scene's step loop, summed, less a beat: it moves on while the last
// step is still showing, rather than after the scene has looped to its start.
const SCENES: Record<string, { node: () => ReactNode; ms: number }> = {
  measure: { node: () => <ScanPhone />, ms: 14100 },
  wear: { node: () => <ProductScene />, ms: 7300 },
  studio: { node: () => <StudioScene />, ms: 9500 },
  delivery: { node: () => <TrackingScene />, ms: 7000 },
};

export function HighlightsSection({ data }: { data: HighlightsData }) {
  const items = data.items;
  const [active, setActive] = useState(0);
  const [picked, setPicked] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { amount: 0.4 });
  const reduce = useReducedMotion();
  const auto = !picked && !reduce && inView;
  const ms = SCENES[items[active].scene]?.ms ?? 8000;

  useEffect(() => {
    if (!auto) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % items.length), ms);
    return () => clearTimeout(t);
  }, [auto, active, ms, items.length]);

  const choose = (i: number) => {
    setPicked(true);
    setActive(i);
  };
  const item = items[active];

  return (
    <section ref={sectionRef} id={data.id} className="scroll-mt-32 bg-white py-24 sm:py-32" data-theme="light">
      <div className="mx-auto grid w-full max-w-[94rem] grid-cols-[minmax(0,1fr)] gap-12 px-6 md:px-10 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div className="flex flex-col gap-10 lg:py-6">
          <div className="flex flex-col gap-5">
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/50">{data.eyebrow}</span>
            <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-[#111111] sm:text-6xl [text-wrap:balance]">{data.title}</h2>
            <p className="max-w-md font-ui text-base leading-relaxed text-[#3A3A3A]/65 sm:text-lg">{data.description}</p>
          </div>

          {/* Phones: tabs, then the chosen highlight's words */}
          <div className="flex flex-col gap-6 lg:hidden">
            <div role="tablist" aria-label={data.title} className="grid grid-cols-4 gap-1.5 rounded-full bg-brand-light p-1.5">
              {items.map((it, i) => (
                <button key={it.id} id={`hl-tab-${it.id}`} role="tab" aria-selected={i === active} aria-controls="hl-stage"
                  onClick={() => choose(i)}
                  className={`relative overflow-hidden rounded-full py-2.5 font-ui text-xs font-semibold transition-colors ${i === active ? "bg-white text-brand-darker shadow-sm" : "text-[#3A3A3A]/60"}`}>
                  {it.label}
                  {i === active && auto && <Progress key={`m-${active}`} ms={ms} className="absolute inset-x-4 bottom-1 h-0.5 rounded-full" />}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={item.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
                className="flex flex-col gap-3">
                <h3 className="font-display text-2xl font-semibold text-[#111111]">{item.title}</h3>
                <p className="font-ui text-sm leading-relaxed text-[#3A3A3A]/70">{item.description}</p>
                <CtaLink item={item} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop: the list, the chosen one open */}
          <ol role="tablist" aria-orientation="vertical" aria-label={data.title} className="hidden flex-col lg:flex">
            {items.map((it, i) => {
              const on = i === active;
              return (
                <li key={it.id} className="border-t border-brand-darker/10 last:border-b">
                  <button id={`hl-tab-lg-${it.id}`} role="tab" aria-selected={on} aria-controls="hl-stage" onClick={() => choose(i)}
                    className="group flex w-full items-center gap-5 py-6 text-left focus-visible:outline-none">
                    <span className={`font-display text-sm font-semibold tabular-nums transition-colors ${on ? "text-brand-darker" : "text-[#3A3A3A]/35"}`}>0{i + 1}</span>
                    <span className={`font-display text-2xl font-semibold tracking-tight transition-colors xl:text-3xl ${on ? "text-[#111111]" : "text-[#3A3A3A]/45 group-hover:text-[#111111]"} group-focus-visible:underline`}>
                      {it.title}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {on && (
                      <motion.div key="open" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                        <div className="flex flex-col gap-5 pb-7 pl-11">
                          <p className="max-w-md font-ui text-base leading-relaxed text-[#3A3A3A]/70">{it.description}</p>
                          <CtaLink item={it} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {on && (
                    <span className="-mb-px block h-px bg-brand-darker/10">
                      {auto ? <Progress key={`d-${active}`} ms={ms} className="h-px" /> : <span className="block h-full w-full bg-brand-darker" />}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </div>

        {/* The live scene */}
        <div id="hl-stage" role="tabpanel" aria-label={item.title}
          className="relative flex min-h-[660px] items-center justify-center overflow-hidden rounded-[2.5rem] bg-brand-light px-4 py-10 sm:px-10 lg:min-h-[720px]">
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/60 blur-3xl" />
          <AnimatePresence mode="wait">
            <motion.div key={item.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="relative w-full">
              {SCENES[item.scene]?.node()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Progress({ ms, className = "" }: { ms: number; className?: string }) {
  return (
    <motion.span aria-hidden className={`block origin-left bg-brand-darker ${className}`}
      initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: ms / 1000, ease: "linear" }} />
  );
}

function CtaLink({ item }: { item: Item }) {
  return (
    <Link href={item.cta.href}
      className="group inline-flex w-fit items-center gap-2 font-display text-[11px] font-bold uppercase tracking-[0.25em] text-brand-darker">
      <span className="border-b border-brand-darker/30 pb-1 transition-colors group-hover:border-brand-darker">{item.cta.label}</span>
      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

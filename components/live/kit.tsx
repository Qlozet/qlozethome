"use client";

// Building blocks for the feature pages' "live" illustrations: small,
// animated recreations of the real app screens. Each one shows a single
// moment of a feature, using the app's own words and the platform's real
// rules, so the page shows what people actually get.

import { motion, useInView, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

export const naira = (n: number) => `₦${Math.round(n).toLocaleString("en-NG")}`;

/**
 * Steps through a scene while it's on screen. `durations[i]` is how long
 * step i shows. With reduced motion the scene holds on `rest`, a step that
 * explains the feature on its own.
 */
export function useStepLoop(durations: number[], rest = durations.length - 1) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  // Held in a ref: callers pass a fresh array each render, and re-arming the
  // timer on every render (a count-up re-renders ~60x a second) would stall it.
  const timings = useRef(durations);
  timings.current = durations;

  useEffect(() => {
    if (reduce || !inView) return;
    const d = timings.current;
    const t = setTimeout(() => setStep((s) => (s + 1) % d.length), d[step % d.length]);
    return () => clearTimeout(t);
  }, [step, inView, reduce]);

  return { ref, step: reduce ? rest : step, reduce: !!reduce };
}

/** Counts from `from` to `to` when `run` turns on. */
export function useCountUp(to: number, run: boolean, ms = 900, from = 0) {
  const [v, setV] = useState(run ? to : from);
  useEffect(() => {
    if (!run) {
      setV(from);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      // A frame's timestamp can be a little before `start`; clamp, or the
      // ease curve runs backwards into large negative numbers.
      const p = Math.max(0, Math.min(1, (now - start) / ms));
      setV(from + (to - from) * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, run, ms, from]);
  return v;
}

/** A phone, drawn. Children fill the screen. */
export function PhoneFrame({ children, dark = false, label }: { children: ReactNode; dark?: boolean; label?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="relative mx-auto w-full max-w-[290px] rounded-[2.75rem] bg-[#1b1714] p-[9px] shadow-[0_40px_80px_-30px_rgba(30,16,8,0.45)]"
    >
      <div
        className={`relative aspect-[9/19] w-full overflow-hidden rounded-[2.2rem] ${dark ? "bg-[#14110f] text-white" : "bg-white text-[#111111]"}`}
      >
        <div className="absolute left-1/2 top-2.5 z-30 h-5 w-20 -translate-x-1/2 rounded-full bg-[#1b1714]" />
        {children}
      </div>
    </div>
  );
}

/** A vendor-console panel, drawn: a light card with a title bar. */
export function ConsolePanel({ title, meta, children, label }: { title: string; meta?: ReactNode; children: ReactNode; label?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="w-full max-w-[460px] mx-auto overflow-hidden rounded-[2rem] border border-brand-darker/10 bg-white shadow-[0_40px_80px_-40px_rgba(30,16,8,0.35)]"
    >
      <div className="flex items-center justify-between border-b border-brand-darker/5 bg-brand-light/60 px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-brand-darker/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-brand-darker/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-brand-darker/5" />
          </span>
          <span className="font-display text-sm font-semibold text-brand-darker">{title}</span>
        </div>
        {meta}
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}

type FeatureCopy = { badge: string; title: string; description: string; points?: string[] };

/** Text on one side, the live illustration on the other. */
export function FeatureSection({
  id,
  copy,
  visual,
  flip = false,
  tint = false,
}: {
  id?: string;
  copy: FeatureCopy;
  visual: ReactNode;
  flip?: boolean;
  tint?: boolean;
}) {
  return (
    <section id={id} className={`relative w-full py-24 sm:py-32 ${tint ? "bg-brand-light" : "bg-white"}`} data-theme="light">
      <div className="mx-auto grid max-w-[94rem] grid-cols-[minmax(0,1fr)] items-center gap-16 px-6 md:px-10 lg:grid-cols-2 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`flex min-w-0 flex-col gap-7 ${flip ? "lg:order-2" : ""}`}
        >
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/50">{copy.badge}</span>
          <h2 className="max-w-xl font-display text-4xl font-medium leading-[1.08] tracking-tight text-[#111111] sm:text-5xl lg:text-6xl [text-wrap:balance]">
            {copy.title}
          </h2>
          <p className="max-w-lg font-ui text-base leading-relaxed text-[#3A3A3A]/70 sm:text-lg">{copy.description}</p>
          {copy.points?.length ? (
            <ul className="flex flex-col gap-4 pt-2">
              {copy.points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-darker text-white">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="font-ui text-sm leading-relaxed text-[#3A3A3A]/80 sm:text-base">{p}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </motion.div>
        <div className={`min-w-0 ${flip ? "lg:order-1" : ""}`}>{visual}</div>
      </div>
    </section>
  );
}

/** The page's opening: headline and call to action beside the hero illustration. */
export function LiveHero({
  copy,
  cta,
  visual,
}: {
  copy: FeatureCopy;
  cta: { label: string; href: string };
  visual: ReactNode;
}) {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-32 pb-20 lg:pt-40" data-theme="light">
      <div className="absolute right-0 top-0 -z-10 h-[85%] w-full rounded-bl-[5rem] bg-brand-light lg:w-1/2" />
      <div className="mx-auto grid max-w-[94rem] grid-cols-[minmax(0,1fr)] items-center gap-16 px-6 md:px-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-8"
        >
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/50">{copy.badge}</span>
          <h1 className="max-w-3xl font-display text-[2.6rem] font-medium leading-[1.04] tracking-tight text-[#111111] sm:text-7xl [text-wrap:balance]">
            {copy.title}
          </h1>
          <p className="max-w-xl font-ui text-base leading-relaxed text-[#3A3A3A]/70 sm:text-lg">{copy.description}</p>
          <Link
            href={cta.href}
            className="inline-flex h-14 w-fit items-center justify-center rounded-full bg-brand-button px-10 text-[10px] font-bold uppercase tracking-[0.3em] text-white transition-all hover:scale-[1.02] hover:bg-brand active:scale-95"
          >
            {cta.label}
          </Link>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15 }}>
          {visual}
        </motion.div>
      </div>
    </section>
  );
}

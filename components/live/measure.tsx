"use client";

// Live illustrations for the body-measurement page. Each mirrors a real
// screen in the Qlozet app, using its own wording.

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  Camera,
  Check,
  ChevronDown,
  ChevronLeft,
  Gauge,
  Lock,
  PersonStanding,
  Ruler,
  Send,
  Trash2,
  TriangleAlert,
} from "lucide-react";
import { useEffect, useState } from "react";
import { PhoneFrame, useCountUp, useStepLoop } from "./kit";

// ─── A figure: a person in the camera, or the outline the phone makes ────

type Pose = "front-down" | "front-a" | "side";

const TORSO: Record<"front" | "side", string> = {
  front: "M62 88 Q62 78 74 78 L126 78 Q138 78 138 88 L132 190 Q134 214 128 222 L72 222 Q66 214 68 190 Z",
  side: "M82 88 Q82 78 94 78 L110 78 Q124 78 124 94 L120 190 Q124 214 118 222 L84 222 Q78 214 80 190 Z",
};

function Figure({ pose, outline = false, good = false }: { pose: Pose; outline?: boolean; good?: boolean }) {
  const side = pose === "side";
  const armOut = pose === "front-a" ? 17 : pose === "front-down" ? 4 : 0;
  const legOut = pose === "front-a" ? 6 : pose === "front-down" ? 2 : 0;
  const t = { type: "spring", stiffness: 70, damping: 16 } as const;
  const skin = outline ? "#ffffff" : "#c79a77";
  const top = outline ? "#ffffff" : "#5b6b7a";
  const trousers = outline ? "#ffffff" : "#2f2f36";
  const limb = { transformBox: "fill-box", originX: 0.5, originY: 0.04 } as const;

  return (
    <svg viewBox="0 0 200 400" className="h-full w-full" aria-hidden>
      <g stroke={good ? "#4ADE80" : "none"} strokeWidth={good ? 4 : 0} style={{ transition: "stroke 300ms" }}>
        {/* legs */}
        <motion.rect y={212} width={26} height={176} rx={13} fill={trousers} style={limb}
          initial={false} animate={{ x: side ? 88 : 73, rotate: legOut }} transition={t} />
        <motion.rect y={212} width={26} height={176} rx={13} fill={trousers} style={limb}
          initial={false} animate={{ x: side ? 88 : 101, rotate: -legOut }} transition={t} />
        {/* arms */}
        <motion.rect y={82} width={18} height={134} rx={9} fill={skin} style={limb}
          initial={false} animate={{ x: side ? 93 : 55, rotate: armOut }} transition={t} />
        <motion.rect y={82} width={18} height={134} rx={9} fill={skin} style={limb}
          initial={false} animate={{ x: side ? 93 : 127, rotate: -armOut }} transition={t} />
        {/* torso, neck, head */}
        <motion.path fill={top} initial={false} animate={{ d: side ? TORSO.side : TORSO.front }} transition={t} />
        <motion.rect y={62} width={18} height={20} rx={6} fill={skin} initial={false} animate={{ x: side ? 95 : 91 }} transition={t} />
        <motion.circle cy={44} r={24} fill={skin} initial={false} animate={{ cx: side ? 104 : 100 }} transition={t} />
      </g>
    </svg>
  );
}

function Countdown() {
  const [n, setN] = useState(3);
  useEffect(() => {
    const id = setInterval(() => setN((v) => (v > 1 ? v - 1 : v)), 800);
    return () => clearInterval(id);
  }, []);
  return <span className="font-display text-3xl font-semibold text-white">{n}</span>;
}

function HoldRing() {
  const c = 2 * Math.PI * 34;
  return (
    <div className="relative flex h-24 w-24 items-center justify-center">
      <svg viewBox="0 0 80 80" className="absolute inset-0 -rotate-90" aria-hidden>
        <circle cx="40" cy="40" r="34" fill="rgba(0,0,0,0.35)" stroke="rgba(255,255,255,0.18)" strokeWidth="5" />
        <motion.circle cx="40" cy="40" r="34" fill="none" stroke="#4ADE80" strokeWidth="5" strokeLinecap="round"
          strokeDasharray={c} initial={{ strokeDashoffset: c }} animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 2.4, ease: "linear" }} />
      </svg>
      <Countdown />
    </div>
  );
}

// ─── Hero: the hands-free scan ───────────────────────────────────────────

const SCAN_STEPS = [
  { say: "Step back", sub: "We need to see you from head to toe.", pose: "front-down" as Pose, view: "front", close: true },
  { say: "Arms a little away from your body", sub: "Like an A: hands by your thighs, not touching.", pose: "front-down" as Pose, view: "front" },
  { say: "Hold still", sub: "Taking the front view…", pose: "front-a" as Pose, view: "front", hold: true },
  { say: "Got it", sub: "", pose: "front-a" as Pose, view: "front", flash: true },
  { say: "Turn to your side", sub: "Turn left so your side faces the phone. Arms by your sides.", pose: "side" as Pose, view: "side" },
  { say: "Hold still", sub: "Taking the side view…", pose: "side" as Pose, view: "side", hold: true },
  { say: "All done", sub: "Measuring you now.", pose: "side" as Pose, view: "side", done: true },
];

export function ScanPhone() {
  const { ref, step } = useStepLoop([2000, 2000, 2500, 900, 2200, 2500, 2400], 2);
  const s = SCAN_STEPS[step];
  const captured = step >= 3;

  return (
    <div ref={ref}>
      <PhoneFrame dark label="The Qlozet app's hands-free body scan: it guides you by voice, then takes a front and a side view by itself.">
        {/* the room, through the camera */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#3a322c_0%,#2a241f_62%,#1f1a16_62%,#171310_100%)]" />

        {/* front / side */}
        <div className="absolute inset-x-0 top-10 z-20 flex justify-center gap-2">
          {(["front", "side"] as const).map((v) => (
            <span key={v}
              className={`rounded-full px-3 py-1 font-display text-[9px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${s.view === v ? "bg-white text-[#111]" : "bg-white/10 text-white/50"}`}>
              {v}
            </span>
          ))}
        </div>

        {/* the person */}
        <motion.div className="absolute inset-x-0 top-[17%] mx-auto h-[56%] w-[52%]"
          initial={false} animate={{ scale: s.close ? 1.45 : 1, y: s.close ? "18%" : "0%" }}
          transition={{ type: "spring", stiffness: 60, damping: 16 }}>
          <Figure pose={s.pose} good={!!s.hold} />
        </motion.div>

        {/* the outline already taken */}
        <AnimatePresence>
          {captured && (
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
              className="absolute right-3 top-20 z-20 flex w-[64px] flex-col items-center gap-1">
              <div className="h-[92px] w-full overflow-hidden rounded-lg border border-white/20 bg-black p-1">
                <Figure pose="front-a" outline />
              </div>
              <span className="text-center font-ui text-[7px] leading-tight text-white/60">Only this outline is sent</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* hold ring / done */}
        <div className="absolute inset-x-0 top-[36%] z-20 flex justify-center">
          <AnimatePresence mode="wait">
            {s.hold && (
              <motion.div key={`hold-${step}`} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                <HoldRing />
              </motion.div>
            )}
            {s.done && (
              <motion.div key="done" initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                className="flex h-20 w-20 items-center justify-center rounded-full bg-[#4ADE80]">
                <Check className="h-10 w-10 text-[#0b2a16]" strokeWidth={3} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* flash on capture */}
        <AnimatePresence>
          {s.flash && (
            <motion.div key={`flash-${step}`} className="absolute inset-0 z-30 bg-white"
              initial={{ opacity: 0.85 }} animate={{ opacity: 0 }} transition={{ duration: 0.45 }} />
          )}
        </AnimatePresence>

        {/* what the voice says */}
        <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/80 via-black/50 to-transparent px-5 pb-8 pt-16">
          <AnimatePresence mode="wait">
            <motion.div key={step} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.25 }}>
              <p className="font-display text-xl font-semibold leading-tight text-white">{s.say}</p>
              {s.sub && <p className="mt-1.5 font-ui text-[11px] leading-snug text-white/65">{s.sub}</p>}
            </motion.div>
          </AnimatePresence>
        </div>
      </PhoneFrame>
    </div>
  );
}

// ─── The four ways to measure ────────────────────────────────────────────

const WAYS = [
  { icon: PersonStanding, title: "Body scan", sub: "Stand in front of your phone for about a minute. It guides you by voice.", tag: "Most accurate" },
  { icon: Camera, title: "Two photos", sub: "A front and a side photo. Someone can take them for you." },
  { icon: Gauge, title: "Quick estimate", sub: "From your height and weight. Fastest, least exact." },
  { icon: Ruler, title: "Enter my numbers", sub: "Type them in, or snap your tailor's book and we fill them in." },
];

export function MeasureWays() {
  const { ref, step } = useStepLoop([2200, 2200, 2200, 2200], 0);
  return (
    <div ref={ref}>
      <PhoneFrame label="The app's 'How do you want to measure?' screen with four options: body scan, two photos, quick estimate, or entering your own numbers.">
        <div className="flex h-full flex-col px-4 pb-5 pt-12">
          <ChevronLeft className="h-5 w-5 text-[#111]/70" aria-hidden />
          <p className="mt-3 font-display text-[19px] font-semibold leading-tight">How do you want<br />to measure?</p>
          <div className="mt-4 flex flex-col gap-2">
            {WAYS.map((w, i) => {
              const on = i === step;
              const Icon = w.icon;
              return (
                <div key={w.title}
                  className={`flex gap-2.5 rounded-2xl border p-2.5 transition-all duration-300 ${on ? "border-brand-darker bg-brand-light shadow-sm" : "border-black/10 bg-white"}`}>
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${on ? "bg-brand-darker text-white" : "bg-brand-light text-brand-darker"}`}>
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="flex min-w-0 flex-col gap-0.5">
                    <span className="flex flex-wrap items-center gap-1.5">
                      <span className="font-display text-[12px] font-semibold">{w.title}</span>
                      {w.tag && <span className="rounded-full bg-brand-darker px-1.5 py-[1px] font-ui text-[7.5px] font-bold uppercase tracking-wide text-white">{w.tag}</span>}
                    </span>
                    <span className="font-ui text-[9.5px] leading-snug text-[#3A3A3A]/70">{w.sub}</span>
                  </span>
                </div>
              );
            })}
          </div>
          <div className="mt-auto rounded-full bg-brand-button py-3 text-center font-display text-[10px] font-bold uppercase tracking-[0.25em] text-white">
            Continue
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}

// ─── Only an outline leaves the phone ────────────────────────────────────

export function OutlineFlow() {
  // 0 photo · 1 outline · 2 sending · 3 measuring · 4 measured, outline discarded
  const { ref, step } = useStepLoop([1700, 1500, 1500, 1500, 2600], 4);
  const outlined = step >= 1;
  return (
    <div ref={ref} role="img"
      aria-label="Your phone turns the photo into a plain outline. Only the outline is sent to Qlozet, measured, then discarded."
      className="mx-auto w-full max-w-[520px] rounded-[2.5rem] border border-brand-darker/10 bg-white p-6 shadow-[0_40px_80px_-40px_rgba(30,16,8,0.35)] sm:p-8">
      <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-stretch">
        {/* the phone */}
        <div className="flex w-[150px] flex-col items-center gap-2">
          <span className="font-display text-[9px] font-bold uppercase tracking-[0.3em] text-[#3A3A3A]/50">Your phone</span>
          <div className="relative aspect-[3/5] w-full overflow-hidden rounded-2xl border-[5px] border-[#1b1714]">
            <motion.div className="absolute inset-0 bg-[linear-gradient(180deg,#d9cfc4_0%,#cbbfb2_65%,#b5a797_65%,#a89a8a_100%)]"
              animate={{ opacity: outlined ? 0 : 1 }} transition={{ duration: 0.6 }} />
            <motion.div className="absolute inset-0 bg-black" animate={{ opacity: outlined ? 1 : 0 }} transition={{ duration: 0.6 }} />
            <div className="absolute inset-x-[18%] top-[6%] bottom-[2%]">
              <Figure pose="front-a" outline={outlined} />
            </div>
          </div>
          <span className="flex items-center gap-1 font-ui text-[10px] text-[#3A3A3A]/70">
            <Lock className="h-3 w-3" /> {outlined ? "Photo stays here" : "Photo"}
          </span>
        </div>

        {/* the trip */}
        <div className="relative flex h-14 w-full items-center sm:h-auto sm:flex-1">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 border-l border-dashed border-brand-darker/25 sm:left-0 sm:right-0 sm:top-1/2 sm:h-px sm:w-full sm:translate-x-0 sm:border-l-0 sm:border-t" />
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <AnimatePresence>
              {step === 2 && (
                <motion.span key="chip"
                  className="flex items-center gap-1 whitespace-nowrap rounded-full bg-brand-darker px-2.5 py-1 font-ui text-[9px] font-semibold text-white"
                  initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 40 }}
                  transition={{ duration: 0.6 }}>
                  <Send className="h-2.5 w-2.5" /> outline only
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Qlozet */}
        <div className="flex w-full flex-col gap-2 sm:w-[170px]">
          <span className="text-center font-display text-[9px] font-bold uppercase tracking-[0.3em] text-[#3A3A3A]/50">Qlozet</span>
          <div className="flex min-h-[170px] flex-col justify-center gap-2 rounded-2xl bg-brand-light p-4">
            <AnimatePresence mode="wait">
              {step < 3 ? (
                <motion.p key="wait" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="text-center font-ui text-[11px] text-[#3A3A3A]/60">
                  {step === 2 ? "Receiving the outline…" : "Waiting for your scan"}
                </motion.p>
              ) : step === 3 ? (
                <motion.div key="measuring" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-2">
                  <motion.span className="h-6 w-6 rounded-full border-2 border-brand-darker/20 border-t-brand-darker"
                    animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }} />
                  <span className="font-ui text-[11px] text-[#3A3A3A]/70">Measuring…</span>
                </motion.div>
              ) : (
                <motion.div key="done" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-1.5">
                  {[["Chest", 98], ["Waist", 82], ["Hip", 99]].map(([k, v]) => (
                    <div key={k} className="flex justify-between font-ui text-[11px]">
                      <span className="text-[#3A3A3A]/70">{k}</span>
                      <span className="font-semibold tabular-nums text-[#111]">{v} cm</span>
                    </div>
                  ))}
                  <span className="mt-1 flex items-center gap-1 rounded-full bg-white px-2 py-1 font-ui text-[9.5px] text-[#3A3A3A]/80">
                    <Trash2 className="h-3 w-3" /> Outline discarded
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Review, then save ───────────────────────────────────────────────────

const RESULT = [
  ["Chest", 98], ["Waist", 82], ["Hip", 99], ["Shoulder", 46], ["Arm length", 60], ["Leg length", 82], ["Neck", 39],
] as const;

function ResultRow({ label, value, delay }: { label: string; value: number; delay: number }) {
  const [go, setGo] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setGo(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  const v = useCountUp(value, go, 700);
  return (
    <div className="flex items-center justify-between border-b border-black/5 py-1.5">
      <span className="font-ui text-[11px] text-[#3A3A3A]/75">{label}</span>
      <span className="font-display text-[12px] font-semibold tabular-nums">{Math.round(v)} <span className="font-ui text-[9px] font-normal text-[#3A3A3A]/50">cm</span></span>
    </div>
  );
}

export function ScanResultPhone() {
  // 0 numbers arrive · 1 "Use for my orders" on · 2 saved
  const { ref, step } = useStepLoop([2600, 1400, 2400], 2);
  const [cycle, setCycle] = useState(0);
  useEffect(() => {
    if (step === 0) setCycle((c) => c + 1);
  }, [step]);

  return (
    <div ref={ref}>
      <PhoneFrame label="Your measurements arrive as a list you can check and edit, then save as the set used for your orders.">
        <div className="flex h-full flex-col px-4 pb-5 pt-12">
          <ChevronLeft className="h-5 w-5 text-[#111]/70" aria-hidden />
          <p className="mt-2 font-display text-[18px] font-semibold">My body scan</p>
          <p className="mt-2 rounded-xl bg-brand-light px-3 py-2 font-ui text-[9.5px] leading-snug text-[#3A3A3A]/80">
            Measured from your scan. Have a look, change any number that seems off, then save.
          </p>
          <div key={cycle} className="mt-2 flex flex-col">
            {RESULT.map(([k, v], i) => <ResultRow key={k} label={k} value={v} delay={i * 160} />)}
          </div>
          <div className="mt-3 flex items-center justify-between gap-2 rounded-xl border border-black/10 px-3 py-2">
            <span className="flex flex-col">
              <span className="font-display text-[11px] font-semibold">Use for my orders</span>
              <span className="font-ui text-[9px] text-[#3A3A3A]/60">Make this your default measurement.</span>
            </span>
            <span className={`relative h-5 w-9 shrink-0 rounded-full transition-colors duration-300 ${step >= 1 ? "bg-brand-darker" : "bg-black/15"}`}>
              <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all duration-300 ${step >= 1 ? "left-[18px]" : "left-0.5"}`} />
            </span>
          </div>
          <div className={`mt-auto flex items-center justify-center gap-1.5 rounded-full py-3 font-display text-[10px] font-bold uppercase tracking-[0.25em] text-white transition-colors duration-300 ${step === 2 ? "bg-[#2f7a4b]" : "bg-brand-button"}`}>
            {step === 2 ? <><Check className="h-3.5 w-3.5" strokeWidth={3} /> Saved</> : "Save"}
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}

// ─── Checkout won't take a set that's missing what the outfit needs ─────

export function OrderCheck() {
  // 0 the estimate is missing two · 1 switch to the body scan · 2 ready to pay
  const { ref, step } = useStepLoop([2800, 900, 3000], 2);
  const scan = step >= 1;
  const ready = step === 2;
  return (
    <div ref={ref} role="img"
      aria-label="At checkout, a made-to-measure kaftan checks your chosen measurements. A set missing neck and sleeve length is flagged; the body scan set has everything, so you can pay."
      className="mx-auto w-full max-w-[460px] overflow-hidden rounded-[2rem] border border-brand-darker/10 bg-white shadow-[0_40px_80px_-40px_rgba(30,16,8,0.35)]">
      <div className="border-b border-brand-darker/5 bg-brand-light/60 px-6 py-4 font-display text-sm font-semibold text-brand-darker">Checkout</div>
      <div className="flex flex-col gap-5 p-6">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-14 shrink-0 overflow-hidden rounded-xl bg-brand-light">
            <Image src="/image/bespoke-kaftan-brown-1.png" alt="" fill className="object-cover" sizes="56px" />
          </div>
          <div className="flex flex-1 flex-col">
            <span className="font-display text-sm font-semibold">Kaftan</span>
            <span className="font-ui text-xs text-[#3A3A3A]/60">Made to measure</span>
          </div>
          <span className="font-display text-sm font-semibold tabular-nums">₦85,000</span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.25em] text-[#3A3A3A]/50">Measurements</span>
          <div className={`flex items-center justify-between rounded-xl border px-4 py-3 transition-colors duration-300 ${step === 1 ? "border-brand-darker bg-brand-light" : "border-black/10"}`}>
            <AnimatePresence mode="wait">
              <motion.span key={scan ? "scan" : "est"} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
                className="font-ui text-sm font-medium">{scan ? "My body scan" : "My estimate"}</motion.span>
            </AnimatePresence>
            <ChevronDown className="h-4 w-4 text-[#3A3A3A]/50" />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {ready ? (
            <motion.div key="ok" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="flex items-start gap-2.5 rounded-xl bg-[#ecf7ef] px-4 py-3 font-ui text-xs leading-relaxed text-[#1f5c36]">
              <Check className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={3} /> Every measurement this kaftan needs is here.
            </motion.div>
          ) : (
            <motion.div key="missing" initial={{ opacity: 0, y: 6 }} animate={{ opacity: step === 1 ? 0.4 : 1, y: 0 }} exit={{ opacity: 0 }}
              className="flex items-start gap-2.5 rounded-xl bg-[#fdf3e3] px-4 py-3 font-ui text-xs leading-relaxed text-[#7a4a0c]">
              <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" /> This kaftan needs two more measurements: neck and sleeve length.
            </motion.div>
          )}
        </AnimatePresence>

        <div className={`rounded-full py-4 text-center font-display text-[11px] font-bold uppercase tracking-[0.25em] text-white transition-all duration-300 ${ready ? "bg-brand-button" : "bg-brand-button/30"}`}>
          Pay ₦85,000
        </div>
      </div>
    </div>
  );
}

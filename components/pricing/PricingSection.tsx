"use client";

import { motion } from "framer-motion";

type PricingData = typeof import("@/data/pricing/pricing.json");

type PricingSectionProps = {
  data: PricingData;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function PricingSection({ data }: PricingSectionProps) {
  const { plan, notes } = data;

  return (
    <main className="flex flex-col px-6 pb-24 sm:pb-32" data-theme="dark">
      <div className="mx-auto grid w-full max-w-[94rem] gap-8 lg:grid-cols-[1.25fr_1fr]">
        {/* The one plan */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col gap-10 rounded-[3rem] bg-white p-10 text-[#111111] shadow-2xl shadow-black/20 sm:p-14"
        >
          <h2 className="font-display text-2xl font-medium tracking-tight">{plan.name}</h2>

          <div className="flex flex-wrap items-end gap-x-12 gap-y-6">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-6xl font-medium tracking-tighter sm:text-8xl">{plan.price}</span>
              <span className="font-ui text-sm uppercase tracking-widest text-[#111111]/40">{plan.period}</span>
            </div>
            <div className="flex flex-col gap-1 pb-2">
              <span className="font-display text-4xl font-medium tracking-tighter sm:text-5xl">{plan.commission}</span>
              <span className="font-ui text-sm text-[#111111]/50">{plan.commissionNote}</span>
            </div>
          </div>

          <ul className="flex flex-col gap-5">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-4">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#111111]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-ui text-sm leading-relaxed text-[#111111]/70">{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href={plan.cta.href}
            className="mt-auto flex items-center justify-center rounded-full bg-brand-button px-10 py-5 text-xs font-bold uppercase tracking-[0.3em] text-white shadow-xl transition-all hover:scale-105 hover:bg-brand active:scale-[0.98]"
          >
            {plan.cta.label}
          </a>
        </motion.div>

        {/* How the money works */}
        <div className="flex flex-col gap-8">
          {notes.map((note, i) => (
            <motion.div
              key={note.title}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease, delay: 0.15 * (i + 1) }}
              className="flex flex-col gap-4 rounded-[2.5rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
            >
              <h3 className="font-display text-xl font-medium tracking-tight text-white">{note.title}</h3>
              <p className="font-ui text-sm leading-relaxed text-white/60">{note.text}</p>
              {"cta" in note && note.cta && (
                <a
                  href={note.cta.href}
                  className="mt-2 flex w-fit items-center justify-center rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.3em] text-brand-button shadow-2xl transition-all hover:scale-105 hover:bg-brand-light active:scale-[0.98]"
                >
                  {note.cta.label}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

"use client";

// Sections for the vendor overview page (/vendor): every vendor feature at a
// glance with a link to its page, the steps from sign-up to payout, who it's
// for, and the closing call to action. The hero and the money section reuse
// the live scenes from the feature pages.

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Feature = { title: string; text: string; chip?: string; href: string };

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

function Heading({ badge, title }: { badge: string; title: string }) {
  return (
    <motion.div {...fade} className="flex flex-col gap-5">
      <span className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/50">{badge}</span>
      <h2 className="max-w-3xl font-display text-4xl font-medium leading-[1.08] tracking-tight text-[#111111] sm:text-5xl lg:text-6xl [text-wrap:balance]">
        {title}
      </h2>
    </motion.div>
  );
}

export function VendorFeatureGrid({ badge, title, items }: { badge: string; title: string; items: Feature[] }) {
  return (
    <section className="w-full bg-white py-24 sm:py-32" data-theme="light">
      <div className="mx-auto flex max-w-[94rem] flex-col gap-14 px-6 md:px-10">
        <Heading badge={badge} title={title} />
        <div className="grid grid-cols-[minmax(0,1fr)] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((f, i) => (
            <motion.div key={f.href} {...fade} transition={{ ...fade.transition, delay: (i % 4) * 0.06 }}>
              <Link href={f.href}
                className="group flex h-full flex-col gap-4 rounded-[1.5rem] border border-brand-darker/10 bg-white p-6 transition-colors hover:border-brand-darker/30 hover:bg-brand-light/50">
                <span className="flex items-start justify-between gap-3">
                  <span className="font-display text-lg font-semibold leading-snug text-[#111111]">{f.title}</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-brand-darker/40 transition-colors group-hover:text-brand-darker" />
                </span>
                <span className="font-ui text-sm leading-relaxed text-[#3A3A3A]/70">{f.text}</span>
                {f.chip && (
                  <span className="mt-auto w-fit rounded-full bg-brand-light px-3 py-1 font-ui text-[11px] font-medium text-brand-darker">{f.chip}</span>
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VendorSteps({ badge, title, items }: { badge: string; title: string; items: { title: string; text: string }[] }) {
  return (
    <section id="how-it-works" className="scroll-mt-24 w-full bg-white py-24 sm:py-32" data-theme="light">
      <div className="mx-auto grid max-w-[94rem] grid-cols-[minmax(0,1fr)] gap-14 px-6 md:px-10 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Heading badge={badge} title={title} />
        </div>
        <ol className="relative flex flex-col">
          <span aria-hidden className="absolute bottom-6 left-[19px] top-6 w-px bg-brand-darker/10" />
          {items.map((s, i) => (
            <motion.li key={s.title} {...fade} className="relative flex gap-5 py-5">
              <span className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-darker font-display text-sm font-semibold text-white tabular-nums">
                {i + 1}
              </span>
              <span className="flex flex-col gap-1 pt-1.5">
                <span className="font-display text-lg font-semibold text-[#111111] sm:text-xl">{s.title}</span>
                <span className="max-w-lg font-ui text-sm leading-relaxed text-[#3A3A3A]/70 sm:text-base">{s.text}</span>
              </span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function VendorAudience({ badge, title, items }: { badge: string; title: string; items: { title: string; text: string; image: string }[] }) {
  return (
    <section className="w-full bg-brand-light py-24 sm:py-32" data-theme="light">
      <div className="mx-auto flex max-w-[94rem] flex-col gap-14 px-6 md:px-10">
        <Heading badge={badge} title={title} />
        <div className="grid grid-cols-[minmax(0,1fr)] gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((a, i) => (
            <motion.div key={a.title} {...fade} transition={{ ...fade.transition, delay: i * 0.06 }} className="flex flex-col gap-4">
              <span className="relative block aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#d8cdbf]">
                <Image src={a.image} alt="" fill className="object-cover" sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw" />
              </span>
              <span className="font-display text-xl font-semibold text-[#111111]">{a.title}</span>
              <span className="font-ui text-sm leading-relaxed text-[#3A3A3A]/70">{a.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VendorClosing({ title, description, cta, secondary }: {
  title: string; description: string; cta: { label: string; href: string }; secondary?: { label: string; href: string };
}) {
  return (
    <section className="w-full bg-white px-6 py-24 sm:py-32 md:px-10" data-theme="light">
      <motion.div {...fade}
        className="mx-auto flex max-w-[94rem] flex-col items-center gap-8 rounded-[3rem] bg-brand-darker px-6 py-20 text-center sm:py-28">
        <h2 className="max-w-3xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl [text-wrap:balance]">{title}</h2>
        <p className="max-w-xl font-ui text-base leading-relaxed text-white/70 sm:text-lg">{description}</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href={cta.href}
            className="inline-flex h-14 items-center justify-center rounded-full bg-white px-10 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-darker transition-transform hover:scale-[1.02] active:scale-95">
            {cta.label}
          </Link>
          {secondary && (
            <Link href={secondary.href}
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/30 px-10 text-[10px] font-bold uppercase tracking-[0.3em] text-white transition-colors hover:bg-white/10">
              {secondary.label}
            </Link>
          )}
        </div>
      </motion.div>
    </section>
  );
}

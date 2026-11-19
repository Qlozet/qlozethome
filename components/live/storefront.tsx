"use client";

// Live illustrations for "Instant storefront", in the apps' own words: the
// store page shoppers see (cover, logo, Follow, deals, collections, the
// product grid), the console's Store profile that builds it, the store
// address (shop.qlozet.app/s/<name>) with its link preview, and reviews.

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Camera, Check, Copy, Menu, Search, Share2, Star } from "lucide-react";
import type { ReactNode } from "react";
import { ConsolePanel, PhoneFrame, useStepLoop } from "./kit";

const LOOKS = [
  "/image/bespoke-kaftan-brown-2.png", "/image/bespoke-agbada-orange.webp", "/image/bespoke-kaftan-milk-2.png",
  "/image/bespoke-kaftan-blue-1.png", "/image/bespoke-agbada-lime.webp", "/image/bespoke-kaftan-milk-4.png",
];

function Tile({ src, className = "", children }: { src: string; className?: string; children?: ReactNode }) {
  return (
    <span className={`relative block overflow-hidden rounded-xl bg-[#d8cdbf] ${className}`}>
      <Image src={src} alt="" fill className="object-cover" sizes="140px" />
      {children}
    </span>
  );
}

const ACCENTS = ["#5a3825", "#1d4e89", "#2f6b4a", "#8a2c3b"];

// ─── Hero: the store page ────────────────────────────────────────────────

export function StorefrontScene() {
  // 0 the top of the store · 1 scrolled to products · 2 searching
  const { ref, step } = useStepLoop([2600, 2400, 2800], 0);
  return (
    <div ref={ref}>
      <PhoneFrame label="A Qlozet store page: a cover photo, the store's logo and name, its rating, deals and collections, then its products with search and filters.">
        <motion.div animate={{ y: step === 0 ? 0 : -168 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col">
          <div className="relative h-[230px] w-full">
            <Image src="/image/bespoke-kaftan-brown-5.png" alt="" fill className="object-cover object-top" sizes="290px" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5a3825]/30 to-[#5a3825]" />
            <span className="absolute left-3 top-10 flex items-center gap-1.5 rounded-full bg-white/90 py-1 pl-1 pr-2">
              <span className="h-5 w-5 rounded-full bg-[#5a3825]" /><Menu className="h-3 w-3" />
            </span>
            <span className="absolute right-3 top-10 rounded-full bg-white px-2.5 py-1 font-display text-[8px] font-bold tracking-[0.12em] text-[#5a3825]">FOLLOW</span>
            <span className="absolute bottom-10 left-0 right-0 text-center font-display text-2xl font-bold tracking-[0.12em] text-white">ADIRE STUDIO</span>
            <span className="absolute bottom-4 left-0 right-0 text-center font-ui text-[10px] text-white/85">4.8 ★ 23 Reviews</span>
          </div>
          <div className="flex flex-col gap-2.5 bg-[#5a3825] px-3.5 pb-3 pt-1">
            <div className="flex flex-wrap gap-1">
              <span className="rounded-full bg-[#b42318] px-2 py-0.5 font-ui text-[9px] font-semibold text-white">2 Deals</span>
              {["Shop all", "Kaftans", "Agbada", "Sets"].map((c) => (
                <span key={c} className="rounded-full bg-white/15 px-2 py-0.5 font-ui text-[9px] text-white">{c}</span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 bg-white px-3.5 pt-3">
            <span className="font-display text-[13px] font-semibold">Products</span>
            <span className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 font-ui text-[9.5px] transition-colors ${step === 2 ? "border-brand-darker text-[#111]" : "border-black/10 text-[#3A3A3A]/55"}`}>
              <Search className="h-3 w-3" />{step === 2 ? "agbada" : "Search Adire Studio..."}
            </span>
            <div className="flex gap-1">
              {["Sort by", "On sale", "Price", "In-stock"].map((f) => (
                <span key={f} className="rounded-full border border-black/10 px-2 py-0.5 font-ui text-[8.5px] text-[#3A3A3A]/75">{f}</span>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <AnimatePresence initial={false}>
                {(step === 2 ? [LOOKS[1], LOOKS[4]] : [LOOKS[0], LOOKS[1], LOOKS[3], LOOKS[2]]).map((src, i) => (
                  <motion.span key={src} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-0.5">
                    <Tile src={src} className="aspect-[3/4]" />
                    <span className="font-ui text-[9px] font-semibold">{["₦50,000", "₦85,000", "₦47,000", "₦42,000"][i]}</span>
                  </motion.span>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </PhoneFrame>
    </div>
  );
}

// ─── Store profile in the console ────────────────────────────────────────

export function StoreProfileScene() {
  // 0 half done · 1 cover added · 2 colour picked · 3 about filled, complete
  const { ref, step } = useStepLoop([1600, 1500, 1500, 3400], 3);
  const accent = step >= 2 ? ACCENTS[0] : ACCENTS[1];
  const pct = [55, 70, 80, 100][step];
  return (
    <div ref={ref}>
      <ConsolePanel title="Store profile" meta={<span className="font-ui text-[10px] text-[#3A3A3A]/60">What shoppers see</span>}
        label="In the vendor console, Store profile builds your store page: add a cover photo and logo, pick your store colour, and write about the store.">
        <div className="flex flex-col gap-3">
          <div className="relative h-24 overflow-hidden rounded-xl bg-brand-light">
            <AnimatePresence>
              {step >= 1 && (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
                  <Image src="/image/bespoke-kaftan-brown-5.png" alt="" fill className="object-cover object-top" sizes="420px" />
                  <span className="absolute inset-0 transition-colors duration-500" style={{ background: `linear-gradient(to bottom, transparent 30%, ${accent})` }} />
                </motion.span>
              )}
            </AnimatePresence>
            {step === 0 && <span className="absolute inset-0 flex items-center justify-center gap-1.5 font-ui text-[11px] text-[#3A3A3A]/60"><Camera className="h-3.5 w-3.5" /> Add cover photo</span>}
            <span className="absolute bottom-2 left-3 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white font-display text-[10px] font-bold text-white transition-colors duration-500" style={{ background: accent }}>AS</span>
            <span className="absolute bottom-2 right-3 rounded-full bg-white/90 px-2 py-0.5 font-ui text-[9px] font-semibold">View storefront</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-black/5">
              <motion.span className="block h-full rounded-full bg-[#2f7a4b]" animate={{ width: `${pct}%` }} transition={{ duration: 0.6 }} />
            </span>
            <span className="font-ui text-[10px] font-semibold tabular-nums">Profile {pct}% complete</span>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="font-display text-[11px] font-semibold">Storefront look</span>
            <div className="flex gap-2">
              {ACCENTS.map((c, i) => (
                <span key={c} className={`flex h-7 w-7 items-center justify-center rounded-full transition-shadow ${c === accent ? "ring-2 ring-offset-2 ring-[#111]" : ""}`} style={{ background: c }}>
                  {c === accent && <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />}
                  <span className="sr-only">{i}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <span className="flex flex-col gap-0.5 rounded-lg border border-black/10 px-2.5 py-1.5">
              <span className="font-ui text-[9px] text-[#3A3A3A]/55">Store name</span>
              <span className="font-ui text-[11px] font-medium">Adire Studio</span>
            </span>
            <span className="flex flex-col gap-0.5 rounded-lg border border-black/10 px-2.5 py-1.5">
              <span className="font-ui text-[9px] text-[#3A3A3A]/55">City, State</span>
              <span className="font-ui text-[11px] font-medium">Yaba, Lagos</span>
            </span>
          </div>
          <span className="flex min-h-[54px] flex-col gap-0.5 rounded-lg border border-black/10 px-2.5 py-1.5">
            <span className="font-ui text-[9px] text-[#3A3A3A]/55">About the store</span>
            <span className="font-ui text-[11px] leading-relaxed">
              {step === 3 ? "Hand-dyed adire kaftans and agbada, cut to your measurements in Yaba since 2016." : <span className="text-[#3A3A3A]/35">Tell shoppers what you make</span>}
            </span>
          </span>
        </div>
      </ConsolePanel>
    </div>
  );
}

// ─── The store address and its link preview ──────────────────────────────

export function StoreLinkScene() {
  // 0 typing · 1 checking · 2 available, saved · 3 shared, preview
  const { ref, step } = useStepLoop([1400, 1000, 1700, 3600], 3);
  const slug = step === 0 ? "adire-stu" : "adire-studio";
  return (
    <div ref={ref} className="mx-auto flex w-full max-w-[460px] flex-col gap-4">
      <ConsolePanel title="Store address"
        label="Choose your store address on Qlozet, copy the link for your bio, WhatsApp and cards, and it shares with a preview of your store.">
        <div className="flex flex-col gap-3">
          <span className="font-ui text-[11px] text-[#3A3A3A]/70">The link to put in your bio, on WhatsApp and on your cards.</span>
          <span className="flex items-center rounded-xl border border-black/10 px-3 py-2.5 font-ui text-xs">
            <span className="text-[#3A3A3A]/55">shop.qlozet.app/s/</span>
            <b className="text-[#111]">{slug}</b>
            {step === 0 && <span className="ml-px h-3.5 w-px animate-pulse bg-[#111]" />}
            <span className="ml-auto pl-2">
              {step === 1 && <span className="font-ui text-[10px] text-[#3A3A3A]/60">Checking…</span>}
              {step >= 2 && <span className="flex items-center gap-1 font-ui text-[10px] font-semibold text-[#1f5c36]"><Check className="h-3 w-3" strokeWidth={3} />Available</span>}
            </span>
          </span>
          <div className="flex gap-2">
            <span className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-brand-button py-2 font-display text-[9px] font-bold uppercase tracking-[0.15em] text-white">
              {step >= 3 ? <><Check className="h-3 w-3" /> Copied</> : <><Copy className="h-3 w-3" /> Copy link</>}
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-black/15 px-4 py-2 font-display text-[9px] font-bold uppercase tracking-[0.15em]"><Share2 className="h-3 w-3" /> Share</span>
          </div>
        </div>
      </ConsolePanel>
      <AnimatePresence>
        {step === 3 && (
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="ml-auto w-[82%] overflow-hidden rounded-2xl rounded-tr-sm bg-[#dcf3d6] p-1.5 shadow-lg">
            <div className="overflow-hidden rounded-xl bg-white">
              <div className="relative h-24">
                <Image src="/image/bespoke-kaftan-brown-5.png" alt="" fill className="object-cover object-top" sizes="380px" />
                <span className="absolute inset-0 bg-gradient-to-b from-transparent to-[#5a3825]" />
                <span className="absolute bottom-2 left-3 flex items-center gap-2 text-white">
                  <span className="h-7 w-7 rounded-full border-2 border-white bg-[#5a3825]" />
                  <span className="flex flex-col">
                    <span className="font-display text-xs font-semibold">Adire Studio</span>
                    <span className="font-ui text-[9px] text-white/85">Shop on Qlozet · Yaba, Lagos · 24 items</span>
                  </span>
                </span>
              </div>
              <div className="flex flex-col px-3 py-2">
                <span className="font-ui text-[11px] font-semibold">Adire Studio on Qlozet</span>
                <span className="font-ui text-[10px] text-[#3A3A3A]/55">shop.qlozet.app</span>
              </div>
            </div>
            <span className="block px-2 pb-1 pt-1.5 font-ui text-[11px] text-[#1b1714]">New kaftans are in! shop.qlozet.app/s/adire-studio</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Reviews ─────────────────────────────────────────────────────────────

const BARS = [17, 4, 1, 1, 0];

export function ReviewsScene() {
  const { ref, step } = useStepLoop([1600, 3400], 1);
  return (
    <div ref={ref}>
      <PhoneFrame label="Your store's reviews: the average rating, how the stars split, and what buyers wrote about your pieces.">
        <div className="flex h-full flex-col gap-3 px-4 pb-4 pt-11">
          <span className="font-display text-sm font-semibold">Reviews</span>
          <div className="flex items-center gap-4">
            <span className="flex flex-col items-center">
              <span className="font-display text-4xl font-semibold">4.8</span>
              <span className="flex gap-px">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-2.5 w-2.5 fill-[#e0a526] text-[#e0a526]" />)}</span>
              <span className="mt-0.5 font-ui text-[9px] text-[#3A3A3A]/60">23 ratings</span>
            </span>
            <span className="flex flex-1 flex-col gap-1">
              {BARS.map((n, i) => (
                <span key={i} className="flex items-center gap-1.5 font-ui text-[8.5px] text-[#3A3A3A]/60">
                  <span className="w-2">{5 - i}</span>
                  <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-black/5">
                    <motion.span className="block h-full rounded-full bg-[#e0a526]" initial={false}
                      animate={{ width: step >= 1 ? `${(n / 23) * 100}%` : "0%" }} transition={{ duration: 0.8, delay: i * 0.08 }} />
                  </span>
                </span>
              ))}
            </span>
          </div>
          {[
            { who: "Tolu A.", text: "The fit was spot on and it came two days early. The adire is even richer in person.", look: LOOKS[0] },
            { who: "Verified buyer", text: "Beautiful agbada, well finished. Will order again for my brother's wedding.", look: LOOKS[1] },
          ].map((r, i) => (
            <motion.div key={r.who} initial={false} animate={{ opacity: step >= 1 ? 1 : 0, y: step >= 1 ? 0 : 8 }} transition={{ delay: 0.3 + i * 0.2 }}
              className="flex gap-2.5 rounded-xl border border-black/10 p-2.5">
              <Tile src={r.look} className="h-12 w-9 shrink-0 rounded-md" />
              <span className="flex flex-col gap-0.5">
                <span className="flex items-center gap-1.5">
                  <span className="font-ui text-[10px] font-semibold">{r.who}</span>
                  <span className="flex gap-px">{[0, 1, 2, 3, 4].map((k) => <Star key={k} className="h-2 w-2 fill-[#e0a526] text-[#e0a526]" />)}</span>
                </span>
                <span className="font-ui text-[9.5px] leading-relaxed text-[#3A3A3A]/75">{r.text}</span>
              </span>
            </motion.div>
          ))}
        </div>
      </PhoneFrame>
    </div>
  );
}

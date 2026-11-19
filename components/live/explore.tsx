"use client";

// Live illustrations for "Explore", in the shop's own words: Discover rows,
// onboarding (pick looks, follow designers), Your Edit with its why-chips,
// a store page, and saving to the wishlist.

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Check, Heart, Search } from "lucide-react";
import type { ReactNode } from "react";
import { PhoneFrame, useStepLoop } from "./kit";

const LOOKS = [
  "/image/bespoke-kaftan-brown-2.png", "/image/bespoke-agbada-orange.webp", "/image/bespoke-kaftan-milk-2.png",
  "/image/bespoke-kaftan-blue-1.png", "/image/bespoke-agbada-lime.webp", "/image/bespoke-kaftan-milk-4.png",
];

function Tile({ src, className = "", children }: { src: string; className?: string; children?: ReactNode }) {
  return (
    <span className={`relative block overflow-hidden rounded-xl bg-[#d8cdbf] ${className}`}>
      <Image src={src} alt="" fill className="object-cover" sizes="120px" />
      {children}
    </span>
  );
}

// ─── Hero: Discover ──────────────────────────────────────────────────────

const ROWS = [
  { title: "Top Shops", shops: true },
  { title: "Curated For You" },
  { title: "Worth the Hype" },
  { title: "Vendor Deals", deal: true },
];
const SHOPS = ["Adire Studio", "Kola Tailoring", "Ife Couture", "Oba Threads"];

export function DiscoverScene() {
  const { ref, step } = useStepLoop([2400, 2400, 2400, 2400], 0);
  return (
    <div ref={ref}>
      <PhoneFrame label="The Discover page in the Qlozet shop: rows of Top Shops, Curated For You, Worth the Hype and Vendor Deals.">
        <div className="flex h-full flex-col gap-3 px-3.5 pb-4 pt-11">
          <span className="font-display text-[20px] font-semibold">Discover</span>
          <span className="flex items-center gap-2 rounded-full bg-brand-light px-3 py-2 font-ui text-[10px] text-[#3A3A3A]/55">
            <Search className="h-3 w-3" /> What are you looking for today?
          </span>
          <div className="flex flex-col gap-3 overflow-hidden">
            {ROWS.map((r, ri) => (
              <div key={r.title} className="flex flex-col gap-1.5">
                <span className={`font-display text-[11px] font-semibold transition-colors ${ri === step ? "text-[#111]" : "text-[#3A3A3A]/55"}`}>{r.title}</span>
                <motion.div className="flex gap-1.5" animate={{ x: ri === step ? -40 : 0 }} transition={{ duration: 2, ease: "easeInOut" }}>
                  {r.shops
                    ? SHOPS.map((s, i) => (
                        <span key={s} className="flex w-[62px] shrink-0 flex-col items-center gap-1">
                          <Tile src={LOOKS[i]} className="h-[46px] w-[46px] rounded-full" />
                          <span className="w-full truncate text-center font-ui text-[8px]">{s}</span>
                        </span>
                      ))
                    : LOOKS.slice(ri, ri + 4).map((src, i) => (
                        <Tile key={src + i} src={src} className="h-[78px] w-[56px] shrink-0">
                          {r.deal && i === 0 && <span className="absolute left-1 top-1 rounded-full bg-[#b42318] px-1 font-ui text-[7px] font-bold text-white">20% off</span>}
                        </Tile>
                      ))}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}

// ─── Onboarding: pick looks, follow designers ────────────────────────────

export function OnboardingScene() {
  // 0..3 picking · 4 follow designers · 5 following
  const { ref, step } = useStepLoop([900, 700, 700, 1300, 1700, 2600], 3);
  const picked = Math.min(step, 3);
  const follow = step >= 4;
  return (
    <div ref={ref}>
      <PhoneFrame label="Getting started: pick at least three looks you love, then follow designers whose work matches them.">
        <div className="flex h-full flex-col px-3.5 pb-4 pt-11">
          <AnimatePresence mode="wait">
            {!follow ? (
              <motion.div key="looks" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, x: -20 }} className="flex h-full flex-col gap-2">
                <span className="font-display text-[17px] font-semibold leading-tight">Pick looks you love</span>
                <span className="font-ui text-[9.5px] leading-snug text-[#3A3A3A]/65">Tap at least 3. Each one you pick brings up more like it, and your home feed starts from these.</span>
                <div className="grid grid-cols-3 gap-1.5">
                  {LOOKS.map((src, i) => {
                    const on = [0, 2, 4].slice(0, picked).includes(i);
                    return (
                      <Tile key={src} src={src} className={`aspect-[3/4] ring-2 transition-all ${on ? "ring-brand-darker" : "ring-transparent"}`}>
                        {on && <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-darker text-white"><Check className="h-2.5 w-2.5" strokeWidth={3} /></span>}
                      </Tile>
                    );
                  })}
                </div>
                <span className={`mt-auto rounded-full py-2.5 text-center font-display text-[9px] font-bold uppercase tracking-[0.15em] text-white transition-colors ${picked >= 3 ? "bg-brand-button" : "bg-brand-button/30"}`}>
                  {picked >= 3 ? `Continue · ${picked} picked` : `${picked} of 3 picked`}
                </span>
              </motion.div>
            ) : (
              <motion.div key="follow" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="flex h-full flex-col gap-2">
                <span className="font-display text-[17px] font-semibold leading-tight">Follow designers</span>
                <span className="font-ui text-[9.5px] leading-snug text-[#3A3A3A]/65">Stores and tailors whose work matches your picks. You&apos;ll see their new pieces first.</span>
                {SHOPS.slice(0, 3).map((s, i) => {
                  const on = step === 5 && i < 2;
                  return (
                    <span key={s} className="flex items-center gap-2 rounded-xl border border-black/10 p-2">
                      <Tile src={LOOKS[i * 2]} className="h-9 w-9 rounded-full" />
                      <span className="flex-1 font-ui text-[11px] font-medium">{s}</span>
                      <span className={`rounded-full px-2 py-1 font-display text-[8px] font-bold uppercase tracking-[0.1em] ${on ? "bg-brand-darker text-white" : "border border-brand-darker/25 text-brand-darker"}`}>{on ? "Following" : "Follow"}</span>
                    </span>
                  );
                })}
                <span className="mt-auto rounded-full bg-brand-button py-2.5 text-center font-display text-[9px] font-bold uppercase tracking-[0.15em] text-white">
                  {step === 5 ? "Finish · following 2" : "Finish · following 0"}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </PhoneFrame>
    </div>
  );
}

// ─── Your Edit ───────────────────────────────────────────────────────────

const PILLARS = ["Your style", "Your fit", "Your budget", "Your favorites", "Trending"];
const PICKS = [
  { src: LOOKS[0], name: "Kaftan", price: "₦42,000", why: "Fits you" },
  { src: LOOKS[2], name: "Linen kaftan", price: "₦38,500", why: "In your budget" },
  { src: LOOKS[3], name: "Teal kaftan", price: "₦47,000", why: "Trusted vendor" },
  { src: LOOKS[5], name: "Ivory set", price: "₦55,000", why: "Your style" },
];

export function YourEditScene() {
  const { ref, step } = useStepLoop([2000, 2000, 2000, 2000], 0);
  return (
    <div ref={ref}>
      <div role="img" aria-label="Your Edit: picks for you based on your style, fit, budget and favourites, each with a chip saying why it was picked."
        className="mx-auto w-full max-w-[480px] overflow-hidden rounded-[2rem] border border-brand-darker/10 bg-white p-5 shadow-[0_40px_80px_-40px_rgba(30,16,8,0.35)]">
        <span className="font-display text-[9px] font-bold uppercase tracking-[0.25em] text-[#3A3A3A]/50">Curated for you</span>
        <p className="mt-1 font-display text-xl font-semibold">Ada&apos;s Edit</p>
        <p className="mt-1 font-ui text-[11px] leading-relaxed text-[#3A3A3A]/70">Handpicked from your style, your fit, your budget and the pieces you love, refreshed as you shop.</p>
        <div className="mt-3 flex flex-wrap gap-1">
          {PILLARS.map((p) => <span key={p} className="rounded-full bg-brand-light px-2 py-0.5 font-ui text-[9.5px] text-[#3A3A3A]/75">{p}</span>)}
        </div>
        <span className="mt-4 block font-display text-xs font-semibold">Picked for you</span>
        <div className="mt-2 grid grid-cols-4 gap-2">
          {PICKS.map((p, i) => (
            <span key={p.name} className="flex flex-col gap-1">
              <Tile src={p.src} className="aspect-[3/4]">
                <motion.span initial={false} animate={{ opacity: i === step ? 1 : 0.85, scale: i === step ? 1.05 : 1 }}
                  className={`absolute inset-x-1 bottom-1 rounded-full px-1 py-[1px] text-center font-ui text-[7.5px] font-semibold ${i === step ? "bg-brand-darker text-white" : "bg-white/90 text-[#111]"}`}>{p.why}</motion.span>
              </Tile>
              <span className="truncate font-ui text-[9.5px]">{p.name}</span>
              <span className="font-display text-[10px] font-semibold">{p.price}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── A store page ────────────────────────────────────────────────────────

export function StoreScene() {
  // 0 the store · 1 following · 2 filtered to On sale
  const { ref, step } = useStepLoop([2000, 1800, 3000], 1);
  const items = step === 2 ? [LOOKS[0], LOOKS[3]] : [LOOKS[0], LOOKS[2], LOOKS[3], LOOKS[5]];
  return (
    <div ref={ref}>
      <PhoneFrame label="A store page on Qlozet: the store's rating and reviews, a Follow button, collections, filters and its products.">
        <div className="flex h-full flex-col gap-2.5 px-3.5 pb-4 pt-11">
          <div className="flex items-center gap-2.5">
            <Tile src={LOOKS[1]} className="h-11 w-11 rounded-full" />
            <span className="flex flex-1 flex-col">
              <span className="font-display text-[13px] font-semibold">Adire Studio</span>
              <span className="font-ui text-[9.5px] text-[#3A3A3A]/65">4.8 ★ 23 Reviews</span>
            </span>
            <span className={`rounded-full px-2.5 py-1 font-display text-[8px] font-bold tracking-[0.12em] transition-colors ${step >= 1 ? "bg-brand-darker text-white" : "border border-brand-darker/30 text-brand-darker"}`}>
              {step >= 1 ? "FOLLOWING" : "FOLLOW"}
            </span>
          </div>
          <div className="flex gap-1">
            {["All", "Kaftans", "Agbada", "Sets"].map((c, i) => (
              <span key={c} className={`rounded-full px-2 py-0.5 font-ui text-[9px] ${i === 0 ? "bg-brand-darker text-white" : "bg-brand-light text-[#3A3A3A]/75"}`}>{c}</span>
            ))}
          </div>
          <div className="flex gap-1">
            {["Sort by", "On sale", "Price", "In-stock"].map((f) => (
              <span key={f} className={`rounded-full border px-2 py-0.5 font-ui text-[9px] transition-colors ${f === "On sale" && step === 2 ? "border-brand-darker bg-brand-light font-semibold" : "border-black/10 text-[#3A3A3A]/75"}`}>{f}</span>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            <AnimatePresence initial={false}>
              {items.map((src, i) => (
                <motion.span key={src} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-0.5">
                  <Tile src={src} className="aspect-[3/4]">
                    {step === 2 && <span className="absolute left-1 top-1 rounded-full bg-[#b42318] px-1 font-ui text-[7px] font-bold text-white">{i === 0 ? "16% off" : "10% off"}</span>}
                  </Tile>
                </motion.span>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}

// ─── Save it for later ───────────────────────────────────────────────────

export function WishlistScene() {
  // 0 browsing · 1 saved · 2 wishlist
  const { ref, step } = useStepLoop([1500, 1800, 3000], 2);
  return (
    <div ref={ref}>
      <div role="img" aria-label="Tap the heart to save a piece. It goes to your Wishlist, and what you save shapes what Qlozet shows you."
        className="relative mx-auto w-full max-w-[480px] overflow-hidden rounded-[2rem] border border-brand-darker/10 bg-white p-5 shadow-[0_40px_80px_-40px_rgba(30,16,8,0.35)]">
        <AnimatePresence mode="wait">
          {step < 2 ? (
            <motion.div key="card" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-3">
              <Tile src={LOOKS[3]} className="aspect-[3/4] w-48">
                <motion.span animate={{ scale: step === 1 ? [1, 1.3, 1] : 1 }} transition={{ duration: 0.4 }}
                  className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow">
                  <Heart className={`h-4 w-4 ${step === 1 ? "fill-[#b42318] text-[#b42318]" : "text-[#111]"}`} />
                </motion.span>
              </Tile>
              <span className="font-ui text-sm font-medium">Teal kaftan · ₦47,000</span>
              <AnimatePresence>
                {step === 1 && (
                  <motion.span initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="rounded-xl bg-[#1b1714] px-4 py-2 font-ui text-xs text-white">Saved to wishlist</motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-3">
              <span className="flex items-baseline justify-between">
                <span className="font-display text-lg font-semibold">Wishlist</span>
                <span className="font-ui text-xs text-[#3A3A3A]/60">3 Items</span>
              </span>
              <div className="grid grid-cols-3 gap-2">
                {[LOOKS[3], LOOKS[0], LOOKS[5]].map((src) => (
                  <Tile key={src} src={src} className="aspect-[3/4]">
                    <span className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white"><Heart className="h-3 w-3 fill-[#b42318] text-[#b42318]" /></span>
                  </Tile>
                ))}
              </div>
              <span className="font-ui text-[11px] text-[#3A3A3A]/65">Sorted by Recently Added</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

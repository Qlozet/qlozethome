"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type PricingData = typeof import("@/data/pricing/pricing.json");

type PricingSectionProps = {
  data: PricingData;
};

export function PricingSection({ data }: PricingSectionProps) {
  const [currency, setCurrency] = useState<"usd" | "ngn">("usd");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] as any 
      }
    }
  };

  return (
    <main className="flex flex-col px-6 pb-24 sm:pb-32" data-theme="dark">
      <div className="mx-auto w-full max-w-[94rem]">
        {/* Currency Toggle - Minimalist Editorial version */}
        <div className="mb-24 flex items-center justify-start gap-6">
          <span className={`font-display text-xs font-bold uppercase tracking-[0.3em] transition-colors duration-500 ${currency === "ngn" ? "text-white" : "text-white/30"}`}>
            {data.currency.ngn}
          </span>
          <button
            onClick={() => setCurrency(currency === "usd" ? "ngn" : "usd")}
            className="group relative h-7 w-14 rounded-full bg-white/10 p-1 transition-all duration-500 hover:bg-white/20"
            aria-label="Toggle currency"
          >
            <div
              className={`h-5 w-5 rounded-full bg-white transition-all duration-500 shadow-xl ${currency === "usd" ? "translate-x-7" : "translate-x-0"}`}
            />
          </button>
          <span className={`font-display text-xs font-bold uppercase tracking-[0.3em] transition-colors duration-500 ${currency === "usd" ? "text-white" : "text-white/30"}`}>
            {data.currency.usd}
          </span>
        </div>

        {/* Pricing Cards Architecture */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid w-full gap-8 lg:grid-cols-3"
        >
          {data.plans.map((plan) => {
            const isFeatured = plan.id === "premium";
            
            return (
              <motion.div
                variants={cardVariants}
                key={plan.id}
                className={`flex flex-col gap-10 rounded-[3rem] p-10 transition-all duration-700 hover:scale-[1.02] ${
                  isFeatured 
                    ? "bg-white text-[#3A3A3A] shadow-2xl shadow-black/20" 
                    : "bg-white/5 border border-white/10 text-white backdrop-blur-xl"
                }`}
              >
                <div className="flex flex-col gap-8">
                  <div className="flex items-center justify-between">
                    <h2 className={`font-display text-2xl font-medium tracking-tight ${isFeatured ? "text-[#3A3A3A]" : "text-white"}`}>
                      {plan.name}
                    </h2>
                    {isFeatured && (
                      <span className="rounded-full bg-[#3A3A3A] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                        Recommended
                      </span>
                    )}
                  </div>

                  <div className="flex items-baseline gap-3">
                    <span className={`font-display text-5xl font-medium tracking-tighter sm:text-7xl ${isFeatured ? "text-[#3A3A3A]" : "text-white"}`}>
                      {plan.price[currency] === "*" ? "Custom" : plan.price[currency].toLocaleString()}
                    </span>
                    <span className={`font-ui text-sm uppercase tracking-widest ${isFeatured ? "text-[#3A3A3A]/40" : "text-white/40"}`}>
                      {plan.price[currency] !== "*" && `/ ${plan.period}`}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <svg
                        className={`h-5 w-5 shrink-0 mt-0.5 ${isFeatured ? "text-[#3A3A3A]" : "text-white/60"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <p className={`font-ui text-sm leading-relaxed ${isFeatured ? "text-[#3A3A3A]/60" : "text-white/40"}`}>
                        {feature.highlight && feature.highlightText ? (
                          <>
                            {feature.text.split(feature.highlightText)[0]}
                            <span className={`font-bold italic ${isFeatured ? "text-[#3A3A3A]" : "text-white"}`}>
                              {feature.highlightText}
                            </span>
                            {feature.text.split(feature.highlightText)[1]}
                          </>
                        ) : (
                          feature.text
                        )}
                      </p>
                    </div>
                  ))}
                </div>

                <a
                  href={plan.cta.href}
                  className={`mt-auto flex items-center justify-center rounded-full px-10 py-5 text-xs font-bold uppercase tracking-[0.3em] transition-all hover:scale-105 active:scale-[0.98] ${
                    isFeatured
                      ? "bg-[#3A3A3A] text-white shadow-xl"
                      : "bg-white text-[#3A3A3A] shadow-2xl"
                  }`}
                >
                  {plan.cta.label}
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </main>
  );
}

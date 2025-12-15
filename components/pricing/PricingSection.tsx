"use client";

import { useState } from "react";

type PricingData = typeof import("@/data/pricing/pricing.json");

type PricingSectionProps = {
  data: PricingData;
};

export function PricingSection({ data }: PricingSectionProps) {
  const [currency, setCurrency] = useState<"usd" | "ngn">("usd");

  return (
    <main className="flex flex-col items-center px-6 py-32">
      {/* Currency Toggle */}
      <div className="mb-16 flex items-center gap-4">
        <span className={`text-lg font-semibold ${currency === "ngn" ? "text-[#1b1b1b]" : "text-gray-400"}`}>
          {data.currency.ngn}
        </span>
        <button
          onClick={() => setCurrency(currency === "usd" ? "ngn" : "usd")}
          className="relative h-8 w-16 rounded-full bg-[#5a4a3a] transition"
          aria-label="Toggle currency"
        >
          <div
            className={`absolute top-1 h-6 w-6 rounded-full bg-white transition-transform ${currency === "usd" ? "translate-x-9" : "translate-x-1"
              }`}
          />
        </button>
        <span className={`text-lg font-semibold ${currency === "usd" ? "text-[#1b1b1b]" : "text-gray-400"}`}>
          {data.currency.usd}
        </span>
      </div>

      {/* Pricing Cards */}
      <div className="grid w-full max-w-7xl items-start gap-8 lg:grid-cols-3">
        {data.plans.map((plan) => (
          <div
            key={plan.id}
            className="flex h-fit flex-col gap-6 rounded-3xl bg-white p-8 shadow-lg"
          >
            <div>
              <h2 className="mb-4 text-xl font-semibold text-[#1b1b1b]">
                {plan.name}
              </h2>
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-medium uppercase text-gray-400">
                  {currency.toUpperCase()}
                </span>
                <span className="text-5xl font-bold text-[#1b1b1b]">
                  {plan.price[currency].toLocaleString()}
                </span>
                <span className="text-lg text-gray-400">
                  / {plan.period}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-[#1b1b1b]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {feature.highlight && feature.highlightText ? (
                      <>
                        {feature.text.split(feature.highlightText)[0]}
                        <span className="font-semibold italic text-[#1b1b1b]">
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
              className={`mt-auto flex items-center justify-center rounded-lg px-8 py-4 text-sm font-bold uppercase tracking-wider transition ${plan.id === "enterprise"
                ? "border-2 border-[#1b1b1b] bg-transparent text-[#1b1b1b] hover:bg-[#1b1b1b] hover:text-white"
                : "bg-[#5a4a3a] text-white hover:bg-[#4a3a2a]"
                }`}
            >
              {plan.cta.label}
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}


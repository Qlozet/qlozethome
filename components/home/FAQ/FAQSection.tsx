"use client";

import { useState } from "react";

import { SectionHeading } from "@/components/common/SectionHeading";

type FAQData = typeof import("@/data/home/faq.json");

type FAQSectionProps = {
  data: FAQData;
};

export function FAQSection({ data }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id={data.id} className="bg-white py-24 sm:py-32 scroll-mt-32 overflow-x-hidden">
      <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-6">
        <div className="relative mx-auto w-full max-w-full rounded-[3rem] bg-[#3a3a3a] px-6 py-10 text-white shadow-[0_35px_80px_-40px_rgba(58,58,58,0.6)] sm:px-12 sm:py-14 lg:px-16 lg:py-16">
          <div className="flex flex-col gap-12">
            <SectionHeading title={data.title} align="center" theme="dark" />
            <div className="flex flex-col divide-y divide-white/15 rounded-4xl border border-white/15 bg-white/5">
              {data.items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={item.question}>
                    <button
                      type="button"
                      className="flex w-full items-start justify-between gap-4 px-4 py-4 text-left sm:px-6 sm:py-6"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <span className="flex-1 text-base font-semibold text-white wrap-break-word">
                        {item.question}
                      </span>
                      <span className="shrink-0 text-2xl font-light text-white/70">{isOpen ? "–" : "+"}</span>
                    </button>
                    {isOpen ? (
                      <div className="px-4 pb-4 text-sm leading-relaxed text-white/70 sm:px-6 sm:pb-6 wrap-break-word">
                        {item.answer}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



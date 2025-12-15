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
    <section id={data.id} className="bg-white py-24 sm:py-32 scroll-mt-32">
      <div className="mx-auto w-full max-w-[90rem] px-6">
        <div className="relative left-1/2 w-[calc(100%+3rem)] -translate-x-1/2 rounded-[3rem] bg-[#3a3a3a] px-10 py-14 text-white shadow-[0_35px_80px_-40px_rgba(58,58,58,0.6)] sm:w-[calc(100%+6rem)] sm:px-16 sm:py-16">
          <div className="flex flex-col gap-12">
            <SectionHeading title={data.title} align="center" theme="dark" />
            <div className="flex flex-col divide-y divide-white/15 rounded-[2rem] border border-white/15 bg-white/5">
              {data.items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={item.question}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <span className="text-base font-semibold text-white">
                        {item.question}
                      </span>
                      <span className="text-2xl font-light text-white/70">{isOpen ? "–" : "+"}</span>
                    </button>
                    {isOpen ? (
                      <div className="px-6 pb-6 text-sm leading-relaxed text-white/70">
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



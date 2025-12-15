"use client";

import { useState } from "react";
import Image from "next/image";

type PillarsData = typeof import("@/data/user/explore/quality.json");

type PillarsSectionProps = {
  data: PillarsData;
};

export function PillarsSection({ data }: PillarsSectionProps) {
  const [activeTab, setActiveTab] = useState(data.tabs[0].id);

  const activeTabData = data.tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="relative z-10 bg-[#3A3A3A] rounded-t-[5rem] mt-[-100px] px-6 py-16 sm:py-24 pb-[200px] sm:pb-[200px]">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <h2 className="mb-4 text-center text-3xl font-normal text-white sm:text-4xl lg:text-5xl">
          {data.title}
        </h2>

        {/* Subtitle */}
        <p className="mb-12 text-center text-base text-white-600 sm:mb-16 sm:text-lg">
          {data.subtitle}
        </p>

        {/* Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-4 rounded-2xl bg-gray-100 p-2">
          {data.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-xl px-6 py-3 text-sm font-medium transition ${activeTab === tab.id
                ? "bg-[#3A3A3A] text-white shadow-sm"
                : "text-gray-600 hover:text-black"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        {activeTabData && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activeTabData.items.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl bg-gray-50 p-8 transition hover:bg-gray-100"
              >
                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white">
                  <div className="relative h-6 w-6">
                    <Image
                      src={item.icon}
                      alt={`${item.title} icon`}
                      fill
                      className="object-contain"
                      sizes="24px"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-normal text-black">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}



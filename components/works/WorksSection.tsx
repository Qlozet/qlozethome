"use client";

import Image from "next/image";
import { useState } from "react";

type WorksData = typeof import("@/data/works/works.json");

type WorksSectionProps = {
  data: WorksData;
};

export function WorksSection({ data }: WorksSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id={data.id} className="scroll-mt-32 bg-[#3a3a3a] py-24 pb-[250px] sm:pb-[250px] sm:py-32">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="relative inline-block text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
            {data.title}
            <div className="absolute -bottom-2 left-1/2 h-1 w-48 -translate-x-1/2 bg-[#f59e0b]" />
          </h2>
          <h3 className="text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
            {data.subtitle}
          </h3>
          <p className="max-w-4xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            {data.description}
          </p>
        </div>

        <div className="relative w-full overflow-hidden rounded-3xl shadow-[0_40px_100px_-40px_rgba(0,0,0,0.9)]">
          <div className="relative aspect-video w-full bg-white">
            {!isPlaying ? (
              <>
                <Image
                  src={data.video.thumbnail}
                  alt={data.video.alt}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1280px) 1200px, 90vw"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="group flex items-center justify-center transition"
                    aria-label="Play video"
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[0_12px_48px_-12px_rgba(0,0,0,0.4)] transition hover:scale-110 sm:h-24 sm:w-24 lg:h-28 lg:w-28">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="ml-1.5 h-10 w-10 text-black sm:h-12 sm:w-12 lg:h-14 lg:w-14"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </>
            ) : (
              <iframe
                src={`${data.video.url}?autoplay=1`}
                title="How Qlozet vendor platform works"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


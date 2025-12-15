"use client";

import Image from "next/image";
import { useState } from "react";

type VideoData = typeof import("@/data/vendor/vendorlanding/video.json");

type VideoProps = {
  data: VideoData;
};

export function VendorVideo({ data }: VideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id={data.id}
      className="scroll-mt-32 bg-[#d4d4d4] py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto grid w-full max-w-380 items-center gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 xl:gap-24">
        <div className="flex flex-col gap-6">
          <h2 className="text-5xl font-semibold leading-tight text-[#1b1b1b] sm:text-6xl lg:text-[48px] xl:text-[48px]">
            {data.title}
          </h2>
        </div>
        <div className="relative w-full overflow-hidden rounded-[2.5rem] shadow-[0_40px_100px_-40px_rgba(0,0,0,0.4)]">
          <div className="relative aspect-video w-full bg-white">
            {!isPlaying ? (
              <>
                <Image
                  src={data.thumbnail.src}
                  alt={data.thumbnail.alt}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1440px) 800px, (min-width: 1024px) 55vw, 95vw"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="group flex items-center justify-center transition"
                    aria-label="Play video"
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-black shadow-[0_12px_48px_-12px_rgba(0,0,0,0.4)] transition hover:scale-110 sm:h-24 sm:w-24 lg:h-28 lg:w-28">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="ml-1.5 h-10 w-10 text-white sm:h-12 sm:w-12 lg:h-14 lg:w-14"
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
                src={`${data.videoUrl}?autoplay=1`}
                title="Vendor platform demo"
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

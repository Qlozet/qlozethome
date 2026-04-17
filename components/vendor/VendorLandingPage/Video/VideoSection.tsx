"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

type VideoData = typeof import("@/data/vendor/vendorlanding/video.json");

type VideoProps = {
  data: VideoData;
};

export function VendorVideo({ data }: VideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  return (
    <section id={data.id} className="scroll-mt-32 bg-[#3A3A3A] py-24 sm:py-32 lg:py-48 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto w-full max-w-[94rem] px-6"
      >
        <div className="grid w-full items-center gap-16 lg:grid-cols-[0.8fr,1.2fr] lg:gap-24">
          {/* Header Column */}
          <div className="flex flex-col gap-8">
            <motion.span variants={itemVariants} className="font-display text-[10px] font-semibold uppercase tracking-[0.4em] text-white/40">
              Platform Preview
            </motion.span>
            <motion.h2 variants={itemVariants} className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {data.title}
            </motion.h2>
          </div>

          {/* Video Column */}
          <motion.div variants={itemVariants} className="relative w-full overflow-hidden rounded-[3rem] border border-white/10 bg-[#2A2A2A] shadow-2xl shadow-black/40">
            <div className="relative aspect-video w-full">
              {!isPlaying ? (
                <>
                  <Image
                    src={data.thumbnail.src}
                    alt={data.thumbnail.alt}
                    fill
                    className="object-cover transition-transform duration-1000 hover:scale-105"
                    sizes="(min-width: 1440px) 1000px, (min-width: 1024px) 60vw, 95vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="group relative flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                      aria-label="Play video"
                    >
                      <div className="absolute -inset-4 animate-pulse rounded-full border border-white/20" />
                      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-[#3A3A3A] shadow-2xl transition-colors hover:bg-neutral-100 sm:h-28 sm:w-28">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="ml-1 h-10 w-10"
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
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

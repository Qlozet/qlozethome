"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type WorksData = typeof import("@/data/works/works.json");

type WorksSectionProps = {
  data: WorksData;
};

export function WorksSection({ data }: WorksSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id={data.id} className="relative z-20 -mt-32 flex w-full flex-col items-center justify-center px-6 pb-32" data-theme="dark">
      {/* Massive Edge-to-Edge Screening Room */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as any, delay: 0.2 }}
        className="relative mx-auto aspect-[16/9] w-full max-w-[100rem] overflow-hidden bg-[#050505] shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
      >
        {!isPlaying ? (
          <div className="group relative h-full w-full">
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-1000 group-hover:opacity-40" />
            
            <Image
              src={data.video.thumbnail}
              alt={data.video.alt}
              fill
              className="object-cover grayscale-[0.8] brightness-50 transition-all duration-[2s] group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100"
              sizes="100vw"
              priority
            />

            {/* Massive Play Button Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
              <button
                onClick={() => setIsPlaying(true)}
                className="group/btn flex flex-col items-center gap-8 transition-transform duration-700 hover:scale-110 active:scale-95"
                aria-label="Play video"
              >
                <div className="flex h-32 w-32 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-md transition-all duration-700 group-hover/btn:border-white group-hover/btn:bg-white group-hover/btn:text-black sm:h-48 sm:w-48">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="ml-2 h-16 w-16 sm:h-20 sm:w-20">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                
                {/* Subtle Action Text */}
                <div className="flex items-center gap-4 opacity-0 transition-opacity duration-700 group-hover/btn:opacity-100">
                  <span className="h-px w-8 bg-white/40" />
                  <span className="font-display text-xs font-bold uppercase tracking-[0.4em] text-white">
                    Play Feature
                  </span>
                  <span className="h-px w-8 bg-white/40" />
                </div>
              </button>
            </div>
          </div>
        ) : (
          <iframe
            src={`${data.video.url}?autoplay=1`}
            title="How Qlozet platform works"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full bg-black"
          />
        )}
      </motion.div>
    </section>
  );
}

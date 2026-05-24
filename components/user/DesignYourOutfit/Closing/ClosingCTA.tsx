"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MoveRight, Palette } from "lucide-react";

/**
 * ClosingCTA: Final atelier piece for the Design Your Outfit overhaul.
 */

type ClosingData = {
  title: string;
  description: string;
  primaryAction: { label: string; href: string };
  secondaryAction: { label: string; href: string };
  image: { src: string; alt: string };
};

type ClosingCTAProps = {
  data: ClosingData;
};

export function ClosingCTA({ data }: ClosingCTAProps) {
  return (
    <section className="relative w-full bg-white py-24 lg:py-48 overflow-hidden" data-theme="light">
      {/* Drafting Grid Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-24">
          {/* Left Side: Illustration / Image */}
          <div className="relative order-2 lg:order-1 lg:w-1/2">
            <div className="relative aspect-square w-full max-w-lg mx-auto rounded-[5rem] bg-zinc-50 border border-black/5 shadow-2xl overflow-hidden group">
              <Image
                src={"/image/bespoke-outfit-2.png"}
                alt={data.image.alt}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />

              {/* Technical Annotation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="absolute -right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2 rounded-2xl bg-white p-6 shadow-2xl border border-black/5 hidden xl:flex"
              >
                <div className="flex items-center gap-2">
                  <Palette className="h-4 w-4 text-black/20" />
                  <span className="font-display text-[8px] font-bold uppercase tracking-widest text-black/40">Atelier Signed</span>
                </div>
                <div className="h-px w-24 bg-black/5" />
                <span className="font-display text-xs font-bold text-black uppercase tracking-[0.2em]">Quality Verified</span>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Text & Actions */}
          <div className="flex flex-col gap-12 order-1 lg:order-2 lg:w-1/2">
            <div className="flex flex-col gap-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-[#3A3A3A] sm:text-7xl lg:text-[6.5rem]"
              >
                {data.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-xl font-ui text-base leading-relaxed text-[#3A3A3A]/60 sm:text-lg"
              >
                {data.description}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-6 sm:flex-row sm:items-center"
            >
              <Link
                href={data.primaryAction.href}
                className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-[#3A3A3A] px-12 text-[10px] font-bold uppercase tracking-[0.4em] text-white transition-all hover:scale-[1.05] active:scale-95 shadow-2xl shadow-black/20"
              >
                <span className="relative z-10">{data.primaryAction.label}</span>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-zinc-800 to-black opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>

              <Link
                href={data.secondaryAction.href}
                className="group inline-flex items-center gap-4 font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A] transition-all hover:translate-x-2"
              >
                {data.secondaryAction.label}
                <MoveRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

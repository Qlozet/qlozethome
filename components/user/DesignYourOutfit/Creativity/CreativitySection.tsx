"use client";

import { motion } from "framer-motion";
import { Globe, Zap, Stars, Sparkles } from "lucide-react";
import { useState } from "react";

const iconMap: any = { Globe, Zap, Stars };

type CreativityData = {
  badge: string;
  title: string;
  description: string;
  features: { title: string; icon: string }[];
};

type CreativitySectionProps = { data: CreativityData };

const STYLE_FUSIONS = [
  { label: "Ankara × Minimalism", image: "/image/bespoke-ankara-2.png", tags: ["West African", "Modern", "Clean Lines"] },
  { label: "Agbada × Contemporary", image: "/image/bespoke-agbada-lime.webp", tags: ["Traditional", "Avant-Garde", "Luxury"] },
  { label: "Bespoke × Streetwear", image: "/image/bespoke-dress-2.png", tags: ["Custom Fit", "Urban", "Bold"] }
];

export function CreativitySection({ data }: CreativitySectionProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-white py-24 sm:py-32" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-6 md:px-10 lg:px-10">
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div className="flex flex-col gap-8 text-center items-center mx-auto max-w-3xl">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/40">{data.badge}</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-[#3A3A3A] sm:text-6xl lg:text-7xl">{data.title}</motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="max-w-xl font-ui text-base leading-relaxed text-[#3A3A3A]/60 sm:text-lg">{data.description}</motion.p>
          </div>

          {/* Style Fusion Gallery */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {STYLE_FUSIONS.map((fusion, i) => {
              const feature = data.features[i];
              const Icon = feature ? (iconMap[feature.icon] || Sparkles) : Sparkles;
              const isHovered = hoveredCard === i;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.12 }}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative rounded-[3rem] overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-shadow"
                >
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img src={fusion.image} alt={fusion.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Fusion Label */}
                    <div className="absolute top-6 left-6">
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-black/5 shadow-sm">
                        <span className="font-display text-[8px] font-bold text-black uppercase tracking-widest leading-none">{fusion.label}</span>
                      </div>
                    </div>

                    {/* Tags (appear on hover) */}
                    <motion.div
                      initial={false}
                      animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                      className="absolute top-16 left-6 flex flex-wrap gap-1.5"
                    >
                      {fusion.tags.map(tag => (
                        <span key={tag} className="bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full font-mono text-[7px] font-bold text-white uppercase tracking-widest">{tag}</span>
                      ))}
                    </motion.div>

                    {/* Bottom Info */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="h-10 w-10 shrink-0 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="font-display text-lg font-bold text-white tracking-tight">{feature?.title || fusion.label}</h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

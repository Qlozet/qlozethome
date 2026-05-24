"use client";
import { motion } from "framer-motion";

type StorySectionProps = {
  data: {
    id: string;
    tagline: string;
    title: string;
    paragraphs: string[];
  };
};

export function StorySection({ data }: StorySectionProps) {
  return (
    <section id={data.id} className="relative z-10 bg-white px-6 md:px-10 lg:px-10 py-24 sm:py-32 scroll-mt-32" data-theme="light">
      <div className="mx-auto max-w-[94rem] px-4 sm:px-6 md:px-10 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Tagline & Title */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center gap-4">
              <span className="inline-flex h-px w-12 bg-[#3A3A3A]/20" />
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A3A3A]/40">
                {data.tagline}
              </span>
            </div>
            <h2 className="font-display max-w-xl text-5xl font-medium leading-[1.05] tracking-tight text-[#3A3A3A] sm:text-7xl">
              {data.title}
            </h2>
          </motion.div>

          {/* Narrative Paragraphs */}
          <div className="flex flex-col gap-12 lg:pt-16">
            {data.paragraphs.map((p, idx) => (
              <motion.p
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="font-ui text-xl leading-relaxed text-[#3A3A3A]/60 last-of-type:text-[#3A3A3A]"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

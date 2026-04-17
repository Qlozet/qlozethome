"use client";

import { motion } from "framer-motion";

type TestimonialsData = {
  title: string;
  testimonials: Array<{
    id: string;
    quote: string;
  }>;
};

type TestimonialsSectionProps = {
  data: TestimonialsData;
};

export function TestimonialsSection({ data }: TestimonialsSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any } },
  };

  return (
    <section id="testimonials" className="relative z-40 overflow-hidden bg-[#0A0A0A] px-6 py-24 sm:py-32 lg:py-48">
      {/* Node Network Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at center, #00F0FF 2px, transparent 2px)', backgroundSize: '60px 60px' }} />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 mx-auto max-w-[94rem]"
      >
        {/* Title Group */}
        <div className="mb-24 flex flex-col items-center gap-6 text-center">
          <motion.span variants={itemVariants} className="inline-flex items-center gap-2 font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#00F0FF]/60">
            <div className="h-1 w-1 animate-pulse rounded-full bg-[#00F0FF]" />
            Social Proof
          </motion.span>
          <motion.h2 variants={itemVariants} className="max-w-4xl font-display text-4xl font-medium leading-[1.1] tracking-tighter text-white sm:text-6xl lg:text-7xl">
            {data.title}
          </motion.h2>
        </div>

        {/* Floating Quote Orbs Grid */}
        <div className="relative mx-auto flex max-w-6xl flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12">
          {data.testimonials.map((testimonial, index) => {
            const sizes = ["h-72 w-72", "h-80 w-80", "h-64 w-64"];
            const padding = ["p-10", "p-12", "p-8"];
            const margins = ["mt-0", "top-16", "-mt-8"];
            
            const size = sizes[index % sizes.length];
            const pad = padding[index % padding.length];
            const marg = margins[index % margins.length];

            return (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                className={`group relative flex shrink-0 items-center justify-center rounded-full border border-white/5 bg-[#000000]/50 ${pad} ${size} ${marg} shadow-[0_0_40px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-700 hover:z-50 hover:bg-[#00F0FF]/5 hover:shadow-[0_0_60px_rgba(0,240,255,0.1)]`}
              >
                {/* Node Connection Lines */}
                <div className="absolute -left-6 top-1/2 hidden h-px w-6 bg-white/10 opacity-50 xl:block group-hover:bg-[#00F0FF]/50 transition-colors" />
                <div className="absolute -right-6 top-1/2 hidden h-px w-6 bg-white/10 opacity-50 xl:block group-hover:bg-[#00F0FF]/50 transition-colors" />

                <div className="absolute inset-0 rounded-full border border-[#00F0FF]/0 transition-colors duration-700 group-hover:border-[#00F0FF]/20" />
                
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                  <span className="font-display text-4xl text-[#00F0FF]/20 transition-colors duration-500 group-hover:text-[#00F0FF]/60">"</span>
                  <p className="font-ui text-sm leading-relaxed text-white/60 transition-colors duration-500 group-hover:text-white sm:text-base">
                    {testimonial.quote}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

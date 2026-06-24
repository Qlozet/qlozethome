import { Sparkles, Grid, Palette, FileText } from "lucide-react";

type WhatData = typeof import("@/data/vendor/vendordropdown/clothinggenerator/what.json");

const iconMap: Record<string, any> = {
  Sparkles,
  Grid,
  Palette,
  FileText
};

type WhatSectionProps = {
  data: WhatData;
};

export function WhatSection({ data }: WhatSectionProps) {
  return (
    <section id="what" className="relative z-10 bg-white px-6 md:px-10 lg:px-10 py-20 lg:py-40" data-theme="light">
      <div className="mx-auto max-w-[94rem]">
        {/* Title Group */}
        <div className="mb-24 flex flex-col items-center gap-8 text-center lg:mb-32">
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#111111]/40">
            The Capabilities
          </span>
          <h2 className="max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-[#111111] sm:text-7xl">
            {data.title}
          </h2>
        </div>

        {/* Hover-Reveal Mosaic Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {data.tools.map((tool, index) => {
            const isLarge = index === 0; 
            const isWide = index === 3; 
            
            const colSpan = isLarge ? "lg:col-span-3" : isWide ? "lg:col-span-5" : "lg:col-span-2";
            const rowSpan = isLarge ? "lg:row-span-2" : "lg:row-span-1";
            const minHeight = isLarge ? "min-h-[500px]" : isWide ? "min-h-[300px]" : "min-h-[240px]";

            return (
              <div
                key={tool.title}
                className={`group relative flex flex-col justify-end overflow-hidden rounded-[2rem] bg-brand-light sm:rounded-[3rem] ${colSpan} ${rowSpan} ${minHeight}`}
              >
                {/* Background Ambient Hover Reveal */}
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-darker/5 to-transparent opacity-100 transition-opacity duration-700 group-hover:opacity-0" />
                <div className="absolute inset-0 z-0 bg-brand-darker opacity-0 transition-opacity duration-700 group-hover:opacity-[0.04]" />
                
                {/* Simulated generative background abstract */}
                <div className="absolute inset-0 z-0 scale-105 opacity-0 mix-blend-multiply blur-2xl transition-all duration-700 group-hover:scale-100 group-hover:opacity-30 group-hover:blur-md bg-[url('/svg/orange-pattern.svg')] bg-cover bg-center" />

                {/* Text Content */}
                <div className="relative z-10 flex flex-col gap-8 p-8 transition-transform duration-700 group-hover:-translate-y-2 sm:p-12">
                  <div className="flex items-center justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-brand-darker/5 transition-transform duration-700 group-hover:scale-110">
                      {(() => {
                        const Icon = iconMap[tool.icon] || Sparkles;
                        return <Icon className="h-6 w-6 text-brand-darker/50 transition-colors duration-700 group-hover:text-brand-darker" strokeWidth={1.5} />;
                      })()}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="font-display text-3xl font-medium tracking-tight text-brand-darker sm:text-4xl">
                      {tool.title}
                    </h3>
                    <p className="max-w-md font-ui text-lg leading-relaxed text-brand-darker/60 transition-colors duration-700 group-hover:text-brand-darker/80">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

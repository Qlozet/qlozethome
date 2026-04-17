import { Timer, Users, Truck, ShieldCheck } from "lucide-react";

type WhatData = typeof import("@/data/vendor/vendordropdown/managesteps/what.json");

const iconMap: Record<string, any> = {
  Timer,
  Users,
  Truck,
  ShieldCheck
};

type WhatSectionProps = {
  data: WhatData;
};

export function WhatSection({ data }: WhatSectionProps) {
  return (
    <section id="what" className="relative z-10 bg-white px-6 py-24 sm:py-32 lg:py-48">
      <div className="mx-auto max-w-[94rem]">
        {/* Title Group */}
        <div className="mb-24 flex flex-col gap-6 md:mb-32">
          <span className="inline-flex items-center gap-3 font-display text-[10px] font-bold uppercase tracking-[0.5em] text-black/40">
            <div className="h-px w-6 bg-black/20" />
            The Capabilities
          </span>
          <h2 className="max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tighter text-black sm:text-7xl">
            {data.title}
          </h2>
        </div>

        {/* Blueprint Control Panel Grid */}
        <div className="grid grid-cols-1 border-l border-t border-black/10 sm:grid-cols-2">
          {data.tools.map((tool, index) => {
            const Icon = iconMap[tool.icon] || Timer;
            return (
              <div
                key={tool.title}
                className="group relative flex flex-col justify-between border-b border-r border-black/10 bg-white p-10 transition-colors duration-700 hover:bg-zinc-50 sm:p-14 lg:p-20 lg:min-h-[450px]"
              >
                {/* Structural corner accents */}
                <div className="absolute right-6 top-6 h-3 w-3 border-r border-t border-black/10 transition-colors duration-500 group-hover:border-black/30" />
                <div className="absolute bottom-6 left-6 h-3 w-3 border-b border-l border-black/10 transition-colors duration-500 group-hover:border-black/30" />

                {/* Icon Container */}
                <div className="mb-20 flex h-16 w-16 items-center justify-center border border-black/10 bg-white transition-transform duration-700 group-hover:scale-110 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                  <Icon className="h-6 w-6 stroke-[1] text-black" />
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-6">
                  <span className="font-display text-[10px] font-bold uppercase tracking-widest text-black/30">
                    Mod 0{index + 1}
                  </span>
                  <div className="flex flex-col gap-4">
                    <h3 className="font-display text-3xl font-medium tracking-tight text-black sm:text-4xl">
                      {tool.title}
                    </h3>
                    <p className="font-ui text-lg leading-relaxed text-black/60">
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



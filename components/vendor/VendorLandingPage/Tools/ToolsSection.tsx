import Image from "next/image";
import { Icon } from "@/components/ui/Icon";

type ToolsData = typeof import("@/data/vendor/vendorlanding/tools.json");

type ToolsProps = {
  data: ToolsData;
};

export function VendorTools({ data }: ToolsProps) {
  return (
    <section id={data.id} className="scroll-mt-32 bg-zinc-50 py-32 lg:py-48">
      <div className="mx-auto flex w-full max-w-[94rem] flex-col gap-24 px-6">
        {/* Editorial Header */}
        <div className="flex flex-col gap-6 lg:max-w-2xl">
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.5em] text-black/30">
            Solution Suite
          </span>
          <h2 className="font-display text-5xl font-medium leading-[0.95] tracking-tighter text-black sm:text-7xl">
            {data.title}
          </h2>
        </div>

        <div className="grid items-start gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-32">
          {/* Left Column: Premium Visual - Sticky */}
          <div className="relative order-2 lg:sticky lg:top-48 lg:order-1 lg:self-start">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[3rem] border border-black/5 bg-white shadow-2xl shadow-black/5">
              <Image
                src={data.image.src}
                alt={data.image.alt}
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                sizes="(min-width: 1024px) 50vw, 90vw"
              />
            </div>
            {/* Status Indicator Macro */}
            <div className="absolute -right-8 -top-8 hidden rounded-2xl bg-black p-6 text-white shadow-2xl lg:block">
              <div className="flex flex-col gap-1">
                <span className="font-display text-[8px] font-bold uppercase tracking-widest text-white/40">Status</span>
                <span className="font-display text-xs font-medium">Enterprise Optimized</span>
              </div>
            </div>
          </div>

          {/* Right Column: Scrollable List Area */}
          <div className="order-1 flex flex-col gap-10 lg:order-2">
            <div className="flex flex-col gap-4">
              <p className="font-ui text-xl leading-relaxed text-black/50">
                {data.subtitle}
              </p>
              <div className="h-px w-24 bg-black/10" />
            </div>
            
            {/* Scrollable Container */}
            <div className="relative">
              <div 
                className="flex max-h-[600px] flex-col gap-8 overflow-y-auto py-2 pr-4 lg:max-h-[550px]"
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'rgba(0,0,0,0.1) transparent'
                }}
              >
                {data.items.map((item, idx) => (
                  <div
                    key={item.title}
                    className="group relative flex items-start gap-8 border-b border-black/5 pb-8 transition-colors last:border-0 hover:border-black/20"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white border border-black/5 transition-transform group-hover:scale-110 group-hover:bg-black group-hover:text-white">
                      <Icon
                        name={item.icon}
                        className="h-5 w-5 transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-display text-xl font-medium text-black">
                        {item.title}
                      </h3>
                      <p className="font-ui text-base leading-relaxed text-black/40">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Bottom Gradient Fade */}
              <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-zinc-50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

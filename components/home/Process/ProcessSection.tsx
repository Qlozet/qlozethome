import Image from "next/image";
import Link from "next/link";


type ProcessData = typeof import("@/data/home/process.json");

type ProcessSectionProps = {
  data: ProcessData;
};

export function ProcessSection({ data }: ProcessSectionProps) {
  return (
    <section id={data.id} className="scroll-mt-32 bg-brand-darker py-24 sm:py-32" data-theme="dark">
      <div className="mx-auto flex w-full max-w-[94rem] flex-col gap-24 px-6 md:px-10 lg:px-10">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4 text-white/40">
            <span className="inline-flex h-px w-12 bg-white/20" />
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.4em]">
              The Lifecycle
            </span>
          </div>
          <h2 className="font-display max-w-4xl text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-7xl">
            {data.title}
          </h2>
          <p className="max-w-2xl font-ui text-lg leading-relaxed text-white/50">
            {data.description}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
          {data.steps.map((step, index) => (
            <div key={step.title} className="group flex flex-col gap-6 sm:gap-10">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-white/5 bg-white/5 transition-all duration-700">
                <Image
                  src={step.icon}
                  alt={step.title}
                  fill
                  className="object-cover grayscale transition-all duration-1000 hover:scale-110 hover:grayscale-0"
                  sizes="(min-width: 1024px) 30vw, 90vw"
                />
                <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 font-display text-lg font-bold text-white backdrop-blur-md sm:left-8 sm:top-8">
                  0{index + 1}
                </div>
              </div>
              
              <div className="flex flex-col gap-4 pl-4 border-l border-white/10 group-hover:border-white/30 transition-colors duration-500">
                <h3 className="font-display text-2xl font-medium text-white">{step.title}</h3>
                <p className="font-ui text-base leading-relaxed text-white/40">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href={data.cta.href}
            className="inline-flex items-center justify-center rounded-full bg-white px-12 py-5 text-xs font-bold uppercase tracking-[0.3em] text-brand shadow-2xl transition-all hover:scale-105 hover:bg-brand-light active:scale-[0.98]"
          >
            {data.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}



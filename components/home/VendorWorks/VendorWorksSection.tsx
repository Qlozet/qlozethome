import Link from "next/link";

type VendorWorksData = typeof import("@/data/home/vendor-works.json");

type VendorWorksSectionProps = {
  data: VendorWorksData;
};

export function VendorWorksSection({ data }: VendorWorksSectionProps) {
  return (
    <section id={data.id} className="scroll-mt-32 bg-brand-darker py-16 sm:py-24" data-theme="dark">
      <div className="mx-auto flex w-full max-w-[94rem] flex-col items-center gap-6 px-6 md:px-10 lg:px-10 lg:flex-row lg:justify-between lg:gap-10">
        <div className="flex flex-col gap-4 text-center lg:text-left">
          <h2 className="font-display text-3xl font-medium tracking-tight text-white lg:text-5xl">
            {data.title}
          </h2>
          <p className="font-ui text-base text-white/50 lg:text-lg">
            {data.subtitle}
          </p>
        </div>
        <Link
          href={data.cta.href}
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-10 py-4 text-xs font-bold uppercase tracking-[0.3em] text-brand shadow-2xl transition-all hover:scale-105 hover:bg-brand-light active:scale-[0.98]"
        >
          {data.cta.label}
        </Link>
      </div>
    </section>
  );
}


import Link from "next/link";

type VendorWorksData = typeof import("@/data/home/vendor-works.json");

type VendorWorksSectionProps = {
  data: VendorWorksData;
};

export function VendorWorksSection({ data }: VendorWorksSectionProps) {
  return (
    <section id={data.id} className="scroll-mt-32 bg-[#3a3a3a] py-12 sm:py-12">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-8 px-6 sm:px-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-normal text-white sm:text-[20px] lg:text-[20px]">
            {data.title}
          </h2>
          <p className="text-sm text-zinc-300 sm:text-base">
            {data.subtitle}
          </p>
        </div>
        <Link
          href={data.cta.href}
          className="shrink-0 rounded-lg bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#1b1b1b] transition hover:bg-zinc-100 sm:px-8 sm:py-4 sm:text-sm"
        >
          {data.cta.label}
        </Link>
      </div>
    </section>
  );
}


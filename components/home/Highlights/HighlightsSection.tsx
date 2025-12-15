import Image from "next/image";
import Link from "next/link";

type HighlightsData = typeof import("@/data/home/highlights.json");

type HighlightsSectionProps = {
  data: HighlightsData;
};

export function HighlightsSection({ data }: HighlightsSectionProps) {
  return (
    <section
      id={data.id}
      className="scroll-mt-32 rounded-t-[5rem] bg-[#1b1b1b] pb-[200px] sm:pb-[200px] py-24 sm:py-32"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 text-white">
        {data.items.map((item, index) => {
          const isReversed = index % 2 === 1;

          return (
            <div
              key={item.id}
              className={`grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] ${isReversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
            >
              <div
                className={`flex flex-col gap-5 ${isReversed ? "lg:items-end lg:text-right" : ""
                  }`}
              >
                <h3 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  {item.title}
                </h3>
                <p className="max-w-xl text-base leading-relaxed text-white/80">
                  {item.description}
                </p>
                <div className={`flex ${isReversed ? "justify-end" : ""}`}>
                  <Link
                    href={item.cta.href}
                    className="inline-flex items-center justify-center rounded-[8px] border border-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
                  >
                    {item.cta.label}
                  </Link>
                </div>
                {index === 0 && (
                  <p className="text-[8px] uppercase tracking-[0.3em] text-white/40">
                    We never resell your data. You control what&apos;s shared.
                  </p>
                )}
              </div>
              <div
                className={`relative flex justify-center ${isReversed ? "lg:justify-start" : "lg:justify-end"
                  }`}
              >
                <div className="relative w-full max-w-[420px]">
                  <Image
                    src={item.phoneImage}
                    alt={`${item.title} preview`}
                    width={420}
                    height={640}
                    className="h-full w-full object-contain"
                    sizes="(min-width: 1024px) 35vw, 70vw"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}



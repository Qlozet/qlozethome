import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/common/SectionHeading";

type WhyData = typeof import("@/data/home/why.json");

type WhySectionProps = {
  data: WhyData;
  scrollPrompt?: {
    label: string;
    href?: string;
  };
};

export function WhySection({ data, scrollPrompt }: WhySectionProps) {
  return (
    <section
      id={data.id}
      className="relative -mt-[100px] rounded-t-[5rem] bg-white py-24 sm:py-32 scroll-mt-32"
    >
      {scrollPrompt ? (
        <Link
          href={scrollPrompt.href ?? "#process"}
          className="absolute top-[80px] left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-[0.75rem] font-bold uppercase tracking-[0.4em] text-zinc-500 transition hover:text-zinc-900"
        >
          <span>{scrollPrompt.label}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-6 w-6 animate-bounce text-zinc-900"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M6 13l6 6 6-6" />
          </svg>
        </Link>
      ) : null}
      <div
        id="why-content"
        className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pt-24"
      >
        <SectionHeading
          eyebrow={data.eyebrow}
          eyebrowPlacement="after"
          title={data.title}
          align="center"
          theme="light"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {data.cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-4 rounded-3xl border border-zinc-200 bg-#BFBFBFFF p-6 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.4)]"
            >
              <div className="relative mb-2 h-12 w-12 overflow-hidden rounded-[8px] bg-white">
                <Image
                  src={card.icon}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900">{card.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



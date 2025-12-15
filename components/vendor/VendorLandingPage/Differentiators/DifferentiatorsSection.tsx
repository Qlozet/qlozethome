import Image from "next/image";
import Link from "next/link";

type DifferentiatorsData = typeof import("@/data/vendor/vendorlanding/differentiators.json");

type DifferentiatorsProps = {
  data: DifferentiatorsData;
  scrollPrompt?: {
    down: string;
    href?: string;
  };
};

export function VendorDifferentiators({ data, scrollPrompt }: DifferentiatorsProps) {
  return (
    <section
      id={data.id}
      className="relative -mt-[100px] rounded-t-[30px] sm:rounded-t-[5rem] bg-white py-24 sm:py-32 scroll-mt-32"
    >
      <Link
        href={scrollPrompt?.href ?? "#vendor-how-it-works"}
        className="absolute top-[80px] left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-[0.75rem] font-bold uppercase tracking-[0.4em] text-zinc-500 transition hover:text-zinc-900"
      >
        <span>{scrollPrompt?.down ?? "Scroll Down"}</span>
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
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 pt-24">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-4xl font-bold text-[#1b1b1b] sm:text-5xl lg:text-6xl">
            {data.title}
          </h2>
          <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
            {data.eyebrow}
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {data.cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-5 rounded-2xl border border-zinc-200 bg-zinc-100 p-8 shadow-[0_8px_32px_-16px_rgba(0,0,0,0.1)] transition hover:shadow-[0_16px_48px_-16px_rgba(0,0,0,0.15)]"
            >
              <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-white">
                <Image
                  src={card.icon}
                  alt={card.title}
                  fill
                  className="object-contain"
                  sizes="56px"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#1b1b1b]">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

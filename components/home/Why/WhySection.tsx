import Image from "next/image";
import Link from "next/link";

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
      className="relative z-10 -mt-[100px] rounded-t-[30px] sm:rounded-t-[5rem] bg-white px-6 py-16 pb-[200px] sm:py-24 sm:pb-[200px] scroll-mt-32"
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
      <div id="why-content" className="mx-auto max-w-7xl">

        <div className="pt-24 text-center">
          <h2 className="mb-12 text-3xl font-normal text-black sm:mb-16 sm:text-4xl lg:text-5xl">
            {data.title}
          </h2>
          {data.eyebrow ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-zinc-500">
              {data.eyebrow}
            </p>
          ) : null}

        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.cards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl bg-gray-50 p-8 transition hover:bg-gray-100"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                <div className="relative h-6 w-6">
                  <Image
                    src={card.icon}
                    alt={`${card.title} icon`}
                    fill
                    className="object-contain"
                    sizes="24px"
                  />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-normal text-black">{card.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



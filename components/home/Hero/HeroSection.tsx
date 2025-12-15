import Image from "next/image";
import Link from "next/link";

type HeroData = typeof import("@/data/home/hero.json");

type HeroSectionProps = {
  data: HeroData;
};

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section
      id={data.id}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black pb-[500px] pt-[200px] text-white"
    >
      <Image
        src={data.image.src}
        alt={data.image.alt}
        fill
        className="object-cover object-top opacity-70"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" aria-hidden />
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-12 px-6 py-32 text-center">
        <div className="flex flex-col items-center gap-6">
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl sm:leading-tight">
            {data.title}
          </h1>
          <p className="max-w-3xl text-lg text-neutral-200 sm:text-xl">
            {data.description}
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          <Link
            href={data.primaryAction.href}
            className="rounded-[8px] bg-white px-9 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-black transition hover:bg-neutral-200"
          >
            {data.primaryAction.label}
          </Link>
        </div>
      </div>
      <Link
        href="#top"
        className="absolute bottom-[220px] left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-[0.75rem] font-bold uppercase tracking-[0.4em] text-neutral-300 transition hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-6 w-6 animate-bounce"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5M6 11l6-6 6 6" />
        </svg>
        <span>{data.scrollPrompt.up}</span>
      </Link>
    </section>
  );
}



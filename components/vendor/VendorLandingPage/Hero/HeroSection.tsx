import Image from "next/image";
import Link from "next/link";

type VendorHeroData = typeof import("@/data/vendor/vendorlanding/hero.json");

type VendorHeroProps = {
  data: VendorHeroData;
};

export function VendorHero({ data }: VendorHeroProps) {
  return (
    <section
      id={data.id}
      className="relative flex min-h-screen items-center justify-start overflow-hidden bg-black pb-[500px] pt-[200px] text-white"
    >
      <Image
        src={data.image.src}
        alt={data.image.alt}
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" aria-hidden />
      <div className="relative z-10 flex w-full max-w-7xl flex-col gap-8 px-6 py-32 sm:px-12 lg:px-16">
        <span className="inline-flex w-fit items-center rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium uppercase tracking-[0.3em] text-white backdrop-blur-sm">
          {data.badge}
        </span>
        <h1 className="max-w-5xl text-2xl font-bold leading-[1.1] sm:text-6xl lg:text-7xl">
          {data.title}
        </h1>
        <p className="max-w-4xl text-base leading-relaxed text-neutral-200 sm:text-lg">
          {data.description}
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <Link
            href={data.primaryAction.href}
            className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black shadow-[0_8px_32px_-12px_rgba(255,255,255,0.4)] transition hover:bg-neutral-100"
          >
            {data.primaryAction.label}
          </Link>
          <Link
            href={data.secondaryAction.href}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            {data.secondaryAction.label}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
      <Link
        href="#vendor-differentiators"
        className="absolute bottom-[220px] left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-[0.75rem] font-bold uppercase tracking-[0.4em] text-neutral-300 transition hover:text-white"
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-5 w-5 animate-bounce"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
        <span>{data.scrollPrompt.up}</span>
      </Link>
    </section>
  );
}

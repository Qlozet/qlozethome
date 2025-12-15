import Image from "next/image";
import Link from "next/link";

type HeroSectionData = typeof import("@/data/vendor/vendordropdown/shipsmarter/hero.json");

type HeroSectionProps = {
  data: HeroSectionData;
};

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section id={data.id} className="relative mt-5 h-[700px] w-full overflow-hidden">
      <div className="grid h-full w-full grid-cols-1 lg:grid-cols-2">
        {/* Left Background */}
        <div className="h-full w-full bg-[#25396F]" />
        {/* Right Image */}
        <div className="relative hidden h-full w-full lg:block">
          <Image
            src={data.image.src}
            alt={data.image.alt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
        </div>
      </div>
      {/* Content Container */}
      <div className="absolute inset-0 z-10 mx-auto grid h-full max-w-[1440px] grid-cols-1 lg:grid-cols-2">
        {/* Left Content */}
        <div className="flex h-full flex-col justify-center gap-4 px-6 py-8 sm:px-12 lg:gap-6 lg:px-16">
          <span className="inline-flex w-fit rounded-full border-2 border-white/40 bg-white/20 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-white backdrop-blur-sm">
            {data.badge}
          </span>
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {data.title}
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">
            {data.description}
          </p>
          <Link
            href={data.cta.href}
            className="inline-flex w-fit items-center gap-2 rounded-[5px] border border-white bg-transparent px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-white hover:text-[#c51d4a]"
          >
            {data.cta.label}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
        {/* Right Spacer */}
        <div />
      </div>
    </section>
  );
}


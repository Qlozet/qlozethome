import Image from "next/image";
import Link from "next/link";

type FeaturesData = typeof import("@/data/vendor/vendorlanding/features.json");

type FeaturesProps = {
  data: FeaturesData;
};

export function VendorFeatures({ data }: FeaturesProps) {
  return (
    <section
      id={data.id}
      className=" rounded-t-[30px] sm:rounded-t-[5rem] mt-[-100px] relative z-10 scroll-mt-32 bg-[#1b1b1b] py-24 sm:py-32"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-6">
        <h2 className="text-center text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          {data.title}
        </h2>
        <div className="flex flex-col gap-16">
          {data.features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex flex-col gap-8 rounded-[2.5rem] bg-[#616161] p-8 shadow-[0_0_80px_-15px_rgba(255,255,255,0.25)] transition hover:shadow-[0_0_80px_-10px_rgba(255,255,255,0.25)] sm:p-12 lg:p-16"
            >
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                  {feature.title}
                </h3>
                <p className="max-w-3xl text-sm leading-relaxed text-white/90 sm:text-base">
                  {feature.description}
                </p>
              </div>
              <div className="relative w-full overflow-hidden rounded-2xl">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={feature.image.src}
                    alt={feature.image.alt}
                    fill
                    className="object-contain"
                    sizes="(min-width: 1280px) 1200px, 90vw"
                  />
                </div>
              </div>
              {feature.cta && (
                <div className="flex justify-center">
                  <Link
                    href={feature.cta.href}
                    className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
                  >
                    {feature.cta.label}
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

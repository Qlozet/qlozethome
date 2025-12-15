import Image from "next/image";

type BespokeData = typeof import("@/data/vendor/vendordropdown/shipsmarter/bespoke.json");

type BespokeSectionProps = {
  data: BespokeData;
};

export function BespokeSection({ data }: BespokeSectionProps) {
  return (
    <section id={data.id} className="bg-white py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Title */}
        <h2 className="mb-16 text-center text-3xl font-normal leading-tight text-[#1b1b1b] sm:text-4xl lg:text-[46px]">
          {data.title}
        </h2>

        {/* Grid of Feature Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.features.map((feature) => (
            <div
              key={feature.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-[#2d2d2d] p-8 transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Image/Icon Container */}
              <div className="relative mb-8 flex h-[240px] items-center justify-center">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-normal text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



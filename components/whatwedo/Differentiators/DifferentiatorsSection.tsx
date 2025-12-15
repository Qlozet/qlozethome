import Image from "next/image";

type DifferentiatorsData = typeof import("@/data/whatwedo/whatwedo-differentiators.json");

type DifferentiatorsSectionProps = {
  data: DifferentiatorsData;
};

export function DifferentiatorsSection({ data }: DifferentiatorsSectionProps) {
  return (
    <section className="bg-white rounded-t-[5rem] mt-[-100px] relative z-10 px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <h2 className="mb-4 text-center text-3xl font-normal text-black sm:text-4xl lg:text-5xl">
          {data.title}
        </h2>

        {/* Subtitle */}
        <p className="mb-12 text-center text-base text-gray-600 sm:mb-16 sm:text-lg">
          {data.subtitle}
        </p>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.items.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-gray-50 p-8 transition hover:bg-gray-100"
            >
              {/* Icon */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white">
                <div className="relative h-6 w-6">
                  <Image
                    src={item.icon}
                    alt={`${item.title} icon`}
                    fill
                    className="object-contain"
                    sizes="24px"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-normal text-black">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


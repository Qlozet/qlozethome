import Image from "next/image";

type WhyItMattersData = typeof import("@/data/vendor/vendordropdown/managesteps/whyitmatters.json");

type WhyItMattersSectionProps = {
  data: WhyItMattersData;
};

export function WhyItMattersSection({ data }: WhyItMattersSectionProps) {
  return (
    <section className="relative z-30 -mt-[100px] rounded-t-[30px] sm:rounded-t-[5rem] bg-white px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <h2 className="mb-12 max-w-3xl text-3xl font-normal text-black sm:mb-16 sm:text-4xl lg:text-5xl">
          {data.title}
        </h2>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-3xl bg-[#3d3d3d] p-8 transition hover:bg-[#4a4a4a]"
            >
              {/* Image */}
              <div className="relative mb-6 aspect-square w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-normal text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


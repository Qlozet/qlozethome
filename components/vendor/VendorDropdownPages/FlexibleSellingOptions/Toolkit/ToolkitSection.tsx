import Image from "next/image";

type ToolkitData = typeof import("@/data/vendor/flexiblesellingoptions/toolkit.json");

type ToolkitSectionProps = {
  data: ToolkitData;
};

export function ToolkitSection({ data }: ToolkitSectionProps) {
  return (
    <section className="relative z-10 -mt-[100px] rounded-t-[5rem] bg-white px-6 pb-[200px] sm:pb-[200px] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <h2 className="mb-12 text-3xl font-normal text-black sm:mb-16 sm:text-4xl lg:text-5xl">
          {data.title}
        </h2>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.tools.map((tool) => (
            <div
              key={tool.title}
              className="rounded-3xl bg-gray-50 p-8 transition hover:bg-gray-100"
            >
              {/* Icon */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                <div className="relative h-6 w-6">
                  <Image
                    src={tool.icon}
                    alt={`${tool.title} icon`}
                    fill
                    className="object-contain"
                    sizes="24px"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-normal text-black">{tool.title}</h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-600">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


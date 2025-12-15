type StatsData = typeof import("@/data/whatwedo/whatwedo-stats.json");

type StatsSectionProps = {
  data: StatsData;
};

export function StatsSection({ data }: StatsSectionProps) {
  return (
    <section className="bg-[#3d3d3d] rounded-t-[5rem] mt-[-100px] relative z-10 px-6 py-20 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px]">
        {/* Title */}
        <h2 className="mb-16 max-w-2xl text-3xl font-normal text-white sm:mb-20 sm:text-4xl lg:mb-24 lg:text-5xl">
          {data.title}
        </h2>

        {/* Stats Grid */}
        <div className="grid gap-16 sm:grid-cols-2 lg:gap-x-24 lg:gap-y-20">
          {data.stats.map((stat) => (
            <div key={stat.id} className="flex flex-col">
              {/* Number */}
              <h3 className="mb-4 text-8xl font-normal text-white sm:text-9xl lg:text-[10rem] xl:text-[12rem]">
                {stat.value}
              </h3>

              {/* Label */}
              <p className="text-base text-gray-400 sm:text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


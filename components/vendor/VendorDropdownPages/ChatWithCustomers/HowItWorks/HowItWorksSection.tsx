import Image from "next/image";

type HowItWorksData = typeof import("@/data/vendor/vendordropdown/chatwithcustomers/howitworks.json");

type HowItWorksSectionProps = {
  data: HowItWorksData;
};

export function HowItWorksSection({ data }: HowItWorksSectionProps) {
  return (
    <section className="bg-[#3d3d3d] rounded-t-[5rem] mt-[-100px] px-6 py-16 sm:py-24 z-20 relative pb-[200px] sm:pb-[200px]">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 xl:gap-20">
        {/* Left Content - Steps */}
        <div className="flex flex-col">
          {/* Title */}
          <h2 className="mb-12 text-3xl font-normal text-white sm:text-4xl lg:mb-16 lg:text-5xl">
            {data.title}
          </h2>

          {/* Steps with Arrow */}
          <div className="relative flex gap-6">
            {/* Arrow Column */}
            <div className="absolute left-0 top-0 flex h-full shrink-0 flex-col items-center">
              <div className="relative h-full w-1">
                <Image
                  src="/image/lilacarrow.png"
                  alt="Process flow arrow"
                  fill
                  className="object-cover"
                  sizes="4px"
                />
              </div>
            </div>

            {/* Steps Column */}
            <div className="flex w-full flex-col gap-3 pl-8">
              {data.steps.map((step, index) => (
                <div
                  key={step.id}
                  className="grid grid-cols-[auto_1fr] gap-4 rounded-2xl bg-[#F0F0F0] p-4 backdrop-blur-sm"
                >
                  {/* Icon */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white">
                    <div className="relative h-5 w-5">
                      <Image
                        src={step.icon}
                        alt={`${step.title} icon`}
                        fill
                        className="object-contain"
                        sizes="20px"
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col">
                    {/* Title */}
                    <h3 className="mb-1 text-base font-semibold text-black">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs leading-relaxed text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="relative aspect-video overflow-hidden rounded-3xl lg:aspect-auto lg:h-full lg:min-h-[600px]">
          <Image
            src="/image/lilactab.png"
            alt="Customer chat interface"
            fill
            className="object-contain"
            sizes="(min-width: 1024px) 60vw, 100vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}

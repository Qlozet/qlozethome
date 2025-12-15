import Image from "next/image";

type EcosystemData = typeof import("@/data/whatwedo/whatwedo-ecosystem.json");

type EcosystemSectionProps = {
  data: EcosystemData;
};

export function EcosystemSection({ data }: EcosystemSectionProps) {
  return (
    <section className="bg-white px-6 py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Content - Stakeholders */}
        <div className="flex flex-col">
          {/* Title */}
          <h2 className="mb-4 text-3xl font-normal text-black sm:text-4xl lg:text-5xl">
            {data.title}
          </h2>

          {/* Subtitle */}
          <p className="mb-8 text-base text-gray-600 sm:text-lg">
            {data.subtitle}
          </p>

          {/* Stakeholders List */}
          <div className="flex flex-col gap-4">
            {data.stakeholders.map((stakeholder) => (
              <div
                key={stakeholder.id}
                className="flex gap-4 rounded-2xl bg-gray-50 p-6 transition hover:bg-gray-100"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white">
                  <div className="relative h-6 w-6">
                    <Image
                      src={stakeholder.icon}
                      alt={`${stakeholder.title} icon`}
                      fill
                      className="object-contain"
                      sizes="24px"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  <h3 className="mb-1 text-lg font-semibold text-black">
                    {stakeholder.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {stakeholder.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Order Flow */}
        <div className="flex flex-col">
          {/* Card with Title and Steps */}
          <div className="flex h-full flex-col gap-6 rounded-3xl bg-gray-50 p-8">
            {/* Title */}
            <h3 className="text-2xl font-normal text-black sm:text-3xl">
              {data.orderFlow.title}
            </h3>

            {/* Steps List */}
            {data.orderFlow.steps.map((step, index) => (
              <div key={step.id} className="flex gap-4">
                {/* Number */}
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white">
                  <span className="text-base font-semibold text-black ">
                    {index + 1}
                  </span>
                </div>

                {/* Text */}
                <p className="text-sm leading-relaxed text-gray-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


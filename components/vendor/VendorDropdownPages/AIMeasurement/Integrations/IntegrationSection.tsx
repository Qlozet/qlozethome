import Image from "next/image";

type IntegrationData = {
  title: string;
  subtitle: string;
  features: Array<{
    image: string;
    title: string;
    description: string;
  }>;
};

type IntegrationSectionProps = {
  data: IntegrationData;
};

export function IntegrationSection({ data }: IntegrationSectionProps) {
  return (
    <section id="integrations" className="relative z-20 bg-white px-6 py-32 lg:py-48" data-theme="light">
      <div className="mx-auto grid max-w-[94rem] gap-24 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Left Column: Title Block */}
        <div className="flex flex-col gap-8 lg:sticky lg:top-40 lg:h-fit">
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-black/30">
             Seamless Setup
          </span>
          <h2 className="max-w-xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-black sm:text-6xl lg:text-7xl">
            {data.subtitle}
          </h2>
        </div>

        {/* Right Column: Typographic List */}
        <div className="flex flex-col border-b border-black/10">
          {data.features.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col gap-6 border-t border-black/10 py-12 transition-all duration-500 hover:bg-[#FAFAFA] sm:px-8 lg:py-16"
            >
              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-baseline">
                <h4 className="font-display text-3xl font-medium tracking-tight text-black lg:text-4xl">
                  {feature.title}
                </h4>
                <div className="hidden h-px flex-1 bg-black/5 sm:block" />
                <span className="font-display text-sm font-light text-black/30">
                  0{index + 1}
                </span>
              </div>
              <p className="max-w-2xl font-ui text-lg leading-relaxed text-black/50">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

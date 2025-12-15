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
    <section className="w-full bg-white relative z-20 rounded-t-[30px] sm:rounded-t-[5rem] mt-[-100px] px-6 pt-16  sm:px-12 sm:pt-24  lg:px-16">
      <div className="mx-auto max-w-[1200px]">


        {/* Subtitle */}
        <h3 className="mb-12 text-3xl font-normal leading-snug text-black lg:text-4xl">
          {data.subtitle}
        </h3>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.features.map((feature, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl bg-[#3A3A3A] p-8 transition hover:bg-[#4a4a4a]"
            >
              <div className="mb-6 flex h-[280px] items-center justify-center">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={240}
                  height={240}
                  className="h-auto w-auto max-w-full object-contain"
                />
              </div>
              <h4 className="mb-3 text-xl font-normal text-white">{feature.title}</h4>
              <p className="text-sm leading-relaxed text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

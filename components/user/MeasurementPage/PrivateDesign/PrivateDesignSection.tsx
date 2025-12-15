type PrivateDesignData = {
  title: string;
  leftColumn: {
    items: Array<{
      id: string;
      title: string;
      description: string;
    }>;
  };
  rightColumn: {
    title: string;
    description: string;
  };
};

type PrivateDesignSectionProps = {
  data: PrivateDesignData;
};

export function PrivateDesignSection({ data }: PrivateDesignSectionProps) {
  return (
    <section className="relative z-30 -mt-[100px] rounded-t-[5rem] bg-[#3d3d3d] px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-[1400px]">
        {/* Title */}
        <h2 className="mb-12 text-3xl font-normal text-white sm:text-4xl lg:mb-16 lg:text-5xl">
          {data.title}
        </h2>

        {/* Two Column Layout */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Features */}
          <div className="flex flex-col gap-4">
            {data.leftColumn.items.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-[#F0F0F0] p-6"
              >
                <h3 className="mb-2 text-base font-semibold text-black">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column - Single Feature */}
          <div className="flex flex-col justify-start">
            <h3 className="mb-3 text-xl font-semibold text-white sm:text-2xl">
              {data.rightColumn.title}
            </h3>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
              {data.rightColumn.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


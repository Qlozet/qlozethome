import Image from "next/image";

type CompareData = {
  title: string;
  subtitle: string;
  comparisonTable: {
    rows: Array<{
      method: string;
      speed: string;
      accuracy: string;
      convenience: string;
      reusable: string;
    }>;
  };
  features: Array<{
    image: string;
    title: string;
    description: string;
  }>;
};

type CompareSectionProps = {
  data: CompareData;
};

export function CompareSection({ data }: CompareSectionProps) {
  return (
    <section className="w-full bg-white relative z-20 rounded-t-[30px] sm:rounded-t-[5rem] mt-[-100px] px-6 pt-16 pb-[200px] sm:px-12 sm:pt-24 sm:pb-[200px] lg:px-16">
      <div className="mx-auto max-w-[1200px]">
        {/* Title */}
        <h2 className="mb-12 text-4xl font-normal leading-tight text-black lg:text-5xl">
          {data.title}
        </h2>

        {/* Comparison Table */}
        <div className="mb-16 overflow-hidden rounded-2xl bg-[#3A3A3A]">
          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-5">
            {/* Header Row */}
            <div className="col-span-1 border-r border-white/10 p-6"></div>
            <div className="col-span-1 border-r border-white/10 p-6">
              <h3 className="flex items-center justify-center gap-3 text-lg font-normal text-white">
                <div className="flex h-10 w-10 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-80"
                  >
                    <path d="M3 12a9 9 0 1 0 9-9" />
                    <path d="M12 3v9l4 4" />
                  </svg>
                </div>
                Speed
              </h3>
            </div>
            <div className="col-span-1 border-r border-white/10 p-6">
              <h3 className="flex items-center justify-center gap-3 text-lg font-normal text-white">
                <div className="flex h-10 w-10 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-80"
                  >
                    <path d="M10 2v20" />
                    <path d="M3 8h7" />
                    <path d="M3 12h7" />
                    <path d="M3 16h7" />
                  </svg>
                </div>
                Accuracy
              </h3>
            </div>
            <div className="col-span-1 border-r border-white/10 p-6">
              <h3 className="flex items-center justify-center gap-3 text-lg font-normal text-white">
                <div className="flex h-10 w-10 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-80"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                Convenience
              </h3>
            </div>
            <div className="col-span-1 p-6">
              <h3 className="flex items-center justify-center gap-3 text-lg font-normal text-white">
                <div className="flex h-10 w-10 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-80"
                  >
                    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                    <path d="M21 3v5h-5" />
                    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                    <path d="M3 21v-5h5" />
                  </svg>
                </div>
                Reusable
              </h3>
            </div>

            {/* Data Rows */}
            {data.comparisonTable.rows.map((row, index) => (
              <div key={index} className="col-span-5 grid grid-cols-5 border-t border-white/10">
                {/* Method Name */}
                <div className="col-span-1 border-r border-white/10 p-6">
                  <p className="text-sm font-medium text-white">{row.method}</p>
                </div>
                {/* Speed */}
                <div className="col-span-1 border-r border-white/10 p-6">
                  <p className="text-sm leading-relaxed text-white/90">{row.speed}</p>
                </div>
                {/* Accuracy */}
                <div className="col-span-1 border-r border-white/10 p-6">
                  <p className="text-sm leading-relaxed text-white/90">{row.accuracy}</p>
                </div>
                {/* Convenience */}
                <div className="col-span-1 border-r border-white/10 p-6">
                  <p className="text-sm leading-relaxed text-white/90">{row.convenience}</p>
                </div>
                {/* Reusable */}
                <div className="col-span-1 p-6">
                  <p className="text-sm leading-relaxed text-white/90">{row.reusable}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View */}
          <div className="md:hidden">
            {data.comparisonTable.rows.map((row, index) => (
              <div
                key={index}
                className={`p-6 ${index > 0 ? "border-t border-white/10" : ""}`}
              >
                {/* Method Name */}
                <h3 className="mb-4 text-lg font-semibold text-white">{row.method}</h3>

                {/* Speed */}
                <div className="mb-4 flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-80 text-white"
                    >
                      <path d="M3 12a9 9 0 1 0 9-9" />
                      <path d="M12 3v9l4 4" />
                    </svg>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-white/60">
                      Speed
                    </p>
                    <p className="text-sm text-white/90">{row.speed}</p>
                  </div>
                </div>

                {/* Accuracy */}
                <div className="mb-4 flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-80 text-white"
                    >
                      <path d="M10 2v20" />
                      <path d="M3 8h7" />
                      <path d="M3 12h7" />
                      <path d="M3 16h7" />
                    </svg>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-white/60">
                      Accuracy
                    </p>
                    <p className="text-sm text-white/90">{row.accuracy}</p>
                  </div>
                </div>

                {/* Convenience */}
                <div className="mb-4 flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-80 text-white"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-white/60">
                      Convenience
                    </p>
                    <p className="text-sm text-white/90">{row.convenience}</p>
                  </div>
                </div>

                {/* Reusable */}
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-80 text-white"
                    >
                      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                      <path d="M21 3v5h-5" />
                      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                      <path d="M3 21v-5h5" />
                    </svg>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-white/60">
                      Reusable
                    </p>
                    <p className="text-sm text-white/90">{row.reusable}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

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


import Image from "next/image";

type EarlyAccessData = typeof import("@/data/home/early-access.json");

type EarlyAccessSectionProps = {
  data: EarlyAccessData;
};

export function EarlyAccessSection({ data }: EarlyAccessSectionProps) {
  return (
    <section id={data.id} className="scroll-mt-32 bg-[#F8F8F8] py-24 sm:py-32" data-theme="light">
      <div className="mx-auto w-full max-w-[94rem] px-4 sm:px-6 md:px-10 lg:px-10">
        <div className="relative overflow-hidden rounded-[3rem] bg-white p-8 shadow-2xl shadow-black/5 border border-black/5 lg:p-16">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            {/* Image Column */}
            <div className="relative h-[400px] overflow-hidden rounded-3xl bg-[#F0F0F0] lg:h-[600px]">
              <Image
                src="/image/ladycard.png"
                alt="Fashion model"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                sizes="(min-width: 1024px) 45vw, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
            </div>

            {/* Content Column */}
            <div className="flex flex-col gap-10">
              {/* Floating Tip */}
              <div className="flex justify-end lg:justify-start">
                <div className="group relative rounded-2xl bg-brand px-6 py-4 shadow-xl transition-all hover:-translate-y-1">
                  <p className="font-ui text-sm font-medium text-white">
                    {data.speechBubble}
                  </p>
                  <div className="absolute -bottom-1.5 left-8 h-3 w-3 rotate-45 bg-brand"></div>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-6">
                <span className="font-display text-[10px] font-semibold uppercase tracking-[0.4em] text-[#3A3A3A]/40">
                  Exclusive Entry
                </span>
                <h3 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-[#111111] sm:text-6xl">
                  {data.title}
                </h3>
                <p className="max-w-md font-ui text-base leading-relaxed text-[#3A3A3A]/60 sm:text-lg">
                  {data.subtitle}
                </p>
              </div>

              {/* Registration Form */}
              <div className="flex flex-col gap-8">
                <form className="flex w-full flex-col gap-4 sm:flex-row">
                  <input
                    type="email"
                    required
                    placeholder={data.placeholder}
                    className="flex-1 rounded-full border border-brand/10 bg-[#F8F8F8] px-8 py-5 font-ui text-sm text-brand outline-none transition-all focus:border-brand/30 focus:bg-white"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-brand-darker px-12 py-5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-xl shadow-brand-darker/20 transition-all hover:scale-[1.05] hover:bg-brand active:scale-[0.98]"
                  >
                    {data.button}
                  </button>
                </form>

                {/* Footnote Logo */}
                <div className="flex items-center gap-4 opacity-20">
                  <div className="h-px flex-1 bg-[#3A3A3A]/10" />
                  <div className="relative h-8 w-24">
                    <Image
                      src="/image/qlozettraced.png"
                      alt="Qlozet logo"
                      fill
                      className="object-contain grayscale"
                      sizes="96px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

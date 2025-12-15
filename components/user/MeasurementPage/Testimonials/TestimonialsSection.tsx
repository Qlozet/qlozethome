type TestimonialsData = {
  title: string;
  testimonials: Array<{
    id: string;
    quote: string;
  }>;
};

type TestimonialsSectionProps = {
  data: TestimonialsData;
};

export function TestimonialsSection({ data }: TestimonialsSectionProps) {
  return (
    <section className="relative z-40 -mt-[100px] rounded-t-[5rem] bg-[#3d3d3d] px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-[1400px]">
        {/* Title */}
        <h2 className="mb-12 text-3xl font-normal text-white sm:text-4xl lg:mb-16 lg:text-5xl">
          {data.title}
        </h2>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-2xl bg-[#F0F0F0] p-6 lg:p-8"
            >
              <p className="text-sm leading-relaxed text-black sm:text-base">
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


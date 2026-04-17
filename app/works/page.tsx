import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WorksSection } from "@/components/works";
import { FAQSection } from "@/components/home/FAQ";
import { VendorCTA } from "@/components/vendor/VendorLandingPage/CTA";
import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import worksData from "@/data/works/works.json";
import faqData from "@/data/home/faq.json";
import vendorCtaData from "@/data/vendor/vendorlanding/cta.json";

// The Architecture Steps Data
const blueprintSteps = [
  {
    num: "01",
    title: "Vendor Onboarding",
    desc: "Set up instant digital storefronts, define custom tailoring parameters, and upload fabric swatches with complete pricing control."
  },
  {
    num: "02",
    title: "AI Measurement",
    desc: "Shoppers generate precise 3D body twins via mobile cameras. The algorithm extracts exact tailoring nodes for a flawless bespoke fit."
  },
  {
    num: "03",
    title: "Order Generation",
    desc: "Detailed technical order sheets are automatically generated for the tailor, eliminating human transcription errors."
  },
  {
    num: "04",
    title: "Global Logistics",
    desc: "Direct integration with global carriers ensures transparent pickup tracking, quality control checkpoints, and seamless delivery."
  }
];

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-[#050505]" data-theme="dark">
      {/* Ensure dark header mapping */}
      <Header data={navbarData} />
      
      <main className="flex flex-col">
        {/* The Blueprint Hero */}
        <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 pt-32 pb-16 overflow-hidden" data-theme="dark">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 z-0 bg-[url('/bg-grid.svg')] bg-center opacity-5 mix-blend-overlay" />
          
          <div className="relative z-10 mx-auto w-full max-w-[94rem] flex flex-col items-center text-center gap-12">
            <div className="flex items-center gap-4">
              <span className="inline-flex h-px w-8 bg-[#A38A59]/60" />
              <span className="font-display text-[11px] font-bold uppercase tracking-[0.5em] text-[#A38A59]">
                The Atelier Engine
              </span>
              <span className="inline-flex h-px w-8 bg-[#A38A59]/60" />
            </div>
            
            <h1 className="font-display max-w-5xl text-6xl font-light leading-[0.95] tracking-tight text-white sm:text-8xl lg:text-9xl">
              How it <br />
              <span className="italic text-white/30">Works</span>
            </h1>
            
            <p className="max-w-xl font-ui text-lg leading-relaxed text-white/50 sm:text-xl">
              A comprehensive architecture for the modern fashion ecosystem. From localized digital storefronts to global logistics, we've built the engine for your atelier.
            </p>
          </div>

          {/* Vertical Tracking Line guiding down */}
          <div className="absolute bottom-0 h-32 w-px bg-gradient-to-b from-[#A38A59]/50 to-transparent" />
        </section>

        {/* The Screening Room Player */}
        <WorksSection data={worksData} />

        {/* Platform Architecture Blueprint Grid */}
        <section className="relative bg-[#050505] px-6 py-32 sm:py-48" data-theme="dark">
          <div className="mx-auto max-w-[94rem]">
            {/* Context Title */}
            <div className="mb-24 flex flex-col items-center text-center gap-6">
               <span className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">
                 Ecosystem Flow
               </span>
               <h2 className="font-display text-4xl font-medium tracking-tight sm:text-6xl text-white">
                 The Anatomy of <span className="italic text-white/40">Scale</span>
               </h2>
            </div>

            {/* The 1px Architecture Grid */}
            <div className="grid grid-cols-1 border-t border-l border-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {blueprintSteps.map((step, idx) => (
                <div 
                  key={idx}
                  className="group relative border-r border-b border-white/10 bg-[#050505] p-10 transition-colors duration-500 hover:bg-white/[0.02]"
                >
                  <div className="mb-16 flex items-center justify-between">
                    <span className="font-display text-4xl font-light text-white/10 transition-colors duration-500 group-hover:text-[#A38A59]/40">
                      {step.num}
                    </span>
                    {/* Blueprint Node Connector */}
                    <div className="h-2 w-2 rounded-full border border-white/20 transition-all duration-500 group-hover:border-[#A38A59] group-hover:bg-[#A38A59]/20" />
                  </div>
                  
                  <h3 className="mb-6 font-display text-2xl font-medium tracking-tight text-white">
                    {step.title}
                  </h3>
                  
                  <p className="font-ui text-base leading-relaxed text-white/40">
                    {step.desc}
                  </p>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 h-4 w-4 border-t border-r border-transparent transition-all duration-500 group-hover:border-white/20" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQSection data={faqData} dark={true} />
        <VendorCTA data={vendorCtaData} dark={true} />
      </main>

      <Footer data={footerData} />
    </div>
  );
}

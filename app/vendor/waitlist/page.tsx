import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WaitlistForm } from "@/components/vendor/Waitlist/WaitlistForm";
import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";

export default function VendorWaitlistPage() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Header data={navbarData} />
      
      <main className="mx-auto flex w-full max-w-[94rem] flex-col px-6 md:px-10 lg:px-10 py-24 sm:py-32 lg:py-48">
        <div className="grid gap-24 lg:grid-cols-[1fr_1.2fr]">
          
          {/* Left Side: Editorial Content */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-black/30">
                Vendor Network
              </span>
              <h1 className="font-display text-6xl font-medium leading-[0.9] tracking-tighter text-black sm:text-7xl lg:text-9xl">
                Elevate <br />
                Your <br />
                Craft.
              </h1>
            </div>
            
            <div className="flex flex-col gap-8 max-w-sm">
              <p className="font-ui text-lg leading-relaxed text-black/60">
                Join an exclusive circle of fashion innovators. We're building the infrastructure for the next generation of fashion-tech business.
              </p>
              <div className="h-px w-24 bg-black/10" />
              <p className="font-ui text-sm leading-relaxed text-black/40">
                By joining our waitlist, you'll be among the first to access our bespoke vendor toolkit, AI-driven measurements, and global storefront controls.
              </p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="flex flex-col gap-16">
            <div className="flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-black animate-pulse" />
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-black">
                Waitlist Registration Open
              </span>
            </div>
            
            <WaitlistForm />
          </div>

        </div>
      </main>

      <Footer data={footerData} />
    </div>
  );
}

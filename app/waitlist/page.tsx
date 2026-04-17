import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomerWaitlistForm } from "@/components/user/Waitlist/CustomerWaitlistForm";
import { ProductCarousel } from "@/components/user/Waitlist/ProductCarousel";
import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";

export default function CustomerWaitlistPage() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Header data={navbarData} />
      
      <main className="mx-auto flex w-full max-w-[94rem] flex-col px-6 py-24 sm:py-32 lg:py-48" data-theme="light">
        <div className="grid gap-24 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          
          {/* Left Side: Product Showcase */}
          <div className="flex flex-col gap-12">
            <ProductCarousel />
          </div>

          {/* Right Side: Content & Form */}
          <div className="flex flex-col gap-16 lg:pl-12">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-black/20" />
                <span className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-black/40">
                  Coming Soon
                </span>
              </div>
              
              <h1 className="font-display text-6xl font-medium leading-[0.9] tracking-tighter text-black sm:text-7xl lg:text-8xl">
                Fashion, <br />
                Recrafted.
              </h1>
              
              <p className="max-w-md font-ui text-lg leading-relaxed text-black/60">
                Experience the next evolution of personal style. Join the waitlist for exclusive early access to the future of bespoke fashion.
              </p>
            </div>
            
            <CustomerWaitlistForm />
          </div>

        </div>
      </main>

      <Footer data={footerData} />
    </div>
  );
}

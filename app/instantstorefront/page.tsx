import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FAQSection } from "@/components/home/FAQ";
import { ClosingSection } from "@/components/vendor/VendorDropdownPages/InstantStorefront/Closing/ClosingSection";
import { FeatureSection, LiveHero } from "@/components/live/kit";
import { ReviewsScene, StoreLinkScene, StoreProfileScene, StorefrontScene } from "@/components/live/storefront";

import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import faqData from "@/data/home/faq.json";
import page from "@/data/vendor/vendordropdown/instantstorefront/instantstorefront.json";

export default function InstantStorefrontPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header data={navbarData} />
      <LiveHero copy={page.hero} cta={page.hero.cta} visual={<StorefrontScene />} />
      <FeatureSection id="profile" copy={page.profile} visual={<StoreProfileScene />} flip tint />
      <FeatureSection id="address" copy={page.address} visual={<StoreLinkScene />} />
      <FeatureSection id="reviews" copy={page.reviews} visual={<ReviewsScene />} flip tint />
      <FAQSection data={faqData} />
      <ClosingSection data={page.closing} />
      <Footer data={footerData} />
    </div>
  );
}

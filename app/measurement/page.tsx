import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MeasurementHero } from "@/components/user/MeasurementPage/Hero/MeasurementHeroSection";
import { BiometricSection } from "@/components/user/MeasurementPage/Biometric/BiometricSection";
import { StylingSection } from "@/components/user/MeasurementPage/Styling/StylingSection";
import { FitProfileSection } from "@/components/user/MeasurementPage/FitProfile/FitProfileSection";
import { ConfidenceSection } from "@/components/user/MeasurementPage/Confidence/ConfidenceSection";
import { ExperienceSection } from "@/components/user/MeasurementPage/Experience/ExperienceSection";
import { DiversitySection } from "@/components/user/MeasurementPage/Diversity/DiversitySection";
import { ClosingSection } from "@/components/user/MeasurementPage/Closing/ClosingSection";

import navbarData from "@/data/global/navbar.json";
import footerData from "@/data/global/footer.json";
import measurementData from "@/data/user/measurement/measurement_ai.json";

export default function MeasurementPage() {
  return (
    <div className="min-h-screen">
      <Header data={navbarData} />
      <MeasurementHero data={measurementData.hero} />
      <BiometricSection data={measurementData.biometric} />
      <StylingSection data={measurementData.styling} />
      <FitProfileSection data={measurementData.profile} />
      <ConfidenceSection data={measurementData.confidence} />
      <ExperienceSection data={measurementData.experience} />
      <DiversitySection data={measurementData.diversity} />
      <ClosingSection data={measurementData.closing} />
      <Footer data={footerData} />
    </div>
  );
}


import { Navbar } from "@components/landing/Navbar"
import { HeroSection } from "@components/landing/HeroSection"
import { ProblemSection } from "@components/landing/ProblemSection"
import { FeatureTrio } from "@components/landing/FeatureTrio"
import { ReadinessCallout } from "@components/landing/ReadinessCallout"
import { HowItWorks } from "@components/landing/HowItWorks"
import { SignUpSection } from "@components/landing/SignUpSection"
import { Footer } from "@components/landing/Footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-text-primary font-sans">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <FeatureTrio />
      <ReadinessCallout />
      <HowItWorks />
      <SignUpSection />
      <Footer />
    </div>
  )
}

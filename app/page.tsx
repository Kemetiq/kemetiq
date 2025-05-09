import HeroSection from "@/components/hero-section"
import WhyUsSection from "@/components/why-us-section"
import ThreatSection from "@/components/threat-section"
import ResultsSection from "@/components/results-section"
import HowWeHelpSection from "@/components/how-we-help-section"
import NewProcessFlowSection from "@/components/NewProcessFlowSection" // Updated import
import AIForm from "@/components/ai-form"

export default function Home() {
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory scroll-container">
      <HeroSection />
      <WhyUsSection />
      <ThreatSection />
      <ResultsSection />
      <HowWeHelpSection />
      <NewProcessFlowSection /> {/* Updated component */}
      <AIForm />
    </main>
  )
}


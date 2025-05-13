"use client"

import Head from "next/head"
import HeroSection from "@/components/hero-section"
import WhyUsSection from "@/components/why-us-section"
import ThreatSection from "@/components/threat-section"
import ResultsSection from "@/components/results-section"
import HowWeHelpSection from "@/components/how-we-help-section"
import ProcessFlowSection from "@/components/process-flow-section"
import AIForm from "@/components/ai-form"

export default function Home() {
  return (
    <>
      <Head>
        <title>Kemetiq | AI Automation Agency</title>
        <meta
          name="description"
          content="Automate the Ordinary. Amplify the Extraordinary. AI automation solutions tailored to your operations, people, and growth goals."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className="h-screen overflow-y-auto snap-y snap-mandatory scroll-container">
        <HeroSection />
        <WhyUsSection />
        <ThreatSection />
        <ResultsSection />
        <HowWeHelpSection />
        <ProcessFlowSection />
        <AIForm />
      </main>
    </>
  )
}

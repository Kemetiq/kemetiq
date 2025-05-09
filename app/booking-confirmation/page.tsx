"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"

// Function to scroll to a section by ID
const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

export default function BookingConfirmationPage() {
  return (
    <section 
      id="booking-confirmation"
      className="min-h-screen snap-start flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white relative overflow-hidden"
    >
      <div className="absolute top-4 left-4">
        <Button 
          variant="outline"
          size="icon"
          className="text-white border-gray-700 hover:bg-gray-800 hover:text-amber-400"
          onClick={() => scrollToSection("hero-section")} // Navigate back to hero
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
      </div>
      <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight text-amber-400">
          You_ve taken the first step most businesses never will.
        </h1>
        <p className="text-2xl text-gray-300 mb-10">
          Now watch it pay off.
        </p>

        <div className="bg-gray-800/50 p-8 rounded-lg shadow-xl w-full mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-amber-300">Here_s what_s next:</h2>
          <div className="text-left space-y-4 text-gray-300">
            <div>
              <h3 className="font-semibold text-lg text-white">Your Diagnostic Session:</h3>
              <p>A KEMETIQ strategist will reach out within 24 hours to schedule your private diagnostic session. This isn_t a sales pitch—it_s a structured assessment of where automation can create asymmetric returns in your business.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white">Your Custom Plan:</h3>
              <p>You_ll receive a tailored implementation roadmap identifying your highest-leverage automation opportunities, complete with ROI projections and implementation timeline.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white">Your Edge:</h3>
              <p>Start automating while your competitors are still stuck in spreadsheets.</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 p-8 rounded-lg shadow-xl w-full mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-amber-300">Want To Give Us More Context Before Your Session?</h2>
          <p className="text-gray-400 mb-4">If there are specific friction points or goals you_d like us to prepare for, you can share additional context here.</p>
          <Textarea 
            placeholder="Any additional information you_d like to share..."
            className="bg-gray-900 border-gray-700 text-white min-h-[120px] focus:ring-amber-400"
          />
        </div>

        <div className="bg-gray-800/50 p-8 rounded-lg shadow-xl w-full">
          <h2 className="text-2xl font-semibold mb-4 text-amber-300">Want exclusive access to our automation playbooks, case studies & client results?</h2>
          <Button 
            size="lg" 
            className="gradient-button text-white font-semibold text-lg px-8 py-4 rounded-lg hover:scale-105 focus:ring-4 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black transition-transform duration-150 ease-in-out shadow-xl w-full md:w-auto"
          >
            YES – KEEP ME IN THE AUTOMATION LOOP
          </Button>
        </div>

      </div>
    </section>
  )
}


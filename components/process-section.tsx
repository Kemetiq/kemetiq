"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, PenTool, Wrench, TrendingUp } from "lucide-react"

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(1)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const steps = [
    {
      id: 1,
      icon: <Search className="w-6 h-6" />,
      emoji: "🔍",
      title: "We Diagnose the Bottlenecks",
      description: "Map workflows. Find where time/money leaks.",
      color: "from-amber-500 to-amber-600",
    },
    {
      id: 2,
      icon: <PenTool className="w-6 h-6" />,
      emoji: "✏️",
      title: "We Design the Smart System",
      description: "Blueprint your future workflows.",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      id: 3,
      icon: <Wrench className="w-6 h-6" />,
      emoji: "🔧",
      title: "We Build + Validate",
      description: "Integrate AI tools, test until flawless.",
      color: "from-violet-500 to-violet-600",
    },
    {
      id: 4,
      icon: <TrendingUp className="w-6 h-6" />,
      emoji: "📈",
      title: "We Optimize + Multiply",
      description: "Monitor, iterate, and grow with you.",
      color: "from-fuchsia-500 to-fuchsia-600",
    },
  ]

  return (
    <section id="process" className="section-wrapper bg-black">
      <div className="container px-4 md:px-6 py-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Here's How We Install Your Competitive Edge:
          </h2>
        </motion.div>

        {/* Desktop circular process */}
        <div className="hidden lg:block relative max-w-4xl mx-auto mb-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full bg-gray-900/50 p-6 flex items-center justify-center z-10">
              <div className="text-center">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-xl font-bold mb-2">{steps[activeStep - 1].title}</p>
                  <p className="text-sm text-gray-400">{steps[activeStep - 1].description}</p>
                </motion.div>
              </div>
            </div>
            <div className="absolute inset-0 border-4 border-gray-800 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 gap-8 h-[500px]">
            {steps.map((step, index) => {
              const angle = (index * 90 * Math.PI) / 180
              const x = Math.cos(angle) * 220
              const y = Math.sin(angle) * 220

              const position = {
                0: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
                1: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
                2: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
                3: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
              }[index]

              return (
                <div key={step.id} className="relative col-span-1 h-full">
                  <motion.button
                    className={`absolute ${position} w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br ${step.color} ${activeStep === step.id ? "ring-4 ring-white/20" : "opacity-70"}`}
                    onClick={() => setActiveStep(step.id)}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-2xl">{step.emoji}</span>
                  </motion.button>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile stacked cards */}
        <div className="lg:hidden space-y-6 mb-12">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              className={`bg-gray-900/50 p-6 rounded-xl border-l-4 border-gradient-to-b ${step.color}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center mb-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br ${step.color} mr-4`}
                >
                  <span className="text-xl">{step.emoji}</span>
                </div>
                <h3 className="text-lg font-bold">{step.title}</h3>
              </div>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button onClick={() => scrollToSection("ai-form")} className="gradient-button">
            Get My Free AI Audit
          </button>
        </div>
      </div>
    </section>
  )
}

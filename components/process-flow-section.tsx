"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const steps = [
  {
    title: "The Discovery",
    icon: "/icons/discovery.svg",
    gradient: "from-violet-500 via-violet-400 to-violet-600",
    border: "border-violet-500",
    description: `We immerse ourselves in your operations—mapping real workflows and exposing friction points. Every insight shapes the strategy. Every gap is an opportunity for automation.`,
  },
  {
    title: "The Blueprint",
    icon: "/icons/blueprint.svg",
    gradient: "from-fuchsia-500 via-pink-400 to-fuchsia-600",
    border: "border-fuchsia-500",
    description: `We define the scope, goals, deliverables, and timelines—clearly. You get a strategic automation roadmap tailored to your real data and needs.`,
  },
  {
    title: "The Build",
    icon: "/icons/build.svg",
    gradient: "from-amber-500 via-yellow-400 to-amber-600",
    border: "border-amber-500",
    description: `We build, integrate, and test in fast feedback loops. You stay in control, reviewing milestones as we go—no surprises.`,
  },
  {
    title: "The Evolution",
    icon: "/icons/evolution.svg",
    gradient: "from-cyan-500 via-emerald-400 to-cyan-600",
    border: "border-cyan-500",
    description: `Your business doesn’t stand still—neither do your systems. We optimize continuously, layering new automations as you grow.`,
  },
]

export default function ProcessSection() {
  const [openStep, setOpenStep] = useState<number | null>(null)
  const toggle = (index: number) => setOpenStep(openStep === index ? null : index)

  return (
    <section
      id="process"
      className="min-h-screen snap-start flex items-center justify-center bg-gradient-to-b from-black via-gray-950 to-black px-4 py-20"
    >
      <div className="max-w-6xl w-full">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The Process That Will <span className="gradient-text">Sharpen Your Edge</span>
          </h2>
          <p className="text-gray-300 text-md md:text-lg max-w-3xl mx-auto">
            At KEMETIQ, discovery isn’t a checkbox—it’s where the real work begins. <br />
            We listen closely. We map your real workflows. <br />
            We identify pain points, missed efficiencies, and the hidden bottlenecks stalling growth.
          </p>
          <p className="text-gray-300 mt-6 text-md md:text-lg max-w-3xl mx-auto">
            This is how we uncover asymmetric opportunities where AI can multiply returns. <br />
            We’re not here to throw tools at you. <br />
            We’re here to understand your business—and build systems that evolve with it.
          </p>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:grid grid-cols-2 gap-6 mt-14">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`rounded-xl border-2 p-6 bg-gray-900/50 backdrop-blur-md border-${step.border} transition-all`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <div className="flex items-center gap-4 mb-3">
                <img src={step.icon} alt="" className="w-10 h-10" />
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
              </div>
              <p className="text-sm text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden mt-10 space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`rounded-xl bg-gray-900/50 backdrop-blur-sm border-l-4 border-${step.border} overflow-hidden`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full p-4 text-left"
              >
                <div className="flex items-center gap-4">
                  <img src={step.icon} alt="" className="w-8 h-8" />
                  <h3 className="font-semibold text-white">{step.title}</h3>
                </div>
                <span className="text-2xl text-white">{openStep === index ? "−" : "+"}</span>
              </button>

              <AnimatePresence>
                {openStep === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
                    className="px-4 pb-4 text-gray-300 text-sm"
                  >
                    {step.description}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Final quote + CTA */}
        <div className="text-center mt-16">
          <p className="italic text-sm text-gray-400">
            “We don’t just build for you. We build with you.”
          </p>
          <button
            onClick={() => document.getElementById("ai-form")?.scrollIntoView({ behavior: "smooth" })}
            className="gradient-button mt-6"
          >
            → Start My Free AI Strategy Audit
          </button>
        </div>
      </div>
    </section>
  )
}

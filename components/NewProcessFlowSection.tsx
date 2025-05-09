"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Search, PenTool, Wrench, TrendingUp } from "lucide-react"

interface Step {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  bgColor: string // Tailwind background color class e.g., "bg-purple-600"
  iconColor: string // Tailwind text color class for icon e.g., "text-purple-200"
  textColor: string // Tailwind text color class for title e.g., "text-white"
}

const stepsData: Step[] = [
  {
    id: 1,
    title: "Diagnose the Bottlenecks",
    description: "Analyze workflows and uncover time/money leaks.",
    icon: <Search className="w-10 h-10 mb-3" />,
    bgColor: "bg-purple-600",
    iconColor: "text-purple-200",
    textColor: "text-white",
  },
  {
    id: 2,
    title: "Design the Smart Systems",
    description: "Co-create a tailored automation blueprint.",
    icon: <PenTool className="w-10 h-10 mb-3" />,
    bgColor: "bg-fuchsia-600", // Or a magenta/pink shade
    iconColor: "text-fuchsia-200",
    textColor: "text-white",
  },
  {
    id: 3,
    title: "Build, Test & Validate",
    description: "Deploy tools, test, and ensure seamless integration.",
    icon: <Wrench className="w-10 h-10 mb-3" />,
    bgColor: "bg-amber-500",
    iconColor: "text-amber-100",
    textColor: "text-white",
  },
  {
    id: 4,
    title: "Iterate & Expand",
    description: "Monitor results and scale without breaking ops.",
    icon: <TrendingUp className="w-10 h-10 mb-3" />,
    bgColor: "bg-cyan-600",
    iconColor: "text-cyan-200",
    textColor: "text-white",
  },
]

const StepCard = ({ step, index }: { step: Step; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, delay: index * 0.15 }
    },
  }

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`w-full max-w-md p-6 md:p-8 rounded-xl shadow-2xl flex flex-col items-center text-center ${step.bgColor}`}
    >
      <div className={`${step.iconColor}`}>{step.icon}</div>
      <h3 className={`text-2xl md:text-3xl font-bold mt-2 mb-3 ${step.textColor}`}>
        {step.title}
      </h3>
      <p className={`text-base md:text-lg ${step.textColor} opacity-90`}>{step.description}</p>
    </motion.div>
  )
}

export default function NewProcessFlowSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section
      id="process"
      ref={sectionRef}
      className="min-h-screen snap-start flex flex-col items-center justify-center py-16 md:py-24 px-4 bg-gray-950 text-white relative overflow-hidden"
    >
      <motion.div
        className="text-center mb-12 md:mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Our Streamlined Process
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          A clear path from diagnosis to deployment, designed for maximum impact and minimal disruption.
        </p>
      </motion.div>

      <div className="w-full max-w-md md:max-w-lg space-y-6 md:space-y-8">
        {stepsData.map((step, index) => (
          <StepCard key={step.id} step={step} index={index} />
        ))}
      </div>
    </section>
  )
}


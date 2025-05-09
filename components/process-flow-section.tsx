"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Search, PenTool, Wrench, TrendingUp } from "lucide-react"

interface Step {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  color: string
  lightColor: string
  darkColor: string
  position: { x: number; y: number }
  angle: number
}

export default function ProcessFlowSection() {
  const [isHovered, setIsHovered] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  // Array of steps with their properties
  const steps: Step[] = [
    {
      id: 1,
      title: "Diagnose the Bottlenecks",
      description: "Analyze workflows and uncover time/money leaks.",
      icon: <Search className="w-6 h-6" />,
      color: "violet",
      lightColor: "#8B5CF6",
      darkColor: "#7C3AED",
      position: { x: 0, y: -180 }, // Perfectly aligned on vertical axis
      angle: 0,
    },
    {
      id: 2,
      title: "Design the Smart Systems",
      description: "Co-create a tailored automation blueprint.",
      icon: <PenTool className="w-6 h-6" />,
      color: "fuchsia",
      lightColor: "#D946EF",
      darkColor: "#C026D3",
      position: { x: 180, y: 0 }, // Perfectly aligned on horizontal axis
      angle: 90,
    },
    {
      id: 3,
      title: "Build, Test & Validate",
      description: "Deploy tools, test, and ensure seamless integration.",
      icon: <Wrench className="w-6 h-6" />,
      color: "amber",
      lightColor: "#F59E0B",
      darkColor: "#D97706",
      position: { x: 0, y: 180 }, // Perfectly aligned on vertical axis
      angle: 180,
    },
    {
      id: 4,
      title: "Iterate & Expand",
      description: "Monitor results and scale without breaking ops.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "cyan",
      lightColor: "#22D3EE",
      darkColor: "#0891B2",
      position: { x: -180, y: 0 }, // Perfectly aligned on horizontal axis
      angle: 270,
    },
  ]

  // Helper function to scroll to a section by ID
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Generate random positions for background particles
  const generateParticles = (count: number) => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 0.5 + 0.2,
    }))
  }

  const [particles] = useState(() => generateParticles(40))

  return (
    <section
      id="process"
      ref={sectionRef}
      className="min-h-screen snap-start flex items-center justify-center py-20 px-4 bg-gray-950 text-white relative overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 opacity-80"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/20 via-gray-950/40 to-gray-950/80"></div>

      {/* Glowing orbs in background */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-violet-500/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-amber-500/5 blur-3xl"></div>
      <div className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-cyan-500/5 blur-3xl"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              background: isHovered ? steps.find((s) => s.id === isHovered)?.lightColor || "#8B5CF6" : "#8B5CF6",
              opacity: 0.3,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 / particle.speed,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            The Process That Delivers Real Results—
            <motion.span
              className="text-amber-400"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Fast
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            This isn't a one-size-fits-all approach—it's a custom process designed to fit your unique business needs and
            drive real growth.
          </motion.p>
        </motion.div>

        {/* Main visualization - Desktop */}
        <div className="hidden md:block relative mb-16">
          {/* Orbital ring */}
          <motion.div
            className="relative w-[450px] h-[450px] mx-auto rounded-full border border-gray-800/50"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ delay: 0.4, duration: 1, type: "spring" }}
          />

          {/* Step nodes */}
          <div className="relative w-[450px] h-[450px] mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                initial={{ opacity: 0, x: step.position.x * 0.5, y: step.position.y * 0.5 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        x: step.position.x,
                        y: step.position.y,
                      }
                    : { opacity: 0, x: step.position.x * 0.5, y: step.position.y * 0.5 }
                }
                transition={{
                  delay: 0.5 + index * 0.1,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <motion.div
                  className="relative w-20 h-20 rounded-full flex items-center justify-center shadow-lg group cursor-pointer"
                  style={{
                    background: `linear-gradient(135deg, ${step.lightColor}, ${step.darkColor})`,
                  }}
                  onMouseEnter={() => setIsHovered(step.id)}
                  onMouseLeave={() => setIsHovered(null)}
                  whileHover={{ scale: 1.1 }}
                >
                  {/* Icon in the center of the circle */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {step.icon}
                  </div>

                  {/* Number always visible */}
                  <span className="text-white text-2xl font-bold group-hover:opacity-0 transition-opacity duration-300">
                    {step.id}
                  </span>

                  {/* Tooltip */}
                  <motion.div
                    className="absolute pointer-events-none bg-gray-900/90 backdrop-blur-md rounded-lg p-3 shadow-xl border border-gray-800/50 w-48 z-30"
                    style={{
                      top: step.angle === 0 ? "auto" : step.angle === 180 ? "120%" : "50%",
                      bottom: step.angle === 0 ? "120%" : "auto",
                      left: step.angle === 270 ? "auto" : step.angle === 90 ? "120%" : "50%",
                      right: step.angle === 270 ? "120%" : "auto",
                      transform:
                        step.angle === 0 || step.angle === 180
                          ? "translateX(-50%)"
                          : step.angle === 90 || step.angle === 270
                            ? "translateY(-50%)"
                            : "translate(-50%, -50%)",
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: isHovered === step.id ? 1 : 0,
                      scale: isHovered === step.id ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="font-bold mb-1" style={{ color: step.lightColor }}>
                      {step.title}
                    </h4>
                    <p className="text-gray-300 text-xs">{step.description}</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Connection arrows */}
          <svg
            className="absolute left-1/2 top-1/2 w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2 z-10"
            viewBox="0 0 450 450"
          >
            {/* Connection paths */}
            {steps.map((step, index) => {
              const nextIndex = (index + 1) % steps.length
              const nextStep = steps[nextIndex]

              // Calculate control points for smooth curve
              const startX = 225 + step.position.x * 0.9
              const startY = 225 + step.position.y * 0.9
              const endX = 225 + nextStep.position.x * 0.9
              const endY = 225 + nextStep.position.y * 0.9

              // Control points for the curve (adjusted for direction)
              const cpX1 = 225 + step.position.x * 0.5
              const cpY1 = 225 + step.position.y * 0.5
              const cpX2 = 225 + nextStep.position.x * 0.5
              const cpY2 = 225 + nextStep.position.y * 0.5

              const pathId = `path-${step.id}-${nextStep.id}`
              const gradientId = `gradient-${step.id}-${nextStep.id}`

              return (
                <g key={pathId}>
                  <defs>
                    <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor={step.lightColor} />
                      <stop offset="100%" stopColor={nextStep.lightColor} />
                    </linearGradient>
                  </defs>

                  <path
                    id={pathId}
                    d={`M ${startX} ${startY} Q ${cpX1} ${cpY1}, ${225} ${225} Q ${cpX2} ${cpY2}, ${endX} ${endY}`}
                    fill="none"
                    stroke={`url(#${gradientId})`}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  {/* Animated dot traveling along the path */}
                  <motion.circle
                    r="4"
                    fill="white"
                    filter="drop-shadow(0 0 3px white)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered === step.id || isHovered === nextStep.id ? 1 : 0.3 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <animateMotion
                      path={`M ${startX} ${startY} Q ${cpX1} ${cpY1}, ${225} ${225} Q ${cpX2} ${cpY2}, ${endX} ${endY}`}
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </motion.circle>
                </g>
              )
            })}

            {/* Arrowheads */}
            {steps.map((step, index) => {
              const nextIndex = (index + 1) % steps.length
              const nextStep = steps[nextIndex]

              // Arrow positioning
              const angle = nextStep.angle
              const arrowX = 225 + nextStep.position.x * 0.85
              const arrowY = 225 + nextStep.position.y * 0.85

              return (
                <motion.path
                  key={`arrow-${step.id}-${nextStep.id}`}
                  d={`M 0 -5 L 10 0 L 0 5 Z`}
                  fill={nextStep.lightColor}
                  transform={`translate(${arrowX}, ${arrowY}) rotate(${angle + 90})`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
                />
              )
            })}
          </svg>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden space-y-4 w-full max-w-md">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl p-4 border border-gray-800/50 overflow-hidden"
              style={{
                borderLeft: `4px solid ${step.lightColor}`,
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              onMouseEnter={() => setIsHovered(step.id)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {/* Background glow */}
              {isHovered === step.id && (
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    background: `radial-gradient(circle at left, ${step.lightColor} 0%, transparent 70%)`,
                  }}
                ></div>
              )}

              <div className="flex items-center gap-4 relative z-10">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${step.lightColor}, ${step.darkColor})`,
                  }}
                >
                  <span className="text-white font-bold">{step.id}</span>
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1" style={{ color: step.lightColor }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>

                <div className="w-8 flex-shrink-0 text-gray-400">{step.icon}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.button
            className="px-8 py-4 rounded-lg font-bold text-white relative overflow-hidden group"
            style={{
              background: `linear-gradient(45deg, ${steps[0].lightColor}, ${steps[2].lightColor})`,
              boxShadow: `0 4px 20px ${steps[0].lightColor}40`,
            }}
            onClick={() => scrollToSection("ai-form")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full"
              animate={{ translateX: ["100%", "-100%"] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
            />

            <span className="relative z-10">Get Your Free AI Audit</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

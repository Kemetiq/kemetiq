"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function ResultsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const results = [
    "Slash 30+% of manual inefficiencies across your workflows",
    "Deploy 1-button workflows that replace entire SOPs and training",
    "Reclaim 10+ hours per operator—weekly",
    "Make decisions faster with real-time analytics that actually make sense",
    "Transform repetitive tasks into ROI machines that run 24/7",
    "Get live dashboards that show what's working (and what's not)",
    "Close more deals with always-on lead gen systems",
  ]

  return (
    <section id="results" className="min-h-screen snap-start flex items-center justify-center bg-black">
      <div className="container px-4 md:px-6 py-8 md:py-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-10 text-center gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Work With Us to Unlock Game-Changing Results Like These:
          </motion.h2>

          <motion.ul
            className="space-y-4 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {results.map((result, index) => (
              <motion.li key={index} className="flex items-start" variants={itemVariants}>
                <CheckCircle className="h-6 w-6 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-lg text-gray-200">{result}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            className="text-xl text-center text-gray-300 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            AI isn't a luxury. It's the line between leaders and leftovers. The best don't work harder—they automate
            smarter.
          </motion.p>

          <div className="text-center">
            <button onClick={() => scrollToSection("ai-form")} className="gradient-button">
              Get My Automation Plan
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

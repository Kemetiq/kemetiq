"use client"

import { motion } from "framer-motion"
import { Zap, Brain, TrendingUp } from "lucide-react"

export default function WhyUsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="why-kemetiq" className="min-h-screen snap-start flex items-center justify-center bg-black">
      <div className="container px-4 md:px-6 py-8 md:py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">We Don't Sell AI. We Build Dominance.</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Most AI agencies peddle tools and leave you to figure out the rest. At KEMETIQ, we architect custom systems
            that turn your workflows into weapons. We don't just automate—we amplify what makes you unstoppable. Your
            competitors are drowning in digital quicksand. We hand you the ladder to climb out and leave them behind.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="bg-gray-900/50 p-8 rounded-xl gradient-border" variants={itemVariants}>
            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-500/20 text-violet-400">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Precision Systems Only</h3>
            <p className="text-gray-400">
              We eliminate tool bloat. Every workflow is built to win outcomes, not check boxes.
            </p>
          </motion.div>

          <motion.div className="bg-gray-900/50 p-8 rounded-xl gradient-border" variants={itemVariants}>
            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-fuchsia-500/20 text-fuchsia-400">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Impact in 30 Days</h3>
            <p className="text-gray-400">Blueprint to benefit in under a month. Execution speed is your edge.</p>
          </motion.div>

          <motion.div className="bg-gray-900/50 p-8 rounded-xl gradient-border" variants={itemVariants}>
            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/20 text-amber-400">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Scale Without Breaking</h3>
            <p className="text-gray-400">10x growth without 10x hiring. Systems win where headcount can't.</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button onClick={() => scrollToSection("wake-up-call")} className="gradient-button">
            Get My Automation Plan
          </button>
        </motion.div>
      </div>
    </section>
  )
}

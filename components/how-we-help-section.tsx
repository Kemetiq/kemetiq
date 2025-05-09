"use client"

import { motion } from "framer-motion"
import { Settings, TrendingUp, BarChart3 } from "lucide-react"

export default function HowWeHelpSection() {
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
    <section
      id="how-it-works"
      className="min-h-screen snap-start flex items-center justify-center bg-gradient-to-b from-black to-violet-950/30"
    >
      <div className="container px-4 md:px-6 py-8 md:py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">We Engineer Your Edge</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We Build AI Systems That Streamline Work and Drive Growth.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="bg-gray-900/50 p-8 rounded-xl gradient-border" variants={itemVariants}>
            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-500/20 text-violet-400">
              <Settings className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">Operational Efficiency</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="mr-2 text-violet-400">•</span>
                <span>Auto-assign up to 20 tasks a week—save around 4 hours of management time.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-violet-400">•</span>
                <span>Reduce copy/paste work by 80%—save about 2 hours/week per team member.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-violet-400">•</span>
                <span>Automate follow-ups to minimize missed deadlines.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div className="bg-gray-900/50 p-8 rounded-xl gradient-border" variants={itemVariants}>
            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-fuchsia-500/20 text-fuchsia-400">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">Revenue Growth</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="mr-2 text-fuchsia-400">•</span>
                <span>Engage leads in under 5 minutes—increase conversions by up to 10%.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-fuchsia-400">•</span>
                <span>Reactivate up to 15% of cold leads with automated sequences.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-fuchsia-400">•</span>
                <span>Book 3–5 qualified calls a week with minimal effort.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div className="bg-gray-900/50 p-8 rounded-xl gradient-border" variants={itemVariants}>
            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/20 text-amber-400">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">Informational Edge</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="mr-2 text-amber-400">•</span>
                <span>Dashboards that highlight up to $5K in missed opportunities each month.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-amber-400">•</span>
                <span>1-click reports that save about 1 hour of analysis each week.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-amber-400">•</span>
                <span>Spot bottlenecks in under 5 minutes instead of days.</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <div className="text-center">
          <button onClick={() => scrollToSection("ai-form")} className="gradient-button">
            Let's Build Your Advantage
          </button>
        </div>
      </div>
    </section>
  )
}

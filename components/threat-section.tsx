"use client"

import { motion } from "framer-motion"

export default function ThreatSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="wake-up-call"
      className="min-h-screen snap-start flex items-center justify-center py-20 px-4 md:py-8 md:px-4 bg-black text-white"
    >
      <div className="max-w-4xl w-full">
        <motion.h2
          className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Your Biggest Threat? The Competitor Who's{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-amber-400">
            Quietly Deploying AI.
          </span>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          They're automating everything—closing deals faster, scaling smarter. Don't get left behind.
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 mb-16">
          {/* You Column */}
          <motion.div
            className="w-full md:w-1/2 bg-zinc-900 rounded-xl p-6 shadow-md border border-zinc-800"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">You</h3>
            <ul className="space-y-3 text-left text-red-400">
              <li className="flex gap-2">
                ❌ <span>You spend 10 hours a week chasing leads.</span>
              </li>
              <li className="flex gap-2">
                ❌ <span>You lose $5K/month to data errors.</span>
              </li>
              <li className="flex gap-2">
                ❌ <span>You scale through hiring.</span>
              </li>
            </ul>
          </motion.div>

          {/* Competitor Column */}
          <motion.div
            className="w-full md:w-1/2 bg-zinc-900 rounded-xl p-6 shadow-md border border-zinc-800"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Your Competitor</h3>
            <ul className="space-y-3 text-left text-green-400 font-semibold">
              <li className="flex gap-2">
                ✅ <span>They close 50% more deals with zero effort.</span>
              </li>
              <li className="flex gap-2">
                ✅ <span>They save $10K/month in ops costs.</span>
              </li>
              <li className="flex gap-2">
                ✅ <span>They scale through systems.</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* NEW HEADLINE */}
        <motion.h3
          className="text-xl md:text-2xl font-bold text-red-400 mb-2 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          By Not Automating Now, You're Potentially Losing Hundreds Per Hour in Growth Opportunities.
        </motion.h3>
        <motion.p
          className="text-gray-300 mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Manual workflows bleed profit. Here's what it's really costing you:
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <motion.div
            className="bg-zinc-900 p-5 rounded-xl border border-zinc-700 text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-sm text-gray-400 mb-1">You miss 30% of leads due to slow follow-ups.</p>
            <p className="text-green-400 font-semibold">→ They convert 70% with instant outreach.</p>
          </motion.div>

          <motion.div
            className="bg-zinc-900 p-5 rounded-xl border border-zinc-700 text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <p className="text-sm text-gray-400 mb-1">Your team wastes 15 hours/week on admin.</p>
            <p className="text-green-400 font-semibold">→ Their team focuses on high-ROI work.</p>
          </motion.div>

          <motion.div
            className="bg-zinc-900 p-5 rounded-xl border border-zinc-700 text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-sm text-gray-400 mb-1">You're planning next quarter.</p>
            <p className="text-green-400 font-semibold">→ They've already optimized this one.</p>
          </motion.div>
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <button
            onClick={() => scrollToSection("ai-form")}
            className="gradient-button pulse px-6 py-3 text-lg font-semibold rounded-md shadow-md hover:scale-105 focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black"
          >
            Stop the Bleed — Claim Your Free Audit Now
          </button>
        </motion.div>
      </div>
    </section>
  )
}

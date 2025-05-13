"use client"

import { CheckCircle, XCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function ThreatSection() {
  return (
    <section
      id="wake-up-call"
      className="min-h-screen snap-start flex flex-col justify-center items-center px-4 md:px-10 py-20 bg-black text-white bg-gradient-to-b from-black to-gray-950"
    >
      <div className="max-w-5xl w-full text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          The real threat to your business,<br />
          <span className="gradient-text">The one Quietly Deploying AI</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          They're automating follow-ups, scaling without new hires, and closing more deals while you’re still catching up.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl w-full mb-12">
        <div className="bg-gray-900/80 border border-red-400/30 rounded-xl p-6 text-left">
          <h3 className="text-white font-semibold text-lg mb-4">You</h3>
          <ul className="text-red-400 space-y-2">
            <li className="flex items-center gap-2"><XCircle className="w-5 h-5" /> Spend 10+ hrs/week chasing leads</li>
            <li className="flex items-center gap-2"><XCircle className="w-5 h-5" /> Lose $5K/month to data errors</li>
            <li className="flex items-center gap-2"><XCircle className="w-5 h-5" /> Hire more people to scale</li>
          </ul>
        </div>

        <div className="bg-gray-900/80 border border-emerald-400/30 rounded-xl p-6 text-left">
          <h3 className="text-white font-semibold text-lg mb-4 gradient-text">Your Competitor</h3>
          <ul className="text-emerald-300 space-y-2">
            <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Close 50% more deals without extra effort</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Save $10K/month in ops costs</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Scale with systems, not headcount</li>
          </ul>
        </div>
      </div>

      <motion.h3
        className="text-2xl md:text-3xl font-bold text-red-500 text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        By Not Automating, You're Losing:
      </motion.h3>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl w-full mb-12 text-sm md:text-base">
        <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-4">
          <p className="text-gray-400">You miss 30% of leads due to slow follow-ups.</p>
          <p className="text-emerald-400 font-semibold mt-2">→ They convert 70% instantly.</p>
        </div>
        <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-4">
          <p className="text-gray-400">Your team wastes 15 hrs/week on admin.</p>
          <p className="text-emerald-400 font-semibold mt-2">→ Their team focuses on high-ROI work.</p>
        </div>
        <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-4">
          <p className="text-gray-400">You're planning next quarter.</p>
          <p className="text-emerald-400 font-semibold mt-2">→ They’ve already optimized this one.</p>
        </div>
      </div>

      <p className="text-sm text-gray-400 italic mb-6">
        Already helping operators across logistics, real estate, and B2B services unlock hidden profits.
      </p>

      <motion.button
        className="gradient-button px-8 py-4 text-white font-bold text-sm md:text-base rounded-lg"
        onClick={() => document.getElementById("ai-form")?.scrollIntoView({ behavior: "smooth" })}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        → Stop the Bleed — Claim Your Free Audit Now
      </motion.button>
    </section>
  )
}
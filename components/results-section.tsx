"use client";

import { motion } from "framer-motion";

export default function ResultsSection() {
  return (
    <section
      id="results"
      className="min-h-screen snap-start flex items-center justify-center bg-gradient-to-b from-black to-violet-950/30 px-4 py-20"
    >
      <div className="w-full max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold gradient-text mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Partner With Us.
          <br />
          To Unlock Wins Like These:
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl text-gray-300 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          These aren’t pipe dreams—they’re your reality in 30 days or less.
          <br />
          The gap between you and the leaders getting these wins? They took the leap.
        </motion.p>

        <motion.ul
          className="text-left text-base sm:text-lg text-gray-100 mb-12 space-y-4 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {[
            "✅ Convert missed calls into booked appointments—effortlessly.",
            "✅ Swap 8–12 hours/week of admin for self-running workflows.",
            "✅ Cut 30+% of manual inefficiencies across your operations.",
            "✅ Launch 1-button workflows that replace SOPs and training.",
            "✅ Seal more deals with always-on lead generation systems.",
          ].map((item, i) => (
            <motion.li
              key={i}
              className="leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          className="text-lg sm:text-xl text-gray-300 italic mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          You’re not just reclaiming time—you’re reclaiming mental space,
          clarity, and the freedom to focus on what truly matters.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 gap-4 sm:gap-4 max-w-2xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {[
            {
              pain: "You’re missing leads after hours.",
              gain: "We help you capture, qualify, and book them while you sleep.",
            },
            {
              pain: "You’re following up 3 days late.",
              gain: "We help you follow up automatically in under 60 seconds.",
            },
            {
              pain: "You’re doing $20/hour tasks as the CEO.",
              gain: "We turn those into $10K/month automations.",
            },
          ].map(({ pain, gain }, i) => (
            <motion.div
              key={i}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center border border-violet-700 rounded-xl px-6 py-5 text-left backdrop-blur-sm bg-white/5"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-red-400 font-medium sm:w-1/2 sm:pr-4">
                {pain}
              </p>
              <p className="text-sm sm:text-base font-medium text-amber-300 sm:w-1/2 sm:text-right">
                {gain}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-lg sm:text-xl text-gray-300 mt-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Imagine 30 days from now… fewer headaches, more focus on what counts,
          and systems running the show.
        </motion.p>

        <motion.button
          onClick={() =>
            document.getElementById("ai-form")?.scrollIntoView({ behavior: "smooth" })
          }
          className="gradient-button mt-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          → Get Your Edge Now
        </motion.button>
      </div>
    </section>
  );
}

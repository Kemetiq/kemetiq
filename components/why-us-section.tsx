"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Brain, TrendingUp } from "lucide-react";

const FEATURES = [
  {
    title: "Precision Systems Only",
    icon: <Brain className="w-6 h-6" />,
    color: "violet",
    desc: "We eliminate tool bloat. Every workflow is built to win outcomes, not check boxes.",
  },
  {
    title: "Impact in 30 Days",
    icon: <Zap className="w-6 h-6" />,
    color: "fuchsia",
    desc: "Blueprint to benefit in under a month. Execution speed is your edge.",
  },
  {
    title: "Scale Without Breaking",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "amber",
    desc: "10x growth without 10x hiring. Systems win where headcount can't.",
  },
];

export default function WhyUsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="why-kemetiq" className="min-h-screen snap-start flex items-center justify-center bg-black">
      <div className="container px-4 md:px-6 py-8 md:py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            We Don't Sell AI. We Build Dominance.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Most AI agencies peddle tools and leave you to figure out the rest. At KEMETIQ, we architect custom systems
            that turn your workflows into weapons. We don't just automate—we amplify what makes you unstoppable.
            Your competitors are drowning in digital quicksand. We hand you the ladder to climb out and leave them behind.
          </p>
        </motion.div>

        {/* Cards - Desktop Grid */}
        <motion.div
          className="hidden md:grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {FEATURES.map((item, i) => (
            <motion.div
              key={i}
              className={`bg-gray-900/50 p-8 rounded-xl gradient-border text-left`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className={`mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-${item.color}-500/20 text-${item.color}-400`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-4">
          {FEATURES.map((item, i) => (
            <div key={i} className="bg-gray-900/50 rounded-xl gradient-border">
              <button
                className="flex items-center justify-between w-full px-4 py-4"
                onClick={() => toggle(i)}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-${item.color}-500/20 text-${item.color}-400 flex items-center justify-center`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-left">{item.title}</h3>
                </div>
                <span className="text-gray-400 text-xl">{openIndex === i ? "−" : "+"}</span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    className="px-4 pb-4 text-sm text-gray-400"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.desc}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA */}
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
  );
}

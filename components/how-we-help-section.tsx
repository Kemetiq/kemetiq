"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, TrendingUp, BarChart3 } from "lucide-react";

export default function HowWeHelpSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const cards = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Operational Efficiency",
      color: "violet",
      bullets: [
        "Auto-assign up to 20 tasks a week—save around 4 hours of management time.",
        "Reduce copy/paste work by 80%—save about 2 hours/week per team member.",
        "Automate follow-ups to minimize missed deadlines.",
      ],
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Revenue Growth",
      color: "fuchsia",
      bullets: [
        "Engage leads in under 5 minutes—increase conversions by up to 10%.",
        "Reactivate up to 15% of cold leads with automated sequences.",
        "Book 3–5 qualified calls a week with minimal effort.",
      ],
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Informational Edge",
      color: "amber",
      bullets: [
        "Dashboards that highlight up to $5K in missed opportunities each month.",
        "1-click reports that save about 1 hour of analysis each week.",
        "Spot bottlenecks in under 5 minutes instead of days.",
      ],
    },
  ];

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

        <div className="flex flex-col gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`rounded-xl gradient-border p-4 bg-gray-900/50`}
            >
              <button
                className="w-full flex items-center justify-between text-left"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center bg-${card.color}-500/20 text-${card.color}-400`}
                  >
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{card.title}</h3>
                </div>
                <span className="text-white text-2xl">{openIndex === index ? "−" : "+"}</span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.ul
                    className="pl-14 pt-4 space-y-2 text-gray-400"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {card.bullets.map((point, i) => (
                      <li key={i} className="list-disc list-inside">{point}</li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button onClick={() => scrollToSection("ai-form")} className="gradient-button">
            Let's Build Your Advantage
          </button>
        </div>
      </div>
    </section>
  );
}

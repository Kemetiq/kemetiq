"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [showContent, setShowContent] = useState(false);
  const [showFlash, setShowFlash] = useState(true);

  useEffect(() => {
    const flashTimer = setTimeout(() => {
      setShowFlash(false);
    }, 1800);

    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 1800);

    return () => {
      clearTimeout(flashTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  const flashVariants = {
    initial: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.5 },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "backOut", delay: 1.2 },
    },
  };

  const logoPulse = {
    scale: [1, 1.02, 1],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    },
  };

  return (
    <section
      id="hero"
      className="snap-start h-screen w-full flex items-center justify-center text-center relative overflow-hidden p-4 sm:p-6 md:p-8"
    >
      {/* Background Video + Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          key={Date.now()}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover brightness-[0.75]"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Grain layer just for intro */}
        {showFlash && (
          <div className="absolute inset-0 z-10 bg-[url('/images/grain.gif')] bg-cover opacity-20 pointer-events-none" />
        )}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center gap-y-5 md:gap-y-6 w-full max-w-3xl lg:max-w-4xl">
        {/* Flash overlay */}
        {showFlash && (
          <motion.div
            className="fixed inset-0 bg-white z-[100]"
            variants={flashVariants}
            initial="initial"
            animate="exit"
            key="flash-overlay"
          />
        )}

        {showContent && (
          <motion.div
            className="flex flex-col items-center justify-center gap-y-5 md:gap-y-6 w-full"
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            variants={{
              visible: { transition: { staggerChildren: 0.3 } },
            }}
          >
            {/* Logo */}
            <motion.div
              variants={logoVariants}
              animate={logoPulse}
              className="w-auto max-w-[360px] sm:max-w-[420px] md:max-w-[500px]"
            >
              <Image
                src="/images/kemetiq-logo.png"
                alt="Kemetiq Logo"
                width={500}
                height={90}
                priority
              />
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white"
              variants={textVariants}
            >
              Automate the Ordinary.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 animate-gradient">
                Amplify the Extraordinary.
              </span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              className="text-sm sm:text-base md:text-lg text-gray-200 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"
              variants={textVariants}
            >
              We help you build tailored AI systems that eliminate drag, unlock your team’s full potential, and give you the edge to scale—fast.
            </motion.p>

            {/* CTA */}
            <motion.div variants={ctaVariants}>
              <Button
                size="lg"
                className="gradient-button text-white font-semibold text-base sm:text-lg md:text-xl px-6 py-3 sm:px-8 sm:py-3.5 rounded-lg shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md hover:scale-105 focus:ring-4 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300 ease-in-out"
                onClick={() => {
                  const section = document.getElementById("ai-form");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Get Your Free AI Automation Audit
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

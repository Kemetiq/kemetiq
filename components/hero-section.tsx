"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react"; // Removed ArrowDown
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [showContent, setShowContent] = useState(false);
  const [showFlash, setShowFlash] = useState(true);
  // Removed showScrollIndicator state as the arrow is being removed

  useEffect(() => {
    const flashTimer = setTimeout(() => {
      setShowFlash(false);
    }, 1800); // Flash duration 1.5-2 seconds, using 1.8s

    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 1800); // Content appears after flash

    // Removed handleScroll and its event listener as they were for the scroll indicator

    return () => {
      clearTimeout(flashTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  const flashVariants = {
    initial: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  // Animation Variants for content after flash
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.2 } // Delay after flash fades
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    }),
  };
  
  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: "backOut", 
        delay: 1.2, // Appears last
      },
    },
  };

  const ctaPulse = {
    scale: [1, 1.03, 1],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
    },
  };

  // Removed scrollIndicatorVariants

  return (
    <section
      id="hero"
      className="snap-start min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden p-4 sm:p-6 md:p-8"
    >
      {/* Fullscreen video background */}
      <div className="absolute inset-0 z-0">
        <video
          key={Date.now()} 
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-y-5 md:gap-y-6 w-full max-w-3xl lg:max-w-4xl">
        {/* Flash Effect */}
        {showFlash && (
          <motion.div
            className="fixed inset-0 bg-white z-[100]"
            variants={flashVariants}
            initial="initial"
            animate="exit" 
            key="flash-overlay"
          />
        )}

        {/* Animated content that appears after flash */}
        {showContent && (
          <motion.div 
            className="flex flex-col items-center justify-center gap-y-5 md:gap-y-6 w-full"
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            variants={{ 
              visible: { transition: { staggerChildren: 0.3 } } 
            }}
          >
            {/* Logo */}
            <motion.div variants={logoVariants} className="w-auto max-w-[280px] sm:max-w-[320px] md:max-w-[380px]">
              <Image 
                src="/images/kemetiq-logo.png" 
                alt="Kemetiq Logo"
                width={380} 
                height={70} 
                priority 
              />
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white"
              variants={textVariants}
            >
              Stop bleeding time and money.
            </motion.h1>

            {/* Subheadline */}
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 animate-gradient"
              variants={textVariants}
            >
              Automate the Ordinary. Amplify the Extraordinary.
            </motion.h2>

            {/* CTA Button */}
            <motion.div variants={ctaVariants} className="mt-4 mb-2 md:mt-6 md:mb-3">
              <motion.div animate={ctaPulse}>
                <Button
                  size="lg"
                  className="gradient-button text-white font-semibold text-base sm:text-lg md:text-xl px-6 py-3 sm:px-8 sm:py-3.5 rounded-lg shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md hover:scale-105 hover:-translate-y-0.5 focus:ring-4 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300 ease-in-out relative overflow-hidden group"
                  onClick={() => {
                    const section = document.getElementById("ai-form");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 flex items-center justify-center">
                    Get Your Free AI Automation Audit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Paragraph */}
            <motion.p
              className="text-sm sm:text-base md:text-lg text-gray-200 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"
              variants={textVariants}
            >
              We build custom AI automation systems that plug your operational leaks, free up your team, AND scale your business—without the enterprise price.
            </motion.p>
            
            <motion.p 
              className="text-xs text-gray-400 mt-1"
              variants={textVariants}
            >
              Limited slots available. Find out if you qualify.
            </motion.p>
          </motion.div>
        )}
      </div> {/* Removed AnimatePresence wrapper for content as it is handled by showContent state */}

      {/* Scroll Down Indicator and its AnimatePresence wrapper have been removed */}

    </section>
  );
}

// Ensure these keyframes are defined in your global CSS or a style tag
/*
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}

@keyframes shine {
  0% { left: -100%; }
  50% { left: 100%; }
  100% { left: 100%; }
}
.group:hover .animate-shine {
  animation: shine 0.75s ease-in-out;
}
*/


/* eslint-disable @next/next/no-img-element */
"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Brain, Hourglass, TrendingUp, Briefcase, RotateCw, Star, X, Menu } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  id: string
  label: string
  icon: React.ReactNode
  isEdge?: boolean
}

export default function VerticalNav() {
  const [activeSection, setActiveSection] = useState<string>("hero")
  const [isOpen, setIsOpen] = useState(false) 
  const [isDesktopHover, setIsDesktopHover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const navItems: NavItem[] = [
    { id: "why-kemetiq", label: "Why Kemetiq", icon: <Brain className="w-5 h-5" /> },
    { id: "wake-up-call", label: "The Stakes", icon: <Hourglass className="w-5 h-5" /> },
    { id: "results", label: "Results", icon: <TrendingUp className="w-5 h-5" /> },
    { id: "how-it-works", label: "Solutions", icon: <Briefcase className="w-5 h-5" /> },
    { id: "process", label: "Our Process", icon: <RotateCw className="w-5 h-5" /> },
  ];

  useEffect(() => {
    const sectionsToWatch = [document.getElementById("hero"), ...navItems.map(item => document.getElementById(item.id)), document.getElementById("ai-form")].filter(Boolean) as HTMLElement[];
    
    const handleScroll = () => {
      if (typeof window === "undefined") return; // Ensure window is defined
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentSectionId = "hero"; 

      for (const section of sectionsToWatch) {
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          currentSectionId = section.id;
          break;
        }
      }
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        const aiFormSection = document.getElementById("ai-form");
        if (aiFormSection && aiFormSection.offsetTop <= scrollPosition) {
            currentSectionId = "ai-form";
        }
      }
      setActiveSection(currentSectionId);
    }

    if (typeof window !== "undefined") { // Ensure window is defined before adding event listener
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll(); 
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [navItems]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    if (isMobile) setIsOpen(false) 
  }

  const effectiveIsOpen = isOpen || (!isMobile && isDesktopHover);

  return (
    <>
      {isMobile && (
        <button
          className="md:hidden fixed top-4 left-4 z-[60] bg-[#0D0D0D]/90 backdrop-blur-sm p-2 rounded-md text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Image src="/images/kemetiq-nav-logo.png" alt="Menu" width={28} height={28} />}
        </button>
      )}

      {isOpen && isMobile && (
        <div 
          className="fixed inset-0 bg-black/70 z-[45] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav
        className={cn(
          "fixed left-0 top-0 h-full z-50 bg-[#0D0D0D]/90 backdrop-blur-sm flex flex-col items-center py-6 transition-all duration-300 ease-in-out",
          effectiveIsOpen ? "w-60" : "w-16",
          isMobile && !isOpen && "-translate-x-full",
          isMobile && isOpen && "translate-x-0"
        )}
        onMouseEnter={() => { if (!isMobile) setIsDesktopHover(true); }}
        onMouseLeave={() => { if (!isMobile) setIsDesktopHover(false); }}
      >
        <button 
          onClick={() => scrollToSection("hero")} 
          className="mb-8 mt-2 flex items-center justify-center w-full h-10 px-3"
          aria-label="Go to Home section"
        >
          <Image 
            src="/images/kemetiq-nav-logo.png" 
            alt="Kemetiq Logo" 
            width={effectiveIsOpen ? 40 : 32} 
            height={effectiveIsOpen ? 40 : 32} 
            className="transition-all duration-300"
          />
        </button>

        <ul className="space-y-3 w-full flex-grow flex flex-col px-2">
          {navItems.map((item) => (
            <li key={item.id} className="relative group">
              <button
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "flex items-center w-full p-3 rounded-lg transition-colors duration-200 ease-in-out",
                  activeSection === item.id
                    ? "bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white shadow-lg"
                    : "hover:bg-gray-700/50 text-gray-400 hover:text-white",
                  effectiveIsOpen ? "justify-start" : "justify-center"
                )}
              >
                <span className="flex-shrink-0">{item.icon}</span>
                {effectiveIsOpen && <span className="ml-3 whitespace-nowrap font-medium">{item.label}</span>}
              </button>
              {!effectiveIsOpen && (
                <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-800 text-white text-xs rounded py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[60]">
                  {item.label}
                </span>
              )}
            </li>
          ))}
          
          <li className="mt-auto relative group w-full">
             <button
                onClick={() => scrollToSection("ai-form")}
                className={cn(
                  "flex items-center w-full p-3 rounded-lg transition-colors duration-200 ease-in-out",
                  activeSection === "ai-form"
                    ? "bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white shadow-lg"
                    : "bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 hover:text-amber-300",
                  effectiveIsOpen ? "justify-start" : "justify-center"
                )}
              >
                <span className="flex-shrink-0"><Star className="w-5 h-5" /></span>
                {effectiveIsOpen && <span className="ml-3 whitespace-nowrap font-semibold">Get Your Edge</span>}
              </button>
              {!effectiveIsOpen && (
                <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-800 text-white text-xs rounded py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[60]">
                  Get Your Edge
                </span>
              )}
          </li>
        </ul>
      </nav>
    </>
  )
}


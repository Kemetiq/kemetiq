"use client";

import { useState, useEffect } from "react";
import {
  LoaderPinwheel,
  ChartBar,
  BrainCircuit,
  Crosshair,
  TestTubes,
  Star,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export default function VerticalNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktopHover, setIsDesktopHover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const navItems: NavItem[] = [
    { id: "why-kemetiq", label: "Why Kemetiq", icon: <LoaderPinwheel size={20} /> },
    { id: "wake-up-call", label: "The Stakes", icon: <ChartBar size={20} /> },
    { id: "results", label: "Results", icon: <BrainCircuit size={20} /> },
    { id: "how-it-works", label: "Solutions", icon: <Crosshair size={20} /> },
    { id: "process", label: "Our Process", icon: <TestTubes size={20} /> },
  ];

  useEffect(() => {
    const targets = [
      document.getElementById("hero"),
      ...navItems.map((i) => document.getElementById(i.id)),
      document.getElementById("ai-form"),
    ].filter(Boolean) as HTMLElement[];

    const onScroll = () => {
      const pos = window.scrollY + window.innerHeight / 2;
      let current = "hero";
      for (const section of targets) {
        if (section.offsetTop <= pos && section.offsetTop + section.offsetHeight > pos) {
          current = section.id;
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [navItems]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    if (isMobile) setIsOpen(false);
  };

  const effectiveIsOpen = isOpen || (!isMobile && isDesktopHover);

  return (
    <>
      {isMobile && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 z-[60] p-2 bg-[#0D0D0D]/90 text-white rounded-md"
        >
          {isOpen ? (
            <X size={24} />
          ) : (
            <img
              src="/images/kemetiq-nav-logo.png"
              alt="Kemetiq Logo"
              className="w-7 h-7 object-contain"
            />
          )}
        </button>
      )}

      {isMobile && isOpen && (
        <div className="fixed inset-0 bg-black/70 z-[45]" onClick={() => setIsOpen(false)} />
      )}

      <nav
        className={cn(
          "fixed top-0 left-0 h-full z-50 flex flex-col items-center bg-[#0D0D0D]/90 backdrop-blur-sm py-6 transition-all",
          effectiveIsOpen ? "w-60" : "w-16",
          isMobile && !isOpen && "-translate-x-full",
          isMobile && isOpen && "translate-x-0"
        )}
        onMouseEnter={() => !isMobile && setIsDesktopHover(true)}
        onMouseLeave={() => !isMobile && setIsDesktopHover(false)}
      >
        <button
          onClick={() => scrollToSection("hero")}
          className="mb-8 mt-2 w-full flex justify-center items-center h-12"
        >
          <img
            src="/images/kemetiq-nav-logo.png"
            alt="Kemetiq Logo"
            width={effectiveIsOpen ? 40 : 28}
            height={effectiveIsOpen ? 40 : 28}
            className="object-contain"
          />
        </button>

        <ul className="space-y-3 w-full flex-grow flex flex-col px-2">
          {navItems.map(({ id, label, icon }) => (
            <li key={id} className="group relative">
              <button
                onClick={() => scrollToSection(id)}
                className={cn(
                  "flex items-center w-full p-3 rounded-lg transition-colors duration-200",
                  activeSection === id
                    ? "bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white shadow-lg"
                    : "hover:bg-gray-700/50 text-gray-400 hover:text-white",
                  effectiveIsOpen ? "justify-start" : "justify-center"
                )}
              >
                <span className="flex-shrink-0 w-6 h-6">{icon}</span>
                {effectiveIsOpen && (
                  <span className="ml-3 font-medium whitespace-nowrap">{label}</span>
                )}
              </button>
              {!effectiveIsOpen && (
                <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-800 text-white text-xs rounded py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                  {label}
                </span>
              )}
            </li>
          ))}

          <li className="mt-auto group relative w-full">
            <button
              onClick={() => scrollToSection("ai-form")}
              className={cn(
                "flex items-center w-full p-3 rounded-lg transition duration-200 ease-in-out",
                activeSection === "ai-form"
                  ? "bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white shadow-lg"
                  : "bg-gradient-to-br from-purple-500 to-yellow-400 text-white",
                effectiveIsOpen ? "justify-start" : "justify-center"
              )}
            >
              <span className="flex-shrink-0 w-6 h-6">
                <Star className="w-full h-full" />
              </span>
              {effectiveIsOpen && (
                <span className="ml-3 font-semibold whitespace-nowrap">Get Your Edge</span>
              )}
            </button>
            {!effectiveIsOpen && (
              <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-800 text-white text-xs rounded py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                Get Your Edge
              </span>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}

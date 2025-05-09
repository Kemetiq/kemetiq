"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Check, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

// Helper to get dates for the next 14 days
const getNext14Days = () => {
  const days = []
  const today = new Date()
  for (let i = 0; i < 14; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    days.push(date)
  }
  return days
}

// Mock time slots
const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM",
  "02:00 PM", "03:00 PM", "04:00 PM",
]

export default function AIForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    bottlenecks: "",
    areas: [] as string[],
    currentManagement: "",
    name: "",
    email: "",
    phone: "",
    industry: "",
    additionalContext: "",
    newsletter: true,
    sessionCommitment: false,
    selectedDate: null as Date | null,
    selectedTime: "" as string,
  })

  const [availableDays, setAvailableDays] = useState<Date[]>([])
  const [currentWeekOffset, setCurrentWeekOffset] = useState(0) // 0 for first week, 1 for second week

  useEffect(() => {
    setAvailableDays(getNext14Days())
  }, [])

  const handleAreaToggle = (area: string) => {
    setFormData((prev) => {
      if (prev.areas.includes(area)) {
        return { ...prev, areas: prev.areas.filter((a) => a !== area) }
      } else {
        return { ...prev, areas: [...prev.areas, area] }
      }
    })
  }

  const handleManagementChange = (management: string) => {
    setFormData((prev) => ({ ...prev, currentManagement: management }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean, name: string) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleDateSelect = (date: Date) => {
    setFormData((prev) => ({ ...prev, selectedDate: date, selectedTime: "" }))
  }

  const handleTimeSelect = (time: string) => {
    setFormData((prev) => ({ ...prev, selectedTime: time }))
  }

  const nextStep = () => {
    setStep((prev) => prev + 1)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const prevStep = () => {
    setStep((prev) => prev - 1)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // If this is the final step (e.g. after calendar selection or confirmation)
    // Navigate to hero section
    if (step === 5) { // Assuming step 5 is the confirmation/final submit
      const heroSection = document.getElementById("hero-section") // Ensure your hero section has id="hero-section"
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: "smooth" })
        setStep(1) // Reset form or navigate away
      } else {
        // Fallback if hero section not found, or simply go to next step for now
        nextStep() 
      }
    } else {
        nextStep()
    }
  }
  
  const daysToShow = availableDays.slice(currentWeekOffset * 7, (currentWeekOffset + 1) * 7);

  return (
    <section
      id="ai-form"
      className="min-h-screen snap-start flex items-center justify-center py-8 md:py-20 px-4 bg-black"
    >
      <div className="max-w-4xl w-full">
        <motion.div
          className="mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className={`text-sm font-medium ${step >= 1 ? "text-violet-400" : "text-gray-500"}`}>DIAGNOSE</span>
              <span className={`text-sm font-medium ${step >= 2 ? "text-violet-400" : "text-gray-500"}`}>TARGET</span>
              <span className={`text-sm font-medium ${step >= 3 ? "text-violet-400" : "text-gray-500"}`}>SCHEDULE</span> 
              <span className={`text-sm font-medium ${step >= 4 ? "text-violet-400" : "text-gray-500"}`}>CONFIRM</span>
            </div>
            <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-violet-600 to-amber-500 transition-all duration-300"
                style={{ width: `${((step - 1) / 3) * 100}%` }} // Adjusted for 4 steps before confirmation
              ></div>
            </div>
          </div>

          <div className="bg-gray-900/70 rounded-xl p-3 md:p-6 gradient-border">
            {step === 1 && (
              <motion.div /* ... existing step 1 content ... */ className="space-y-3 md:space-y-4">
                <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 gradient-text">
                  What_s Bleeding Your Time and Money the Most?
                </h2>
                <p className="text-sm md:text-base text-gray-400 mb-2 md:mb-4">
                  Here_s a wake-up call: 33% of businesses ignore their own data, and 70% barely scratch the surface of
                  its potential. Manual processes are silently draining your resources—AI can pinpoint the leaks and
                  stop the bleed.
                </p>
                <div className="mb-3 md:mb-4">
                  <Label htmlFor="bottlenecks" className="text-sm font-medium mb-1 md:mb-2 block">
                    Tell us about your biggest operational challenges:
                  </Label>
                  <Textarea
                    id="bottlenecks"
                    name="bottlenecks"
                    placeholder="e.g. Manual data entry, inconsistent follow-ups"
                    className="min-h-[100px] md:min-h-[120px] bg-gray-800 border-gray-700 text-white"
                    value={formData.bottlenecks}
                    onChange={handleChange}
                  />
                </div>
                <Button
                  onClick={nextStep}
                  className="gradient-button w-full text-white font-semibold text-base hover:scale-105 focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black"
                >
                  <span className="hidden md:inline">Next: </span>Tell Us Where You Need a Boost
                </Button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div /* ... existing step 2 content ... */ className="space-y-3 md:space-y-4">
                 <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 gradient-text">
                  Where Can AI Skyrocket Your Results?
                </h2>
                <p className="text-sm md:text-base text-gray-400 mb-2 md:mb-4">
                  AI automation isn_t just a tool—it_s a game-changer. Imagine customer support that never sleeps,
                  slashing response times and delighting clients, or operations so smooth you save hours every week.
                  Where can AI unlock your biggest win?
                </p>

                <div className="mb-3 md:mb-4">
                  <Label className="text-sm font-medium mb-2 md:mb-3 block">
                    Where do you want to unlock your AI advantage?
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3">
                    {["Ops", "Sales", "Support", "Reporting", "Logistics"].map((area) => (
                      <button
                        key={area}
                        type="button"
                        onClick={() => handleAreaToggle(area)}
                        className={`p-3 md:p-4 rounded-lg border ${
                          formData.areas.includes(area)
                            ? "border-violet-500 bg-violet-500/20"
                            : "border-gray-700 bg-gray-800/50 hover:bg-gray-700/50"
                        } transition-colors flex flex-col items-center justify-center text-center min-h-[40px] md:min-h-[48px]`}
                      >
                        {formData.areas.includes(area) && (
                          <Check className="h-3 w-3 md:h-4 md:w-4 text-violet-400 mb-1" />
                        )}
                        <span className="text-sm md:text-base">{area}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-4 md:mb-6">
                  <Label className="text-sm font-medium mb-2 md:mb-3 block">How are you managing this now?</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                    {["Fully manual", "Mixed tools", "Tried automation", "Already scaling"].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleManagementChange(option)}
                        className={`p-3 md:p-4 rounded-lg border ${
                          formData.currentManagement === option
                            ? "border-violet-500 bg-violet-500/20"
                            : "border-gray-700 bg-gray-800/50 hover:bg-gray-700/50"
                        } transition-colors min-h-[40px] md:min-h-[48px] text-sm md:text-base`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                  <Button
                    onClick={prevStep}
                    variant="outline"
                    className="w-full min-h-[40px] md:min-h-[48px] text-sm md:text-base"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={nextStep}
                    className="gradient-button w-full text-white font-semibold text-base hover:scale-105 focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    <span className="hidden md:inline">Next: </span>Share Your Details
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && ( // This is now the Calendar Step
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 md:space-y-6"
              >
                <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 gradient-text">
                  We_ve Reserved Time For Your Business. Select Your Preferred Slot:
                </h2>
                
                {/* Calendar Display */}
                <div className="bg-gray-800/50 p-3 md:p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <Button variant="ghost" size="icon" onClick={() => setCurrentWeekOffset(0)} disabled={currentWeekOffset === 0}>
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <h3 className="text-md md:text-lg font-medium text-violet-300">
                      {daysToShow.length > 0 && 
                        `${daysToShow[0].toLocaleDateString("en-US", { month: "long" })} ${daysToShow[0].getFullYear()}`}
                    </h3>
                    <Button variant="ghost" size="icon" onClick={() => setCurrentWeekOffset(1)} disabled={currentWeekOffset === 1}>
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-7 gap-1 md:gap-2">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(dayName => (
                        <div key={dayName} className="text-center text-xs md:text-sm text-gray-400 font-medium">{dayName}</div>
                    ))}
                    {daysToShow.map((day) => (
                      <button
                        key={day.toISOString()}
                        onClick={() => handleDateSelect(day)}
                        className={`p-2 md:p-3 rounded-md text-center text-xs md:text-sm transition-colors
                          ${formData.selectedDate?.toDateString() === day.toDateString()
                            ? "bg-violet-600 text-white ring-2 ring-violet-400"
                            : "bg-gray-700 hover:bg-gray-600 text-gray-200"
                        }`}
                      >
                        {day.getDate()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Slot Selection */}
                {formData.selectedDate && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }} 
                    animate={{ opacity: 1, height: "auto" }} 
                    transition={{ duration: 0.3 }}
                    className="bg-gray-800/50 p-3 md:p-4 rounded-lg mt-3 md:mt-4"
                  >
                    <h4 className="text-md md:text-lg font-medium mb-2 md:mb-3 text-violet-300">
                      Available Times for {formData.selectedDate.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" })}:
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => handleTimeSelect(time)}
                          className={`p-2 md:p-3 rounded-md text-xs md:text-sm transition-colors
                            ${formData.selectedTime === time
                              ? "bg-amber-500 text-black ring-2 ring-amber-300"
                              : "bg-gray-700 hover:bg-gray-600 text-gray-200"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                <div className="flex flex-col sm:flex-row gap-2 md:gap-3 pt-2 md:pt-3">
                  <Button
                    onClick={prevStep}
                    variant="outline"
                    className="w-full min-h-[40px] md:min-h-[48px] text-sm md:text-base"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={nextStep} // This will go to step 4 (Confirmation)
                    disabled={!formData.selectedDate || !formData.selectedTime}
                    className="gradient-button w-full text-white font-semibold text-base hover:scale-105 focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    Next: Confirm Details
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 4 && ( // This is now the User Details / Confirmation Step
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-3 md:space-y-4"
              >
                <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 gradient-text">
                  Confirm Your Details & Secure Your Slot
                </h2>
                <p className="text-sm md:text-base text-gray-400 mb-2 md:mb-4">
                  You_ve selected: 
                  <span className="text-amber-400 font-semibold">
                    {formData.selectedDate?.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })} at {formData.selectedTime}
                  </span>.
                  Please provide your details to confirm.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                  <div>
                    <Label htmlFor="industry" className="text-sm font-medium mb-1 md:mb-2 block">
                      Industry
                    </Label>
                    <Input
                      id="industry"
                      name="industry"
                      placeholder="Your industry"
                      className="bg-gray-800 border-gray-700 text-white min-h-[40px] md:min-h-[48px]"
                      value={formData.industry}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="name" className="text-sm font-medium mb-1 md:mb-2 block">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="bg-gray-800 border-gray-700 text-white min-h-[40px] md:min-h-[48px]"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium mb-1 md:mb-2 block">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-gray-800 border-gray-700 text-white min-h-[40px] md:min-h-[48px]"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium mb-1 md:mb-2 block">
                      Phone (optional)
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+1 (555) 123-4567"
                      className="bg-gray-800 border-gray-700 text-white min-h-[40px] md:min-h-[48px]"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                   <div className="mb-3 md:mb-4">
                        <Label htmlFor="additionalContext" className="text-sm font-medium mb-1 md:mb-2 block">
                            Want To Give Us More Context Before Your Session? (Optional)
                        </Label>
                        <Textarea
                            id="additionalContext"
                            name="additionalContext"
                            placeholder="If there are specific friction points or goals you_d like us to prepare for, you can share additional context here."
                            className="min-h-[80px] md:min-h-[100px] bg-gray-800 border-gray-700 text-white"
                            value={formData.additionalContext}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex items-center space-x-2 mb-3 md:mb-4">
                        <Checkbox 
                            id="newsletter" 
                            name="newsletter"
                            checked={formData.newsletter}
                            onCheckedChange={(checked) => handleCheckboxChange(checked as boolean, "newsletter")}    
                        />
                        <Label htmlFor="newsletter" className="text-sm font-normal text-gray-300">
                            YES - KEEP ME IN THE AUTOMATION LOOP (Exclusive access to playbooks, case studies & client results)
                        </Label>
                    </div>

                  <div className="flex flex-col sm:flex-row gap-2 md:gap-3 pt-1 md:pt-2">
                    <Button
                      type="button"
                      onClick={prevStep}
                      variant="outline"
                      className="w-full min-h-[40px] md:min-h-[48px] text-sm md:text-base"
                    >
                      Back to Calendar
                    </Button>
                    <Button
                      type="submit" // This will go to step 5 (Final Confirmation page)
                      className="gradient-button w-full text-white font-semibold text-base hover:scale-105 focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black"
                    >
                      Confirm & Book Session
                    </Button>
                  </div>
                </form>
              </motion.div>
            )}

            {step === 5 && ( // Final Confirmation / Thank You Step
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center space-y-4 md:space-y-6"
              >
                <motion.div 
                    initial={{ scale: 0.5, opacity: 0}} 
                    animate={{ scale: 1, opacity: 1}} 
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1}}
                    className="mx-auto w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-green-500/20 border-2 border-green-500"
                >
                    <Check className="w-8 h-8 md:w-10 md:h-10 text-green-400" />
                </motion.div>
                <h2 className="text-2xl md:text-4xl font-bold gradient-text">
                  Your Diagnostic Session Is Confirmed!
                </h2>
                <p className="text-md md:text-lg text-gray-300 max-w-xl mx-auto">
                  You_ve taken the first step most businesses never will. Now watch it pay off. We_ll be in touch shortly to confirm the details for your session on 
                  <span className="text-amber-400 font-semibold">
                     {formData.selectedDate?.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })} at {formData.selectedTime}
                  </span>.
                </p>
                
                <p className="text-gray-400 text-sm md:text-base">
                    A KEMETIQ strategist will reach out via email ({formData.email}) within 24 hours with a calendar invite and next steps.
                </p>

                <Button
                  onClick={handleSubmit} // This submit will trigger navigation to hero section
                  className="gradient-button text-white font-semibold text-base hover:scale-105 focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black px-8 py-3 md:px-10 md:py-4 mt-4 md:mt-6"
                >
                  Return to Homepage
                </Button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


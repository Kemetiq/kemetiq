"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import clsx from "clsx";

const steps = [
  "Let’s Start Here",
  "Where AI Could Help",
  "About Your Business",
  "Let’s Book Your Spot",
];

export default function AIForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [calendarLoaded, setCalendarLoaded] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const shouldRestart = localStorage.getItem("startFromTop");
    if (shouldRestart) {
      setStep(0);
      localStorage.removeItem("startFromTop");
    }
  }, []);

  const onSubmit = async (data: any) => {
    try {
      await fetch("https://api.sheetbest.com/sheets/7438a711-f1d3-4f78-84bb-e566a1823190", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
      reset();
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  const next = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prev = () => setStep((prev) => Math.max(prev - 1, 0));

  return (
    <section id="ai-form" className="snap-start min-h-screen px-4 py-20 bg-black text-white">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="flex justify-between text-sm text-gray-500 font-semibold uppercase tracking-widest">
          {steps.map((label, idx) => (
            <span key={label} className={clsx({ "text-white": idx === step })}>
              {label}
            </span>
          ))}
        </div>
        <div
          className="h-1 w-full bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 rounded-full"
          style={{ width: `${(step / (steps.length - 1)) * 100}%` }}
        />

        {submitted ? (
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold gradient-text">Your Session Is Locked In—You’re Already Ahead of the Pack!</h2>
            <p className="text-gray-300 text-lg">Here’s What’s Coming Your Way:</p>
            <ul className="text-left text-gray-400 space-y-4 max-w-xl mx-auto text-base">
              <li><strong>Your Strategy Session:</strong> A KEMETIQ expert is prepping for your exclusive session. This isn’t a pitch—it’s a deep dive to uncover where automation can 10x your efficiency and profits.</li>
              <li><strong>Your Winning Blueprint:</strong> Post-session, you’ll get a custom roadmap pinpointing your biggest automation wins, with clear ROI projections to fast-track your growth.</li>
              <li><strong>Your Unfair Advantage:</strong> While competitors drown in manual chaos, you’re on track to automate and dominate.</li>
            </ul>
            <label className="block mt-8 text-left max-w-xl mx-auto">
              <span className="text-sm mb-1 block">Want to give us more context?</span>
              <textarea
                placeholder="Friction points, goals, blockers..."
                className="w-full p-3 rounded bg-gray-900 text-white placeholder-gray-500"
              />
            </label>
            <button
              className="mt-6 gradient-button px-6 py-2 rounded font-semibold"
              onClick={() => window.location.href = "/"}
            >
              ← Return to Homepage
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {step === 0 && (
              <div className="space-y-4">
                <p className="italic text-gray-400">“We lose hours to admin, but we’re not ‘techy’ enough for AI.” Truth is, AI works best for non-tech teams buried in manual work.</p>
                <label className="block">
                  <span className="block font-semibold mb-1">What’s your biggest operational bottleneck? *</span>
                  <input
                    {...register("bottleneck", { required: true })}
                    className="w-full p-3 rounded bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
                    placeholder="e.g. Manual lead follow-up, scheduling chaos..."
                  />
                  {errors.bottleneck && <p className="text-red-400 text-sm">This field is required.</p>}
                </label>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-4">
                <p className="italic text-gray-400">“Most teams juggle 5–7 tools but still chase tasks manually.” That’s your system screaming for automation.</p>
                <label className="block">
                  <span className="block font-semibold mb-1">Where do you think AI could simplify or automate your work? *</span>
                  <input
                    {...register("targetArea", { required: true })}
                    className="w-full p-3 rounded bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
                    placeholder="e.g. Client onboarding, reporting, quoting"
                  />
                  {errors.targetArea && <p className="text-red-400 text-sm">This field is required.</p>}
                </label>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <p className="italic text-gray-400">“AI only works for big tech?” We’ve helped brokers, logistics firms, and even farms unlock serious time and revenue.</p>
                <label className="block">
                  <span className="block font-semibold mb-1">What does your business do? *</span>
                  <textarea
                    {...register("business", { required: true })}
                    rows={2}
                    className="w-full p-3 rounded bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
                    placeholder="e.g. I run a commercial real estate advisory firm"
                  />
                  {errors.business && <p className="text-red-400 text-sm">This field is required.</p>}
                </label>

                <label className="block">
                  <span className="block font-semibold mb-1">Are you currently using any automation? *</span>
                  <select
                    {...register("automationUse", { required: true })}
                    className="w-full p-3 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                  >
                    <option value="">Select one</option>
                    <option value="none">Not at all</option>
                    <option value="basic">Basic tools (e.g. Calendly, Zapier)</option>
                    <option value="messy">Yes, but it’s messy</option>
                    <option value="scaling">We’re actively scaling it</option>
                  </select>
                  {errors.automationUse && <p className="text-red-400 text-sm">This field is required.</p>}
                </label>

                <label className="block">
                  <span className="block font-semibold mb-1">What would make this session a win for you? *</span>
                  <textarea
                    {...register("sessionGoal", { required: true })}
                    rows={2}
                    className="w-full p-3 rounded bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
                    placeholder="e.g. A clear roadmap for automating sales or operations"
                  />
                  {errors.sessionGoal && <p className="text-red-400 text-sm">This field is required.</p>}
                </label>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Let’s Book Your Spot</h3>
                <p className="italic text-gray-400">“AI makes sense—but where do I even start?” This session gives you clarity, no pressure.</p>

                <input {...register("name", { required: true })} className="w-full p-3 rounded bg-gray-900 text-white" placeholder="Your Name" />
                <input {...register("email", { required: true })} type="email" className="w-full p-3 rounded bg-gray-900 text-white" placeholder="Your Email" />
                <input {...register("company", { required: true })} className="w-full p-3 rounded bg-gray-900 text-white" placeholder="Company Name" />
                <input {...register("website")} className="w-full p-3 rounded bg-gray-900 text-white" placeholder="Your Website" />
                <input {...register("phone")} className="w-full p-3 rounded bg-gray-900 text-white" placeholder="Phone or WhatsApp (optional)" />

                <div className="pt-6 relative">
                  {!calendarLoaded && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/80 text-white text-sm">
                      Loading calendar...
                    </div>
                  )}
                  <iframe
                    src="https://calendly.com/kemetiq1/30min?primary_color=ffb347&text_color=ffffff&background_color=0d0d0d&hide_event_type_details=1&hide_gdpr_banner=1"
                    width="100%"
                    height="700"
                    className="border-none bg-transparent"
                    style={{ backgroundColor: "#0d0d0d" }}
                    title="Calendly Booking"
                    onLoad={() => setCalendarLoaded(true)}
                  />
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6">
              {step > 0 && (
                <button type="button" onClick={prev} className="w-full sm:w-auto px-4 py-2 border border-gray-500 rounded text-sm text-gray-300 hover:text-white">
                  ← Back
                </button>
              )}
              {step < steps.length - 1 ? (
                <button type="button" onClick={next} className="w-full sm:w-auto gradient-button px-6 py-2 rounded font-semibold">
                  Next →
                </button>
              ) : (
                <button type="submit" className="w-full sm:w-auto gradient-button px-6 py-2 rounded font-semibold">
                  Book My Strategy Call →
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

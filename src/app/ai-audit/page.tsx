"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import {
  CheckCircle,
  ArrowRight,
  Clock,
  FileText,
  Target,
  Calendar,
  Users,
  Zap,
  Star,
} from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Custom Workflow Audit",
    description:
      "We analyze your current workflows and tech stack to find the highest-impact automation opportunities.",
  },
  {
    icon: FileText,
    title: "Prioritized Roadmap",
    description:
      "Walk away with a ranked list of automations ordered by ROI — ready to act on.",
  },
  {
    icon: Zap,
    title: "ROI Projections",
    description:
      "Get estimated time and cost savings for your top 3 automation opportunities.",
  },
  {
    icon: Calendar,
    title: "Implementation Timeline",
    description:
      "Know exactly what it takes to go from idea to live automation — with realistic timelines.",
  },
];

const testimonials = [
  {
    quote:
      "The audit alone saved us weeks of internal deliberation. Eric mapped out exactly where to start and why — we had our first automation live in 3 weeks.",
    author: "VP of Operations",
    company: "150-person SaaS Company",
  },
  {
    quote:
      "I came in skeptical, but the roadmap was incredibly specific to our business. No generic recommendations — every suggestion was tied to our actual workflows.",
    author: "CEO",
    company: "40-person Professional Services Firm",
  },
  {
    quote:
      "Best 30 minutes I've spent this quarter. We implemented the first automation ourselves using the roadmap, and it's saving us 15 hours a week.",
    author: "Head of Growth",
    company: "80-person E-commerce Brand",
  },
];

export default function AIAuditPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-900 to-sky-950 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left — Value prop */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-500/10 border border-sky-500/20 rounded-full text-sky-300 text-sm font-medium mb-6">
                <Clock className="w-4 h-4" />
                30 Minutes — 100% Free
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Get Your Free{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
                  AI Automation Roadmap
                </span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                In 30 minutes, we&apos;ll map out exactly where AI automation
                can save your business time, money, and headaches — with a
                prioritized action plan you can use whether you work with us or
                not.
              </p>

              {/* What you'll get */}
              <div className="space-y-4 mb-8">
                {[
                  "A custom audit of your current workflows and tech stack",
                  "A prioritized list of automation opportunities ranked by ROI",
                  "Estimated time and cost savings for your top 3 opportunities",
                  "A recommended starting point and implementation timeline",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-sky-400 mt-0.5 shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Booking Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-black/20">
              {!submitted ? (
                <>
                  <h2 className="text-xl font-bold text-gray-900 mb-1">
                    Book Your AI Audit
                  </h2>
                  <p className="text-sm text-gray-500 mb-6">
                    Pick a time that works for you. No commitment, no pitch.
                  </p>

                  {/* Placeholder form — swap for Calendly embed */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Acme Inc."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company Size
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select company size
                        </option>
                        <option value="1-10">1–10 employees</option>
                        <option value="11-50">11–50 employees</option>
                        <option value="51-100">51–100 employees</option>
                        <option value="101-250">101–250 employees</option>
                        <option value="251-500">251–500 employees</option>
                        <option value="500+">500+ employees</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        What&apos;s your biggest operational bottleneck?{" "}
                        <span className="text-gray-400">(optional)</span>
                      </label>
                      <textarea
                        rows={3}
                        placeholder="e.g., We spend 10+ hours/week manually entering data between our CRM and invoicing system..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-sky-500/25 text-base flex items-center justify-center gap-2"
                    >
                      Book My Free AI Audit
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    <p className="text-xs text-gray-400 text-center">
                      No credit card required. No commitment. Seriously.
                    </p>
                  </form>

                  {/* Calendly placeholder note */}
                  <div className="mt-6 p-4 bg-sky-50 rounded-xl border border-sky-100">
                    <p className="text-xs text-sky-600 text-center">
                      <strong>Note:</strong> This form is a placeholder. Replace
                      with your Calendly embed for live scheduling.
                    </p>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    You&apos;re All Set!
                  </h2>
                  <p className="text-gray-500 mb-4">
                    Check your email for a calendar invite. Looking forward to
                    chatting about your business.
                  </p>
                  <p className="text-sm text-gray-400">— Eric, Flowbotics</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What You&apos;ll Walk Away With
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              This isn&apos;t a sales call. It&apos;s a working session designed to give
              you a clear automation roadmap.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center"
              >
                <div className="w-12 h-12 bg-sky-50 text-sky-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                This Is For You If...
              </h3>
              <ul className="space-y-3">
                {[
                  "Your business has 10–500 employees",
                  "Your team spends significant time on repetitive tasks",
                  "You want to scale without proportionally scaling headcount",
                  "You've been meaning to 'look into automation' but haven't started",
                  "You need a clear, unbiased assessment — not a sales pitch",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-500" />
                What to Expect
              </h3>
              <ul className="space-y-3">
                {[
                  "A 30-minute video call with Eric (the founder)",
                  "An honest, consultative conversation — zero pressure",
                  "Questions about your day-to-day operations and pain points",
                  "Real-time identification of automation opportunities",
                  "A follow-up roadmap document within 24 hours",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <CheckCircle className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What People Say After the Audit
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-600 leading-relaxed mb-4 text-sm">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-gray-500">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final push CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still on the Fence?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            The audit is free, takes 30 minutes, and you&apos;ll walk away with
            a roadmap you can use with or without us. The only thing you&apos;re
            risking is finding out how much time and money you&apos;ve been
            leaving on the table.
          </p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-xl transition-all shadow-lg shadow-sky-500/25 text-base"
          >
            Book Your Free AI Audit
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  );
}

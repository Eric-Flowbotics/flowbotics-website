import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import {
  ArrowRight,
  Search,
  Wrench,
  Rocket,
  TrendingUp,
  CheckCircle,
  Clock,
  Users,
  FileText,
  MessageSquare,
  ChevronDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "From free AI Audit to live automation in weeks. Learn our proven 4-phase process for designing, building, and scaling AI automations for your business.",
};

const phases = [
  {
    icon: Search,
    number: "01",
    title: "AI Audit",
    subtitle: "Free — 30 minutes",
    color: "sky",
    description:
      "A consultative discovery session where we map your workflows, identify the highest-ROI automation opportunities, and build a prioritized roadmap.",
    whatHappens: [
      "30–45 minute video call with Eric",
      "Deep dive into your current workflows and tech stack",
      "Identify bottlenecks, manual processes, and error-prone handoffs",
      "Map automation opportunities and rank them by impact",
    ],
    whatYouGet: [
      "A prioritized automation roadmap document",
      "Estimated ROI for your top 3 opportunities",
      "A recommended starting point and timeline",
      "Clarity on what's possible — whether you work with us or not",
    ],
    whatItsNot: [
      "Not a sales pitch or generic demo",
      "Not a commitment of any kind",
      "Not a one-size-fits-all recommendation",
    ],
  },
  {
    icon: Wrench,
    number: "02",
    title: "Design & Build",
    subtitle: "Typically 2–6 weeks",
    color: "violet",
    description:
      "We architect the automation solution, build it with rigorous testing, and prepare for a seamless launch. Your involvement is light — mainly approvals and access provisioning.",
    whatHappens: [
      "Solution architecture and technical design",
      "Build automations with your existing tools and systems",
      "Rigorous testing across edge cases and failure scenarios",
      "Weekly progress updates and demos",
    ],
    whatYouGet: [
      "A fully built, tested automation ready to deploy",
      "Documentation of all automation logic and flows",
      "Integration with your existing tech stack",
      "A launch plan with rollback procedures",
    ],
    whatItsNot: [
      "Not a disruption to your daily operations",
      "Not a rip-and-replace of your existing tools",
      "Not a black box — everything is documented",
    ],
  },
  {
    icon: Rocket,
    number: "03",
    title: "Launch & Optimize",
    subtitle: "Week 1 post-launch",
    color: "emerald",
    description:
      "Go live with confidence. We monitor performance, catch edge cases, and optimize based on real-world usage data. Your team gets trained on the new workflow.",
    whatHappens: [
      "Controlled rollout with monitoring dashboards",
      "Real-time error tracking and resolution",
      "Performance optimization based on live data",
      "Team training and knowledge transfer",
    ],
    whatYouGet: [
      "A live, optimized automation handling real work",
      "Training materials and documentation for your team",
      "Performance baseline and metrics dashboard",
      "Confidence that it works at scale",
    ],
    whatItsNot: [
      "Not a launch-and-leave handoff",
      "Not a stressful transition period",
      "Not a mystery if something goes wrong",
    ],
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Scale",
    subtitle: "Ongoing partnership",
    color: "amber",
    description:
      "Once the first automation proves its value, we identify new opportunities across your business and build a roadmap for expanding automation across departments.",
    whatHappens: [
      "Regular reviews of automation performance and new opportunities",
      "Proactive identification of adjacent processes to automate",
      "Scaling automations across departments and teams",
      "Continuous improvement based on evolving business needs",
    ],
    whatYouGet: [
      "An ever-expanding automation ecosystem",
      "Compounding ROI as more processes get automated",
      "A strategic partner invested in your operational excellence",
      "Priority support and maintenance",
    ],
    whatItsNot: [
      "Not a one-off engagement — it's a partnership",
      "Not locked into long-term contracts",
      "Not dependent on Flowbotics forever — you own everything",
    ],
  },
];

const faqs = [
  {
    question: "How much does it cost?",
    answer:
      "Every engagement is scoped after the AI Audit based on complexity, number of integrations, and timeline. Most clients start with a single automation ($3K–$15K range) and expand from there. The AI Audit is always free.",
  },
  {
    question: "What tools and platforms do you work with?",
    answer:
      "We're platform-agnostic and work with whatever your business already uses. Common integrations include Slack, Gmail, Salesforce, HubSpot, QuickBooks, Notion, Airtable, Google Workspace, Zapier, Make, and dozens more. If it has an API, we can connect it.",
  },
  {
    question: "How long until I see ROI?",
    answer:
      "Most automations pay for themselves within 30–60 days of launch. During the AI Audit, we'll give you specific ROI projections based on your actual workflows and labor costs.",
  },
  {
    question: "Do you replace our existing tools?",
    answer:
      "No — we connect and enhance what you already use. Our automations sit on top of your existing tech stack, making your current tools work harder and smarter together.",
  },
  {
    question: "What if the automation doesn't work as expected?",
    answer:
      "Every automation we build includes monitoring, error handling, and alerting. If something goes wrong, we know before you do and fix it fast. We also build in graceful fallbacks so your business keeps running even during edge cases.",
  },
  {
    question: "Do I need a technical team to maintain automations?",
    answer:
      "No. We build automations that are self-maintaining with monitoring and alerting built in. For ongoing support, we offer maintenance plans. And everything is documented so your team understands how it works.",
  },
  {
    question: "How is this different from hiring a developer?",
    answer:
      "A developer builds what you spec. We identify what to build, design the optimal solution, build it, and ensure it delivers ROI. We bring automation-specific expertise across hundreds of implementations — plus ongoing optimization, not just a code handoff.",
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-900 to-sky-950 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-500/10 border border-sky-500/20 rounded-full text-sky-300 text-sm font-medium mb-6">
              Our Process
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              From First Call to Live Automation —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
                Here&apos;s Exactly How It Works
              </span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              No surprises, no black boxes. We follow a proven 4-phase process
              that takes you from &quot;we need to automate something&quot; to
              &quot;we can&apos;t believe we did this manually.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Process Phases */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {phases.map((phase, index) => (
              <div key={phase.number} className="relative">
                {/* Connector line */}
                {index < phases.length - 1 && (
                  <div className="hidden sm:block absolute left-6 top-20 bottom-0 w-0.5 bg-gradient-to-b from-gray-200 to-transparent -mb-16" />
                )}

                <div className="flex items-start gap-6">
                  {/* Number circle */}
                  <div className="shrink-0 w-12 h-12 bg-sky-50 text-sky-600 rounded-full flex items-center justify-center font-bold text-sm border-2 border-sky-100">
                    {phase.number}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-3 mb-2">
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        {phase.title}
                      </h2>
                      <span className="text-sm font-medium text-sky-500 bg-sky-50 px-3 py-1 rounded-full">
                        {phase.subtitle}
                      </span>
                    </div>
                    <p className="text-gray-500 leading-relaxed mb-8">
                      {phase.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="bg-gray-50 rounded-2xl p-6">
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                          What Happens
                        </h3>
                        <ul className="space-y-3">
                          {phase.whatHappens.map((item) => (
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
                      <div className="bg-gray-50 rounded-2xl p-6">
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                          What You Get
                        </h3>
                        <ul className="space-y-3">
                          {phase.whatYouGet.map((item) => (
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
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-500">
              Everything you need to know before getting started.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                  <span className="text-base font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-5 text-gray-500 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Start with the AI Audit — It's Free"
        subtext="30 minutes. No commitment. A custom automation roadmap you can use whether you work with us or not."
      />
    </>
  );
}

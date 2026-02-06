import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import {
  ArrowRight,
  Zap,
  CheckCircle,
  Clock,
  AlertTriangle,
  DollarSign,
  GitBranch,
  Mail,
  Bell,
  FileCheck,
  RefreshCw,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Workflow Automation",
  description:
    "Automate multi-step business processes across tools — approvals, notifications, data routing, and more. Stop wasting time on work that should run itself.",
};

const automations = [
  {
    title: "Multi-Step Approval Workflows",
    before:
      "Manager gets an email, manually reviews a doc, sends approval via Slack, then someone copies data into the next system.",
    after:
      "Request triggers automatically, routes to the right approver based on rules, collects sign-off, and pushes data to the next step — all without human intervention.",
    tools: ["Slack", "Google Workspace", "Custom APIs"],
    icon: FileCheck,
  },
  {
    title: "Smart Notification Routing",
    before:
      "Important alerts get buried in noisy channels. Critical issues wait hours because the right person wasn't notified.",
    after:
      "AI classifies incoming alerts by priority, routes to the right person via their preferred channel, and escalates automatically if not acknowledged.",
    tools: ["Slack", "PagerDuty", "Email", "AI Classification"],
    icon: Bell,
  },
  {
    title: "Cross-System Data Sync",
    before:
      "Someone manually exports CSV from System A, reformats it, and imports into System B every morning. Errors happen weekly.",
    after:
      "Real-time bidirectional sync between systems with data validation, transformation rules, and automatic error handling.",
    tools: ["APIs", "Webhooks", "Database Connectors"],
    icon: RefreshCw,
  },
  {
    title: "Client Onboarding Automation",
    before:
      "New client signup triggers a checklist of 15 manual steps across 5 different tools. Things get missed. Clients wait.",
    after:
      "Signup triggers an automated onboarding flow: accounts provisioned, welcome emails sent, tasks assigned, and progress tracked — all hands-free.",
    tools: ["CRM", "Email", "Project Management", "Billing"],
    icon: GitBranch,
  },
  {
    title: "Report Generation & Distribution",
    before:
      "Every Monday, someone spends 2 hours pulling data from 4 systems, building a report in Sheets, and emailing it to stakeholders.",
    after:
      "Reports generate automatically on schedule, pulling live data from all sources, formatting perfectly, and delivering to the right people.",
    tools: ["Google Sheets", "APIs", "Email", "AI Summarization"],
    icon: BarChart3,
  },
];

const results = [
  {
    metric: "20–40 hrs/week",
    label: "Average time saved per automation",
    icon: Clock,
  },
  {
    metric: "95%+",
    label: "Reduction in manual errors",
    icon: AlertTriangle,
  },
  {
    metric: "< 30 days",
    label: "Typical payback period",
    icon: DollarSign,
  },
];

export default function WorkflowAutomationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-900 to-sky-950 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-500/10 border border-sky-500/20 rounded-full text-sky-300 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Workflow Automation That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
                Actually Works
              </span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Your business runs on dozens of multi-step processes that span
              tools, teams, and systems. Most of them don&apos;t need a human at
              every step. We build the automations that connect them all — so
              work flows instead of stalling.
            </p>
            <Link
              href="/ai-audit"
              className="inline-flex items-center px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-xl transition-all shadow-lg shadow-sky-500/25 text-base"
            >
              See If This Fits — Book an Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            The Problem with Manual Workflows
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>
              Every growing business has them: processes that started as simple
              tasks but evolved into complex, multi-step workflows spanning
              multiple tools and people. Approvals that sit in someone&apos;s
              inbox. Data that gets manually copied between systems. Notifications
              that don&apos;t reach the right person in time.
            </p>
            <p>
              These workflows aren&apos;t just slow — they&apos;re fragile. One
              missed step, one sick day, one copy-paste error, and the whole
              process breaks down. And because they depend on specific people
              knowing the specific steps, they become bottlenecks that prevent
              your business from scaling.
            </p>
            <p className="text-gray-900 font-medium">
              Workflow automation fixes this by turning human-dependent processes
              into reliable, self-running systems.
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {results.map((result) => (
              <div
                key={result.label}
                className="bg-white rounded-2xl p-6 border border-gray-100 text-center"
              >
                <div className="w-12 h-12 bg-sky-50 text-sky-500 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <result.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {result.metric}
                </div>
                <div className="text-sm text-gray-500">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Automations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Example Automations
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Here&apos;s what workflow automation looks like in practice. Each
              of these was built for a real business.
            </p>
          </div>
          <div className="space-y-8">
            {automations.map((automation) => (
              <div
                key={automation.title}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 bg-sky-50 text-sky-500 rounded-lg flex items-center justify-center shrink-0">
                      <automation.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {automation.title}
                    </h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-red-50 rounded-xl p-5 border border-red-100">
                      <div className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-2">
                        Before (Manual)
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {automation.before}
                      </p>
                    </div>
                    <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100">
                      <div className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-2">
                        After (Automated)
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {automation.after}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {automation.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-sky-500 to-cyan-500 rounded-3xl p-8 sm:p-12 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              Case Study
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              A 200-person logistics company automated their entire dispatch
              workflow
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 mb-6">
              <div>
                <div className="text-3xl font-bold">85%</div>
                <div className="text-sm opacity-80">
                  Reduction in dispatch time
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold">$220K</div>
                <div className="text-sm opacity-80">Annual savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold">2 wks</div>
                <div className="text-sm opacity-80">From audit to launch</div>
              </div>
            </div>
            <p className="opacity-90 leading-relaxed mb-6">
              What used to take a 5-person team coordinating across email,
              spreadsheets, and phone calls now runs automatically — with human
              oversight only for exceptions.
            </p>
            <Link
              href="/ai-audit"
              className="inline-flex items-center px-6 py-3 bg-white text-sky-600 font-semibold rounded-xl transition-colors hover:bg-sky-50"
            >
              Want Results Like These?{" "}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="See If Workflow Automation Fits Your Business"
        subtext="Book a free AI Audit and we'll identify your highest-ROI automation opportunities in 30 minutes."
      />
    </>
  );
}

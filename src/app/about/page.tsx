import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import {
  ArrowRight,
  Lightbulb,
  Shield,
  Repeat,
  Heart,
  Linkedin,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Eric and the story behind Flowbotics — an AI automation consultancy built on the belief that businesses should grow through smarter systems, not just more people.",
};

const values = [
  {
    icon: Repeat,
    title: "Automate the Repetitive, Amplify the Human",
    description:
      "We believe AI should handle the tasks that drain your team's energy so they can focus on the creative, strategic, high-value work that actually moves the needle.",
  },
  {
    icon: Lightbulb,
    title: "Build for Scale from Day One",
    description:
      "Every automation we build is designed to grow with your business. No band-aids, no shortcuts — just robust systems that hold up as you scale.",
  },
  {
    icon: Shield,
    title: "Transparency Over Tactics",
    description:
      "We'll tell you exactly what we're building, why it's the right approach, and what it costs. No hidden fees, no unnecessary complexity, no lock-in.",
  },
  {
    icon: Heart,
    title: "Partnership, Not Projects",
    description:
      "We're invested in your long-term operational success, not just closing an engagement. When you win, we win.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-900 to-sky-950 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-500/10 border border-sky-500/20 rounded-full text-sky-300 text-sm font-medium mb-6">
              About Flowbotics
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              We Help Businesses{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
                Work Smarter
              </span>
              , Not Just Harder
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Flowbotics exists because too many growing businesses are held back
              by manual processes they don&apos;t have time to fix. We change
              that.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sky-50 rounded-3xl p-8 sm:p-12 border border-sky-100">
            <h2 className="text-sm font-semibold text-sky-600 uppercase tracking-wider mb-4">
              Our Mission
            </h2>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">
              To make AI automation accessible to every growing business — so
              teams can spend their time on work that matters, not work that a
              machine should be doing.
            </p>
          </div>
        </div>
      </section>

      {/* Eric's Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Photo placeholder */}
            <div className="md:col-span-2">
              <div className="aspect-[4/5] bg-gradient-to-br from-sky-100 to-cyan-50 rounded-3xl flex items-center justify-center border border-sky-100">
                <div className="text-center">
                  <div className="w-24 h-24 bg-sky-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-sky-600">E</span>
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    Eric
                  </div>
                  <div className="text-sm text-gray-500">
                    Founder, Flowbotics
                  </div>
                  <div className="flex items-center justify-center gap-3 mt-4">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-gray-400 hover:text-sky-500 transition-colors border border-gray-100"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="mailto:eric@flowbotics.xyz"
                      className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-gray-400 hover:text-sky-500 transition-colors border border-gray-100"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Story */}
            <div className="md:col-span-3">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Story Behind Flowbotics
              </h2>
              <div className="prose prose-gray max-w-none space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I&apos;ve spent years working with growing businesses — and the
                  same pattern kept showing up. Smart teams, ambitious goals, but
                  operations held together with spreadsheets, manual copy-paste,
                  and a prayer that nothing falls through the cracks.
                </p>
                <p>
                  The irony? The technology to automate most of this work
                  already exists. But most businesses don&apos;t have the time or
                  expertise to figure out which tools to use, how to connect
                  them, or where to start. They know automation is the answer but
                  the path from &quot;we should do this&quot; to &quot;it&apos;s
                  live and working&quot; feels impossibly complex.
                </p>
                <p>
                  That&apos;s why I started Flowbotics. I wanted to be the
                  bridge — to take the full weight of AI automation off business
                  leaders&apos; plates. Not just advise on what to do, but
                  actually design it, build it, launch it, and make sure it
                  keeps working.
                </p>
                <p>
                  Today, Flowbotics has built over 150 automations for businesses
                  ranging from 10-person startups to 400-person mid-market
                  companies. Every engagement starts the same way: a
                  conversation about where you are, where you want to be, and
                  what&apos;s in the way. No pitch. Just clarity.
                </p>
                <p className="text-gray-900 font-medium">
                  If your business is growing but your operations aren&apos;t
                  keeping up, I&apos;d love to chat.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/ai-audit"
                  className="inline-flex items-center px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl transition-colors shadow-sm"
                >
                  Book a Call with Eric{" "}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What We Believe
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              These principles guide every automation we build and every
              relationship we form.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 bg-white rounded-2xl border border-gray-100 card-hover"
              >
                <div className="w-12 h-12 bg-sky-50 text-sky-500 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Let's Talk About Your Business"
        subtext="Schedule a free AI Audit and let's explore what automation can do for your team."
      />
    </>
  );
}

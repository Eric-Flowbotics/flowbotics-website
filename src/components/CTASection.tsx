import Link from "next/link";

interface CTASectionProps {
  headline?: string;
  subtext?: string;
  buttonText?: string;
  buttonHref?: string;
  dark?: boolean;
}

export default function CTASection({
  headline = "Ready to See What AI Automation Can Do for Your Business?",
  subtext = "Our free AI Audit gives you a custom roadmap — no commitment, no pitch, just clarity.",
  buttonText = "Book Your Free AI Audit",
  buttonHref = "/ai-audit",
  dark = true,
}: CTASectionProps) {
  return (
    <section
      className={`py-20 ${
        dark ? "bg-gray-900 text-white" : "bg-sky-50 text-gray-900"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{headline}</h2>
        <p
          className={`text-lg mb-8 ${
            dark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {subtext}
        </p>
        <Link
          href={buttonHref}
          className={`inline-flex items-center px-8 py-4 text-base font-semibold rounded-xl transition-all shadow-lg ${
            dark
              ? "bg-sky-500 hover:bg-sky-400 text-white shadow-sky-500/25"
              : "bg-gray-900 hover:bg-gray-800 text-white shadow-gray-900/25"
          }`}
        >
          {buttonText}
          <svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}

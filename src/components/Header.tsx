"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const solutions = [
  { name: "Workflow Automation", href: "/solutions/workflow-automation" },
  { name: "AI Assistants & Chatbots", href: "/solutions/workflow-automation" },
  { name: "Data Pipeline Automation", href: "/solutions/workflow-automation" },
  { name: "CRM & Sales Automation", href: "/solutions/workflow-automation" },
  { name: "Custom Integrations", href: "/solutions/workflow-automation" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              Flow<span className="text-sky-500">botics</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Solutions <ChevronDown className="w-4 h-4" />
              </button>
              {solutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2">
                  {solutions.map((s) => (
                    <Link
                      key={s.name}
                      href={s.href}
                      className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/how-we-work"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              How We Work
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </Link>
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/ai-audit"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm shadow-sky-500/25"
            >
              Book AI Audit
            </Link>
            <button
              className="lg:hidden p-2 text-gray-600"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-1">
            <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Solutions
            </p>
            {solutions.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50"
                onClick={() => setMobileOpen(false)}
              >
                {s.name}
              </Link>
            ))}
            <div className="border-t border-gray-100 my-2" />
            <Link
              href="/how-we-work"
              className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-50"
              onClick={() => setMobileOpen(false)}
            >
              How We Work
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-50"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <div className="pt-2">
              <Link
                href="/ai-audit"
                className="block w-full text-center px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Book AI Audit
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Flowbotics — AI Automation for Growing Businesses",
    template: "%s | Flowbotics",
  },
  description:
    "End-to-end AI automation consulting for SMB and mid-market businesses. We design, build, and maintain AI-powered automations that save time, cut costs, and scale your operations.",
  keywords: [
    "AI automation",
    "business automation",
    "workflow automation",
    "AI consulting",
    "process automation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="pt-16 lg:pt-18">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

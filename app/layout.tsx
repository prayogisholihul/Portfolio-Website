import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import ToTop from "@/components/ToTop";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Prayogi Sholihul Insan · Android & Flutter Developer",
  description:
    "Android Developer with 4 years of experience building and maintaining secure, production-grade mobile applications, including native banking features for a major national bank.",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="bg-ink font-sans text-body antialiased selection:bg-accent selection:text-white">
        <div
          className="pointer-events-none fixed inset-0 -z-10"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(circle at 50% -10%, rgb(61 220 132 / 0.08), transparent 55%), radial-gradient(circle at 85% 30%, rgb(124 108 255 / 0.06), transparent 40%)",
          }}
        />
        <div
          className="orb left-[-140px] top-[8%] h-96 w-96 bg-accent/[0.08]"
          aria-hidden="true"
        />
        <div
          className="orb right-[-140px] top-[60%] h-[28rem] w-[28rem] bg-[#7c6cff]/[0.07]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none fixed inset-0 z-40 opacity-[0.05]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
          }}
        />
        <ScrollProgress />
        <ToTop />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

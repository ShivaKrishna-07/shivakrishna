import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "next-themes";
import CursorTrailCanvas from "@/components/cursor-trail-canvas";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import { routes } from "@/data/navigationRoutes";
import { classNames } from "@/utility/classNames";
import { Analytics } from "@vercel/analytics/react";

// Load custom local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Load Google Fonts
const montserrat = Montserrat({
  subsets: ["latin"],
});

// Metadata for SEO
export const metadata: Metadata = {
  title: "My Awesome App",
  description: "A great application powered by Next.js",
};

// RootLayout function
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.className} antialiased`}
      >
        <ThemeProvider attribute="class">
          <AnimatePresence mode="wait" initial={false}>
            {/* Cursor Trail Effect */}
            <CursorTrailCanvas className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />

            {/* Page Content */}
            <div className="min-h-screen">
              {/* Navbar */}
              <Navbar routes={routes} />

              {/* Main Content */}
              <main>{children}</main>
            </div>
          </AnimatePresence>
        </ThemeProvider>

        {/* Analytics Integration */}
        <Analytics />
      </body>
    </html>
  );
}

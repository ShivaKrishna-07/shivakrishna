import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";

import { ThemeProvider } from "next-themes";
import CursorTrailCanvas from "@/components/cursor-trail-canvas";
import { AnimatePresence } from "framer-motion";

import { routes } from "@/data/navigationRoutes";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { Analytics } from "@vercel/analytics/react";


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


const montserrat = Montserrat({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Shiva Krishna",
  description: "Personel Portfolio showcases my skills, Projects and my contact information",
  icons: {
    icon: '/favicon.png',
  },
};


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
            
            <CursorTrailCanvas className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />

            <div className="min-h-screen">
              <Navbar routes={routes} />
              <main>{children}</main>
              <Footer/>
            </div>
          </AnimatePresence>
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  );
}

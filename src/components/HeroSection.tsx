"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FadeUp from "@/animation/fade-up";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="pointer-events-none flex max-h-[1000px] min-h-[calc(100vh-200px)] items-center px-6 sm:px-14 md:h-[calc(100vh-200px)] md:min-h-max md:px-20"
    >
      <div className="w-full">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence>
            <FadeUp key="title-main" duration={0.6}>
              <h1 className="bg-accent text-center bg-clip-text py-2 text-4xl font-bold text-transparent sm:text-6xl">
                HEY, I'M SHIVA KRISHNA
              </h1>
            </FadeUp>
            <FadeUp key="description" duration={0.6} delay={0.2}>
              <div className="flex items-center justify-center">
                <div className="mt-4 text-center md:max-w-2xl text-base text-zinc-900 dark:text-zinc-200 sm:text-base md:text-xl">
                  I am a software developer specialized in building
                  high-performance, user-focused web applications.
                </div>
              </div>
            </FadeUp>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}

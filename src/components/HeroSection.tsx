"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FadeUp from "@/animation/fade-up";
import { SiGeeksforgeeks, SiGithub, SiLeetcode, SiLinkedin, SiX } from "react-icons/si";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const socialLinks = [
    {
      icon: <SiGithub className="size-7" />,
      href: "https://github.com/ShivaKrishna-07",
      label: "GitHub"
    },
    {
      icon: <SiLinkedin className="size-7" />,
      href: "https://www.linkedin.com/in/shivaaa07/",
      label: "LinkedIn"
    },
    {
      icon: <SiX className="size-7" />,
      href: "https://x.com/shiva_123_",
      label: "X"
    },
    {
      icon: <SiLeetcode className="size-7" />,
      href: "https://leetcode.com/u/shiva__7/",
      label: "Leetcode"
    },
    {
      icon: <SiGeeksforgeeks className="size-7" />,
      href: "https://www.geeksforgeeks.org/user/shiva__07/",
      label: "GeeksForGeeks"
    }
  ];

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
            <FadeUp key="social-links" duration={0.6} delay={0.4}>
              <div className="pointer-events-auto mt-8 flex justify-center space-x-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-500  transition-colors"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </FadeUp>
            <FadeUp key="resume-button" duration={0.6} delay={0.6}>
              <div className="pointer-events-auto mt-8 flex justify-center">
                <a
                  href="https://drive.google.com/your-resume-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-500 hover:bg-teal-600 text-black  px-6 py-2 rounded-full font-bold transition-colors"
                >
                  Resume
                </a>
              </div>
            </FadeUp>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}

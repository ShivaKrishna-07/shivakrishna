"use client"
import Link from "next/link";

import { ArrowTopRight } from "@/components/icons";
import { PROJECTS_CARD } from "@/data/projects";
import ProjectCard from "./project-card";

export default function ProjectShowcase() {

  return (
    <section className="overflow-hidden px-6 py-2 sm:px-14 md:px-20">
      <div className="relative mx-auto max-w-7xl">
        <h2 className="text-xl font-semibold text-accent sm:text-3xl">
          My projects
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
          {PROJECTS_CARD.slice(0, 2).map((card, index) => (
            <ProjectCard key={index} {...card} />
          ))}
        </div>

        <Link
          href="/projects"
          className="group relative flex max-w-max items-center gap-4 text-base font-semibold my-8 sm:text-lg md:text-xl"
        >
          <div className="relative max-w-max">
            <span className="text-accent">See more projects</span>
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 origin-left rounded-lg bg-accent transition-[width] duration-300 group-hover:w-full"></span>
          </div>
          <div className="h-8 w-8">
            <ArrowTopRight className="rotate-45 text-accent transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1.1]" />
          </div>
        </Link>
      </div>
    </section>
  );
}

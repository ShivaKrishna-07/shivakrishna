"use client"

import HeroSection from "@/components/HeroSection";
import ProjectShowcase from "@/components/projects/project-showcase";
import SkillsShowcase from "@/components/skills/skills-showcase";
import { SKILLS_DATA } from "@/data/skills";


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <SkillsShowcase skills={SKILLS_DATA} />
      <ProjectShowcase/>
      
    </div>
  );
}

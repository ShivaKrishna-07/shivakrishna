import HeroSection from "@/components/HeroSection";
import SkillsShowcase from "@/components/skills/skills-showcase";
import { SKILLS_DATA } from "@/data/skills";


export default function Home() {
  return (
    <div>
      <HeroSection/>
      {/* <SkillsShowcase skills={SKILLS_DATA} /> */}
      
    </div>
  );
}

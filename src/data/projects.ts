import { type ProjectCardProps } from "@/components/projects/project-card";

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Threadwise",
    favicon: "/images/projects/logos/threadwise.svg",
    imageUrl: [
      "/images/projects/threadwise-inbox.jpg",
      "/images/projects/threadwise-search.jpg",
    ],
    description:
      "An AI-powered Gmail workspace that sorts messages, summarizes long threads, answers questions with cited sources, and helps draft thoughtful replies.",
    sourceCodeHref: "https://github.com/ShivaKrishna-07/Auto-Mail",
    liveWebsiteHref: "https://auto-mail-navy.vercel.app/",
  },
];

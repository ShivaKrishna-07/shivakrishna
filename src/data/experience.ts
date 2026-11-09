import { type EducationShowcaseListItemProps } from "@/components/education/education-showcase-list-item";

// Reverse chronological order: current roles first, followed by earlier roles.
export const EXPERIENCE: EducationShowcaseListItemProps[] = [
  {
    title: "Software Developer Intern",
    organisation: {
      name: "Zuper Tech Ltd",
      href: "https://zupertechltd.com",
    },
    date: "December 2025 - Present",
    location: "Remote",
    highlights: [
      "Implemented browser-based AWS S3 uploads for attendance photos, reducing daily bandwidth by 1 GB for 10,000+ active users.",
      "Compressed attendance photos to 100 KB, reducing daily storage by 9 GB in the HR management platform.",
      "Optimized MongoDB aggregation APIs from 15 seconds to 800 milliseconds and improved indexed pagination and server-side filtering.",
      "Built real-time monitoring for 300+ systems and automated log and screenshot cleanup, reducing storage usage by 30%.",
    ],
  },
  {
    title: "Freelancer",
    organisation: {
      name: "Independent",
      href: "",
    },
    date: "September 2025 - Present",
    location: "Remote",
    description:
      "Build AI-powered retrieval and question-answering tools with vector database integration, voice assistance, and document Q&A capabilities.",
  },
  {
    title: "Full Stack Developer Intern",
    organisation: {
      name: "Scroll Inc",
      href: "https://scrolling.in",
    },
    date: "September 2025 - November 2025",
    location: "Remote",
    highlights: [
      "Built a seller dashboard for products, inventory, pricing, and orders, supporting 50+ active sellers.",
      "Reduced initial page load time by 35% with lazy loading, memoization, and API batching.",
      "Designed REST APIs for products, authentication, and orders, reducing response times by 40%.",
    ],
  },
  {
    title: "React.js Developer Intern",
    organisation: {
      name: "The Virtual CTO",
      href: "https://thevirtualcto.in",
    },
    date: "April 2025 - August 2025",
    location: "Remote",
    highlights: [
      "Built and maintained a production-grade Next.js application using Redux Toolkit and Redux-Saga.",
      "Implemented AES-encrypted offline caching with IndexedDB, reducing network dependency by 40% while protecting cached data.",
      "Added secure refresh-token session management, PWA features, and user activity tracking, increasing mobile retention by 35%.",
    ],
  },
];

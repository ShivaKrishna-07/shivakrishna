import { type ProjectCardProps } from "@/components/projects/project-card";
import { siteMetadata } from "@/data/siteMetaData.mjs";


export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Genify.ai",
    favicon: "/images/projects/logos/logo.svg",
    imageUrl: [
      "/images/projects/genify.png",
      "/images/projects/genifyDashboard.png",
      "/images/projects/genifyAIGenerator.png",
      "/images/projects/genifyHistory.png",
      "/images/projects/genifyBilling.png",
    ],
    description:
      "An AI-driven content generation app crafted with Next.js, designed to streamline and inspire content creation. It offers a range of features to help users quickly produce quality digital content.",
    sourceCodeHref: "https://github.com/ShivaKrishna-07/genify.ai",
    liveWebsiteHref: "https://genify--ai.vercel.app/",
  },
  {
    name: "Ezine",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/ezine.png",
      "/images/projects/ezineHome.png",
      "/images/projects/ezineBlogPage.png",
    ],
    description:
      "A dynamic blog website built with Next.js and powered by Sanity Studio, offering seamless content management and a fast, responsive user experience. Perfect for easily creating, editing, and showcasing blog posts.",
    sourceCodeHref: "https://github.com/ShivaKrishna-07/ezine",
    liveWebsiteHref: "https://eziine.vercel.app/",
  },
  {
    name: "Spotter",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/spotterMobile.png",
      "/images/projects/spotterBrush.png",
      "/images/projects/spotterBottle.png",
    ],
    description:
      "Develop a web application for real-time object detection using TensorFlow.js, enabling users to identify objects directly within their browser",
    sourceCodeHref: "https://github.com/ShivaKrishna-07/spotter",
    liveWebsiteHref: "https://spotterr.vercel.app/",
  },
  {
    name: "Code Pen",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/codepen.png",
      "/images/projects/codepenRonaldo.png",
      "/images/projects/codepenWelcome.png",
    ],
    description:
      "Created a Sandbox environment where users can write, edit and run the HTML, CSS and JavaScript code in real time",
    sourceCodeHref: "https://github.com/ShivaKrishna-07/Code-Pen",
    liveWebsiteHref: "https://shivakrishna-07.github.io/Code-Pen",
  },
  {
    name: "My portfolio",
    favicon: "/images/projects/logos/portfolio.png",
    imageUrl: [
      "/images/projects/portfolio.png",
      "/images/projects/portfolioAbout.png",
      "/images/projects/portfolioProjects.png",
    ],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/ShivaKrishna-07/shivakrishna",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
  {
    name: "Spice Tracker",
    favicon: "/images/projects/logos/covidtracker.ico",
    imageUrl: [
      "/images/projects/spicetracker.png",
      "/images/projects/spiceTrackerRecipe.png",
      "/images/projects/spicetrackerRecipeInfo.png",
    ],
    description:
      "Spice Tracker is a dynamic recipe finder website where users can search and explore their favorite recipes",
    sourceCodeHref: "https://github.com/BUMBAIYA/Spice-Tracker",
    liveWebsiteHref: "https://shivakrishna-07.github.io/Spice-Tracker/",
  },
  {
    name: "Weathr",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/weathr1.png",
      "/images/projects/weathr2.png",
      "/images/projects/weathr3.png",
    ],
    description:
      "Get Live Weather Of Any City At Any Time. It is a simple weather forecasting website which information regarding today's weather.",
      sourceCodeHref: "https://github.com/ShivaKrishna-07/Weathr",
      liveWebsiteHref: "https://weathrr-app.vercel.app/",
  },
  {
    name: "Zencare",
    favicon: "/images/projects/logos/zencare.ico",
    imageUrl: [
      "/images/projects/zencare.png",
      "/images/projects/zencareNewAppointment.png",
      "/images/projects/zencareMedicalInfo.png",
      "/images/projects/zencareAppointmentSuccess.png",
      "/images/projects/zencareAdminDashboard.png",
    ],
    description:
      "Developed a healthcare management system using Next.js and TypeScript for streamlined patient and appointment management.",
    sourceCodeHref: "https://github.com/ShivaKrishna-07/zencare",
    liveWebsiteHref: "https://zenncare.vercel.app/",
  },
  {
    name: "Todoz",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/todoz.png",
      "/images/projects/todoztasks.png",
    ],
    description:
      "Developed a user friendly To Do List application using MERN stack where you can create, update, read and delete your Todoz",
      sourceCodeHref: "https://shivakrishna-07.github.io/To-Do-List/",
      liveWebsiteHref: "https://todooz.vercel.app",
  },
  {
    name: "FlipTxt",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/fliptxtDark.png",
      "/images/projects/fliptxtLight.png",
      "/images/projects/fliptxtAbout.png",
    ],
    description:
      "Whether you need to convert text to uppercase,lowercase,copy it,clear it,or perform various other transformations, we've got you covered.",
      sourceCodeHref: "https://github.com/ShivaKrishna-07/FlipTxt",
      liveWebsiteHref: "https://shivakrishna-07.github.io/FlipTxt/",
  },
  {
    name: "Thala for a Reason",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/thalaforareason.png",
      "/images/projects/thalaforareasonSuccess.png",
      "/images/projects/thalaforareasonFail.png",
    ],
    description:
      "Enter any word, number, or even a sentence, and watch the system work its magic to reveal a connection to the iconic number 7.",
      sourceCodeHref: "https://github.com/ShivaKrishna-07/thala-for-reason",
      liveWebsiteHref: "https://shivakrishna-07.github.io/thala-for-reason/",
  },
  {
    name: "EcoDroneHub",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/ecodronehub.png",
      "/images/projects/ecodronehubAbout.png",
      "/images/projects/ecodronehubService1.png",
      "/images/projects/ecodronehubService2.png",
      "/images/projects/ecodronehubService3.png",
    ],
    description:
      "This project aims to leverage drones to bring about a transformative impact on environmental monitoring and sustainable development.",
      sourceCodeHref: "https://github.com/ShivaKrishna-07/EcoDroneHub",
      liveWebsiteHref: "https://shivakrishna-07.github.io/EcoDroneHub/",
  },
  {
    name: "Bookify",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/bookify.png",
    ],
    description:
      "This project is designed for learning Firebase and involves storing and selling book details. It provides a practical application for managing book inventory and transactions.",
      sourceCodeHref: "https://github.com/ShivaKrishna-07/Bookify",
      liveWebsiteHref: "https://shivakrishna-07.github.io/Bookify/",
  },
];

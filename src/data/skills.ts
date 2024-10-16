import {
  SiExpress,
  SiSocketdotio,
  SiPrisma,
  SiNextdotjs,
  SiFlask,
} from "react-icons/si";
import {
  FramerMotionIcon,
  ReactRouterDomIcon,
  VitePwaIcon,
} from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "../../public/icons/html.svg";
import CsssSvg from "../..//public/icons/css.svg";
import CSvg from "../..//public/icons/c.svg";
import CppSvg from "../..//public/icons/cpp.svg";
import JavascriptSvg from "../..//public/icons/javascript.svg";
import TypescriptSvg from "../..//public/icons/typescript.svg";
import PythonSvg from "../..//public/icons/python.svg";

// Libraries
import ReactjsSvg from "../..//public/icons/reactjs.svg";
import SolidjsSvg from "../..//public/icons/solidjs.svg";
import ReduxSvg from "../..//public/icons/redux.svg";
import TailwindcssSvg from "../..//public/icons/tailwindcss.svg";
import BootstrapSvg from "../..//public/icons/bootstrap.svg";
import MuiSvg from "../..//public/icons/mui.svg";
import ViteSvg from "../..//public/icons/vite.svg";

// Backend
import NodejsSvg from "../..//public/icons/nodejs.svg";

// Database and ORMS
import MongoDBSvg from "../..//public/icons/mongodb.svg";
import PostgressSvg from "../..//public/icons/postgresql.svg";

// Tools and Tech
import GitSvg from "../..//public/icons/git.svg";
import GithubSvg from "../..//public/icons/github.svg";
import DockerSvg from "../..//public/icons/docker.svg";
import PostmanSvg from "../..//public/icons/postman.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CsssSvg,
      },
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Typescript",
        icon: TypescriptSvg,
      },
      {
        name: "C",
        icon: CSvg,
      },
      {
        name: "C++",
        icon: CppSvg,
      },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "Nextjs",
        icon: SiNextdotjs,
      },
      {
        name: "React Router Dom",
        icon: ReactRouterDomIcon,
      },
      {
        name: "Redux",
        icon: ReduxSvg,
      },
      {
        name: "Tailwindcss",
        icon: TailwindcssSvg,
      },
      {
        name: "MUI",
        icon: MuiSvg,
      },
      {
        name: "Bootstrap",
        icon: BootstrapSvg,
      },
      {
        name: "Framer motion",
        icon: FramerMotionIcon,
      },
      {
        name: "Vite",
        icon: ViteSvg,
      },
    ],
  },
  {
    sectionName: "Backend and Databases",
    skills: [
      {
        name: "Nodejs",
        icon: NodejsSvg,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "Github",
        icon: GithubSvg,
      },
      {
        name: "Docker",
        icon: DockerSvg,
      },
      {
        name: "Postman",
        icon: PostmanSvg,
      },
    ],
  },
];

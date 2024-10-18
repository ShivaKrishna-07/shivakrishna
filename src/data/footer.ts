import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";
import { HiMail } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import { FC, SVGProps } from "react";
import ContactButton from "@/components/contact-form/contact-button";

type FooterCol = {
  title: string;
  links: {
    name: string;
    link: string;
    icon?: FC<SVGProps<SVGSVGElement>>;
    leavesWebsite: boolean;
  }[];
};

type Footer = {
  columns: FooterCol[];
};

export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          icon:IoIosArrowDroprightCircle,
          link: "/",
          leavesWebsite: false,
        },
        {
          name: "About",
          icon:IoIosArrowDroprightCircle,
          link: "/about",
          leavesWebsite: false,
        },
        {
          name: "Projects",
          icon:IoIosArrowDroprightCircle,
          link: "/projects",
          leavesWebsite: false,
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/ShivaKrishna-07",
          icon: GithubIcon,
          leavesWebsite: true,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/shivaaa07/",
          icon: LinkedinIcon,
          leavesWebsite: true,
        },
        {
          name: "Twitter",
          link: "https://twitter.com/shiva_123_",
          icon: TwitterIcon,
          leavesWebsite: true,
        },
      ],
    },
    {
      title: "Contact Info",
      links: [
        {
          name: "shivakrishna6032@gmail.com",
          link: "#footer",
          icon: HiMail,
          leavesWebsite: false,
        },
        {
          name: "Hyderabad, India-500043",
          link: "#footer",
          icon: FaLocationDot,
          leavesWebsite: false,
        },
        {
          name: "",
          link: "#footer",
          icon: ContactButton,
          leavesWebsite: false,
        },
      ],
    },
  ],
};

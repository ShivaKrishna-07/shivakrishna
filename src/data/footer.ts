import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";

type FooterCol = {
  title: string;
  links: {
    name: string;
    link: string;
    icon?: string;
    leavesWebsite: boolean;
  }[];
};

type Footer = {
  columns: FooterCol[];
  support: {
    buymeacoffee: string;
    paypal: string;
    message: string;
  };
};

export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false,
        },
        // {
        //   name: "Blog",
        //   link: "/blog",
        //   leavesWebsite: false,
        // },
        {
          name: "About",
          link: "/about",
          leavesWebsite: false,
        },
        {
          name: "Projects",
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
          icon: "GithubIcon",
          leavesWebsite: true,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/shivaaa07/",
          icon: "LinkedinIcon",
          leavesWebsite: true,
        },
        {
          name: "Twitter",
          link: "https://twitter.com/shiva_123_",
          icon: "TwitterIcon",
          leavesWebsite: true,
        },
        // {
        //   name: "Email",
        //   link: "mailto:contact@braydentw.io",
        //   icon: "/static/icons/mail-f.svg",
        //   leavesWebsite: true,
        // },
      ],
    },
  ],
  support: {
    buymeacoffee: "braydenw",
    paypal: "braydentw",
    message: "I appreciate your support very much! 💙",
  },
};

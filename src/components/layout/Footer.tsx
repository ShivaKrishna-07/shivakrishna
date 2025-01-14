import Link from "next/link";
import React from "react";
import { footer } from "@/data/footer";
import { GithubIcon } from "../icons";
import Image from "next/image";

function Footer() {
  return (
    <footer
      id="footer"
      className="flex flex-col max-w-screen px-5 py-10 border-t border-fun-pink-darker z-5 bg-bg"
    >
      <div className="w-full max-w-4xl m-auto grid grid-cols-2 sm:grid-cols-3 justify-between items-start">
        {footer.columns.map((item, index) => {
          return (
            <div key={index} className="text-left mb-5 sm:mb-0">
              <h4 className="uppercase text-fun-gray text-sm font-bold">
                {item.title}
              </h4>
              <div>
                {item.links.map((item, index) => {
                  return (
                    <div key={index} className="my-4">
                      {item.leavesWebsite ? (
                        <a
                          href={item.link}
                          target="_blank"
                          className="items-center flex "
                        >
                          {item.icon && (
                            <span className="pr-2 -mb-1">
                              <item.icon className="text-accent w-[20px] transition-colors duration-150 hover:text-accent-foreground" />
                            </span>
                          )}
                          {item.name}
                        </a>
                      ) : (
                        <Link href={item.link} className="items-center flex">
                          {item.icon && (
                            <span className="pr-2 -mb-1">
                              <item.icon className="text-accent  w-[18px] transition-colors duration-150 hover:text-accent-foreground" />
                            </span>
                          )}
                          <p className="whitespace-nowrap">{item.name}</p>
                          
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center text-fun-gray border-t border-fun-pink-dark">
        <div className="flex flex-col items-center justify-center ">
          <div className="inline-flex items-center uppercase text-xs font-bold tracking-widest">
            Made with{" "}
            <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
              <span>
                <Image
                  alt=""
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                  width="40"
                  height={40}
                  className="invert"
                  title="NextJS"
                />
                <span className="sr-only">NextJS</span>
              </span>
              <span>
                <Image
                  alt=""
                  src="icons/tailwindcss.svg"
                  width="26"
                  height={26}
                  title="TailwindCSS"
                />
                <span className="sr-only">TailwindCSS</span>
              </span>
              <span>
                <Image
                  alt=""
                  src="icons/typescript.svg"
                  width="20"
                  height={20}
                  title="TypeScript"
                />
                <span className="sr-only">Type Script</span>
              </span>
            </div>
          </div>
          <div className="mt-2 text-xs ">
            Made by{" "}
            <a
              href="mailto:shivakrishna6032@gmail.com"
              className="text-fun-gray-light font-medium"
            >
              Shiva Krishna
            </a>
            . All rights reserved.
          </div>
        </div>
      </div>
      <div className="mt-8 text-center sm:text-right sm:-mt-12">
        <a
          className="w-auto inline-flex items-center sm:w-auto font-bold flex-shrink text-xs border border-fun-pink px-4 py-2 rounded-xl text-fun-pink cursor-pointer "
          href="https://github.com/ShivaKrishna-07/shivakrishna"
          target="_blank"
          rel="nooreferrer"
        >
          <GithubIcon className="text-accent w-[18px] transition-colors duration-150 hover:text-accent-foreground" />
          <span className="ml-2">View Source Code </span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;

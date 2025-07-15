import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <>
      <div
        className="relative max-w-full heroElem w-full pt-20 sm:pt-10 pb-40 m-auto flex justify-center text-center flex-col items-center z-1"
        style={{ maxWidth: "1200px" }}
      >
        <p className="text-xl mb-5">Hi, I'm Shiva Krishna.</p>
        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg">
          I enjoy <span className="text-[#26a0a6]">building</span> and{" "}
          <span className="text-[#26a0a6]">designing</span> for the web.
          <Image
            alt=""
            className="sqD squiggle-hero-html hidden sm:block w-16 top-[-90px] right-[5%] sm:top-[-90px] sm:right-[170px]"
            style={{ animationDelay: "0.1s" }}
            src="/static/doodles/pop2.svg"
            width={100}
            height={100}
          />
          <Image
            alt=""
            className="sqD squiggle-hero-nextjs hidden sm:block top-[75px] right-0 w-11"
            style={{ animationDelay: "0.2s" }}
            src="/static/doodles/nextjs.svg"
            width={100}
            height={100}
          />
          <Image
            alt=""
            className="sqD hidden sm:block bottom-[-300px] -right-1/4 sm:right-[-20%] lg:bottom-[-310px] xs:right-[100px] lg:right-[-120px]"
            style={{ animationDelay: "0.3s" }}
            src="/static/doodles/html.svg"
            width={100}
            height={100}
          />
          <Image
            alt=""
            className="sqD hidden sm:block bottom-[-340px] left-[-180px]"
            style={{ animationDelay: "0.4s" }}
            src="/static/doodles/coder.svg"
            width={300}
            height={300}
          />
          <Image
            alt=""
            className="sqD hidden sm:block left-[100px] lg:left-[160px] bottom-[-150px]"
            style={{ animationDelay: "0.5s" }}
            src="/static/doodles/js.svg"
            width={100}
            height={100}
          />
          <Image
            alt=""
            className="sqD hidden sm:block bottom-[-200px] right-[65%] sm:right-[45%]"
            style={{ animationDelay: "0.6s" }}
            src="/static/doodles/dino.svg"
            width={150}
            height={150}
          />
          <Image
            alt=""
            className="sqD hidden sm:block right-[-60px] xs:right-[100px] bottom-[-180px] lg:[5%]"
            style={{ animationDelay: "0.7s" }}
            src="/static/doodles/paintbrush.svg"
            width={200}
            height={200}
          />
          <Image
            alt=""
            className="sqD hidden sm:block sm:top-[-130px] sm:left-[15%] lg:top-[-130px] lg:left-[120px]"
            src="/static/doodles/pop1.svg"
            width={100}
            height={100}
          />
          <Image
            alt=""
            className="sqD hidden sm:block left-[-35px] bottom-[-85px] sm:bottom-[-100px] sm:left-5 opacity-40"
            style={{ animationDelay: "0.9s" }}
            src="/static/doodles/code.svg"
            width={100}
            height={100}
          />
        </h1>
      </div>
    </>
  );
}

export default Hero;

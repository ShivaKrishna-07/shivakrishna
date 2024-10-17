function Heading() {
  return (
    <div className={`w-full text-center relative`}>
      <h1 className=" font-bold text-[#26a0a6] text-5xl sm:text-6xl inline-block w-auto mx-auto mb-8 relative">
        Projects
        <img
          className="sqD w-10 -top-8 -right-8 absolute"
          src="/static/doodles/code.svg"
        />
      </h1>
      <p className="text-fun-gray text-xl sm:text-2xl max-w-3xl m-auto">
        I've built cool apps and websites using anything from HTML to React (and
        even PHP!). Here are some of my favorite projects over the course of my
        journey.
      </p>
    </div>
  );
}

export default Heading;

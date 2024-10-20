import Heading from "@/components/Heading";
import ProjectCard from "@/components/projects/project-card";
import { PROJECTS_CARD } from "@/data/projects";

const page = () => {
  return (
    <div>
      <section className="mx-auto mb-40 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          <Heading/>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
            {PROJECTS_CARD.map((card, index) => (
              <ProjectCard key={index} {...card} />
            ))}
          </div>
          <div className="mx-auto mt-16 max-w-5xl text-center text-foreground md:mt-28">
            <span className="text-xl font-bold md:text-2xl">
            I am focusing on real-time applications that address practical challenges, aiming to make a positive impact by providing effective solutions for everyday problems.
            </span>
            <p className="mt-10 text-base md:text-xl">
              Hey, hey, hey... I've got even more on{" "}
              <a
                href={`https://github.com/ShivaKrishna-07`}
                target="_blank"
                className="font-semibold text-accent underline underline-offset-2 hover:text-accent/70"
              >
                my GitHub!
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;

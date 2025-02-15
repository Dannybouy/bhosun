import { Github, Linkedin } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { experience, projects } from "../lib/experience";
import { cn } from "../lib/utils";
import ExperienceCard from "./ExperienceCard";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("about");
  const sectionRefs = {
    about: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const observers = Object.entries(sectionRefs).map(([id, ref]) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.5 },
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionRefs]);

  const scrollToSection = (sectionId: string) => {
    sectionRefs[sectionId as keyof typeof sectionRefs].current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="flex min-h-screen bg-[#0a1324] px-4 py-12 text-[#94a3b8] md:px-6 lg:px-8 lg:py-24 mx-auto">
      {/* Sidebar */}
      <aside className="lg:fixed top-0 left-0 h-screen w-[40%] max-w-3xl border bg-[#0a1324] py-12 lg:pl-32">
        <div className="flex h-full flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white">
              Olatunbosun Olabisi
            </h1>
            <p className="mt-2 text-xl">Backend Engineer</p>
            <p className="mt-4 max-w-64">
              I'm a backend engineer with a passion for building scalable and
              efficient systems.
            </p>
            <nav className="mt-6 space-y-1">
              {["ABOUT", "EXPERIENCE", "PROJECTS"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={cn(
                    "group flex w-full items-center py-3 text-sm font-medium text-gray-400 hover:text-white",
                    activeSection === item.toLowerCase() && "text-white",
                  )}
                >
                  <div
                    className={cn(
                      "mr-4 h-px w-8 bg-gray-600 transition-all group-hover:w-16 group-hover:bg-white",
                      activeSection === item.toLowerCase() && "w-16 bg-white",
                    )}
                  />
                  {item}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/bhosun"
              className="rounded-full p-2 hover:bg-gray-800"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/olabisi-olatunbosun"
              className="rounded-full p-2 hover:bg-gray-800"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-[50%] flex-1 p-4">
        <section ref={sectionRefs.about} className="">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Hi, I am a software engineer with over three years experience in
              the proptech and insurtech space, where I've developed resilient
              and scalable backend systems for amazing products that have helped
              solve users' problems.
            </p>
            <p className="text-lg leading-relaxed">
              I also enjoy watching movies, sports and playing chess in my free
              time.
            </p>
          </div>
        </section>

        <section ref={sectionRefs.experience} className="mt-24">
          <div className="space-y-12">
            {experience.map((experience) => (
              <ExperienceCard
                key={experience.id}
                date={experience.date}
                position={experience.position}
                company={experience.company}
                description={experience.description}
                technologies={experience.technologies}
                link={experience.link}
              />
            ))}
          </div>
        </section>

        <section ref={sectionRefs.projects} className="mt-24">
          <div className="space-y-12">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                description={project.description}
                technologies={project.technologies}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;

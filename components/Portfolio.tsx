import { Github, Linkedin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
    <div className="block min-h-screen bg-[#0a1324] px-4 py-1 text-[#94a3b8] md:px-6 lg:mx-auto lg:flex lg:px-8 lg:py-24">
      {/* Sidebar */}
      <aside className="top-0 left-0 w-full bg-[#0a1324] px-4 py-12 lg:fixed lg:h-screen lg:w-[40%] lg:max-w-3xl lg:pl-32">
        <div className="flex h-full flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white">
              Olatunbosun Olabisi
            </h1>
            <p className="mt-2 text-2xl text-gray-300">Backend Engineer</p>
            <p className="mt-4 max-w-64 text-lg">
              I'm a backend engineer with a passion for building scalable and
              efficient systems.
            </p>
            <a
              href="https://drive.google.com/file/d/1KJYqHA-bQaSdYtxt_Vee6MEYhUB_QCir/view"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-4 rounded-md border-2 border-[#122c3f] bg-[#1a293f] px-4 py-2 font-medium text-white transition-all duration-300 hover:bg-[#2a3d58]">
                Download CV
              </button>
            </a>
            <nav className="mt-24 hidden space-y-1 lg:block">
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
          <div className="mt-4 flex gap-4">
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
      <main className="flex-1 p-4 lg:ml-[50%]">
        <section ref={sectionRefs.about} className="">
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-gray-300 lg:hidden">About</h2>
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
          <h2 className="mb-4 text-lg font-bold text-gray-300 lg:hidden">
            Experience
          </h2>
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
                companyLogo={experience.companyLogo}
              />
            ))}
          </div>
        </section>

        <section ref={sectionRefs.projects} className="mt-24">
          <h2 className="mb-4 text-lg font-bold text-gray-300 lg:hidden">
            Projects
          </h2>
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

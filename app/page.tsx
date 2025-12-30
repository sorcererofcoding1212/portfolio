"use client";

import { ProjectCard } from "@/components/ProjectCard";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const projectsRef = useRef<HTMLDivElement | null>(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="pt-28">
      <div className="lg:flex block">
        <div className="w-full lg:w-[60%] pl-5 lg:pl-8">
          <div className="text-xl lg:text-2xl font-medium">
            Hi, I am Manvir.
          </div>

          <div className="text-5xl lg:text-7xl font-medium mt-4 bg-linear-to-r from-indigo-400 via-purple-600 to-pink-400 bg-clip-text text-transparent">
            Full Stack
          </div>

          <div className="text-5xl lg:text-7xl font-medium mt-2 bg-linear-to-r from-indigo-400 via-purple-600 to-pink-400 bg-clip-text text-transparent">
            Developer
          </div>

          <div className="mt-4 lg:mt-6 text-lg lg:text-xl w-[90%] lg:w-[60%]">
            I build scalable, real-time web applications using Next.js,
            PostgreSQL, and modern backend architectures.
          </div>

          <div className="flex justify-between w-[90%] lg:w-[50%] mt-4">
            <button
              onClick={scrollToProjects}
              className="bg-indigo-600 lg:hover:scale-98 lg:transition-all cursor-pointer text-zinc-50 py-3 px-5 rounded"
            >
              View Projects
            </button>
            <a
              href="mailto:manvirtaneja451@gmail.com"
              title="manvirtaneja451@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 lg:hover:scale-98 lg:transition-all cursor-pointer text-zinc-50 py-3 px-5 rounded"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="lg:w-[40%] flex justify-center">
          <Image
            src={"/abstract.png"}
            height={100}
            width={400}
            alt="Abstract"
          />
        </div>
      </div>
      <div className="lg:mt-6">
        <div
          className="font-medium text-center text-2xl lg:text-4xl"
          ref={projectsRef}
        >
          My Projects
        </div>

        <div className="flex justify-center items-center">
          <div className="lg:flex lg:gap-x-28 mt-8">
            <ProjectCard
              liveLink="https://payzap.manvir.site"
              repoLink="https://github.com/sorcererofcoding1212/payzap"
              title="Payzap"
              theme="payzap"
            >
              <Image
                src={"/payzap.jpg"}
                height={200}
                width={200}
                alt="Payzap"
                className="object-fit w-full shadow-sm lg:shadow-md"
              />
            </ProjectCard>
            <ProjectCard
              liveLink="https://youfit.manvir.site"
              repoLink="https://github.com/sorcererofcoding1212/youfit"
              title="Youfit"
              theme="youfit"
            >
              <Image
                src={"/youfit.jpg"}
                height={200}
                width={200}
                alt="Youfit"
                className="object-fit w-full shadow-sm lg:shadow-md"
              />
            </ProjectCard>
          </div>
        </div>
      </div>
    </div>
  );
}

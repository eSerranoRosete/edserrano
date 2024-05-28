"use client";

import { useAppState } from "@/hooks/useAppState";
import { useCounter } from "@/hooks/useCounter";
import { projects } from "@/lib/projects";
import { cn } from "@/lib/utils";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  ExternalLinkIcon,
} from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export const ProjectsStage = () => {
  const counter = useCounter(projects.length, true);

  const current = projects[counter.count];

  const { setAppColors } = useAppState((s) => ({ ...s }));

  useEffect(() => {
    setAppColors({
      background: current.background,
      foreground: current.foreground,
    });
  }, [current]);

  return (
    <div className="flex flex-col gap-10 grow">
      {projects.map((project, index) => (
        <div
          key={project.name}
          className={cn(
            "md:hidden w-full rounded-3xl backdrop-blur-sm grow relative bg-white/85 animate-slide-left",
            counter.count === index && "md:block"
          )}
        >
          <div className="p-6 h-full flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <Link
                href={project.url}
                target="_blank"
                className="text-xl font-semibold uppercase underline flex items-center gap-2 w-fit"
              >
                {project.name}
                <ExternalLinkIcon className="w-4" />
              </Link>
              <p>{project.description}</p>
            </div>

            <div className="w-full h-full grid xl:grid-cols-3 gap-5">
              <div className="col-span-2 rounded-3xl overflow-hidden bg-white">
                <img
                  src={project.primaryImg}
                  alt="Tempalte"
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="rounded-3xl overflow-hidden bg-white relative">
                <img
                  src={project.secondaryImg}
                  alt="Tempalte"
                  className="w-full h-full object-center object-cover absolute"
                />
              </div>
            </div>

            <div className="mt-auto">
              {/* <p>Key Features:</p>
              <ul className="list-disc list-inside">
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul> */}

              <ul className="inline-flex flex-wrap gap-2 mt-5">
                {project.stack.map((s) => (
                  <li
                    style={{
                      background: project.background,
                      color: project.foreground,
                    }}
                    key={s}
                    className="bg-black w-fit px-3 text-white rounded-full antialiased"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="hidden md:flex absolute bottom-5 right-5 gap-2 items-center">
            <button
              disabled={counter.count === 0}
              className="disabled:opacity-30 disabled:pointer-events-none"
              onClick={counter.decrement}
            >
              <ArrowLeftCircleIcon className="w-14 h-14 hover:scale-125 transition-all stroke-1" />
            </button>
            <button
              disabled={counter.count === projects.length - 1}
              className="disabled:opacity-30 disabled:pointer-events-none"
              onClick={counter.increment}
            >
              <ArrowRightCircleIcon className="w-14 h-14 hover:scale-125 transition-all stroke-1" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

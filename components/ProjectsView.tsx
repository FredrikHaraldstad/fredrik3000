"use client";

import { useState } from "react";
import TransitionLink from "@/components/TransitionLink";
import type { Project } from "@/data/projects";

const buttonBase =
  "px-8 py-3 rounded-m text-base font-normal transition-colors min-h-[44px] min-w-[44px] cursor-pointer border";
const buttonAction =
  "bg-background-action text-text-on-action hover:opacity-90 border-border-action";
const buttonSecondary =
  "bg-background-container text-text-default hover:opacity-90 border-border-separator";

interface ProjectsViewProps {
  projects: Project[];
}

export default function ProjectsView({ projects }: ProjectsViewProps) {
  const [view, setView] = useState<"cards" | "list">("cards");

  return (
    <div className="space-y-12">
      {/* List vs cards toggle — same style as Contact "Send letter" button */}
      <div className="flex justify-end gap-3" role="group" aria-label="View mode">
        <button
          type="button"
          onClick={() => setView("list")}
          className={`${buttonBase} ${
            view === "list" ? buttonAction : buttonSecondary
          }`}
          aria-pressed={view === "list"}
          aria-label="Show projects as list"
        >
          List
        </button>
        <button
          type="button"
          onClick={() => setView("cards")}
          className={`${buttonBase} ${
            view === "cards" ? buttonAction : buttonSecondary
          }`}
          aria-pressed={view === "cards"}
          aria-label="Show projects as cards"
        >
          Cards
        </button>
      </div>

      {view === "cards" ? (
        <ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none items-stretch"
          aria-label="Prosjekter"
        >
          {projects.map((project) => (
            <li key={project.id}>
              {project.externalUrl ? (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block w-full"
                >
                  <article className="relative aspect-[4/3] rounded-m border border-border-separator p-5 flex flex-col justify-end gap-1 transition-all duration-300 ease-out group-hover:bg-background-container-inverted group-hover:border-background-container-inverted">
                    <span
                      className="absolute top-4 right-4 inline-flex items-center gap-1.5 small border border-border-separator text-text-subdued px-3 py-1.5 rounded-full transition-all duration-200 group-hover:border-white/20 group-hover:text-text-inverted"
                      aria-hidden="true"
                    >
                      <span className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                    </span>
                    <p className="small text-text-subdued transition-colors duration-300 group-hover:text-white/50">
                      {project.categories[0]}
                    </p>
                    <h2 className="heading-4 text-text-default transition-colors duration-300 group-hover:text-text-inverted">
                      {project.title}
                    </h2>
                    <p className="small text-text-default line-clamp-2 font-medium transition-colors duration-300 group-hover:text-white/70">
                      {project.catchPhrase}
                    </p>
                  </article>
                </a>
              ) : (
                <TransitionLink
                  href={`/projects/${project.id}`}
                  className="group block w-full"
                >
                  <article className="relative aspect-[4/3] rounded-m border border-border-separator p-5 flex flex-col justify-end gap-1 transition-all duration-300 ease-out group-hover:border-border-separator-strong group-hover:shadow-lg">
                    <span
                      className="absolute top-4 right-4 inline-flex items-center gap-1.5 small border border-border-separator text-text-subdued px-3 py-1.5 rounded-full transition-all duration-200 group-hover:bg-background-container-inverted group-hover:border-background-container-inverted group-hover:text-text-inverted"
                      aria-hidden="true"
                    >
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </span>
                    <p className="small text-text-subdued">
                      {project.categories[0]}
                    </p>
                    <h2 className="heading-4 text-text-default">
                      {project.title}
                    </h2>
                    <p className="small text-text-default line-clamp-2 font-medium">
                      {project.catchPhrase}
                    </p>
                  </article>
                </TransitionLink>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <ul
          className="flex flex-col gap-4 list-none"
          aria-label="Prosjekter"
        >
          {projects.map((project) => (
            <li key={project.id}>
              {project.externalUrl ? (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block w-full"
                >
                  <article className="rounded-m border border-border-separator p-4 transition-all duration-300 ease-out group-hover:bg-background-container-inverted group-hover:border-background-container-inverted">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex flex-col gap-1">
                        <p className="small text-text-subdued transition-colors duration-300 group-hover:text-white/50">
                          {project.categories[0]}
                        </p>
                        <h2 className="heading-4 text-text-default transition-colors duration-300 group-hover:text-text-inverted">
                          {project.title}
                        </h2>
                        <p className="small text-text-default line-clamp-1 transition-colors duration-300 group-hover:text-white/70">
                          {project.catchPhrase}
                        </p>
                      </div>
                      <span className="small text-text-subdued transition-all duration-200 group-hover:text-text-inverted group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shrink-0" aria-hidden="true">↗</span>
                    </div>
                  </article>
                </a>
              ) : (
                <TransitionLink
                  href={`/projects/${project.id}`}
                  className="group block w-full"
                >
                  <article className="rounded-m overflow-hidden border border-border-separator p-4 transition-all duration-300 ease-out group-hover:border-border-separator-strong group-hover:shadow-lg">
                    <div className="flex flex-col gap-1">
                      <p className="small text-text-subdued">
                        {project.categories[0]}
                      </p>
                      <h2 className="heading-4 text-text-default">
                        {project.title}
                      </h2>
                      <p className="small text-text-default line-clamp-1">
                        {project.catchPhrase}
                      </p>
                    </div>
                  </article>
                </TransitionLink>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

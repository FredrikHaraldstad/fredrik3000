"use client";

import TransitionLink from "@/components/TransitionLink";
import { featuredProjects } from "@/data/projects";

export function ProjectsCarouselFocus() {
  return (
    <section className="bg-background-page px-8 lg:px-16 pt-24 pb-16" aria-label="Projects">
      <p className="small text-text-subdued mb-8">Projects</p>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 list-none mb-10">
        {featuredProjects.slice(0, 3).map((project) => (
          <li key={project.id}>
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
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="flex justify-end">
        <TransitionLink
          href="/projects"
          className="inline-flex items-center gap-2 small bg-background-container-inverted text-text-inverted px-5 py-3 rounded-full hover:opacity-80 transition-opacity group"
        >
          Explore more projects
          <span
            className="inline-block transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </TransitionLink>
      </div>
    </section>
  );
}

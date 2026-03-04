import type { Metadata } from "next";
import ProjectsView from "@/components/ProjectsView";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects – Fredrik Haraldstad",
  description:
    "Case studies of interaction design, UX, UI, service design and front-end development projects by Fredrik Haraldstad.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen px-6 pt-10 pb-10">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h1 className="sr-only">Projects</h1>
        </header>

        <ProjectsView projects={projects} />
      </div>
    </div>
  );
}

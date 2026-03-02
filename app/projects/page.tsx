import ProjectsView from "@/components/ProjectsView";
import { projects } from "@/data/projects";

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

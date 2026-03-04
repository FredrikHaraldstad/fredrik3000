export default function ProjectsLoading() {
  return (
    <div className="min-h-screen px-6 pt-10 pb-10">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="h-6 w-40 bg-background-container-low rounded-m animate-pulse" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="rounded-m border border-border-separator bg-background-container-low h-40 animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>
  );
}


export default function RootLoading() {
  return (
    <div className="min-h-screen px-6 pt-10 pb-10">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="space-y-4">
          <div className="h-4 w-32 bg-background-container-low rounded-m animate-pulse" />
          <div className="h-8 w-64 bg-background-container-low rounded-m animate-pulse" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="aspect-[4/3] rounded-m bg-background-container-low animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>
  );
}


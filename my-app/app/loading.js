export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0f111d] text-white pt-28 pb-20 px-6 sm:px-12 max-w-7xl mx-auto font-body">
      {/* Hero Skeleton Header */}
      <div className="animate-pulse flex flex-col items-center text-center space-y-4 mb-16">
        <div className="h-4 w-32 bg-white/10 rounded-full" />
        <div className="h-10 sm:h-14 w-3/4 max-w-2xl bg-white/10 rounded-xl" />
        <div className="h-4 w-1/2 max-w-lg bg-white/5 rounded-full" />
      </div>

      {/* Grid Skeleton Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((idx) => (
          <div
            key={idx}
            className="animate-pulse bg-[#16192b]/80 border border-white/5 rounded-2xl p-6 flex flex-col space-y-4 shadow-xl"
          >
            <div className="w-12 h-12 rounded-xl bg-white/10" />
            <div className="h-6 w-2/3 bg-white/10 rounded-lg" />
            <div className="space-y-2">
              <div className="h-3.5 w-full bg-white/5 rounded" />
              <div className="h-3.5 w-5/6 bg-white/5 rounded" />
              <div className="h-3.5 w-4/6 bg-white/5 rounded" />
            </div>
            <div className="pt-4 h-4 w-28 bg-[#DF0425]/20 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

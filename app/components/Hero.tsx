import SearchBar from "./searchBar";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-16 md:pt-24 pb-12 md:pb-20">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[700px] md:h-[700px] bg-violet-500/10 blur-[100px] rounded-full animate-pulse" />

      <div
        className="absolute top-12 left-0 w-28 h-28 md:w-40 md:h-40 bg-blue-500/10 blur-3xl rounded-full"
        style={{
          animation: "float 6s ease-in-out infinite",
        }}
      />

      <div
        className="absolute bottom-0 right-0 w-32 h-32 md:w-52 md:h-52 bg-purple-500/10 blur-3xl rounded-full"
        style={{
          animation: "float 8s ease-in-out infinite",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-white text-xs md:text-sm shadow-lg">
          📍 Cosmo City's Local Business Directory
        </span>

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-tight">
          Discover trusted
          <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            local businesses
          </span>
        </h1>

        <p className="mt-5 text-gray-500 text-base md:text-xl max-w-2xl mx-auto px-2">
          Find restaurants, salons, mechanics, plumbers, electricians,
          accommodation, and hundreds of other verified businesses across
          Cosmo City—all in one place with CosmoBusinesses.
        </p>

        <div className="mt-8 md:mt-12">
          <SearchBar />
        </div>
      </div>
    </section>
  );
}


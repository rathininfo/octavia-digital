export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-[#0B0B0D] pt-28 overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[700px] h-[700px] bg-orange-600/5 rounded-full blur-[180px]"></div>
      </div>

      <div className="relative z-10 text-center px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm mb-6">
          <span>🎵</span> The Future of Music Distribution
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Your Music.
          <br />
          <span className="text-orange-500">Everywhere.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/70 mt-6 max-w-2xl mx-auto text-lg">
          Distribute your music to 150+ streaming platforms worldwide. Keep
          100% of your royalties. Start your journey with Octavia Digital today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold">
            Start Distributing →
          </button>

          <button className="border border-orange-500/30 hover:border-orange-500 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2">
            ▶ See How It Works
          </button>
        </div>
      </div>

      {/* Scroll mouse icon */}
      <div className="absolute bottom-8 flex justify-center w-full">
        <div className="w-5 h-10 border-2 border-white/40 rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-orange-500 rounded"></div>
        </div>
      </div>
    </section>
  );
}

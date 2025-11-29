export default function Hero() {
  return (
    <section className="relative flex items-center justify-center bg-background pt-32 pb-40 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[350px] h-[350px] md:w-[600px] md:h-[600px] lg:w-[750px] lg:h-[750px] bg-accent/5 rounded-full blur-[160px] md:blur-[200px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-8 max-w-4xl mx-auto">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent px-4 py-2 rounded-full text-sm md:text-base mb-6">
          <span>🎵</span> The Future of Music Distribution
        </div>

        {/* Title */}
        <h1 className="text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-heading">
          Your Music.
          <br />
          <span className="text-accent">Everywhere.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-paragraph mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl">
          Distribute your music to 150+ streaming platforms worldwide. Keep
          100% of your royalties. Start your journey with Octavia Digital today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mt-10">
          <button className="bg-accent hover:bg-accent-dark transition duration-200 text-foreground px-8 py-3 sm:px-10 sm:py-4 rounded-xl font-semibold text-base sm:text-lg">
            Start Distributing →
          </button>

          <button className="border border-accent/30 hover:border-accent transition duration-200 text-foreground px-8 py-3 sm:px-10 sm:py-4 rounded-xl font-semibold flex items-center gap-2 text-base sm:text-lg">
            ▶ See How It Works
          </button>
        </div>

      </div>

      {/* Scroll Icon */}
      <div className="absolute bottom-10 flex justify-center w-full">
        <div className="w-8 h-16 sm:w-10 sm:h-20 border-2 border-muted rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-accent rounded animate-bounce"></div>
        </div>
      </div>

    </section>
  );
}

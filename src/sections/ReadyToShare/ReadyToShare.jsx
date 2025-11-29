export default function ReadyToShare() {
  return (
    <section className="relative bg-[#0B0B0D] py-28 px-6 md:px-12 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] md:w-[650px] md:h-[650px] bg-orange-600/5 rounded-full blur-[180px] md:blur-[240px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          Ready to Share Your Sound <br />
          with the <span className="text-orange-500">World?</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-white/70 text-base md:text-lg max-w-2xl mx-auto">
          Join thousands of artists who trust Octavia to distribute their music
          globally. Upload your tracks, grow your audience, and keep every
          penny you earn.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-10">
          <button className="bg-orange-500 hover:bg-orange-600 transition duration-200 text-white px-10 py-4 rounded-xl font-semibold text-lg">
            Start Distributing →
          </button>

          <button className="border border-orange-500/30 hover:border-orange-500 transition duration-200 text-white px-10 py-4 rounded-xl font-semibold text-lg flex items-center gap-2">
            📄 Learn More
          </button>
        </div>

      </div>

    </section>
  );
}

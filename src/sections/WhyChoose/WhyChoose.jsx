export default function WhyChoose() {
  const features = [
    {
      title: "Worldwide Distribution",
      desc: "Reach 150+ global platforms including Spotify, Apple Music, YouTube, and more.",
      icon: "🌍",
    },
    {
      title: "Keep 100% Royalties",
      desc: "We never take a cut. Your music, your earnings — always.",
      icon: "💰",
    },
    {
      title: "Fast & Easy Uploads",
      desc: "Upload your tracks in minutes with our smooth and modern dashboard.",
      icon: "⚡",
    },
    {
      title: "YouTube Content ID",
      desc: "Protect your music and earn whenever your sound is used anywhere on YouTube.",
      icon: "🎬",
    },
    {
      title: "24/7 Artist Support",
      desc: "A dedicated team that actually responds and cares about your career.",
      icon: "🤝",
    },
    {
      title: "Free ISRC & UPC Codes",
      desc: "We provide industry-standard codes at zero additional cost.",
      icon: "🆓",
    },
  ];

  return (
    <section className="relative bg-[#0B0B0D] py-28 px-6 md:px-12 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-orange-600/5 rounded-full blur-[160px] md:blur-[220px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
          Why Artists Choose{" "}
          <span className="text-orange-500">Octavia</span>
        </h2>

        <p className="mt-6 text-white/70 max-w-2xl mx-auto text-base md:text-lg">
          Empowering independent artists with world-class tools, global reach,
          and transparent earnings — all in one platform.
        </p>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-orange-500/40 hover:bg-white/10 transition duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-white/60">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

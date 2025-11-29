export default function ServiceCards() {
  const items = [
    {
      title: "Music Distribution",
      icon: "🌍",
      features: [
        "Unlimited releases",
        "All major platforms",
        "Fast delivery",
        "Automatic updates",
      ],
    },
    {
      title: "Analytics & Insights",
      icon: "📊",
      features: [
        "Real-time streaming data",
        "Audience demographics",
        "Revenue tracking",
        "Performance trends",
      ],
    },
    {
      title: "Rights Management",
      icon: "🛡️",
      features: [
        "Copyright protection",
        "Content ID",
        "Royalty collection",
        "Licensing support",
      ],
    },
    {
      title: "Artist Promotion",
      icon: "🚀",
      features: [
        "Playlist pitching",
        "Social tools",
        "Pre-save campaigns",
        "Press kit builder",
      ],
    },
    {
      title: "Video Distribution",
      icon: "🎬",
      features: [
        "YouTube monetization",
        "Vevo distribution",
        "Lyric videos",
        "Visualizers",
      ],
    },
    {
      title: "Artist Support",
      icon: "🎧",
      features: [
        "24/7 support",
        "Dedicated manager",
        "Industry insights",
        "Release guidance",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        
        {items.map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-card border border-card-border shadow-sm hover:shadow-lg hover:border-accent/30 transition"
          >
            {/* Icon */}
            <div className="text-3xl mb-4">{item.icon}</div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-heading mb-3">
              {item.title}
            </h3>

            {/* Features */}
            <ul className="space-y-2 text-paragraph text-sm">
              {item.features.map((f, j) => (
                <li key={j} className="flex items-center gap-2">
                  <span className="text-accent">✔</span> {f}
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </section>
  );
}

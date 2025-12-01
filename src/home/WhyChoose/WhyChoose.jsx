import {
  Globe,
  DollarSign,
  Zap,
  Shield,
  BarChart,
  Headphones
} from "lucide-react";

export default function WhyChoose() {
  const features = [
    {
      icon: <Globe size={28} className="text-orange-500" />,
      title: "Global Distribution",
      desc: "Reach 150+ streaming platforms worldwide including Spotify, Apple Music, and more.",
    },
    {
      icon: <DollarSign size={28} className="text-orange-500" />,
      title: "Keep 100% Royalties",
      desc: "You created the music. You keep all the earnings. No hidden fees, ever.",
    },
    {
      icon: <Zap size={28} className="text-orange-500" />,
      title: "Fast Release",
      desc: "Get your music live on all platforms within 24–48 hours. Speed matters.",
    },
    {
      icon: <Shield size={28} className="text-orange-500" />,
      title: "Rights Protection",
      desc: "Advanced copyright protection and content ID to safeguard your creations.",
    },
    {
      icon: <BarChart size={28} className="text-orange-500" />,
      title: "Analytics Dashboard",
      desc: "Real-time insights into your streams, earnings, and audience demographics.",
    },
    {
      icon: <Headphones size={28} className="text-orange-500" />,
      title: "24/7 Support",
      desc: "Dedicated artist support team ready to help you succeed at any hour.",
    },
  ];

  return (
    <section className="w-full bg-[#0B0B0D] py-24 px-6 md:px-10">

      {/* Title */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Why Artists Choose <span className="text-orange-500">Octavia</span>
        </h2>

        <p className="mt-4 text-white/70 text-base md:text-lg max-w-2xl mx-auto">
          Everything you need to launch, grow, and monetize your music career in
          one powerful platform.
        </p>
      </div>

      {/* Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="
              bg-[#111113] border border-white/10 
              rounded-2xl p-8 
              hover:border-orange-500/40 hover:bg-white/[0.04] 
              transition duration-300
            "
          >
            {/* Icon Box */}
            <div className="w-14 h-14 flex items-center justify-center bg-orange-500/10 rounded-xl mb-6">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-white/60 text-sm md:text-base leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

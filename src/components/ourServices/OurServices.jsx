import {
  Globe,
  BarChart3,
  Shield,
  PenTool,
  Video,
  Headphones
} from "lucide-react";

export default function OurServices() {
  const services = [
    {
      icon: <Globe size={26} className="text-orange-500" />,
      title: "Music Distribution",
      description:
        "Get your music on 150+ streaming platforms including Spotify, Apple Music, Amazon Music, YouTube Music, Deezer, and more.",
      items: ["Unlimited releases", "All major platforms", "Fast delivery", "Automatic updates"],
    },
    {
      icon: <BarChart3 size={26} className="text-orange-500" />,
      title: "Analytics & Insights",
      description:
        "Track your performance with real-time analytics. Understand your audience and optimize your release strategy.",
      items: ["Real-time streaming data", "Audience demographics", "Revenue tracking", "Performance trends"],
    },
    {
      icon: <Shield size={26} className="text-orange-500" />,
      title: "Rights Management",
      description:
        "Protect your music with our comprehensive rights management and Content ID registration.",
      items: ["Copyright protection", "Content ID", "Royalty collection", "Licensing support"],
    },
    {
      icon: <PenTool size={26} className="text-orange-500" />,
      title: "Artist Promotion",
      description:
        "Boost your visibility with our promotional tools and playlist pitching services.",
      items: ["Playlist pitching", "Social media tools", "Pre-save campaigns", "Press kit builder"],
    },
    {
      icon: <Video size={26} className="text-orange-500" />,
      title: "Video Distribution",
      description:
        "Distribute your music videos to YouTube, Vevo, and other video platforms seamlessly.",
      items: ["YouTube monetization", "Vevo distribution", "Lyric videos", "Visualizers"],
    },
    {
      icon: <Headphones size={26} className="text-orange-500" />,
      title: "Artist Support",
      description:
        "Get dedicated support from our team of music industry experts whenever you need it.",
      items: ["24/7 support", "Dedicated manager", "Industry insights", "Release guidance"],
    },
  ];

  const Card = ({ icon, title, description, items }) => (
    <div className="bg-[#0F121A] border border-[#1C1F28] p-8 rounded-2xl shadow-lg hover:shadow-orange-500/10 transition-all duration-200">

      {/* Icon Box */}
      <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-[20px] font-semibold text-white mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[15px] text-gray-400 mb-6 leading-relaxed">
        {description}
      </p>

      {/* List */}
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-center gap-2 text-[15px] text-gray-300"
          >
            <span className="text-orange-500 text-lg">✔</span>
            {item}
          </li>
        ))}
      </ul>

    </div>
  );

  return (
    <section className="py-24 bg-[#0B0E14]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {services.map((svc, index) => (
          <Card key={index} {...svc} />
        ))}
      </div>
    </section>
  );
}

import {
  Music,
  PlayCircle,
  Disc3,
  Radio,
  Headphones,
  Video,
  Mic2,
  SatelliteDish,
  Library,
  Globe,
  Rss,
  Facebook,
  Instagram,
  Barrel,
  Tally4,
  Music3Icon,
  Podcast,
} from "lucide-react";

import PlatformCard from "../PlatformCard/PlatformCard";

export default function DistributionNetwork() {
  const platforms = [
    { name: "Spotify", category: "Streaming", icon: <Headphones size={24} /> },
    { name: "Apple Music", category: "Streaming", icon: <Music size={24} /> },
    { name: "Amazon Music", category: "Streaming", icon: <Disc3 size={24} /> },
    { name: "YouTube Music", category: "Streaming", icon: <PlayCircle size={24} /> },
    { name: "Deezer", category: "Streaming", icon: <Library size={24} /> },
    { name: "Tidal", category: "Streaming", icon: <Globe size={24} /> },
    { name: "Pandora", category: "Streaming", icon: <Rss size={24} /> },
    { name: "SoundCloud", category: "Streaming", icon: <Radio size={24} /> },
    { name: "TikTok", category: "Social", icon: <Video size={24} /> },
    { name: "Instagram", category: "Social", icon: <Instagram size={24} /> },
    { name: "Facebook", category: "Social", icon: <Facebook size={24} /> },
    { name: "Snapchat", category: "Social", icon: <Video size={24} /> },
    { name: "Triller", category: "Social", icon: <Barrel size={24} /> },
    { name: "Shazam", category: "Discovery", icon: <SatelliteDish size={24} /> },
    { name: "iHeartRadio", category: "Radio", icon: <Radio size={24} /> },
    { name: "Audiomack", category: "Streaming", icon: <Mic2 size={24} /> },
    { name: "Tencent", category: "Streaming", icon: <Tally4 size={24} /> },
    { name: "NetEase", category: "Streaming", icon: <Globe size={24} /> },
    { name: "JioSaavn", category: "Streaming", icon: <Music size={24} /> },
    { name: "Anghami", category: "Streaming", icon: <Podcast size={24} /> },
    { name: "Boomplay", category: "Streaming", icon: <Library size={24} /> },
    { name: "KKBox", category: "Streaming", icon: <Disc3 size={24} /> },
    { name: "Yandex Music", category: "Streaming", icon: <Music3Icon size={24} /> },
    { name: "VK Music", category: "Streaming", icon: <Headphones size={24} /> },
  ];

  return (
    <section className="py-28 bg-[#0B0E14]">
      {/* Heading */}
      <div className="text-center px-4">
        <h2 className="text-white text-4xl md:text-6xl font-bold">
          Distribution <span className="text-orange-500">Network</span>
        </h2>
        <p className="text-gray-400 mt-2 text-[16px]">
          A selection of our distribution partners
        </p>
      </div>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6 max-w-7xl mx-auto px-6">
        {platforms.map((p, index) => (
          <PlatformCard
            key={index}
            icon={p.icon}
            name={p.name}
            category={p.category}
          />
        ))}
      </div>

      {/* Footer */}
      <p className="text-center text-gray-500 mt-6 text-[15px]">
        + 120 more platforms worldwide
      </p>
    </section>
  );
}

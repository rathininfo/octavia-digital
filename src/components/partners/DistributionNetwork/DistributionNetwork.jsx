import PlatformCard from "../PlatformCard/PlatformCard";


export default function DistributionNetwork() {
  const platforms = [
    { name: "Spotify", category: "Streaming" },
    { name: "Apple Music", category: "Streaming" },
    { name: "Amazon Music", category: "Streaming" },
    { name: "YouTube Music", category: "Streaming" },
    { name: "Tidal", category: "Streaming" },
    { name: "Pandora", category: "Streaming" },
    { name: "SoundCloud", category: "Streaming" },
    { name: "TikTok", category: "Social" },
    { name: "Instagram/Facebook", category: "Social" },
    { name: "Snapchat", category: "Social" },
    { name: "Triller", category: "Social" },
    { name: "Shazam", category: "Discovery" },
    { name: "iHeartRadio", category: "Radio" },
    { name: "Audiomack", category: "Streaming" },
    { name: "Napster", category: "Streaming" },
    { name: "Tencent", category: "Streaming" },
    { name: "NetEase", category: "Streaming" },
    { name: "JioSaavn", category: "Streaming" },
    { name: "Anghami", category: "Streaming" },
    { name: "Boomplay", category: "Streaming" },
    { name: "KKBox", category: "Streaming" },
    { name: "Yandex Music", category: "Streaming" },
    { name: "VK Music", category: "Streaming" },
  ];

  return (
    <section className="py-28 bg-[#0B0E14]">
      <div className="text-center">
        <h2 className="text-white text-[32px] font-bold">
          Distribution <span className="text-orange-500">Network</span>
        </h2>
        <p className="text-gray-400 mt-2 text-[16px]">
          A selection of our distribution partners
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6 max-w-7xl mx-auto px-6">
        {platforms.map((p, index) => (
          <PlatformCard
            key={index}
            icon={<i className="ri-music-2-fill"></i>}
            name={p.name}
            category={p.category}
          />
        ))}
      </div>

      <p className="text-center text-gray-500 mt-6 text-[15px]">
        + 120 more platforms worldwide
      </p>
    </section>
  );
}

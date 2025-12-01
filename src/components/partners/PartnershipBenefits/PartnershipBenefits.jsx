export default function PartnershipBenefits() {
  const benefits = [
    {
      icon: "🌍",
      title: "Global Reach",
      desc: "Access to 150+ platforms across every continent and region.",
    },
    {
      icon: "⚡",
      title: "Fast Delivery",
      desc: "Your music goes live on all platforms within 24–48 hours.",
    },
    {
      icon: "📊",
      title: "One Dashboard",
      desc: "Manage all your releases and analytics from a single place.",
    },
    {
      icon: "💰",
      title: "Direct Payments",
      desc: "Collect royalties from all platforms in one consolidated payment.",
    },
  ];

  return (
    <section className="py-24 bg-[#0D0F15]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Title */}
        <h2 className="text-white text-[34px] font-bold">
          Partnership <span className="text-orange-500">Benefits</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 mt-2 text-[16px]">
          Why our distribution network matters for your music career
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-[#0F1118] border border-[#1A1D25] rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-lg hover:shadow-black/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{item.icon}</div>

              {/* Title */}
              <h3 className="text-white text-[20px] font-semibold mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-[15px] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

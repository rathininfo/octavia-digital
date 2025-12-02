import { Zap, Star, Crown, Check } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      title: "Starter",
      desc: "Perfect for artists just getting started",
      price: "Free",
      icon: Zap,
      highlight: false,
      features: [
        "1 release per year",
        "All major platforms",
        "Basic analytics",
        "Standard support",
        "Keep 80% royalties",
      ],
      buttonText: "Get Started",
      buttonStyle: "border border-[#2A2B31] text-white",
    },
    {
      title: "Pro",
      desc: "For serious artists ready to grow",
      price: "$19.99",
      icon: Star,
      highlight: true,
      features: [
        "Unlimited releases",
        "150+ platforms",
        "Advanced analytics",
        "Priority support",
        "Keep 100% royalties",
        "Playlist pitching",
        "Pre-save campaigns",
        "Custom release dates",
      ],
      buttonText: "Go Pro",
      buttonStyle: "bg-[#FF7A29] text-white hover:bg-[#ff8e40]",
    },
    {
      title: "Label",
      desc: "For labels and professional artists",
      price: "$49.99",
      icon: Crown,
      highlight: false,
      features: [
        "Everything in Pro",
        "Unlimited artists",
        "Team management",
        "Dedicated manager",
        "White-label options",
        "API access",
        "Custom contracts",
        "Revenue splitting",
      ],
      buttonText: "Contact Sales",
      buttonStyle: "border border-[#2A2B31] text-white",
    },
  ];

  return (
    <section className="py-28 bg-[#0B0D11] px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {plans.map((p, i) => (
          <PricingCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}

function PricingCard({
  title,
  desc,
  price,
  icon: Icon,
  highlight,
  features,
  buttonText,
  buttonStyle,
}) {
  return (
    <div
      className={`
        relative p-10 rounded-2xl transition-all
        ${
          highlight
            ? "bg-gradient-to-b from-[#1d0f07] to-[#0f0f11] border border-[#B8611A] shadow-[0_-10px_90px_-10px_rgba(255,122,41,0.3)] scale-[1.02]"
            : "bg-[#0F1117] border border-[#1F2026]"
        }
      `}
    >
      {/* Most Popular Badge */}
      {highlight && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2">
          <span className="px-5 py-1.5 text-sm font-semibold bg-[#FF7A29] text-white rounded-full shadow-md">
            Most Popular
          </span>
        </div>
      )}

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-[#1C1C1E] flex items-center justify-center mb-6">
        <Icon size={26} className="text-[#FF7A29]" />
      </div>

      {/* Title */}
      <h3 className="text-white text-2xl font-semibold">{title}</h3>

      {/* Description */}
      <p className="text-gray-400 text-sm mt-1 mb-6">{desc}</p>

      {/* Price */}
      <p className="text-white text-4xl font-extrabold mb-6">
        {price}
        {price !== "Free" && (
          <span className="text-gray-400 text-lg font-normal">/year</span>
        )}
      </p>

      {/* Features */}
      <ul className="space-y-4 mb-10">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-300 leading-tight">
            <div className="w-5 h-5 rounded-full bg-[#1C1C1E] flex items-center justify-center">
              <Check size={14} className="text-[#FF7A29]" />
            </div>
            <span className="text-[15px]">{f}</span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        className={`w-full py-3 rounded-xl font-semibold text-[15px] transition ${buttonStyle}`}
      >
        {buttonText}
      </button>
    </div>
  );
}

import { Check, Zap, Star, Crown } from "lucide-react";

export default function PricingCard({
  icon,
  title,
  price,
  desc,
  features,
  highlight,
}) {
  const icons = {
    zap: Zap,
    star: Star,
    crown: Crown,
  };

  const Icon = icons[icon];

  return (
    <div
      className={`relative rounded-3xl p-10 border transition-all
        ${
          highlight
            ? "border-[#C46A1E] bg-gradient-to-b from-[#1A0F07] to-[#0E0E10] shadow-[0_-10px_80px_-10px_rgba(255,117,24,0.25)]"
            : "border-[#1E1F25] bg-[#0F1117]"
        }
      `}
    >
      {/* MOST POPULAR BADGE */}
      {highlight && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2">
          <span className="px-5 py-1.5 text-sm font-semibold bg-[#FF7A29] text-white rounded-full shadow-md">
            Most Popular
          </span>
        </div>
      )}

      {/* ICON */}
      <div className="mb-6 w-12 h-12 rounded-xl bg-[#1C1C1E] flex items-center justify-center">
        <Icon size={26} className="text-[#FF7A29]" />
      </div>

      {/* TITLE / DESCRIPTION */}
      <h3 className="text-2xl font-semibold mb-1">{title}</h3>
      <p className="text-gray-400 text-sm mb-6">{desc}</p>

      {/* PRICE */}
      {price ? (
        <p className="text-4xl font-extrabold mb-6">
          ${price}
          <span className="text-base text-gray-400 font-normal">/year</span>
        </p>
      ) : (
        <p className="text-4xl font-extrabold mb-6">Free</p>
      )}

      {/* FEATURES */}
      <ul className="space-y-4 mb-10">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-gray-300">
            <div className="w-6 h-6 flex items-center justify-center bg-[#1C1C1E] rounded-full">
              <Check size={15} className="text-[#FF7A29]" />
            </div>
            {f}
          </li>
        ))}
      </ul>

      {/* BUTTON */}
      {highlight ? (
        <button className="w-full py-3 bg-[#FF7A29] text-white font-semibold rounded-xl hover:bg-[#ff8a40] transition text-[15px]">
          Go Pro
        </button>
      ) : title === "Starter" ? (
        <button className="w-full py-3 border border-[#2A2B31] text-white rounded-xl hover:bg-[#1A1C22] transition text-[15px]">
          Get Started
        </button>
      ) : (
        <button className="w-full py-3 border border-[#2A2B31] text-white rounded-xl hover:bg-[#1A1C22] transition text-[15px]">
          Contact Sales
        </button>
      )}
    </div>
  );
}

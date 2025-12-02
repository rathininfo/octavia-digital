// components/learn/Categories.jsx
import React from "react";
import { BookOpen, MapPin, Megaphone, DollarSign } from "lucide-react";

const cards = [
  { title: "Getting Started", count: 8, icon: BookOpen },
  { title: "Distribution", count: 12, icon: MapPin },
  { title: "Promotion", count: 10, icon: Megaphone },
  { title: "Monetization", count: 6, icon: DollarSign },
];

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c, idx) => {
          const Icon = c.icon;
          return (
            <div
              key={idx}
              className="bg-[#0F1116] border border-[#1A1D25] rounded-2xl p-6 flex items-center gap-4 hover:shadow-[0_8px_40px_rgba(255,122,41,0.06)] transition"
            >
              <div className="w-10 h-10 rounded-md bg-[#1B1B1D] flex items-center justify-center text-orange-400">
                <Icon size={18} strokeWidth={1.8} />
              </div>

              <div className="flex-1">
                <h4 className="text-white font-semibold">{c.title}</h4>
                <p className="text-gray-400 text-sm mt-1">{c.count} articles</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

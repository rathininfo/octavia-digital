// components/learn/LearnHero.jsx
import React from "react";

export default function LearnHero() {
  return (
    <section className="relative bg-[#0D0F15] overflow-hidden mt-24">
      {/* subtle centered radial glow */}
      <div className="absolute inset-0 pointer-events-none flex justify-center">
        <div className="w-[700px] h-[380px] bg-gradient-to-b from-[#2b1308]/20 to-transparent rounded-full blur-[120px] opacity-90 translate-y-10"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="inline-block px-4 py-1 border border-[#3d2a21] rounded-full text-orange-400 bg-transparent text-sm mb-6">
          Learn Center
        </div>

        <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight max-w-3xl mx-auto">
          Resources to Help You <span className="text-orange-500">Grow</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
          Guides, tutorials, and answers to help you make the most of your music distribution.
        </p>
      </div>
    </section>
  );
}

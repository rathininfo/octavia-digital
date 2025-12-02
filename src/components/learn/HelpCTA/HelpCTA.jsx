// components/learn/HelpCTA.jsx
import React from "react";

export default function HelpCTA() {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">

        {/* Heading */}
        <h3 className="text-white text-4xl md:text-6xl font-bold">
          Still Have <span className="text-orange-500">Questions?</span>
        </h3>

        {/* Subtext */}
        <p className="text-gray-400 mt-3 text-base sm:text-lg leading-relaxed">
          Our support team is here to help you 24/7.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">

          {/* Contact Support */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-xl font-semibold text-[15px] w-full sm:w-auto transition">
            Contact Support →
          </button>

          {/* Get Started */}
          <button className="border border-[#2A2B31] hover:border-gray-500 text-white px-7 py-3 rounded-xl font-semibold text-[15px] w-full sm:w-auto transition">
            Get Started Free
          </button>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";

export default function PricingHero() {
  return (
    <section className="relative w-full bg-[#0B0B0C] text-white py-28 overflow-hidden mt-20">

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Simple, Transparent
          <br />
          <span className="text-orange-500">Pricing</span>
        </h1>

        {/* Sub Text */}
        <p className="mt-6 text-lg md:text-xl text-gray-300">
          Choose the plan that fits your needs. No hidden fees, no surprises.
        </p>
      </div>
    </section>
  );
}

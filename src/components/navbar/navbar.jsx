"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.png"; // adjust the path according to your folder structure

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0F]/90 backdrop-blur-lg border-b border-[#1F1F2A]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
        <Image src={Logo} alt="Octavia Digital Logo" width={55} priority />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[var(--paragraph-color)]">
          <Link href="/why-octavia" className="hover:text-[var(--accent)] transition">Why Octavia</Link>
          <Link href="/services" className="hover:text-[var(--accent)] transition">Services</Link>
          <Link href="/partners" className="hover:text-[var(--accent)] transition">Partners</Link>
          <Link href="/pricing" className="hover:text-[var(--accent)] transition">Pricing</Link>
          <Link href="/learn" className="hover:text-[var(--accent)] transition">Learn</Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-[var(--paragraph-color)] hover:text-[var(--accent)] transition">
            Log In
          </Link>
          <Link
            href="/get-started"
            className="bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-black font-semibold px-4 py-2 rounded-lg transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[var(--foreground)]"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0A0A0F] border-t border-[#1F1F2A] py-4 px-6">
          <div className="flex flex-col gap-4 text-[var(--paragraph-color)]">
            <Link href="/why-octavia" className="hover:text-[var(--accent)]">Why Octavia</Link>
            <Link href="/services" className="hover:text-[var(--accent)]">Services</Link>
            <Link href="/partners" className="hover:text-[var(--accent)]">Partners</Link>
            <Link href="/pricing" className="hover:text-[var(--accent)]">Pricing</Link>
            <Link href="/learn" className="hover:text-[var(--accent)]">Learn</Link>

            <hr className="border-[#1F1F2A]" />

            <Link href="/login" className="hover:text-[var(--accent)] px-4 py-2 rounded-lg font-semibold border-2">Log In</Link>

            <Link
              href="/get-started"
              className="bg-[var(--accent)] text-black px-4 py-2 rounded-lg font-semibold"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

"use client";

import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white flex flex-col lg:flex-row">
      {/* Left Section */}
      <div className="hidden lg:flex flex-1 px-16 xl:px-32 flex-col justify-center bg-gradient-to-br from-[#1a0f08] via-[#0F0A06] to-transparent
      ">
        <div className="mb-6">
          <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center">
            <span className="text-3xl">🎵</span>
          </div>
        </div>

        <h1 className="text-4xl xl:text-5xl font-extrabold leading-tight">
          Start Your <span className="text-orange-500">Music Career</span>
        </h1>

        <p className="text-gray-400 mt-4 text-lg max-w-md">
          Join the fastest-growing music distribution platform and get your music heard worldwide.
        </p>

        <div className="space-y-4 mt-10">
          {[
            "Distribute to 150+ platforms",
            "Keep 100% of your royalties",
            "Real-time analytics dashboard",
            "24/7 artist support",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                <Check size={14} />
              </div>
              <span className="text-gray-300 text-lg">{item}</span>
            </div>
          ))}
        </div>
</div>

      {/* Right Section */}
      <div className="flex flex-1 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32 flex-col justify-center py-10">
        {/* Back Button */}
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-8"
        >
          <ArrowLeft size={18} /> Back to home
        </Link>

        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-bold">Create your account</h1>
        <p className="text-gray-400 mt-2 mb-8">
          Start distributing your music in minutes
        </p>

        {/* Form */}
        <form className="space-y-5 max-w-xl w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First name"
              className="bg-[#1A1D24] border border-[#2A2D33] rounded-lg px-4 py-3 w-full"
            />
            <input
              type="text"
              placeholder="Last name"
              className="bg-[#1A1D24] border border-[#2A2D33] rounded-lg px-4 py-3 w-full"
            />
          </div>

          <input
            type="text"
            placeholder="Artist/Band name"
            className="bg-[#1A1D24] border border-[#2A2D33] rounded-lg px-4 py-3 w-full"
          />

          <input
            type="email"
            placeholder="Email"
            className="bg-[#1A1D24] border border-[#2A2D33] rounded-lg px-4 py-3 w-full"
          />

          <input
            type="password"
            placeholder="Create a strong password"
            className="bg-[#1A1D24] border border-[#2A2D33] rounded-lg px-4 py-3 w-full"
          />

          {/* Checkbox */}
          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <p className="text-sm text-gray-400">
              I agree to the{" "}
              <span className="text-orange-500 cursor-pointer">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-orange-500 cursor-pointer">
                Privacy Policy
              </span>
            </p>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-3 rounded-lg font-semibold">
            Create Account
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-3 max-w-xl w-full">
            <div className="flex-1 h-[1px] bg-gray-700" />
            <span className="text-gray-400 text-sm">OR SIGN UP WITH</span>
            <div className="flex-1 h-[1px] bg-gray-700" />
          </div>

          {/* Social Buttons */}
          <div className="flex gap-4 max-w-xl w-full">
            <button className="flex-1 border border-gray-600 hover:bg-[#1A1D24] py-3 rounded-lg font-medium flex items-center justify-center gap-2">
              G Google
            </button>
            <button className="flex-1 border border-gray-600 hover:bg-[#1A1D24] py-3 rounded-lg font-medium flex items-center justify-center gap-2">
              X Twitter
            </button>
          </div>
        </form>

        <p className="text-center text-gray-400 mt-8">
          Already have an account?{" "}
          <Link href="/login" className="text-orange-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

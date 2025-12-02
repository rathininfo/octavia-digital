// Updated Login Component using react-icons instead of lucide-react
"use client";
import { useState } from "react";
import Link from "next/link";

// React Icons
import { FaEye, FaArrowLeft, FaLock, FaEnvelope, FaFacebookF, FaGoogle } from "react-icons/fa";
import { GiMusicalNotes } from "react-icons/gi";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen flex bg-[#0B0E14] mx-auto">
      {/* Left Section */}
      <div className=" flex flex-col justify-center px-6 sm:px-12 lg:pl-32 py-10 w-full">

        {/* Back Button */}
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-300 hover:text-white mb-10"
        >
          <FaArrowLeft size={18} /> Back to home
        </Link>

        {/* Title */}
        <h2 className="text-4xl font-bold text-white">Welcome back</h2>
        <p className="text-gray-400 mt-2">Sign in to your account to continue</p>

        {/* Form */}
        <form className="mt-10 space-y-6 max-w-md">

          {/* Email */}
          <div>
            <label className="text-gray-300 text-sm">Email</label>
            <div className="relative mt-2">
              <FaEnvelope className="absolute left-4 top-3 text-gray-500" size={18} />
              <input
                type="email"
                placeholder="artist@example.com"
                className="w-full pl-12 pr-4 py-3 bg-[#11141B] border border-[#1F232C] text-white rounded-lg outline-none focus:border-orange-500 transition"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between">
              <label className="text-gray-300 text-sm">Password</label>
              <Link href="/forgot-password" className="text-orange-500 text-sm">
                Forgot password?
              </Link>
            </div>

            <div className="relative mt-2">
              <FaLock className="absolute left-4 top-3 text-gray-500" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full pl-12 pr-12 py-3 bg-[#11141B] border border-[#1F232C] text-white rounded-lg outline-none focus:border-orange-500 transition"
              />
              <FaEye
                size={20}
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-gray-500 cursor-pointer"
              />
            </div>
          </div>

          {/* Submit */}
          <button className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-lg text-white font-semibold text-lg">
            Sign In
          </button>
        </form>

        {/* Divider */}
       <div className="mt-10 max-w-md w-full flex items-center gap-4 text-gray-500">
  <div className="flex-1 h-px bg-[#1F232C]"></div>
  <span className="px-2 text-sm">OR CONTINUE WITH</span>
  <div className="flex-1 h-px bg-[#1F232C]"></div>
</div>

        {/* Social Buttons */}
        <div className="mt-8 flex gap-4 max-w-md">

          {/* Google Button */}
          <button className="flex-1 border border-[#1F232C] py-3 rounded-lg text-white flex items-center justify-center gap-2 hover:bg-[#14171F] transition">
            <FaGoogle size={18} className="text-white" /> Google
          </button>

          {/* Facebook Button */}
          <button className="flex-1 border border-[#1F232C] py-3 rounded-lg text-white flex items-center justify-center gap-2 hover:bg-[#14171F] transition">
            <FaFacebookF size={20} className="text-blue-500" /> Facebook
          </button>

        </div>

        {/* Sign Up Link */}
        <p className="mt-10 text-gray-400">
          Don't have an account?{" "}
          <Link href="/get-started" className="text-orange-500 font-semibold">
            Get Started
          </Link>
        </p>
      </div>

      {/* Right Section */}
      <div className="hidden w-full lg:flex items-center justify-center bg-gradient-to-br from-[#1a0f08] via-[#0F0A06] to-transparent">
        <div className="text-center max-w-md">
          <div className="flex justify-center mb-6">
            <div className="bg-orange-500 w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl">
              <GiMusicalNotes size={40} className="text-white" />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white">
            Your Music Journey
            <br />
            <span className="text-orange-500">Starts Here</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Join 50,000+ artists who trust Octavia Digital to distribute their music worldwide.
          </p>
        </div>
      </div>
    </main>
  );
}
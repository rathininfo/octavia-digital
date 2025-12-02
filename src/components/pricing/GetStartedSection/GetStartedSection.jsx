export default function GetStartedSection() {
  return (
    <section className="py-20 bg-[#0D0F15] text-center px-6">
      <h2 className="text-white text-4xl sm:text-5xl font-bold">
        Ready to Get <span className="text-orange-500">Started?</span>
      </h2>

      <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-xl mx-auto">
        Start with our free plan and upgrade whenever you're ready.
      </p>

      <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition">
        Create Free Account
      </button>
    </section>
  );
}

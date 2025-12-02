export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#0B0E14] text-center">
      
      {/* Heading */}
      <h2 className="text-white font-bold 
        text-4xl sm:text-5xl lg:text-6xl 
        leading-tight max-w-3xl mx-auto px-4">
        Get Your Music <span className="text-orange-500">Everywhere</span>
      </h2>

      {/* Subtitle */}
      
      <p className="text-gray-400 mt-4 
        text-[14px] sm:text-[16px] 
        max-w-xl mx-auto px-4 leading-relaxed">
        Start distributing to 150+ platforms today. It only takes a few minutes.
      </p>

      {/* Button */}
      <button
        className="mt-8 bg-orange-500 hover:bg-orange-600 
        text-white px-6 sm:px-8 lg:px-10 
        py-3 sm:py-3.5 lg:py-4 
        rounded-lg font-semibold 
        text-[15px] sm:text-[16px] lg:text-[17px] 
        transition-all duration-200"
      >
        Start Distributing →
      </button>
    </section>
  );
}

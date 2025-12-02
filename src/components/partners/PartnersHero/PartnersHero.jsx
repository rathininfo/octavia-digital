export default function PartnersHero() {
  return (
    <section className="py-16 md:py-24 text-center bg-[#0D0F15] px-4">
      
      {/* Tag */}
      <div className="inline-block px-4 py-1 border border-orange-500 text-orange-500 rounded-full text-lg md:text-2xl mb-6">
        Our Partners
      </div>

      {/* Heading */}
      <h1
        className="
          text-white font-bold 
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
          leading-tight max-w-3xl mx-auto
        "
      >
        Your Music on <span className="text-orange-500">150+ Platforms</span>
      </h1>

      {/* Paragraph */}
      <p
        className="
          text-gray-400 mt-4 mx-auto 
          text-sm sm:text-base md:text-lg 
          max-w-xl sm:max-w-2xl
        "
      >
        We’ve partnered with every major streaming platform, social network, and music service to ensure your music reaches every corner of the world.
      </p>
    </section>
  );
}

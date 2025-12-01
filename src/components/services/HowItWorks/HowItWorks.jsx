export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Upload",
      text: "Upload your tracks, add artwork, and fill in your release details.",
    },
    {
      number: "02",
      title: "Review",
      text: "Our team reviews your submission to ensure quality standards.",
    },
    {
      number: "03",
      title: "Distribute",
      text: "Your music goes live on 150+ platforms within 24–48 hours.",
    },
  ];

  return (
    <section className="py-24 bg-background text-center">
      {/* Heading */}
      <h2 className="text-6xl font-bold text-white">
        How It <span className="text-orange-500">Works</span>
      </h2>
      <p className="text-gray-400 mt-3 text-[15px]">
        Get your music live in three simple steps
      </p>

      {/* Steps */}
      <div className="relative mt-20 max-w-5xl mx-auto grid md:grid-cols-3 gap-12 px-6">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center relative">

            {/* Number Circle */}
            <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-[20px] shadow-lg">
              {step.number}
            </div>

            {/* Dashed Line */}
            {i !== steps.length - 1 && (
              <div className="hidden md:block absolute top-10 left-[60%] w-full border-t-2 border-dashed border-gray-700"></div>
            )}

            {/* Title */}
            <h3 className="text-white mt-6 font-semibold text-[18px]">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 mt-2 text-[15px] leading-relaxed">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

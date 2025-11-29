export default function HowItWorks() {
  const steps = [
    { number: "01", title: "Upload", text: "Upload your tracks, add artwork, and fill release details." },
    { number: "02", title: "Review", text: "Our team checks everything to ensure quality." },
    { number: "03", title: "Distribute", text: "Your music goes live on 150+ platforms within 24–48 hours." },
  ];

  return (
    <section className="py-20 bg-[#0d0d0d] text-center">
      <h2 className="text-3xl font-bold text-white">
        How It <span className="text-orange-400">Works</span>
      </h2>

      <div className="mt-14 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full border border-orange-500 text-orange-400 text-2xl font-bold">
              {step.number}
            </div>
            <h3 className="text-white mt-4 font-semibold">{step.title}</h3>
            <p className="text-gray-400 mt-2 text-sm">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

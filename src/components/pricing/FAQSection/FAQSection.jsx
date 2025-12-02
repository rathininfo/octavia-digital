export default function FAQSection() {
  const faqs = [
    {
      q: "Can I switch plans anytime?",
      a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit cards, PayPal, and bank transfers for annual plans.",
    },
    {
      q: "Is there a contract or commitment?",
      a: "No long-term contracts. Cancel anytime. Your music stays live even after cancellation.",
    },
    {
      q: "How do royalties work?",
      a: "Royalties are collected monthly from all platforms and paid out once you reach the minimum threshold of $10.",
    },
  ];

  return (
    <section className="py-20 bg-[#0B0E14] px-6">
      <h2 className="text-center text-white text-4xl sm:text-5xl font-bold mb-12">
        Frequently Asked <span className="text-orange-500">Questions</span>
      </h2>

      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-xl border border-[#1A1D25] bg-[#0F1116] shadow-sm"
          >
            <h3 className="text-white text-lg font-semibold">{item.q}</h3>
            <p className="text-gray-400 mt-2">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

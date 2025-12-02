// components/learn/CommonQuestions.jsx
import React from "react";

const faqs = [
  { q: "How long does it take for my music to go live?", a: "Most releases go live within 24–48 hours on major platforms. Some platforms may take up to 5–7 days." },
  { q: "Can I change my release after it’s live?", a: "Yes, you can update metadata, artwork, and other details. Changes typically reflect within 48 hours." },
  { q: "How do I get verified on Spotify?", a: "Once your music is distributed, claim your Spotify for Artists profile. We provide step-by-step guidance." },
  { q: "What audio formats do you accept?", a: "We accept WAV and FLAC files at 16-bit/44.1kHz or higher. MP3s are not accepted for distribution." },
  { q: "When do I receive my royalties?", a: "Royalties are paid monthly once you reach the $10 minimum threshold. Payments are made via PayPal or bank transfer." },
  { q: "Can I distribute cover songs?", a: "Yes, but you need a mechanical license first. We can help guide you through the process." },
];

export default function CommonQuestions() {
  return (
    <section className="py-12 bg-[#0B0E14]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-white text-4xl md:text-6xl font-bold mb-8">
          <span className="text-white">Common</span> <span className="text-orange-500">Questions</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((f, i) => (
            <div key={i} className="p-6 rounded-xl bg-[#0F1116] border border-[#1A1D25]">
              <h4 className="text-white font-semibold mb-2">{f.q}</h4>
              <p className="text-gray-400 text-sm">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

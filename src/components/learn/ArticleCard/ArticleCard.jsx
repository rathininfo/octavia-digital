// components/learn/ArticleCard.jsx
import React from "react";
import { Clock } from "lucide-react";

export default function ArticleCard({
  tag = "Getting Started",
  title,
  readTime = "5 min",
  author = "Octavia Team",
  highlight = false,
}) {
  return (
    <article
      className={`relative rounded-xl p-5 border ${
        highlight ? "border-[#B8611A] shadow-[0_10px_60px_-20px_rgba(255,122,41,0.18)]" : "border-[#1A1D25]"
      } bg-[#0F1116] transition`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="inline-flex items-center gap-2">
          <span className="px-2 py-1 rounded text-xs text-orange-400 bg-[#1B1109]">{tag}</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-400">
          <span className="flex items-center gap-2">
            <Clock size={14} />
            <span className="text-xs">{readTime}</span>
          </span>
          <span className="text-xs">• {author}</span>
        </div>
      </div>

      <h3 className="text-white font-semibold text-lg leading-snug mb-2">
        {title}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed">
        A short excerpt that summarizes the article and invites the reader to open it and read more.
      </p>
    </article>
  );
}

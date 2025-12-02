// components/learn/PopularArticles.jsx
import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";

const sample = [
  { tag: "Getting Started", title: "How to Upload Your First Release", readTime: "5 min", highlight: false },
  { tag: "Monetization", title: "Understanding Music Royalties", readTime: "8 min", highlight: false },
  { tag: "Promotion", title: "Playlist Pitching Best Practices", readTime: "6 min", highlight: false },
  { tag: "Promotion", title: "Pre-Save Campaign Guide", readTime: "7 min", highlight: false },
  { tag: "Distribution", title: "Metadata Best Practices", readTime: "4 min", highlight: true },
  { tag: "Getting Started", title: "Understanding Analytics Dashboard", readTime: "10 min", highlight: false },
];

export default function PopularArticles() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-white text-2xl font-bold mb-6">Popular Articles</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sample.map((s, i) => (
          <ArticleCard
            key={i}
            tag={s.tag}
            title={s.title}
            readTime={s.readTime}
            highlight={s.highlight}
          />
        ))}
      </div>
    </section>
  );
}

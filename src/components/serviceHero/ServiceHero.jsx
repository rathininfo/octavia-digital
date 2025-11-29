export default function ServiceHero() {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-accent/10 border border-accent/20 text-accent">
          <span>⭐</span> Our Services
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-heading mt-6 leading-snug">
          Everything You Need to <span className="text-accent">Succeed</span>
        </h1>

        {/* Sub text */}
        <p className="text-paragraph max-w-2xl mt-4">
          From distribution to promotion, we provide all the tools you need to build a successful music career.
        </p>
      </div>
    </section>
  );
}

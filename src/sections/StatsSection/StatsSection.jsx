export default function StatsSection() {
  return (
    <section className="w-full bg-background py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          {/* Item 1 */}
          <div>
            <h3 className="text-4xl font-bold text-foreground">50K+</h3>
            <p className="text-paragraph mt-2">Artists</p>
          </div>

          {/* Item 2 */}
          <div>
            <h3 className="text-4xl font-bold text-foreground">1M+</h3>
            <p className="text-paragraph mt-2">Releases</p>
          </div>

          {/* Item 3 */}
          <div>
            <h3 className="text-4xl font-bold text-foreground">150+</h3>
            <p className="text-paragraph mt-2">Platforms</p>
          </div>

          {/* Item 4 */}
          <div>
            <h3 className="text-4xl font-bold text-foreground">$10M+</h3>
            <p className="text-paragraph mt-2">Paid to Artists</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default function StatsSection() {
  return (
    <section className="w-full bg-background py-14 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-14 text-center">

          {/* Item 1 */}
          <div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent">
              50K+
            </h3>
            <p className="mt-2 text-paragraph text-sm sm:text-base">
              Artists
            </p>
          </div>

          {/* Item 2 */}
          <div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent">
              1M+
            </h3>
            <p className="mt-2 text-paragraph text-sm sm:text-base">
              Releases
            </p>
          </div>

          {/* Item 3 */}
          <div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent">
              150+
            </h3>
            <p className="mt-2 text-paragraph text-sm sm:text-base">
              Platforms
            </p>
          </div>

          {/* Item 4 */}
          <div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent">
              $10M+
            </h3>
            <p className="mt-2 text-paragraph text-sm sm:text-base">
              Paid to Artists
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default function BrandCarousel() {
  return (
    <section className="relative bg-black py-16 sm:py-24 overflow-hidden">

      {/* TRANSISI */}
      <div className="absolute -top-24 left-0 h-24 w-full" />

      <p className="mb-8 sm:mb-12 text-center font-ui text-[12px] sm:text-[14px] font-bold uppercase tracking-widest text-zinc-500 px-6">
        Trusted by Leading Brands
      </p>

      <div className="marquee">
        <div className="marquee-track">

          {/* SET 1 */}
          <div className="marquee-set">
            <img src="/brands/brand1.png" alt="Brand 1" />
            <img src="/brands/brand2.png" alt="Brand 2" />
            <img src="/brands/brand3.png" alt="Brand 3" />
            <img src="/brands/brand4.png" alt="Brand 4" />
            <img src="/brands/brand5.png" alt="Brand 5" />
            <img src="/brands/brand6.png" alt="Brand 6" />
          </div>

          {/* SET 2 (DUPLIKAT IDENTIK) */}
          <div className="marquee-set">
            <img src="/brands/brand1.png" alt="Brand 1" />
            <img src="/brands/brand2.png" alt="Brand 2" />
            <img src="/brands/brand3.png" alt="Brand 3" />
            <img src="/brands/brand4.png" alt="Brand 4" />
            <img src="/brands/brand5.png" alt="Brand 5" />
            <img src="/brands/brand6.png" alt="Brand 6" />
          </div>

        </div>
      </div>
    </section>
  );
}

import heroImage from "@/assets/hero-lotus-v11.jpg";

export function HeroBanner() {
  return (
    <section className="relative mx-auto w-full px-3 md:px-6 pt-6 md:pt-10 pb-4 md:pb-6">
      <div aria-hidden className="pointer-events-none absolute inset-x-6 -top-4 h-40 bg-[radial-gradient(60%_100%_at_50%_0%,oklch(0.82_0.15_88/0.35),transparent_70%)] blur-2xl" />

      <div className="hero-frame group relative">
        <div className="relative overflow-hidden rounded-tl-[48px] rounded-br-[48px] rounded-tr-md rounded-bl-md md:rounded-tl-[80px] md:rounded-br-[80px]">
          <img
            src={heroImage}
            alt="Lotus365 hero banner with the brand's gold lotus emblem over cricket and live casino imagery"
            width={1920}
            height={1088}
            fetchPriority="high"
            className="block w-full h-auto select-none transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
            draggable={false}
          />
          <div aria-hidden className="hero-shine" />
          <span aria-hidden className="hero-spark hero-spark-1" />
          <span aria-hidden className="hero-spark hero-spark-2" />
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;

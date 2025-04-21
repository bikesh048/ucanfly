import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Fashion model in designer clothing"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative h-full container-custom flex flex-col justify-center">
        <div className="max-w-2xl text-white">
          <h1 className="heading-xl mb-4">
            Redefining luxury for the modern era
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light">
            Timeless elegance meets contemporary design in our latest collection
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#lookbook"
              className="btn-primary inline-block text-center"
            >
              Explore Collection
            </a>
            <a
              href="#about"
              className="px-6 py-3 border border-white text-white uppercase tracking-wider text-sm font-medium transition-all hover:bg-white/10 text-center"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

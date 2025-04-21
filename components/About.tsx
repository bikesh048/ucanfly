import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-lg mb-6">Our Philosophy</h2>
            <p className="mb-6 text-lg font-light leading-relaxed">
              Founded in 2020, LUXE represents a new paradigm in luxury fashion.
              We believe in creating timeless pieces that transcend seasonal
              trends, focusing on exceptional craftsmanship and sustainable
              practices.
            </p>
            <p className="mb-8 text-lg font-light leading-relaxed">
              Our designs blend traditional artisanal techniques with modern
              innovation, resulting in garments that are both distinctive and
              enduring. Each piece tells a story of dedication to quality and
              respect for our global community.
            </p>
            <a href="#lookbook" className="btn-primary inline-block">
              View Collection
            </a>
          </div>
          <div className="relative aspect-[3/4] w-full">
            <Image
              src="/images/about.jpg"
              alt="Fashion designer at work"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function Lookbook() {
  return (
    <section id="lookbook" className="section-padding bg-gray-100">
      <div className="container-custom">
        <h2 className="heading-lg mb-12 text-center">SS2025 Collection</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Lookbook Item 1 */}
          <div className="group">
            <div className="relative aspect-[2/3] overflow-hidden mb-4">
              <Image
                src="/images/lookbook4.jpg"
                alt="Fashion model in white dress"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl mb-1">Ethereal Elegance</h3>
            <p className="font-light">
              Delicate fabrics in flowing silhouettes
            </p>
          </div>

          {/* Lookbook Item 2 */}
          <div className="group">
            <div className="relative aspect-[2/3] overflow-hidden mb-4">
              <Image
                src="/images/lookbook1.jpg"
                alt="Fashion model in structured jacket"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl mb-1">Modern Structure</h3>
            <p className="font-light">
              Bold forms with architectural precision
            </p>
          </div>

          {/* Lookbook Item 3 */}
          <div className="group">
            <div className="relative aspect-[2/3] overflow-hidden mb-4">
              <Image
                src="/images/lookbook2.jpg"
                alt="Fashion model in evening wear"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl mb-1">Nocturnal Glamour</h3>
            <p className="font-light">
              Sophisticated evening attire reimagined
            </p>
          </div>
        </div>

        {/* Feature Image */}
        <div className="mt-16 relative aspect-[21/9] w-full overflow-hidden">
          <Image
            src="/images/lookbook3.jpg"
            alt="Fashion runway finale"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="heading-lg mb-6">Crafted with Passion</h2>
              <p className="max-w-2xl mx-auto text-lg font-light mb-8">
                Every piece in our collection is meticulously designed and
                ethically produced, embracing sustainable practices and timeless
                elegance.
              </p>
              <a
                href="#contact"
                className="btn-primary inline-block bg-white text-gray-900 hover:bg-gray-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

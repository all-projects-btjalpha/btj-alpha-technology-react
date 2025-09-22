import { useEffect } from "react";

function Portfolio() {
  const images = [
    { src: "/admirer.png", alt: "Portfolio 1" },
    { src: "/btjnonbrokerage.png", alt: "Portfolio 2" },
    { src: "/portfolio/p4.webp", alt: "Portfolio 3" },
    { src: "/btjalphatechnology.png", alt: "Portfolio 4" },
    { src: "/portfolio/p5.webp", alt: "Portfolio 5" },
    { src: "/portfolio/p6.webp", alt: "Portfolio 6" },
    { src: "/portfolio/D.webp", alt: "Portfolio 7" },
    { src: "/portfolio/just2.webp", alt: "Portfolio 8" },
    { src: "/portfolio/p3.webp", alt: "Portfolio 9" },
  ];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="px-12 max-md:px-2 py-20 max-md:py-8 mt-12">
      <div className="grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
        {images.map((img, index) => (
          <div
            key={index}
            className="h-[400px] overflow-hidden rounded-xl mb-5 max-md:mb-10"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-top object-cover transition-transform duration-300 transform hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;

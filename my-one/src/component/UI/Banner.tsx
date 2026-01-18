import { useState } from "react";

type BannerProps = {
  images: string[];
};

export default function Banner({ images }: BannerProps) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[calc(100vh-85px)] max-h-[calc(100vh-85px)] overflow-hidden">
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img
              src={img}
              className="w-full h-full object-cover"
              alt={`slide-${index}`}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white w-16 h-16 rounded-full flex items-center justify-center transition-all z-10 shadow-lg hover:scale-110 active:scale-95"
        aria-label="Previous slide"
      >
        <span className="text-3xl font-extralight">‹</span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white w-16 h-16 rounded-full flex items-center justify-center transition-all z-10 shadow-lg hover:scale-110 active:scale-95"
        aria-label="Next slide"
      >
        <span className="text-3xl font-extralight">›</span>
      </button>

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-300 rounded-full ${
                index === current
                  ? "bg-white w-6 h-2"
                  : "bg-white/50 hover:bg-white/80 w-2 h-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

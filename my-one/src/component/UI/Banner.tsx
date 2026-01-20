import { useState, useEffect } from "react";
import leftArrow from '../../assets/icon/left-arrow.png'
import rightArrow from '../../assets/icon/right-arrow.png'
type BannerProps = {
  images: string[];
};

const AUTO_DURATION = 5000;

export default function Banner({ images }: BannerProps) {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  // Auto slide
  useEffect(() => {
    if (images.length <= 1) return;

    const slideTimer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, AUTO_DURATION);

    return () => clearInterval(slideTimer);
  }, [images.length]);

 
  useEffect(() => {
    setProgress(0);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 100 / (AUTO_DURATION / 100);
      });
    }, 100);

    return () => clearInterval(progressTimer);
  }, [current]);

  return (
    <div className="relative w-full h-[calc(100vh-85px)] max-h-[calc(100vh)] overflow-hidden ">
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
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white w-13.5 h-13.5 rounded-full flex items-center justify-center transition-all z-10 shadow-lg hover:scale-110 active:scale-95"
      >
        <img src={leftArrow} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white 
        w-[55px] h-[55px]
        rounded-full flex items-center justify-center transition-all z-10 shadow-lg hover:scale-110 active:scale-95"
      >
        <img src={rightArrow} />
      </button>

      {images.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[35%] flex gap-4 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="relative flex-1 text-left"
            >
              <div className="h-[3px] rounded-full overflow-hidden bg-white/40">
                {current === index && (
                  <div
                    className="h-full bg-white transition-all"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

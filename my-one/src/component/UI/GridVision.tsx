import { useState, useRef } from "react";
import SectionHeader from "../home/template/SectionHeader";
import Container from "../layout/Container";
type GridVisionProps = {
  images: string[];
};

const hoverTexts = [
  "พาเหรด",
  "เดอะสตอรี่ส์",
  "เดอะ ไวร์เลส เฮาส์ วัน แบงค็อก",
  "คอลเลคชั่นศิลปะสาธารณะ",
  "เดอะ ริทซ์-คาร์ลตัน กรุงเทพฯ",
  "แอนดาซ วัน แบงค็อก",
];

export default function GridVision({ images }: GridVisionProps) {
  const [current, setCurrent] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    const container = scrollContainerRef.current;
    if (container) {
      setStartX(e.pageX - container.offsetLeft);
      setScrollLeft(container.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setHoveredIndex(null);
  };

  return (
    <Container>
      <div className="w-full mx-auto mt-10 mb-30">
        <SectionHeader
          title="เปิดมุมมองใหม่ใน วัน แบงค็อก"
          className="font-[OneBangkok]"
        />

        <div
          ref={scrollContainerRef}
          className={`overflow-x-auto scrollbar-hide ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          style={{
            scrollBehavior: isDragging ? "auto" : "smooth",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div className="flex gap-6 pt-12 pb-8">
            {images.map((img, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 transition-all duration-300 ease-out"
                style={{
                  userSelect: "none",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <div
                  className="relative w-60 h-60 rounded-lg overflow-hidden shadow-lg"
                  style={{
                    transform:
                      hoveredIndex === index
                        ? "translateY(-20px)"
                        : "translateY(0)",
                    boxShadow:
                      hoveredIndex === index
                        ? "0 25px 50px rgba(0,0,0,0.3)"
                        : "0 10px 25px rgba(0,0,0,0.15)",
                    transition: "all 0.3s ease-out",
                  }}
                >
                  <img
                    src={img}
                    alt={hoverTexts[index] || `มุมมองที่ ${index + 1}`}
                    draggable="false"
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => !isDragging && setCurrent(index)}
                  />

                  {/* Text Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent 
                    flex items-end justify-center pb-6 transition-opacity duration-300 font-[OneBangkok]"
                    style={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      pointerEvents: "none",
                    }}
                  >
                    <h3 className="text-white text-lg font-semibold px-4 text-center">
                      {hoverTexts[index] || `มุมมองที่ ${index + 1}`}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      </div>
    </Container>
  );
}

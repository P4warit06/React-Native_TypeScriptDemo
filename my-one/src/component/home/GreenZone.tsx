import Container from "../layout/Container";
import SectionHeader from "./template/SectionHeader";
import Garden from "../../assets/GreenOpen/Garden.jpg";
import OpenSpace from "../../assets/GreenOpen/OpenSpace.jpg";
import SpecialEvent from "../../assets/GreenOpen/กิจกรรมพิเศษ.jpg";
import Community from "../../assets/GreenOpen/CommunityHub.webp";
import GreenZoneOpen from "../../assets/GreenOpen/GreenZoneOpen.jpg";

export default function GreenZone() {
  const areas = [
    { title: "สวนใจกลางเมือง", image: Garden },
    { title: "พื้นที่เปิดโล่ง", image: OpenSpace },
    { title: "กิจกรรมพิเศษที่ วัน แบงค็อก", image: SpecialEvent },
    { title: "ศูนย์ราชการนนทบุรี", image: Community },
    {
      title: "พื้นที่สีเขียวและพื้นที่เปิดโล่ง",
      image: GreenZoneOpen,
    },
  ];


  return (
    <div className="py-16">
      <Container>
        <SectionHeader
          title="พื้นที่สีเขียวและพื้นที่เปิดโล่งใน วัน แบงค็อก"
          className="flex justify-center mb-12 items-center mx-auto"
        />

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column: Text List */}

          {/* Right Column: Image Grid */}
          <div className="lg:w-3/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {areas.map((area, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg group cursor-pointer min-h-[250px] md:min-h-[300px]" // เพิ่ม min-height
                >
                  <div className="relative w-full h-full">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white text-lg font-medium">
                        {area.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

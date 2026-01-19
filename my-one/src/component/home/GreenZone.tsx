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
    { title: "ศูนย์รวมคอมมูนิตี้", image: Community },
    {
      title: "พื้นที่สีเขียวและพื้นที่เปิดโล่ง",
      image: GreenZoneOpen,
    },
  ];

  const leftAreas = areas.slice(0, 4);
  const rightArea = areas[4];

  return (
    <div className="py-16">
      <SectionHeader
        title="พื้นที่สีเขียวและพื้นที่เปิดโล่งใน วัน แบงค็อก"
        className="flex justify-center mb-12 items-center mx-auto font-[OneBangkok]"
      />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[auto_auto] gap-2 justify-center">
          {/* Left : 4 images */}
          <div className="grid grid-cols-2 grid-rows-2 gap-2">
            {leftAreas.map((area, index) => (
              <div
                key={index}
                className="relative overflow-hidden  group cursor-pointer w-[362.5px] h-[362.5px]"
              >
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 font-[OneBangkok]"
                />
                <div className="absolute inset-0 " />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-lg font-noto">{area.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right : Big image */}
          <div className="relative overflow-hidden group cursor-pointer  w-[745px] h-[735px]">
            <img
              src={rightArea.image}
              alt={rightArea.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 "
            />
            <div className="absolute inset-0" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-white text-xl font-[OneBangkok]">
                {rightArea.title}
              </h3>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

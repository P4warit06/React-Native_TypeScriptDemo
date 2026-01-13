import Parade from "../../../assets/Vision/Parade.jpg";
import Story from "../../../assets/Vision/TheStoreys.jpg";
import WirelessHouse from "../../../assets/Vision/TheWirelessHouse.jpg";
import Art from "../../../assets/Vision/ArtandCulture.jpg";
import Riz from "../../../assets/Vision/TheRitz.jpg";
import Andaz from "../../../assets/Vision/Andaz.jpg";
import GridVision from "../../UI/GridVision";

export default function VisionOne() {
  const imageVision = [Parade, Story, WirelessHouse, Art, Riz, Andaz];
  return (
    <section>
      <GridVision images={imageVision} />
    </section>
  );
}

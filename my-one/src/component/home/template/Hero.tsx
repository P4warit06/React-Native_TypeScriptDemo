import Banner from "../../UI/Banner";
import image1 from "../../../assets/Banner_Picture/andreas.jpg";
import image2 from "../../../assets/Banner_Picture/Festival_Bangkok.jpg";
import image3 from "../../../assets/Banner_Picture/SkyTower.jpg";
import image4 from "../../../assets/Banner_Picture/Tower.jpg";
export default function Hero() {
  const images = [image1, image2, image3, image4];

  return (
    <section>
      <Banner images={images} />
    </section>
  );
}

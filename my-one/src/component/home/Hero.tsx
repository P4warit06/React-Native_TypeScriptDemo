import Banner from "../UI/Banner";
import image1 from "../../assets/andreas.jpg";
import image2 from "../../assets/Festival_Bangkok.jpg";
import image3 from "../../assets/SkyTower.jpg";
import image4 from "../../assets/Tower.jpg";
export default function Hero() {
  const images = [image1, image2, image3, image4];

  return (
    <section>
      <Banner images={images} />
    </section>
  );
}

import image1 from "../../../assets/Activities/Peru.jpg";
import image2 from "../../../assets/Activities/Post_Online.jpg";
import ActivitySection from "../ActivitySection";

export default function ActivityTemplate() {
  const imageActivity = [image1, image2];

  console.log("ActivityTemplate images:", imageActivity);

  return (
    <section>
      <ActivitySection images={imageActivity} />
    </section>
  );
}

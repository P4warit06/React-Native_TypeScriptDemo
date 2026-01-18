import Peru from "../../assets/Activities/Peru.jpg";
import PostOnline from "../../assets/Activities/Post_Online.jpg";
import ActivitiesSection from "../home/ActivitySection";

export default function ActivityContainer() {
  const activityImages = [PostOnline, Peru];

  return (
    <section>
      <ActivitiesSection images={activityImages} />
    </section>
  );
}

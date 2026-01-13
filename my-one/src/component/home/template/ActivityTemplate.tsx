import image1 from "../../../assets/Activities/KV-LEA-SH_PostOnline-07.jpg"
import image2 from "../../../assets/Activities/Peru_thumbnail.jpg"
import ActivitySection from "../ActivitySection"
export default function ActivityTemplate() {
    const imageActivity = [image1, image2]
    return (
        <section>
            <ActivitySection images={imageActivity} />
        </section>
    );

}
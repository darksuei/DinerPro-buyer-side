import Image from "next/image";
import { HiVideoCamera } from "react-icons/hi";
import image from "../../../Assets/homeSec1_2.png";

export default function SuccessStory() {
  return (
    <div>
      <h1>Success Stories</h1>
      <p>
        DinnerPro helps businesses thrive- See how our software helps our
        clients manage and row their business:
      </p>
      <div>
        <div>
          <Image
            src={image}
            alt="An Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <h1>LyndaEats</h1>
          <p>
            See how our friends at LyndaEats used our software to optimize
            business success in one year.
          </p>
          <p>An interview with Lynda Peters CEO of Lyndaeats</p>
          <div>
            <div className={styles.vidDemoBtn}>
              <div>
                <HiVideoCamera />
              </div>
              <p>Watch Demo</p>
            </div>
            <p>See all Success Stories</p>
          </div>
        </div>
      </div>
    </div>
  );
}

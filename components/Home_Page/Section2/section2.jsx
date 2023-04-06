import styles from "./section2.module.css";
import Image from "next/image";
import photo from "../../../Assets/homeSec2.png";

export default function HomeSection2() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={photo} fill style={{ objectFit: "cover" }} alt="An Image" />
      </div>
      <div className={styles.textsdiv}>
        <h1 className="headers">Data Management</h1>
        <p>
          Monitor your back office, kitchen inventory processes. Be at the top
          of your supplly schedules, prices and quality.
        </p>
        <div>
          <p>Learn More</p>
        </div>
      </div>
    </div>
  );
}

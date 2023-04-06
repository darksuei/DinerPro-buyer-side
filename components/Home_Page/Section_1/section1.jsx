import Image from "next/image";
import Image1 from "../../../Assets/homeSec1_1.png";
import Image2 from "../../../Assets/homeSec1_2.png";
import Image3 from "../../../Assets/homeSec1_3.png";

import styles from "./section1.module.css";

export default function HomeSection1() {
  return (
    <section className={styles.container}>
      <div className={styles.leftSideDiv}>
        <h1 className="headers">Food delivery and Event catering</h1>
        <p>
          Build a flexible food business. Get in-person, delivery orders and
          bookings for your services. Expand your customer base.{" "}
        </p>
        <div>
          <p>Learn more</p>
        </div>
      </div>
      <div className={styles.rightSideDiv}>
        <div className={styles.rightSideDivContainer}>
          <div className={styles.shortImgContainer}>
            {ImagesArray.map((image, i) => {
              return (
                <>
                  {image.title !== "Event Management" && (
                    <div
                      key={i}
                      style={{
                        height: "36vh",
                        width: "18vw",
                        position: "relative",
                      }}>
                      <Image
                        src={image.image}
                        fill
                        style={{ objectFit: "cover" }}
                        alt="An Image"
                      />
                    </div>
                  )}
                </>
              );
            })}
          </div>

          {ImagesArray.map((image, i) => {
            return (
              <>
                {image.title == "Event Management" && (
                  <div key={i} className={styles.largeImgContainer}>
                    <div
                      className={styles.imageDiv}
                      style={{ height: "72vh", width: "18vw" }}>
                      <Image
                        src={image.image}
                        fill
                        style={{ objectFit: "cover" }}
                        alt="An Image"
                      />
                    </div>
                    {i == 0 && <p>{image.title}</p>}
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const ImagesArray = [
  {
    image: Image1,
    title: "Event Management",
  },
  {
    image: Image2,
    title: "Food Delivery",
  },
  {
    image: Image3,
    title: "Resturant Management",
  },
];

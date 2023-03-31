import pics1 from "../../../Assets/homeSec3_1";
import pics2 from "../../../Assets/homeSec3_2";
import pics3 from "../../../Assets/homeSec3_3";
import pics4 from "../../../Assets/homeSec3_3";
import styles from "./comments.module.scss";
import Image from "next/image";


export default function Comments() {
  return (
    <div>
      <h1>What Our People Say!</h1>
      <p>Our Customers are our top priority, Lets see what they have to say </p>
      <div className={styles.cardsContainer}>
        {
            comments.map((card, i)=>{
                return (
                    <div key={i} className={styles.card}>
                        <div>
                            <Image src={card.authorPics} fill styles={{objectFit: "cover"}} alt="Authors pictuture"/>
                        </div>
                        <div>{card.authorComment}</div>
                    </div>
                );
            })
        }

      </div>
    </div>
  );
}

const comments = [
  {
    authorPics: pics1,
    authorComment: (
      <p>
        We have been seeing amazing results already! I can’t believe how we ran
        te company before.<span>Groundbreaking!</span>
      </p>
    ),
    authourName: "Tania Peters , HOM",
    marginTop: false
  },
  {
    authorPics: pics2,
    authorComment: (
      <p>
        Platform is exactly what our business needed to grow! It saves us so mch
        time and effort.
        <span>Unbelievable!</span>
      </p>
    ),
    authourName: "Amanda Walters",
    marginTop: true
  },
  {
    authorPics: pics3,
    authorComment: (
      <p>
        I am completely blown away! <span>we are growing </span>at a rate that
        is unprecedented for both the industry and the city.
      </p>
    ),
    authourName: "John Philips, CEO",
    marginTop: false
  },
  {
    authorPics: pics4,
    authorComment: (
      <p>
        Best product ever!<span>Very easy to use !</span> I strongly recommend
        platform to everyone running a restaurant business.{" "}
      </p>
    ),
    authourName: "Daniel white, CEO",
    marginTop: true
  },
];

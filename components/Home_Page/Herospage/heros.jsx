import Button from "@/components/Button/button";
import { HiVideoCamera } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./heros.module.css";


export default function Heros() {
  return (
    <div className={styles.container}>
      <h1>Kitchen Management Reinvented!</h1>
      <p>See how our software can revolutionize your business.</p>

      <div className={styles.getStartedBtn}>
        <div className={styles.vidDemoBtn}>
          <div>
            <HiVideoCamera />
          </div>
          <p>Watch Demo</p>
        </div>
        <Button
          background={"--clr-brandcolor"}
          Title="Sign in"
          _width="100"
          func={() => console.log("Button clicked")}
        />
      </div>


      <div className={styles.searchContainer}>
        {searchAreas.map((search, i) => {
          return (
            <div key={i} className={styles.searchDiv}>
              <div>
                <CiSearch />
              </div>
              <p>{search.title}</p>
              <div>
                <IoIosArrowDown />
              </div>
            </div>
          );
        })}
        <Button
          background={"--clr-button-background"}
          Title="Submit"
          _width="100"
          func={() => console.log("Button clicked")}
        />
      </div>

      <div className={styles.highlightsContainer}>
        <p>Highlights</p>
        {Highlights.map((hi, i) => {
          return (
            <div key={i} className={styles.highlightsBtn}>
              <p>{hi.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const searchAreas = [
  {
    title: "Category",
    tag: "category",
  },
  {
    title: "What food item are you looking for?",
    tag: "lookingFor",
  },
  {
    title: "Location",
    tag: "location",
  },
];
const Highlights = [
  {
    title: "Food Delivery",
    tag: "foodDelivery",
  },
  {
    title: "Chef/Catering Service",
    tag: "chefCateringService",
  },
];

import styles from "./dashboard.module.css"
import { CiSearch, CiLocationOn } from "react-icons/ci"

function Section1() {
  return (
    <div className={styles.section1}>
      <div className={styles.text}>
        <h1>Hi {userName}!</h1>
        <p>What food item are you looking for ?</p>
      </div>

      {/* search boxes */}
      <div className={styles.searches}>
        <div className={styles.search_box}>
            {/* for location search */}
            <input type="text" placeholder="Search here"/>
            <button><CiSearch/></button>
        </div>
        <div className={styles.location_box}>
            {/* for location search */}
            <input type="text" placeholder="Search by location"/>
            <button><CiLocationOn/></button>
        </div>
      </div>
    </div>
  )
}

export default Section1

// to be gotten from the backend and rendered as userName
const userName = "Lana"

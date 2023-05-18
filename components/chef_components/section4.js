import Link from "next/link"
import styles from "./chef.module.css"
import Reviews from "./reviews"
import { FaGreaterThan } from "react-icons/fa"

function Section4({number_of_reviews=20, }) {
  return (
    <div className={styles.section4}>
      <div className={`flex justify-between`}>
        <span>
          <h1>Reviews</h1>
          <p>{number_of_reviews}+ reviews</p>
        </span>
        <Link href={'#'}>
          Next page 
          <span>
            <FaGreaterThan/>
            <FaGreaterThan/>
          </span>
        </Link>
      </div>

      <div className={styles.review_box}>
          <Reviews/>
          <Reviews/>
          <Reviews/>
          <Reviews/>
          <Reviews/>
          <Reviews/>
          <Reviews/>
      </div>
    </div>
  )
}

export default Section4

import Image from "next/image"
import styles from "./dashboard.module.css"
import image_url from '@/Assets/food.jpeg'
import Rating_stars from "../rating_stars"
import Link from "next/link"

function Dashboard_data() {
  return (
      <div className={styles.data}>
        <div className={styles.box1}>
            <div className={styles.image_box}>
                <Image 
                    src={image_url} 
                    alt={`food_item_name`} 
                    style={{objectFit: "contain"}} 
                    height={80} 
                    width={110}/>
            </div>
            <div className={styles.details}>
                {/* the name of the restaurant this chef is commin from */}
                <h4>{`food_item_name`}</h4>
                {/* the name of the chef */}
                <h2>sing jam pam</h2>
                <div className={styles.review_box}>
                    {/* the stars should be loaded from the server */}
                    <Rating_stars
                        stars={5}/>
                    {/* The reviews here should be loaded dynamically */}
                    <p>{600} reviews</p>
                </div>
                
            </div>
        </div>
        <Link className={styles.see_more} href={'#'}>see more</Link>
      </div>
  )
}

export default Dashboard_data

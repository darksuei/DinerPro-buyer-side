import styles from "./dashboard.module.css"
import Image from "next/image"
import Logo from '@/Assets/food.jpeg'
import { TbHeartFilled } from "react-icons/tb"
import Rating_stars from "../rating_stars"

function Trend_menu({image_url, food_item_name, number_of_likes, rating}) {
  return (
    <div className={styles.trend_menu}>
        <div className="rounded-lg overflow-clip">
            <Image 
                src={image_url} 
                alt={food_item_name} 
                style={{objectFit: "conatin"}} 
                height={100} 
                width={110}/>
        </div>
        <div className={styles.details}>
            <h1>{food_item_name}</h1>

            <Rating_stars
              stars={5}/>
            {/* likes section here. the like button should be able to add a like to the cheff in question */}
            <span className={styles.likes}>
              <button>
                <TbHeartFilled/>
              </button>
              <p>{number_of_likes} likes</p>
            </span>
        </div>
    </div>
  )
}

export default Trend_menu

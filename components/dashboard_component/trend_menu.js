import styles from "./dashboard.module.css"
import Image from "next/image"
import Logo from '@/Assets/food.jpeg'

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
        <div>
            <h1>{food_item_name}</h1>
            <span></span>
            <p>{number_of_likes} likes</p>
        </div>
    </div>
  )
}

export default Trend_menu

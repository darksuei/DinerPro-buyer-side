import Image from "next/image"
import styles from "./chef.module.css"
import Rating_stars from "../rating_stars"
import picture from '../../Assets/food.jpeg'

function Reviews({name, imageUrl}) {
  return (
    <div className={styles.reviews}>
        {/* The source of this image is from the image url gotten from the backend and sent down as a prop */}
      <Image src={picture} height={50} width={50} alt={name} className="aspect-square rounded-[100%]"/>
      <p>A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba. The farmers will make more money. Your lunch will not be imported, cassava garri ewa and ehhh ehhhhnn. The farmer will make money, the dinner would be cassava, eba, ewa and everything.</p>
      <Rating_stars stars={5}/>
    </div>
  )
}

export default Reviews

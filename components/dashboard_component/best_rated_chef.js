import Image from "next/image"
import styles from "./dashboard.module.css"
import logo from '../../public/images/services/communication.jpeg'
import Rating_stars from "../rating_stars"

function Best_rated_chef() {
  return (
    <div className={styles.best_rated_chef}>
      <p>best rated chef is chimamamada</p>
      <section>
        <div className={styles.image}>
            <Image 
                src={logo} 
                style={{objectFit: 'contain'}} 
                alt={`best chef`}
                height={100} 
                width={110}/>
        </div>
        <div className={styles.chef_details}>
            <span>
                <h2> Linda Tobi</h2>
                {/* trhe stars used in this rating should be sent from the server representing the stars gotten from the ratings calculation */}
                <Rating_stars
                    stars={3}/>
                <h6>(2000 reviews)</h6>
            </span>
        </div>
      </section>
    </div>
  )
}

export default Best_rated_chef

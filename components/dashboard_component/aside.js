import styles from "./dashboard.module.css"
import Logo from '@/Assets/food.jpeg'
import { GiIcePop} from 'react-icons/gi'
import Trend_menu from "./trend_menu"

function Aside() {
  return (
    <aside className={styles.aside}>
        <p className={styles.header_text}><GiIcePop className="text-[#ffa902]"/> Trending menu</p>

        {/* the data here will be gotten from an endpoint in the backnd as a text and sorted according to the highest rating for display */}
        <div className={styles.trending_menu}>
            <Trend_menu 
                image_url={Logo} 
                food_item_name={"potato chips"}
                number_of_likes={249}
                rating={4.5}/>
        </div>
    </aside>
  )
}

export default Aside

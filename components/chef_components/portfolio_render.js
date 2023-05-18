import Image from "next/image"
import styles from "./chef.module.css"
import picture from '@/Assets/food.jpeg'
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "@/redux/chef_slice";

function Portfolio_render({image_url, name_of_event, portfolio_data}) {
  const dispatch = useDispatch()

  const handleUserData =(e)=>{
    // to handle the toggle her
    dispatch(toggle({data: portfolio_data}))
    // to handle the updating of the render data here

  }
  return (
    <div className={styles.portfolio_render}>
        <div className={styles.picture}>
            {/* replace the picture in the url with the image link gotten back from backend its tag is image_url */}
            <Image src={picture} fill style={{objectFit: "cover"}} alt={"the name of the event"}/>
        </div>
        <div className={styles.name}>
            <p>{name_of_event}</p>
            <button value={portfolio_data} onClick={(e)=>handleUserData(e)}>See more details</button>
        </div>
    </div>
  )
}

export default Portfolio_render

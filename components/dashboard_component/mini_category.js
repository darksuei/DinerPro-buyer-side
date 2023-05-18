import styles from "./dashboard.module.css"
import { useSelector, useDispatch } from "react-redux"
import { change_item } from "@/redux/dashboardSelect"
// i will still need to turn unserialisable values off from the redux setup

function Mini_category() {
  const category = useSelector((state)=>state.Category) 
  const dispatch = useDispatch()
  const mini_categories = mini_cats[category.category]

  const handleClick = (e) =>{
    console.log(mini_categories.includes(e.target.name), e.target.name)
    if (mini_categories.includes(e.target.name) ) {
      dispatch({type: change_item, payload: { value: e.target.name }})
    }
  }

  const category_render = mini_categories.map((data, index)=>{
    return <button 
      key={index} 
      name={data}
      onClick={(e)=>{handleClick(e)}}
      className={category.item === data && styles.active}>
      {data.replace("_"," ")}
    </button>
  })

  return (
    <div className={`${styles.mini_category} ${styles.no_scroll_bar}`}>
      {category_render}
    </div>
  )
}

export default Mini_category


const mini_cats = {
  food_supply: ["all items", "tubers", "grains", "cereals","dairy", "vegetables", "meat_products", "fruits", "oil"],
  couzines: ["all", "local dishes", "intercontinental", "dessert", "drinks"],
  chefs: ["all chefs", "traditional chefs", "intercontinental chefs", " pastry chef", "grill chef", "fry chef"]
}

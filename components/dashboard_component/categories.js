import { TbChefHat } from "react-icons/tb"
import styles from "./dashboard.module.css"
import { GiForkKnifeSpoon, GiFruitBowl } from "react-icons/gi"
import { useDispatch, useSelector } from "react-redux"
import { chefs, couzines, food_supply } from '../../redux/dashboardSelect'

function Categories(e) {
  const dispatch = useDispatch()
  const category_value = useSelector((state)=>state.Category)

  const setCategory = (e) =>{
    const item = e.currentTarget.name;
    if (item === category_value.category) {
        return
    }
    switch (item) {
      case "chefs":
          dispatch(chefs())
        break;
      
      case "couzines":
          dispatch(couzines())
        break;

      case "food supply":
          dispatch(food_supply())
        break;
    
      default:
        break;
    }
  }

  return (
    <div className={styles.categories}>
      <h1>Categories</h1>
    <span>
      {button_data.map((buti_data, index)=>{
        return <button 
          key={index} 
          name={buti_data.name}
          onClick={(e)=>{setCategory(e)}}
          className={category_value.category === buti_data.data && styles.active}>
            <p name={buti_data.name}>{buti_data.name}</p>
            <p name={buti_data.name}>{buti_data.icon}</p>
            
        </button>
      })}
    </span>
    </div>
  )
}

export default Categories
const button_data = [
  {
    name: "chefs",
    data: "chefs",
    icon: <TbChefHat/>
  },
  {
    name: "couzines",
    data: "couzines",
    icon: <GiForkKnifeSpoon/>
  },
  {
    name: "food supply",
    data: "food_supply",
    icon: <GiFruitBowl/>
  },
]




































// import { TbChefHat } from "react-icons/tb"
// import styles from "./dashboard.module.css"
// import { GiForkKnifeSpoon, GiFruitBowl } from "react-icons/gi"
// import { useDispatch, useSelector } from "react-redux"
// import { chefs, couzines, food_supply } from '../../redux/dashboardSelect'
// import { useReducer } from "react"
// import { category_reducer as reducer } from "./reducer_functions"

// const initialState =  {
//     category: "chefs",
//     type: "all"
//   }
// function Categories(e) {
//   // const dispatch = useDispatch()
//   // const category_value = useSelector((state)=>state.Category)


//   ///////////////////////////////////////////////////
//     const [state, dispatch] = useReducer(reducer, initialState)
//   /////////////////////////////////////////////////////////////

//   return (
//     <div className={styles.categories}>
//       <h1>Categories</h1>
//     <span>
//       {button_data.map((buti_data, index)=>{
//         return <button 
//           key={index} 
//           name={buti_data.name}
//           // onClick={(e)=>{setCategory(e)}}
//           onClick={(e)=>{dispatch({type: e.currentTarget.name, payload: "nadu"})}}
//           className={state.category === buti_data.data && styles.active}
//           >
//             <p name={buti_data.name}>{buti_data.name}</p>
//             <p name={buti_data.name}>{buti_data.icon}</p>
            
//         </button>
//       })}
//     </span>
//     </div>
//   )
// }

// export default Categories
// const button_data = [
//   {
//     name: "chefs",
//     data: "chefs",
//     icon: <TbChefHat/>
//   },
//   {
//     name: "couzines",
//     data: "couzines",
//     icon: <GiForkKnifeSpoon/>
//   },
//   {
//     name: "food supply",
//     data: "food_supply",
//     icon: <GiFruitBowl/>
//   },
// ]

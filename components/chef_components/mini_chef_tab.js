import { useDispatch, useSelector } from "react-redux"
import styles from "./chef.module.css"
import { select, toggle } from '@/redux/chef_slice' 


function Mini_chef_tab() {
  const dispatch= useDispatch()
  const state = useSelector((state)=>state.Current_chef)

  const buttons_render = buttons.map((data, index)=>{
    return <button 
      name={data}
      onClick={(e)=>dispatch(select({data: e.currentTarget.name}))}
      className={`${styles.button_select} ${styles.current_button_select}`}
      key={index}>
        {data}
    </button>
  })

  console.log(state.selected)
  return (
    <div className={styles.mini_chef_tab}>
      <button className={styles.close} onClick={()=>dispatch(toggle({data: ""}))}>close</button>
      <div className={styles.container}>
        nedu more
        <div>
          {buttons_render}
       </div>
      </div>
    </div>
  )
}

export default Mini_chef_tab

const buttons = ["pictures", "overview", "recipe and processes", "reviews"]

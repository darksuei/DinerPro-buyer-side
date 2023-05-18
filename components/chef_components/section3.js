import { useSelector } from "react-redux"
import styles from "./chef.module.css"
import Mini_chef_tab from "./mini_chef_tab"
import Portfolios from "./portfolios"

function Section3({portfolios}) {
  const mini_Chef = useSelector((state)=>state?.Current_chef)

  return (
    <div className={styles.section3}>
      <h1>Portfolios</h1>
      <Portfolios
        portfolios={portfolios}/>
      {mini_Chef.condition && <Mini_chef_tab/>}
    </div>
  )
}

export default Section3

import Best_rated_chef from "./best_rated_chef"
import Categories from "./categories"
import styles from "./dashboard.module.css"
import Dashboard_data from "./dashboard_data"
import Mini_category from "./mini_category"

function Section2() {
  return (
    <section className={styles.section2}>
      <div className={styles.category_box}>
        {/* the initial selection panel goes here */}
        <div className={styles.box1}> 
        {/* Categories section  */}
          <Categories/>
        </div>
        <div className={styles.box2}>
          <Best_rated_chef/>
        </div>
      </div>

      {/* The second mini selection list after the category is chosen */}
      <Mini_category/>
      
      {/* <div className={styles.dashboard_data}> */}
      <div className={`${styles.dashboard_data} ${styles.no_scroll_bar} h-[calc(100%-400px)] overflow-y-auto`}>
        {/* the data rendered from the chosen category */}
        <Dashboard_data/>
        <Dashboard_data/>
        <Dashboard_data/>
        <Dashboard_data/>
        <Dashboard_data/>
        <Dashboard_data/>
      </div>

    </section>
  )
}

export default Section2

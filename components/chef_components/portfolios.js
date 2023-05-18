import styles from "./chef.module.css"
import Portfolio_render from "./portfolio_render"

function Portfolios({portfolios}) {
const render_portfolio = portfolios?.map((data, index)=>{
  // console.log(data)
  return <Portfolio_render
            key={index}
            image_url= {data.image_url}
            name_of_event= {data.name_of_event}
            portfolio_data= {data}
          />
})

  return (
    <div className={styles.portfolios}>
      {render_portfolio}
    </div>
  )
}

export default Portfolios

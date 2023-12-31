import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Dashboard_nav from "./dashboard_nav"
import styles from './dashboard_wrap.module.css'
import TopBar from "../dashboard_component/topBar"


function Dashboard_wrap({children}) {
  // this component contains the navigation on the left of all the logged in pages
  // it also contains the function that will check and redirect users that are not logged in to the login page
  const router = useRouter()

  const [loggedIn, setLoggedIn] = useState(true)

  const [minimize, setMinimize] = useState(true)

  useEffect(() => {
    // retrieve the token set in the local storage for all users stand to be edited
    const isLoggedIn = localStorage.getItem("authenticated")
    // setLoggedIn(isLoggedIn)
  }, [])

  const redirect = () =>{
    router.push('/auth')
  }
  
  if (!loggedIn) {
    redirect()
  } else{
    return (
      <section className={styles.dashboard_wrap}>
        <TopBar/>
        <div  className="flex min-h-[calc(max(42rem,100vh)-4rem)]">
          <div className={`min-h-full transition duration-75  w-[25rem] ${minimize? '':"translate-x-[-85%]"}`}>
            <Dashboard_nav
              minimize={minimize}
              setMinimize={setMinimize}/>
          </div>

          {/* the individual pages are wrapped here */}
          <div className={`float-righ max-h-[100vh] transition duration-100 ${minimize? "w-[calc(100vw-20rem)]":"-ml-[21rem] w-[calc(100vw-4rem)]" }`}>
            {children}
          </div>
        </div>
      </section>
    )
  }
}

export default Dashboard_wrap

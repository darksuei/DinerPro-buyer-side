import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Dashboard_nav from "./dashboard_nav"
 

function Dashboard_wrap({children}) {
  // this component contains the navigation on the left of all the logged in pages
  // it also contains the function that will check and redirect users that are not logged in to the login page
  const router = useRouter()

  const [loggedIn, setLoggedIn] = useState(true)

  const [minimize, setMinimize] = useState(true)

  useEffect(() => {
    // retrieve the token saved for  token set in the local storage for all users stand to be edited
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
      <section className="flex">
        {/*wrapper for general navbar in the navigation panels */}
        <div className={`float-left min-h-[100vh] transition duration-75  w-[25rem] ${minimize? '':"translate-x-[-85%]"}`}>
          <Dashboard_nav
            minimize={minimize}
            setMinimize={setMinimize}/>
        </div>

        {/* the individual pages are wrapped here */}
        <div className={` float-righ min-h-[100vh] transition duration-100 ${minimize? "w-[calc(100vw)]":"-ml-[21rem] w-[calc(100vw)]" }`}>
          <button onClick={()=>setMinimize(!minimize)}>onclick</button>
          {children}
        </div>
      </section>
    )
  }
}

export default Dashboard_wrap

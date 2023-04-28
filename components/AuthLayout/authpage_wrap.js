import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Sidebar_nav from "./Sidebar/sidebar_nav";
import styles from "./Sidebar/sidebar_wrap.module.css";
import TopBar from "./topBar";


function AuthPage_Layout_wrap({children}) {
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
      <div className="h-screen w-screen overflow-x-hidden flex flex-col justify-between">
        <TopBar/>
        <div  className="flex h-[85vh]">
          <div className={`min-h-full transition duration-75  w-[25rem] ${minimize? '':"translate-x-[-85%]"}`}>
            <Sidebar_nav
              minimize={minimize}
              setMinimize={setMinimize}/>
          </div>

          {/* the individual pages are wrapped here */}
          <div className={`px-5 float-right h-full transition duration-100 ${minimize? "w-[calc(100vw-20rem)]":"-ml-[21rem] w-[calc(100vw-4rem)]" }`}>
            {children}
          </div>
        </div>
      </div>
    )
  }
}

export default AuthPage_Layout_wrap;

import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Sidebar_nav from "./Sidebar/sidebar_nav";
import styles from "./Sidebar/sidebar_wrap.module.css";
import TopBar from "./topBar";


function AuthPage_Layout_wrap({children}) {
  const router = useRouter()
  const [minimize, setMinimize] = useState(false)

    return (
      <div className="h-full w-screen overflow-x-hidden flex flex-col justify-between">
        <TopBar/>
        <div  className="flex items-start h-[calc(100vh-70px)] relative">
          <div className={`h-full transition duration-75 w-[20%] ${minimize? "w-[6%]":""}`}>
            <Sidebar_nav
              minimize={minimize}
              setMinimize={setMinimize}/>
          </div>

          {/* the individual pages are wrapped here */}
          <div className={`grow px-3 float-right h-full transition duration-100 ${minimize? "w-full":"w-[calc(100vw-16rem)]" }`}>
            {children}
          </div>
        </div>
      </div>
    )
  }


export default AuthPage_Layout_wrap;

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Sidebar_nav from "./Sidebar/sidebar_nav";
import styles from "./Sidebar/sidebar_wrap.module.css";
import TopBar from "./topBar";

function AuthPage_Layout_wrap({ children }) {
  // this component contains the navigation on the left of all the logged in pages
  // it also contains the function that will check and redirect users that are not logged in to the login page
  const router = useRouter();

  const [loggedIn, setLoggedIn] = useState(true);

  const [minimize, setMinimize] = useState(true);

  useEffect(() => {
    // retrieve the token set in the local storage for all users stand to be edited
    const isLoggedIn = localStorage.getItem("authenticated");
    // setLoggedIn(isLoggedIn)
  }, []);

  const redirect = () => {
    router.push("/auth");
  };

  if (!loggedIn) {
    redirect();
  } else {
    return (
      <section className={styles.dashboard_wrap}>
        <TopBar />
        <div className="flex w-full mt-[8vh] items-start h-[92vh]">
          <div
            className={`relative transition duration-[.5s] ${
              minimize ? "w-[6%]" : "w-[20%]"
            }`}
          >
            <Sidebar_nav minimize={minimize} setMinimize={setMinimize} />
          </div>

          {/* the individual pages are wrapped here */}
          <div
            className={`grow  float-right h-full transition duration-[2s] ${
              minimize ? "w-full ml-[2.5rem]" : "w-[calc(100vw-12rem)]"
            }`}
          >
            {children}
          </div>
        </div>
      </section>
    );
  }
}

export default AuthPage_Layout_wrap;

import Image from "next/image";
import { useEffect, useState } from "react";
import Logo from "../../../Assets/Logo.png";
import styles from "./navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import Button from "@/components/Button/button";
import { IoMdNotificationsOutline } from "react-icons/io";

export default function Navbar() {
  const [top, setTop] = useState(false);
  const Route = useRouter();

  function navColor() {
    // change color of the navbar when you scroll
    window.scrollY > 20 ? setTop(true) : setTop(false);
  }
  useEffect(() => {
    window.addEventListener("scroll", navColor);

    return () => window.removeEventListener("scroll", navColor);
  }, []);
  // console.log(Route.pathname)

  return (
    <div className={`${styles.container} ${top ? "bg-white" : ""}`}>
      <div className={styles.Logo}>
        <Image
          src={Logo}
          fill
          style={{ objectFit: "contain" }}
          alt="DinnerPro Logo"
        />
      </div>

        <div className={styles.linksContainer}>
          <div className="flex items-start gap-[2rem]">
            {NavLinks.map((link, i) => {
              return (
                <Link
                  href={link.Route}
                  key={i}
                  className={`${styles.link} ${
                    top || Route.pathname === "/" ? "text-black" : "text-white"
                  } `}>
                  <p>{link.title}</p>
                  {Route.pathname == link.Route && (
                    <div className={styles.ticker}></div>
                  )}
                </Link>
              );
            })}
          </div>
          <Link href="/auth">
            <Button
              background={"--clr-button-background"}
              Title="Sign in"
              _width="100"
              func={() => console.log("Button clicked")}
            />
          </Link>
        </div>
 

      {/* {authenticate && (
        <div>
          <div>
            <p>{papeTittle}</p>
            <div>{icon}</div>
          </div>
          <div>
            <div>
              <IoMdNotificationsOutline />
            </div>
            <div className="relative w-[50px] h-[50px]">
              <Image
                src="/images/authImage.png"
                fill
                style={{ objectFit: "cover" }}
                alt="profile image"
              />
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}

const NavLinks = [
  {
    title: "Home",
    Route: "/",
  },
  {
    title: "Services",
    Route: "/services",
  },
  {
    title: "Solutions",
    Route: "/offers",
  },
  {
    title: "About Us",
    Route: "/about",
  },
];

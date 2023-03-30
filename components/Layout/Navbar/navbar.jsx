import Image from "next/image";
import Logo from "../../../Assets/Logo.png";
import styles from "./navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import Button from "@/components/Button/button";
export default function Navbar() {
  const Route = useRouter();
  console.log(Route);
  return (
    <div className={styles.container}>
      <div className={styles.Logo}>
        <Image
          src={Logo}
          fill
          style={{ objectFit: "contain" }}
          alt="DinnerPro Logo"
        />
      </div>

      <div className={styles.linksContainer}>
        {NavLinks.map((link, i) => {
          return (
            <Link href={link.Route} key={i} className={styles.link}>
              <p>{link.title}</p>
              {Route.pathname == link.Route && (
                <div className={styles.ticker}></div>
              )}
            </Link>
          );
        })}
        <Button background={"--clr-button-background"} Title="Sign in" _width="100" func={() => console.log("Button clicked")} />

      </div>
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
    Route: "/Services",
  },
  {
    title: "Solutions",
    Route: "/Offers",
  },
  {
    title: "About Us",
    Route: "/About us",
  },
];
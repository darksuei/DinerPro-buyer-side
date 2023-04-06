import Image from "next/image";
import Logo from "../../../Assets/Logo.png";
import styles from "./navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import Button from "@/components/Button/button";
export default function Navbar() {
  const Route = useRouter();
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
        <div className="flex items-start gap-[2rem]">
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
        </div>
        <Button
          background={"--clr-button-background"}
          Title="Sign in"
          _width="100"
          func={() => console.log("Button clicked")}
        />
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

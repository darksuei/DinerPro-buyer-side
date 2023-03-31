import Logo from "../Logo/Logo";
import styles from "./footer.module.css";
import { ImFacebook, ImTwitter, ImLinkedin2 } from "react-icons/im";
import { SlSocialInstagram } from "react-icons/sl";
import { MdEmail } from "react-icons/md";

import Link from "next/link";
export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <Logo height={"80px"} width={"180px"} />
        <div className={styles.tableWrapper}>
          <div className={styles.column}>
            <p>About us</p>
            <p>FAQ</p>
            <p>Terms and conditions</p>
          </div>
          <div className={styles.column}>
            <p>Privacy Policy</p>
            <p>Support</p>
          </div>
          <div className={styles.column}>
            <p>16 Moshalasi street, off Oko-awo, Lagos Island, Lagos</p>
            <p>www.dinnerpro.ng</p>
            <p>+247039680325</p>
          </div>
        </div>
      </div>
      <div className={styles.socials}>
        {socialIcons.map((icon, i) => {
          return (
            <Link href={icon.url} key={i} className={styles.iconDiv}>
              <div>{icon.icon}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
const socialIcons = [
  {
    name: "Facebook",
    icon: <ImFacebook />,
    url: "https://faceBook.com/",
  },
  {
    name: "Facebook",
    icon: <SlSocialInstagram />,
    url: "https://faceBook.com/",
  },
  {
    name: "Twitter",
    icon: <ImTwitter />,
    url: "https://faceBook.com/",
  },
  {
    name: "Linkedin",
    icon: <ImLinkedin2 />,
    url: "https://faceBook.com/",
  },
  {
    name: "Email",
    icon: <MdEmail />,
    url: "https://faceBook.com/",
  },
];

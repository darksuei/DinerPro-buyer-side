import Image from "next/image"
import logo from "../../../Assets/Logo.png";
import styles from "./logo.module.css";


export default function Logo ({height, width}){
    return(
        <div className={styles.Logo} style={{height:height, width:width}}>
        <Image
          src={logo}
          fill
          style={{ objectFit: "contain" }}
          alt="DinnerPro Logo"
        />
      </div>
    )
}
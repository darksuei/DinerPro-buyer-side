import { MdOutlineEventNote } from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";
import { MdDeliveryDining } from "react-icons/md";
import styles from "./services.module.css";


export default function Services() {
  return (
    <div className={styles.container}>
      <h1>What we Offer</h1>
      <div className={styles.cardsContainer}>
        {cardInfo.map((card, i) => {
          return (
            <div key={i} className={styles.card}>
              <div>{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const cardInfo = [
  {
    icon: <MdOutlineEventNote  size={30}/>,
    title: "Record Keeping",
    desc: "Explore modern solutions for your business inflows and outflows to enhance your decision making and planning.",
  },
  {
    icon: <TbToolsKitchen2 size={30}/>,
    title: "Order Management",
    desc: "Manage all online and offline orders for all types of services you render - catering or instant orders.",
  },
  {
    icon: <MdDeliveryDining size={30}/>,
    title: "Record Keeping",
    desc: "Explore integrated solutions for your business commerce - procurement, advertisement, branding etc.",
  },
];

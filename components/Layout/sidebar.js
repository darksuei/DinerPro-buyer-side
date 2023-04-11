import Logo from "./Logo/Logo";
import { IoStopwatchOutline } from "react-icons/io5";
import { GiKnifeFork } from "react-icons/gi";
import { TbCurrencyNaira } from "react-icons/tb";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="flex flex-col items-center absolute left-0 top-0 bottom-0">
      <Logo height={"70px"} width={"118px"} />
      <div className="flex flex-col items-center">
        {sideBarLinks.map((link, index) => {
          return (
            <Link href={link.route} key={index}>
              <div>{link.icon}</div>
              <p>{link.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
const sideBarLinks = [
  {
    title: "Dashboard",
    route: "/Dasboard",
    icon: <IoStopwatchOutline />,
  },
  {
    title: "Order",
    route: "/Order",
    icon: <GiKnifeFork />,
  },
  {
    title: "Payment",
    route: "/Payment",
    icon: <TbCurrencyNaira />,
  },
  {
    title: "Delivery Status",
    route: "/Dasboard",
    icon: <MdOutlineDeliveryDining />,
  },
  {
    title: "Settings",
    route: "/Settings",
    icon: <BsFillTelephoneFill />,
  },
  {
    title: "Help Desk",
    route: "/Help",
    icon: <CiSettings />,
  },
  {
    title: "Sign Out",
    route: "/auth",
    icon: <FiLogOut />,
  },
];

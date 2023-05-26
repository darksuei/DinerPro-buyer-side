/** @format */

import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./sidebar_nav.module.css";
import {
  AiOutlineArrowRight,
  AiOutlineSetting,
  AiOutlineMenu,
} from "react-icons/Ai";
import { GoDashboard } from "react-icons/go";
import { GiKnifeFork } from "react-icons/gi";
import { TbCurrencyNaira } from "react-icons/tb";
import { MdOutlineBikeScooter, MdOutlineLogout } from "react-icons/md";

function Sidebar_nav({ minimize, setMinimize }) {
  const Route = useRouter();

  return (
    <div className="h-[92vh] fixed left-0 bottom-0 flex flex-col items-center">
      <div className="flex  flex-col bg-[#FFA902] min-h-[100%] text-[.9rem]  w-full rounded-tr-[1.5rem]">
        <div className="flex justify-end items-end p-4">
          <button
            className={`${minimize && "m-auto"}`}
            onClick={() => setMinimize(!minimize)}
          >
            {!minimize ? <AiOutlineMenu /> : <AiOutlineArrowRight />}
          </button>
        </div>
        <ul
          className={`font-[600] flex flex-col justify-between gap-[1.5rem] text-neutral-600 capitalize ${
            !minimize && "pl-[.8rem]"
          }`}
        >
          {nav_endpoints.map((data) => {
            return (
              <div key={data.name}>
                <Link
                  href={data.path}
                  className={`  relative flex gap-[1.3rem] py-3 pl-5 rounded-tl-[2rem] items-center ${
                    Route.pathname == data.path && "bg-white text-[1.1rem]"
                  }`}
                >
                  <p>{data.icon}</p>
                  {!minimize && <p>{data.name}</p>}
                </Link>
              </div>
            );
          })}
          {/* logout button */}
          <div className="font-[600] text-neutral-600">
            <hr className="border-t-[0.1rem] w-[80%] m-auto border-neutral-600 opacity-50 " />
            <Link
              href={`#`}
              className="relative flex gap-[1.3rem] py-3 pl-5 rounded-tl-[2rem] items-center"
            >
              <div>
                <MdOutlineLogout />
              </div>
              {!minimize && <p>Sign out</p>}
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar_nav;

// this username should be grabbed from the server on log in and then rendered dynamically to this component
const username = "Lana";

const nav_endpoints = [
  {
    name: "dashboard",
    path: "auth/dashboard",
    icon: <GoDashboard />,
  },
  {
    name: "Orders",
    path: "/auth/order",
    icon: <GiKnifeFork />,
  },
  {
    name: "delivery status",
    path: "/delivery_status",
    icon: <TbCurrencyNaira />,
  },
  {
    name: "settings",
    path: "/settings",
    icon: <MdOutlineBikeScooter />,
  },
  {
    name: "help desk",
    path: "/help_desk",
    icon: <AiOutlineSetting />,
  },
];

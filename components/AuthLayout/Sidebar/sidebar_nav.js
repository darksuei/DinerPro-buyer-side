import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./sidebar_nav.module.css";
import { AiOutlineArrowRight, AiOutlineSetting, AiOutlineMenu } from "react-icons/Ai";
import { GoDashboard } from "react-icons/go";
import { GiKnifeFork } from "react-icons/gi";
import { TbCurrencyNaira } from "react-icons/tb";
import { MdOutlineBikeScooter, MdOutlineLogout } from "react-icons/md";

function Sidebar_nav({ minimize, setMinimize }) {
  const Route = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className="flex justify-end items-end p-4">
          <button className={`${minimize && "m-auto"}`} onClick={() => setMinimize(!minimize)}>
            {!minimize ? <AiOutlineMenu /> : <AiOutlineArrowRight />}
          </button>
        </div>
        <ul className={styles.nav_list}>
          {nav_endpoints.map((data) => {
            return (
              <span key={data.name}>
                <Link
                  href={`${data.path} }`}
                  className={`${styles.nav_link} ${
                    Route.pathname == data.path && styles.nav_link_active
                  }`}>
                  <p>{data.icon}</p>
                  {!minimize && <p>{data.name}</p>}
                </Link>
              </span>
            );
          })}
        </ul>

        {/* logout button */}
        <div className={styles.log_out}>
          <hr className="border-t-[0.1rem] w-[80%] m-auto border-neutral-600 opacity-50" />
          <Link href={`#`} className={`${styles.nav_link}`}>
            <div>
              <MdOutlineLogout />
            </div>
            {!minimize && <p>Sign out</p>}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar_nav;

const nav_endpoints = [
  {
    name: "dashboard",
    path: "/dashboard",
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

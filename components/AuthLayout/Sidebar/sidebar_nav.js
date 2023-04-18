import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./sidebar_nav.module.css";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineArrowRight, AiOutlineSetting } from "react-icons/Ai";
import { GoDashboard } from "react-icons/go";
import { GiKnifeFork } from "react-icons/gi";
import { TbCurrencyNaira } from "react-icons/tb";
import { MdOutlineBikeScooter, MdOutlineLogout } from "react-icons/md";

function Sidebar_nav({ minimize, setMinimize }) {
  const Route = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {/* main navigation */}
        <section>
          <span className={styles.hi_user}>
            <p>Hi {username}</p>
            <button onClick={() => setMinimize(!minimize)}>
              {minimize ? <HiMenuAlt3 /> : <AiOutlineArrowRight />}
            </button>
          </span>
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
                    <p>{data.name}</p>
                    <p
                      className={`${styles.icon} ${
                        minimize && styles.icon_active
                      }`}>
                      {data.icon}
                    </p>
                  </Link>
                </span>
              );
            })}
          </ul>
        </section>

        {/* logout button */}
        <div className={styles.log_out}>
          <hr className="border-t-[0.1rem] w-[80%] m-auto border-neutral-600 opacity-50" />
          <Link href={`#`} className={`${styles.nav_link}`}>
            <p>
              <MdOutlineLogout />
            </p>
            <p>Sign out</p>
            <p className={`${styles.icon} ${minimize && styles.icon_active}`}>
              <MdOutlineLogout />
            </p>
          </Link>
        </div>
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

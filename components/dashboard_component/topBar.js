import Image from "next/image"
import { useRouter } from "next/router"
import Link from "next/link"
import Logo from '../../Assets/Logo.png'
import styles from '../dashboard/dashboard_wrap.module.css'
import {  AiOutlineSetting} from 'react-icons/Ai'
import { GoDashboard } from 'react-icons/go'
import { GiKnifeFork} from 'react-icons/gi'
import { TbCurrencyNaira} from 'react-icons/tb'
import { MdOutlineBikeScooter} from 'react-icons/md'
import { VscBellDot} from 'react-icons/vsc'
import ProfileImage from '../../Assets/homesec3_1.png'


function TopBar() {

  const Route = useRouter()

  const renderTop = nav_endpoints.filter((data)=>{
    return Route.pathname === data.path
  })

  return (
    <div className={styles.heading}>
      <div className={styles.logo}>
        {/* logo picture */}
          <Link 
            className={styles.logo_image} 
            href={`/`}>
            <Image 
              src={Logo} 
              style={{objectFit: "contain"}} 
              alt="dinnerpro"/>
            </Link>
      </div>

    {/* the remaining haedline after the logo in the dashboards */}
      <div className={styles.top_nav}>
        <div className="flex items-center gap-4 justify-center">
            <p>{renderTop[0].name}</p>
            {renderTop[0].icon}
        </div>

        <div>
          {renderTop[0].name === "dashboard" ? <div className={styles.secondary_nav}>
            {/* for only main dashboard */}
            {nav_item.map((data, i)=>{
              return <Link href={data.path} key={i}>
                <p>{data.name}</p>
              </Link>
            })}
          </div>
          // for other dashboard pages
          : <div className="flex items-center gap-4 justify-center text-[1.5rem]">
              <VscBellDot/>
              {/* the profile image has to be gotten from the backend during login and rendered dtnamically */}
              <Image src={ProfileImage} alt={`profile image`} heigth={40} width={40} className="roounded-[100%]"/>
          </div> }
        </div>
      </div>
    </div>
  )
}

export default TopBar;

// this username should be grabbed from the server on log in and then rendered dynamically to this component
const username = "Lana"

const nav_endpoints = [
    {
        name: "dashboard",
        path: "/dashboard",
        icon: <GoDashboard/>
    },
    {
        name: "orders",
        path: "/orders",
        icon: <GiKnifeFork/>
    },
    {
        name: "delivery status",
        path: "/delivery_status",
        icon: <TbCurrencyNaira/>
    },
    {
        name: "settings",
        path: "/settings",
        icon: <MdOutlineBikeScooter/>
    },
    {
        name: "help desk",
        path: "/help_desk",
        icon: <AiOutlineSetting/>
    }
]

const nav_item = [
  {
    name: "Home",
    path: "/",
  },
    {
    name: "Services",
    path: "/services",
  },
    {
    name: "Solutions",
    path: "/offers",
  },
    {
    name: "About us",
    path: "/about",
  }
]
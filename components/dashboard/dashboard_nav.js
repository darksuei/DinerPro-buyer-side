import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import styles from './dashboard_nav.module.css'
import Logo from '../../Assets/Logo.png'
import { HiMenuAlt3 } from 'react-icons/hi'
import { AiOutlineArrowRight, AiOutlineSetting} from 'react-icons/Ai'
import { GoDashboard } from 'react-icons/go'
import { GiKnifeFork} from 'react-icons/gi'
import { TbCurrencyNaira} from 'react-icons/tb'
import { MdOutlineBikeScooter} from 'react-icons/md'

function Dashboard_nav({minimize, setMinimize}) {
    const Route = useRouter()

  return (
    <div 
        className={styles.container}>
        <div 
            className={styles.logo}>

            {/* logo picture */}
            <Link 
                className={styles.logo_image} 
                href={`/`}>
                <Image 
                    src={Logo} 
                    fill 
                    style={{objectFit: "contain"}} 
                    alt="dinnerpro"/>
            </Link>
        </div>
        <div 
            className={styles.main}>
            {/* main navigation */}
            <span className={styles.hi_user}>
                <p>Hi {username}</p>
                <button
                    onClick={()=>setMinimize(!minimize)}>
                    {minimize? <HiMenuAlt3/>: <AiOutlineArrowRight/>}
                </button>
            </span>
            <ul className={styles.nav_list}>
                {
                    nav_endpoints.map((data)=>{
                    
                        return <span key={data.name}>
                            <Link 
                                href={`${data.path} }`}
                                className={`${styles.nav_link} ${Route.pathname == data.path && styles.nav_link_active}`}>
                                <p>{data.icon}</p>
                                <p>{data.name}</p>
                                <p className={`${styles.icon} ${minimize && styles.icon_active}`}>{data.icon}</p>
                            </Link>
                        </span>
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default Dashboard_nav


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

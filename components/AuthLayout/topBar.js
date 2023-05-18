/** @format */

import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "../../Assets/Logo.png";
import styles from "./Sidebar/sidebar_wrap.module.css";
import { AiOutlineSetting } from "react-icons/Ai";
import { GoDashboard } from "react-icons/go";
import { GiKnifeFork } from "react-icons/gi";
import { TbCurrencyNaira } from "react-icons/tb";
import { MdOutlineBikeScooter } from "react-icons/md";
import ProfileImage from "../../Assets/homesec3_1.png";
import Mini_notifications from "./mini_notifications";
function TopBar() {
	const Route = useRouter();

	const renderTop = nav_endpoints.filter((data) => {
		return Route.pathname === data.path;
	});

	return (
		<div className="flex fixed top-0 right-0 left-0 justify-between items-center w-screen h-[8vh] my-2 bg-white z-20">
			<Link className="relative w-[100px] h-[30px]" href="/">
				<Image
					src={Logo}
					fill
					style={{ objectFit: "contain" }}
					alt="dinnerpro"
				/>
			</Link>

			<div className="flex justify-between w-[80%] text-[1.3rem] font-[600] capitalize px-[4rem] items-center">
				<div className="flex items-center gap-4 justify-center">
					<p>{Route.pathname.substring(1)}</p>
				</div>

				<div>
					<Image
						src={ProfileImage}
						alt={`profile image`}
						heigth={40}
						width={40}
						className="roounded-[100%]"
					/>
				</div>
			</div>
		</div>
	);
}

export default TopBar;

// this username should be grabbed from the server on log in and then rendered dynamically to this component
const username = "Lana";

const nav_endpoints = [
	{
		name: "Dashboard",
		path: "/dashboard",
		icon: <GoDashboard />,
	},
	{
		name: "Orders",
		path: "/order",
		icon: <GiKnifeFork />,
	},
	{
		name: "delivery status",
		path: "/delivery_status",
		icon: <TbCurrencyNaira />,
	},
	{
		name: "Settings",
		path: "/settings",
		icon: <MdOutlineBikeScooter />,
	},
	{
		name: "Help desk",
		path: "/help_desk",
		icon: <AiOutlineSetting />,
	},
];

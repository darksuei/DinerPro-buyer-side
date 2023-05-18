import {HiOutlineBell} from 'react-icons/hi';
import { BiGift } from "react-icons/bi";
import { TbMessageDots } from "react-icons/tb";


function Mini_notifications({icon, number}) {
    const Icon = iconStore.filter(data=> data.name === icon)

  return (
    <div className="bg-black/10 relative rounded-full flex items-center justify-center aspect-square w-[2rem] shadow">
        <div className={`absolute ${icon !== "offer"? 'bg-yellow-500 text-white ':"bg-black/40 text-white"}  text-[0.5rem] aspect-square rounded-[100%] w-4 h-4 p-2 flex items-center justify-center -top-1 -right-1`}>{number}</div>
      {Icon[0].icon}
    </div>
  )
}
const iconStore = [
    {
        name: "notification",
        icon: <HiOutlineBell/>
    },
    {
        name: "offer",
        icon: <BiGift/>
    },{
        name: "message",
        icon: <TbMessageDots/>
    },
]

export default Mini_notifications

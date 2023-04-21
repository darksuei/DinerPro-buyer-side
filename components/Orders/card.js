import Image from "next/image";
import Link from "next/link";

import { AiOutlineHeart } from "react-icons/Ai";
import { useState } from "react";

export default function CartCard({ imageUrl, foodName, priceTag, ordeUrl }) {
    const [like, setLike] = useState(false)
  return (
    <div>
      <div className="relative w-[180px] h-[120px]">
        <Image
          style={{ objectFit: "cover" }}
          fill
          src={imageUrl}
          alt="Food Image"
        />
      </div>
      <div className="flex items-start bg-white p-4 justify-between">
        <div className="flex items-start gap-4">
          <div>
            <h4>{foodName}</h4>
            <p>{priceTag}</p>
          </div>

          <Link href={ordeUrl}>
            <p>Click to Order</p>
          </Link>
        </div>
        <div onClick={()=>setLike(!like)} >
          <AiOutlineHeart className={`${like && "bg-red"}`}/>
        </div> 
      </div>
    </div>
  );
}

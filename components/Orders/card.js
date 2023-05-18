import Image from "next/image";
import Link from "next/link";

import { AiOutlineHeart } from "react-icons/Ai";
import { useState } from "react";

export default function CartCard({ food }) {
  const [like, setLike] = useState(false);
  return (
    <div className="w-[150px] shadow-lg rounded-lg overflow-hidden">
      <div className="relative w-[100%] h-[80px]">
        <Image
          style={{ objectFit: "cover" }}
          fill
          src={food.imageUrl}
          alt="Food Image"
        />
      </div>
      <div className="flexw-full flex-col gap-6 items-start bg-white p-2 justify-between">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[.8rem] font-semibold">{food.foodName}</p>
            <p className="text-[.7rem] font-semibold">{food.priceTag}</p>
          </div>
          <div onClick={() => setLike(!like)}>
            <AiOutlineHeart size={20} className={`${like && "bg-red"}`} />
          </div>
        </div>

        <div >
          <p className="text-[.6rem] text-[#FFA902]">Click to Order</p>
        </div>
      </div>
    </div>
  );
}

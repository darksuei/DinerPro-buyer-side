import Image from "next/image";
import Link from "next/link";

import { AiOutlineHeart } from "react-icons/Ai";
import { useState } from "react";

export default function CartCard({ imageUrl, foodName, priceTag, ordeUrl }) {
  const [like, setLike] = useState(false);
  return (
    <div className="w-[180px] shadow-lg">
      <div className="relative w-[100%] h-[120px]">
        <Image
          style={{ objectFit: "cover" }}
          fill
          src={imageUrl}
          alt="Food Image"
        />
      </div>
      <div className="flexw-full flex-col items-start justify-center bg-white p-4 justify-between">
        <div className="flex items-center gap-8">
          <div>
            <p className="text-[.9rem] font-semibold">{foodName}</p>
            <p className="text-[.85rem] font-semibold text-[#FFA902]">{priceTag}</p>
          </div>
          <div onClick={() => setLike(!like)}>
            <AiOutlineHeart size={20} className={`${like && "bg-red"}`} />
          </div>
        </div>

        <Link href={ordeUrl}>
          <p>Click to Order</p>
        </Link>
      </div>
    </div>
  );
}

import Image from "next/image";

import { AiFillHeart } from "react-icons/Ai";
import { useState } from "react";
import { Store } from "@/contexts/orderCart";
import React, { useContext } from "react";
import CurrencyFormatter from "@/utils/formatCurrency";

export default function CartCard({ food }) {
  const { state, dispatch } = useContext(Store);
  const addToCartHandler = () => {
    // const existItem = state.cart.cartItems.find((x) => x.slug === food.slug);

    // // const quantity = existItem ? existItem.quantity + 1 : 1;
    dispatch({ type: "CART_ADD_ITEM", payload: { ...food } });
  };
  const [like, setLike] = useState(false);
  const toggleLike = () => {
    setLike(!like);
  };
  return (
    <div className="w-[181px] h-[200px] border border-[#CCCCCC] rounded-lg overflow-hidden ">
      <div className="relative w-[100%] h-[119px]">
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
            <p className="text-[.8rem]">{food.foodName}</p>
            {/* <p className="text-[.7rem] font-semibold">{food.priceTag}</p> */}
            <p className="text-[.7rem]">
              <CurrencyFormatter value={food.priceTag} />
            </p>
          </div>
          <div onClick={toggleLike}>
            <AiFillHeart
              size={25}
              className={` ${
                like ? "text-red-500" : "text-[#ccc]"
              } cursor-pointer`}
            />
          </div>
        </div>

        <button onClick={addToCartHandler}>
          <p className="text-[.6rem] text-[#FFA902] ">Click to Order</p>
        </button>
      </div>
    </div>
  );
}

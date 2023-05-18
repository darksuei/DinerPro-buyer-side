// import Searchbox from "../searchLocation";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import CartCard from "./card";
import { useEffect, useState, useRef } from "react";

import { foodArrays } from "@/utils/data";


export default function FoodContainer() {
  const [ScrollInd, setScrollInd] = useState("b");
  const ItemContainerRef = useRef();
  return (
    <div className="relative p-4 pr-12 flex flex-col gap-4  w-[60%] overflow-hidden border border-[#CCCCCC] rounded-lg">
      <h1 className="text-[1.3rem] font-bold">My Cart</h1>
      <div className="flex  w-full justify-between items-center">
        {/* <Searchbox />
        <Searchbox /> */}
      </div>
      <div className="absolute" active={ScrollInd === "e" || ScrollInd === "m"}>
        <BiLeftArrow
          onClick={() => {
            ItemContainerRef.current.scroll({
              left: ItemContainerRef.current.scrollLeft - 184,
              behavior: "smooth",
            });
          }}
          size={30}
        />
      </div>
      <div className="absolute" active={ScrollInd === "b" || ScrollInd === "m"}>
        <BiRightArrow
          onClick={() => {
            ItemContainerRef.current.scroll({
              left: ItemContainerRef.current.scrollLeft + 184,
              behavior: "smooth",
            });
          }}
          size={30}
        />
      </div>
      <div
        className="grid grid-rows-3 grid-flow-col gap-3 justify-start overflow-x-auto w-full"
        onScroll={(e) => {
          const { scrollWidth, scrollLeft, offsetWidth } = e.target;
          const SL = Math.ceil(scrollLeft + offsetWidth);
          if (scrollLeft <= 0) setScrollInd("b");
          if (scrollLeft > 0 && scrollLeft < scrollWidth) setScrollInd("m");
          if (SL >= scrollWidth) setScrollInd("e");
        }}
        ref={ItemContainerRef}>
        {foodArrays.map((food, i) => {
          return (
            <CartCard
              key={i}
              // imageUrl={food.imageUrl}
              // foodName={food.foodName}
              // priceTag={food.priceTag}
              // ordeUrl={food.orderUrl}
             food={food}
            />
          );
        })}
      </div>
      
    </div>
  );
}


import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import CartCard from "./card";
import { useEffect, useState, useRef } from "react";
import { foodArrays } from "@/utils/data";
import Search from "../Search/search";
import LocationSearch from "../Search/location-search";

export default function FoodContainer() {
  const [scrollInd, setScrollInd] = useState("b");
  const itemContainerRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1000);
  const itemWidth = 200; // Width of each item in pixels
  const scrollOffset = 50; // Offset for scroll calculations

  useEffect(() => {
    // const handleResize = () => {
    //   setScrollWidth(itemContainerRef.current.scrollWidth);
    //   setContainerWidth(itemContainerRef.current.offsetWidth);
    // };

    const handleScroll = () => {
      const { scrollLeft, offsetWidth } = itemContainerRef.current;
      const maxScrollLeft = scrollWidth - offsetWidth;

      if (scrollLeft <= 0) setScrollInd("b");
      else if (scrollLeft >= maxScrollLeft - scrollOffset) setScrollInd("e");
      else setScrollInd("m");
    };

    setScrollWidth(itemContainerRef.current.scrollWidth);
    setContainerWidth(itemContainerRef.current.offsetWidth);
    // window.addEventListener("resize", handleResize);
    itemContainerRef.current.addEventListener("scroll", handleScroll);

    return () => {
      // window.removeEventListener("resize", handleResize);
      // itemContainerRef.current.removeEventListener("scroll", handleScroll);
    };
  }, [scrollWidth]);

  const scrollNext = () => {
    const { scrollLeft, offsetWidth } = itemContainerRef.current;
    const maxScrollLeft = scrollWidth - offsetWidth;
    const nextScrollLeft = Math.min(scrollLeft + itemWidth, maxScrollLeft);
    itemContainerRef.current.scrollTo({
      left: nextScrollLeft,
      behavior: "smooth",
    });
    setScrollInd("m"); // Show Previous button
  };

  const scrollPrev = () => {
    const { scrollLeft } = itemContainerRef.current;
    const prevScrollLeft = Math.max(scrollLeft - itemWidth, 0);
    itemContainerRef.current.scrollTo({
      left: prevScrollLeft,
      behavior: "smooth",
    });
    setScrollInd("m"); // Show Next button
  };

  return (
    <div className="overflow-x-auto">
      <div className="relative pr-12 pl-12  flex flex-col w-[700px] h-[820px] overflow-hidden border border-[#CCCCCC] rounded-lg">
        <h1 className="text-[1.3rem] font-bold py-8">My Cart</h1>
        <div className="flex mb-5 items-center gap-8">
          <Search />
          <LocationSearch />
        </div>

        <div className="flex w-full justify-between items-center">
          {/* <Searchbox />
        <Searchbox /> */}
        </div>
        <div
          className="grid grid-rows-3 grid-flow-col gap-6  overflow-x-hidden  w-full "
          ref={itemContainerRef}
        >
          {foodArrays.slice(0, visibleItems).map((food, i) => (
            <CartCard
              key={i}
              // imageUrl={food.imageUrl}
              // foodName={food.foodName}
              // priceTag={food.priceTag}
              // ordeUrl={food.orderUrl}
              food={food}
            />
          ))}
        </div>
        {scrollInd === "b" || scrollInd === "m" ? (
          <BiRightArrow
            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={scrollNext}
            size={30}
          />
        ) : null}
        {scrollInd === "e" || scrollInd === "m" ? (
          <BiLeftArrow
            className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={scrollPrev}
            size={30}
          />
        ) : null}
      </div>
    </div>
  );
}

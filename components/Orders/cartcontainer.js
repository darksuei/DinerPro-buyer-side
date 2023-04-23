import Searchbar from "../searchBar";
import SearchLocation from "../searchLocation";

import CartCard from "./card";

//image import

import Img1 from "@/public/images/cartTest/img1.png";
import Img2 from "@/public/images/cartTest/img2.png";

export default function Cart() {
  return (
    <div className="h-[85vh] w-[65%] overflow-hidden">
      <h1>Cart</h1>
      <div>
        <SearchLocation />
        <Searchbar />
      </div>
      <div className="grid grid-rows-3 grid-flow-col gap-3 overflow-x-auto w-[89%]">
        {foodArrays.map((food, i) => {
          return (
            <CartCard
              key={i}
              imageUrl={food.imageUrl}
              foodName={food.foodName}
              priceTag={food.priceTag}
              ordeUrl={food.orderUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

const foodArrays = [
  {
    imageUrl: Img1,
    foodName: "French Fries",
    priceTag: "1200",
    orderUrl: "",
  },
  {
    imageUrl: Img1,
    foodName: "French Fries",
    priceTag: "1200",
    orderUrl: "",
  },
  {
    imageUrl: Img1,
    foodName: "French Fries",
    priceTag: "1200",
    orderUrl: "",
  },
  {
    imageUrl: Img1,
    foodName: "French Fries",
    priceTag: "1200",
    orderUrl: "",
  },
  {
    imageUrl: Img1,
    foodName: "French Fries",
    priceTag: "1200",
    orderUrl: "",
  },
  {
    imageUrl: Img1,
    foodName: "French Fries",
    priceTag: "1200",
    orderUrl: "",
  },
  {
    imageUrl: Img1,
    foodName: "French Fries",
    priceTag: "1200",
    orderUrl: "",
  },
  {
    imageUrl: Img1,
    foodName: "French Fries",
    priceTag: "1200",
    orderUrl: "",
  },
  {
    imageUrl: Img1,
    foodName: "French Fries",
    priceTag: "1200",
    orderUrl: "",
  },
  {
    imageUrl: Img1,
    foodName: "French Fries",
    priceTag: "1200",
    orderUrl: "",
  },
  {
    imageUrl: Img1,
    foodName: "French Fries",
    priceTag: "1200",
    orderUrl: "",
  },
  {
    imageUrl: Img1,
    foodName: "French Fries",
    priceTag: "1200",
    orderUrl: "",
  },
  {
    imageUrl: Img1,
    foodName: "Clam toast",
    priceTag: "1200",
    orderUrl: "",
  },
  {
    imageUrl: Img1,
    foodName: "Nkwobi",
    priceTag: "1200",
    orderUrl: "",
  },
  {
    imageUrl: Img1,
    foodName: "Beef Burger",
    priceTag: "1200",
    orderUrl: "",
  },
  {
    imageUrl: Img2,
    foodName: "French Fries",
    priceTag: "1200",
    orderUrl: "",
  },
  {
    imageUrl: Img1,
    foodName: "French Fries",
    priceTag: "2100",
    orderUrl: "",
  },
  {
    imageUrl: Img2,
    foodName: "French Fries",
    priceTag: "2500",
    orderUrl: "",
  },
  {
    imageUrl: Img1,
    foodName: "Noodles",
    priceTag: "1200",
    orderUrl: "",
  },
  {
    imageUrl: Img1,
    foodName: "French Fries",
    priceTag: "1900",
    orderUrl: "",
  },
  {
    imageUrl: Img2,
    foodName: "Egg Sauce",
    priceTag: "1500",
    orderUrl: "",
  },
  {
    imageUrl: Img2,
    foodName: "Egg Sauce",
    priceTag: "1500",
    orderUrl: "",
  },
  {
    imageUrl: Img2,
    foodName: "Egg Sauce",
    priceTag: "1500",
    orderUrl: "",
  },
  {
    imageUrl: Img2,
    foodName: "Egg Sauce",
    priceTag: "1500",
    orderUrl: "",
  },
  {
    imageUrl: Img2,
    foodName: "Egg Sauce",
    priceTag: "1500",
    orderUrl: "",
  },
  {
    imageUrl: Img2,
    foodName: "Egg Sauce",
    priceTag: "1500",
    orderUrl: "",
  },
  {
    imageUrl: Img2,
    foodName: "Egg Sauce",
    priceTag: "1500",
    orderUrl: "",
  },
  {
    imageUrl: Img2,
    foodName: "Egg Sauce",
    priceTag: "1500",
    orderUrl: "",
  },
  {
    imageUrl: Img2,
    foodName: "Egg Sauce",
    priceTag: "1500",
    orderUrl: "",
  },
  {
    imageUrl: Img2,
    foodName: "Egg Sauce",
    priceTag: "1500",
    orderUrl: "",
  },
  {
    imageUrl: Img2,
    foodName: "Egg Sauce",
    priceTag: "1500",
    orderUrl: "",
  },
  {
    imageUrl: Img2,
    foodName: "Egg Sauce",
    priceTag: "1500",
    orderUrl: "",
  },
  {
    imageUrl: Img2,
    foodName: "Egg Sauce",
    priceTag: "1500",
    orderUrl: "",
  },
  {
    imageUrl: Img2,
    foodName: "Egg Sauce",
    priceTag: "1500",
    orderUrl: "",
  },
];

import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { foodArrays } from "@/utils/data";

const CartContainer = () => {
  const router = useRouter();

  // Retrieve the cart items from the query parameters
  const { cartItems } = router.query;

  // Convert the query string to an array of cart items
  // const cartItemsArray = cartItems ? cartItems.split(",") : [];
  const cartItemsArray = cartItems ? cartItems.split(",") : [];

  // const cartItemsArray = cartItems ? JSON.parse(cartItems) : [];

  return (
    <div className="w-[500px] border border-[#FFA902] rounded-lg h-[820px] p-5 overflow-y-auto flex flex-col">
      <h1 className="text-[1.3rem] font-bold py-2">My Orders</h1>
      <div>
        <ul className="flex items-center justify-between space-x-4">
          <li>Items</li>
          <li>Qty</li>
          <li>Amount</li>
        </ul>
        <hr className="border-[#ccc] mt-3" />
      </div>

      {cartItemsArray.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between space-x-4 mb-2"
        >
          <div>
            <div className="relative w-[100px] h-[70px] mt-2">
              <Image
                src={item.imageUrl}
                fill
                style={{ objectFit: "contain" }}
                alt={item.foodName}
                className="rounded-lg"
              />
            </div>
            <p>{item}</p>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <p>{item.quantity}jjj</p>
            </div>
          </div>
          <div>{item.priceTag}1234</div>
        </div>
      ))}
    </div>
  );
};

export default CartContainer;

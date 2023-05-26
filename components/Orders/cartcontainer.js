import Image from "next/image";
import React, { useContext, useState } from "react";
import { Store } from "@/contexts/orderCart";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
// import axios from "axios";
// import { toast } from "react-toastify";
import shoppingCart from "@/public/images/shoppingCart.png";
//currenct formatter
import CurrencyFormatter from "@/utils/formatCurrency";

function CartScreen() {
  //usestate for confirmed order
  const [confirmed, setConfirmed] = useState(false);

  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  //increase item quantity
  const increaseQuantity = (item) => {
    dispatch({
      type: "CART_INCREASE_QUANTITY",
      payload: { slug: item.slug },
    });
  };

  //decrease item quantity
  const decreaseQuantity = (item) => {
    if (item.quantity === 1) {
      removeItem(item);
    } else {
      dispatch({
        type: "CART_DECREASE_QUANTITY",
        payload: { slug: item.slug },
      });
    }
  };

  //remove item from cart
  const removeItem = (item) => {
    dispatch({
      type: "CART_REMOVE_ITEM",
      payload: { slug: item.slug },
    });
  };

  //clear cart/ cancel order
  const clearItems = (item) => {
    dispatch({
      type: "CART_CLEAR_ITEMS",
    });
    setConfirmed(false);
  };

  //calculate total amount
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      return total + item.priceTag * item.quantity;
    }, 0);
  };

  //for the confirmed button
  const handleConfirmOrder = () => {
    setConfirmed(true);
  };

  return (
    <div className="w-[500px] border border-[#FFA902] rounded-lg h-[820px] p-5 overflow-y-auto flex flex-col">
      <h1 className="text-[1.3rem] font-bold py-2">My Orders</h1>
      <div className="">
        <ul className="flex items-center justify-between space-x-4">
          <li>Items</li>
          <li>Qty</li>
          <li>Amount</li>
        </ul>
        <hr className="border-[#ccc] mt-3" />
      </div>
      {cartItems.length === 0 ? (
        <div className="h-full flex flex-col items-center justify-center">
          <div className="relative w-[74px] h-[54px]">
            <Image src={shoppingCart} fill style={{ objectFit: "cover" }} />
          </div>
          <p>You have not made any orders</p>
        </div>
      ) : (
        <div className="">
          {cartItems.map((item, i) => (
            <div
              key={i}
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
                <p className="w-[100px]">{item.foodName}</p>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <button
                    className="px-2 py-1 border border-red-700 rounded-md"
                    onClick={() => decreaseQuantity(item)}
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    className="px-2 py-1 border border-green-700 rounded-md"
                    onClick={() => increaseQuantity(item)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                {/* <p>{item.priceTag}</p> */}
                <p>
                  <CurrencyFormatter value={item.priceTag} />
                </p>
              </div>
            </div>
          ))}
          <div className="total item">
            <div className=" p-5 bg-[#F3F3FE] rounded-lg flex flex-row mt-10 justify-between">
              <p>item total</p>
              <p>
                <CurrencyFormatter value={calculateTotalAmount()} />
              </p>
            </div>
            <div className="flex flex-row mt-5 justify-between">
              {confirmed ? (
                <button className="border hover:border-[#FFA902] text-white hover:bg-white hover:text-black bg-[#FFA902] p-5 w-[200px] rounded-lg">
                  Checkout
                </button>
              ) : (
                <button
                  className="border border-green-700 text-green-700 hover:bg-green-700 hover:text-white p-5 w-[200px] rounded-lg"
                  onClick={handleConfirmOrder}
                >
                  Confirm order
                </button>
              )}
              <button
                className="border border-red-700 text-red-700 hover:bg-red-700 hover:text-white p-5 w-[200px] rounded-lg"
                onClick={clearItems}
              >
                cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });

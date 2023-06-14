import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Store } from "@/contexts/orderCart";
import CurrencyFormatter from "@/utils/formatCurrency";
import MonnifyConfig from "@/monnify-payment/monnifyConfig";
//payments

const CartContainer = () => {
  const router = useRouter();
  //using the useContext hook from React to access the state of a context "Store".
  const { state } = React.useContext(Store);
  const { cartItems } = state.cart;

  //calculate the subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.priceTag * item.quantity,
    0
  );
  //discount value
  const discount = 1000;
  //calculating total amount
  const total = subtotal - discount;

  return (
    <div className="w-[500px] border border-[#FFA902] rounded-lg h-[830px] p-5 overflow-y-auto flex flex-col">
      <h1 className="text-[1.3rem] font-bold py-2">My Orders</h1>

      {cartItems.length === 0 ? (
        <div className="h-full flex flex-col items-center justify-center">
          <p>You have not added any items to your cart.</p>
        </div>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between space-x-4 mb-2 border-[1px] border-[#ffa902] p-5"
            >
              <div>
                <div className="relative w-[100px] h-[70px] mt-2">
                  <Image
                    src={item.imageUrl}
                    alt={item.foodName}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
                <p>{item.foodName}</p>
                {/* <p>{item.priceTag}</p> */}
                <CurrencyFormatter value={item.priceTag} />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <p>qty: {item.quantity}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="p-5">
            <hr className="border-[#ccc] mt-5" />
            <div className="flex justify-between mt-5">
              <p>subtotal: </p>
              <CurrencyFormatter value={subtotal} />
            </div>
            <div className="flex justify-between">
              <p>discount: </p>
              <CurrencyFormatter value={discount} />
            </div>
            <hr className="border-[#ccc] mt-5" />
            <div className="flex justify-between mt-5">
              <p>total: </p>
              <CurrencyFormatter value={total} />
            </div>
          </div>
          <div className="flex justify-center">
            <MonnifyConfig totalAmount={total} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartContainer;

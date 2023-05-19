/** @format */

import Image from "next/image";
import React, { useContext } from "react";
import { Store } from "@/contexts/orderCart";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import axios from "axios";
import { toast } from "react-toastify";
import shoppingCart from "@/public/images/shoppingCart.png"

function CartScreen() {
	const { state, dispatch } = useContext(Store);
	const {cart: { cartItems }} = state;
	console.log(cartItems)

	return (
		<div className="w-[38%] border border-[#FFA902] rounded-lg min-h-[85vh]">
			<h1 className="text-[1.3rem] font-bold">My Orders</h1>
            <div className="flex items-center justify-between shadow-lg">
                <p>Items</p>
                <p>Qty</p>
                <p>Amount</p>
            </div>
			{cartItems.length === 0 ? (
				<div className="h-full flex flex-col items-center justify-center">
					<div className="relative w-[74px] h-[54px]">
						<Image src={shoppingCart} fill style={{objectFit:"cover"}} />
					</div>
					<p>You have not made any orders </p>
				</div>
			) : (
				<div className="">
					{
						cartItems.map((item, i)=>{
							return(
								<div key={i}>
									<div className="relative w-[73px] h-[57px]">
										<Image src={item.imageUrl} fill style={{objectFit:"contain"}} alt={item.foodName}/>
									</div>
								</div>
							)
						})
					}
				</div>
			)}
		</div>
	);
}

export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });
// export default CartScreen;
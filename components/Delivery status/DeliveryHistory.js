import React from 'react'
import CurrencyFormatter from "@/utils/formatCurrency";
import { Store } from "@/contexts/orderCart";

export default function DeliveryHistory() {
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
        <div class="relative overflow-x-auto">
            <div>
                <table class="w-full text-sm text-left">
                    <thead class="text-xs mb-4">
                        <tr>
                            <th scope="col" class="px-5 py-2">
                                Payment ID
                            </th>
                            <th scope="col" class="px-5 py-2">
                                Services
                            </th>
                            <th scope="col" class="px-5 py-2">
                                Category
                            </th>
                            <th scope="col" class="px-5 py-2">
                                Date
                            </th>
                            <th scope="col" class="px-5 py-2">
                                Status
                            </th>
                            <th scope="col" class="px-5 py-2">
                                Amount
                            </th>
                            <th scope="col" class="px-5 py-2">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody class="text-xs">
                        <tr class="bg-white border">
                            <th scope="row" className="px-5  py-3 font-medium whitespace-nowrap underline text-[#FFA902]">
                                #322227
                            </th>
                            <td class="px-5 py-3">
                                Food
                            </td>
                            <td class="px-5 py-3">
                                Cuisines
                            </td>
                            <td class="px-5 py-3">
                                Mar 30 2023
                            </td>
                            <td class="px-5 py-3">
                                <div className='border-2 border-[#FFA902] text-center py-1 rounded-xl bg-orange-200 text-[#FFA902]'>
                                    Pending </div>
                            </td>
                            <td class="px-5 py-3">
                                <CurrencyFormatter value={total} />
                            </td>
                            <td class="px-5 py-3">
                                ...
                            </td>
                        </tr>

                        <tr class="bg-white">
                            <th scope="row" class="px-5 py-3 font-medium underline whitespace-nowrap text-[#FFA902]">
                                #322227
                            </th>
                            <td class="px-5 py-3">
                                Food
                            </td>
                            <td class="px-5 py-3">
                                Cuisines
                            </td>
                            <td class="px-5 py-3">
                                Mar 30 2023
                            </td>
                            <td class="px-5 py-3">
                                <div className='border-2 border-green-300 text-center py-1 rounded-xl bg-green-200 text-green-500'>
                                    Successful </div>
                            </td>
                            <td class="px-5 py-3">
                                <CurrencyFormatter value={total} />
                            </td>
                            <td class="px-5 py-3">
                                ...
                            </td>
                        </tr>

                        <tr class="bg-white border">
                            <th scope="row" class="px-5 py-3 font-medium underline whitespace-nowrap text-[#FFA902]">
                                #322227
                            </th>
                            <td class="px-5 py-3">
                                Food
                            </td>
                            <td class="px-5 py-3">
                                Cuisines
                            </td>
                            <td class="px-5 py-3">
                                Mar 30 2023
                            </td>
                            <td class="px-5 py-3">
                                <div className='border-2 border-green-300 text-center py-1 rounded-xl bg-green-200 text-green-500'>
                                    Successful </div>
                            </td>
                            <td class="px-5 py-3">
                                <CurrencyFormatter value={total} />
                            </td>
                            <td class="px-5 py-3">
                                ...
                            </td>
                        </tr>

                        <tr class="bg-white">
                            <th scope="row" class="px-5 py-3 font-medium underline whitespace-nowrap text-[#FFA902] cursor-pointer">
                                #322227
                            </th>
                            <td class="px-5 py-3">
                                Food
                            </td>
                            <td class="px-5 py-3">
                                Cuisines
                            </td>
                            <td class="px-5 py-3">
                                Mar 30 2023
                            </td>
                            <td class="px-5 py-3">
                                <div className='border-2 border-orange-300 text-center py-1 rounded-xl bg-orange-200 text-orange-500'>
                                    Pending </div>
                            </td>
                            <td class="px-5 py-3">
                                <CurrencyFormatter value={total} />
                            </td>
                            <td class="px-5 py-3">
                                ...
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>

    )
}


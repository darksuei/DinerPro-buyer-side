import React from "react";
import DeliveryHistory from "./DeliveryHistory";

const AllOrders = () => {

  return (
    <div>

      <div className='flex flex-col items-center justify-center gap-3 mx-1 p-2'>

        <div className='relative w-full text-lg'>
          <ul className='flex flex-row items-center justify-around gap-10 border border-solid border-gray-350 py-2 rounded-full font-medium'>
          <div className="absolute bg-black p-6 w-[30%] left-0 text-white z-0 rounded-full"></div>
          <li>All orders</li>
            <li>Pending</li>
            <li>Completed</li>
          </ul>
        </div>

        <div className='w-full p-4 border border-gray-300 rounded-lg'>
          <h2 className='text-left text-lg m-2'>Delivery History</h2>
        <DeliveryHistory pagination/>
        </div>

      </div>
    </div>
  )
}

export default AllOrders;
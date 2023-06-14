import React from 'react';
import AuthPage_Layout_wrap from "@/components/AuthLayout/authpage_wrap";
import AllOrders from '@/components/Delivery status/AllOrders';

export default function Delivery() {
  return (
    <AuthPage_Layout_wrap>
      <div>
        <AllOrders />
      </div>
    </AuthPage_Layout_wrap>
  )
}


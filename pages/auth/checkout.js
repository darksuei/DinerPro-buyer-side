import React from "react";
import AuthPage_Layout_wrap from "@/components/AuthLayout/authpage_wrap";
import Head from "next/head";
import CheckoutComponent from "@/components/Checkouts/Index";

const Checkout = () => {
  return (
    <AuthPage_Layout_wrap>
      <Head>
        <title>Dinerpro checkout</title>
      </Head>
      <div className="pt-6 px-4">
        <CheckoutComponent />
      </div>
    </AuthPage_Layout_wrap>
  );
};

export default Checkout;

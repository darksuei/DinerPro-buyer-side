import React from "react";
import AuthPage_Layout_wrap from "@/components/AuthLayout/authpage_wrap";
import Image from "next/image";
import successImage from "../../public/images/success/Success-DinerPro.svg";

import { useRouter } from "next/router";
import Head from "next/head";

export default function Success() {
  const router = useRouter();
  const { paymentID } = router.query;

  return (
    <AuthPage_Layout_wrap>
      <Head>
        <title>DinerPro - Payment Successful</title>
      </Head>

      <div className="flex justify-center items-center">
        <div className="border border-[#B1B1B4] w-[1010px] h-[852px] rounded-lg mt-6 text-center ">
          <div className="flex justify-center mt-10">
            <Image src={successImage} alt="success" />
          </div>

          <h1 className="font-[400px] text-[36px] mt-4">Order Confirmed</h1>
          <p className="text-lg">your Payment ID: {paymentID}</p>
          <div className="mt-6 flex justify-center gap-5">
            <button className="mt-10 bg-[#ffa902] w-[311px] p-[15px] rounded-lg">
              Review
            </button>
            <button className="mt-10 bg-[#fff] border border-[#4F4F4F] w-[311px] p-[15px] rounded-lg">
              Back to dashboard
            </button>
          </div>
        </div>
      </div>
    </AuthPage_Layout_wrap>
  );
}

import React from "react";
import Script from "next/script";
// import Link from "next/link";
import { useRouter } from "next/router";

export default function MonnifyConfig({ totalAmount }) {
  const router = useRouter();
  const payWithMonnify = () => {
    const paymentID = Math.floor(Math.random() * 1000000000 + 1);
    window.MonnifySDK.initialize({
      amount: totalAmount,
      currency: "NGN",
      reference: "" + "" + paymentID,
      customerFullName: "John Doe",
      customerEmail: "monnify@monnify.com",
      customerMobileNumber: "08121281921",
      apiKey: "MK_TEST_LPPZNT4N70",
      contractCode: "4768399654",
      paymentDescription: "Test Pay",
      isTestMode: true,
      onComplete: function (response) {
        console.log(response);
        if (response.status === "SUCCESS") {
          router.push(`/auth/success?paymentID=${paymentID}`);
        } else if (response.status === "FAILED") {
          // Handle unsuccessful payment
          console.log("Payment was not successful.");
          router.push("/auth/unsuccessful");
        } else {
          console.log("something went wrong");
        }
      },
      onClose: function (data) {
        console.log(data);
      },
    });
  };

  return (
    <>
      <Script
        src="https://sandbox.sdk.monnify.com/plugin/monnify.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(
            `script loaded correctly, window.MonnifySDK has been populated`
          )
        }
      />

      <button
        onClick={payWithMonnify}
        className="mt-10 bg-[#ffa902] w-[311px] p-[15px] rounded-lg"
      >
        Pay with Monnify
      </button>
    </>
  );
}

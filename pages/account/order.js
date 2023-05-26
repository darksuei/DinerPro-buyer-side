import Head from "next/head";
import AuthPage_Layout_wrap from "@/components/AuthLayout/authpage_wrap";
import OrderComponent from "@/components/Orders";

function order() {
  return (
    <AuthPage_Layout_wrap>
      <Head>
        <title>Dinerpro Order</title>
      </Head>
      <div className="p-4 ">
        <div>main Order contents here</div>
      </div>
      <OrderComponent />
    </AuthPage_Layout_wrap>
  );
}

export default order;

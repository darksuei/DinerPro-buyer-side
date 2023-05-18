/** @format */

import AuthPage_Layout_wrap from "@/components/AuthLayout/authpage_wrap";
import Head from "next/head";

import OrderComponent from "@/components/Orders";

export default function Order() {
	return (
		<AuthPage_Layout_wrap>
			<Head>
				<title>Dinerpro dashboard</title>
			</Head>
			<div className="pt-6 px-4">
				<OrderComponent />
			</div>
		</AuthPage_Layout_wrap>
	);
}

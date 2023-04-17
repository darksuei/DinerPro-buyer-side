import AuthPage_Layout_wrap from "@/components/AuthLayout/authpage_wrap";
import Head from "next/head";
import styles from "../components/AuthLayout/Sidebar/sidebar_wrap.module.css";

export default function Order() {
  return (
    <AuthPage_Layout_wrap>
      <Head>
        <title>Dinerpro dashboard</title>
      </Head>
      <div className="p-4">
        <div
          className={`${styles.no_scroll_bar} overflow-y-auto max-h-[calc(100vh-4rem)] `}>
          main dashboard contents here
        </div>
      </div>
    </AuthPage_Layout_wrap>
  );
}

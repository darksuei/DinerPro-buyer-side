import Dashboard_wrap from "@/components/dashboard/dashboard_wrap";
import Head from "next/head";
import styles from "@/components/dashboard/dashboard_nav.module.css";

function Dashboard() {
  return (
    <Dashboard_wrap>
      <Head>
        <title>Dinerpro dashboard</title>
      </Head>
      <div className="p-4">
        <div
          className={`${styles.no_scroll_bar} overflow-y-auto max-h-[calc(100vh-4rem)] `}>
          main dashboard contents here
        </div>
      </div>
    </Dashboard_wrap>
  );
}

export default Dashboard;

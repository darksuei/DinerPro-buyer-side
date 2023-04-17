import Dashboard_wrap from "@/components/dashboard/dashboard_wrap"
import Head from "next/head"
import styles from '@/components/dashboard/dashboard_nav.module.css'
import Section1 from "@/components/dashboard_component/section1"
import Section2 from "@/components/dashboard_component/section2"
import Aside from "@/components/dashboard_component/aside"

function Dashboard() {
 
  return (
    <Dashboard_wrap>
        <Head>
            <title>Dinerpro dashboard</title>
        </Head>
        <div className="px-4">
          <div className={`${styles.no_scroll_bar} overflow-y-auto max-h-[calc(100vh-4rem)] `}>
            {/* food search box here */}
            <Section1/>
            <span className="flex gap-2 mt-4">
              <Section2/>
              <Aside/>
            </span>
          </div>
         </div>
    </Dashboard_wrap>
  )
}

export default Dashboard

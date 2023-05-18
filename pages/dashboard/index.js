import AuthPage_Layout_wrap from '../../components/AuthLayout/authpage_wrap.js'
import Dashboard_wrap from "@/components/dashboard/dashboard_wrap"
import Head from "next/head"
import styles from '@/components/dashboard/dashboard_nav.module.css'
import Section1 from "@/components/dashboard_component/section1"
import Section2 from "@/components/dashboard_component/section2"
import Aside from "@/components/dashboard_component/aside"

function Dashboard2() {
  return (
    <AuthPage_Layout_wrap>
       <Head>
            <title>Dinerpro dashboard</title>
        </Head>
       <section className='px-4'>
        <Section1/>
        <span className="flex gap-2 mt-4">
              <Section2/>
              <Aside/>
            </span>
       </section>
    </AuthPage_Layout_wrap>
  )
}

export default Dashboard2

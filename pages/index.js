import Heros from "@/components/Home_Page/Herospage/heros";
import HomeSection1 from "@/components/Home_Page/Section_1/section1";
import HomeSection2 from "@/components/Home_Page/Section2/section2";
import Services from "@/components/Home_Page/Section3/Services";
import Comments from "@/components/Home_Page/Section4/comments";

import Layout from "@/components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Heros />
      <HomeSection1 />
      <HomeSection2 />
      <Services />
      <Comments />
    </Layout>
  );
}

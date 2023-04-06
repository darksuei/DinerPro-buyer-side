import Main from './main';
import HeroBox from '../heroBox';
import Layout from '../Layout/Layout';

function AboutUs() {
  return (
    <Layout>
      <HeroBox
        background={`bg-[url('/images/aboutus/aboutUs.jpeg')]`}
        title={'about us'}/>
      <Main/>
    </Layout>
  )
}

export default AboutUs

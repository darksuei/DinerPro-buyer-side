import HeroBox from '../heroBox'
import ServicesMain from './Services_Main'
import Layout from '../Layout/Layout'

function Services() {
  return (
    <Layout>
      <HeroBox
        background={`bg-[url('/images/services/servicesHero.jpeg')]`}
        title={'our services'}/>
        <ServicesMain/>
    </Layout>
  )
}

export default Services

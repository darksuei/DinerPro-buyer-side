// import HeroBox from "../components/heroBox"
import HeroBox from "../heroBox";
import Main from "./main";
import Layout from "../Layout/Layout";

function Offers() {
  return (
    <Layout>
      <HeroBox
        background={`bg-[url('/images/offer/offer.jpeg')]`}
        title={"Solutions"}
      />
      <Main />
    </Layout>
  );
}

export default Offers;

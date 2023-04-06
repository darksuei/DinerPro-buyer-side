import TitleBox from "../titleBox";
import OfferCard from "./offer_card";
import offer from "../../assets/offer.json";

function Main() {
  const offerDetails = offer.map((data) => {
    return (
      <OfferCard
        key={data.name}
        background={data.background}
        text={data.text}
        name={data.name}
      />
    );
  });

  return (
    <div className="pt-[4rem]">
      <div className="md:px-[4rem]">
        <TitleBox
          title={
            "our software is designed to make the daily management of both customers and workers as easy and complicated as possible for restaurant and caterers"
          }
        />
      </div>
      <div className="py-[4rem]  flex flex-col gap-[2rem] px-[2rem] md:px-[4rem]">
        {offerDetails}
      </div>
    </div>
  );
}

export default Main;

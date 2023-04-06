import TitleBox from "../titleBox";
import ServiceCard from "./Service_Card";
import servicesDetails from "../../assets/services.JSON";

function ServicesMain() {
  const serviceRenderer = servicesDetails.map((service) => {
    return (
      <ServiceCard
        key={service.name}
        background={service.background}
        button={service.name}
      />
    );
  });

  return (
    <div className="px-[2rem] py-[2rem] sm:px-[3rem] sm:py-[3rem] md:px-[6rem] md:py-[6rem] ">
      <TitleBox
        title={`we offer a range of kitchen management services, ranging from order generation and delivery to restaurants.`}
      />
      <div className={` sm:flex gap-[4rem] flex-wrap justify-center pt-[4rem]`}>
        {serviceRenderer}
      </div>
    </div>
  );
}

export default ServicesMain;

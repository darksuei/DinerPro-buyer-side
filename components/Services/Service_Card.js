// import style from '../../styles/landingpages/services.module.css'
import style from "../../styles/landingpages/services.module.css";


function Service_Card({ background, button }) {
  return (
    <div
      key={button}
      style={{ backgroundImage: `url(${background})` }}
      className={`relative overflow-hidden bg-blend-multiply hover:bg-black/40 bg-cover bg-center aspect-[0.84] transition duration-500 min-w-[40%] rounded-b-[20px] flex items-end  max-sm:w-[470px] max-sm:m-auto max-sm:max-w-[95%] max-sm:mb-[2rem]`}>
      <div
        className={` bg-white rounded-[20px] font-[500] h-[20%] w-full font-IBM text-[1.2rem] sm:text-[1rem] lg:text-[1.5rem] transition duration-500 flex items-center justify-center border-[0.05rem] border-black/20 capitalize  `}>
        <p>{button}</p>
      </div>
      {}
    </div>
  );
}

export default Service_Card;

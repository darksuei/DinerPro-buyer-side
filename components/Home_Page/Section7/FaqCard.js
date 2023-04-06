import { useState } from "react";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

function FaqQuestion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full px-[4vw] text-[1.2rem]">
      <button onClick={toggleOpen} className="flex items-center justify-between py-4 px-8 bg-[#434141]
       text-white w-full">
        <p className="">{question}</p> {isOpen ? <div><BiChevronUp/></div>: <div><BiChevronDown/></div>}
      </button>
      {isOpen && <p>{answer}</p>}
    </div>
  );
}

export default FaqQuestion;

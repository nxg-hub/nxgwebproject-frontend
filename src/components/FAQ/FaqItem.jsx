import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import faqicon from "../../assets/images/faqicon.png";

const FaqItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`p-[0.7rem] border-[1px] border-[#D9DCE2] rounded-[10px] mb-4 cursor-pointer w-full ${
        isOpen ? "bg-[#e6e6e6]" : ""
      }`}
      onClick={toggleAccordion}
    >
      <div
        className={`flex justify-between items-center ${isOpen ? "" : ""} ${
          isOpen ? "" : ""
        }`}
      >
        <h4
          className={`text-[14px] md:text-[13px] text-[#717171] hover:text-[#2596BE] ${
            isOpen ? "!text-[#2596BE]" : ""
          }`}
        >
          {item.question}
        </h4>
        <div
          className={`w-[1.75rem] h-[1.75rem] flex center transition-colors ${
            isOpen ? "bg-[#2596BE] rounded-full text-primary" : ""
          }`}
        >
          {isOpen ? <AiOutlineMinus /> : <img src={faqicon} alt="" />}
        </div>
      </div>

      {isOpen && (
        <div className="mt-4">
          <p className="text-[12px] md:text-[13px] text-[#717171] font-normal">
            {item.content}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;

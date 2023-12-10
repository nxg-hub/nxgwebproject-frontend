import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import './Faq.css'; // Import your CSS file
import faqicon from '../../assets/images/faqicon.png'

const FaqItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`p-[0.7rem] border-[1px] border-[#D9DCE2] rounded-[10px] mb-4 cursor-pointer w-full ${isOpen ? 'open red-bg' : ''}`} onClick={toggleAccordion}>
      <div
        className={`flex justify-between items-center ${isOpen ? '' : ''} ${
          isOpen ? '' : ''
        }`}
      >
        <h4 className={`question ${isOpen ? 'question-text' : ''}`}>{item.question}</h4>
        <div className={`icon ${isOpen ? 'open' : ''}`}>
          {isOpen ? <AiOutlineMinus /> : <img src={faqicon} alt="" /> }
        </div>
      </div>

      {isOpen && (
        <div className="faq-content">
          <p  className={`answer ${isOpen ? 'answer-text' : ''}`}>{item.content}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;

import { Faqs } from "../../assets/images/Faqs"
import FaqItem from "../FAQ/FaqItem"
import icon1 from "../../assets/icons/icon1.jpg"

const FaqList = () => {
  return (
    <ul>
    <div >
      {Faqs.map((faq, index) => (
        <div key={index} className="flex items-center gap-3">
          {/* Display the logo outside the styling of each question */}
          <img style={{borderRadius:"25px", boxShadow: " 0.1em 0.1em 0.15em #717171,",marginBottom:"20px"}} src={icon1} alt="Question Logo" />
          <FaqItem item={faq} />
        </div>
      ))}
    </div>
    </ul>
    
  );
};

export default FaqList;    
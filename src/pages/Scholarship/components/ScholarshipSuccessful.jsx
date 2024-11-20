import React from "react";
import success from "../../../assets/images/sucess.png";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header/Header";
const ScholarshipSuccessful = () => {
  return (
    <>
      <Header />
      <div className="mt-11 bg-primary ">
        <article className="w-[80%] m-auto text-center border-2 border-secondary md:h-[500px] rounded-lg shadow-xl shadow-secondary pt-10 mb-4">
          <h2 className="capitalize md:text-lg text-secondary">
            Scholarship Application Successful
          </h2>
          <img className="m-auto mt-5" src={success} alt="congrats-img" />
          <div className="w-[90%] m-auto">
            <p className="mt-11 md:text-md">
              Congratulations, your Application was
              <span className="font-bold text-[#1e7a1e]"> Successful.</span>
            </p>
            <div className="w-[90%] m-auto pb-5 md:text-md">
              <p>
                Thank you for Application! We're excited to have you on board.
                Our team is currently reviewing all applicants and will reach
                out to you soon with further details. We appreciate your
                patience during this process. If you have any questions in the
                meantime, please don’t hesitate to get in touch.
              </p>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
};

export default ScholarshipSuccessful;

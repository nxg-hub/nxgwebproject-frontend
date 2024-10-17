import React from "react";
import img from "../../assets/images/smiledMan.jpg";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
const Training = () => {
  return (
    <>
      <Header />
      <section className="w-full bg-lightGray">
        <div className="w-[90%] m-auto mt-11 ">
          <Link to="/form">
            <button className="bg-secondary px-4 py-2 rounded-full text-[#fff] font-bold md:w-[400px] text-md md:text-lg mt-11 hover:bg-opacity-80">
              Join Now
            </button>
          </Link>
          <div className="md:flex justify-between items-center mt-5">
            <article className="mb-5">
              <h2 className="uppercase text-lg font-bold items-center">
                6 months intensive mentor guided bootcamp
              </h2>
              <div className="bg-secondary  rounded-full text-[#fff] font-bold md:w-[400px] text-md md:text-lg py-2 mt-11 mb-5 ">
                <h2 className="uppercase text-lg font-bold text-center">
                  tech tracks
                </h2>
              </div>
              <div>
                <p className="font-bold md:text-md">
                  <span>&#8226;</span>
                  SOFTWARE ENGINEERING
                </p>

                <p className="font-normal md:text-md">
                  <span>&#8226;</span>
                  Basic (3 months)
                </p>
                <p className="font-normal md:text-md">
                  <span>&#8226;</span>
                  Basic + Advanced (6 months)
                </p>
                <p className="font-bold md:text-md">
                  <span>&#8226;</span>
                  PROJECT MANAGEMENT
                  <span className="font-normal">(3 months)</span>
                </p>
                <p className="font-bold md:text-md">
                  <span>&#8226;</span>
                  INTERNSHIP
                  <span className="font-normal">(6 months)</span>
                </p>
              </div>
            </article>

            <div className="md:w-[40%] bg-secondary rounded-3xl py-3 px-3 ">
              <img
                className=" object-contain rounded-full md:h-[400px] m-auto"
                src={img}
                alt="hero"
              />
            </div>
          </div>
          <div className="md:flex justify-between items-center mt-5">
            <article>
              <div className="bg-secondary  rounded-full text-[#fff] font-bold md:w-[400px] text-md md:text-lg py-2 mt-11 mb-5 ">
                <h2 className="uppercase text-lg font-bold text-center">
                  training fee
                </h2>
              </div>
              <p className="font-bold md:text-md">
                <span>&#8226;</span>
                N250,000 (3 months)
              </p>
              <p className="font-bold md:text-md">
                <span>&#8226;</span>
                N500,000 (6 months)
              </p>
              <p className="font-bold md:text-md my-5">
                (Installment payments allowed)
              </p>
            </article>
            <article>
              <p className="font-bold md:text-lg">
                Note: First 50 persons
                <span className="text-[#fff] md:text-md px-3 py-2 rounded-2xl ml-2 bg-secondary">
                  20% off
                </span>
              </p>
              <p className="font-bold md:text-lg mt-5">
                Registration Fee: N10,000
              </p>
            </article>
          </div>
          {/*<p className="font-bold md:text-lg">Date:14th October, 2024</p>*/}
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Training;

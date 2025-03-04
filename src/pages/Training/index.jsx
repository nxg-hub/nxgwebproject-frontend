import React, { useEffect } from "react";

import loader from "../../assets/svgs/loader.svg";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import { fetchTrainingInfo } from "../../Redux/TrainingInformationSlice";
import { useDispatch, useSelector } from "react-redux";
const Training = () => {
  const formatDate = (dateArray) => {
    // Assuming dateArray is in the form [year, month, day]
    const [year, month, day] = dateArray;

    // Create a Date object (note: JavaScript months are 0-indexed, so subtract 1 from the month)
    const date = new Date(year, month - 1, day);

    // Format the date as MM/DD/YYYY
    const formattedDate =
      date.getDate().toString().padStart(2, "0") +
      "/" + // DD
      (date.getMonth() + 1).toString().padStart(2, "0") +
      "/" + // MM
      date.getFullYear(); // YYYY

    return formattedDate;
  };
  const formatAmount = (amount) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(amount);
  };
  const dispatch = useDispatch();
  //geting the data from redux store
  const trainingInfo = useSelector(
    (state) => state?.TrainingInformation?.trainingInfo
  );
  useEffect(() => {
    //page to scroll to top unmount
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (success) {
      return;
    }
    dispatch(fetchTrainingInfo("/api/v1/get-all"));
  }, []);
  const loading = useSelector((state) => state?.TrainingInformation?.loading);
  const success = useSelector((state) => state?.TrainingInformation?.success);
  const error = useSelector((state) => state?.TrainingInformation?.error);
  //getting the latest data by picking the last object in the array
  const latestInfo = trainingInfo[trainingInfo?.length - 1];

  return (
    <>
      <Header />
      {loading ? (
        <div>
          <img className="m-auto w-[50px] mt-[15%]" src={loader} alt="loader" />
        </div>
      ) : !loading && error ? (
        <h2 className="mt-10 text-center">
          Something went wrong, check internet connection
        </h2>
      ) : (
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
                  <span className="px-2">
                    {latestInfo?.totalDurationMonths}
                  </span>
                  months intensive mentor guided bootcamp
                </h2>
                <div className="bg-secondary  rounded-full text-[#fff] font-bold md:w-[400px] text-md md:text-lg py-2 mt-11 mb-5 ">
                  <h2 className="uppercase text-lg font-bold text-center">
                    tech tracks
                  </h2>
                </div>
                <div>
                  {latestInfo?.techTracks.map((track) => {
                    return (
                      <p className="font-bold md:text-md uppercase">
                        <span>&#8226;</span>
                        {track}
                      </p>
                    );
                  })}
                  <p className="font-normal md:text-md">
                    <span>&#8226;</span>
                    Beginner (1 month)
                  </p>
                  <p className="font-normal md:text-md">
                    <span>&#8226;</span>
                    Basic ({latestInfo?.basicDurationMonths} months)
                  </p>
                  <p className="font-normal md:text-md">
                    <span>&#8226;</span>
                    Basic + Advanced ({latestInfo?.advancedDurationMonths}
                    months)
                  </p>
                </div>
              </article>

              <div className="md:w-[40%] bg-secondary rounded-3xl py-3 px-3 ">
                <img
                  className=" object-contain rounded-full md:h-[400px] m-auto"
                  src={latestInfo?.bannerUrl}
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
                  {formatAmount(120000)} ( 1 month)
                </p>
                <p className="font-bold md:text-md">
                  <span>&#8226;</span>
                  {formatAmount(latestInfo?.basicFee)} (
                  {latestInfo?.basicDurationMonths} months)
                </p>
                <p className="font-bold md:text-md">
                  <span>&#8226;</span>
                  {formatAmount(latestInfo?.advancedFee)} (
                  {latestInfo?.advancedDurationMonths} months)
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
                  Registration Fee: {formatAmount(latestInfo?.registrationFee)}
                </p>
              </article>
            </div>
            <p className="font-bold md:text-lg">
              Commencement Date:{formatDate(latestInfo?.commencementDate)}
            </p>
          </div>
          <Footer />
        </section>
      )}
    </>
  );
};

export default Training;

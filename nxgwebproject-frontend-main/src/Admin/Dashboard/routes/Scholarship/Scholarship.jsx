import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchScholarshipUsers } from "../../../../Redux/ScholarshipSlice";
import ScholarshipCard from "./components/ScholarshipCard";
import loader from "../../../../assets/svgs/loader.svg";

const Scholarship = () => {
  const dispatch = useDispatch();
  const scholarshipUsers = useSelector((state) => state.ScholarshipUsers.users);
  const loading = useSelector((state) => state.ScholarshipUsers.loading);
  const error = useSelector((state) => state.ScholarshipUsers.error);

  useEffect(() => {
    dispatch(fetchScholarshipUsers(`/api/v1/get-all-scholarship-applicants`));
  }, []);
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-11">
      {loading ? (
        <img
          className="w-[30%] md:w-[10%] h-[400px] absolute top-[200px] right-[20%] md:right-[40%] md:h-[500px] m-auto mt-[-150px]"
          src={loader}
          alt="loader"
        />
      ) : error && !loading ? (
        <h2 className="text-center font-bold">
          Something went wrong, check internet connection
        </h2>
      ) : scholarshipUsers.length > 0 ? (
        scholarshipUsers.map((user) => (
          <ScholarshipCard user={user} key={user.id} />
        ))
      ) : (
        <h2 className="text-center font-bold">No Users At The Moment.</h2>
      )}
    </div>
  );
};

export default Scholarship;

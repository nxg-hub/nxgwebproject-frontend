import React from "react";
import { Link } from "react-router-dom";

const ScholarshipCard = ({ user }) => {
  return (
    <div className="w-full  h-[300px] border-2 border-[#fff] shadow-lg shadow-[#a0a0a0] rounded-lg ">
      <img
        className=" h-[100px] w-[100px] md:h-[120px] md:w-[120px] m-auto mt-3 rounded-full border "
        src={user.passportUrl}
        alt="passport"
      />
      <h2 className="text-center font-bold mt-3 md:text-md">
        {user.firstName}
      </h2>
      <div className="w-[80%] m-auto text-center bg-secondary py-2 rounded-md text-primary font-bold mt-11">
        <Link to={`/admin/scholarshipuser/${user.id}`}>View Details</Link>
      </div>
    </div>
  );
};

export default ScholarshipCard;

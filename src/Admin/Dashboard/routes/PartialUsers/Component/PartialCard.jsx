import React from "react";

const PartialCard = ({ user }) => {
  return (
    <div className="w-[80%] m-auto  py-5 bg-secondary border-2 border-[#fff] shadow-lg shadow-[#a0a0a0] rounded-lg ">
      <article className="text-primary px-3 ">
        <h2 className="text-center  mt-3 ">
          Name:
          <span className="font-bold">{`${user.firstName} ${user.lastName}`}</span>
        </h2>
        <h2 className="text-center mt-3  ">
          Email: <span className="font-bold">{`${user.email} `}</span>
        </h2>
        <h2 className="text-center mt-3 ">
          Phone: <span className="font-bold">{`${user.phoneNumber} `}</span>
        </h2>
        <h2 className="text-center mt-3 ">
          Duration: <span className="font-bold">{`${user.duration} `}</span>
        </h2>
        <h2 className="text-center mt-3 ">
          Stack: <span className="font-bold">{`${user.preferredStack} `}</span>
        </h2>
      </article>
    </div>
  );
};

export default PartialCard;

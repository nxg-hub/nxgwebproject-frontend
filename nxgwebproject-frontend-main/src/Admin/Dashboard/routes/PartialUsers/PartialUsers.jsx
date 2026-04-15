import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PartialCard from "./Component/PartialCard";
import { fetchPartialUsers } from "../../../../Redux/PartialUsersSlice";
import loader from ".././../../../assets/svgs/loader.svg";

const PartialUsers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPartialUsers(`/api/v1/get-all-partial-applicants`));
  }, []);
  const partialUsers = useSelector((state) => state.PartialUser.partialUsers);
  const loading = useSelector((state) => state.PartialUser.loading);
  const error = useSelector((state) => state.PartialUser.error);

  return (
    <div className=" w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-11">
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
      ) : partialUsers.length > 0 ? (
        partialUsers.map((user, i) => <PartialCard user={user} key={i} />)
      ) : (
        <h2 className="text-center font-bold">No Users At The Moment.</h2>
      )}
    </div>
  );
};

export default PartialUsers;

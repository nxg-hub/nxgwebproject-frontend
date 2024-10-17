import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../../Redux/RegisteredUsers";
import Card from "./Components/Card";
import loader from "../../../../assets/svgs/loader.svg";

const Registered = () => {
  const dispatch = useDispatch();
  const registeredUsers = useSelector((state) => state.RegisteredUsers.users);
  const loading = useSelector((state) => state.RegisteredUsers.loading);
  const error = useSelector((state) => state.RegisteredUsers.error);

  useEffect(() => {
    dispatch(fetchUsers(`/api/v1/all`));
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
      ) : registeredUsers.lenght > 0 ? (
        registeredUsers.map((user) => <Card user={user} key={user.id} />)
      ) : (
        <h2 className="text-center font-bold">No Users At The Moment.</h2>
      )}
    </div>
  );
};

export default Registered;

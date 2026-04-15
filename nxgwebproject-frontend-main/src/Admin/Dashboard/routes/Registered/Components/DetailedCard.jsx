import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { useSelector } from "react-redux";

const DetailedCard = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const registeredUsers = useSelector((state) => state.RegisteredUsers.users);
  const user = registeredUsers.find((user) => {
    return user.id === id;
  });
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

  return (
    <>
      <Link
        to={".."}
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          fontSize: "12px",
          fontWeight: "400",
          color: "#000",
          margin: "0 0 1rem 0px",
          paddingTop: ".5rem",
        }}>
        <BsArrowLeft style={{ fontSize: "26px" }} />
        <span>Back</span>
      </Link>
      <div>
        <div className="md:flex justify-between md:w-[50%] m-auto ">
          <img
            className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] rounded-full m-auto shadow-lg"
            src={user.passportUrl}
            alt="passport"
          />
          <article className="m-auto text-center font-bold md:text-md">
            <h2>
              <span className="font-normal hidden md:inline-block mx-2">
                Full Name:
              </span>
              {`${user.firstName} ${user.lastName}`}
            </h2>
          </article>
        </div>
        <div className="w-[100%] md:w-[60%] m-auto  border-[#ddd]  shadow-2xl rounded-lg  mt-11 py-5 px-5">
          <article className=" text-sm md:text-md w-[100%] md:w-[60%] m-auto space-y-2">
            <h2>
              Email: <span className="font-bold">{user.email}</span>
            </h2>
            <h2>
              Phone Number:
              <span className="font-bold">{user.phoneNumber}</span>
            </h2>
            <h2>
              Motivation: <span className="font-bold">{user.motivation}</span>
            </h2>
            <h2>
              Preferred Stack:
              <span className="font-bold">{user.preferredStack}</span>
            </h2>
            <h2>
              Duration:
              <span className="font-bold">{user.duration}</span>
            </h2>
            <h2>
              Referral Source:
              <span className="font-bold">{user.referralSource}</span>
            </h2>
            <h2>
              Organization:
              <span className="font-bold">{user.schoolOrOrganisation}</span>
            </h2>
            <h2>
              Has a Laptop:
              <span className="font-bold">
                {user.hasLaptop === true ? "Yes" : "No"}
              </span>
            </h2>
            <h2>
              Has Working Experience:
              <span className="font-bold">
                {user.hasWorkExperience === true ? "Yes" : "No"}
              </span>
            </h2>
            <h2>
              Has Programming Experience:
              <span className="font-bold">
                {user.hasProgrammingExperience === true ? "Yes" : "No"}
              </span>
            </h2>
            <h2>
              Registeration Date:
              <span className="font-bold px-1">
                {formatDate(user.registrationDate)}
              </span>
            </h2>
            <h2>
              Available Hours Per Week:
              <span className="font-bold ">{user.availableHoursPerWeek}</span>
            </h2>
            <h2>
              Resume:
              <span className=" text-secondary underline px-2 ">
                {
                  <a target="_blank" href={user.cvUrl}>
                    {"View Resume"}
                  </a>
                }
              </span>
            </h2>
            <h2>
              Transfer Status:
              <span className="font-bold ">{user.transferStatus}</span>
            </h2>
            <h2>
              Payment Reciept:
              <span className=" text-secondary underline px-2 ">
                {
                  <a target="_blank" href={user.transferReceiptUrl}>
                    {"View Reciept"}
                  </a>
                }
              </span>
            </h2>
          </article>
        </div>
      </div>
    </>
  );
};

export default DetailedCard;

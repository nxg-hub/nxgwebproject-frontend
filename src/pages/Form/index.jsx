import logo from "../../assets/images/nxg-logo.png";
import {
  aboutUsOptions,
  durationOptions,
  laptopOptions,
  paymentOptions,
  preferredStackOptions,
  programmingExperienceOptions,
  workExperienceOptions,
} from "../../utils/questions";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Header from "../../components/Header/Header";
import { API_HOST_URL } from "../../utils/API/Api";
import { useSelector } from "react-redux";
const StepOneSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  phoneNumber: Yup.string().required("Required"),
  schoolOrOrganisation: Yup.string().required("Required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  passportUrl: Yup.mixed()
    .required("A file is required")
    .test("fileSize", "File size is too large", (value) => {
      return value && value.size <= 5048576; // 5MB limit
    })
    .test("fileType", "Unsupported File Format", (value) => {
      return value && ["image/jpeg", "image/png"].includes(value.type);
    }),
});

const StepTwoSchema = Yup.object().shape({
  hasLaptop: Yup.string().required("Required"),
  hasProgrammingExperience: Yup.string().required("Required"),
  availableHoursPerWeek: Yup.string().required("Required"),
  hasWorkExperience: Yup.string().required("Required"),
  motivation: Yup.string().required("Required"),
  preferredStack: Yup.string().required("Required"),
  duration: Yup.string().required("Required"),
  referralSource: Yup.string().required("Required"),
  // cvUrl: Yup.mixed()
  //   .required("A file is required")
  //   .test("fileSize", "File size is too large", (value) => {
  //     console.log(value);
  //     return value && value.size <= 504857; // 5MB limit
  //   })
  //   .test("fileType", "Unsupported File Format", (value) => {
  //     return (
  //       value && ["application/pdf", "application/msword"].includes(value.type)
  //     );
  //   }),
});

// const StepThreeSchema = Yup.object().shape({
//   transferReceiptUrl: Yup.mixed()
//     .required("A file is required")
//     .test("fileSize", "File size is too large", (value) => {
//       return value && value.size <= 5048576; // 5MB limit
//     })
//     .test("fileType", "Unsupported File Format", (value) => {
//       return (
//         value &&
//         ["image/jpeg", "image/png", "application/pdf"].includes(value.type)
//       );
//     }),

//   transferStatus: Yup.string().required("Required"),
// });
const RegisterForm = () => {
  const trainingInfo = useSelector(
    (state) => state.TrainingInformation.trainingInfo
  );
  const latestInfo = trainingInfo[trainingInfo.length - 1];

  useEffect(() => {
    //page to scroll to top unmount
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const submitForm = async (url, formData) => {
    try {
      setLoading(true);
      await axios
        .post(url, formData, {
          headers: {
            accept: "*/*",
            "Content-Type": "application/json",
          },
        })
        .then(function (response) {
          setLoading(false);
          if (response.status === 201) {
            navigate("/applicationSuccessful");
          }
        });
    } catch (error) {
      console.log(error);
      // setError(true);
    } finally {
      setLoading(false);
    }
  };
  const initialValues = {
    firstName: "",
    email: "",
    lastName: "",
    phoneNumber: "",
    schoolOrOrganisation: "",
    hasProgrammingExperience: "",
    hasLaptop: "",
    availableHoursPerWeek: "",
    hasWorkExperience: "",
    motivation: "",
    preferredStack: "",
    duration: "",
    referralSource: "",
    transferStatus: "",
    cvUrl: "",
    passportUrl: "",
    transferReceiptUrl: "",
  };

  const handleNext = (values, { setSubmitting }) => {
    // Store the current step's data

    // setFormData({ ...formData, ...values });

    if (step < 2) {
      setStep(step + 1);
    } else {
      handleSubmit(values);
    }
    setSubmitting(false);
  };
  const handleChange = async (e, setFieldValue, field, values) => {
    // console.log(values);
    const { name, value } = e.target;

    setFieldValue(field, value); // Update Formik's state

    // Trigger API call to update the corresponding field
    try {
      await axios.post(`${API_HOST_URL}/api/v1/api/partial-applicants/update`, {
        email: values.email,
        field: name,
        value: value,
      });
      // console.log(`${name} updated successfully`);
    } catch (error) {
      console.error(`Error updating ${name}:`, error);
    }
  };

  const handleSubmit = async (values, setSubmitting) => {
    console.log(values);
    setLoading(true);
    try {
      let {
        cvUrl,
        passportUrl,
        transferReceiptUrl,
        hasLaptop,
        hasProgrammingExperience,
        hasWorkExperience,
        ...otherValues
      } = values;

      // // Create an array of file uploads
      let uploadFiles = [passportUrl].map((file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "tin4r1lt");

        return axios.post(
          `${API_HOST_URL}/api/cloudinary/upload-file`,
          formData
        );
      });

      // // Wait for all uploads to complete
      let responses = await Promise.all(uploadFiles);

      // Get URLs of uploaded files
      let fileUrls = responses.map((response) => response.data);

      [passportUrl] = fileUrls;
      // Handle form submission with otherValues and the uploaded file URLs
      const submittedData = {
        ...otherValues,
        // cvUrl: cvUrl,
        passportUrl: passportUrl,
        // transferReceiptUrl: transferReceiptUrl,
        //turning the below form data into a bolean value
        hasLaptop: hasLaptop === "Yes",
        hasProgrammingExperience: hasProgrammingExperience === "Yes",
        hasWorkExperience: hasWorkExperience === "Yes",
      };
      // console.log(submittedData);
      submitForm(`${API_HOST_URL}/api/v1/applicants/apply`, submittedData);
      setLoading(false);
    } catch (error) {
      console.error("Error uploading files:", error);
    } finally {
      setLoading(false);
    }
  };
  const validationSchemas = [StepOneSchema, StepTwoSchema];
  return (
    <>
      <Header />
      <div className="w-full bg-lightGray h-full">
        <div className=" w-[90%] md:w-[70%] m-auto mt-5 bg-secondary rounded-lg">
          <img className="h-[150px] m-auto" src={logo} alt="logo" />
        </div>
        <div className="w-[90%] md:w-[70%] m-auto mt-5 rounded-lg bg-[#fff] shadow-md py-5">
          <article className=" w-[90%] m-auto">
            <h2 className="md:text-xl font-bold ">
              NXG-HUB TECH BOOTCAMP REGISTRATION FORM
            </h2>
            <p className="md:text-md">
              Kindly fill out the form below to join our next cohort (Remote).
              Do check your mail after successful registration for updates on
              next steps. For more enquiries or complaint; send a mail to:
              info@nextgenhub.com.ng or visit our website:
              https://nextgenhub.com.ng
            </p>
          </article>
        </div>
        <div className="bg-[#2596BE20] w-[90%] md:w-[70%] m-auto mt-5 rounded-lg py-5">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchemas[step - 1]}
            onSubmit={handleNext}>
            {({ setFieldValue, isSubmitting, values }) => (
              <Form className="w-full">
                {step === 1 && (
                  <>
                    <h2 className="text-center font-bold md:text-lg">
                      Personal Details
                    </h2>
                    <div className="block w-[90%] md:w-[70%] m-auto mt-4 ">
                      <label className="font-bold" htmlFor="email">
                        Email Address
                      </label>
                      <Field
                        className="h-[50px] px-3 pt-3 w-[100%] m-auto rounded-lg border-none border-b-4 border-b-darkGray outline-none"
                        type="email"
                        name="email"
                      />
                      <ErrorMessage
                        className="text-red"
                        name="email"
                        component="div"
                      />
                    </div>
                    <div className="block w-[90%] md:w-[70%] m-auto mt-4  ">
                      <label className="font-bold" htmlFor="firstName">
                        First Name
                      </label>
                      <Field
                        className="h-[50px] px-3 pt-3 w-[100%] m-auto rounded-lg border-none border-b-4 border-b-darkGray outline-none"
                        type="text"
                        name="firstName"
                        onChange={(e) =>
                          handleChange(e, setFieldValue, "firstName", values)
                        }
                      />
                      <ErrorMessage
                        className="text-red"
                        name="firstName"
                        component="div"
                      />
                    </div>
                    <div className="block w-[90%] md:w-[70%] m-auto mt-4  ">
                      <label className="font-bold" htmlFor="lastName">
                        Last Name
                      </label>
                      <Field
                        className="h-[50px] px-3 pt-3 w-[100%] m-auto rounded-lg border-none border-b-4 border-b-darkGray outline-none"
                        type="text"
                        name="lastName"
                        onChange={(e) =>
                          handleChange(e, setFieldValue, "lastName", values)
                        }
                      />
                      <ErrorMessage
                        className="text-red"
                        name="lastName"
                        component="div"
                      />
                    </div>
                    <div className="block w-[90%] md:w-[70%] m-auto mt-4  ">
                      <label className="font-bold" htmlFor="phoneNumber">
                        Phone Number
                      </label>
                      <Field
                        className="h-[50px] px-3 pt-3 w-[100%] m-auto rounded-lg border-none border-b-4 border-b-darkGray outline-none"
                        type="text"
                        name="phoneNumber"
                        onChange={(e) =>
                          handleChange(e, setFieldValue, "phoneNumber", values)
                        }
                      />
                      <ErrorMessage
                        className="text-red"
                        name="phoneNumber"
                        component="div"
                      />
                    </div>
                    <div className="block w-[90%] md:w-[70%] m-auto mt-4  ">
                      <label
                        className="font-bold"
                        htmlFor="schoolOrOrganisation">
                        School/Organisation
                      </label>
                      <Field
                        className="h-[50px] px-3 pt-3 w-[100%] m-auto rounded-lg border-none border-b-4 border-b-darkGray outline-none"
                        type="text"
                        name="schoolOrOrganisation"
                        onChange={(e) =>
                          handleChange(
                            e,
                            setFieldValue,
                            "schoolOrOrganisation",
                            values
                          )
                        }
                      />
                      <ErrorMessage
                        className="text-red"
                        name="schoolOrOrganisation"
                        component="div"
                      />
                    </div>
                    <div className="w-[90%] md:w-[70%] m-auto mt-4">
                      <label className="font-bold block" htmlFor="passportUrl">
                        Upload passport Photo
                      </label>
                      <input
                        id="passportUrl"
                        name="passportUrl"
                        type="file"
                        onChange={(event) => {
                          const file = event.currentTarget.files[0];
                          setFieldValue("passportUrl", file);
                        }}
                      />
                      <ErrorMessage
                        className="text-red"
                        name="passportUrl"
                        component="div"
                      />
                    </div>
                  </>
                )}
                {step === 2 && (
                  <>
                    <h2 className="text-center font-bold md:text-lg">
                      Skill/Programme Details
                    </h2>
                    <div className="flex flex-col w-[90%] md:w-[70%] m-auto mt-4">
                      <label className="font-bold" htmlFor="hasLaptop">
                        Do You Have A Laptop?
                      </label>

                      <fieldset
                        className="bg-primary py-4 px-2 rounded-lg"
                        required
                        id="hasLaptop">
                        {laptopOptions.map(({ id, value, title }) => (
                          <label key={id} className="block mt-2">
                            <Field
                              id={id}
                              type="radio"
                              value={value}
                              name="hasLaptop"
                              checked={values.hasLaptop === value} // Ensure correct selection
                              onChange={() => setFieldValue("hasLaptop", value)}
                            />
                            {title}
                          </label>
                        ))}
                      </fieldset>
                      <ErrorMessage
                        className="text-red"
                        name="hasLaptop"
                        component="div"
                      />
                    </div>
                    <div className="flex flex-col w-[90%] md:w-[70%] m-auto mt-4">
                      <label
                        className="font-bold"
                        htmlFor="hasProgrammingExperience">
                        Do you have Programming Experience?
                      </label>

                      <fieldset
                        className="bg-primary py-4 px-2 rounded-lg"
                        required>
                        {programmingExperienceOptions.map(
                          ({ id, value, title }) => (
                            <label key={id} className="block mt-2">
                              <Field
                                id={id}
                                type="radio"
                                value={value}
                                name="hasProgrammingExperience"
                                checked={
                                  values.hasProgrammingExperience === value
                                } // Ensure correct selection
                                onChange={() =>
                                  setFieldValue(
                                    "hasProgrammingExperience",
                                    value
                                  )
                                }
                              />
                              {title}
                            </label>
                          )
                        )}
                      </fieldset>
                      <ErrorMessage
                        className="text-red"
                        name="hasProgrammingExperience"
                        component="div"
                      />
                    </div>
                    <div className="block w-[90%] md:w-[70%] m-auto mt-4  ">
                      <label
                        className="font-bold"
                        htmlFor="availableHoursPerWeek">
                        How many hours a week can you dedicate for this
                        programme?
                      </label>
                      <Field
                        className="h-[50px] px-3 pt-3 w-[100%] m-auto rounded-lg border-none border-b-4 border-b-darkGray outline-none"
                        type="number"
                        name="availableHoursPerWeek"
                        onChange={(e) =>
                          handleChange(
                            e,
                            setFieldValue,
                            "availableHoursPerWeek",
                            values
                          )
                        }
                      />
                      <ErrorMessage
                        className="text-red"
                        name="availableHoursPerWeek"
                        component="div"
                      />
                    </div>
                    <div className="block w-[90%] md:w-[70%] m-auto mt-4  ">
                      <label className="font-bold" htmlFor="hasWorkExperience">
                        Do you have any Work Experience?
                      </label>
                      <fieldset
                        className="bg-primary py-4 px-2 rounded-lg"
                        required>
                        {workExperienceOptions.map(({ id, value, title }) => (
                          <label key={id} className="block mt-2">
                            <Field
                              id={id}
                              type="radio"
                              value={value}
                              name="hasWorkExperience"
                              checked={values.hasWorkExperience === value} // Ensure correct selection
                              onChange={() =>
                                setFieldValue("hasWorkExperience", value)
                              }
                            />
                            {title}
                          </label>
                        ))}
                      </fieldset>
                      <ErrorMessage
                        className="text-red"
                        name="hasWorkExperience"
                        component="div"
                      />
                    </div>
                    {/* <div className="w-[90%] md:w-[70%] m-auto mt-4">
                      <label className="font-bold block" htmlFor="cvUrl">
                        Upload Cv
                      </label>
                      <input
                        id="cvUrl"
                        name="cvUrl"
                        type="file"
                        onChange={(event) => {
                          const file = event.currentTarget.files[0];
                          setFieldValue("cvUrl", file);
                        }}
                      />
                      <ErrorMessage
                        className="text-red"
                        name="cvUrl"
                        component="div"
                      />
                    </div> */}
                    <div className="block w-[90%] md:w-[70%] m-auto mt-4  ">
                      <label className="font-bold" htmlFor="motivation">
                        Why do you want to participate in this Training?
                      </label>
                      <Field
                        className="h-[50px] px-3 pt-3 w-[100%] m-auto rounded-lg border-none border-b-4 border-b-darkGray outline-none"
                        type="text"
                        name="motivation"
                        onChange={(e) =>
                          handleChange(e, setFieldValue, "motivation", values)
                        }
                      />
                      <ErrorMessage
                        className="text-red"
                        name="motivation"
                        component="div"
                      />
                    </div>
                    <div className="flex flex-col w-[90%] md:w-[70%] m-auto mt-4">
                      <label className="font-bold" htmlFor="preferredStack">
                        What is Your Preferred Stack?
                      </label>

                      <fieldset
                        className="bg-primary py-4 px-2 rounded-lg"
                        required>
                        {latestInfo.techTracks.map((value, i) => (
                          <label key={i} className="block mt-2">
                            <Field
                              id={i}
                              type="radio"
                              value={value}
                              name="preferredStack"
                              checked={values.preferredStack === value} // Ensure correct selection
                              onChange={() =>
                                setFieldValue("preferredStack", value)
                              } // Directly update Formik state
                            />
                            {value}
                          </label>
                        ))}
                      </fieldset>
                      <ErrorMessage
                        className="text-red"
                        name="preferredStack"
                        component="div"
                      />
                    </div>
                    <div className="flex flex-col w-[90%] md:w-[70%] m-auto mt-4">
                      <label className="font-bold" htmlFor="duration">
                        Duration
                      </label>
                      <fieldset>
                        {durationOptions.map(({ id, value, title }) => (
                          <label key={id} className="block mt-2">
                            <Field
                              id={`duration-${id}`} // Ensure unique `id`
                              type="radio"
                              name="duration"
                              value={value}
                              checked={values.duration === value} // Ensure correct selection
                              onChange={() => setFieldValue("duration", value)} // Directly update Formik state
                            />
                            {title}
                          </label>
                        ))}
                      </fieldset>

                      <ErrorMessage
                        className="text-red"
                        name="duration"
                        component="div"
                      />
                    </div>
                    <div className="flex flex-col w-[90%] md:w-[70%] m-auto mt-4">
                      <label className="font-bold" htmlFor="referralSource">
                        How did you know about us?
                      </label>

                      <fieldset
                        className="bg-primary py-4 px-2 rounded-lg"
                        aria-required>
                        {aboutUsOptions.map(({ id, value, title }) => (
                          <label key={id} className="block mt-2">
                            <Field
                              id={id}
                              type="radio"
                              value={value}
                              name="referralSource"
                              checked={values.referralSource === value} // Ensure correct selection
                              onChange={() => {
                                console.log(value);
                                setFieldValue("referralSource", value);
                              }}
                            />
                            {title}
                          </label>
                        ))}
                      </fieldset>
                      <ErrorMessage
                        className="text-red"
                        name="referralSource"
                        component="div"
                      />
                    </div>
                  </>
                )}
                {step === 3 && (
                  <>
                    <div className="flex flex-col w-[90%] md:w-[70%] m-auto mt-4 outline-none bg-primary rounded-lg">
                      <div className="w-full bg-secondary h-[50px]">
                        <h2 className="font-bold text-lg px-7 text-primary">
                          Payment
                        </h2>
                      </div>
                      <article className="w-[95%] m-auto pt-2">
                        <p>
                          Kindly Proceed with Payment of Ten Thousand Naira
                          (N10,000) or 10USD Only to complete your registration.
                          After Successful payment, kindly tick the Transaction
                          status below, upload receipt and click submit. A
                          Confirmation mail and further steps will be sent to
                          you via mail.
                        </p>
                      </article>
                    </div>

                    <div className="flex flex-col w-[90%] md:w-[70%] m-auto mt-4 outline-none bg-primary rounded-lg py-4">
                      <article className="w-[90%] m-auto">
                        <p className="mb-5">Choose Payment Mode</p>

                        <Link
                          to="https://paystack.com/pay/nxg-reg"
                          target="_blank"
                          className="text-secondary underline md:text-md">
                          Click Here To Pay With Card
                        </Link>
                        <p className="mt-5 font-bold">
                          Or Make a Direct Deposit/Transfer to the Accounts
                          below:
                        </p>
                        <p className="my-5">
                          Account Details: Account Number: 1027147237 <br />
                          Account Name: NXG HUB DIGITAL TECHNOLOGIES LTD, Bank:
                          UBA
                        </p>
                        <p className="my-5">
                          DOM Account Details(USD): Account Number: 3004434567{" "}
                          <br />
                          Account Name: NXG HUB DIGITAL TECHNOLOGIES LTD, Bank:
                          UBA
                        </p>
                        <p className="my-5">
                          DOM Account Details(GBP): Account Number: 3004434718{" "}
                          <br />
                          Account Name: NXG HUB DIGITAL TECHNOLOGIES LTD, Bank:
                          UBA
                        </p>
                        <p className="my-5">
                          Account Details: Account Number: 5610096099 <br />
                          Account Name: NXG-HUB DIGITAL TECHNOLOGIES LTD, Bank:
                          FIDELITY BANK *
                        </p>
                      </article>
                      <div className="flex flex-col w-[90%] m-auto mt-4">
                        <fieldset
                          id="transferStatus"
                          className="bg-primary py-4 px-2 rounded-lg"
                          required>
                          {paymentOptions.map(({ id, value, title }) => (
                            <label key={id} className="block mt-2">
                              <Field
                                id={id}
                                type="radio"
                                value={value}
                                name="transferStatus"
                                checked={values.transferStatus === value} // Ensure correct selection
                                onChange={() =>
                                  setFieldValue("transferStatus", value)
                                }
                              />
                              {title}
                            </label>
                          ))}
                        </fieldset>
                        <ErrorMessage
                          className="text-red"
                          name="transferStatus"
                          component="div"
                        />
                      </div>
                    </div>
                    <div className="w-[90%] md:w-[70%] m-auto mt-4">
                      <label
                        className="font-bold block"
                        htmlFor="transferReceiptUrl">
                        Kindly upload a Screenshot of your payment receipt
                      </label>
                      <input
                        id="transferReceiptUrl"
                        name="transferReceiptUrl"
                        type="file"
                        onChange={(event) => {
                          const file = event.currentTarget.files[0];
                          setFieldValue("transferReceiptUrl", file);
                        }}
                      />
                      <ErrorMessage
                        className="text-red"
                        name="transferReceiptUrl"
                        component="div"
                      />
                    </div>
                  </>
                )}

                <div className="w-[40%] md:w-[30%] m-auto">
                  <button
                    disabled={isSubmitting}
                    className="w-[100%] rounded-full text-center py-2 my-10 text-primary font-bold m-auto bg-[#006A90]"
                    type="submit">
                    {loading ? "Submitting..." : step < 2 ? "Next" : "Submit"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;

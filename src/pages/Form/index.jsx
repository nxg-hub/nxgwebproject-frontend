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
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
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
        });
      // const response = await axios.post(url, formData);
      // console.log(response.data);
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

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    phoneNumber: Yup.string().required("Required"),
    schoolOrOrganisation: Yup.string().required("Required"),
    hasProgrammingExperience: Yup.string().required("Required"),
    hasLaptop: Yup.string().required("Required"),
    availableHoursPerWeek: Yup.string().required("Required"),
    hasWorkExperience: Yup.string().required("Required"),
    motivation: Yup.string().required("Required"),
    preferredStack: Yup.string().required("Required"),
    duration: Yup.string().required("Required"),
    referralSource: Yup.string().required("Required"),
    transferStatus: Yup.string().required("Required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    cvUrl: Yup.mixed()
      .required("A file is required")
      .test("fileSize", "File size is too large", (value) => {
        return value && value.size <= 5048576; // 5MB limit
      })
      .test("fileType", "Unsupported File Format", (value) => {
        return (
          value &&
          ["application/pdf", "application/msword"].includes(value.type)
        );
      }),
    passportUrl: Yup.mixed()
      .required("A file is required")
      .test("fileSize", "File size is too large", (value) => {
        return value && value.size <= 5048576; // 5MB limit
      })
      .test("fileType", "Unsupported File Format", (value) => {
        return value && ["image/jpeg", "image/png"].includes(value.type);
      }),
    transferReceiptUrl: Yup.mixed()
      .required("A file is required")
      .test("fileSize", "File size is too large", (value) => {
        return value && value.size <= 5048576; // 5MB limit
      })
      .test("fileType", "Unsupported File Format", (value) => {
        return (
          value &&
          ["image/jpeg", "image/png", "application/pdf"].includes(value.type)
        );
      }),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
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

      // Create an array of file uploads
      let uploadFiles = [cvUrl, passportUrl, transferReceiptUrl].map((file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "tin4r1lt");

        return axios.post(
          `https://nxg-training-form-be-ada7b4d716b4.herokuapp.com/api/cloudinary/upload-file`,
          formData
        );
      });

      // Wait for all uploads to complete
      let responses = await Promise.all(uploadFiles);

      // Get URLs of uploaded files
      let fileUrls = responses.map((response) => response.data);

      [cvUrl, passportUrl, transferReceiptUrl] = fileUrls;
      // Handle form submission with otherValues and the uploaded file URLs
      const submittedData = {
        ...otherValues,
        cvUrl: cvUrl,
        passportUrl: passportUrl,
        transferReceiptUrl: transferReceiptUrl,
        //turning the below form data into a bolean value
        hasLaptop: hasLaptop === "Yes",
        hasProgrammingExperience: hasProgrammingExperience === "Yes",
        hasWorkExperience: hasWorkExperience === "Yes",
      };
      submitForm(
        `https://nxg-training-form-be-ada7b4d716b4.herokuapp.com/api/v1/applicants/apply`,
        submittedData
      );
      setLoading(false);

      // Reset form after submission
      // resetForm();
      navigate("/applicationSuccessful");
    } catch (error) {
      console.error("Error uploading files:", error);
    } finally {
      setSubmitting(false);
      setLoading(false);
    }
  };
  return (
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
            Kindly fill out the form below to join our next cohort (Remote). Do
            check your mail after successful registration for updates on next
            steps. For more enquiries or complaint; send a mail to:
            info@nextgenhub.com.ng or visit our website:
            https://nextgenhub.com.ng
          </p>
        </article>
      </div>
      <div className="bg-[#2596BE20] w-[90%] md:w-[70%] m-auto mt-5 rounded-lg py-5">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          {({ setFieldValue, isSubmitting, props }) => (
            <Form className="w-full">
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
                />
                <ErrorMessage
                  className="text-red"
                  name="phoneNumber"
                  component="div"
                />
              </div>
              <div className="block w-[90%] md:w-[70%] m-auto mt-4  ">
                <label className="font-bold" htmlFor="schoolOrOrganisation">
                  School/Organisation
                </label>
                <Field
                  className="h-[50px] px-3 pt-3 w-[100%] m-auto rounded-lg border-none border-b-4 border-b-darkGray outline-none"
                  type="text"
                  name="schoolOrOrganisation"
                />
                <ErrorMessage
                  className="text-red"
                  name="schoolOrOrganisation"
                  component="div"
                />
              </div>
              <div className="flex flex-col w-[90%] md:w-[70%] m-auto mt-4">
                <label className="font-bold" htmlFor="jobType">
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
                <label className="font-bold" htmlFor="hasProgrammingExperience">
                  Do you have Programming Experience?
                </label>

                <fieldset className="bg-primary py-4 px-2 rounded-lg" required>
                  {programmingExperienceOptions.map(({ id, value, title }) => (
                    <label key={id} className="block mt-2">
                      <Field
                        id={id}
                        type="radio"
                        value={value}
                        name="hasProgrammingExperience"
                      />
                      {title}
                    </label>
                  ))}
                </fieldset>
                <ErrorMessage
                  className="text-red"
                  name="hasProgrammingExperience"
                  component="div"
                />
              </div>
              <div className="block w-[90%] md:w-[70%] m-auto mt-4  ">
                <label className="font-bold" htmlFor="availableHoursPerWeek">
                  How many hours a week can you dedicate for this programme?
                </label>
                <Field
                  className="h-[50px] px-3 pt-3 w-[100%] m-auto rounded-lg border-none border-b-4 border-b-darkGray outline-none"
                  type="number"
                  name="availableHoursPerWeek"
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
                <fieldset className="bg-primary py-4 px-2 rounded-lg" required>
                  {workExperienceOptions.map(({ id, value, title }) => (
                    <label key={id} className="block mt-2">
                      <Field
                        id={id}
                        type="radio"
                        value={value}
                        name="hasWorkExperience"
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
              <div className="w-[90%] md:w-[70%] m-auto mt-4">
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
              <div className="block w-[90%] md:w-[70%] m-auto mt-4  ">
                <label className="font-bold" htmlFor="motivation">
                  Why do you want to participate in this Training?
                </label>
                <Field
                  className="h-[50px] px-3 pt-3 w-[100%] m-auto rounded-lg border-none border-b-4 border-b-darkGray outline-none"
                  type="text"
                  name="motivation"
                />
                <ErrorMessage
                  className="text-red"
                  name="motivation"
                  component="div"
                />
              </div>
              <div className="flex flex-col w-[90%] md:w-[70%] m-auto mt-4">
                <label className="font-bold" htmlFor="jobType">
                  What is Your Preferred Stack?
                </label>

                <fieldset className="bg-primary py-4 px-2 rounded-lg" required>
                  {preferredStackOptions.map(({ id, value, title }) => (
                    <label key={id} className="block mt-2">
                      <Field
                        id={id}
                        type="radio"
                        value={value}
                        name="preferredStack"
                      />
                      {title}
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

                <fieldset
                  className="bg-primary py-4 px-2 rounded-lg"
                  aria-required>
                  {durationOptions.map(({ id, value, title }) => (
                    <label key={id} className="block mt-2">
                      <Field
                        id={id}
                        type="radio"
                        value={value}
                        name="duration"
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
              <div className="flex flex-col w-[90%] md:w-[70%] m-auto mt-4 outline-none bg-primary rounded-lg">
                <div className="w-full bg-secondary h-[50px]">
                  <h2 className="font-bold text-lg px-7 text-primary">
                    Payment
                  </h2>
                </div>
                <article className="w-[95%] m-auto pt-2">
                  <p>
                    Kindly Proceed with Payment of Ten Thousand Naira (N10,000)
                    or 10USD Only to complete your registration. After
                    Successful payment, kindly tick the Transaction status
                    below, upload receipt and click submit. A Confirmation mail
                    and further steps will be sent to you via mail.
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
                    Or Make a Direct Deposit/Transfer to the Accounts below:
                  </p>
                  <p className="my-5">
                    Account Details: Account Number: 1027147237 <br />
                    Account Name: NXG HUB DIGITAL TECHNOLOGIES LTD, Bank: UBA
                  </p>
                  <p className="my-5">
                    DOM Account Details(USD): Account Number: 3004434567 <br />
                    Account Name: NXG HUB DIGITAL TECHNOLOGIES LTD, Bank: UBA
                  </p>
                  <p className="my-5">
                    DOM Account Details(GBP): Account Number: 3004434718 <br />
                    Account Name: NXG HUB DIGITAL TECHNOLOGIES LTD, Bank: UBA
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
                <label className="font-bold block" htmlFor="transferReceiptUrl">
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

              <div className="w-[40%] md:w-[30%] m-auto">
                <button
                  disabled={isSubmitting}
                  className="w-[100%] rounded-full text-center py-2 my-10 text-primary font-bold m-auto bg-[#006A90]"
                  type="submit">
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterForm;

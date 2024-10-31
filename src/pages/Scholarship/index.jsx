import logo from "../../assets/images/nxg-logo.png";
import {
  aboutUsOptions,
  durationOptions,
  laptopOptions,
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
  introVideoUrl: Yup.string().required("Required"),
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
  cvUrl: Yup.mixed()
    .required("A file is required")
    .test("fileSize", "File size is too large", (value) => {
      return value && value.size <= 5048576; // 5MB limit
    })
    .test("fileType", "Unsupported File Format", (value) => {
      return (
        value && ["application/pdf", "application/msword"].includes(value.type)
      );
    }),
});

const ScholarshipForm = () => {
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
            navigate("/scholarshipSuccessful");
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
    cvUrl: "",
    passportUrl: "",
    introVideoUrl: "",
  };

  const handleNext = (values, { setSubmitting }) => {
    // Store the current step's data

    setFormData({ ...formData, ...values });

    if (step < 2) {
      setStep(step + 1);
    } else {
      handleSubmit(formData);
    }
    setSubmitting(false);
  };

  const handleSubmit = async (values, setSubmitting) => {
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
      let uploadFiles = [cvUrl, passportUrl].map((file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "tin4r1lt");

        return axios.post(
          `${API_HOST_URL}/api/cloudinary/upload-file`,
          formData
        );
      });

      // Wait for all uploads to complete
      let responses = await Promise.all(uploadFiles);

      // Get URLs of uploaded files
      let fileUrls = responses.map((response) => response.data);

      [cvUrl, passportUrl] = fileUrls;

      // Handle form submission with otherValues and the uploaded file URLs
      const submittedData = {
        ...otherValues,
        cvUrl: cvUrl,
        passportUrl: passportUrl,

        //turning the below form data into a bolean value
        hasLaptop: hasLaptop === "Yes",
        hasProgrammingExperience: hasProgrammingExperience === "Yes",
        hasWorkExperience: hasWorkExperience === "Yes",
      };
      submitForm(
        `${API_HOST_URL}/api/v1/scholarship-applicants/apply`,
        submittedData
      );
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
                      <label
                        className="font-bold"
                        htmlFor="schoolOrOrganisation">
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
                    <div className="block w-[90%] md:w-[70%] m-auto mt-4  ">
                      <label className="font-bold" htmlFor="introVideoUrl">
                        Introduction Video Link
                      </label>
                      <Field
                        className="h-[50px] px-3 pt-3 w-[100%] m-auto rounded-lg border-none border-b-4 border-b-darkGray outline-none"
                        type="text"
                        name="introVideoUrl"
                      />
                      <ErrorMessage
                        className="text-red"
                        name="introVideoUrl"
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
                      <label className="font-bold" htmlFor="preferredStack">
                        What is Your Preferred Stack?
                      </label>

                      <fieldset
                        className="bg-primary py-4 px-2 rounded-lg"
                        required>
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

export default ScholarshipForm;

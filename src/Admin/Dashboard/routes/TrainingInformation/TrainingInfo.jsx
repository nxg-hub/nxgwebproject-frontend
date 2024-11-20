import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { API_HOST_URL } from "../../../../utils/API/Api";
import { techStacks } from "../../../../utils/questions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

const validationSchema = Yup.object().shape({
  totalDurationMonths: Yup.string().required("Required"),
  techTracks: Yup.array().min(1, "At least one option must be selected"),
  trainingType: Yup.string().required("Required"),
  basicDurationMonths: Yup.string().required("Required"),
  advancedDurationMonths: Yup.string().required("Required"),
  basicFee: Yup.string().required("Required"),
  advancedFee: Yup.string().required("Required"),
  commencementDate: Yup.string().required("Required"),
  registrationFee: Yup.string().required("Required"),
  bannerUrl: Yup.mixed()
    .required("A file is required")
    .test("fileSize", "File size is too large", (value) => {
      return value && value.size <= 5048576; // 5MB limit
    })
    .test("fileType", "Unsupported File Format", (value) => {
      return value && ["image/jpeg", "image/png"].includes(value.type);
    }),
});

const TrainingInfo = () => {
  const [loading, setLoading] = useState(false);

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
          if (response.status === 200) {
            toast.success("Upload Successful!"); // Show success toast
          }
        });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again."); // Show error toast
    } finally {
      setLoading(false);
    }
  };

  const initialValues = {
    totalDurationMonths: "",
    techTracks: [],
    trainingType: "",
    basicDurationMonths: "",
    advancedDurationMonths: "",
    basicFee: "",
    advancedFee: "",
    commencementDate: "",
    bannerUrl: "",
    registrationFee: "",
  };

  const handleSubmit = async (values, actions) => {
    setLoading(true);
    const { resetForm } = actions;
    try {
      let { bannerUrl, ...otherValues } = values;

      // Create an array of file uploads
      let uploadFiles = [bannerUrl].map((file) => {
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

      [bannerUrl] = fileUrls;
      // Handle form submission with otherValues and the uploaded file URLs
      const submittedData = {
        ...otherValues,
        bannerUrl: bannerUrl,
      };
      submitForm(`${API_HOST_URL}/api/v1/post-ui`, submittedData);
      setLoading(false);
      resetForm();
    } catch (error) {
      console.error("Error uploading files:", error);
      toast.error("Something went wrong. Please try again."); // Show error toast
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-[#2596BE20] w-[90%] md:w-[70%] !m-auto mt-5 rounded-lg py-5">
      <h2 className="text-center font-bold md:text-lg">
        Upload Training Information.
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({ setFieldValue, isSubmitting, values }) => (
          <Form className="w-full">
            <>
              <div className="block w-[90%] md:w-[70%] m-auto mt-4 ">
                <label
                  className="font-bold md:text-md"
                  htmlFor="totalDurationMonths">
                  Total Duration Of Training In Months:
                </label>
                <Field
                  className="h-[50px] px-3 pt-3 w-[100%] m-auto rounded-lg border-none border-b-4 border-b-darkGray outline-none"
                  type="number"
                  name="totalDurationMonths"
                />
                <ErrorMessage
                  className="text-red"
                  name="totalDurationMonths"
                  component="div"
                />
              </div>
              <div className="block w-[90%] md:w-[70%] m-auto mt-4  ">
                <label className="font-bold md:text-md" htmlFor="firstName">
                  Tech Stacks:
                </label>
                <h2>Select Multiple Options</h2>
                {/* Render checkboxes */}
                {techStacks.map((option) => (
                  <div key={option.value}>
                    <Field
                      type="checkbox"
                      name="techTracks"
                      value={option.value}
                      id={option.value}
                    />
                    <label htmlFor={option.value}>{option.label}</label>
                  </div>
                ))}
                <ErrorMessage
                  className="text-red"
                  name="techTracks"
                  component="div"
                />
              </div>
              <div className="block w-[90%] md:w-[70%] m-auto mt-4  ">
                <label className="font-bold md:text-md" htmlFor="trainingType">
                  Training Type (Basic or Advanced):
                </label>
                <Field
                  className="h-[50px] px-3 pt-3 w-[100%] m-auto rounded-lg border-none border-b-4 border-b-darkGray outline-none"
                  type="text"
                  name="trainingType"
                />
                <ErrorMessage
                  className="text-red"
                  name="trainingType"
                  component="div"
                />
              </div>
              <div className="block w-[90%] md:w-[70%] m-auto mt-4  ">
                <label
                  className="font-bold md:text-md"
                  htmlFor="basicDurationMonths">
                  Basic Type Duration In Months:
                </label>
                <Field
                  className="h-[50px] px-3 pt-3 w-[100%] m-auto rounded-lg border-none border-b-4 border-b-darkGray outline-none"
                  type="number"
                  name="basicDurationMonths"
                />
                <ErrorMessage
                  className="text-red"
                  name="basicDurationMonths"
                  component="div"
                />
              </div>
              <div className="block w-[90%] md:w-[70%] m-auto mt-4  ">
                <label
                  className="font-bold md:text-md"
                  htmlFor="advancedDurationMonths">
                  Advance Type Duration In Months:
                </label>
                <Field
                  className="h-[50px] px-3 pt-3 w-[100%] m-auto rounded-lg border-none border-b-4 border-b-darkGray outline-none"
                  type="number"
                  name="advancedDurationMonths"
                />
                <ErrorMessage
                  className="text-red"
                  name="advancedDurationMonths"
                  component="div"
                />
              </div>
              <div className="block w-[90%] md:w-[70%] m-auto mt-4  ">
                <label className="font-bold md:text-md" htmlFor="advancedFee">
                  Advance Fee:
                </label>
                <Field
                  className="h-[50px] px-3 pt-3 w-[100%] m-auto rounded-lg border-none border-b-4 border-b-darkGray outline-none"
                  type="number"
                  name="advancedFee"
                />
                <ErrorMessage
                  className="text-red"
                  name="advancedFee"
                  component="div"
                />
              </div>
              <div className="block w-[90%] md:w-[70%] m-auto mt-4  ">
                <label className="font-bold md:text-md" htmlFor="basicFee">
                  Basic Fee:
                </label>
                <Field
                  className="h-[50px] px-3 pt-3 w-[100%] m-auto rounded-lg border-none border-b-4 border-b-darkGray outline-none"
                  type="number"
                  name="basicFee"
                />
                <ErrorMessage
                  className="text-red"
                  name="basicFee"
                  component="div"
                />
              </div>
              <div className="block w-[90%] md:w-[70%] m-auto mt-4  ">
                <label
                  className="font-bold md:text-md"
                  htmlFor="commencementDate">
                  Commencement Date:
                </label>
                <Field
                  className="h-[50px] px-3 pt-3 w-[100%] m-auto rounded-lg border-none border-b-4 border-b-darkGray outline-none"
                  type="date"
                  name="commencementDate"
                />
                <ErrorMessage
                  className="text-red"
                  name="commencementDate"
                  component="div"
                />
              </div>
              <div className="block w-[90%] md:w-[70%] m-auto mt-4  ">
                <label
                  className="font-bold md:text-md"
                  htmlFor="registrationFee">
                  Registeration Fee:
                </label>
                <Field
                  className="h-[50px] px-3 pt-3 w-[100%] m-auto rounded-lg border-none border-b-4 border-b-darkGray outline-none"
                  type="number"
                  name="registrationFee"
                />
                <ErrorMessage
                  className="text-red"
                  name="registrationFee"
                  component="div"
                />
              </div>
              <div className="w-[90%] md:w-[70%] m-auto mt-4">
                <label className="font-bold block" htmlFor="bannerUrl">
                  Upload Banner Photo
                </label>
                <input
                  id="bannerUrl"
                  name="bannerUrl"
                  type="file"
                  onChange={(event) => {
                    const file = event.currentTarget.files[0];
                    setFieldValue("bannerUrl", file);
                  }}
                />
                <ErrorMessage
                  className="text-red"
                  name="bannerUrl"
                  component="div"
                />
              </div>
            </>

            <div className="w-[40%] md:w-[30%] m-auto">
              <button
                disabled={isSubmitting}
                className="w-[100%] rounded-full text-center py-2 my-10 text-primary font-bold m-auto bg-[#006A90]"
                type="submit">
                {loading ? "Uploading..." : "Upload"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default TrainingInfo;

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import logo from "../../assets/images/nxg-logo.png";

// Validation schema for the login form
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const [loginError, setLoginError] = useState("");

  const handleSubmit = async (values) => {
    const { email, password, rememberMe } = values;

    try {
      // Example of an API call to authenticate the user
      const response = await fetch("https://your-api-url/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials"); // Handle unsuccessful login
      }

      const data = await response.json();
      console.log("Login successful:", data);

      // Implement "Remember Me" logic here if needed
      if (rememberMe) {
        localStorage.setItem("email", email);
      } else {
        localStorage.removeItem("email");
      }

      // Reset login error message
      setLoginError("");
    } catch (error) {
      setLoginError(error.message);
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "", rememberMe: false }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form className="py-5 w-[80%] md:w-[60%] m-auto bg-primary border-2 border-[#a0a0a0] shadow-2xl rounded-xl mt-[100px] mb-[50px]">
          <img className="h-[100px] m-auto" src={logo} alt="logo" />
          <h2 className="md:text-lg text-center mt-3">
            Login to Admin Dashboard
          </h2>
          {loginError && (
            <div className="text-red text-center">{loginError}</div>
          )}
          {/* Display login error */}
          <div className="w-[80%] md:w-[60%] m-auto">
            <div className="py-11">
              <label className="font-bold block md:text-md" htmlFor="email">
                Email
              </label>
              <Field
                className="w-full h-[50px] px-2 rounded-md border border-[#ddd] focus:outline-none"
                type="email"
                name="email"
              />
              <ErrorMessage className="text-red" name="email" component="div" />
            </div>
            <div className="">
              <label className="font-bold block md:text-md" htmlFor="password">
                Password
              </label>
              <Field
                className="w-full h-[50px] rounded-md px-2 border border-[#ddd] mb-3 focus:outline-none"
                type="password"
                name="password"
              />
              <ErrorMessage
                className="text-red"
                name="password"
                component="div"
              />
            </div>
            <div className="mt-5">
              <Field type="checkbox" name="rememberMe" />
              <label className="mx-2" htmlFor="rememberMe">
                Remember Me
              </label>
            </div>
          </div>
          <div className="w-[80%] md:w-[60%] py-2 bg-secondary rounded-md m-auto mt-2 mb-4">
            <button
              className="text-center w-full text-primary font-bold"
              type="submit"
              disabled={isSubmitting}>
              Login
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Login;

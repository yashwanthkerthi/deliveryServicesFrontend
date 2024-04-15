import React, { useState } from "react";
import { useFormik } from "formik";
import { signUpFormValidation } from "../../utils/helpers/validations/Validations";
import { ToastContainer, toast } from "react-toastify";
import TextField from "../../components/TextField/TextField";
import ReusableButton from "../../components/Button/Button";
// import { networkUrls } from "../../services/networkUrls";
// import { Post } from "../../services/apiServices";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import { role } from "../../utils/role";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Signup = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      mobileNumber: "",
    },
    validationSchema: signUpFormValidation,
    onSubmit: () => {
      handleSignupDetails();
    },
  });

  const handleSignupDetails = async () => {
    const { firstName, lastName, email, password, mobileNumber } =
      formik.values;

    const formData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password,
      mobile_number: mobileNumber,
    };
    console.log("hi");
    

    try {
      const response = await axios.post(
        "http://localhost:5000/api/signup",
        formData
      );

      console.log(response, "response");

      if (response?.data?.api_status === 200) {
        toast.success(response?.data?.message, { autoClose: 3000 });
        Cookies.set("jwtToken", response.data.data.jwtToken);
        setTimeout(() => {
          navigate(`/${role[response?.data?.data?.user_role]}Dashboard`.toLowerCase());
        }, 2500);
      } else toast.error(response?.data?.message, { autoClose: 3000 });
    } catch (error) {
      toast.error("Please try again!", { autoClose: 3000 });
      console.log(error, "error");
      setIsSignedUp(false);
    }
  };

  return (
    <div
      style={{
        // backgroundColor: "rgb(232, 240, 254)",
        backgroundColor: "#0E2C53",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <h2 style={{ fontSize: "25px", fontWeight: "600", color: "#ffffff" }}>
        REGISTRATION FORM
      </h2>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={formik.handleSubmit}
        autoComplete="off"
      >
        <TextField
          id="firstName"
          name="firstName"
          placeholder="Enter FirstName"
          label="FirstName"
          onChange={formik.handleChange}
          type="text"
          style={{
            // marginBottom: "0.75rem",
            width: "25vw",
            backgroundColor: "#FFFFFF",
          }}
          value={formik.values.firstName}
          error={Boolean(formik.errors.firstName)}
          errorMessage={formik.touched.firstName && formik.errors.firstName}
          autoComplete="off"
          TextFieldVariants="filled"
        />
        <TextField
          id="lastName"
          name="lastName"
          placeholder="Enter lastName"
          label="LastName"
          onChange={formik.handleChange}
          type="text"
          style={{
            // marginBottom: "0.75rem",
            width: "25vw",
            backgroundColor: "#FFFFFF",
          }}
          value={formik.values.lastName}
          error={Boolean(formik.errors.lastName)}
          errorMessage={formik.touched.lastName && formik.errors.lastName}
          autoComplete="off"
          TextFieldVariants="filled"
        />

        <TextField
          id="email"
          name="email"
          placeholder="Enter Email"
          label="Email"
          onChange={formik.handleChange}
          type="email"
          value={formik.values.email}
          style={{
            // marginBottom: "0.75rem",
            width: "25vw",
            backgroundColor: "#FFFFFF",
          }}
          error={Boolean(formik.errors.email)}
          errorMessage={formik.touched.email && formik.errors.email}
          autoComplete="off"
          TextFieldVariants="filled"
        />
        <TextField
          id="password"
          name="password"
          placeholder="Enter Password"
          label="Password"
          onChange={formik.handleChange}
          type="password"
          style={{
            // marginBottom: "0.75rem",
            width: "25vw",
            backgroundColor: "#FFFFFF",
          }}
          value={formik.values.password}
          error={Boolean(formik.errors.password)}
          errorMessage={formik.touched.password && formik.errors.password}
          autoComplete="new-password"
          TextFieldVariants="filled"
        />
        <TextField
          id="mobileNumber"
          name="mobileNumber"
          placeholder="Enter MobileNumber"
          label="MobileNumber"
          onChange={formik.handleChange}
          type="text"
          style={{
            // marginBottom: "0.75rem",
            width: "25vw",
            backgroundColor: "#FFFFFF",
          }}
          value={formik.values.mobileNumber}
          error={Boolean(formik.errors.mobileNumber)}
          errorMessage={
            formik.touched.mobileNumber && formik.errors.mobileNumber
          }
          autoComplete="off"
          TextFieldVariants="filled"
        />
        <ReusableButton
          size="medium"
          disabled={isSignedUp}
          style={{ width: "100%" }}
          className="w-full mt-9 bg-customBlue text-white rounded-md py-2 font-semibold hover:bg-customHoverBlue "
          variant="contained"
          type="submit"
          buttonName="Sign Up"
          endIcon={
            !isSignedUp ? (
              ""
            ) : (
              <CircularProgress size={20} style={{ color: "white" }} />
            )
          }
        />
      </form>
      <Link
        style={{
          textDecoration: "none",
          fontSize: "20px",
          color: "#ffffff",
          padding: "5px",
        }}
        to="/signin"
      >
        Already have an account / Signin account
      </Link>
      {<ToastContainer />}
    </div>
  );
};

export default Signup;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";
import TextField from "../../components/TextField/TextField";
import { useFormik } from "formik";
import { LoginFormValidation } from "../../utils/helpers/validations/Validations";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { networkUrls } from "../../services/networkUrls";
import { Post } from "../../services/apiServices";
import ReusableButton from "../../components/Button/Button";
import { CircularProgress } from "@mui/material";
import { role } from "../../utils/role";
import axios from "axios";

const Signin = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginFormValidation,
    onSubmit: () => {
      handleLoginDetails();
    },
  });

  const handleLoginDetails = async () => {
    const { email, password } = formik.values;
    

    console.log(email,password);
    
    try {
      const formData = {
        email,
        password,
      };
      
      const response = await axios.post(
        "http://localhost:5000/api/signin",
        formData
      );

      console.log(response);
      

      if (response?.data?.api_status === 200) {
        toast.success(response?.data?.message, { autoClose: 3000 });
        Cookies.set("jwtToken", response.data.data.jwtToken);
        Cookies.set("user_id", response.data.data.user_id);
        Cookies.set("user_role", response.data.data.user_role);
        setTimeout(() => {
          navigate(`/${role[response?.data?.data?.user_role]}Dashboard`.toLowerCase());
        }, 2000);
      } else toast.error(response?.data?.message, { autoClose: 3000 });
    } catch (error) {
      toast.error("Please try again!", { autoClose: 3000 });
      setIsSignedIn(false);
    }
  };

  return (
    <div
      style={{
        // backgroundColor: "rgb(232, 240, 254)",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0E2C53",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <h2 style={{ fontSize: "25px", fontWeight: "600", color: "#ffffff" }}>
        LOGIN FORM
      </h2>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={formik.handleSubmit}
        autoComplete="off"
      >
        <TextField
          id="email"
          name="email"
          placeholder="Enter Email"
          label="email"
          onChange={formik.handleChange}
          style={{
            // marginBottom: "0.75rem",
            width: "100%",
            backgroundColor: "#FFFFFF",
          }}
          type="email"
          value={formik.values.email}
          error={Boolean(formik.errors.email)}
          errorMessage={formik.touched.email && formik.errors.email}
          autoComplete="off"
          TextFieldVariants="filled"
          required
        />
        <TextField
          id="password"
          name="password"
          placeholder="Enter Password"
          label="Password"
          onChange={formik.handleChange}
          style={{
            // marginBottom: "0.75rem",
            width: "100%",
            backgroundColor: "#FFFFFF",
          }}
          type="password"
          value={formik.values.password}
          error={Boolean(formik.errors.password)}
          errorMessage={formik.touched.password && formik.errors.password}
          autoComplete="new-password"
          TextFieldVariants="filled"
          required
        />
        <ReusableButton
          size="medium"
          variant="contained"
          type="submit"
          disabled={isSignedIn}
          buttonName="Sign In"
          endIcon={
            !isSignedIn ? (
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
        to="/signup"
      >
        Don't have an account / Signup account
      </Link>
      {<ToastContainer />}
    </div>
  );
};

export default Signin;

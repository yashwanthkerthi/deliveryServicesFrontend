import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import TextField from "../../components/TextField/TextField";
import { useFormik } from "formik";
import { LoginFormValidation } from "../../utils/helpers/validations/Validations";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { networkUrls } from "../../services/networkUrls";
import { Post } from "../../services/apiServices";
import ReusableButton from "../../components/Button/Button";

// import ReusableButton from "../../../components/common/Button/Button";
import { CircularProgress } from "@mui/material";
const Signin = () => {
  const [isLogged, setIsLogged] = useState(false);
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
    setIsLogged(true);
    const { email, password } = formik.values;
    try {
      const response = await Post(
        networkUrls.login,
        {
          email,
          password,
        },
        false
      );

      if (response?.data?.api_status === 200) {
        toast.success("Login successful", { autoClose: 3000 });
        Cookies.set("refreshToken", response.data.data.refreshToken);
        Cookies.set("acessToken", response.data.data.acessToken);
        localStorage.setItem(
          "userDetails",
          JSON.stringify(response?.data?.data)
        );
        navigate("/");
      } else toast.error(response?.data?.message, { autoClose: 3000 });
    } catch (error) {
      toast.error("Please try again!", { autoClose: 3000 });
    }
    setIsLogged(false);
  };

  return (
    <div style={{ backgroundColor: "rgb(232, 240, 254)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100vw" ,height:"100vh"}}>
        <h2 style={{fontSize:"30px",fontWeight:"600"}} >Sign In</h2>
        <form style={{display:"flex",flexDirection:"column"}} onSubmit={formik.handleSubmit} autoComplete="off">
          <TextField
            id="email"
            name="email"
            placeholder="Enter Email"
            label="Email"
            onChange={formik.handleChange}
            style={{
                marginBottom: "0.75rem",
                width: "100%",
              }}
            type="email"
            value={formik.values.email}
            error={Boolean(formik.errors.email)}
            errorMessage={formik.touched.email && formik.errors.email}
            autoComplete="off"
          />
          <TextField
            id="password"
            name="password"
            placeholder="Enter Password"
            label="Password"
            onChange={formik.handleChange}
            style={{
                marginBottom: "0.75rem",
                width: "100%",
              }}
            type="password"
            value={formik.values.password}
            error={Boolean(formik.errors.password)}
            errorMessage={formik.touched.password && formik.errors.password}
            autoComplete="off"
          />
          <ReusableButton
                size="medium"
                disabled={isLogged}
                className="w-full mt-9 bg-customBlue text-white rounded-md py-2 font-semibold hover:bg-customHoverBlue "
                variant="contained"
                type="submit"
                buttonName="Sign In"
                endIcon={
                  !isLogged ? (
                    ""
                  ) : (
                    <CircularProgress size={20} style={{ color: "white" }} />
                  )
                }
              />
        </form>
      {<ToastContainer />}
    </div>
  );
};

export default Signin;

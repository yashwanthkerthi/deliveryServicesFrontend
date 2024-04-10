import React, { useState } from "react";
import { useFormik } from "formik";
import { signUpFormValidation } from "../../utils/helpers/validations/Validations";
import { ToastContainer, toast } from "react-toastify";
import TextField from "../../components/TextField/TextField";
import ReusableButton from "../../components/Button/Button";

const Signup = () => {
  const [isLogged, setIsLogged] = useState(false);

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
      handleLoginDetails();
    },
  });

  const handleLoginDetails = async () => {
    const { firstName, lastName, email, password, mobileNumber } =
      formik.values;
    try {
      //   const response = await Post(
      //     networkUrls.signup,
      //     {
      //       first_name: firstName,
      //       last_name: lastName,
      //       email,
      //       password,
      //       mobile: mobileNumber,
      //       fcm_token: "dummy",
      //       device_id: "1",
      //       device_type: "andriod",
      //       status: true,
      //     },
      //     false
      //   );
      //   if (response?.data?.statusCode === 200) {
      //     toast.success("Signup successful", { autoClose: 3000 });
      //     Cookies.set("refreshToken", response.data.data.refreshToken);
      //     Cookies.set("acessToken", response.data.data.acessToken);
      //     localStorage.setItem(
      //       "userDetails",
      //       JSON.stringify(response?.data?.data)
      //     );
      //     // navigate("/");
      //   } else toast.error(response?.data?.message, { autoClose: 3000 });
    } catch (error) {
      toast.error("Please try again!", { autoClose: 3000 });
      setIsLogged(false);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "rgb(232, 240, 254)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <h2
        style={{
          fontSize: "1.25rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          fontFamily: "customFont",
        }}
      >
        Sign Up
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
            marginBottom: "0.75rem",
            width: "100%",
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
            marginBottom: "0.75rem",
            width: "100%",
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
            marginBottom: "0.75rem",
            width: "100%",
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
            marginBottom: "0.75rem",
            width: "100%",
            backgroundColor: "#FFFFFF",
          }}
          value={formik.values.password}
          error={Boolean(formik.errors.password)}
          errorMessage={formik.touched.password && formik.errors.password}
          autoComplete="off"
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
            marginBottom: "0.75rem",
            width: "100%",
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
          disabled={isLogged}
          style={{ width: "100%" }}
          className="w-full mt-9 bg-customBlue text-white rounded-md py-2 font-semibold hover:bg-customHoverBlue "
          variant="contained"
          type="submit"
          buttonName="Sign Up"
        />
      </form>
      {<ToastContainer />}
    </div>
  );
};

export default Signup;

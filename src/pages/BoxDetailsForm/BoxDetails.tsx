import React, { useState } from "react";
import { boxDetailsFormValidation } from "../../utils/helpers/validations/Validations";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import TextField from "../../components/TextField/TextField";
import ReusableButton from "../../components/Button/Button";

const BoxDetailsForm = () => {
  const [isLogged, setIsLogged] = useState(false);

  const formik = useFormik({
    initialValues: {
      weight: "",
      content: "",
      measuremnet: "",
      sender_name: "",
      recipient_name: "",
    },
    validationSchema: boxDetailsFormValidation,
    onSubmit: () => {
      handleLoginDetails();
    },
  });

  const handleLoginDetails = async () => {
    // const { firstName, lastName, email, password, mobileNumber } =
    //   formik.values;
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
        paddingTop: "15vh",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        top: "25%",
        alignItems: "center",
      }}
    >
      {/* <h1>Address Form</h1> */}
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        onSubmit={formik.handleSubmit}
        autoComplete="off"
      >
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Enter package details
            </h1>
            <TextField
              id="weight"
              name="weight"
              placeholder="Enter weight"
              label="weight"
              onChange={formik.handleChange}
              type="email"
              value={formik.values.weight}
              style={{
                marginBottom: "0.75rem",
                width: "100%",
              }}
              error={Boolean(formik.errors.weight)}
              errorMessage={formik.touched.weight && formik.errors.weight}
              autoComplete="off"
              TextFieldVariants="filled"
            />
            <TextField
              id="content"
              name="content"
              placeholder="Enter content name"
              label="content"
              onChange={formik.handleChange}
              type="text"
              style={{
                marginBottom: "0.75rem",
                width: "100%",
              }}
              value={formik.values.content}
              error={Boolean(formik.errors.content)}
              errorMessage={formik.touched.content && formik.errors.content}
              autoComplete="off"
              TextFieldVariants="filled"
            />

            <TextField
              id="measuremnet"
              name="measuremnet"
              placeholder="Enter dimensions"
              label="measuremnet"
              onChange={formik.handleChange}
              type="text"
              style={{
                marginBottom: "0.75rem",
                width: "100%",
              }}
              value={formik.values.measuremnet}
              error={Boolean(formik.errors.measuremnet)}
              errorMessage={
                formik.touched.measuremnet && formik.errors.measuremnet
              }
              autoComplete="off"
              TextFieldVariants="filled"
            />
            <TextField
              id="sender_name"
              name="sender_name"
              placeholder="Enter sender name"
              label="sender_name"
              onChange={formik.handleChange}
              type="text"
              style={{
                marginBottom: "0.75rem",
                width: "100%",
              }}
              value={formik.values.sender_name}
              error={Boolean(formik.errors.sender_name)}
              errorMessage={
                formik.touched.sender_name && formik.errors.sender_name
              }
              autoComplete="off"
              TextFieldVariants="filled"
            />
            <TextField
              id="recipient_name"
              name="recipient_name"
              placeholder="Enter recipient name"
              label="recipient_name"
              onChange={formik.handleChange}
              type="text"
              style={{
                marginBottom: "0.75rem",
                width: "100%",
              }}
              value={formik.values.recipient_name}
              error={Boolean(formik.errors.recipient_name)}
              errorMessage={
                formik.touched.recipient_name && formik.errors.recipient_name
              }
              autoComplete="off"
              TextFieldVariants="filled"
            />
          </div>
        </div>
        <ReusableButton
          size="medium"
          disabled={isLogged}
          style={{ width: "100%", backgroundColor: "#0E2C53" }}
          className="w-full mt-9 bg-customBlue text-white rounded-md py-2 font-semibold hover:bg-customHoverBlue "
          variant="contained"
          type="submit"
          buttonName="Next"
        />
      </form>
      {<ToastContainer />}
    </div>
  );
};

export default BoxDetailsForm;

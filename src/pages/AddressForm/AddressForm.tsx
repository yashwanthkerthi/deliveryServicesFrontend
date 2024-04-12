import React, { useState } from "react";
import { addressFormValidation } from "../../utils/helpers/validations/Validations";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import TextField from "../../components/TextField/TextField";
import ReusableButton from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { networkUrls } from "../../services/networkUrls";
import { Post } from "../../services/apiServices";

const AddressForm = () => {
  // const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fromAddress: "",
      fromEmail: "",
      fromName: "",
      fromPhoneNumber: "",
      fromPincode: "",
      toAddress: "",
      toEmail: "",
      toName: "",
      toPhoneNumber: "",
      toPincode: "",
    },
    validationSchema: addressFormValidation,
    onSubmit: () => {
      handleAddressFormDetails();
    },
  });

  // console.log(formik.values);
  

  const handleAddressFormDetails = async () => {
    // console.log("hi");

    const {
      fromAddress,
      fromEmail,
      fromName,
      fromPhoneNumber,
      fromPincode,

      toAddress,
      toEmail,
      toName,
      toPhoneNumber,
      toPincode,
    } = formik.values;

    try {
      const formData = {
        from_address: fromAddress,
        from_email: fromEmail,
        from_name: fromName,
        from_mobile_number: fromPhoneNumber,
        from_pincode: fromPincode,
        to_address: toAddress,
        to_email: toEmail,
        to_name:toName,
        to_mobile_number: toPhoneNumber,
        to_pincode : toPincode,
      };
      console.log(formData);
      // const response = await Post(networkUrls.addaddress, formData, true);

      navigate("/boxdetails");


      // if (response?.data?.statusCode === 200) {
      //   toast.success("Signup successful", { autoClose: 3000 });
        // navigate("/boxdetails");
        // // Cookies.set("refreshToken", response.data.data.refreshToken);s
        // localStorage.setItem(
        //   "userDetails",
        //   JSON.stringify(response?.data?.data)
        // );
      // } else toast.error(response?.data?.message, { autoClose: 3000 });
    } catch (error) {
      toast.error("Please try again!", { autoClose: 3000 });
    }
  };
  return (
    <div
      style={{
        paddingTop: "10vh",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
              From Address
            </h1>
            <div></div>
            <TextField
              id="fromAddress"
              name="fromAddress"
              placeholder="Enter Address"
              label="FromAddress"
              onChange={formik.handleChange}
              type="text"
              style={{
                // marginBottom: "0.75rem",
                width: "100%",
              }}
              value={formik.values.fromAddress}
              error={Boolean(formik.errors.fromAddress)}
              errorMessage={
                formik.touched.fromAddress && formik.errors.fromAddress
              }
              autoComplete="off"
              TextFieldVariants="filled"
            />
            <TextField
              id="fromEmail"
              name="fromEmail"
              placeholder="Enter Email"
              label="fromEmail"
              onChange={formik.handleChange}
              type="email"
              value={formik.values.fromEmail}
              style={{
                // marginBottom: "0.75rem",
                width: "100%",
              }}
              error={Boolean(formik.errors.fromEmail)}
              errorMessage={formik.touched.fromEmail && formik.errors.fromEmail}
              autoComplete="off"
              TextFieldVariants="filled"
            />
            <TextField
              id="fromName"
              name="fromName"
              placeholder="Enter Name"
              label="fromName"
              onChange={formik.handleChange}
              type="text"
              style={{
                // marginBottom: "0.75rem",
                width: "100%",
              }}
              value={formik.values.fromName}
              error={Boolean(formik.errors.fromName)}
              errorMessage={formik.touched.fromName && formik.errors.fromName}
              autoComplete="off"
              TextFieldVariants="filled"
            />

            <TextField
              id="fromPhoneNumber"
              name="fromPhoneNumber"
              placeholder="Enter Phone Number"
              label="fromPhoneNumber"
              onChange={formik.handleChange}
              type="text"
              style={{
                // marginBottom: "0.75rem",
                width: "100%",
              }}
              value={formik.values.fromPhoneNumber}
              error={Boolean(formik.errors.fromPhoneNumber)}
              errorMessage={
                formik.touched.fromPhoneNumber && formik.errors.fromPhoneNumber
              }
              autoComplete="off"
              TextFieldVariants="filled"
            />
            <TextField
              id="fromPincode"
              name="fromPincode"
              placeholder="Enter Pin Code"
              label="fromPincode"
              onChange={formik.handleChange}
              type="text"
              style={{
                // marginBottom: "0.75rem",
                width: "100%",
              }}
              value={formik.values.fromPincode}
              error={Boolean(formik.errors.fromPincode)}
              errorMessage={
                formik.touched.fromPincode && formik.errors.fromPincode
              }
              autoComplete="off"
              TextFieldVariants="filled"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              To Address
            </h1>
            <TextField
              id="toAddress"
              name="toAddress"
              placeholder="Enter Address"
              label="toAddress"
              onChange={formik.handleChange}
              type="text"
              style={{
                // marginBottom: "0.75rem",
                width: "100%",
              }}
              value={formik.values.toAddress}
              error={Boolean(formik.errors.toAddress)}
              errorMessage={formik.touched.toAddress && formik.errors.toAddress}
              autoComplete="off"
              TextFieldVariants="filled"
            />
            <TextField
              id="toEmail"
              name="toEmail"
              placeholder="Enter Email"
              label="toEmail"
              onChange={formik.handleChange}
              type="email"
              value={formik.values.toEmail}
              style={{
                // marginBottom: "0.75rem",
                width: "100%",
              }}
              error={Boolean(formik.errors.toEmail)}
              errorMessage={formik.touched.toEmail && formik.errors.toEmail}
              autoComplete="off"
              TextFieldVariants="filled"
            />
            <TextField
              id="toName"
              name="toName"
              placeholder="Enter Name"
              label="toName"
              onChange={formik.handleChange}
              type="text"
              style={{
                // marginBottom: "0.75rem",
                width: "100%",
              }}
              value={formik.values.toName}
              error={Boolean(formik.errors.toName)}
              errorMessage={formik.touched.toName && formik.errors.toName}
              autoComplete="off"
              TextFieldVariants="filled"
            />

            <TextField
              id="toPhoneNumber"
              name="toPhoneNumber"
              placeholder="Enter Phone Number"
              label="toPhoneNumber"
              onChange={formik.handleChange}
              type="text"
              style={{
                // marginBottom: "0.75rem",
                width: "100%",
              }}
              value={formik.values.toPhoneNumber}
              error={Boolean(formik.errors.toPhoneNumber)}
              errorMessage={
                formik.touched.toPhoneNumber && formik.errors.toPhoneNumber
              }
              autoComplete="off"
              TextFieldVariants="filled"
            />
            <TextField
              id="toPincode"
              name="toPincode"
              placeholder="Enter Pin Code"
              label="toPincode"
              onChange={formik.handleChange}
              type="text"
              style={{
                // marginBottom: "0.75rem",
                width: "100%",
              }}
              value={formik.values.toPincode}
              error={Boolean(formik.errors.toPincode)}
              errorMessage={formik.touched.toPincode && formik.errors.toPincode}
              autoComplete="off"
              TextFieldVariants="filled"
            />
          </div>
        </div>
        <ReusableButton
          size="medium"
          style={{ width: "100%", backgroundColor: "#0E2C53" }}
          variant="contained"
          type="submit"
          buttonName="Next"
        />
      </form>
      {<ToastContainer />}
    </div>
  );
};

export default AddressForm;

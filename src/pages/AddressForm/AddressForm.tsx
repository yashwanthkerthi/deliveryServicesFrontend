import React, { useState } from "react";
import { addressFormValidation } from "../../utils/helpers/validations/Validations";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import TextField from "../../components/TextField/TextField";
import ReusableButton from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { networkUrls } from "../../services/networkUrls";
import { Post } from "../../services/apiServices";
import fromtoaddressimage from "../.././deliveryImages/fromtoaddress.png";
import axios from "axios";
import Cookies from "js-cookie";

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

  const headers = {
    Authorization: `Bearer ${Cookies.get("jwtToken")}`,
    "Content-Type": "application/json",
  };

  const handleAddressFormDetails = async () => {
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

    console.log(formik.values);

    try {
      const formData = {
        from_address: fromAddress,
        from_email: fromEmail,
        from_name: fromName,
        from_mobile_number: fromPhoneNumber,
        from_pincode: fromPincode,
        to_address: toAddress,
        to_email: toEmail,
        to_name: toName,
        to_mobile_number: toPhoneNumber,
        to_pincode: toPincode,
        user_id: Cookies.get("user_id"),
      };

      const response = await axios.post(
        "http://localhost:5000/api/add-address",
        formData,
        { headers }
      );

      console.log(response);

      if (response?.data?.api_status === 200) {
        toast.success(response?.data?.message, { autoClose: 3000 });
        setTimeout(() => {
          navigate("/boxdetails");
        }, 2000);
      } else toast.error(response?.data?.message, { autoClose: 3000 });
    } catch (error) {
      console.log(error);
      toast.error("Please try again!", { autoClose: 3000 });
    }
  };
  return (
    <div
      style={{
        paddingTop: "10vh",
        height: "100vh",
        maxWidth: "100vw",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // paddingLeft: "150px",
      }}
    >
      <img
        style={{ width: "55vw", height: "85vh" }}
        alt="fromtoimage"
        src={fromtoaddressimage}
      />

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "50vw",
        }}
        onSubmit={formik.handleSubmit}
        autoComplete="off"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "space-around",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                From Address
              </h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
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
                  errorMessage={
                    formik.touched.fromEmail && formik.errors.fromEmail
                  }
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
                  errorMessage={
                    formik.touched.fromName && formik.errors.fromName
                  }
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
                    formik.touched.fromPhoneNumber &&
                    formik.errors.fromPhoneNumber
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
            </div>
            <div>
              <h1
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                To Address
              </h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
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
                  errorMessage={
                    formik.touched.toAddress && formik.errors.toAddress
                  }
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
                  errorMessage={
                    formik.touched.toPincode && formik.errors.toPincode
                  }
                  autoComplete="off"
                  TextFieldVariants="filled"
                />
              </div>
            </div>
          </div>
        </div>
        <ReusableButton
          size="medium"
          style={{
            width: "90%",
            backgroundColor: "#0E2C53",
            marginTop: "10px",
          }}
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

import React, { useState } from "react";
import { boxDetailsFormValidation } from "../../utils/helpers/validations/Validations";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import TextField from "../../components/TextField/TextField";
import ReusableButton from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { Post } from "../../services/apiServices";
import { networkUrls } from "../../services/networkUrls";
import axios from "axios";
import Cookies from "js-cookie";

const BoxDetailsForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      weight: "",
      content: "",
      measurement: "",
      sender_name: "",
      recipient_name: "",
    },
    validationSchema: boxDetailsFormValidation,
    onSubmit: () => {
      handleAddBoxDetails();
    },
  });

  const headers = {
    Authorization: `Bearer ${Cookies.get("jwtToken")}`,
    "Content-Type": "application/json",
  };

  const handleAddBoxDetails = async () => {
    try {
      const { weight, content, measurement, sender_name, recipient_name } =
        formik.values;

      const formData = {
        weight,
        content,
        measurement,
        sender_name,
        recipient_name,
        user_id: Cookies.get("user_id"),
        
      };

      const response = await axios.post(
        "http://localhost:5000/api/addorderdetails",
        formData,
        { headers }
      );

      if (response?.data?.api_status === 200) {
        toast.success(response?.data?.message, { autoClose: 3000 });
        Cookies.set("order_id",response?.data?.data?.order_id)
        setTimeout(() => {
          navigate("/addpickupdetails");
        }, 2000);
      } else toast.error(response?.data?.message, { autoClose: 3000 });
    } catch (error) {
      console.log("hi");

      toast.error("Please try again!", { autoClose: 3000 });
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
              placeholder="Enter weight in kgs"
              label="weight"
              onChange={formik.handleChange}
              type="text"
              value={formik.values.weight}
              style={{
                // marginBottom: "0.75rem",
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
                // marginBottom: "0.75rem",
                width: "100%",
              }}
              value={formik.values.content}
              error={Boolean(formik.errors.content)}
              errorMessage={formik.touched.content && formik.errors.content}
              autoComplete="off"
              TextFieldVariants="filled"
            />

            <TextField
              id="measurement"
              name="measurement"
              placeholder="Enter lenght of box in cms"
              label="measurement"
              onChange={formik.handleChange}
              type="text"
              style={{
                // marginBottom: "0.75rem",
                width: "100%",
              }}
              value={formik.values.measurement}
              error={Boolean(formik.errors.measurement)}
              errorMessage={
                formik.touched.measurement && formik.errors.measurement
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
                // marginBottom: "0.75rem",
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
                // marginBottom: "0.75rem",
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

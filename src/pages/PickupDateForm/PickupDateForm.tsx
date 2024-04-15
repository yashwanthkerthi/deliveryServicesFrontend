import React, { useState } from "react";
import { pickupDetailsFormValidation } from "../../utils/helpers/validations/Validations";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import TextField from "../../components/TextField/TextField";
import ReusableButton from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { networkUrls } from "../../services/networkUrls";
import { Post } from "../../services/apiServices";
import Cookies from "js-cookie";

const PickupDetailsForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      location: "",
    },
    validationSchema: pickupDetailsFormValidation,
    onSubmit: () => {
      handleSubmitPickupDetails();
    },
  });

  const handleSubmitPickupDetails = async () => {
    try {
      const { date, time, location } = formik.values;
      const response = await Post(
        networkUrls.addpickupdate,
        { date, time, location },
        true
      );
      
      if (response?.data?.statusCode === 200) {
        toast.success("succesfully placed order", { autoClose: 3000 });

        setTimeout(() => {
          navigate("/userdashboard");
        }, 3000);
      } else toast.error(response?.data?.message, { autoClose: 3000 });
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
        top: "25%",
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
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Please Enter pickup details
          </h1>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              id="date"
              name="date"
              placeholder="Enter date"
              label="date"
              onChange={formik.handleChange}
              type="date"
              style={{
                // marginBottom: "0.75rem",
                width: "100%",
              }}
              value={formik.values.date}
              error={Boolean(formik.errors.date)}
              errorMessage={formik.touched.date && formik.errors.date}
              autoComplete="off"
              TextFieldVariants="filled"
            />
            <TextField
              id="time"
              name="time"
              placeholder="Enter time"
              label="content"
              onChange={formik.handleChange}
              type="time"
              value={formik.values.time}
              style={{
                // marginBottom: "0.75rem",
                width: "100%",
              }}
              error={Boolean(formik.errors.time)}
              errorMessage={formik.touched.time && formik.errors.time}
              autoComplete="off"
              TextFieldVariants="filled"
            />
            <TextField
              id="location"
              name="location"
              placeholder="Enter pickup address"
              label="location"
              onChange={formik.handleChange}
              type="text"
              style={{
                // marginBottom: "0.75rem",
                width: "100%",
              }}
              value={formik.values.location}
              error={Boolean(formik.errors.location)}
              errorMessage={formik.touched.location && formik.errors.location}
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
          buttonName="Book order now"
        />
      </form>
      {<ToastContainer />}
    </div>
  );
};

export default PickupDetailsForm;

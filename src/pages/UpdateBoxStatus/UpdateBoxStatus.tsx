import React, { useState } from "react";
import { updateStatusValidation } from "../../utils/helpers/validations/Validations";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import TextField from "../../components/TextField/TextField";
import ReusableButton from "../../components/Button/Button";
import ReusableDropdown from "../../components/Dropdown/Dropdown";
import { useNavigate } from "react-router-dom";
import { networkUrls } from "../../services/networkUrls";
import { Put } from "../../services/apiServices";
import axios from "axios";
import Cookies from "js-cookie";

const status = [
  { key: 1, value: "shipped" },
  { key: 2, value: "delivered" },
];

const UpdateBoxStatus = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      tracking_id: "",
      status: "",
    },
    validationSchema: updateStatusValidation,
    onSubmit: () => {
      handleUpdateStatusDetails();
    },
  });

  const headers = {
    Authorization: `Bearer ${Cookies.get("jwtToken")}`,
    "Content-Type": "application/json",
  };

  const handleUpdateStatusDetails = async () => {
    console.log(formik.values.tracking_id, formik.values.status);

    try {
      const { tracking_id, status } = formik.values;
      const formData = {
        status,
      };

      console.log(formData);

      const response = await axios.put(
        `http://localhost:5000/api/updateboxdetails/${tracking_id}`,
        formData,
        { headers }
      );

      if (response?.data?.api_status === 200) {
        toast.success(response?.data?.message, { autoClose: 3000 });
      } else toast.error(response?.data?.message, { autoClose: 3000 });
    } catch (error) {
      toast.error("Please try again!", { autoClose: 3000 });
    }
  };
  return (
    <div
      style={{
        paddingTop: "20vh",
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
              Update Box Status
            </h1>
            <TextField
              id="tracking_id"
              name="tracking_id"
              placeholder="Enter Tracking Id"
              label="tracking_id"
              onChange={formik.handleChange}
              type="text"
              style={{
                // marginBottom: "0.75rem",
                width: "100%",
              }}
              value={formik.values.tracking_id}
              error={Boolean(formik.errors.tracking_id)}
              errorMessage={
                formik.touched.tracking_id && formik.errors.tracking_id
              }
              autoComplete="off"
              TextFieldVariants="filled"
            />
            <label style={{ marginTop: "10px" }}>Select Status</label>
            <ReusableDropdown
              options={status}
              placeholder="Select.."
              displayEmpty
              id="status"
              name="status"
              className="w-full"
              style={{ height: 50, marginBottom: "20px" }}
              onChange={formik.handleChange}
              value={formik.values.status}
              error={formik.touched.status && Boolean(formik.errors.status)}
              helperText={formik.touched.status && formik.errors.status}
            />
          </div>
        </div>
        <ReusableButton
          size="medium"
          style={{ width: "100%", backgroundColor: "#0E2C53" }}
          className="w-full mt-9 bg-customBlue text-white rounded-md py-2 font-semibold hover:bg-customHoverBlue "
          variant="contained"
          type="submit"
          buttonName="Update status"
        />
      </form>
      {<ToastContainer />}
    </div>
  );
};

export default UpdateBoxStatus;

import React, { useState } from "react";
import { trackShipmentValidation } from "../../utils/helpers/validations/Validations";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import TextField from "../../components/TextField/TextField";
import ReusableButton from "../../components/Button/Button";
import axios from "axios";
import Cookies from "js-cookie";

const initialData = {
  order_id: "",
  status: "",
};

const TrackShipment = () => {
  const [orderStatus, setOrderStatus] = useState(initialData);

  const formik = useFormik({
    initialValues: {
      tracking_id: "",
    },
    validationSchema: trackShipmentValidation,
    onSubmit: () => {
      handleTrackShipmentDetails();
    },
  });

  const headers = {
    Authorization: `Bearer ${Cookies.get("jwtToken")}`,
    "Content-Type": "application/json",
  };

  const handleTrackShipmentDetails = async () => {
    try {
      const { tracking_id } = formik.values;

      const response = await axios.get(
        `http://localhost:5000/api/gettrackingdetails/${tracking_id}`,
        { headers }
      );

      console.log(response);
      

      if (response?.data?.api_status === 200) {
        toast.success(response?.data?.message, { autoClose: 3000 });
        setOrderStatus({order_id:response?.data?.data?.dataValues?.order_id,status:response?.data?.data?.dataValues?.status})

      } else toast.error(response?.data?.message, { autoClose: 3000 });
    }  catch (error) {
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
              Enter Tracking ID
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
          </div>
        </div>
        <ReusableButton
          size="medium"
          style={{ width: "100%", backgroundColor: "#0E2C53" }}
          className="w-full mt-9 bg-customBlue text-white rounded-md py-2 font-semibold hover:bg-customHoverBlue "
          variant="contained"
          type="submit"
          buttonName="Get status"
        />
      </form>
      {<ToastContainer />}
      {orderStatus && (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "50vw",
              marginTop: "50px",
              backgroundColor: "wheat",
              padding: "10px",
            }}
          >
            <h1 style={{ fontWeight: "bold" }}>
              ORDER ID : <span style={{color:"red",fontWeight:"bold"}} >{orderStatus?.order_id}</span>
            </h1>
            <h1 style={{ fontWeight: "bold" }}>
              STATUS :  <span style={{color:"red",fontWeight:"bold"}} >{orderStatus?.status}</span>
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackShipment;

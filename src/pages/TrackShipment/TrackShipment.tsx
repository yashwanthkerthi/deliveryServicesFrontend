import React, { useState } from "react";
import { trackShipmentValidation } from "../../utils/helpers/validations/Validations";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import TextField from "../../components/TextField/TextField";
import ReusableButton from "../../components/Button/Button";
import { networkUrls } from "../../services/networkUrls";
import { Post } from "../../services/apiServices";

const initialData = {
  orderName: "",
  status: "",
};

const TrackShipment = () => {
  const [orderStatus, setOrderStatus] = useState(initialData);

  const formik = useFormik({
    initialValues: {
      trackingId: "",
    },
    validationSchema: trackShipmentValidation,
    onSubmit: () => {
      handleTrackShipmentDetails();
    },
  });

  const handleTrackShipmentDetails = async () => {
    try {
      const { trackingId } = formik.values;
      const response = await Post(
        networkUrls.addBoxDetails,
        { tracking_id: trackingId },
        true
      );

      if (response?.data?.statusCode === 200) {
        toast.success("succesfully placed order", { autoClose: 3000 });

        // setTimeout(() => {
        //   navigate("/addpickupdate");
        // }, 3000);
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
              id="trackingId"
              name="trackingId"
              placeholder="Enter Tracking Id"
              label="trackingId"
              onChange={formik.handleChange}
              type="text"
              style={{
                // marginBottom: "0.75rem",
                width: "100%",
              }}
              value={formik.values.trackingId}
              error={Boolean(formik.errors.trackingId)}
              errorMessage={
                formik.touched.trackingId && formik.errors.trackingId
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
              ORDER NAME : {orderStatus?.orderName}
            </h1>
            <h1 style={{ fontWeight: "bold" }}>
              STATUS : {orderStatus?.status}
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackShipment;

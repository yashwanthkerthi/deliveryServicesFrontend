// import React, { useState } from "react";
// import { updateStatusValidation } from "../../utils/helpers/validations/Validations";
// import { useFormik } from "formik";
// import { ToastContainer, toast } from "react-toastify";
// import TextField from "../../components/TextField/TextField";
// import ReusableButton from "../../components/Button/Button";
// import { Navigate } from "react-router-dom";

// const AdminDashboard = () => {
//   const [isLogged, setIsLogged] = useState(false);

//   const formik = useFormik({
//     initialValues: {
//       trackingId: "",
//       status:"",
//     },
//     validationSchema: updateStatusValidation,
//     onSubmit: () => {
//       handleSubmitStatusChange();
//     },
//   });

//   const handleSubmitStatusChange = async () => {
//     // const { firstName, lastName, email, password, mobileNumber } =
//     //   formik.values;
//     try {
//       //   const response = await Post(
//       //     networkUrls.signup,
//       //     {
//       //       first_name: firstName,
//       //       last_name: lastName,
//       //       email,
//       //       password,
//       //       mobile: mobileNumber,
//       //       fcm_token: "dummy",
//       //       device_id: "1",
//       //       device_type: "andriod",
//       //       status: true,
//       //     },
//       //     false
//       //   );
//       //   if (response?.data?.statusCode === 200) {
//       //     toast.success("Signup successful", { autoClose: 3000 });
//       //     Cookies.set("refreshToken", response.data.data.refreshToken);
//       //     Cookies.set("acessToken", response.data.data.acessToken);
//       //     localStorage.setItem(
//       //       "userDetails",
//       //       JSON.stringify(response?.data?.data)
//       //     );
//       //     // navigate("/");
//       //   } else toast.error(response?.data?.message, { autoClose: 3000 });
//     } catch (error) {
//       toast.error("Please try again!", { autoClose: 3000 });
//       setIsLogged(false);
//     }
//   };

//   return (
//     <div
//       style={{
//         paddingTop: "10vh",
//         height: "100vh",
//         width: "100vw",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         top: "25%",
//         alignItems: "center",
//       }}
//     >
//       <form
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//         onSubmit={formik.handleSubmit}
//         autoComplete="off"
//       >
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <h1
//             style={{
//               textAlign: "center",
//               fontWeight: "bold",
//               fontSize: "20px",
//             }}
//           >
//             Update order status
//           </h1>
//           <div style={{ display: "flex", flexDirection: "column" }}>
//               <TextField
//                 id="trackingId"
//                 name="trackingId"
//                 placeholder="Enter trackingId"
//                 label="trackingId"
//                 onChange={formik.handleChange}
//                 type="text"
//                 style={{
//                   // marginBottom: "0.75rem",
//                   width: "100%",
//                 }}
//                 value={formik.values.trackingId}
//                 error={Boolean(formik.errors.trackingId)}
//                 errorMessage={
//                   formik.touched.trackingId && formik.errors.trackingId
//                 }
//                 autoComplete="off"
//                 TextFieldVariants="filled"
//               />
//               <TextField
//                 id="status"
//                 name="status"
//                 placeholder="Enter status"
//                 label="status"
//                 onChange={formik.handleChange}
//                 type="text"
//                 style={{
//                   // marginBottom: "0.75rem",
//                   width: "100%",
//                 }}
//                 value={formik.values.status}
//                 error={Boolean(formik.errors.status)}
//                 errorMessage={
//                   formik.touched.status && formik.errors.status
//                 }
//                 autoComplete="off"
//                 TextFieldVariants="filled"
//               />
//           </div>
//         </div>
//         <ReusableButton
//           size="medium"
//           disabled={isLogged}
//           style={{ width: "100%", backgroundColor: "#0E2C53" }}
//           className="w-full mt-9 bg-customBlue text-white rounded-md py-2 font-semibold hover:bg-customHoverBlue "
//           variant="contained"
//           type="submit"
//           buttonName="Next"
//         />
//       </form>
//       {<ToastContainer />}
//     </div>
//   );
// };

// export default AdminDashboard;


import React from "react";
import SwipeableTextMobileStepper from "../../components/Carousal/Carousal";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import ShareLocationOutlinedIcon from "@mui/icons-material/ShareLocationOutlined";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import { Button } from "@mui/material";
import "./index.css";
import logo1 from "../../deliveryImages/logo1.png";
import logo2 from "../../deliveryImages/logo2.png";
import logo3 from "../../deliveryImages/logo3.png";
import logo4 from "../../deliveryImages/logo4.png";
import {  useNavigate } from "react-router-dom";

const images = [
  {
    label: "1",
    imgPath: logo1,
  },
  {
    label: "2",
    imgPath: logo2,
  },
  {
    label: "3",
    imgPath: logo3,
  },
  {
    label: "4",
    imgPath: logo4,
  },
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        paddingTop: "10.5vh",
        height: "300vh",
        backgroundColor: "#E8F0FE",
      }}
    >
      <SwipeableTextMobileStepper images={images} />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div
          style={{
            minWidth: "400px",
            minHeight: "150px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#FFFFFF",
            zIndex: "2",
            marginTop: "-50px",
            marginRight: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
            }}
          >
            <PhoneIphoneOutlinedIcon fontSize="large" />
            <div style={{ textAlign: "left", maxWidth: "75%" }}>
              <h1>Update the status of the delivery box</h1>
              <p>You change change the status from shipped to delivered</p>
            </div>
          </div>
          <Button
            style={{
              width: "100%",
              backgroundColor: "#0E2C53",
              color: "#FFFFFF",
              borderRadius: "0px",
            }}
            onClick={() => navigate("/updateboxstatus")}
            variant="contained"
          >
            Update Status
          </Button>
        </div>
        {/* <div
          style={{
            minWidth: "400px",
            minHeight: "150px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#FFFFFF",
            zIndex: "2",
            marginTop: "-50px",
            marginRight: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
            }}
          >
            <ShareLocationOutlinedIcon fontSize="large" />
            <div style={{ textAlign: "left", maxWidth: "75%" }}>
              <h1>Track Your Shipment</h1>
              <p>Click to know where your parcel has reached</p>
            </div>
          </div>
          <Button
            className="hovered-element"
            style={{
              width: "100%",
              backgroundColor: "#0E2C53",
              color: "#FFFFFF",
              borderRadius: "0px",
            }}
            variant="contained"
            onClick={() => navigate("/trackshipment")}
          >
            Track a Shipment
          </Button>
        </div>
        <div
          style={{
            minWidth: "400px",
            minHeight: "150px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#FFFFFF",
            zIndex: "2",
            marginTop: "-50px",
            marginRight: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "15px",
              alignItems: "center",
            }}
          >
            <ManageSearchOutlinedIcon fontSize="large" />
            <div style={{ textAlign: "left", maxWidth: "75%" }}>
              <h1>Store Locator</h1>
              <p>Click here to find a delivery outlet near you</p>
            </div>
          </div>
          <Button
            style={{
              width: "100%",
              backgroundColor: "#0E2C53",
              color: "#FFFFFF",
              borderRadius: "0px",
            }}
            variant="contained"
          >
            Find Now
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default AdminDashboard;

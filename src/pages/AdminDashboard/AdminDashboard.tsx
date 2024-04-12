
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
      </div>
    </div>
  );
};

export default AdminDashboard;

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

const UserDashboard = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        paddingTop: "15vh",
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
              <h1>Book Your Shipment</h1>
              <p>Request a pickup and we'll be at your door shortly</p>
            </div>
          </div>
          <Button
            style={{
              width: "100%",
              backgroundColor: "#0E2C53",
              color: "#FFFFFF",
              borderRadius: "0px",
            }}
            onClick={() => navigate("/address")}
            variant="contained"
          >
            Book Now
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
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

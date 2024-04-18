import AddressForm from "../../pages/AddressForm/AddressForm";
import AdminDashboard from "../../pages/AdminDashboard/AdminDashboard";
import BoxDetails from "../../pages/BoxDetailsForm/BoxDetails";
import PickupDetailsForm from "../../pages/PickupDateForm/PickupDateForm";
import TrackShipment from "../../pages/TrackShipment/TrackShipment";
import UpdateBoxStatus from "../../pages/UpdateBoxStatus/UpdateBoxStatus";
import UserDashboard from "../../pages/UserDashboard/UserDashboard";

const paths = [
  {
    path: "/userdashboard",
    element: UserDashboard,
  },
  {
    path: "/admindashboard",
    element: AdminDashboard,
  },
  {
    path: "/address",
    element: AddressForm,
  },
  {
    path: "/boxdetails",
    element: BoxDetails,
  },
  {
    path: "/trackshipment",
    element: TrackShipment,
  },
  {
    path: "/addpickupdetails",
    element:PickupDetailsForm ,
  },
  {
    path: "/updateboxstatus",
    element:UpdateBoxStatus ,
  },
];

export default paths;

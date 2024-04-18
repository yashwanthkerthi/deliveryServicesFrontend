import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = Cookies.get("jwtToken");
  // const userRole = Cookies.get("user_role");
  return token !== undefined ?(
    <Outlet />
  ) : (
    <Navigate to="/signin" />
  );
};

export default ProtectedRoute;

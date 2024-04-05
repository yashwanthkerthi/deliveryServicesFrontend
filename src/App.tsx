import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import paths from "./utils/constants/paths";
import Signup from "./pages/Signup/Signup";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Navbar from "./components/Navbar/Navbar";
import Signin from "./pages/Signin/Signin";

interface RouteConfig {
  path: string;
  element: React.ComponentType<any>;
}
const routes: RouteConfig[] = paths;

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        {/* <Route path="/navbar" element={<Navbar />} /> */}
        
        {/* <Route element={<ProtectedRoute />}> */}
          <Route element={<Navbar />}>
            {routes.map(({ path, element: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Route>
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;

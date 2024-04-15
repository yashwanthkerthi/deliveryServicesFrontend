import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Navbar() {
  const navigate = useNavigate()

  const handleLogout = () =>{
    Cookies.remove("jwtToken")
    navigate("/signin")
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar style={{backgroundColor:"#0E2C53",top:"0px",minHeight:"5%",maxHeight:"11%"}} position="fixed" >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Delivery Services 
          </Typography>
          <Typography onClick={handleLogout} style={{marginLeft:"auto",cursor:"pointer"}} variant="h6" noWrap component="div">
            Logout 
          </Typography>
        </Toolbar>
      </AppBar>
      <Outlet/>
    </Box>
  );
}

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit"></IconButton>
        {/* <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          News
        </Typography> */}
        <Link to="/home">
          <Button color="secondary" sx={{ color: "white" }}>
            Home
          </Button>
        </Link>
        <Link to="/Dashboard">
          <Button color="secondary" sx={{ color: "white" }}>
            Dashboard
          </Button>
        </Link>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

import React from "react";
import {AppBar, Box, Container, IconButton, Menu, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Header from "./header.component";

const Layout = ({ children } : { children: React.ReactNode}) => {
  return (
    <React.Fragment>
      <Header />
    </React.Fragment>
  )
}

export default Layout
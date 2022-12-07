import React from "react";
import Header from "./header.component";
import {Container} from "@mui/material";

const Layout = ({ children } : { children: React.ReactNode}) => {
  return (
    <React.Fragment>
      <Header />
      <Container
        maxWidth="md"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 80px)'
        }}
      >
        {children}
      </Container>
    </React.Fragment>
  )
}

export default Layout
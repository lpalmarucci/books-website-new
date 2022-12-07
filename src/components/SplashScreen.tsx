import React from 'react'
import {CircularProgress, Container} from "@mui/material";

const SplashScreen = () => {
  return (
    <Container
      sx={{
        width: "100vw",
        height: "100vh",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <CircularProgress color="secondary" size={180}/>
    </Container>
  )
}

export default SplashScreen;
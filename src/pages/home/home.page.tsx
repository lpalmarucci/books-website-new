import React from "react";
import withLayout from "../../hoc/withLayout";
import {Box, Grow, Typography, Zoom} from "@mui/material";
import SplashScreen from "../../components/SplashScreen";

const HomePage = () => {
    return <Box textAlign="center">
        <Zoom in={true} timeout={400}>
            <Typography variant="h1" sx={{ fontSize: { xs: 120, md: 200 }}} fontWeight={700}>Welcome</Typography>
        </Zoom>
        <Grow in={true} timeout={1200} >
            <Typography variant="h1" sx={{ fontSize: { xs: 40, md: 80 }}} fontWeight={700}>Make the first search</Typography>
        </Grow>
    </Box>
}

export default withLayout(HomePage)
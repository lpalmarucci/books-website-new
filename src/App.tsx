import React from 'react'
import {createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import {renderRoutes} from "./routes";
import {BrowserRouter, Routes} from "react-router-dom";

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
      () =>
          createTheme({

          }),
      [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          {renderRoutes()}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

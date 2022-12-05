import React from 'react'
import {createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import {renderRoutes} from "./routes";
import {BrowserRouter, Routes} from "react-router-dom";

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
      () =>
          createTheme({
            typography: {
              fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
              ].join(','),
            },
            palette: {
              primary: {
                main: '#242424',
              },
              background: {
                default: '#242424'
              },
              text: {
                primary: '#FFF'
              }
            }
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

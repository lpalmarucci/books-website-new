import React from "react";
import Header from "./header.component";

const Layout = ({ children } : { children: React.ReactNode}) => {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  )
}

export default Layout
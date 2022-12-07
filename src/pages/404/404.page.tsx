import React from 'react'
import {Box, Container, Typography} from "@mui/material";
import withLayout from '../../hoc/withLayout'

const PageNotFound = () => {
  return (
    <React.Fragment>
      <Typography
        variant="h1"
        fontWeight={700}
        sx={{ fontSize: { md: 220, xs: 150 } }}
      >404</Typography>
      <Typography
        variant="h3"
        fontWeight={700}
        whiteSpace="nowrap"
        sx={{ fontSize: { md: 110, xs: 35 }}}
      >Pagina non trovata</Typography>
    </React.Fragment>
  )
}

export default withLayout(PageNotFound);
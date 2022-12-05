import React from 'react'
import {Box, Container, Typography} from "@mui/material";
import withLayout from '../../hoc/withLayout'

const PageNotFound = () => {
  return (
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
      <Typography variant="h1" fontWeight={700} fontSize={220}>404</Typography>
      <Typography variant="h3" fontWeight={700} fontSize={100}>Pagina non trovata</Typography>
    </Container>
  )
}

export default withLayout(PageNotFound);
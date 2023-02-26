import React from 'react'
import Box from '@mui/material/Box'
import AppBar from '../../../components/appBar'
import Container from '@mui/material/Container'

const Budget = () => (
  <Box>
    <AppBar />
    <Container
      maxWidth="lg"
      sx={{
        pt: 3,
      }}
    >
      <div>Budget page</div>
    </Container>
  </Box>
)

export default Budget

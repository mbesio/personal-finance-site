import React from 'react'
import Box from '@mui/material/Box'
import AppBar from '../../../components/appBar'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import MortgageCalculator from '../../../components/calculators/mortgageCalc'
import MortgageResults from '../../../components/calculators/calculatorResults'

const Ratamutuo = () => (
  <Box>
    <AppBar />
    <Container
      maxWidth="lg"
      sx={{
        pt: 3,
      }}
    >
      {/* should have a grid here so they are either next to each other or on top of each other  */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <MortgageCalculator />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <MortgageResults />
        </Grid>
      </Grid>
    </Container>
  </Box>
)

export default Ratamutuo

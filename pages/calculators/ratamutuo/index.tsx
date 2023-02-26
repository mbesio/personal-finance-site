import React, { useState } from 'react'
import Box from '@mui/material/Box'
import AppBar from '../../../components/appBar'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import MortgageCalculator from '../../../components/calculators/mortgageCalc'
import MortgageResults from '../../../components/calculators/calculatorResults'

const Ratamutuo = () => {
  const [amount, setAmount] = useState(200000)
  const [rate, setRate] = useState(2.5)
  const [years, setYears] = useState(30)

  const [outputAmount, setOutputAmount] = useState(null)
  const [outputRate, setOutputRate] = useState(null)
  const [outputYears, setOutputYears] = useState(null)

  const handleChangeAmount = (e) => setAmount(e.target.value)
  const handleChangeRate = (e) => setRate(e.target.value)
  const handleChangeYears = (e) => setYears(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    setOutputAmount(amount)
    setOutputRate(rate)
    setOutputYears(years)
  }

  return (
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
            <MortgageCalculator
              amount={amount}
              rate={rate}
              years={years}
              handleChangeAmount={handleChangeAmount}
              handleChangeRate={handleChangeRate}
              handleChangeYears={handleChangeYears}
              handleSubmit={handleSubmit}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <MortgageResults
              outputAmount={outputAmount}
              outputRate={outputRate}
              outputYears={outputYears}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Ratamutuo

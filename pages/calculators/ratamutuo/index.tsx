import React, { useState } from 'react'
import Box from '@mui/material/Box'
import AppBar from '../../../components/appBar'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import MortgageCalculator from '../../../components/calculators/mortgageCalc'
import MortgageResults from '../../../components/calculators/calculatorResults'
import {
  monthlyInstallment,
  totalCost,
  totalInterest,
} from '../../../lib/mortgageCalc'
const Ratamutuo = () => {
  const [amount, setAmount] = useState(200000)
  const [rate, setRate] = useState(2.5)
  const [years, setYears] = useState(30)

  const [outputAmount, setOutputAmount] = useState(null)
  const [outputRate, setOutputRate] = useState(null)
  const [outputYears, setOutputYears] = useState(null)

  const [outputInstallment, setOutputInstallment] = useState(null)
  const [outputTotalCost, setOutputTotalCost] = useState(null)
  const [outputTotalInterest, setOutputTotalInterest] = useState(null)

  const handleChangeAmount = (e) => setAmount(e.target.value)
  const handleChangeRate = (e) => setRate(e.target.value)
  const handleChangeYears = (e) => setYears(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    setOutputAmount(amount)
    setOutputRate(rate)
    setOutputYears(years)
    const installment = monthlyInstallment(amount, rate, years)
    setOutputInstallment(installment)
    setOutputTotalCost(totalCost(installment, years))
    setOutputTotalInterest(totalInterest(installment, years, amount))
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
              outputInstallment={outputInstallment}
              outputTotalCost={outputTotalCost}
              outputTotalInterest={outputTotalInterest}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Ratamutuo

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

  const [isAmountValid, setIsAmountValid] = useState(true)
  const [isRateValid, setIsRateValid] = useState(true)
  const [isYearsValid, setIsYearsValid] = useState(true)

  const [outputAmount, setOutputAmount] = useState(200000)
  const [outputRate, setOutputRate] = useState(2.5)
  const [outputYears, setOutputYears] = useState(30)

  const [outputInstallment, setOutputInstallment] = useState('790.24')
  const [outputTotalCost, setOutputTotalCost] = useState('284486.4')
  const [outputTotalInterest, setOutputTotalInterest] = useState('84486.4')

  const handleChangeAmount = (e) => {
    const amountInput = e.target.value
    if (amountInput < 0 || amountInput > 100000000) {
      setIsAmountValid(false)
    } else {
      setIsAmountValid(true)
    }
    setAmount(amountInput)
  }

  const handleChangeRate = (e) => {
    const rateInput = e.target.value
    if (rateInput < 0 || rateInput > 100) {
      setIsRateValid(false)
    } else {
      setIsRateValid(true)
    }
    setRate(rateInput)
  }

  const handleChangeYears = (e) => {
    const yearsInput = e.target.value
    if (yearsInput < 0 || yearsInput > 50) {
      setIsYearsValid(false)
    } else {
      setIsYearsValid(true)
    }
    setYears(yearsInput)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isAmountValid || !isRateValid || !isYearsValid) {
      return
    }
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
              isAmountValid={isAmountValid}
              isRateValid={isRateValid}
              isYearsValid={isYearsValid}
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

import React, { useState } from 'react'
import Box from '@mui/material/Box'
import AppBar from '../../../components/appBar'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import CompoundCalculator from '../../../components/calculators/compoundCalc'
import MortgageCalculator from '../../../components/calculators/mortgageCalc'
import MortgageResults from '../../../components/calculators/mortgageResults'
import {
  futureValueCalc,
  principalInvestedCalc,
  interestEarnedCalc,
} from '../../../lib/compoundCalc'
const Compound = () => {
  const [initialDeposit, setInitialDeposit] = useState(100)
  const [rate, setRate] = useState(5)
  const [years, setYears] = useState(30)
  const [compoundFrequency, setCompoundFrequency] = useState('Mensile')
  const [monthlyContribution, setMonthlyContribution] = useState(50)

  const [isInitialDepositValid, setIsInitialDepositValid] = useState(true)
  const [isRateValid, setIsRateValid] = useState(true)
  const [isYearsValid, setIsYearsValid] = useState(true)
  const [isMonthlyContributionValid, setIsMonthlyContributionValid] =
    useState(true)

  const [outputInitialDeposit, setOutputInitialDeposit] = useState(100)
  const [outputRate, setOutputRate] = useState(5)
  const [outputYears, setOutputYears] = useState(30)
  const [outputCompoundFrequency, setOutputCompoundFrequency] =
    useState('Monthly')
  const [outputMonthlyContribution, setOutputMonthlyContribution] = useState(50)

  const [outputFutureValue, setOutputFutureValue] = useState('83672.64')
  const [outputInterestEarned, setOutputInterestEarned] = useState('47572.64')
  const [outputPrincipalInvested, setOutputPrincipalInvested] =
    useState('36100.00')

  const handleChangeInitialDeposit = (e) => {
    const initialDepositInput = e.target.value
    if (initialDepositInput < 0 || initialDepositInput > 10000000) {
      setIsInitialDepositValid(false)
    } else {
      setIsInitialDepositValid(true)
    }
    setInitialDeposit(initialDepositInput)
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

  const handleChangeCompoundFrequency = (e) => {
    const compoundFrequencyInput = e.target.value
    // no validation needed - only three inputs from a dropdown
    setCompoundFrequency(compoundFrequencyInput)
  }

  const handleChangeMonthlyContribution = (e) => {
    const monthlyContributionInput = e.target.value
    if (monthlyContributionInput < 0 || monthlyContributionInput > 1000000) {
      setIsMonthlyContributionValid(false)
    } else {
      setIsMonthlyContributionValid(true)
    }
    setMonthlyContribution(monthlyContributionInput)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      !isInitialDepositValid ||
      !isRateValid ||
      !isYearsValid ||
      !isMonthlyContributionValid
    ) {
      return
    }
    setOutputInitialDeposit(initialDeposit)
    setOutputRate(rate)
    setOutputYears(years)
    setOutputCompoundFrequency(compoundFrequency)
    setOutputMonthlyContribution(monthlyContribution)
    const futureValue = futureValueCalc(
      initialDeposit,
      rate,
      years,
      compoundFrequency,
      monthlyContribution
    )
    const principalInvested = principalInvestedCalc(
      initialDeposit,
      years,
      monthlyContribution
    )
    const interestEarned = interestEarnedCalc(
      initialDeposit,
      rate,
      years,
      compoundFrequency,
      monthlyContribution
    )
    setOutputFutureValue(futureValue)
    setOutputInterestEarned(interestEarned)
    setOutputPrincipalInvested(principalInvested)
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
            <CompoundCalculator
              initialDeposit={initialDeposit}
              rate={rate}
              years={years}
              compoundFrequency={compoundFrequency}
              monthlyContribution={monthlyContribution}
              handleChangeInitialDeposit={handleChangeInitialDeposit}
              handleChangeRate={handleChangeRate}
              handleChangeYears={handleChangeYears}
              handleChangeCompoundFrequency={handleChangeCompoundFrequency}
              handleChangeMonthlyContribution={handleChangeMonthlyContribution}
              handleSubmit={handleSubmit}
              isInitialDepositValid={isInitialDepositValid}
              isRateValid={isRateValid}
              isYearsValid={isYearsValid}
              isMonthlyContributionValid={isMonthlyContributionValid}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            {/* <CompoundResults
              outputInitialDeposit={outputInitialDeposit}
              outputRate={outputRate}
              outputYears={outputYears}
              outputCompoundFrequency={outputCompoundFrequency}
              outputMonthlyContribution={outputMonthlyContribution}
              outputFutureValue={outputFutureValue}
              outputInterestEarned={outputInterestEarned}
              outputPrincipalInvested={outputPrincipalInvested}
            /> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Compound

import React from 'react'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'

const frequenzeInteresseComposto = [
  {
    value: 'Mensile',
    label: 'Mensile',
  },
  {
    value: 'Trimestrale',
    label: 'Trimestrale',
  },
  {
    value: 'Semestrale',
    label: 'Semestrale',
  },
  {
    value: 'Annuale',
    label: 'Annuale',
  },
]

const CompoundCalculator = ({
  initialDeposit,
  rate,
  years,
  compoundFrequency,
  monthlyContribution,
  handleChangeInitialDeposit,
  handleChangeRate,
  handleChangeYears,
  handleChangeCompoundFrequency,
  handleChangeMonthlyContribution,
  handleSubmit,
  isInitialDepositValid,
  isRateValid,
  isYearsValid,
  isMonthlyContributionValid,
}) => {
  return (
    <Box>
      <Typography
        gutterBottom
        variant="h5"
        component="h2"
        color="primary.dark"
        align="center"
      >
        Calcola la crescita del tuo capitale
      </Typography>
      <form>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <FormControl fullWidth sx={{ m: 1, width: '25ch' }}>
            <InputLabel htmlFor="amount">Captiale iniziale</InputLabel>
            <OutlinedInput
              error={!isInitialDepositValid}
              id="amount"
              startAdornment={
                <InputAdornment position="start">€</InputAdornment>
              }
              label="Captiale iniziale"
              type="number"
              value={initialDeposit}
              onChange={(e) => handleChangeInitialDeposit(e)}
              onKeyPress={(e) => {
                e.key === 'Enter' && e.preventDefault()
              }}
              inputProps={{ step: '10000', lang: 'en-US' }}
            />
            <FormHelperText
              id="component-error-text"
              sx={{
                color: 'red',
                visibility: !isInitialDepositValid ? 'visible' : 'hidden',
              }}
            >
              Max € 10,000,000
            </FormHelperText>
          </FormControl>
          <FormControl fullWidth sx={{ m: 1, width: '25ch' }}>
            <InputLabel htmlFor="rate">Tasso d'interesse</InputLabel>
            <OutlinedInput
              error={!isRateValid}
              id="rate"
              endAdornment={<InputAdornment position="end">%</InputAdornment>}
              label="Tasso d'interesse"
              type="number"
              value={rate}
              onChange={(e) => handleChangeRate(e)}
              onKeyPress={(e) => {
                e.key === 'Enter' && e.preventDefault()
              }}
              inputProps={{ step: '0.1' }}
            />

            <FormHelperText
              id="component-error-text"
              sx={{
                color: 'red',
                visibility: !isRateValid ? 'visible' : 'hidden',
              }}
            >
              Percentuale invalida
            </FormHelperText>
          </FormControl>
          <FormControl fullWidth sx={{ m: 1, width: '25ch' }}>
            <InputLabel htmlFor="years">Durata</InputLabel>
            <OutlinedInput
              error={!isYearsValid}
              id="years"
              endAdornment={
                <InputAdornment position="end">anni</InputAdornment>
              }
              label="Durata"
              type="number"
              value={years}
              onChange={(e) => handleChangeYears(e)}
              onKeyPress={(e) => {
                e.key === 'Enter' && e.preventDefault()
              }}
              inputProps={{ step: '5' }}
            />
            <FormHelperText
              id="component-error-text"
              sx={{
                color: 'red',
                visibility: !isYearsValid ? 'visible' : 'hidden',
              }}
            >
              Max 50 anni
            </FormHelperText>
          </FormControl>
          <FormControl fullWidth sx={{ m: 1, width: '25ch' }}>
            <TextField
              id="interesse-composto"
              select
              label="Frequenza interesse composto"
              defaultValue="Mensile"
              onChange={(e) => handleChangeCompoundFrequency(e)}
            >
              {frequenzeInteresseComposto.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <FormHelperText
              id="component-error-text"
              sx={{
                color: 'red',
                visibility: 'hidden',
              }}
            >
              Placeholder
            </FormHelperText>
          </FormControl>
          <FormControl fullWidth sx={{ m: 1, width: '25ch' }}>
            <InputLabel htmlFor="amount">Contributo mensile</InputLabel>
            <OutlinedInput
              error={!isMonthlyContributionValid}
              id="contributo-mensile"
              startAdornment={
                <InputAdornment position="start">€</InputAdornment>
              }
              label="Contributo mensile"
              type="number"
              value={monthlyContribution}
              onChange={(e) => handleChangeMonthlyContribution(e)}
              onKeyPress={(e) => {
                e.key === 'Enter' && e.preventDefault()
              }}
              inputProps={{ step: '100', lang: 'en-US' }}
            />
            <FormHelperText
              id="component-error-text"
              sx={{
                color: 'red',
                visibility: !isMonthlyContributionValid ? 'visible' : 'hidden',
              }}
            >
              Max € 1,000,000
            </FormHelperText>
          </FormControl>
          <Button
            fullWidth
            sx={{ m: 1, width: '25ch' }}
            variant="contained"
            size="large"
            onClick={(e) => handleSubmit(e)}
          >
            Calcola
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default CompoundCalculator

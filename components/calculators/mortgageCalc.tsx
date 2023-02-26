import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import Button from '@mui/material/Button'

const MortgageCalculator = ({
  amount,
  rate,
  years,
  handleChangeAmount,
  handleChangeRate,
  handleChangeYears,
  handleSubmit,
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
        Calcola la rata del tuo mutuo
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
            <InputLabel htmlFor="amount">Amount</InputLabel>
            <OutlinedInput
              id="amount"
              startAdornment={
                <InputAdornment position="start">€</InputAdornment>
              }
              label="Amount"
              type="number"
              value={amount}
              onChange={(e) => handleChangeAmount(e)}
              onKeyPress={(e) => {
                e.key === 'Enter' && e.preventDefault()
              }}
              inputProps={{ step: '10000', lang: 'en-US' }}
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1, width: '25ch' }}>
            <InputLabel htmlFor="rate">Tasso d'interesse</InputLabel>
            <OutlinedInput
              id="rate"
              endAdornment={<InputAdornment position="end">%</InputAdornment>}
              label="Rate"
              type="number"
              value={rate}
              onChange={(e) => handleChangeRate(e)}
              onKeyPress={(e) => {
                e.key === 'Enter' && e.preventDefault()
              }}
              inputProps={{ step: '0.1' }}
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1, width: '25ch' }}>
            <InputLabel htmlFor="years">Durata</InputLabel>
            <OutlinedInput
              id="years"
              endAdornment={
                <InputAdornment position="end">anni</InputAdornment>
              }
              label="Years"
              type="number"
              value={years}
              onChange={(e) => handleChangeYears(e)}
              onKeyPress={(e) => {
                e.key === 'Enter' && e.preventDefault()
              }}
              inputProps={{ step: '5' }}
            />
          </FormControl>
          <Button
            fullWidth
            sx={{ m: 1, width: '25ch' }}
            variant="contained"
            size="large"
            onClick={(e) => handleSubmit(e)}
          >
            Calcola Rata
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default MortgageCalculator

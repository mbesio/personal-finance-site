import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import PercentIcon from '@mui/icons-material/Percent'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

const MortgageResults = ({ outputAmount, outputRate, outputYears }) => {
  return (
    <Box>
      <Typography
        gutterBottom
        variant="h5"
        component="h2"
        color="primary.dark"
        align="left"
      >
        Riepilogo
      </Typography>

      <Box sx={{ display: 'flex' }}>
        <Box>
          <Typography
            variant="h4"
            noWrap
            color="primary.dark"
            fontSize="1.25em"
            sx={{
              mr: 3,
              mb: 2,
            }}
          >
            Parametri
          </Typography>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <AccountBalanceIcon
                sx={{ color: 'primary.dark', fontSize: '30px', mr: 2 }}
              />
              <Typography
                noWrap
                sx={{
                  mr: 3,
                }}
              >
                {outputAmount ? `€ ${outputAmount}` : ''}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PercentIcon
                sx={{ color: 'primary.dark', fontSize: '30px', mr: 2 }}
              />
              <Typography
                noWrap
                sx={{
                  mr: 3,
                }}
              >
                {outputRate ? `${outputRate} %` : ''}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <CalendarMonthIcon
                sx={{ color: 'primary.dark', fontSize: '30px', mr: 2 }}
              />
              <Typography
                noWrap
                sx={{
                  mr: 3,
                }}
              >
                {outputYears ? `${outputYears} anni` : ''}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography
            color="primary.dark"
            variant="h4"
            fontSize="1.25em"
            noWrap
            sx={{
              mr: 3,
              mb: 2,
            }}
          >
            Risultati
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default MortgageResults

import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import PercentIcon from '@mui/icons-material/Percent'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

const MortgageResults = ({
  outputAmount,
  outputRate,
  outputYears,
  outputInstallment,
  outputTotalCost,
  outputTotalInterest,
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
        Riepilogo
      </Typography>
      <Box
        sx={{
          display: 'flex',

          justifyContent: 'space-around',
        }}
      >
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
                {outputAmount
                  ? `€ ${new Intl.NumberFormat('de-DE').format(outputAmount)}`
                  : ''}
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
                {outputRate
                  ? `${new Intl.NumberFormat('de-DE').format(outputRate)} %`
                  : ''}
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
        <Box bgcolor="" m="2">
          <Box>
            <Typography
              color="primary.dark"
              variant="h4"
              fontSize="1.25em"
              align="center"
              noWrap
              sx={{
                mr: 3,
                mb: 2,
              }}
            >
              Risultati
            </Typography>
          </Box>
          <Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mb: 2,
              }}
            >
              <Typography
                noWrap
                sx={{
                  mr: 3,
                }}
              >
                {outputInstallment ? 'Rata mensile' : ''}
              </Typography>
              <Typography
                fontSize="1.5em"
                color="primary.dark"
                noWrap
                sx={{
                  mr: 3,
                }}
              >
                {outputInstallment
                  ? `€ ${new Intl.NumberFormat('de-DE').format(
                      outputInstallment
                    )}`
                  : ''}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mb: 2,
              }}
            >
              <Typography
                noWrap
                sx={{
                  mr: 3,
                }}
              >
                {outputInstallment ? 'Totale pagamento capitale' : ''}
              </Typography>
              <Typography
                fontSize="1.5em"
                color="primary.dark"
                noWrap
                sx={{
                  mr: 3,
                }}
              >
                {outputTotalCost
                  ? `€ ${new Intl.NumberFormat('de-DE').format(
                      outputTotalCost
                    )}`
                  : ''}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mb: 2,
              }}
            >
              <Typography
                noWrap
                sx={{
                  mr: 3,
                }}
              >
                {outputInstallment ? 'Totale pagamento interessi' : ''}
              </Typography>
              <Typography
                fontSize="1.5em"
                color="primary.dark"
                noWrap
                sx={{
                  mr: 3,
                }}
              >
                {outputTotalInterest
                  ? `€ ${new Intl.NumberFormat('de-DE').format(
                      outputTotalInterest
                    )}`
                  : ''}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default MortgageResults

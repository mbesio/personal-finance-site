import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import EuroIcon from '@mui/icons-material/Euro'
import PercentIcon from '@mui/icons-material/Percent'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import RepeatIcon from '@mui/icons-material/Repeat'
import EventRepeatIcon from '@mui/icons-material/EventRepeat'

const CompoundResults = ({
  outputInitialDeposit,
  outputRate,
  outputYears,
  outputCompoundFrequency,
  outputMonthlyContribution,
  outputFutureValue,
  outputInterestEarned,
  outputPrincipalInvested,
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
              <EuroIcon
                sx={{ color: 'primary.dark', fontSize: '30px', mr: 2 }}
              />
              <Typography
                noWrap
                sx={{
                  mr: 3,
                }}
              >
                {outputInitialDeposit
                  ? `€ ${new Intl.NumberFormat('de-DE').format(
                      outputInitialDeposit
                    )}`
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
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <RepeatIcon
                sx={{ color: 'primary.dark', fontSize: '30px', mr: 2 }}
              />
              <Typography
                noWrap
                sx={{
                  mr: 3,
                }}
              >
                {outputCompoundFrequency
                  ? `Frequenza interesse: ${outputCompoundFrequency}`
                  : ''}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <EventRepeatIcon
                sx={{ color: 'primary.dark', fontSize: '30px', mr: 2 }}
              />
              <Typography
                noWrap
                sx={{
                  mr: 3,
                }}
              >
                {outputMonthlyContribution
                  ? `€ ${new Intl.NumberFormat('de-DE').format(
                      outputMonthlyContribution
                    )}`
                  : ''}
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
                Valore capitale
              </Typography>
              <Typography
                fontSize="1.5em"
                color="primary.dark"
                noWrap
                sx={{
                  mr: 3,
                }}
              >
                €{' '}
                {outputFutureValue
                  ? `${new Intl.NumberFormat('de-DE').format(
                      outputFutureValue
                    )}`
                  : '0'}
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
                Quota interessi
              </Typography>
              <Typography
                fontSize="1.5em"
                color="primary.dark"
                noWrap
                sx={{
                  mr: 3,
                }}
              >
                €{' '}
                {outputInterestEarned
                  ? `${new Intl.NumberFormat('de-DE').format(
                      outputInterestEarned
                    )}`
                  : '0'}
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
                Quota contribuzione
              </Typography>
              <Typography
                fontSize="1.5em"
                color="primary.dark"
                noWrap
                sx={{
                  mr: 3,
                }}
              >
                €{' '}
                {outputPrincipalInvested
                  ? `${new Intl.NumberFormat('de-DE').format(
                      outputPrincipalInvested
                    )}`
                  : '0'}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default CompoundResults

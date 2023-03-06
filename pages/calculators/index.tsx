import React from 'react'
import Box from '@mui/material/Box'
import AppBar from '../../components/appBar'
import CalculatorCard from '../../components/calculators/calculatorCard'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Home from '../../components/icons/home'
import Budget from '../../components/icons/budget'
import Percent from '../../components/icons/percent'

const AllCalculators = () => {
  const calculators = [
    {
      name: 'Calcola rata mutuo',
      description: 'Calcolatore per determinare la tua rata del mutuo',
      path: '/calculators/ratamutuo',
      icon: <Home />,
    },
    {
      name: 'Calcola budget',
      description:
        'Calcolatore per determinare il quanto stai spendendo e devo puoi essere più efficiente',
      path: '/calculators/budget',
      icon: <Budget />,
    },
    {
      name: 'Calcola interesse composto',
      description:
        "Calcolatore per determinare quanto cresce il tuo patrimonio grazie all'interesse composto",
      path: '/calculators/composto',
      icon: <Percent />,
    },
  ]

  return (
    <Box>
      <AppBar />
      <Container
        maxWidth="lg"
        sx={{
          pt: 3,
        }}
      >
        <Grid container spacing={3}>
          {calculators.map(({ name, description, path, icon }) => (
            <Grid item xs={12} sm={6} md={6} key={name}>
              <CalculatorCard
                name={name}
                description={description}
                path={path}
                children={icon}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default AllCalculators

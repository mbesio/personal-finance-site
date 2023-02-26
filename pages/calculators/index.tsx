import React from 'react'
import Box from '@mui/material/Box'
import AppBar from '../../components/appBar'
import CalculatorCard from '../../components/calculators/calculatorCard'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Home from '../../components/icons/home'

const AllCalculators = () => {
  const calculators = [
    {
      name: 'Calcola rata mutuo',
      description: 'Calcolatore per determinare la tua rata del mutuo',
      path: '/calculators/calcolaratamutuo',
      icon: <Home />,
    },
    {
      name: 'Calcola budget',
      description:
        "Calcolatore per determinare il quanto stai spendendo e devo puoi essere piu' efficiente",
      path: '/calculators/calcolabudget',
      icon: <Home />,
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
        {/* // this will eventually be an array over the CalculatorCard Component with all the possible calculators There will need to be a Grid here too like in the featured Articles Component*/}
        <Grid container spacing={3}>
          {calculators.map(({ name, description, path, icon }) => (
            <Grid item xs={12} sm={6} md={6} key={name}>
              {/* <CalculatorCard children={<Home />} /> */}
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

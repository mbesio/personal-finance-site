import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import SavingsIcon from '@mui/icons-material/Savings'

const pages = ['Articoli', 'Strumenti']

const ResponsiveAppBar = () => {
  const handleNavBarClick = (page) => {
    // Will have to redirect to the Articoli or Strumenti page
    console.log(`${page} has been clicked`)
  }

  const handleIconClick = () => {
    console.log(
      'the Icon was clicked so the user should be sent back to the home page'
    )
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: {
                xs: 'none',
                sm: 'block',
              },
            }}
          >
            <IconButton onClick={handleIconClick} sx={{ color: '#3f51b5' }}>
              <SavingsIcon
                sx={{
                  mr: 1,
                }}
              />
              <Typography
                variant="h4"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  flexGrow: 1,
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
              >
                FINANZA PERSONALE
              </Typography>
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleNavBarClick(page)}
                sx={{ mr: 1, my: 2, color: '#3f51b5', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar

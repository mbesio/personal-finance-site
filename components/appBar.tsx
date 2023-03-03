import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import SavingsIcon from '@mui/icons-material/Savings'
import Link from 'next/link'

const pages = [
  { name: 'Articoli', path: '/posts' },
  { name: 'Strumenti', path: '/calculators' },
]

const ResponsiveAppBar = () => {
  return (
    <AppBar
      color="default"
      sx={{
        position: {
          xs: 'sticky',
          sm: 'static',
        },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box>
            <Link
              href="/"
              style={{
                textDecoration: 'none',
              }}
            >
              <IconButton sx={{ color: 'primary.dark' }}>
                <SavingsIcon
                  sx={{
                    mr: 1,
                  }}
                />
                <Typography
                  variant="h4"
                  noWrap
                  sx={{
                    mr: 2,
                    flexGrow: 1,
                    fontWeight: 500,
                    textDecoration: 'none',
                    display: {
                      xs: 'none',
                      sm: 'block',
                    },
                  }}
                >
                  FINANZA PERSONALE
                </Typography>
              </IconButton>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            {pages.map(({ name, path }) => (
              <Link
                key={name}
                href={path}
                style={{
                  textDecoration: 'none',
                }}
              >
                <Typography
                  variant="button"
                  sx={{ mr: 1, my: 2, color: 'primary.dark', display: 'block' }}
                >
                  {name}
                </Typography>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar

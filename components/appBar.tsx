import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import SavingsIcon from '@mui/icons-material/Savings'
import Link from 'next/link'

const pages = ['Articoli', 'Strumenti']

const ResponsiveAppBar = () => {
  return (
    <AppBar color="default" position="static">
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
                  }}
                >
                  FINANZA PERSONALE
                </Typography>
              </IconButton>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            {pages.map((page) => (
              <Link
                key={page}
                href="/posts"
                style={{
                  textDecoration: 'none',
                }}
              >
                <Typography
                  variant="button"
                  sx={{ mr: 1, my: 2, color: 'primary.dark', display: 'block' }}
                >
                  {page}
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

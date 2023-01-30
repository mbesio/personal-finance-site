import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../theme'

export default function App({ Component, pageProps }) {
  console.log('theme that we hace access to', theme)
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

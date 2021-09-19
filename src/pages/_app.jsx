import React from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from '../../theme'
import Nav from '../components/nav'

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App

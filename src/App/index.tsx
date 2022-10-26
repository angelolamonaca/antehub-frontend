import AppBarTop from './AppBarTop'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Wallets from './pages/Core/Wallets'
import Transactions from './pages/Core/Transactions'
import NoPage from './pages/NoPage'
import WebFont from 'webfontloader'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Auth from './pages/Auth'
import Login from './pages/Auth/Login'
import { Box } from '@mui/material'

WebFont.load({
  google: {
    families: ['DM Mono']
  }
})

const theme = createTheme({
  palette: {
    neutral: {
      main: '#ffffff',
      contrastText: '#fff'
    }
  }
})

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary']
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary']
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true
  }
}

export const Index = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppBarTop />
        <Box sx={{ margin: 3 }}>
          <Routes>
            <Route path='/auth/'>
              <Route index element={<Auth />} />
              <Route path='login' element={<Login />} />
              <Route path='*' element={<NoPage />} />
            </Route>
            <Route path='/'>
              <Route index element={<Home />} />
              <Route path='wallets' element={<Wallets />} />
              <Route path='transactions' element={<Transactions />} />
              <Route path='*' element={<NoPage />} />
            </Route>
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default Index

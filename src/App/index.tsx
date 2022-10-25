import AppBarTop from './AppBarTop'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Counter } from '../redux/features/counter/Counter'
import Home from './pages/Home'
import Wallets from './pages/Wallets'
import Transactions from './pages/Transactions'
import NoPage from './pages/NoPage'
import WebFont from 'webfontloader'
import { createTheme, ThemeProvider } from '@mui/material/styles'

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
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='wallets' element={<Wallets />} />
            <Route path='transactions' element={<Transactions />} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Counter />
    </ThemeProvider>
  )
}

export default Index

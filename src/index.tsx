import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.scss'
import Index from './App'
import store from './redux/store'
import { BrowserRouter } from 'react-router-dom'

import { createTheme, ThemeProvider } from '@mui/material/styles'

const root = createRoot(document.getElementById('root') as HTMLElement)

const theme = createTheme({
  palette: {
    neutral: {
      main: '#ffffff',
      contrastText: '#fff'
    },
    login: {
      main: '#e3761b',
      contrastText: '#fff'
    }
  }
})

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary']
    login: Palette['primary']
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary']
    login?: PaletteOptions['primary']
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true
    login: true
  }
}

root.render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Index />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>
)

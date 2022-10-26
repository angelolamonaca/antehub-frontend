import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.scss'
import Index from './App'
import store from './redux/store'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <Provider store={store}>
      <Index />
    </Provider>
  </StrictMode>
)

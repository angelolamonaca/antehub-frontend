import AppBarTop from './AppBarTop'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Counter } from '../redux/features/counter/Counter'
import Home from './pages/Home'
import Wallets from './pages/Wallets'
import Transactions from './pages/Transactions'
import NoPage from './pages/NoPage'

export const Index = (): JSX.Element => {
  return (
    <div>
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
    </div>
  )
}

export default Index

import AppBarTop from './AppBarTop'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Wallets from './pages/Core/Wallets'
import Transactions from './pages/Core/Transactions'
import NoPage from './pages/NoPage'
import WebFont from 'webfontloader'
import Auth from './pages/Auth'
import Login from './pages/Auth/Login'
import { Box } from '@mui/material'
import { Fragment, useEffect } from 'react'
import { useAppDispatch } from '../redux/hooks'
import {
  fetchMetaMaskAccounts,
  fetchNetworkIfNotFetchedAlready
} from '../redux/slices/metaMaskSlice'
import Logout from './pages/Auth/Logout'

WebFont.load({
  google: {
    families: ['DM Mono']
  }
})

export const App = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const ethereum = window.ethereum

  useEffect(() => {
    dispatch(fetchNetworkIfNotFetchedAlready())

    ethereum?.on('accountsChanged', (accounts: [string?]) => {
      console.log('Accounts changed', accounts)
      dispatch(fetchMetaMaskAccounts())
    })

    ethereum?.on('chainChanged', (chainId: string) => {
      console.log('Chain changed', chainId)
      window.location.reload()
    })
  }, [])

  return (
    <Fragment>
      <AppBarTop />
      <Box sx={{ margin: 3 }}>
        <Routes>
          <Route path='/auth/'>
            <Route index element={<Auth />} />
            <Route path='login' element={<Login />} />
            <Route path='logout' element={<Logout />} />
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
    </Fragment>
  )
}

export default App

import dynamicLogo from '../../../assets/metamask-logo/dynamic-logo'
import { Box, Button, Typography } from '@mui/material'
import { Fragment } from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
// eslint-disable-next-line max-len
import {
  fetchMetaMaskAccounts,
  selectStatus
} from '../../../redux/slices/metaMaskSlice'
import { MetaMaskStatus } from '../../../utils/MetaMask'

const Login = () => {
  const status = useAppSelector(selectStatus)

  const dispatch = useAppDispatch()

  return (
    <Fragment>
      <Typography sx={{ fontFamily: 'DM Mono' }}>
        AnteHub requires to connect with your MetaMask Accounts
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          marginTop: 6
        }}
      >
        <Box sx={{ textAlign: 'center', marginY: 10 }}>
          {status === MetaMaskStatus.NETWORK_RECEIVED && (
            <Fragment>
              <Button onClick={() => dispatch(fetchMetaMaskAccounts())}>
                {dynamicLogo(120)}
              </Button>
              <Typography sx={{ fontFamily: 'DM Mono', textAlign: 'center' }}>
                Click on the MetaMask Logo to login
              </Typography>
            </Fragment>
          )}
          {status === MetaMaskStatus.ACCOUNTS_RECEIVED && (
            <Typography sx={{ fontFamily: 'DM Mono' }}>
              Antehub is now connected with your MetaMask Wallet
            </Typography>
          )}
          {status === MetaMaskStatus.ACCOUNTS_REQUEST_PENDING && (
            <Typography sx={{ fontFamily: 'DM Mono' }}>
              Connecting to MetaMask, please wait...
            </Typography>
          )}
          {status === MetaMaskStatus.FAILED && (
            <Fragment>
              <Typography sx={{ fontFamily: 'DM Mono' }}>
                Please install&nbsp;
                <a
                  href='https://metamask.io/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  MetaMask
                </a>
                &nbsp;and try again!
              </Typography>
              <Typography sx={{ fontFamily: 'DM Mono' }}>
                If Metamask is already installed, you might have multiple
                wallets installed.
              </Typography>
            </Fragment>
          )}
        </Box>
      </Box>
    </Fragment>
  )
}

export default Login
